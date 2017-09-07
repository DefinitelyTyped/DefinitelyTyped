import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";

const app = new Koa();

app.use(bodyParser({ strict: false }));

app.listen(80)