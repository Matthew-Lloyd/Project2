module.exports = function (sequelize, DataTypes) {
    var Pool = sequelize.define("Pool", {
        hashRate: {
            type: DataTypes.DECIMAL(20, 20),
            allowNull: false,
        },
        miners: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        workers: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        blocksPerHour: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        priceUSD: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        priceBTC: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
    });
    Pool.associate = function (models) {
        // Associating Pool with Posts
        // When an Pool is deleted, also delete any associated Posts
        Pool.hasMany(models.topMiners, {
            onDelete: "cascade"
        });
    };
    return Pool;
};