import connectBusboy = require('connect-busboy');

import * as express from 'express';

const options: connectBusboy.ConnectBusboyOptions = { immediate: true };
const result: express.RequestHandler = connectBusboy(options);
