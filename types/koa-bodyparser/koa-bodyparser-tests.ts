import * as Koa from "koa";
import bodyParser = require("koa-bodyparser");

const app = new Koa();

app.use(bodyParser({ strict: false }));

app.listen(80)