import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Home page 04-03-2025'
  });
});
router.post('/', (req, res) => {
  res.json({
    message: req.body.message,
    auteur: req.body.auteur,
    age: req.body.age,
  });
});

router.put('/:id', (req, res) => {
  res.json({
    message: req.params.message,
    auteur: req.params.auteur,
    status: 'updated with success',
  });
});
router.delete('/:id', (req, res) => {
  res.json({
    message: 'Post deleted with success ' + req.params.id,
  
  });
});



export default router; // cas : ES6

// module.exports = router;  cas require: CommonJS