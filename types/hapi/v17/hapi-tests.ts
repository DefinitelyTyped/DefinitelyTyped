import {Server, ServerOptions} from "hapi";

const options:ServerOptions = {
    port: 8000
}

const server = new Server(options);
server.start();

console.log('Server started at: ' + server.info.uri);


