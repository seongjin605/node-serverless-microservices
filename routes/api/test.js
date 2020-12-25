const router = require('express').Router({ mergeParams: true });

module.exports = (services, models) => {
  console.log('🚀 ~ file: test.js ~ line 12 ~ models', models);
  console.log('🚀 ~ file: test.js ~ line 12 ~ services', services);
  router.post('/', (req, res, next) => {
    res.status(200).send(['Jesus', 'I love to praise your name', 'My Story', 'Days of Elijah']);
    console.log('next:', next);
  });
  return router;
};
