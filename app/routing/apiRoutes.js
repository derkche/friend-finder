var friends = require("../data/friends");

module.exports = function(app) {

  // this route will serve-up all friends when visited
  app.get("/api/friends", function(request, response) {
    response.json(friends);
  });

  // this route will handle when a user finishes their survey and the logic for matching
  app.post("/api/friends", function(request, response) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    var userData = request.body;
    var userScores = userData.scores;

    var matchDifference;

    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      matchDifference = 0;
      console.log(currentFriend.name);
      for (var ii = 0; ii < currentFriend.scores.length; ii++) {
        var currentFriendScore = currentFriend.scores[ii];
        var currentUserScore = userScores[ii];

        matchDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }
      if (matchDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = matchDifference;
      }
    }
    friends.push(userData);
    response.json(bestMatch);
  });
};
