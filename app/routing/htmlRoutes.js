var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function(req, res) {
  res.send("This will be home page");
});

router.get("/survey", function(req, res) {
  res.send("This will be survey page");
});

module.exports = router;
