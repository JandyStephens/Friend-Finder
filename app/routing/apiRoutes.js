var express = require("express");
var router = express.Router();
var friends = require("../data/friends.js");
// console.log(friends);

//serves friends.js page when user requests list of friends
router.get("/view-friends", function(req, res) {
  res.json(friends);
});

//creates new friend data and pushes to friends.js
router.post("/friends", function(req, res) {
  var newFriend = req.body;
  // console.log(req.body.scores);

  var bestMatch = {
    name: "",
    photo: "",
    score: Infinity
  };

  // for(let i=0;i<friends.length;i++){
  //   friends[i].scores        req.body.scores
  // }

  //Nested for loop, one to go over user and one to go over other scores (inner loop)
  // Logic to compare existing friends
  friends.forEach(eaFriend => {
    var scoreDifference = 0;
    eaFriend.scores.forEach((eaFriendScore, index) => {
      scoreDifference += Math.abs(eaFriendScore - req.body.scores[index]);
    });
    if (scoreDifference < bestMatch.score) {
      //adding new field to object
      eaFriend.score = scoreDifference;
      bestMatch = eaFriend;
    }
  });
  console.log(bestMatch);
  //Add new user to friends array (on friends.js)
  friends.push(req.body);
  res.json(bestMatch);

  // req.body.scores.forEach(eaUserScore)

  // TODO:Take info and display modal
});

module.exports = router;
