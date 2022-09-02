import{ServicioReserva}from '../services/ServicioReserva.js'

export class  ControladorReserva{

    constructor(){}

    //buscar reserva
    buscarReserva(request,response){

        //llamo al servicio
        let servicioReserva=new ServicioReserva()


        //intento Resolver la PETICION
        try{
            response.status(200).json({
                mensaje:"exito en la consulta",
                datos:servicioReserva.buscarTodas()
            })
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"FALLO  en la consulta" + error,
                datos:null
            })
        }
    }

    //buscar Reserva por id
    buscarReservaPorId(request,response){
        let identificador=request.params.id

        //llamo al servicio
        let servicioReserva=new ServicioReserva()

        //console.log(identificador) solo para probar
        try{
            response.status(200).json({
                mensaje:"exito en la consulta"+identificador,
                datos:servicioHabitacion.buscarPorId(identificador)
            })
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"FALLO  en la consulta" + error,
                datos:null
            })
        }
    }

    //agregar reserva
    async agregarReserva(request,response){
        let cuerpo=request.body
        console.log(cuerpo)

        //llamo al servicio
        let servicioReserva=new ServicioReserva()

        //console.log(cuerpo)
        try{
            await servicioReserva.agregar(cuerpo)
            response.status(200).json({
                mensaje:"exito agregando la reserva",
                datos:null
            })
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"FALLO  en la consulta" + error,
                datos:null
            })
        }
    }

    //editar reserva
    async editarHabitacion(request,response){
        //recibir id como parametro 
        let id=request.params.id


        //recibir los datos con los que voy a editar (BODY)
        let datos=request.body

        //llamo al servicio
        let servicioReserva=new ServicioReserva()

        try{
            await servicioReserva.actualizar(id,datos)
            response.status(200).json({
                mensaje:"exito editando la reserva"+ id,
                datos:null
            })
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"FALLO  en la consulta" + error,
                datos:datos
            })
        }
    }

    //eliminar Reserva
    async eliminarReserva(request,response){
        try{
            response.status(200).json({
                mensaje:"exito en la consulta",
                datos:null
            })
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"FALLO  en la consulta" + error,
                datos:null
            })
        }
    }



}