/// <reference path="../express/express.d.ts" />
/// <reference path="multer.d.ts" />

import express = require('express');
import multer = require('multer');

var app: express.Express = express();
app.use(multer());