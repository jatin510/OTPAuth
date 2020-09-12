const express = require("express");
const port = 8000;
// const expressLayouts = require("express-ejs-layouts");
const env = require("./config/environment");
const client = require("twilio")(env.accountSID, env.authToken);

const app = express();

app.use(express.urlencoded());

app.use(express.static("./assets"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("error in starting the server", err);
  }

  console.log(`Server is running on port: ${port}`);
});
