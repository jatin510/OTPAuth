const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.login);
router.post("/create-otp", homeController.createOTP);

router.use("/verify", require("./verify"));
router.use("/get-started", require("./get-started"));

module.exports = router;
