import Koa = require('koa');
import requestId = require('koa-requestid');
const app = new Koa();

app.use(requestId());
app.use(async ctx => {
    ctx.body = ctx.state.id;
});

app.listen(3000);
