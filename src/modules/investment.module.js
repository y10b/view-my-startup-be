const { PrismaClient } = require("@prisma/client");
const express = require("express");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

const investmentRouter = express.Router();

/**
 * 기업에 투자 추가(생성)
 */

investmentRouter.post("/:id/investments", async (req, res, next) => {
  try {
    const companyId = Number(req.params.id);
    const { name, password, amount, comment } = req.body;

    // 기업이 존재하는지 확인
    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      return res.status(404).json({ message: "회사를 찾을 수 없습니다." });
    }

    // 비밀번호 해시화
    const saltRounds = 10;
    console.log("원본 비밀번호:", password); // 해시화 전에 비밀번호 출력
    const hashedPassword = await bcrypt.hash(password, saltRounds); // 비밀번호 해시화
    console.log("해시화된 비밀번호:", hashedPassword); // 해시화된 비밀번호 출력

    const newInvestment = await prisma.investment.create({
      data: {
        name,
        password: hashedPassword, // 해시화된 비밀번호 저장
        amount,
        comment,
        companyId,
      },
    });
    console.log(newInvestment);
    res.status(201).json(newInvestment);
  } catch (e) {
    next(e);
  }
});

/**
 * 투자 금액 리스트 조회
 */
investmentRouter.get("/:id/investments", async (req, res, next) => {
  try {
    const companyId = Number(req.params.id);

    const investments = await prisma.investment.findMany({
      where: { companyId },
      orderBy: {
        amount: "desc",
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
investmentRouter.patch(
  "/:id/investments/:investmentId",
  async (req, res, next) => {
    try {
      const investmentId = Number(req.params.investmentId);
      const { amount, comment } = req.body;

      //투자 내역이 있나 찾기
      const investment = await prisma.investment.findUnique({
        where: { id: investmentId },
      });
      if (!investment) {
        return res.status(404).json({ message: "투자 내역이 없습니다." });
      }

      const updateInvestment = await prisma.investment.update({
        where: { id: investmentId },
        data: {
          amount: amount || investment.amount,
          comment: comment || investment.comment,
        },
      });
      res.status(200).json(updateInvestment);
    } catch (e) {
      next(e);
    }
  }
);

/**
 * 투자 내역 삭제
 */
investmentRouter.delete("/:id/investments/:investmentId", async (req, res, next) => {
  try {
    const { investmentId } = req.params;
    const { password } = req.body; 

    const investment = await prisma.investment.findUnique({
      where: { id: Number(investmentId) },
    });

    if (!investment) {
      return res.status(404).json({ message: "투자 내역이 없습니다." });
    }

    // 비밀번호 검증 하고, 틀리면 No 삭제
    const isValid = await bcrypt.compare(password, investment.password);
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
investmentRouter.post(
  "/:id/investments/:investmentId/password",
  async (req, res, next) => {
    try {
      const { investmentId } = req.params;
      const { password } = req.body;

      const investment = await prisma.investment.findUnique({
        where: { id: Number(investmentId) },
      });

      if (!investment) {
        return res.status(404).json({ message: "투자 내역이 없습니다." });
      }

      const isValid = await bcrypt.compare(password, investment.password);
      if (!isValid) {
        return res.status(401).json({ message: "비밀번호가 틀렸습니다." });
      }

      res.status(200).json({ message: "비밀번호 확인 완료" });
    } catch (e) {
      console.error("서버 오류:", e);
      next(e);
    }
  }
);



module.exports = investmentRouter;
