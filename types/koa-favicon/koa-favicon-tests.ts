import Koa = require("koa");
import favicon = require("koa-favicon");

const app = new Koa();

app.use(favicon(__dirname + "/public/favicon.ico"));

app.listen(80)