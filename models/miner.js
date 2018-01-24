module.exports = function (sequelize, DataTypes) {
    var topMiners = sequelize.define("topMiners", {
        // Giving the topMiners model a name of type STRING
        miner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blockNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        time: {
            type: DataTypes.BIGINT(100),
        }
    });    
    topMiners.associate = function (models) {
        // We're saying that a topMiners should belong to an Pool
        // A topMiners can't be created without an Pool due to the foreign key constraint
        topMiners.belongsTo(models.Pool, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return topMiners;
};
