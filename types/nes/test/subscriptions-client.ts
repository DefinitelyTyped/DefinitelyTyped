// from https://github.com/hapijs/nes#subscriptions

import Nes = require('nes');

var client = new Nes.Client('ws://localhost');
client.connect(function (err) {

    var handler: Nes.Handler = function (update, flags) {

        // update -> { id: 5, status: 'complete' }
        // Second publish is not received (doesn't match)
    };

    client.subscribe('/item/5', handler, function (err) { });
});

// Added in addition to nes doc example code

import NesClient = require('nes/client');

var client = new NesClient('ws://localhost');
client.connect(function (err) {

    var handler: NesClient.Handler = function (update, flags) {

        // update -> { id: 5, status: 'complete' }
        // Second publish is not received (doesn't match)
    };

    client.subscribe('/item/5', handler, function (err) { });
});
