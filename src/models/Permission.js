const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    sequelize.define(
    "permission",
    {
      id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      permit: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      tableName: "permission",
      timestamps: true
    }
  );
}