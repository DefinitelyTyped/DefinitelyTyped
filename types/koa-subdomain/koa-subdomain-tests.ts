import Koa from "koa";
import Router from "koa-router";
import Subdomain from "koa-subdomain";

const app = new Koa();
const router = new Router();

const subdomain = new Subdomain();

router.get("/", async ctx => {
    ctx.body = "Test";
});

subdomain.use("app", router.routes());

const result = subdomain.match(["app"]);

if (result === null) {
    throw Error("koa-subdomain fail. MatchResult cant be null");
}

app.use(result.middleware);
app.use(subdomain.routes());
app.listen(80);
