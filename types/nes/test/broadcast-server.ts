// from https://github.com/hapijs/nes#broadcast

import Hapi = require('hapi');
import Nes = require('nes');

var server = new Hapi.Server();

server.register(Nes).then(() => {

    return server.start().then(() => {

        server.broadcast('welcome!');
    });
});
