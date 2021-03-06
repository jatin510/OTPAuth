const express = require("express");
const router = express.Router();

const verifyController = require("../controllers/verify_controller");

router.get("/", verifyController.verifyPage);
router.post("/check-otp", verifyController.checkOTP);
router.get("/resend-otp", verifyController.resendOTP);

module.exports = router;
