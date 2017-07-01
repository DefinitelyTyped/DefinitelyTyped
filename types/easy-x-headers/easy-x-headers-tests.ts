/**
 * Created by karl on 14/07/15.
 */




import express = require('express');
import xHeaders = require('easy-x-headers');

var app = express();
app.use(xHeaders.getMiddleware());

app.get('/', function (req, res) {
    res.json(req.info);
});
