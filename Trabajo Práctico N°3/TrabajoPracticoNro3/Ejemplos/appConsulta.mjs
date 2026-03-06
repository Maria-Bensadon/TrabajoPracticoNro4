// Ejemplo con consultas
// __________________________________________________________

import express from 'express';

const app = express();

// Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

//------------------------------------------------------------------------
// RUTA GET CON 1 PARÁMETRO DE CONSULTA (query parameter)
//------------------------------------------------------------------------

// Solicitud:  http://localhost:3000/search?q=javascript

app.get('/search', (req, res) => {

  // req.query contiene los parámetros que vienen después del ?
  // En este caso: { q: "javascript" }

  const query = req.query.q; // Extraemos el valor de "q"

  // IMPORTANTE: usamos backticks (`) para interpolar la variable
  res.send(`Resultados de búsqueda para: ${query}`);

});


//------------------------------------------------------------------------
// RUTA GET CON MÚLTIPLES PARÁMETROS DE CONSULTA
//------------------------------------------------------------------------
// Solicitud:  http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50

app.get('/filter', (req, res) => {

  // req.query sería:
  // {
  //   type: "book",
  //   minPrice: "10",
  //   maxPrice: "50"
  // }

  // Usamos destructuring para extraer los valores
  const { type, minPrice, maxPrice } = req.query;

  res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`);

});
