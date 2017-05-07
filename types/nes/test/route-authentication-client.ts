// from https://github.com/hapijs/nes#route-authentication

import Nes = require('nes');

var client = new Nes.Client('ws://localhost');
client.connect({ auth: { headers: { authorization: 'Basic am9objpzZWNyZXQ=' } } }, function (err) {

    client.request('hello', function (err, payload) {   // Can also request '/h'

        // payload -> 'Hello John Doe'
    });
});
