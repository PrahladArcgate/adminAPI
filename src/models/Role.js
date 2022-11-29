const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Role.belongsTo(models.User,{foreginKey:'user_id',targetKey:'uuid'});
            // define association here
          //  User.belongsTo(models.agency, { foreignKey: 'agency_id', targetKey: 'id' });
        }
    }
    Role.init(
            {
            uuid: DataTypes.UUID,
            user_id:DataTypes.UUID,
            Custom: DataTypes.STRING,
            Junior_Admin: DataTypes.STRING,
            Senior_Admin: DataTypes.STRING,
            Super_Admin: DataTypes.STRING,
           
        },
        {
            sequelize,
            modelName: 'Role',
            underscored: true,
        },
    );
    return Role;
};