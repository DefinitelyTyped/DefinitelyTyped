'use strict';

import * as Hapi from 'hapi';
import Inert from 'inert';

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.register(Inert, (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/hello',
        handler: function (request, reply) {
            reply.file('./public/hello.html');
        }
    });
});
