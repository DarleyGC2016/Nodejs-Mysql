var express = require("express");
var router = express.Router();

var isNotAuth = require("../middlewares/authorize").isNotAuth;
const controller_user = require("../controller/comum-controller");
const controller_reg = require("../controller/register-controller");
const controller_login = require("../controller/login-controller");

router.get("/login", isNotAuth, controller_login.get);

router.post("/login", controller_login.pass);

router.get("/logout", controller_login.getLogout);

router.get("/register", isNotAuth, controller_reg.get);

router.post("/register", isNotAuth, controller_user.post);

module.exports = router;
