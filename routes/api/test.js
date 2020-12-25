const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', (req, res) => {
  res.send({ method: 'GET', name: 'Lorem Ipsum' });
});

// define the about route
router.post('/', (req, res) => {
  res.send({ method: 'POST', name: 'Ívarr hinn Beinlausi' });
});

module.exports = router;
