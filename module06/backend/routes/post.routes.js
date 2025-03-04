import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Home page ok'
  });
});

router.post('/', (req, res) => {
  res.json({
    message: req.body.message,
    author: req.body.author
  });
});

// Route PUT avec ID
router.put('/:id', (req, res) => {
  const id = req.params.id; // Récupérer l'ID depuis l'URL
  res.json({
    id: id, // ID de la ressource mise à jour
    message: req.body.message, // Message mis à jour
    author: req.body.author,   // Auteur mis à jour
    status: 'Updated successfully' // Indicateur de succès
  });
});


// Route DELETE avec ID
router.delete('/:id', (req, res) => {
  const id = req.params.id; // Récupérer l'ID depuis l'URL
  // Logique pour supprimer la ressource avec l'ID
  res.json({
    id: id, // ID de la ressource supprimée
    status: 'Deleted successfully' // Indicateur de succès
  });
});

// Route PATCH avec ID
// router.patch('/:id', (req, res) => {
//   const id = req.params.id; // Récupérer l'ID depuis l'URL
//   const updates = req.body; // Récupérer les données à mettre à jour depuis le corps de la requête

//   // Logique pour mettre à jour la ressource avec l'ID
//   // Remplacez ceci par votre logique de mise à jour (par exemple, mise à jour dans une base de données)

//   res.json({
//     id: id, // ID de la ressource mise à jour
//     updates: updates, // Les données mises à jour
//     status: 'Updated successfully' // Indicateur de succès
//   });
// });



router.patch("/like-post/:id", (req, res) => {
  res.json({
    message: ` Post ${req.params.id} liked successfully`
  });
  });
export default router; // cas : ES6

// module.exports = router;  cas require: CommonJS