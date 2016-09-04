/// <reference path="../express/express.d.ts" />
/// <reference path="express-partials.d.ts" />

import express = require('express');
import partials = require('express-partials');

var app: express.Express = express();
app.use(partials());