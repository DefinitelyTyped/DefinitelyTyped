import conditional = require('express-conditional-middleware');
import * as express from 'express';

const app: express.Application = <any> {};
const handler: express.RequestHandler = <any> {};

app.use(conditional(true, handler));
app.use(conditional(() => false, handler));
app.use(conditional(() => false, handler, handler));
