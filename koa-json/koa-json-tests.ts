/// <reference path="../koa/koa.d.ts" />
/// <reference path="koa-json.d.ts" />

import * as Koa from "koa";
import * as json from 'koa-json';

const app = new Koa();

app.use(json({
    pretty: false,
    param: 'pretty',
    spaces: 2
}));

app.listen(80)