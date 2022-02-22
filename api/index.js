const express = require('express');
const router = express.Router();

const locationsRouter = require("./locations.api");
router.use('/locations', locationsRouter)

module.exports = router;
