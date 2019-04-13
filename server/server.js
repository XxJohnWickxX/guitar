// IMPORTACIONES
const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const port = process.env.PORT || 3002

const app = express()

// MIDDELWARES


// MODELOS


// RUTAS





// LISTENERS
app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
    
})