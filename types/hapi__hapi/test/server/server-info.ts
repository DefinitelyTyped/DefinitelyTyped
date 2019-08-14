// https://github.com/hapijs/hapi/blob/master/API.md#-serverinfo
import { Server } from "@hapi/hapi";

const server = new Server({
    port: 8000,
});
server.start();

console.log(server.info);
console.log('Server started at: ' + server.info.uri);
