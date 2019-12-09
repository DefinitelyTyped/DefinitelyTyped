import express = require('express');
import listEndpoints = require('express-list-endpoints');

const app = express();

listEndpoints(app);
