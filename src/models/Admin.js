'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "admin",
    {
      id_new: {
        type: DataTypes.INTEGER()
      },
      user_id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      role_id: {
        type: DataTypes.STRING(255),
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
        foreignKey: "user_id"
      })
    };



  return Admin;
};
