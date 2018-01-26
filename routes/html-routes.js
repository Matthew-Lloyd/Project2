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

  app.get("/history", function (req, res) {
    // var minerid = req.params.minerid;
    res.render('history', {title:"history"});
  });

  app.get("/history/:minerId", function (req, res) {
    const params = req.params.minerid;
    return res.render('history',{
      title: "history"
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
};  
