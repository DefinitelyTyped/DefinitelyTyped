// https://github.com/hapijs/hapi/blob/master/API.md#errors
import { Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "@hapi/hapi";
import * as Boom from "boom";

const options: ServerOptions = {
    port: 8000,
};

const serverRoutes: ServerRoute[] = [
    {
        path: '/badRequest',
        method: 'GET',
        handler(request, h) {
            throw Boom.badRequest('Unsupported parameter');
        }
    },
    {
        path: '/internal',
        method: 'GET',
        handler(request, h) {
            throw new Error('unexpect error');
        }
    },
];

const server = new Server(options);
server.route(serverRoutes);

server.start();
console.log('Server started at: ' + server.info.uri);
