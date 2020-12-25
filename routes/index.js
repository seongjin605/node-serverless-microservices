const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/api/test', (req, res) => {
  res.send({
    name: 'test',
    email: 'test@amazon.com',
    address: 'seoul'
  });
});

module.exports = router;
