module.exports.homePage = function (req, res) {
  return res.render("get_started", {
    title: "Get Started",
  });
};
