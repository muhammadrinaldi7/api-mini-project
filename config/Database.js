import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import mysql2 from "mysql2";

dotenv.config();

const db = new Sequelize( {
  database:'b0nyhz8fuo0krnh7sxzy',
  username:'uj1tf4aucwtutx1j',
  password:'87ZEHM9nrC7Iv4DqjsmY',
  host: 'b0nyhz8fuo0krnh7sxzy-mysql.services.clever-cloud.com',
  dialect: "mysql",
  dialectModule: mysql2,
});

export default db;