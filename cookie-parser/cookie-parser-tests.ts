/// <reference path="cookie-parser.d.ts" />

import express = require('express');
import cookieParser from "cookie-parser";

var app = express();
app.use(cookieParser('optional secret string'));
