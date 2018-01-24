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

    app.post("/api/Pool", function (req, res) {
        poolStats = req.body.data;
        // console.log(poolStats.data.minedBlocks[0].miner);
        for (i = 0; i < poolStats.minedBlocks.length; i++) {
            poolStats.topMiners.push(poolStats.minedBlocks[i].miner);
        }
        console.log(poolStats.topMiners);
        console.log(poolStats.poolStats);
        console.log(poolStats.price);
        db.Pool.create(poolStats.poolStats, poolStats.price.usd, poolStats.price.btc).then(function (dbPool) {
            res.json(dbPool);
        });
    });
};