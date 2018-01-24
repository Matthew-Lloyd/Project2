//html routes to home Page
//has to create the correct path to link to the html file
var path = require("path");
//=======================================

module.exports = function(app) {
  //html get requests
  //below code handles different pathways for each page
  //in each of the below cases the user is shown an html content.
  //home page path function
  app.get("/", function(req, res){
      res.render("index",{
        title: "title"
      });
  });
  //each app.get is to send to another path
  // app.get("/", function(req, res) {
  //     res.sendFile());
  // });
  app.get("/history", function(req, res){
    res.render("history",{
      title: "title"
    });
});
  // If no matching route is found default to home
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });
};
