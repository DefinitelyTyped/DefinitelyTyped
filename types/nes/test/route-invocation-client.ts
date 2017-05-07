// from https://github.com/hapijs/nes#route-invocation

import Nes = require('nes');

var client = new Nes.Client('ws://localhost');
client.connect(function (err) {

    client.request('hello', function (err, payload) {   // Can also request '/h'

        // payload -> 'world!'
    });
});
