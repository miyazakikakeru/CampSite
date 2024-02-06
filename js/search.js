const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect();

app.get('/search', (req, res) => {
  const location = req.query.location;
  const number = req.query.number;

  const query = `SELECT * FROM your_table WHERE location = ${connection.escape(location)} AND number = ${connection.escape(number)}`;

  connection.query(query, (error, results, fields) => {
    if (error) {
      res.send('エラーが発生しました: ' + error);
    } else {
      res.send(results);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});