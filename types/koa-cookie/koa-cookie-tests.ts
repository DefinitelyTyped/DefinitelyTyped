import Koa = require('koa');
import cookie = require('koa-cookie');

const app = new Koa();

app.use(cookie());

app.use((ctx) => {
    const cookie = ctx.cookie;
    console.log(cookie);
});

app.listen(8080);
