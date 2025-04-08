const express = require("express");
const prisma = require("../db/prisma/client.prisma");
const errorHandler = require("../middlewares/errorHandler.middleware");

const companiesRouter = express.Router();

/**
 * 전체 기업 목록 조회
 * GET /companies
 */
companiesRouter.get("/", async (req, res, next) => {
  try {
    const { sort, ids } = req.query;

    let whereClause = "";
    let queryParams = [];

    if (ids) {
      const idArray = ids
        .split(",")
        .map(Number)
        .filter((id) => !isNaN(id));

      if (idArray.length > 0) {
        whereClause = `WHERE sub.id IN (${idArray.join(",")})`;
        queryParams = idArray;
        console.log(whereClause);
      }
    }

    let orderByClause = `ORDER BY sub.id ASC`;

    if (sort) {
      const [field, direction] = sort.split("_");
      if (["asc", "desc"].includes(direction)) {
        orderByClause = `ORDER BY sub."${field}" ${direction.toUpperCase()}`;
      }
    }

    const companies = await prisma.$queryRawUnsafe(`
      SELECT sub.*, sub."investmentAmount"
      FROM (
        SELECT
          c.*,
          (SELECT COALESCE(SUM(i."investedAmount"), 0)
          FROM "Investment" i
          WHERE i."companyId" = c.id) AS "investmentAmount"
        FROM "Company" c
      ) sub
      ${whereClause}
      ${orderByClause};
    `);

    res.json(companies);
  } catch (e) {
    next(e);
  }
});

/**
 * 기업 추가 API
 * POST
 */
companiesRouter.post("/", async (req, res, next) => {
  try {
    const {
      companyName,
      description,
      category,
      realInvestmentAmount,
      revenue,
      employeesNumber,
      selectedNumber,
      comparedNumber,
      imageUrl,
    } = req.body;

    // 필수 값 검증
    if (!companyName || !description || !category) {
      return res.status(400).json({
        success: false,
        message:
          "필수 필드를 입력해주세요 (companyName, description, category)",
      });
    }

    // 이미 동일한 name이 존재하는지 확인
    const existingCompany = await prisma.company.findUnique({
      where: { companyName },
    });

    if (existingCompany) {
      return res.status(400).json({
        success: false,
        message: "이름이 중복된 기업이 존재합니다. 다른 이름을 사용해주세요.",
      });
    }

    // 회사 데이터 객체에 필수 필드와 선택적 필드 추가
    const companyData = {
      companyName,
      description,
      category,
      realInvestmentAmount: realInvestmentAmount || 0,
      revenue: revenue || 0,
      employeesNumber: employeesNumber || 0,
      selectedNumber: selectedNumber || 0,
      comparedNumber: comparedNumber || 0,
      imageUrl: imageUrl || null, // 이미지 URL이 제공되지 않으면 null
    };

    // Prisma를 통해 데이터베이스에 기업 생성
    const newCompany = await prisma.company.create({
      data: companyData,
    });

    // 성공적으로 생성된 기업 객체 반환
    res.status(201).json({
      success: true,
      message: "기업이 성공적으로 생성되었습니다.",
      data: newCompany, // 생성된 기업 데이터를 data 필드로 반환
    });
  } catch (error) {
    next(error); // 오류가 발생하면 오류 처리 미들웨어로 전달
  }
});

/**
 * 기업 비교 선택 카운트 증가
 * POST /companies/increase-selection
 */
companiesRouter.post("/increase-selection", async (req, res, next) => {
  try {
    const { myCompanyId, compareCompanyIds } = req.body;

    if (!myCompanyId || !Array.isArray(compareCompanyIds)) {
      return res
        .status(400)
        .json({ message: "myCompanyId와 compareCompanyIds가 필요합니다." });
    }

    //나의 기업 카운트 증가
    await prisma.company.update({
      where: { id: myCompanyId },
      data: {
        selectedNumber: { increment: 1 },
      },
    });

    //비교 기업들 카운트 증가
    await prisma.company.updateMany({
      where: {
        id: {
          in: compareCompanyIds,
        },
      },
      data: {
        comparedNumber: {
          increment: 1,
        },
      },
    });

    res.status(200).json({ message: "기업 선택 카운트 증가 완료" });
  } catch (e) {
    console.error("기업 선택 카운트 증가 실패:", e);
    next(e);
  }
});

/**
 * 기업 삭제
 * DELETE /companies/:companyId
 */
companiesRouter.delete("/:companyId", async (req, res, next) => {
  try {
    const companyId = Number(req.params.companyId);

    if (isNaN(companyId))
      return res.status(400).json({ message: "잘못된 ID 형식입니다." });

    const result = await prisma.$transaction(async (tx) => {
      const company = await tx.company.findUnique({ where: { id: companyId } });
      if (!company) throw new Error("Not Found ID");

      await tx.company.delete({ where: { id: companyId } });
      return true;
    });
    if (result) res.status(204).send();
  } catch (e) {
    next(e);
  }
});

/**
 * 기업 수정
 * PUT /companies/:companyId
 */
companiesRouter.put("/:companyId", async (req, res, next) => {
  try {
    const companyId = Number(req.params.companyId);
    if (isNaN(companyId))
      return res.status(400).json({ message: "잘못된 ID 형식입니다." });

    const updatedCompany = await prisma.company.update({
      where: { id: companyId },
      data: req.body,
    });

    res.json(updatedCompany);
  } catch (e) {
    next(e);
  }
});

// 기업 id로 조회
companiesRouter.get("/:companyId", async (req, res, next) => {
  try {
    const companyId = Number(req.params.companyId);

    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }

    res.json(company);
  } catch (error) {
    next(error);
  }
});

module.exports = companiesRouter;
