const fileSystem = require('fs').promises;
async function ReadMyFile(myFile) {
  try {
    const content = await fileSystem.readFile(myFile, 'utf-8');

    
      console.log(`Contenu de ${myFile} :\n${content}`);
    } catch (erreur) {
        console.error(`Erreur lors de la lecture de ${myFile} :`, erreur);
    }
}

ReadMyFile('exemple.txt');
fetch('https://api.blablagues.net/?rub=blagues')
.then(response => response.json())
.then(data => {
console.log(data);
})
.catch(error => {
console.error('Erreur lors de la récupération des données:', error);
});