// from https://github.com/hapijs/nes#route-invocation

import { Request, ResponseToolkit, Server } from '@hapi/hapi';
import Nes = require('@hapi/nes');

const server = new Server();

server.register(Nes).then(() => {

    server.route({
        method: 'GET',
        path: '/h',
        options: {
            id: 'hello',
            handler: (request: Request, h: ResponseToolkit) => {

                return 'world!';
            }
        }
    });

    return server.start();
});
