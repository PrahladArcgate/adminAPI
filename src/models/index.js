const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

// const User = require('./User');
// const Admin = require('./Admin');

// Admin.belongsTo(User, {foreignKey: 'user', as: 'User'});

// // Define what associations you need.

// module.exports = {
//     User,
//     Admin,
// };

//  const user=require('./User');
// const Admin=require('./Admin');
// const User = require('./User');



// User.hasMany(user,{
//     foreignKey:'user_id',
//     sourceKey:'id'


// });
// User.belongsTo(user,{
//     foreignKey:'user_id',
//     targetkey:'id'
// })



//  examCategory.ExamCategory.hasMany(exam.Exam, {
//     foreignKey: 'exam_id',
//     sourceKey: 'id'
// });
// exam.Exam.belongsTo( examCategory.ExamCategory, {
//     foreignKey: 'exam_id',
//     targetKey: 'id'
// });
// sequelize.sync();
// sequelize.sync({ force: true });



const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config/database.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
    .filter((file) => {
        return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
    })
    .forEach((file) => {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;
