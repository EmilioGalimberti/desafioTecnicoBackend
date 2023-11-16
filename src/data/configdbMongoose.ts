/**
 * Configuración y conexión a la base de datos MongoDB usando Mongoose.
*/

import mongoose from 'mongoose';

const url = 'mongodb+srv://emiliogalimberty:DykCvZgFNarwXjFG@starwarsclusterapi.xhvj1ul.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url);

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Error de conexión a la base de datos:', error);
});
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos en la nube');
});

export default mongoose; 