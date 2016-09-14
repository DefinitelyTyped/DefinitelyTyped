import * as Koa from "koa";
import * as error from "koa-json-error";
import { assign } from "lodash";

const app = new Koa();

app.use(error({
    preFormat: err => assign({}, err)
}));