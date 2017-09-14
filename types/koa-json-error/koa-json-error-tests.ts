import * as Koa from "koa";
import * as error from "koa-json-error";

const app = new Koa();

app.use(error({
    preFormat: err => ({ ...err }),
}));
