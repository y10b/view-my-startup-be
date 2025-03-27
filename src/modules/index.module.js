const express = require("express");
const companiesRouter = require("./companies.module");
const investmentRouter = require("./investment.module");

const router = express.Router();

router.use("/api/companies", companiesRouter);
router.use("/api/companies", investmentRouter);

router.get("/health-check", (req, res) => {
  res.status(200).send("OK");
});

module.exports = router;