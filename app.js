import {Servidor}from './SERVIDOR/Servidor.js'

//IMPORTAMOS DOTENV PARA MANIPULAR LAS VARIABLES DE ENTORNO

import 'dotenv/config'

//PARA UTILIZAR UNA CLASELA DEBO INSTANCIAR
//PARA USAR UNA CLASE DEBO CREAR UN OBJETO(ES UNA VARIABLE)
//PARA USAR UNA CLASE LE DEBO SACAR COPIA
let servidorComfama=new Servidor()

//ENCIENDE SERVIDOR
servidorComfama.encenderServidor()


console.log(process.env.PORT) // remove this after you've confirmed it working