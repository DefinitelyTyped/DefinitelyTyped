// From https://github.com/hapijs/hapi/blob/master/API.md#-hresponsevalue
import {Request, ResponseToolkit, Server, ServerOptions, ServerRoute} from "hapi";

const options: ServerOptions = {
    port: 8000,
};

const serverRoutes: ServerRoute[] = [
    // verbose notation
    {
        path: '/test1',
        method: 'GET',
        handler: function (request: Request, h: ResponseToolkit) {
            const response = h.response('success');
            response.type('text/plain');
            response.header('X-Custom', 'some-value');
            return response;
        }
    },
    // Chained notation
    {
        path: '/test2',
        method: 'GET',
        handler: function (request: Request, h: ResponseToolkit) {
            return h.response('success')
            .type('text/plain')
            .header('X-Custom', 'some-value');
        }
    },
];


const server = new Server(options);
server.route(serverRoutes);

server.start();
console.log('Server started at: ' + server.info.uri);