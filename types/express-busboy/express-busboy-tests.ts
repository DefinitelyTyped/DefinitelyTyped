import * as expressBusboy from 'express-busboy';

import * as express from 'express';

const app: express.Application = express();
const options: expressBusboy.ExpressBusboyOptions = {};
const result: express.Application = expressBusboy.extend(app, options);
