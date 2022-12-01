'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "admin",
    {
      user_id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      role_id: {
        type: DataTypes.INTEGER(),
        allowNull: false
      }
    },
    {
      tableName: "admin",
      timestamps: true,
      paranoid: true
    });

    Admin.associate = (models) => {
      Admin.belongsTo(models.user,{
        foreignKey: "userId"
      })
    };

    Admin.associate = (models) => {
      Admin.belongsTo(models.role,{
        foreignKey: "roleId"
      })
    };

    Admin.associate = (models) => {
      Admin.hasMany(models.permissions_admin_map,{
        foreignKey: "adminId"
      })
    };

 
  return Admin;
};
