// 1º Crear directorio del proyecto
// 2º npm init
// 3º Crear estructura de carpetas
// 4º Instalar todos los paquetes / librerías (Express, Nodemon, JWT, Mongoose, Sequelize...)
// 5º Crear index.js / index.ts (entrada a la app)
// 6º Generar modelos, vistas, controladores y rutas

// Cómo instalar dependencias
// npm i NOMBREDELPAQUETE
// npm i NOMBREDELPAQUETE --dev
// npm i nodemon --dev


// import express from 'express';
const express = require('express');
// const cors = require('cors');

const pruebaRouter = require('./routes/pruebaRouter');

const app = express();

// app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/prueba', pruebaRouter);

app.get('/', (req, res) => {
    res.status(200).send('<h2>Llama a la ruta específica</h2>');
});

app.listen(3001, () => console.log('Aplicación rulando en el puerto 3001'));