// from https://hapijs.com/tutorials/getting-started#adding-routes
import { Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "@hapi/hapi";

const options: ServerOptions = {
    port: 8000,
};

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler(request, h) {
        return 'ok: ' + request.path;
    }
};

const serverRoutes: ServerRoute[] = [
    {
        path: '/test1',
        method: 'GET',
        handler(request, h) {
            return 'ok: ' + request.path;
        }
    },
    {
        path: '/test2',
        method: 'GET',
        handler(request, h) {
            return 'ok: ' + request.path;
        }
    },
];

const server = new Server(options);
server.route(serverRoute);
server.route(serverRoutes);

server.start();
console.log('Server started at: ' + server.info.uri);
