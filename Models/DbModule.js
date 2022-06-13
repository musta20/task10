const { Sequelize } = require("sequelize");
require('dotenv').config();

const {DB_HOST , DB_USER_NAME , DB_PASSWORD ,DB_ENGINE, DB_NAME , DB_PORT} = process.env;

 const  sequelize= new Sequelize(DB_NAME, DB_USER_NAME, DB_PASSWORD, {
    host: DB_HOST,
    port:DB_PORT,
    dialect: DB_ENGINE,
  });


async ()=>{

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  

}

module.exports = {Sequelize:sequelize}