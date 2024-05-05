const mysql = require("mysql");

const db = mysql.createConnection({
    host : "sql6.freesqldatabase.com",
    user : "sql6704238",
    database : "sql6704238",
    password : "4p329gIHIp",
});

module.exports = db;