import * as Koa from "koa";
import * as Router from "koa-router";
import * as Subdomain from "koa-subdomain";

const app = new Koa();
const router = new Router();

const subdomain = new Subdomain();

router.get("/", async ctx => {
    ctx.body = "Test";
});

subdomain.use("app", router.routes());

app.use(subdomain.routes());
app.listen(80);
