const express = require("express");
const router = express.Router();

const getStartedController = require("../controllers/getStarted_controller");

router.use("/", getStartedController.homePage);

module.exports = router;
