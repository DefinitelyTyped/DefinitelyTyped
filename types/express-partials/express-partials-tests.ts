

import express = require('express');
import partials = require('express-partials');

var app: express.Express = express();
app.use(partials());
