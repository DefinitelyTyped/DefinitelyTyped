/// <reference path="express-route-fs.d.ts" />


import express = require('express');
import routeFs = require('express-route-fs');

var app = express();

routeFs(app);
