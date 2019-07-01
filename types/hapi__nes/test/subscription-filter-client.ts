// from https://github.com/hapijs/nes#subscription-filter

import Nes = require('@hapi/nes');

var client = new Nes.Client('ws://localhost');

// Authenticate as 'john'

client.connect({ auth: { headers: { authorization: 'Basic am9objpzZWNyZXQ=' } } }).then(() => {

    const handler: Nes.Handler = (update) => {

        // First publish is not received (filtered due to updater key)
        // update -> { id: 6, status: 'initial', updater: 'steve' }
    };

    return client.subscribe('/items', handler);
});

// Added in addition to nes doc example code

import NesClient = require('@hapi/nes/lib/client');

var client = new NesClient.Client('ws://localhost');

// Authenticate as 'john'

client.connect({ auth: { headers: { authorization: 'Basic am9objpzZWNyZXQ=' } } }).then(() => {

    const handler: NesClient.Client.Handler = (update) => {

        // First publish is not received (filtered due to updater key)
        // update -> { id: 6, status: 'initial', updater: 'steve' }
    };

    return client.subscribe('/items', handler);
});
