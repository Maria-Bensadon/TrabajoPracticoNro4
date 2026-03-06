
// Ejemplo de GET configuración básica
//_____________________________________________________________________

// Se importa la función principal del framework Express.js, que corre sobre Node.js.
// se usan comillas simples o dobles (" ") o ('') <= tecla: ? 
import express from 'express';

// Crear una instancia de Express
/**
    Es un objeto que permite: 
    - Definir rutas: dirección a la que alguien puede entrar desde el navegador o desde otra aplicación.
    - Middleware: función que se ejecuta antes de que llegue a la ruta final. 
        Sirve para:
            * Validar datos
            * Autenticar usuarios
            * Transformar información
            * Registrar logs
    - Request: es una petición que llega al servidor.
        Cuando alguien:
            * Entra a una URL
            * Envía un formulario
            * Hace una petición desde frontend
        El framework Express diferencia dos request:
            * req → lo que el cliente envía
            * res → lo que la pagina responde
    - Iniciar el servidor: activarlo. 
        FUNCIONES => * app.listen(PORT); 
                     * app.get() → obtener datos.
                     * app.post() → enviar/crear datos.
                     * app.put() → actualizar datos.
                     * app.delete() → eliminar datos.

*/
const app = express();

// Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

//------------------------------------------------------------------------
// RUTA GET CON 1 PARAMETRO DE RUTA
//------------------------------------------------------------------------

/** 
    La ruta GET sirve para definir qué debe hacer tu servidor cuando 
    recibe una petición HTTP de tipo GET en una ruta específica.

   
*/
// La ruta '/user/:id' contiene un parámetro dinámico llamado "id"
// Solicitud: http://localhost:3000/user/123. El { id: "123" }
app.get('/user/:id', (req, res) => {

    /**
        Callback de request: 
            (req, res) => {} 
        Se ejecuta cada vez que alguien entra a esa ruta.
            * req → objeto request (lo que llega).
            * res → objeto response (lo que vas a devolver).
     */

    // req.params es un objeto que guarda los parámetros dinámicos de la URL
    // Si la URL es /user/123 entonces req.params será: { id: "123" }

    // Guardamos el valor del parámetro "id" en una constante (user Id)
    // IMPORTANTE: siempre es STRING
    const userId = req.params.id;

    // se muestra el id del usuario por consola
    console.log(`ID del usuario recibido: ${userId}`);

    // se muestra el id del usuario por navegador, es la respuesta al cliente (req)
    /* res => devolvemos con la funcion send() que finaliza la petición y 
    envía el contenido al cliente */
    res.send(`Perfil del usuario con ID: ${userId}`);
});

// Iniciar el servidor
/**
    app es la instancia de express
    .listen es una funcion

    * Indica por qué “canal” de red va a recibir conexiones.
 */
app.listen(PORT, () => {
    // muestra por la terminal o la consola que el servidor esta corriendo
    console.log(`Servidor corriendo en http://localhost:3000 ${PORT}`);
});



//###################################################################



//------------------------------------------------------------------------
// RUTA GET CON MUTIPLES PARAMETROS DE RUTA
//------------------------------------------------------------------------

// Si el usuario accede a: http://localhost:3000/product/electronics/456
// Se capturan dos parámetros: category = "electronics" e id = "456"

app.get('/product/:category/:id', (req, res) => {

  // Extraemos los parámetros usando destructuring
  // req.params sería: { category: "electronics", id: "456" }
  const { category, id } = req.params;

  // Respondemos mostrando ambos valores
  res.send(`Categoría: ${category}, ID del producto: ${id}`);

});

