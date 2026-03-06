/** 
    Actividad 2: Manejo de Parámetros de Consulta
    ---------------------------------------------------------
    1. Objetivo: Configurar un servidor Express que reciba una solicitud 
    GET con un parámetro de consulta edad en la URL y muestre ese 
    parámetro en la consola.

    2. Pasos:
        1. Crea un archivo serve r. j s (o usa app. j s si lo prefieres).
        2. Configura una ruta que capture el parámetro de consulta edad .
        3. Muestra el valor del parámetro edad en la consola cuando se 
        reciba una solicitud

*/

// Primera Parte: importacion y declaracion
// ----------------------------------------------------------------
// se importa la funcion principal de la libreria
import express from "express";

// instancia
const app2 = express(); 

// se configura el puerto
const puerto = 3000; 


// Segunda Parte: logica
// app2.get("/search/:edad", ()=>{});
// ----------------------------------------------------------------
/** 
    app2.get("/search/:edad", ()=>{

    const consulta = req.query.edad; 

    res.send(`La edad consultada es: ${consulta}`); 
}); 
*/
app2.get("/profile", (req, res) => {

    const consulta = req.query.edad;

    console.log(`La edad es ${consulta}`); 

    res.send(`La edad es: ${consulta}`); 

});


// Tercera Parte: activar el servidor
// app.listen(puerto, () => {}); 
// Solicitud: http://localhost:3000/profile?edad=30
// ----------------------------------------------------------------

app2.listen(puerto, () => {
    console.log(`Servidor activo en url: http://localhost:3000/profile?edad=30, en el puerto: ${puerto}`); 
}); 

