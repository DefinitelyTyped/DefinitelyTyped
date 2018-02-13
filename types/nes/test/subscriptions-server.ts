// from https://github.com/hapijs/nes#subscriptions

import Hapi = require('hapi');
import Nes = require('nes');

var server = new Hapi.Server();

server.register(Nes).then(() =>{;

    server.subscription('/item/{id}');

    return server.start().then(() => {

        server.publish('/item/5', {id: 5, status: 'complete'});
        server.publish('/item/6', {id: 6, status: 'initial'});
    });
})
