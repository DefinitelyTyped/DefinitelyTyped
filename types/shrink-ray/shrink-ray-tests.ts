import express = require('express');
import shrinkRay = require('shrink-ray');

const app = express();

app.use(shrinkRay());
