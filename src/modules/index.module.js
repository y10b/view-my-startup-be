const express = require("express");
const companiesRouter = require("./companies.module");

const router = express.Router();

router.use("/api/companies", companiesRouter);

router.get("/health-check", (req, res) => {
  res.status(200).send("OK");
});

module.exports = router;