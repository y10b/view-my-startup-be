const { PrismaClient } = require("@prisma/client");
const express = require("express")
const prisma = new PrismaClient()

const investmentRouter = express.Router()

/**
 * 기업에 투자 추가(생성)
 */

investmentRouter.post("/:id/investments", async (req, res, next) => {
  try{
    const companyId = Number(req.params.id)
    const {name, password, amount, comment} = req.body
    
    //기업이 있나 확인
    const company = await prisma.company.findUnique({
      where: {id: companyId}
    })

    //없으면 404
    if (!company) {
      return res.status(404).json({ message: "회사를 찾을 수 없습니다." });
    }

    const newInvestment = await prisma.investment.create({
      data: {
        name,
        password,
        amount,
        comment,
        companyId
      }
    })

    res.status(201).json(newInvestment);
  }catch(e){
    next(e)
  }
}) 

/**
 * 투자 금액 리스트 조회
 */
investmentRouter.get("/:id/investments", async(req, res, next) => {
  try{
    const companyId = Number(req.params.id)

    const investments = await prisma.investment.findMany({
      where: {companyId},
      orderBy: {
        amount: 'desc'
      }
    })
    res.status(200).json(investments);
  }catch(e){
    next(e)
  }
})




module.exports = investmentRouter