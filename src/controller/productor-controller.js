const db = require("../db");
exports.get = (req, res, next) => {
  res.render("produto_add", {
    isAuth: req.isAuthenticated(),
    action: "/productor"
  });
};
exports.getAllProduct = (req, res, next) => {
  db("produto").then(produto => {
    res.render("produto_list", {
      produtos: produto,
      isNotAuth: req.isAuthenticated()
    });
  }, next);
};
exports.post = (req, res, next) => {
  req.body.qtd_kg = req.body.qtd_kg * req.body.qtd_prod;
  req.body.qtd_scs = req.body.qtd_scs * req.body.qtd_prod;
  db("produto")
    .insert(req.body)
    .then(ids => {
      res.redirect("/");
    }, next);
};
