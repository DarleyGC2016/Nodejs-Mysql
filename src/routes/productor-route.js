var express = require("express");
const router = express.Router();
var isNotAuth = require("../middlewares/authorize").isNotAuth;
const controller = require("../controller/productor-controller");

/**
 * Objetivo: get productor for page produto_add
 */
router.get("/", isNotAuth, controller.get);

/**
 * Objetivo: inserir dados no banco de dados
 */
router.post("/", isNotAuth, controller.post);

router.get("/listProdutos", isNotAuth, controller.getAllProduct);
module.exports = router;
