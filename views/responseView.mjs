
// VISTA
// ______________________________________________________

/*
    - responsable de la presentación de los datos, formateándolos 
    para su entrega al cliente. 

    - API que devuelve los datos en formato JSON, lo que significa
    que la vista toma los datos procesados por el controlador 
    y los formatea en JSON antes de enviarlos de vuelta al cliente.

    Esta capa es esencial para:
    
        1. Separar la lógica de presentación de la lógica de negocio.
        2. Garantizar que los datos se presenten de manera consistente y clara.
        3. Facilitar la reutilización de los métodos de presentación en toda la 
        aplicación.
*/

// Función para renderizar un superheroe en especifico en formato JSON (1)
export function renderizarSuperheroe(superheroe) {

    // Formatea un solo superheroe en formato JSON con indentación
    // JSON. stringify(): convierte a formato JSON con una indentación
    // de 2 espacios para mejorar la legibilidad.
    return JSON.stringify(superheroe, null, 2);
}


// Función para renderizar una lista de superheroes en formato JSON (2 o +)
export function renderizarlistaSuperheroes(superheroes) {

     // Formatea el array de tareas en formato JSON con indentación
    return JSON.stringify(superheroes, null, 2);
}



