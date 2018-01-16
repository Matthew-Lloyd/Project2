module.exports = function (sequelize, DataTypes) {
    var model = sequelize.define("model", {
        col1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        col2: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        col3: {
            type: DataTypes.STRING,
            defaultValue: "Placeholder"
        }
    });
    return model;
};