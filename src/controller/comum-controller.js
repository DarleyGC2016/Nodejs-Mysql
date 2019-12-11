const db = require("../db");
const bcrypt = require("bcrypt");

exports.post = (req, res, next) => {
  // TODO chamar método post do route /add

  if (req.body.nome === "") {
    res.render("error", {
      error: "Nome está vazio!!" + req.body.nome
    });
    console.log("Nome está vazio" + req.body.nome);
    return;
  }
  if (req.body.login === "") {
    res.render("error", {
      error: "Login está vazio!!" + req.body.login
    });
    return;
  }
  if (req.body.email === "") {
    res.render("error", {
      error: "E-mail está vazio!!" + req.body.email
    });
    return;
  }
  if (req.body.senha === "") {
    res.render("error", {
      error: "Senha está vazia!!" + req.body.senha
    });
    return;
  }
  if (req.body.senha !== req.body.confirmaSenha) {
    res.render("error", {
      error: "Senhas não conferem!"
    });
    return;
  }

  req.body.senha = bcrypt.hashSync(req.body.senha, 10);
  delete req.body.confirmaSenha;

  db("login_usuario")
    .insert(req.body)
    .then(ids => {
      res.redirect("/");
    }, next);
};
