const mysql = require("mysql");
require("dotenv").config();

const database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
});

//* holboh uildel
database.connect((err) => {
    if (err) throw err;

    console.log("Database connected...");
});

module.exports = database;