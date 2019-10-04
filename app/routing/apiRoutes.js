var express = require("express");
var router = express.Router();

//create array to hold data
var users = [{}];

//serves friends.js page when user requests list of friends
router.get("/friends", function(req, res) {
  res.json(friends);
});

//creates new friend data and pushes to friends.js
router.post("/friends", function(req, res) {
  var newFriend = req.body;
  friends.push(newFriend);
  res.json(newFriend);
});

module.exports = router;
