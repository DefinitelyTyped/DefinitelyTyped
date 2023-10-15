import Koa = require("koa");
import Multer = require("koa__multer");
import websocket = require("koa-websocket");

const app = websocket(new Koa());

app.ws.use(async (ctx, next) => {
    ctx.websocket.on("message", (message) => {
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
    ctx.websocket.send("Hello world");
    await next();
});

app.listen(3000);

interface MyState {
    persist: string;
}

const typedApp = websocket(new Koa<MyState>());

typedApp.ws.use(async (ctx, next) => {
    ctx.websocket.on("message", (message) => {
        console.log(message + ctx.state.persist);
        const server = ctx.app.ws.server;
        if (server) {
            server.clients.forEach(client => {
                if (client !== ctx.websocket) {
                    client.send(message);
                }
            });
        }
    });
    ctx.websocket.send("Hello world");
    await next();
});

const supportMulterApp = websocket(new Koa());
supportMulterApp.use(Multer().single("source"));

supportMulterApp.use((ctx, next) => {
    next();
    console.log(ctx.file);
    ctx.body = "Hello world";
});

supportMulterApp.ws.use(async (ctx, next) => {
    ctx.websocket.on("message", (message) => {
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
    ctx.websocket.send("Hello world");
    await next();
});
