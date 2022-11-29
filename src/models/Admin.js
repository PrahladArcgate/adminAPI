const { Model } = require('sequelize');
const User = require('../models/User');

// const {user}=require('./User')
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // console.log("++++++++++++++++++++++", Admin)
            // // user_id.belongsTo(Users);
            // Admin.belongsTo(User);
            // Admin.belongsToMany(models.Role,{foreginKey:'Role_id',targetKey:'id'});
            // define association here
          //  User.belongsTo(models.agency, { foreignKey: 'agency_id', targetKey: 'id' });
        }
    }

    Admin.init(
        {  
            uuid: DataTypes.UUID,
            user: DataTypes.UUID,
        },
        {
            sequelize,
            modelName: 'admin',
            underscored: true,
        },
    );
    return Admin;
};
