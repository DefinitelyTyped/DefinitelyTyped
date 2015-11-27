/// <reference path="wreck.d.ts" />

import Wreck = require('wreck');

Wreck.get('https://google.com/', function (err, res, payload) {
    /* do stuff */
});


var method = 'GET'; // GET, POST, PUT, DELETE
var uri    = 'https://google.com/';
var readableStream = Wreck.toReadableStream('foo=bar');

var wreck = Wreck.defaults({
    headers: { 'x-foo-bar': 123 }
});

// cascading example -- does not alter `wreck`
var wreckWithTimeout = wreck.defaults({
    timeout: 5
});

// all attributes are optional
var options = {
    maxBytes:  1048576, // 1 MB, default: unlimited
    rejectUnauthorized: true,
    downstreamRes: null,
    agent: null,         // Node Core http.Agent
};

var optionalCallback = function (err, res) {

    /* handle err if it exists, in which case res will be undefined */

    // buffer the response stream
    Wreck.read(res, null, function (err, body) {
        /* do stuff */
    });
};

var req = wreck.request(method, uri, options, optionalCallback);
