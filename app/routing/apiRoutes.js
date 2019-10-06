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

  var bestMatch = {
    name: "",
    photo: "",
    score: Infinity
  };

  // for(let i=0;i<friends.length;i++){
  //   friends[i].scores        req.body.scores
  // }

  friends.forEach(eaFriend => {
    var scoreDifference = 0;
    eaFriend.scores.forEach((eaFriendScore, index) => {
      scoreDifference += Math.abs(eaFriendScore - res.body.scores[index]);
    });
    if (scoreDifference < bestMatch.score) {
      //adding new field to object
      eaFriend.score = scoreDifference;
      bestMatch = eaFriend;
    }
  });

  // req.body.scores.forEach(eaUserScore)

  // TODO:Nested for loop, one to go over friends and one to go over scores (inner loop)
  // Logic to compare existing friends
  // Take info and display modal

  //   friends.push(newFriend);
  //   res.json(newFriend);
});

module.exports = router;
