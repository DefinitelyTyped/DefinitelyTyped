/// <reference path="errorhandler.d.ts" />

import express = require('express');
import errorhandler = require('errorhandler');
var app = express();

app.use(errorhandler());
