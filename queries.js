var Pool = require("pg").Pool;
var pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dvd_rental",
  password: "420240",
  port: "5432",
});

module.exports = pool;
