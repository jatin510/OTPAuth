const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.SERVICE_ID);
const development = {
  serviceId: process.env.SERVICE_ID,
  accountSID: process.env.ACC_SID,
  authToken: process.env.AUTH_TOKEN,
};

module.exports = development;
