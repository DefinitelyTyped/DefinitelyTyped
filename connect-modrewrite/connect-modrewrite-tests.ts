/// <reference path='./connect-modrewrite.d.ts' />
/// <reference path='../express/express.d.ts' />

import modRewrite = require('connect-modrewrite');
import express = require('express');

var app = express();

app.use(modRewrite([
   '^/test$ /index.html',
    '^/test/\\d*$ /index.html [L]',
    '^/test/\\d*/\\d*$ /flag.html [L]',
]));