import Koa = require('koa');
import websocket = require('koa-websocket');

const app = websocket(new Koa());

app.ws.use(async (ctx, next) => {
    ctx.websocket.on('message', (message) => {
        console.log(message);
        const server = ctx.app.ws.server;
        if (server) {
            server.clients.forEach(client => {
                if (client !== ctx.websocket) {
                    client.send(message);
                }
            });
        }
    });
    ctx.websocket.send('Hello world');
    await next();
});

app.listen(3000);
