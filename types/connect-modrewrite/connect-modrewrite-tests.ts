import modRewrite = require('connect-modrewrite');
import express = require('express');

var app = express();

app.use(modRewrite([
   '^/test$ /index.html',
    '^/test/\\d*$ /index.html [L]',
    '^/test/\\d*/\\d*$ /flag.html [L]',
]));
