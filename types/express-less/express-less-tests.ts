
import express = require('express');
import expressLess = require('express-less');

var app = express();
var lessOptions: expressLess.Options = {};
lessOptions.compress = true;
lessOptions.debug = true;

app.use('/less-css', expressLess(__dirname));
app.use('/less-css-with-options', expressLess(__dirname + "/less", lessOptions));
