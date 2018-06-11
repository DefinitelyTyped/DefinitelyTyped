import Koa = require('koa');
import KoaXmlBody = require('koa-xml-body');

const app = new Koa();
app.use(KoaXmlBody({
	onerror: (err, ctx) => {
		ctx.throw(err.message);
	}
}));

app.use((ctx) => {
	console.log(ctx.request.body);
});

app.listen(80);
