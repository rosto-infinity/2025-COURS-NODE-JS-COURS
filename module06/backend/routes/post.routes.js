import express from 'express';
import { setPosts } from '../controllers/post.controller.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Home page 04-03-2025'
  });
});
router.post('/', setPosts);

router.put('/:id', (req, res) => {
  res.json({
    message: req.params.message,
    auteur: req.params.auteur,
    status: 'updated with success',
  });
});
router.patch('/like-post/:id', (req, res) => {
  res.json({
    message: 'Post like success id :' + req.params.id,
  });
});
router.patch('/disliked-post/:id', (req, res) => {
  res.json({
    message: 'Post Disliked success id :' + req.params.id,
  });
});

export default router; // cas : ES6

// module.exports = router;  cas require: CommonJS