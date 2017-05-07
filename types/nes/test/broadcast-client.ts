// from https://github.com/hapijs/nes#broadcast

import Nes = require('nes');

var client = new Nes.Client('ws://localhost');
client.connect(function (err) {

    client.onUpdate = function (update) {

        // update -> 'welcome!'
    };
});
