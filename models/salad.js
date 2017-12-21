module.exports = function(sequelize, DataTypes) {
    var Salad = sequelize.define("Salad", {
        topping: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    return Salad;
};
