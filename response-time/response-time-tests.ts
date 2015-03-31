/// <reference path="response-time.d.ts" />

import express = require('express');
import responseTime = require('response-time');
var app = express();

app.use(responseTime());
app.use(responseTime({
    digits: 3,
    header: 'X-Response-Time',
    suffix: true
}));
