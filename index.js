const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');



// SERVIDOR EXPRESS
const app = express();

// BASE DE DATOS
dbConnection();

// CORS
app.use(cors());

// DIRECTORIO PUBLICO
app.use( express.static('public') );

// LECTURA Y PARSEO DEL BODY    
app.use( express.json() );

// RUTAS
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Eventos


// ESCUCHAR PETICIONES
app.listen( process.env.PORT, () => console.log(`Servidor ejecutándose en el puerto ${ process.env.PORT }`));