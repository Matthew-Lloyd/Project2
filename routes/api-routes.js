var db = require("../models");

module.exports = function (app) {

     // GET route for getting all of the Ethermine Pool History
    app.get("/api/Pool", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
        db.Pool.findAll({}).then(function (poolHist) {
            res.json(poolHist)
        });

    });

    app.post("/api/Pool", function (req, res) {
        poolStats = req.body.data.poolStats;
        price = req.body.data.price;
        // console.log(poolStats.data.minedBlocks[0].miner);
        // for (i = 0; i < poolStats.minedBlocks.length; i++) {
        //     poolStats.topMiners.push(poolStats.minedBlocks[i].miner);
        // }
        var poolObj = {
            hashRate: poolStats.hashRate,
            miners: poolStats.miners,
            workers: poolStats.workers,
            blocksPerHour: poolStats.blocksPerHour,
            usd: price.usd,
            btc: price.btc,
        };
        
        // console.log(poolStats.topMiners);
        // console.log(poolStats.poolStats);
        db.Pool.create(poolObj).then(function (dbPool) {
            res.json(dbPool);
        });
    });
};  