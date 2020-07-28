// from https://github.com/hapijs/nes#subscriptions

import Nes = require('@hapi/nes');

var client = new Nes.Client('ws://localhost');
const handler: Nes.Handler = (update, flags) => {
    // update -> { id: 5, status: 'complete' }
    // Second publish is not received (doesn't match)
};
client.connect().then(() => {
    return client.subscribe('/item/5', handler);
}).then(() => {
    return client.unsubscribe('/item/5', handler)
});

// Added in addition to nes doc example code

import NesClient = require('@hapi/nes/lib/client');

var client = new NesClient.Client('ws://localhost');
client.connect().then(() => {

    const handler: NesClient.Client.Handler = (update, flags) => {

        // update -> { id: 5, status: 'complete' }
        // Second publish is not received (doesn't match)
    };

    return client.subscribe('/item/5', handler);
}).then(() => {
    return client.unsubscribe('/item/5')
});
