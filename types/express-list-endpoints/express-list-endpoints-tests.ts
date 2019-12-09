import express = require('express');
import getEndpoints = require('express-list-endpoints');

const app = express();

getEndpoints(app);
