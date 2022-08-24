//IMPORTAR A MONGOOSE
import mongoose from "mongoose";


//ESQUEMA DE DATOS DE MONGOOSE
//EL ESQUEMA ES UNA REGLA DE DATOS VOY A MANIPULAR
const Schema = mongoose.Schema;

const Habitacion=new Schema({
    nombre:{
        type:String,
        required:true
    },
    valorNoche:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagenes:{
        type:String,
        required:false
    },
    numeroPersona:{
        type:Number,
        required:true
    },
})

export const modeloHabitacion=mongoose.model('habitacion',Habitacion)

