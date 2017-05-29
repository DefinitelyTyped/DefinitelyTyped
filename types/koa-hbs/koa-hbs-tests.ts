import * as Koa from 'koa';
import hbs = require("koa-hbs");
import * as Path from 'path';

const app = new Koa();

app.use(hbs.middleware({
    viewPath: Path.join(__dirname, './views')
}));

app.use(async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello World!'
    });
});

app.listen(3000);
