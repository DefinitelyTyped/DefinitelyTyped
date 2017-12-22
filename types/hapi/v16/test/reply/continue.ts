
// From https://hapijs.com/api/16.1.1#replycontinueresult

import * as Hapi from '../../';
const server = new Hapi.Server();
server.connection({ port: 80 });

const onRequest: Hapi.ServerExtRequestHandler = function (request, reply) {

    // Change all requests to '/test'
    request.setUrl('/test');
    return reply.continue();
};

server.ext('onRequest', onRequest);
