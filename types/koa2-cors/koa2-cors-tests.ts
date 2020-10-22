import Koa = require('koa');
import cors = require('koa2-cors');

const app = new Koa();
app.use(cors({
    origin(ctx: Koa.Context) {
        if (ctx.url === '/test') {
            return false;
        }
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.listen(3000);
