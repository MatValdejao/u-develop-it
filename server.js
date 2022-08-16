const express = require("express")
const mysql = require("mysql2");
const { resourceUsage } = require("process");

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

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows)
// })

// Get a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, rows) => {
    if (err) {
        console.log(err)
    }
    console.log(rows)
})

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(result)
// })

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) VALUES (?,?,?,?)`
const params = [1, "Ronald", "Firbank", 1]

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err)
    }
    console.log(result)
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})