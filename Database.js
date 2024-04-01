const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signupdb',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database!');
  }
});
db.query('SELECT * FROM signupdata', (err, results) => {
  if (err) {
    console.error('Error fetching users:', err);
  } else {
    console.log('Users:', results);
    // Process the results and send them to your HTML page
  }
});
