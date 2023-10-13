var express = require("express");
var router = express.Router();
var pool = require("../queries");

router.get("/", function (req, res) {
  pool.query("SELECT * FROM film", (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results.rows);
  });
});

router.get("/:id", function (req, res) {
  pool.query("SELECT * FROM film WHERE film_id = ${req.params.id}"),
    (err, results) => {
      if (err) {
        throw error;
      }
      res.send(result);
    };
});

module.exports = router;
