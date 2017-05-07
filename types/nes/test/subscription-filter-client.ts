// from https://github.com/hapijs/nes#subscription-filter

import Nes = require('nes');

var client = new Nes.Client('ws://localhost');

// Authenticate as 'john'

client.connect({ auth: { headers: { authorization: 'Basic am9objpzZWNyZXQ=' } } }, function (err) {

    var handler: Nes.Handler = function (err, update) {

        // First publish is not received (filtered due to updater key)
        // update -> { id: 6, status: 'initial', updater: 'steve' }
    };

    client.subscribe('/items', handler, function (err) { });
});
