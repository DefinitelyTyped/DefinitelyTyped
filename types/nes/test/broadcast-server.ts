// from https://github.com/hapijs/nes#broadcast

import { Server } from 'hapi';
import Nes = require('nes');

const server = new Server();

server.register(Nes).then(() => {

    return server.start().then(() => {

        server.broadcast('welcome!');
    });
});
