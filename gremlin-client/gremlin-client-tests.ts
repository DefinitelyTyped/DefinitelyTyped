// Type definitions for Gremlin-Client 1.0.3
// Project: https://www.npmjs.com/package/gremlin-client
// Definitions by: Prabakar Kalivaradan <https://github.com/kprabakar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This is just kick-starter definition. Should be improved much more.

/// <reference path='./gremlin-client.d.ts' />

'use strict';

import gremlin = require('gremlin-client');

//should have gremlin server running on local on port 8182
let _client = gremlin.createClient(8182, 'localhost', {
    session: true
});

//print all vertices in the graph
_client.execute('g.V()', null, function (err: any, results: any) {
    if (!err) {
        console.log(results);
    }
});
