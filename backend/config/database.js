const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
    host:"localhost",
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASS,
    database:"OVERWATCH"
});

module.exports = pool