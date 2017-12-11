// https://github.com/hapijs/hapi/blob/master/API.md#-servermime
import {Server, ServerOptions} from "hapi";

const options:ServerOptions = {
    port: 8000,
    mime: {
        override: {
            'node/module': {
                source: 'steve',
                compressible: false,
                extensions: ['node', 'module', 'npm'],
                type: 'node/module'
            }
        }
    }
};

const server = new Server(options);
console.log(server.mime.path('code.js').type)        // 'application/javascript'
console.log(server.mime.path('file.npm').type)        // 'node/module'

server.start();
