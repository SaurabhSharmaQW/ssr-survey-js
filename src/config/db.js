const mysql = require('mysql2/promise');
import dotenv from "dotenv";

dotenv.config();
console.log(1, process.env);
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err.message);
//   } else {
//     console.log('Connected to MySQL');
//   }
// });
console.log(2, db);
export default db;
// Close the connection
//connection.end();
