import * as Koa from 'koa';
import * as session from 'koa-session';

const app = new Koa();

app.use(session(app));

app.listen(3000);
