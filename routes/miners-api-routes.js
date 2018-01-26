// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the miners
    app.get("/api/miners", function (req, res) {
        var query = {};
        if (req.query.pool_id) {
            query.PoolId = req.query.pool_id;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Miner
        db.topMiners.findAll({
            where: query
            ,
            include: [db.Pool]
        }).then(function (dbtopMiner) {
            res.json(dbtopMiner);
        });
    });

    // Get route for retrieving a single history
    app.get("/api/Pool/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Miner
        db.Pool.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Miner]
        }).then(function (dbPool) {
            res.json(dbPool);
        });
    });

    // POST route for saving a new post
    app.post("/api/miners/", function (req, res) {
        
        for (i = 0; i < req.body.data.length; i++) {
            var data = req.body.data[i];
            db.history.create(data).then(function (dbhistory) {
                res.json(dbhistory);
            });
        }
        //pushing data in active miners
        $("#active-miners").html(req.body.data);
    });

    // // DELETE route for deleting history
    // app.delete("/api/history/:id", function (req, res) {
    //     db.history.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (dbhistory) {
    //         res.json(dbhistory);
    //     });
    // });

    // // PUT route for updating history
    // app.put("/api/history", function (req, res) {
    //     db.history.update(
    //         req.body,
    //         {
    //             where: {
    //                 id: req.body.id
    //             }
    //         }).then(function (dbPost) {
    //             res.json(dbPost);
    //         });
    // });
};
