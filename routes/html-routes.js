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
  
  app.get("/history", function(req, res){
    res.render("history",{
      title: "title"
    });
  });

  app.get("/history/:minerId", function(req,res){
    const param = req.params.minerid;
    res.render("history", {
      title: "history"
    });
  });

  app.get("/developers", function(req, res){
    res.render("developers",{
      title: "title"
    });    
  });
  
  //getting route
  // app.get("/history:minerid", function(req, res) {
  //   var condition = "id = " + req.params.id;
  
  //   id.all(condition, function(result) {
  //     if (result.affectedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });

};//ending of exports  


