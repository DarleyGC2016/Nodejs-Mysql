exports.get = (req, res, next) => {
  res.render("add", {
    isAuth: req.isAuthenticated(),
    action: "/register"
  });
};
