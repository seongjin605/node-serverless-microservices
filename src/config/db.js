const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'micro',
  password: 'service',
  database: 'monolithic'
});

module.exports = connection;
