import Koa = require('koa');
import * as route from 'koa-route';

const app: Koa = new Koa();

const getData = async (param: string) => Promise.resolve({ foo: param });

const getter = route.get('/');
const getterMiddleware = getter((ctx, next) => {
    ctx.body = { status: 'OK' };
    next();
});

const putter = route.put('/api/:param', async (ctx, param, next) => {
    const data = await getData(param);
    ctx.body = { status: 'OK', ...data };
    next();
});

app.use(getterMiddleware);
app.use(putter);
