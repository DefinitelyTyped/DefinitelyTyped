// https://github.com/hapijs/hapi/blob/master/API.md#-servermethods
import { Server } from "@hapi/hapi";

const server = new Server({
    port: 8000,
});
server.start();

server.method('add', (a, b) => (a + b));
const result = server.methods.add(1, 2);    // 3
console.log(result);
