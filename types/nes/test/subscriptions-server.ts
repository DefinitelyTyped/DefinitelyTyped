// from https://github.com/hapijs/nes#subscriptions

import Hapi = require('hapi');
import Nes = require('nes');

var server = new Hapi.Server();
server.connection();

server.register(Nes, function (err) {

    server.subscription('/item/{id}');

    server.start(function (err) {

        server.publish('/item/5', { id: 5, status: 'complete' });
        server.publish('/item/6', { id: 6, status: 'initial' });
    });
});
