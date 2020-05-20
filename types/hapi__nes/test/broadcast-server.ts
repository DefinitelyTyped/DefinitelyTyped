// from https://github.com/hapijs/nes#broadcast

import { Server } from '@hapi/hapi';
import Nes = require('@hapi/nes');

const server = new Server();

server.register(Nes).then(() => {

    return server.start().then(() => {

        server.broadcast('welcome!');
    });
});
