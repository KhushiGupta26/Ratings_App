module.exports = sequelize;
require('dotenv').config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME || "ratings_app",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "", // your real password here in .env
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false
  }
);

module.exports = sequelize;
