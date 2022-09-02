import express from 'express'

//IMPORTAR EL CONTROLADOR DE HABITACIONES
import{ControladorHabitacion} from'../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReservas.js'

let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()

//VARIABLE PARA PERSONALIZAR LAS RUTAS (ENDPOINTS) DE MIS SERVICIOS
export let rutas=express.Router()


//ESCRIBO MIS RUTAS (CADA RUTA ES UN SERVICIO)

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS HABITACIONES

rutas.get('/viajescomfama/v1/habitaciones',controladorHabitacion.buscarHabitaciones)

rutas.get ('/viajescomfama/v1/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)

rutas.post ('/viajescomfama/v1/habitacion',controladorHabitacion.agregarHabitacion)

rutas.put ('/viajescomfama/v1/habitacion/:id',controladorHabitacion.editarHabitacion)


//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS  A LAS RESERVAS

rutas.get('/viajescomfama/reserva', controladorReserva.buscarReserva) //RUTA O ENDPOINTS PARA BUSCAR TODAS LAS RESERVA
 // res.send('Hello World')
//})

rutas.get ('/viajescomfama/reserva/:id', controladorReserva.buscarReservaPorId) //RUTA O ENDPOINTS PARA BUSCAR TODAS LAS RESERVA
  //res.send('Hello World')
//})

rutas.post('/viajescomfama/reserva', controladorReserva.agregarReserva)
    //res.send('Hello World')
  //})
rutas.put('/viajescomfama/reserva/:id', controladorReserva.editarHabitacion)
    //res.send('Hello World')
  //})
  rutas.delete('/viajescomfama/cancelacion/:id', controladorReserva.eliminarReserva)
    //res.send('Hello World')
 // })

  //function (req, res) { //RUTA O ENDPOINTS PARA BUSCAR TODAS LAS HABITACIONES 
   // res.send('Hello World')
  
 //function (req, res) { //RUTA O ENDPOINTS PARA BUSCAR TODAS LAS HABITACION
   // res.send('Hello World')
  //}

 // function (req, res) { //RUTA O ENDPOINTS PARA AGREGAR TODAS LAS HABITACION
  //  res.send('Hello World')
 // }

 // function (req, res) { //RUTA O ENDPOINTS PARA CAMBIAR TODAS LAS HABITACION
   // res.send('Hello World')
 // }

  //*