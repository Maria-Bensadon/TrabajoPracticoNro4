// Configuracion Básica del Servidor
//_____________________________________________________________

// se instala la funcion principal de la libreria express
import express from "express";

import { obtenerSuperheroePoridController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller }
    from './controllers/superheroesController.mjs';


// se crea una instancia
const app = express();

// solicitud: http://localhost:3005
// se configura el puerto 
const puerto = 3005;

// solicitud ID: http://localhost:3005/superheroes/id/:id
// http://localhost:3005/superheroes/id/1
// endpoint 1: peticion GET para el ID del superheroe
app.get('/superheroes/id/:id', obtenerSuperheroePoridController);

// solicitud atributo: http://localhost:3005/superheroes/atributo/:atributo/:valor
// por ejemplo: http://localhost:3005/superheroes/atributo/planetaOrigen/Tierra
// http://localhost:3005/superheroes/atributo/aliado/Loki
// endpoint 2: peticion GET para atributos de un superheroe
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);

// solicitud edad: http://localhost:3005/superheroes/edad/mayorA30
// endpoint 3:peticion GET para superheroes mayores de 30 años
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);

// Levantar el servidor en el puerto 3005
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});


