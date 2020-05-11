import connectBusboy = require('connect-busboy');

import * as express from 'express';

const options: connectBusboy.ConnectBusboyOptions = { immediate: true };
const result: express.RequestHandler = connectBusboy(options);

const app = express();

app.use(connectBusboy());
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    req.busboy.on('file', () => {});
});
