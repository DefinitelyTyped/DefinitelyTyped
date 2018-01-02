// from https://github.com/hapijs/nes#subscription-filter

import Nes = require('nes');

var client = new Nes.Client('ws://localhost');

// Authenticate as 'john'

client.connect({ auth: { headers: { authorization: 'Basic am9objpzZWNyZXQ=' } } }).then(() => {

    var handler: Nes.Handler = (update) => {

        // First publish is not received (filtered due to updater key)
        // update -> { id: 6, status: 'initial', updater: 'steve' }
    };

    return client.subscribe('/items', handler);
});

// Added in addition to nes doc example code

import NesClient = require('nes/client');

var client = new NesClient('ws://localhost');

// Authenticate as 'john'

client.connect({ auth: { headers: { authorization: 'Basic am9objpzZWNyZXQ=' } } }).then(() => {

    var handler: NesClient.Handler = (update) => {

        // First publish is not received (filtered due to updater key)
        // update -> { id: 6, status: 'initial', updater: 'steve' }
    };

    return client.subscribe('/items', handler);
});
