const express = require("express");
const prisma = require("../db/prisma/client.prisma");
const bcrypt = require("bcrypt");

const investmentRouter = express.Router();

/**
 * 기업에 투자 추가(생성)
 */
investmentRouter.post("/", async (req, res, next) => {
  try {
    const companyId = Number(req.query.companyId);
    const { investorName, accessCode, investedAmount, comment } = req.body;

    // 회사 존재 여부 확인
    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      return res.status(404).json({ message: "회사를 찾을 수 없습니다." });
    }

    // 비밀번호 해시화
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(accessCode, saltRounds);

    // 투자 정보 저장
    const newInvestment = await prisma.investment.create({
      data: {
        investorName,
        accessCode: hashedPassword,
        investedAmount,
        comment,
        companyId,
      },
    });

    res.status(201).json(newInvestment);
  } catch (e) {
    next(e);
  }
});

/**
 * 투자 금액 리스트 조회
 */
investmentRouter.get("/", async (req, res, next) => {
  try {
    const companyId = Number(req.query.companyId);

    const investments = await prisma.investment.findMany({
      where: { companyId },
      orderBy: {
        investedAmount: "desc",
      },
    });
    res.status(200).json(investments);
  } catch (e) {
    next(e);
  }
});

/**
 * 투자 내역 수정
 */
investmentRouter.patch("/:investmentId", async (req, res) => {
  const { investmentId } = req.params;
  const { investorName, investedAmount, comment, accessCode } = req.body;

  try {
    const investment = await prisma.investment.findUnique({
      where: { id: parseInt(investmentId) },
    });

    if (!investment) {
      return res
        .status(404)
        .json({ message: "투자 정보가 존재하지 않습니다." });
    }

    let hashedPassword = investment.accessCode;
    if (accessCode) {
      const saltRounds = 10;
      hashedPassword = await bcrypt.hash(accessCode, saltRounds);
    }

    const updatedInvestment = await prisma.investment.update({
      where: { id: parseInt(investmentId) },
      data: {
        investorName,
        investedAmount,
        comment,
        accessCode: hashedPassword,
      },
    });

    res.status(200).json(updatedInvestment);
  } catch (error) {
    res.status(500).json({ message: "서버에서 오류가 발생했습니다." });
  }
});

/**
 * 투자 내역 삭제
 */
investmentRouter.delete("/:investmentId", async (req, res, next) => {
  try {
    const { investmentId } = req.params;
    const { accessCode } = req.body;

    const investment = await prisma.investment.findUnique({
      where: { id: Number(investmentId) },
    });

    if (!investment) {
      return res.status(404).json({ message: "투자 내역이 없습니다." });
    }

    // 비밀번호 검증 하고, 틀리면 No 삭제
    const isValid = await bcrypt.compare(accessCode, investment.accessCode);
    if (!isValid) {
      return res.status(401).json({ message: "비밀번호가 틀렸습니다." });
    }

    // 비밀번호가 맞으면 삭제
    await prisma.investment.delete({
      where: { id: Number(investmentId) },
    });

    res.status(200).json({ message: "투자 내역이 성공적으로 삭제되었습니다." });
  } catch (e) {
    next(e);
  }
});

// 투자 비밀번호 확인 요청청
investmentRouter.post("/:investmentId/accessCode", async (req, res, next) => {
  try {
    const { investmentId } = req.params;
    const { accessCode } = req.body;

    const investment = await prisma.investment.findUnique({
      where: { id: Number(investmentId) },
    });

    if (!investment) {
      return res.status(404).json({ message: "투자 내역이 없습니다." });
    }

    const isValid = await bcrypt.compare(accessCode, investment.accessCode);
    if (!isValid) {
      return res.status(401).json({ message: "비밀번호가 틀렸습니다." });
    }

    res.status(200).json({ message: "비밀번호 확인 완료" });
  } catch (e) {
    next(e);
  }
});

module.exports = investmentRouter;
