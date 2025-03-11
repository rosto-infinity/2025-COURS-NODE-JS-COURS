import express from 'express';
import postRoutes from './routes/post.routes.js';
import connectDB from './config/database.js';
// const postRoutes = require('./routes/post.routes.js');

import dotenv from 'dotenv';
dotenv.config();



const port = 3001;
const app = express();

// Middleware pour parser le corps des requêtes x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

app.use('/', postRoutes);
app.use('/post', postRoutes);
app.use('/post/:id', postRoutes);
app.use('/like-post/:id', postRoutes);

//lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port} avec succès okok encore ok`);
});
connectDB();
