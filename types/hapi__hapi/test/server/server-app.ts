// https://github.com/hapijs/hapi/blob/master/API.md#-serverapp
import { Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "@hapi/hapi";

const options: ServerOptions = {
    port: 8000,
};

declare module "@hapi/hapi" {
    // Demonstrate augmenting the application state.
    interface ServerApplicationState {
        key?: string;
    }
}

const server = new Server(options);
server.app.key = 'value2';

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler(request, h) {
        return 'key: ' + request.server.app.key;
    }
};

server.route(serverRoute);

server.start();
console.log('Server started at: ' + server.info.uri);
