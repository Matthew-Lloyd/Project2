module.exports = function (sequelize, DataTypes) {
    var Pool = sequelize.define("Pool", {
        hashRate: {
            type: DataTypes.DECIMAL(16, 2),
            allowNull: false,
        },
        miners: {
            type: DataTypes.DECIMAL(16, 2),
            allowNull: false,
        },
        workers: {
            type: DataTypes.DECIMAL(16, 2),
            allowNull: false,
        },
        blocksPerHour: {
            type: DataTypes.DECIMAL(16, 2),
            allowNull: false,
        },
        usd: {
            type: DataTypes.DECIMAL(16, 2),
            allowNull: false,
        },
        btc: {
            type: DataTypes.DECIMAL(16, 2),
            allowNull: false,
        },
    });
    // Pool.associate = function (models) {
    //     // Associating Pool with Posts
    //     // When an Pool is deleted, also delete any associated Posts
    //     Pool.hasMany(models.topMiners, {
    //         onDelete: "cascade"
    //     });
    // };
    return Pool;
};