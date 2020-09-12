const env = require("../config/environment");
const store = require("store");
const client = require("twilio")(env.accountSID, env.authToken);

module.exports.login = (req, res) => {
  return res.render("home", {
    title: "login",
  });
};

module.exports.createOTP = function (req, res) {
  console.log("1", req.body.phoneNumber);

  client.verify
    .services(env.serviceId)
    .verifications.create({
      to: `+${req.body.phoneNumber}`,
      channel: "sms",
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("error in creating otp", err);
      return res.redirect("back");
    });

  store.set("phone", {
    phone: req.body.phoneNumber,
  });

  console.log("req.body", req.body.phoneNumber);

  return res.redirect(`/verify/?phoneNumber=${req.body.phoneNumber}`);
};
