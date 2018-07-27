var friendData = require("../data/friend");

module.exports = function(app){

    app.get("/api/friends", function(request, result){
        result.json(friends);
    });

    app.post("api/friends", function(request, result){
        friends.push(request.body);
        result.json(true);
    });


};