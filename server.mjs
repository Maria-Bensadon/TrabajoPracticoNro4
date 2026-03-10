// Configuracion Básica del Servidor
//_____________________________________________________________

// se instala la funcion principal de la libreria express
import express from "express";

import { obtenerSuperheroePoridController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller }
    from './controllers/superheroesController.mjs';


// se crea una instancia
const app = express();

// se configura el puerto 
const puerto = 3005;

// endpoint 1: peticion GET para el ID del superheroe
app.get('/superheroes/id/:id', obtenerSuperheroePoridController);

// endpoint 2: peticion GET para atributos de un superheroe
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);

// endpoint 3:peticion GET para superheroes mayores de 30 años
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);


// Levantar el servidor en el puerto 3005
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});


