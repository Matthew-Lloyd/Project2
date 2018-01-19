module.exports = function (sequelize, DataTypes) {
    var history = sequelize.define("history", {
        time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reportedHashrate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        currentHashrate: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        validShares: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        invalidShares: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        staleShares: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        averageHashrate: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        activeWorkers: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    // history.associate = function (models) {
    //     // We're saying that a history should belong to a Miner
    //     // A history can't be created without a Miner due to the foreign key constraint
    //     history.belongsTo(models.Miner, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return history;
};