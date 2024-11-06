// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

const SECRET_KEY = 'mi_secreto';

exports.register = (req, res) => {
  const { username, password } = req.body;
  
  // Verificar si el usuario ya existe
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) throw err;
    if (results.length > 0) return res.status(400).json({ message: 'El usuario ya existe' });

    // Crear hash de la contraseña
    const passwordHash = bcrypt.hashSync(password, 8);

    // Insertar nuevo usuario
    db.query('INSERT INTO users (username, passwordHash) VALUES (?, ?)', [username, passwordHash], (err) => {
      if (err) throw err;
      res.json({ message: 'Usuario registrado exitosamente' });
    });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) throw err;
    if (results.length === 0 || !bcrypt.compareSync(password, results[0].passwordHash)) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ id: results[0].id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: 'Inicio de sesión exitoso', token });
  });
};
