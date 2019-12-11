var knex = require("knex");

var db = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "projeto"
  }
});

module.exports = db;
