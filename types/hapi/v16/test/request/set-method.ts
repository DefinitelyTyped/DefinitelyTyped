
// From https://hapijs.com/api/16.1.1#requestsetmethodmethod

import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({ port: 80 });

const onRequest: Hapi.ServerExtRequestHandler = function (request, reply) {

    // Change all requests to 'GET'
    request.setMethod('GET');
    return reply.continue();
};

server.ext('onRequest', onRequest);
