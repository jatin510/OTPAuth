const env = require("../config/environment");
const store = require("store");
const request = require("request");
const client = require("twilio")(env.accountSID, env.authToken);

module.exports.verifyPage = function (req, res) {
  const phone = store.get("phone").phone;

  return res.render("verify", {
    title: "verify",
    phone: phone,
  });
};

module.exports.checkOTP = async function (req, res) {
  // console.log("req.query", req.query.phoneNumber);
  // console.log("req.body.code", req.body.code);

  const phone = store.get("phone").phone;

  console.log("phone", phone);

  await client.verify
    .services(env.serviceId)
    .verificationChecks.create({
      to: `+${phone}`,
      code: req.body.code,
    })
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => {
      console.log("Error", err);
      return res.redirect("back");
    });

  //   console.log("verification completed");

  return res.redirect("/get-started");
};

module.exports.resendOTP = (req, res) => {
  const phone = store.get("phone").phone;

  console.log("verify ");

  client.verify
    .services(env.serviceId)
    .verifications.create({
      to: `+${phone}`,
      channel: "sms",
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("error in creating otp", err);
      return res.redirect("back");
    });

  return res.render("verify", {
    title: "verify",
    phone: phone,
  });
};
