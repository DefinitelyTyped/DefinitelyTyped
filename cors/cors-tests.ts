/// <reference path="cors.d.ts" />

import express = require('express');
import cors = require('cors');

var app = express();
app.use(cors());
app.use(cors({
    maxAge: 100,
    credentials: true
}));
