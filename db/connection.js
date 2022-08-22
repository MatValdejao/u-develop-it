const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // MySQL username
        user: "root",
        // SQL password
        password: "19Mateus@",
        database: "election"
    },
    console.log("connected to the database election")
)

module.exports = db