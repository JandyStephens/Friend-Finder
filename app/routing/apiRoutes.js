var express = require("express");
var router = express.Router();
var friends = require("../data/friends.js");
// console.log(friends);

//serves friends.js page when user requests list of friends
router.get("/friends", function(req, res) {
  res.json(friends);
});

//creates new friend data and pushes to friends.js
router.post("/friends", function(req, res) {
  var newFriend = req.body;
  console.log(req.body.scores);

  var bestFriend = {
    name: "",
    photo: "",
    score: Infinity
  };

  // TODO:Nested for loop, one to go over friends and one to go over scores (inner loop)
  // Logic to compare existing friends
  // Take info and display modal

  //   friends.push(newFriend);
  //   res.json(newFriend);
});

module.exports = router;
