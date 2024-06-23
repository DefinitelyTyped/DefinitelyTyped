import range = require("koa-range");
import Koa = require("koa");

const app = new Koa();
app.use(range);
