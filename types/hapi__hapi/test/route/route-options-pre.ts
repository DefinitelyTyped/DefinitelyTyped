// https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspre
import { Lifecycle, Request, ResponseToolkit, Server } from "@hapi/hapi";

const server = new Server({
    port: 8000,
});

const pre1: Lifecycle.Method = (request, h) => {
    return 'Hello';
};

const pre2: Lifecycle.Method = (request, h) => {
    return 'World';
};

const pre3: Lifecycle.Method = (request, h) => {
    return `request.pre.m1 request.pre.m2`;
};

server.route({
    method: 'GET',
    path: '/',
    options: {
        pre: [
            [
                // m1 and m2 executed in parallel
                { method: pre1, assign: 'm1' },
                { method: pre2, assign: 'm2' }
            ],
            { method: pre3, assign: 'm3' },
        ],
        handler(request, h) {
            return request.pre.m3 + '!\n';
        }
    }
});

server.start();

server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});
