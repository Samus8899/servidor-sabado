import express from "express"

// En el archivo de rutas creo una variable encargada de definir todos los endpoints de mi api
// Por cada servicio que ofrece mi API debo tener un ENDPOINT o ruta

export let rutas=express.Router()

// Defino las rutas para cada servicio de mi API
rutas.post('/api/hotel/habitaciones', function (req, res) {
    res.send('Estamos registrando una habitacion')

  })

rutas.get('/api/hotel/habitaciones', function (req, res) {
    res.send('Estamos buscando habitaciones')
  })


rutas.get('/api/hotel/habitaciones/:id',function (req, res) {
    res.send('Estamos buscando una habitacion por id')
  })

rutas.put('/api/hotel/habitaciones/:id',function (req, res) {
    res.send('Estamos editando una habitacion')
  })