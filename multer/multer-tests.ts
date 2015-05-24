/// <reference path="../express/express.d.ts" />
/// <reference path="multer.d.ts" />

import express = require('express');
import multer from "multer";

var app: express.Express = express();
app.use(multer());
