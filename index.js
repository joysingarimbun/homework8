var express = require("express");
var app = express();
var pool = require("./queries.js");
var film = require("./query/film.js");

pool.connect((err, res) => {
  console.log(err), console.log("Connect");
});

app.use("/film", film);

app.listen(3000);
