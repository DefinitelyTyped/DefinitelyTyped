import Koa = require('koa');
import websocket = require('koa-websocket');

const app = websocket(new Koa());

app.ws.use(async function(context, next) {
    this.websocket.on('message', (message) => {
        console.log(message);
    });
    this.websocket.send('Hello world');
    await next();
});

app.listen(3000);
