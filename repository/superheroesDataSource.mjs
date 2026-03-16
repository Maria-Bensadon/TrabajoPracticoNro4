
// ABSTRACCION DE LA PERSISTENCIA
//_____________________________________________________

/**
    Este archivo define una abstracción que otras clases de 
    persistencia deben implementar:
*/

export default class SuperheroesDataSource {

    // Método abstracto para obtener todos los superhéroes
    obtenerTodos() {
        throw new Error('Este método debe ser implementado por la subclase');
    }
}

