'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) =>{
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      fullName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          isEmail: true
        },
        unique: true
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      is_admin: {
        type: DataTypes.TINYINT(),
        allowNull: false
      }
    },
    {
      tableName: "user",
      timestamps: true,
      paranoid: true
    });

    User.associate = (models) => {
      User.hasMany(models.admin,{
        foreignKey: "userId"
      })
    };


    
    return User;
  };