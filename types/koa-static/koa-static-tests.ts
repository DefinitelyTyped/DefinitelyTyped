import Koa = require("koa");
import serve = require("koa-static");

const app = new Koa();

app.use(serve('.', {
    index: false,
    defer: false,
    extensions: ['html'],
}));

app.listen(80);
