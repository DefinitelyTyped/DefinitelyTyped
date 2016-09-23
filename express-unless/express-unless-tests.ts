
import express = require('express');
import unless = require('express-unless');

var app = express();

var middleware:unless.RequestHandler = function (req, res, next) {
    next();
}
middleware.unless = unless;
app.use(middleware.unless({ method: 'OPTIONS' }));