const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const companyRouter = express.Router();


/**
 * 매출액 높은 순
 */
companyRouter.get("/companies", async (req, res, next) => {
  try {
    const companies = await prisma.company.findMany({
      orderBy: {
        revenue: "desc",
      },
    });

    res.json(companies);
  } catch (e) {
    next(e)
  }
});

module.exports = companyRouter;
