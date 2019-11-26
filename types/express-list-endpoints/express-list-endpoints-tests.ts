import express = require('express');
import ExpressListEndPoints = require('express-list-endpoints');

const app = express();

ExpressListEndPoints.getEndpoints(app); // $ExpectType Endpoint[]
