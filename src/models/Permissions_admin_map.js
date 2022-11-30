const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    sequelize.define(
    "permissions_admin_map",
    {
      id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      permit_fk: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      admin_fk: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      tableName: "permissions_admin_map",
      timestamps: true
    }
  );
}