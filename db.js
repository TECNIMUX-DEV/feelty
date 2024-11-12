// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'q4lejxndrop',       // Tu usuario de MySQL
    password: '0000', // Tu contraseña de MySQL
    database: 'mi_base_datos'  // La base de datos que creaste
  });

  
db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;