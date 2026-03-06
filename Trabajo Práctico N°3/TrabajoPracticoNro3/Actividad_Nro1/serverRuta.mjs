/** 
    Actividad N°1: Manejo de parámetros de ruta
    -----------------------------------------------------------
    1. Objetivo: Configurar un servidor Express que reciba una 
    solicitud GET con un parámetro id en la URL y muestre ese 
    parámetro en la consola.  

    2. Pasos:
        1. Crea un archivo serve r. mj s (o usa app. mj s si lo prefieres).
        2. Configura una ruta que capture el parámetro id en la URL.
        3. Muestra el valor del parámetro id en la consola cuando se 
        reciba una solicitud.

*/

// Primera Parte: importacion y declaracion
// ----------------------------------------------------------------
// se importa la funcion principal de la libreria
import express from "express";

// instancia
const app1 = express(); 

// se configura el puerto
const puerto = 3000; 



// Segunda Parte: logica
// app.get("/", () => {});
// ----------------------------------------------------------------
app1.get("user/:id", (req, res) => {

    const usuarioID = req.params.id; 

    // se muestra por consola
    console.log(`El ID del usuario es: ${usuarioID}`);

    // se muestra por el navegador
    res.send(`Usuario ID: ${usuarioID}`);  

}); 



// Tercera Parte: activar el servidor
// app.listen(puerto, () => {}); 
// Solicitud: http://localhost:3000/user/123
// ----------------------------------------------------------------

app1.listen(puerto, () => {
    console.log(`Servidor activo en url: http://localhost:3000/user/123, en el puerto: ${puerto}`); 
}); 

