const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Permission_map extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            //  Permission_map.belongsTo(models.Permission,{foreginKey:'Permission_id',targetKey:'id'});
            //  Permission_map.belongsTo(models.admin,{foreginKey:'admin_id',targetKey:'id'});
          
        }
    }
    Permission_map.init(
        {
            uuid: DataTypes.UUID,
           
        },
        {
            sequelize,
            modelName: 'permission_map',
            underscored: true,
        },
    );
    return Permission_map;
};
