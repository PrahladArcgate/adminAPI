const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            // UUID.belongsTo(User);
            //  Admin.belongsTo(models.User,{foreginKey:'Users_id',targetKey:'id'});
            // define association here
          // User.belongsTo(models.agency, { foreignKey: 'agency_id', targetKey: 'id' });
        }
    }
    User.init(
        {  
            uuid: DataTypes.UUID,
            full_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            is_admin: DataTypes.BOOLEAN,
           
        },
        {
            sequelize,
            modelName: 'user',
            underscored: true,
        },
    );
    return User;
};
