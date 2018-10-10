import Koa = require('koa');
import websocket = require('koa-websocket');

const app = websocket(new Koa());

app.ws.use(async (ctx, next) => {
    ctx.websocket.on('message', (message) => {
        console.log(message);
    });
    ctx.websocket.send('Hello world');
    await next();
});

app.listen(3000);
