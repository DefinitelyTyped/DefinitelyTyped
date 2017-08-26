
import express = require('express');
import favicon = require('serve-favicon');
var app = express();

app.use(favicon(__dirname + '/public/favicon.ico', {
    maxAge: 86400000
}));
