const server = require('http')
import server from 'http'
const port = 5000;
const app = express();
app.get("/post", (req, res) => {
  res.json({message : "Voici les données envoyer ok !"})
})
// Lancer le serveur au port 5000
app.listen(port, () => console.log("Le serveur a démarré avec succèss au port  " + port));