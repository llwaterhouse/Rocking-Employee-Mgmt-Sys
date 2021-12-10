const util = require("util");
const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
  // host: "localhost",
  // // Your username
  // user: "root",
  // // Your password
  // password: "password",
  // database: "employees"
    host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "password",
  database: "employees"
});

//  error checking?
connection.connect();

console.log("after connection connect");
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });

console.log("After query")


// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;
