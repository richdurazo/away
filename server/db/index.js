const mysql = require('mysql');


const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'away'
});

connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;