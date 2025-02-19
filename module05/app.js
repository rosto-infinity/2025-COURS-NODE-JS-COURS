const server = require('http')
const port = 5000;
const app = express();
app.get("/post", (req, res) => {
  res.json({message : "Voici les données envoyer ok !"})
})