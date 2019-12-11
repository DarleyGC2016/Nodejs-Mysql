const db = require("../db");

exports.putPassword = (req, res, next) => {
  const { id } = req.params;

  if (req.body.senha !== req.body.confirmaSenha) {
    res.render("error", {
      error: "Senhas não conferem!"
    });
    return;
  }

  req.body.senha = bcrypt.hashSync(req.body.senha, 10);
  delete req.body.confirmaSenha;

  console.log(req.body);

  db("login_usuario")
    .where("id_usuario", id)
    .update(req.body)
    .then(result => {
      if (result === 0) {
        res.render(error, {
          error: result
        });
      }
      // res.redirect('/edit/' + id);
      res.redirect("/");
    }, next);
};

exports.getPassword = (req, res, next) => {
  const { id } = req.params;

  db("login_usuario")
    .where("id_usuario", id)
    .first()
    .then(user => {
      if (!user) {
        return res.send(400);
      }

      res.render("password", {
        usuario: user
      });
    }, next);
};

exports.del = (req, res, next) => {
  const { id } = req.params;

  db("login_usuario")
    .where("id_usuario", id)
    .delete()
    .then(result => {
      if (result === 0) {
        return res.send(400);
      }
      res.redirect("/");
    }, next);
};

exports.putEdit = (req, res, next) => {
  const { id } = req.params;

  req.body.ativo = !req.body._ativo ? 0 : 1;
  delete req.body._ativo;

  db("login_usuario")
    .where("id_usuario", id)
    .update(req.body)
    .then(result => {
      if (result === 0) {
        return res.send(400);
      }
      res.redirect("/");
    }, next);
};
exports.getEdit = (req, res, next) => {
  const { id } = req.params;

  db("login_usuario")
    .where("id_usuario", id)
    .first()
    .then(user => {
      if (!user) {
        return res.send(400);
      }

      res.render("edit", {
        usuario: user,
        _ativo: user.ativo == 1 ? "checked" : ""
      });
    }, next);
};

exports.getAdd = (req, res, next) => {
  res.render("add", {
    isAuth: req.isAuthenticated(),
    action: "/add"
  });
};

exports.get = (req, res, next) => {
  db("login_usuario").then(usuario => {
    res.render("index", {
      usuarios: usuario,
      isAuth: req.isAuthenticated()
    });
  }, next);
};
