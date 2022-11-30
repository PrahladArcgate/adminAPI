const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    sequelize.define(
      "role",
      {
        id: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        role_name: {
          type: DataTypes.INTEGER(),
          allowNull: false
        }
      },
      {
        tableName: "role",
        timestamps: true
      }
    );
}
