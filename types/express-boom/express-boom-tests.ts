import express = require('express');
import boom = require('express-boom');
const app = express();

app.use(boom(), (req: express.Request, res: express.Response) => {
    // In real app, you can only call one of these at a time (cannot send response several times)
    res.boom.forbidden();
    res.boom.badRequest('Bad request', {
      extra: true,
    });
    res.boom.unauthorized();
    res.boom.unsupportedMediaType('Unsupported type', {
      type: 'application/json',
    });
});
