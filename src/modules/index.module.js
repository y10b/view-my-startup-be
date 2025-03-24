const express = require('express');
const companyRouter = require('./company.module');
const router = express.Router();

router.use('/api', companyRouter);

module.exports = router;