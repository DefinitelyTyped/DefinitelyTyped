// from https://github.com/hapijs/nes#broadcast

import Hapi = require('hapi');
import Nes = require('nes');

var server = new Hapi.Server();
server.connection();

server.register(Nes, function (err) {

    server.start(function (err) {

        server.broadcast('welcome!');
    });
});
