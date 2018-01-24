import * as Koa from 'koa';
import * as connect from 'connect';
import expressToKoa = require('express-to-koa');

const app = new Koa();
const middleware: connect.NextHandleFunction = (req, res, next) => {
    // 'express middleware'
    next();
};

app.use(expressToKoa(middleware));
app.listen(3000);
