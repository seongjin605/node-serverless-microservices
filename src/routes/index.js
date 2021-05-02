const app = require('express').Router({ mergeParams: true });
const test = require('./api/test');
const goods = require('./api/goods');

app.use('/api/test', test);
app.use('/api/goods', goods);

module.exports = app;
