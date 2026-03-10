// SERVICIOS
//_____________________________________________________________
/** 
    La Capa de Servicio se encarga de contener la lógica de negocio. 
    Es el intermediario entre el controlador y la capa de persistencia. 
    La capa de servicio interactúa con el modelo y la persistencia para  
    obtener filtrar, validar o manipular los datos antes de que se los pase 
    al controlador.

*/

import SuperheroesRepository from '../repository/superheroesRepository.mjs'; // 

const repository = new SuperheroesRepository();
// funcion para obtener los superheroes por ID
export function obtenerSuperheroePorid(id) {

    // se buscan guardan los datos del repositorio en una variable
    const superheroes = repository.obtenerTodos();
    // se utiliza find para buscar el id que coincida con un superheroe 
    // especifico 
    return superheroes.find(hero => hero.id === id);
}

// se busca al superheroe por atributo
export function buscarSuperheroesPorAtributo(atributo, valor) {

    // se buscan guardan los datos del repositorio en una variable
    const superheroes = repository.obtenerTodos();
    // se utiliza filter para filtrar los superheroes que cumplan la condicion
    // retorna el atributo y el valor del supeheroe
    return superheroes.filter(hero =>
        String(hero[atributo]).toLowerCase().includes(valor.tolowerCase())
    );
}

// se buscan los superheroes mayores a 30 años
export function obtenerSuperheroesMayoresDe30() {

    // se buscan guardan los datos del repositorio en una variable
    const superheroes = repository.obtenerTodos();
    // se utiliza filter para filtrar los superheroes que cumplan la condicion
    // retorna la edad, el planeta de origen y la longitud de poder (si es mayor o igual a 2)
    return superheroes.filter(hero =>
        hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >= 2
    );

}

