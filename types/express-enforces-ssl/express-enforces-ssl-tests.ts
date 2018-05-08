import express = require('express');
import expressEnforcesSsl = require('express-enforces-ssl');

const app: express.Express = express();

app.use(expressEnforcesSsl());
