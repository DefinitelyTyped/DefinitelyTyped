// from https://github.com/hapijs/nes#subscriptions

import Nes = require('nes');

var client = new Nes.Client('ws://localhost');
client.connect().then(() => {

    const handler: Nes.Handler = (update, flags) => {

        // update -> { id: 5, status: 'complete' }
        // Second publish is not received (doesn't match)
    };

    return client.subscribe('/item/5', handler);
});

// Added in addition to nes doc example code

import NesClient = require('nes/client');

var client = new NesClient('ws://localhost');
client.connect().then(() => {

    const handler: NesClient.Handler = (update, flags) => {

        // update -> { id: 5, status: 'complete' }
        // Second publish is not received (doesn't match)
    };

    return client.subscribe('/item/5', handler);
});
