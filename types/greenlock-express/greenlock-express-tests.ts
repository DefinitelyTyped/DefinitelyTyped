import express, { Express } from 'express';
import { RequestListener } from 'http';
import greenlock, { opts } from 'greenlock-express';

const o: opts = {
  packageRoot: './',
  maintainerEmail: 'user@example.com',
  configDir: './greenlock.d',
  cluster: false
};

const expressApp: Express = express();

// $ExpectType serve
greenlock.init(o);

// $ExpectType serve
greenlock.init(o).ready();

// $ExpectType serve
greenlock.init(o).ready(expressApp);

// $ExpectType serve
greenlock.init(o).master();

// $ExpectType serve
greenlock.init(o).master(expressApp);

// $ExpectType void
greenlock.init(o).serve(expressApp);

const genericApp: RequestListener = (req, res) => {};

// $ExpectType serve
greenlock.init(o);

// $ExpectType serve
greenlock.init(o).ready();

// $ExpectType serve
greenlock.init(o).ready(genericApp);

// $ExpectType serve
greenlock.init(o).master();

// $ExpectType serve
greenlock.init(o).master(genericApp);

// $ExpectType void
greenlock.init(o).serve(genericApp);
