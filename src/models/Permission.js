const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Permission extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
           // Admin.belongsTo(models.Users,{foreginKey:'Users_id',targetKey:'id'});
            // define association here
          //  User.belongsTo(models.agency, { foreignKey: 'agency_id', targetKey: 'id' });
        }
    }
    Permission.init(
        {
            uuid: DataTypes.UUID,
            name: DataTypes.STRING,
            
           
        },
        {
            sequelize,
            modelName: 'permission',
            underscored: true,
        },
    );
    return Permission;
};
