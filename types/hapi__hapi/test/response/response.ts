// https://github.com/hapijs/hapi/blob/master/API.md#-hresponsevalue
import { Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "@hapi/hapi";

const options: ServerOptions = {
    port: 8000,
};

const serverRoutes: ServerRoute[] = [
    // Detailed notation
    {
        path: '/test1',
        method: 'GET',
        handler(request, h) {
            const response = h.response('success');
            response.type('text/plain');
            response.header('X-Custom', 'some-value');
            response.charset('iso-8859-1');
            response.charset();
            return response;
        }
    },
    // Chained notation
    {
        path: '/test2',
        method: 'GET',
        handler(request, h) {
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
