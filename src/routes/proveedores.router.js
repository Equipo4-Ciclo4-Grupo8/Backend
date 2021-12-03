const express = require('express')
const router = express.Router();
const proveedoresController = require('../controllers/proveedores.controller');
const Auth = require('../helper/Auth')

//metodo add
router.post('/add',    proveedoresController.crearProveedor); //no olvidar poner la verificacion de token, 'Auth.verificarToken,'

//listarxfiltro pero si no se le pasa parametros muestra todos los 'activos'
router.get('/list',  proveedoresController.listarxvalorbusqueda)

//listarTodo
router.get('/listTodo',  proveedoresController.list)

module.exports = router;