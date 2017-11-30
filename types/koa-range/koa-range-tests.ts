import * as range from "koa-range";
import * as Koa from "koa";

const app = new Koa();
app.use(range);
