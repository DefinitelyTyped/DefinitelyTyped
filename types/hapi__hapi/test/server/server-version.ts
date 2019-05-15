// https://github.com/hapijs/hapi/blob/master/API.md#-serverversion
import { Server } from "@hapi/hapi";

const server = new Server({
    port: 8000,
});

server.start();
console.log(server.version);        // 17.x.x
