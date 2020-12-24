// const express = require('express');
// const router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/', function (req, res) {
//   res.send({
//     name: 'test',
//     email: 'test@amazon.com',
//     address: 'seoul'
//   });
// });

// module.exports = router;

const router = require('express').Router({ mergeParams: true });

module.exports = (services, models) => {
  router.use('/api/test', require('./api/test')(services, models));
  return router;
};
