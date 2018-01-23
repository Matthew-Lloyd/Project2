module.exports = function (sequelize, DataTypes) {
    var Miner = sequelize.define("Miner", {
        // Giving the Miner model a name of type STRING
        name: DataTypes.STRING
    });

    Miner.associate = function (models) {
        // Associating Miner with history
        // When an Miner is deleted, also delete any associated history
        Miner.hasMany(models.history, {
            onDelete: "cascade"
        });
    };

    return Miner;
};
