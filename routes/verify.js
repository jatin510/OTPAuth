const express = require("express");
const router = express.Router();

const verifyController = require("../controllers/verify_controller");

router.get("/", verifyController.verifyPage);

module.exports = router;
