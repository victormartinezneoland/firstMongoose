// Importar mongoose
const mongoose = require('mongoose');

// Utilizar Mongoose Schema
const Schema = mongoose.Schema;


// Defino el esquema de mi entidad (estudiante, coche, libro, edificio...)
const StudentSchema = new Schema({
    nombre: String,
    edad: Number,
    curso: String,
    altura: Number,
    fechaAlta: Date,
    activo: Boolean
});

// Exporto el esquema o modelo
module.exports = mongoose.model('Student', StudentSchema);