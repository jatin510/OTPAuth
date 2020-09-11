const env = require("../config/environment");
const client = require("twilio")(env.accountSID, env.authToken);

module.exports.verifyPage = function (req, res) {
  return res.render("verify", {
    title: "verify",
  });
};

module.exports.checkOTP = async function (req, res) {
  console.log("req.query", req.query);
  console.log("req.body.code", req.body.code);

  await client.verify
    .services(env.serviceId)
    .verificationChecks.create({
      to: req.query.phoneNumber,
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
