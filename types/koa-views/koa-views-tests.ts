import * as Koa from "koa";
import * as views from "koa-views";

const app = new Koa();

app.use(views('/views', {
    map: {
        html: 'underscore'
    },
    extension: '.html',
    engineSource: {},
    options: {}
}));

app.use((ctx: Koa.Context) => {
    ctx.render('user', {
        user: 'John'
    }).then(() => console.log('done render call'));
});
