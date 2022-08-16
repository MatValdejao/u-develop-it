const express = require("express")
const mysql = require("mysql2")

const PORT = 3001 || process.env.PORT;
const app = express()

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows)
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})