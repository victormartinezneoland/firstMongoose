const express = require('express');
const pruebaController = require('../controllers/pruebaController');

const router = express.Router();

router.get('/', pruebaController.getStudents);
router.get('/add', pruebaController.addStudent);

module.exports = router;