const app = require('express').Router({ mergeParams: true });
const test = require('./api/test');
const rabbit = require('./api/rabbit');

app.use('/api/test', test);
app.use('/api/rabbit', rabbit);

module.exports = app;
