var path = require("path");

module.exports = function(app){

    app.get("/survey", function(request, result){
        result.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(request, response){
        result.sendFile(path.join(__dirname, "../public/home.html"));
    });

}