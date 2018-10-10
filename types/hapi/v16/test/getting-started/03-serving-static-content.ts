'use strict';

import Hapi = require('hapi');
import Inert = require('inert');

const server = new Hapi.Server();

// from https://hapijs.com/tutorials/getting-started#creating-static-pages-and-content

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