import Koa = require("koa");
import error = require("koa-json-error");

const app = new Koa();

app.use(error({
    preFormat: err => ({ ...err }),
}));
