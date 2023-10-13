var express = require("express");
var router = express.Router();

var pool = require("../queries");

router.get("/", function (req, res) {
  pool.query("SELECT * FROM category", (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results.rows);
  });
});
