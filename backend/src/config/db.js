const { Sequelize } = require("sequelize");

// Replace root and password with your MySQL credentials
const sequelize = new Sequelize("ratings_app", "root", "Ishik@3842/1@1309", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

module.exports = sequelize;
