var db = require("../models");

module.exports = function (app) {
    app.get("/api/miners", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.history
        db.Miner.findAll({
            include: [db.history]
        }).then(function (dbMiner) {
            res.json(dbMiner);
        });
    });

    app.get("/api/miner/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.history
        db.Miner.findOne({
            where: {
                id: req.params.id
            },
            include: [db.history]
        }).then(function (dbMiner) {
            res.json(dbMiner);
        });
    });

    app.post("/api/miner", function (req, res) {
        db.Miner.create(req.body).then(function (dbMiner) {
            res.json(dbMiner);
        });
    });
};