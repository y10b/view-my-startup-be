const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient(); // 한 번만 선언

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
  "/:companyId/investments/:investmentId",
  async (req, res) => {
    const { companyId, investmentId } = req.params;
    const { name, amount, comment, password } = req.body;

    try {
      // 투자 정보가 존재하는지 확인
      const investment = await prisma.investment.findUnique({
        where: { id: parseInt(investmentId) },
      });

      if (!investment) {
        return res
          .status(404)
          .json({ message: "투자 정보가 존재하지 않습니다." });
      }

      // 비밀번호가 주어졌다면, 해시화하여 저장
      let hashedPassword = investment.password; // 기존 비밀번호 그대로 유지
      if (password) {
        const saltRounds = 10;
        hashedPassword = await bcrypt.hash(password, saltRounds); // 새 비밀번호 해시화
      }

      // 수정할 데이터 구성
      const updatedInvestment = await prisma.investment.update({
        where: { id: parseInt(investmentId) },
        data: {
          name,
          amount, // 금액 수정
          comment, // 코멘트 수정
          password: hashedPassword, // 새 비밀번호가 있을 경우 수정
        },
      });

      // 수정된 투자 정보 응답
      res.status(200).json(updatedInvestment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "서버에서 오류가 발생했습니다." });
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
