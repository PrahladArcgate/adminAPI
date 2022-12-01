'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define(
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
      timestamps: true,
      paranoid: true
    }
  );

  Permission.associate = (models) => {
    Permission.hasMany(models.permissions_admin_map,{
      foreignKey: "permitId"
    })
  };


  return Permission;
} 