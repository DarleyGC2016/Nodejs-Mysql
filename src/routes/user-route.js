var express = require("express");
var router = express.Router();

var isAuth = require("../middlewares/authorize").isAuth;
const controller = require("../controller/user-controller");
const controller_comum = require("../controller/comum-controller");

router.get("/", controller.get);

router.get("/add", isAuth, controller.getAdd);

router.post("/add", isAuth, controller_comum.post);

router.get("/edit/:id", isAuth, controller.getEdit);

router.put("/edit/:id", isAuth, controller.putEdit);

router.delete("/delete/:id", isAuth, controller.del);

router.get("/password/:id", isAuth, controller.getPassword);

router.put("/password/:id", isAuth, controller.putPassword);

module.exports = router;
