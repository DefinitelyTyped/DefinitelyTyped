
import express = require('express');
import compress = require('compression');

var app = express();
app.use(compress());
app.use(compress({
    threshold: 512
}));
