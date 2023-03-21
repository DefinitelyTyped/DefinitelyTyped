import Koa = require('koa');
import KoaXmlBody = require('koa-xml-body');

const app = new Koa();
app.use(KoaXmlBody({
    key: 'body',
    length: 1000,
    onerror: (err, ctx) => {
        ctx.throw(err.message);
    }
}));

app.use((ctx) => {
    console.log(ctx.request.body);
});

app.listen(80);
