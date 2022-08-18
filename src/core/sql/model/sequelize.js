const Sequelize = require('sequelize');
const config = require("./../../../config").getConfig();

const sequelize = new Sequelize(config.SQL.DATABASE, config.SQL.USER, config.SQL.PASSWORD, {
  host: config.SQL.HOST,
  dialect: 'mysql',
  logging: true
});

module.exports = {
  sequelize, Sequelize
};