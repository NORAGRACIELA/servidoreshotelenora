//IMPORTAR A MONGOOSE
import mongoose from "mongoose";


//ESQUEMA DE DATOS DE MONGOOSE
//EL ESQUEMA ES UNA REGLA DE DATOS VOY A MANIPULAR
const Schema = mongoose.Schema;

const Reserva=new Schema({
    idHabitacion:{
        type:String,
        required:true
    },
    fechaentrada:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    numeroNinos:{
        type:Number,
        required:true
    },
    numeroAdulto:{
        type:Number,
        required:true
    },
    valorReserva:{
        type:Number,
        required:true
    },
})

const modeloReserva=mongoose.model('reserva',Reserva)
