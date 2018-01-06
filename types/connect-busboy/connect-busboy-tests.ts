import * as connectBusboy from 'connect-busboy';

import * as express from 'express';

const options: connectBusboy.ConnectBusboyOptions = { immediate: true };
const result: express.RequestHandler = connectBusboy(options);
