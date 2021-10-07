const { Sequelize } = require('sequelize');

module.exports = new Sequelize("heroku_9e2fae5c5439226", "b7c744bcb3b952", "0f724838", {
    host: "us-cdbr-east-04.cleardb.com",
    dialect: "mysql",
});
  