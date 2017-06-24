
import express = require('express');
import jwt = require('express-jwt');
import unless = require('express-unless');

var app = express();

app.use(jwt({
    secret: 'shhhhhhared-secret'
}));
app.use(jwt({
    secret: 'shhhhhhared-secret',
    userProperty: 'auth'
}));

var jwtCheck = jwt({
    secret: 'shhhhhhared-secret'
});
jwtCheck.unless = unless;
app.use(jwtCheck.unless({ path: '/api/login' }));