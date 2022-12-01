'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Permissions_admin_map = sequelize.define(
    "permissions_admin_map",
    {
      id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      permit_fk: {
        type: DataTypes.INTEGER(255),
        allowNull: false
      },
      admin_fk: {
        type: DataTypes.INTEGER(255),
        allowNull: false
      }
    },
    {
      tableName: "permissions_admin_map",
      timestamps: true,
      paranoid: true
    }
  );

  Permissions_admin_map.associate = (models) => {
    Permissions_admin_map.belongsTo(models.admin,{
      foreignKey: "adminId"
    })
  };

  Permissions_admin_map.associate = (models) => {
    Permissions_admin_map.belongsTo(models.permission,{
      foreignKey: "permitId"
    })
  };


  return Permissions_admin_map;
} 