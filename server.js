const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
const uri = 'mongodb+srv://fbua:Universidad.2021@cluster0.lzyczz0.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Conectar a la base de datos
client.connect((err) => {
  if (err) {
    console.error('Error al conectar a MongoDB Atlas:', err);
    return;
  }

  console.log('Conexión exitosa a MongoDB Atlas');

  // Servir archivos estáticos desde la carpeta "public"
  // app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static('public'));

  // Ruta principal para cargar tu página HTML
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  // Resto de las rutas y lógica de tu aplicación aquí

  // Iniciar el servidor
  app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
  });
});
