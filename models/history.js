module.exports = function (sequelize, DataTypes) {
    var history = sequelize.define("history", {
        time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reportedHashrate: {
            type: DataTypes.BIGINT(100),
            allowNull: false
        },
        currentHashrate: {
            type: DataTypes.DECIMAL(20, 20),
            allowNull: false
        },
        validShares: {
            type: DataTypes.BIGINT(100),
            allowNull: false
        },
        invalidShares: {
            type: DataTypes.BIGINT(100),
            allowNull: false
        },
        staleShares: {
            type: DataTypes.BIGINT(100),
            allowNull: false
        },
        averageHashrate: {
            type: DataTypes.DECIMAL(20, 20),
            allowNull: false
        },
        activeWorkers: {
            type: DataTypes.BIGINT(100),
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
