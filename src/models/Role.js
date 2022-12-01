'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define(
      "role",
      {
        id: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        role_name: {
          type: DataTypes.STRING(255),
          allowNull: false
        }
      },
      {
        tableName: "role",
        timestamps: true,
        paranoid: true
      });

      Role.associate = (models) => {
        Role.hasMany(models.admin,{
          foreignKey: "roleId"
        })
      };
      


      return Role;
}
