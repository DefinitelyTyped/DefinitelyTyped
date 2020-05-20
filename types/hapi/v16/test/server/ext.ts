
// From https://hapijs.com/api/16.1.1#serverextevents

import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({ port: 80 });

server.ext({
    type: 'onRequest',
    method: function (request, reply) {

        // Change all requests to '/test'
        request.setUrl('/test');
        return reply.continue();
    }
});

var handler: Hapi.RouteHandler = function (request, reply) {

    return reply({ status: 'ok' });
};

server.route({ method: 'GET', path: '/test', handler: handler });
server.start((err) => { });

// All requests will get routed to '/test'


// Example 2

server.ext('onRequest', function (request, reply) {

    // Change all requests to '/test'
    request.setUrl('/test');
    return reply.continue();
});

handler = function (request, reply) {

    return reply({ status: 'ok' });
};

server.route({ method: 'GET', path: '/test', handler: handler });
server.start((err) => { });

// All requests will get routed to '/test'
