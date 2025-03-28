const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const errorHandler = require("../middlewares/errorHandler.middleware")

const companiesRouter = express.Router();

/**
 * 전체 기업 목록 조회
 * GET /companies
 */
companiesRouter.get("/", async (req, res, next) => {
  try {
    const sortKey = req.query.sort;
    let orderByClause = `ORDER BY sub.id ASC`; // 기본 정렬

    if (sortKey) {
      const [field, direction] = sortKey.split("_");

      if (["asc", "desc"].includes(direction)) {
        orderByClause = `ORDER BY sub."${field}" ${direction.toUpperCase()}`;
      }
    }

    const companies = await prisma.$queryRawUnsafe(`
      SELECT sub.*, sub."investmentAmount"
      FROM (
        SELECT
          c.*,
          (SELECT COALESCE(SUM(i.amount), 0)
          FROM "Investment" i
          WHERE i."companyId" = c.id) AS "investmentAmount"
        FROM "Company" c
      ) sub
      ${orderByClause};
    `);

    res.json(companies);
  } catch (e) {
    next(e);
  }
});

/**
 * 단일 기업 상세 조회
 * GET /companies/:id
 */
companiesRouter.get("/:id", errorHandler, async (req, res, next) => {
  try {
    const companyId = Number(req.params.id);

    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });
    if (!company) {
      return res.status(404).json({ message: "회사를 찾을 수 없습니다." });
    }
    res.json(company);
  } catch (e) {
    next(e);
  }
});

/**
 * 기업 생성
 * POST /companies ver.2
 */
companiesRouter.post("/", errorHandler, async (req, res, next) => {
  try {
    const { name, description, category, totalInvestment, revenue, employees } = req.body;
    const companyData = { name, description, category };

    // 필수 값 검증
    if (!name || !description || !category) {
      return res.status(400).json({ message: "필수 필드를 입력해주세요 (name, description, category)" });
    }

    // 이미 동일한 name이 존재하는지 확인
    const existingCompany = await prisma.company.findUnique({
      where: { name },
    });

    if (existingCompany) {
      return res.status(400).json({ message: "이름이 중복된 기업이 존재합니다. 다른 이름을 사용해주세요." });
    }

    // 선택적 값은 제공되었을 때만 포함
    if (totalInvestment !== undefined) companyData.totalInvestment = totalInvestment;
    if (revenue !== undefined) companyData.revenue = revenue;
    if (employees !== undefined) companyData.employees = employees;

    // Prisma를 통해 데이터베이스에 기업 생성
    const newCompany = await prisma.company.create({
      data: companyData,
    });

    // 성공적으로 생성된 기업 객체 반환
    res.status(201).json(newCompany);
  } catch (error) {
    next(error); // 오류가 발생하면 오류 처리 미들웨어로 전달
  }
});


/**
 * 기업 삭제
 * DELETE /companies/:id
 */
companiesRouter.delete("/:id", errorHandler, async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id))
      return res.status(400).json({ message: "잘못된 ID 형식입니다." });

    const result = await prisma.$transaction(async (tx) => {
      const company = await tx.company.findUnique({ where: { id } });
      if (!company) throw new Error("Not Found ID");

      await tx.company.delete({ where: { id } });
      return true;
    });
    if (result) res.status(204).send();
  } catch (e) {
    next(e);
  }
});

/**
 * 기업 수정
 * PUT /companies/:id
 */
companiesRouter.put("/:id", errorHandler, async (req, res, next) => {
  try {
    const { name, description, category, totalInvestment, revenue, employees } =
      req.body;
    const id = Number(req.params.id);

    if (isNaN(id))
      return res.status(400).json({ message: "잘못된 ID 형식입니다." });

    const updatedCompany = await prisma.company.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(category !== undefined && { category }),
        ...(totalInvestment !== undefined && { totalInvestment }),
        ...(revenue !== undefined && { revenue }),
        ...(employees !== undefined && { employees }),
      },
    });
    if (!updatedCompany) throw new Error("Not Found ID");

    res.json(updatedCompany);
  } catch (e) {
    next(e);
  }
});

/**
 * 기업 이름으로 조회
 */
companiesRouter.get("/name/:name", errorHandler, async (req, res, next) => {
  try {
    const { name } = req.params;
    const company = await prisma.company.findUnique({
      where: { name },
    });

    if (!company) {
      return res.status(404).json({ message: "회사가 없어요!" });
    }

    res.json(company);
  } catch (e) {
    next(e);
  }
});

module.exports = companiesRouter;
