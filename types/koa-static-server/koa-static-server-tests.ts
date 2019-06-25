import Koa = require("koa");
import serve = require("koa-static-server");

const app = new Koa();

app.use(serve({rootDir: 'web'}));

app.listen(80);
