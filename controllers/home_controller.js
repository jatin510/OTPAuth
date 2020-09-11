const env = require("../config/environment");
const client = require("twilio")(env.accountSID, env.authToken);

module.exports.login = (req, res) => {
  return res.render("home", {
    title: "login",
  });
};

module.exports.createOTP = function (req, res) {
  client.verify
    .services(env.serviceId)
    .verifications.create({
      to: `+${req.body.phoneNumber}`,
      channel: "sms",
    })
    .then((data) => {
      console.log(data);
    });

  //   console.log("req.body", req.body);

  return res.redirect(`/verify/?phoneNumber=${req.body.phoneNumber}&type=sms`);
};
