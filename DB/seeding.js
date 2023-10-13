var pool = require("../queries.js");
var fs = require("fs");

const seedQuery = fs.readFileSync("db/seeding.sql", { encoding: "utf-8" });
pool.query(seedQuery, (err, res) => {
  console.log(err);
  console.log("Complete!");
  pool.end();
});