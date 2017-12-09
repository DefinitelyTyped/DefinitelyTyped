// From https://github.com/hapijs/hapi/blob/master/API.md#-serverinfo
import {Server} from "hapi";
import * as assert from "assert";

const server = new Server({
    port: 8000,
});
server.start();

// check the correct port
console.log(server.info);
if (server.info) assert(server.info.port === 8000);

assert(server.info !== null);
console.log('Server started at: ' + server.info.uri);
