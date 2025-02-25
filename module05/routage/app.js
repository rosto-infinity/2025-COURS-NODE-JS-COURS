import http from 'http';
import fileSystem from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Gestion des routes base sur l'URL demandée
  switch (req.url) {
    case  '/':
    case '/home':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Page d\'accueil');
      break;
    case  '/about':
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('À propos');
     break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain ; utf-8' });
      res.end('Page non trouvée');
      break;
  }
  
  });
  server.listen(3001, () => {
  console.log('Serveur démarré sur le port 3001 avec succès');
  });