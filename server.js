// server.js
const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta "public"

// Rutas de autenticación
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
