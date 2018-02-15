// from https://github.com/hapijs/nes#route-invocation

import Hapi = require('hapi');
import Nes = require('nes');

var server = new Hapi.Server();

server.register(Nes).then(() => {

    server.route({
        method: 'GET',
        path: '/h',
        config: {
            id: 'hello',
            handler: (request, h) => {

                return 'world!';
            }
        }
    });

    return server.start();
});
