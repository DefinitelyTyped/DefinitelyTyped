/// <reference path="./connect-flash.d.ts" />

import express = require('express');
import flash = require('connect-flash');

var app = express();

app.use(flash());
app.use(flash({
    unsafe: false
}));

app.use(function(req: Express.Request, res, next) {
    req.flash('Message');
    req.flash('info', 'Message');
});
