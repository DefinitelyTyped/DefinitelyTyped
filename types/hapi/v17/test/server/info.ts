// From https://github.com/hapijs/hapi/blob/master/API.md#-serverinfo
import {Server, ServerOptions} from "hapi";
import assert = require('assert');

const options: ServerOptions = {
    port: 8000,
};
const server = new Server(options);

// check the correct port
if(server.info) assert(server.info.port === 8000);
assert(server.info !== null);

server.start();
console.log('Server started at: ' + server.info.uri);
