//LLAMAMOS A EXPRESS
//const express = require('express')// VIEJA FORMA DE IMPORTAR
import express from 'express'

//LLAMAMOS RUTAS
import{rutas} from '../routers/rutas.js'


//LLAMAMOS AL METODO CONECTAR BASE DE DATOS
import { conectar } from '../database/conexion.js'



export class Servidor{
    constructor(){
      this.app=express()//atributo una variable
      this.atenderpeticiones()//atiendo peticiones 
      this.atenderpeticiones()//atiendo las peticiones del usuario
    }

atenderpeticiones(){
    //ATENDIENDO/ENRUTAR PETICIONES
    //this.app.get('/', )
    this.app.use(express.json())
    this.app.use('/', rutas )

}

habilitarBody(){
    this.app.use(express.json())
}


encenderServidor(){
    //DESPERTANDO EL SERVIDOR
    this.app.listen(process.env.PORT,function(){
    console.log("servidor encedido"+process.env.PORT)
})

}

conectarconBd(){
    conectar()
}

}