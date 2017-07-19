import express = require('express');
import expressEnforcesSsl = require('express-enforces-ssl');

let app: express.Express = express();

app.use(expressEnforcesSsl());
