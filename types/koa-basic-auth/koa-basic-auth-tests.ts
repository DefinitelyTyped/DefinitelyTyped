import Koa = require("koa");
import auth = require("koa-basic-auth");

const app = new Koa();

app.use(auth({name: "test", pass: "test"}));

app.listen(80);
