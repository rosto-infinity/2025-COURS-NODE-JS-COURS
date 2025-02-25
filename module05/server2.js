
function simulateAsyncOperation(id, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        // [0.1; 0.2; 0.3; 0.4; 0.5; 0.6; 0.7; 0.8; 0.9; 1]
        reject(`Erreur dans l'opération ${id}`);
      } else {
        resolve(`Résultat de l'opération ${id}`);
      }
    }, delay);
  });
}

const operations = [
  simulateAsyncOperation(1, 80),
  simulateAsyncOperation(2, 5000),
  simulateAsyncOperation(3, 800)
];

Promise.all(operations)
  .then(results => {
    console.log('Tous les résultats:', results);
  })
  .catch(error => {
    console.error('Une erreur est survenue:', error);
  });
