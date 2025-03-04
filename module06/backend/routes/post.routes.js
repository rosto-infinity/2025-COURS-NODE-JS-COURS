import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Home page ok'
  });
});

router.post('/', (req, res) => {
  res.json({
    message: req.body.message
  });
});
export default router; // cas : ES6

// module.exports = router;  cas require: CommonJS