const express = require("express");
const router = express.Router();

const timeController = require("../controller/timeController.js");

router.post("/scheduler", timeController.triggerFunction)

module.exports = router;
