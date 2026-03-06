# TP3 - Backend con Node.js
Trabajo Práctico 3 de la Diplomatura Fullstack.
Módulo de Backend con Node.js: módulos ES, NPM y servidor con Express.

***

## Descripción
Este backend implementa un servidor HTTP con Express que demuestra dos formas
de recibir datos desde la URL: a través de parámetros de ruta (parte fija de la URL)
y a través de parámetros de consulta (valores opcionales después del signo ?).
Ambos casos capturan el valor recibido y lo muestran en la consola del servidor.

## Tecnologías
- Node.js v20+ (módulos ES con `.mjs`)
- Express v4 (libreria utilizada)
- NPM (gestiona las librerias del proyecto)

## Requisitos previos
- Node.js >= 18 instalado en tu máquina
- NPM >= 9 (se instala junto con Node.js)

## Instalación
git clone https://github.com/tuusuario/tp3-backend-nodejs.git
cd tp3-backend-nodejs
npm install

## Cómo ejecutar

### Actividad 1 — Parámetros de ruta
node serverRuta.mjs
# Servidor disponible en http://localhost:3000

### Actividad 2 — Parámetros de consulta
node serverConsulta.mjs
# Servidor disponible en http://localhost:3000

## Estructura del proyecto
tp3/
├── Ejemplos
├── serverRuta.mjs       # Servidor con parámetro de ruta (:id)
├── serverConsulta.mjs   # Servidor con parámetro de consulta (?edad)
└── package.json

## Endpoints disponibles
- GET `/user/:id` → El valor de id se lee desde la URL y se imprime en consola
- GET `/profile?edad=30` → El valor de edad se lee desde el query string y se imprime en consola

## Scripts disponibles (comandos cortos definidos en el package.json)
npm start
npm test

## Autor
Tu Nombre — Diplomatura Fullstack, Módulo 3