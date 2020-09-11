const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.login);
router.post("/create-otp", homeController.createOTP);

module.exports = router;
