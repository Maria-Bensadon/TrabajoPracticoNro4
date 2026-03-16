
// PERSISTENCIA
//____________________________________________________




/**
   Esta clase implementa el método obtener Todos () que lee los 
   datos desde supe rhe roes. txt. 
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroesDataSource from './superheroesDataSource.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
