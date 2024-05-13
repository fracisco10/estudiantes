const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos'
});

// Conectar a la base de datos MySQL
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión a la base de datos MySQL establecida');
  }
});

// Ruta para obtener todos los estudiantes
app.get('/students', (req, res) => {
  connection.query('SELECT * FROM students', (error, results) => {
    if (error) {
      console.error('Error al obtener estudiantes:', error);
      res.status(500).send('Error del servidor al obtener estudiantes');
    } else {
      res.json(results);
    }
  });
});

// Ruta para agregar un nuevo estudiante
app.post('/students', (req, res) => {
  const { name } = req.body;
  connection.query('INSERT INTO students (name) VALUES (?)', [name], (error, results) => {
    if (error) {
      console.error('Error al agregar estudiante:', error);
      res.status(500).send('Error del servidor al agregar estudiante');
    } else {
      res.json({ message: 'Estudiante agregado correctamente' });
    }
  });
});

// Ruta para eliminar un estudiante por ID
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM students WHERE id = ?', [id], (error, results) => {
    if (error) {
      console.error('Error al eliminar estudiante:', error);
      res.status(500).send('Error del servidor al eliminar estudiante');
    } else {
      res.json({ message: 'Estudiante eliminado correctamente' });
    }
  });
});
