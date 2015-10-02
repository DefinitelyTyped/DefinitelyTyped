/// <reference path="api-error-handler.d.ts" />

import errorHandler = require('api-error-handler');
import express = require('express');

var api = express.Router();
api.get('/users/:userid', function (req, res, next) {

});

api.use(errorHandler());
