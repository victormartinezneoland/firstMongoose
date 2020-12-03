const mongoose = require('mongoose');
const Student = require('../models/studentModel');

mongoose.connect(
    `mongodb+srv://neoland:${process.env.MATLASPASS}@maintestcluster.srioy.azure.mongodb.net/school?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = {
    getStudents: async function(req, res) {
        console.log('Valor de MATLASPASS', process.env.MATLASPASS);

        const studentList = await Student.find();
        console.log('RESPUESTA de la BBDD', studentList);

        console.log('Obtener estudiantes');

        res.json(studentList);
    },
    updateStudents: async function(req, res) {
        const newStudent = req.body;

        // Operaciones de actualización
    },
    addStudent: async function(req, res) {

        // Cómo añadir un nuevo Student a la BBDD:
        // Creo un nuevo modelo de student
        // const studentToAdd = new Student();
        // Lo relleno con valores específicos
        // studentToAdd.nombre = 'Prueba';
        // studentToAdd.edad = 20;
        // studentToAdd.curso = 'FSD';
        // studentToAdd.altura = 180;
        // await studentToAdd.save();

        // Cómo añadir múltiples Students a la BBDD:
        const listadoStudents = [];

        for(student of listadoStudents) {
            const studentToAdd = new Student();
            studentToAdd.nombre = student.nombre;
            studentToAdd.edad = student.edad;
            studentToAdd.curso = student.curso;
            studentToAdd.altura = student.altura;
            
            await studentToAdd.save();
        }

        res.send('¡Estudiante añadido!');
    }
};