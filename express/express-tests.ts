/// <reference path="express.d.ts" />

import express = require('express');
var app = express();

app.engine('jade', require('jade').__express);
app.engine('html', require('ejs').renderFile);

app.use('/static', express.static(__dirname + '/public'));

// simple logger
app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000);
