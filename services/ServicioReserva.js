import {modeloReserva} from '../models/modeloDatosReserva.js'

export class ServicioReserva{
    constructor(){}

    async buscarTodas(){
        let reserva=await modeloReserva.find()
        return reserva
    }

    async buscarPorId(id){
        let reserva=await modeloReserva.findById(id)
        return reserva
    }

    async agregar(datos){
        let reservaAGuardar=new modeloReserva(datos)
        return await reservaAGuardar.save()
    }

    async actualizar(id,datos){
        return modeloReserva.findByIdAndUpdate(id,datos)
    }
}