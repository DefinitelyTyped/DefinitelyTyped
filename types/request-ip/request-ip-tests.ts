import express = require('express');
import requestIp = require('request-ip');

var app = express();

app.use(requestIp.mw());

var ipMiddleware = function(req:express.Request, res:express.Response, next:Function) {
    var clientIp = requestIp.getClientIp(req);
    next();
};
