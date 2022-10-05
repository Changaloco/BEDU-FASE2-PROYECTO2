const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});

module.exports = sequelize;




//!Necesario para la conneccion a traves de heroku
//  ssl: {
//     sslmode: "require",
//     rejectUnauthorized: false,
//   },
//   dialectOptions: {
//     ssl: { require: true, rejectUnauthorized: false },
//   },