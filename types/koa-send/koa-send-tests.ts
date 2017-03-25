
import * as Koa from 'koa';
import * as send from 'koa-send';

const app = new Koa();

app.use(async (ctx: Koa.Context) => {
    const path: string = await send(ctx, 'stimpy.html');
});

app.use(async (ctx: Koa.Context) => {
    await send(ctx, 'stimpy.html', {
        root: '../static-files',
        index: 'index.html',
        maxAge: 10,
        hidden: true,
        format: true,
        gzip: true,
        setHeaders: () => {},
        extensions: ['shemp'],
    });
});
