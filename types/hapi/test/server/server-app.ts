// https://github.com/hapijs/hapi/blob/master/API.md#-serverapp
import { Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "hapi";

const options: ServerOptions = {
    port: 8000,
};

const server = new Server(options);
server.app.key1 = 'value2';
server.app.key2 = {};
server.app.key3 = [];

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler(request, h) {
        return 'key: ' + request.server.app.ke1;
    }
};

server.route(serverRoute);

server.start();
console.log('Server started at: ' + server.info.uri);
