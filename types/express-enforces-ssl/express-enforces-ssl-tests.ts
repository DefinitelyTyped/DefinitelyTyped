import * as express from 'express';
import { enforceHTTPS } from 'express-enforces-ssl';

const app: express.Express = express();

app.use(enforceHTTPS());
