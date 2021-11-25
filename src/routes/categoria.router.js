const express = require('express')
const router = express.Router();
const categoriaController = require('../controllers/categorias.controller');
const Auth = require('../helper/Auth')

//metodo add
router.post('/add',   categoriaController.crearCategorias); //no olvidar poner la verificacion de token, 'Auth.verificarToken,'

//listar
router.get('/list',  categoriaController.listarxvalorbusqueda)

//listarActivos
router.get('/listActivos',  categoriaController.listActivos)
//borrar
router.delete('/borrar',  categoriaController.borrar) 
module.exports = router;