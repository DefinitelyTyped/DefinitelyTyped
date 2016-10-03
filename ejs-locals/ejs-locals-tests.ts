/// <reference path="../express/express.d.ts" />
/// <reference path="ejs-locals.d.ts" />

import express = require('express');
import ejsLocals = require('ejs-locals');

var app: express.Express = express();
app.engine('ejs', ejsLocals);