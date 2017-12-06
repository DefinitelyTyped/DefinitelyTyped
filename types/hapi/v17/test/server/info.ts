// From https://github.com/hapijs/hapi/blob/master/API.md#-serverinfo
import {Request, ResponseToolkit, Server, ServerOptions, ServerRoute} from "hapi";
import assert = require('assert');

let options: ServerOptions = {
    port: 8000,
};
const server = new Server(options);

// check the correct port
if(server.info) assert(server.info.port === 8000);
assert(server.info !== null);

server.start();
console.log(`Server running at: ${server.info!.uri}`);
