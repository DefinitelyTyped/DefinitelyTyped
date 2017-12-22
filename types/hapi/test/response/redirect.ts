// https://github.com/hapijs/hapi/blob/master/API.md#-hredirecturi
import { Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "hapi";

const options: ServerOptions = {
    port: 8000,
};

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: (request: Request, h: ResponseToolkit) => {
        return h.redirect('http://example.com');
    }
};

const server = new Server(options);
server.route(serverRoute);

server.start();
console.log('Server started at: ' + server.info.uri);
