import Koa = require("koa");
import json = require('koa-json');

const app = new Koa();

app.use(json({
    pretty: false,
    param: 'pretty',
    spaces: 2
}));

app.listen(80)
