/// <reference path="../express/express.d.ts" />
/// <reference path="express-openapi.d.ts" />

import express = require('express');
import openapi = require('express-openapi');

var app = express();

var api:openapi.InitializedApi;
api = openapi.initialize({
    apiDoc: require('./api-doc.js'),
    app: app,
    routes: './api-routes'
});

app.use(function (err, req, res, next) {
    res.status(err.status).json(err);
});

app.listen(3000);