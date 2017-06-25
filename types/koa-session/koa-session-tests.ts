import * as Koa from 'koa';
import session = require('koa-session');

const app = new Koa();

app.use(session(app));

app.listen(3000);
