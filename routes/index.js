const app = require('express').Router({ mergeParams: true });
const test = require('./api/test');

app.use('/api/test', test);

module.exports = app;
