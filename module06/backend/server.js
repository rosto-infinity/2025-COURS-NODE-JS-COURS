import express from 'express';
const port = 3001;
const app = new express();

//lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port} avec succès ok`);
});
