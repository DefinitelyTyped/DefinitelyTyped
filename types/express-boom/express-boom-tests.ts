

import express = require('express');
import boom = require('express-boom');
var app = express();

app.use(boom(), (req: express.Request, res: express.Response) => {
    res.boom.forbidden();
});
