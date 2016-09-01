/// <reference path="../koa/koa.d.ts" />
/// <reference path="koa-json-error.d.ts" />
/// <reference path="../lodash/lodash.d.ts" />

import * as Koa from "koa";
import * as error from "koa-json-error";
import { assign } from "lodash";

const app = new Koa();

app.use(error({
    preFormat: err => assign({}, err)
}));