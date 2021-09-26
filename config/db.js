const { Sequelize } = require('sequelize');

module.exports = new Sequelize("bubble", "tolu-mals", "Malomo2817", {
    host: "localhost",
    dialect: "mysql",
});
  