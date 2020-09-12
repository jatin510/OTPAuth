const env = require("../config/environment");
const store = require("store");
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
