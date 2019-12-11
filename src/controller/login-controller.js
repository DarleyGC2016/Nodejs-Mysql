const passport = require("passport");

exports.get = (req, res, next) => {
  res.render("login");
};

exports.pass = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/error"
});

exports.getLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
};
