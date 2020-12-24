const router = require('express').Router({ mergeParams: true });

// function test() {
//   res.send({
//     name: 'test',
//     email: 'test@amazon.com',
//     address: 'seoul'
//   });
// }

module.exports = (services, models) => {
  console.log('🚀 ~ file: test.js ~ line 12 ~ models', models);
  console.log('🚀 ~ file: test.js ~ line 12 ~ services', services);
  router.post('/', function (req, res) {
    res.send({
      name: 'test',
      email: 'test@amazon.com',
      address: 'seoul'
    });
  });
  return router;
};
