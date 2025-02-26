import express from 'express';
const port = 3001;
const app =  express();

app.get('/post', (req, res) => {
  res.send('Hello World! les dev');
});
//lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port} avec succès ok`);
});
