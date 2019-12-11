 MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema projeto
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema projeto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projeto` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `projeto` ;

-- -----------------------------------------------------
-- Table `projeto`.`login_autorizacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto`.`login_autorizacao` (
  `id_autorizacao` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `classificacao` VARCHAR(100) NULL DEFAULT NULL,
  `descricao` VARCHAR(200) NULL DEFAULT NULL,
  `ativo` TINYINT(1) NULL DEFAULT '1',
  `versao` INT(11) NULL DEFAULT '0',
  PRIMARY KEY (`id_autorizacao`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projeto`.`login_perfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto`.`login_perfil` (
  `id_perfil` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(20) NULL DEFAULT NULL,
  `notificar_inclusao_usuario` TINYINT(4) NULL DEFAULT '0',
  `ativo` TINYINT(1) NULL DEFAULT '1',
  `versao` INT(11) NULL DEFAULT '0',
  PRIMARY KEY (`id_perfil`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projeto`.`login_perfil_autorizacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto`.`login_perfil_autorizacao` (
  `id_perfil` INT(10) UNSIGNED NOT NULL,
  `id_autorizacao` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id_perfil`, `id_autorizacao`),
  INDEX `fk_perfil_autorizacao_autorizacao` (`id_autorizacao` ASC) VISIBLE,
  CONSTRAINT `fk_perfil_autorizacao_autorizacao`
    FOREIGN KEY (`id_autorizacao`)
    REFERENCES `projeto`.`login_autorizacao` (`id_autorizacao`),
  CONSTRAINT `fk_perfil_autorizacao_perfil`
    FOREIGN KEY (`id_perfil`)
    REFERENCES `projeto`.`login_perfil` (`id_perfil`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projeto`.`login_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto`.`login_usuario` (
  `id_usuario` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL DEFAULT NULL,
  `login` VARCHAR(30) NULL DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(62) NOT NULL,
  `ativo` TINYINT(1) NULL DEFAULT '1',
  `versao` INT(11) NULL DEFAULT '0',
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 52
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projeto`.`login_usuario_perfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto`.`login_usuario_perfil` (
  `id_usuario` INT(10) UNSIGNED NOT NULL,
  `id_perfil` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id_usuario`, `id_perfil`),
  INDEX `fk_usuario_perfil_perfil` (`id_perfil` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_perfil_perfil`
    FOREIGN KEY (`id_perfil`)
    REFERENCES `projeto`.`login_perfil` (`id_perfil`),
  CONSTRAINT `fk_usuario_perfil_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `projeto`.`login_usuario` (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projeto`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto`.`produto` (
  `id_produto` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(62) NOT NULL,
  `qtd_kg` INT(11) NOT NULL,
  `qtd_prod` INT(11) NOT NULL,
  `qtd_scs` INT(11) NOT NULL,
  PRIMARY KEY (`id_produto`))
ENGINE = InnoDB
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projeto`.`vende`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto`.`vende` (
  `id_usuario` INT(10) UNSIGNED NOT NULL,
  `id_produto` INT(10) UNSIGNED NOT NULL,
  `qtd_produto` INT(11) NOT NULL,
  PRIMARY KEY (`id_usuario`, `id_produto`),
  INDEX `fk_produto_vende` (`id_produto` ASC) VISIBLE,
  CONSTRAINT `fk_login_usuario_vende`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `projeto`.`login_usuario` (`id_usuario`),
  CONSTRAINT `fk_produto_vende`
    FOREIGN KEY (`id_produto`)
    REFERENCES `projeto`.`produto` (`id_produto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
