const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriasSchema = new Schema({
    foto: {
        type: String,
        required: [true, 'obligatorio'],
        unique: true

    },

    nombre:{
        type: String,
        required: [true, 'obligatorio, poner en MAYUSCULAS'],
        maxlength: 15,
        unique: true, 
        uppercase: true

    },
    descripcion:{
        type: String,
        required: [true, 'obligatorio'],
        maxlength: 50,

    },
    estado: {
        type: String,
        required: [true, 'obligatorio'],
        default: "Activo",
        enum:["Activo", "Inactivo"]  
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
}
)

module.exports = mongoose.model('categorias',categoriasSchema)