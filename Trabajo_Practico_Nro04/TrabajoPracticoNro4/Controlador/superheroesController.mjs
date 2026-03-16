// CONTROLADOR
/*
    El Controlador es el intermediario entre el modelo, la vista y las 
    solicitudes del usuario. Su función es recibir las solicitudes HTTP 
    (del cliente), interactuar con la capa de servicio para procesar los 
    datos, y enviar la respuesta utilizando la vista. La lógica de negocio 
    no debe estar en el controlador, sino en la capa de servicio.
*/

// se importan funciones desde la carpeta de servicios
import {
    obtenerSuperheroePorld, buscarSuperheroesPorAtributo,
    obtenerSuperheroesMayoresDe30
} from ' ../services/superheroesService.mjs';

import { renderizarSuperheroe, renderizarlistaSuperheroes }
    from '../views/responseView.mjs';


/**
    - Esta funcion permite capturar el ID del superheroe mediante
    req.params.
 */
export function obtenerSuperheroePoridController(req, res) {

    // se obtiene el id y se guarda en una variable
    const id  = req.params;
 
    // se utiliza la funcion "parselnt" para convertir el id a numero entero.
    const superheroe = obtenerSuperheroePorld(parselnt(id));

    if (superheroe) {
        // si el id coincide con un superheroe, se muestra al mismo
        /* 
            Renderizar:  proceso utilizado en desarrollo web para convertir 
            el código de un website en una página con la que los usuarios 
            puedan interactuar
        */
        res.send(renderizarSuperheroe(superheroe));
    }

    else {
        // si no coincide con ninguno, se muetra el siguiente mensaje.
        /* 
            Codigo de estado 404 (Not Found): es una respuesta HTTP que indica 
            que el servidor no puede localizar la página web o recurso solicitado. 
        */
        res.status(404).send({ mensaje: "Superhéroe no encontrado" });
    }

}

// funcion que permite buscar un superheroe segun su atributo y valor
export function buscarSuperheroesPorAtributoController(req, res) {

    const { atributo, valor } = req.params;

    // se utiliza la funcion importada de la capa de servicios
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

    // se encuentra el atributo, se muestra la lista
    if (superheroes.length > 0) {
        res.send(renderizarlistaSuperheroes(superheroes));
    }

    else {
        // caso contrario se muestra el mensaje de error.
        res.status(404).send({
            mensaje: 'No se encontraron superhéroes con ese atributo'
        });
    }
}

// funcion que permite buscar los superheroes mayores de 30 años
export function obtenerSuperheroesMayoresDe30Controller(req, res) {

    const superheroes = obtenerSuperheroesMayoresDe30();
    
    res.send(renderizarlistaSuperheroes(superheroes));

}


