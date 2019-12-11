# Nodejs-Mysql
--
-- Table structure for table `login_autorizacao`
--

DROP TABLE IF EXISTS `login_autorizacao`;
CREATE TABLE `login_autorizacao` (
  `id_autorizacao` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `classificacao` varchar(100) DEFAULT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `ativo` tinyint(1) DEFAULT '1',
  `versao` int(11) DEFAULT '0',
  PRIMARY KEY (`id_autorizacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `login_perfil`
--

DROP TABLE IF EXISTS `login_perfil`;
CREATE TABLE `login_perfil` (
  `id_perfil` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `descricao` varchar(20) DEFAULT NULL,
  `notificar_inclusao_usuario` tinyint(4) DEFAULT '0',
  `ativo` tinyint(1) DEFAULT '1',
  `versao` int(11) DEFAULT '0',
  PRIMARY KEY (`id_perfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Table structure for table `login_perfil_autorizacao`
--

DROP TABLE IF EXISTS `login_perfil_autorizacao`;
CREATE TABLE `login_perfil_autorizacao` (
  `id_perfil` int(10) unsigned NOT NULL,
  `id_autorizacao` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id_perfil`,`id_autorizacao`),
  KEY `fk_perfil_autorizacao_autorizacao` (`id_autorizacao`),
  CONSTRAINT `fk_perfil_autorizacao_autorizacao` FOREIGN KEY (`id_autorizacao`) REFERENCES `login_autorizacao` (`id_autorizacao`),
  CONSTRAINT `fk_perfil_autorizacao_perfil` FOREIGN KEY (`id_perfil`) REFERENCES `login_perfil` (`id_perfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Table structure for table `login_usuario`
--

DROP TABLE IF EXISTS `login_usuario`;
CREATE TABLE `login_usuario` (
  `id_usuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `login` varchar(30) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(62) NOT NULL,
  `ativo` tinyint(1) DEFAULT '1',
  `versao` int(11) DEFAULT '0',
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Table structure for table `login_usuario_perfil`
--

DROP TABLE IF EXISTS `login_usuario_perfil`;
CREATE TABLE `login_usuario_perfil` (
  `id_usuario` int(10) unsigned NOT NULL,
  `id_perfil` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id_usuario`,`id_perfil`),
  KEY `fk_usuario_perfil_perfil` (`id_perfil`),
  CONSTRAINT `fk_usuario_perfil_perfil` FOREIGN KEY (`id_perfil`) REFERENCES `login_perfil` (`id_perfil`),
  CONSTRAINT `fk_usuario_perfil_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `login_usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
CREATE TABLE `produto` (
  `id_produto` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(62) NOT NULL,
  `qtd_kg` int(11) NOT NULL,
  `qtd_prod` int(11) NOT NULL,
  `qtd_scs` int(11) NOT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Table structure for table `vende`
--

DROP TABLE IF EXISTS `vende`;
CREATE TABLE `vende` (
  `id_usuario` int(10) unsigned NOT NULL,
  `id_produto` int(10) unsigned NOT NULL,
  `qtd_produto` int(11) NOT NULL,
  PRIMARY KEY (`id_usuario`,`id_produto`),
  KEY `fk_produto_vende` (`id_produto`),
  CONSTRAINT `fk_login_usuario_vende` FOREIGN KEY (`id_usuario`) REFERENCES `login_usuario` (`id_usuario`),
  CONSTRAINT `fk_produto_vende` FOREIGN KEY (`id_produto`) REFERENCES `produto` (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

