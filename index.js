// // Importar el framework express
// const express = require('express')
// const app = express()
// // Atender la peticion y responder (API)
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// // Levantando el servidor
// app.listen(3000, function(){console.log("Servidor encendido")})
import * as dotenv from 'dotenv'
dotenv.config()
import { API } from "./API/API.js"

// Creamos un objeto de la clase API para utilizarla

let apiHotel=new API()

//Encender el servidor para poder ejecutar correctamente el API
apiHotel.levantarServidor()