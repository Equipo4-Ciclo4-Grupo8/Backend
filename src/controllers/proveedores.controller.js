const proveedoresController = {}
const proveedores = require('../models/proveedores.models')

//metodo crear proveedores
proveedoresController.crearProveedor = async(req, res, next) =>{
    try {
        //validacion de cedula, que no exista
        const checkCedula = await proveedores.findOne({cedula:req.body.cedula});
       
        if (!checkCedula ) {
            const registro = await proveedores.create(req.body);
            res.status(200).json(registro);
        }else res.status(400).send(
            {message:"proveedor ya existe"}) 
        
    } catch (error) {
        res.status(500).send({
            // error,
            message: "ocurrio un error interno" + ": " + error.message
        });
        next(error);
    }
};

//Metodo listar todo, para la tabla crud
proveedoresController.list= async (req,res,next)=>{
    try {
        const registros = await proveedores.find(
        ).sort({date: -1 });
        res.status(200).json(registros);
    } catch (error) {
        res.status(500).send({
            message: "ocurrio un error interno" + ": " + error.message
            
        });
        next(error);
    }
};

//metodo listar proveedores con filtro, para usar en la zona de articulos
proveedoresController.listarxvalorbusqueda= async (req,res,next)=>{
    try {
        let valorBusqueda= req.headers.filtro; // se le puede poner '.filtro' o cualquier otra cosa(eso va en en 'filtro' = 'lo que se quiera buscar' en postman ),
        const registros = await categorias.find({$and:[

            {$or:[
                {profesion:new RegExp(valorBusqueda,'i')},
                {descripcion:new RegExp(valorBusqueda,'i')}
                 //esta expresion regular encuentra por nombre o rol, y busca coincidencias 'i'=includes//si uno no le pasa valorBusqueda devuelve todo  
            ]},{estado:"Activo"}
        ]}
             ).sort({date: -1 });                   
        res.status(200).json(registros);

        
    } catch (error) {
        res.status(500).send({
            message:  "ocurrio un error interno" + ": " + error.message
            
        });
        next(error);
    }

};



module.exports = proveedoresController