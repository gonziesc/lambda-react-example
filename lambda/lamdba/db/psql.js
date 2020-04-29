const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

module.exports = sequelize;
