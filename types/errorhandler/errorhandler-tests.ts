import express = require('express');
import errorhandler = require('errorhandler');

var app = express();

app.use(errorhandler());

app.use(errorhandler({ log: true }));

app.use(errorhandler({ log: (err, str, req, res) => {
    const { message, name, stack } = err;
    const messageIsStr = message === str;

    const requestWasFresh = req && req.fresh;
    const responseContentType = res && res.contentType
}}))
