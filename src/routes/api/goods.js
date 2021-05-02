const express = require('express');
const { HttpError } = require('http-errors');
const router = express.Router();
const connection = require('../../config/db');

const regiSterResponse = {
  insertId: null,
  message: 'Goods has been successfully registered.'
};

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', (req, res) => {
  res.send({ method: 'GET', name: '산토끼' });
});

// define the about route
router.post('/register', async (req, res) => {
  // res.send({ method: 'POST', name: '집토끼' });
  const { body = {} } = req;
  console.log('body:', body);
  const registeredGood = await connection.query(
    'INSERT INTO goods(name, category, price, description) values(?, ?, ?, ?)',
    [body.name, body.category, body.price, body.description],
    (error, result, fields) => {
      if (error) {
        throw error;
      }
      console.log('result: ', result);
      regiSterResponse.insertId = result.insertId;
      res.status(200).send(regiSterResponse);
    }
  );
  console.log('registeredGood:', registeredGood);
  connection.end();
});

module.exports = router;
