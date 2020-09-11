const express = require("express");
const port = 8000;
const expressLayouts = require("express-ejs-layouts");

const app = express();

// app.use(expressLayouts);
// // extract style ans scripts from sub pages into the layout
// app.set("layout extractStyles", true);
// app.set("layout extractScripts", true);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("error in starting the server", err);
  }

  console.log(`Server is running on port: ${port}`);
});
