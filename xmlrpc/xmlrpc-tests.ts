/// <reference path="xmlrpc.d.ts" />

import * as xmlrpc from 'xmlrpc';

const serverOpts = {
    host: 'localhost',
    port: 9000
};

const server = xmlrpc.createServer(serverOpts, () => {
    server.on('NotFound', method => {
        console.log(`Method ${method} not found`);
    })

    server.on('hello', (err, params, cb) => {
        cb(null, `Hello, ${params[0]}!`);
    });

    var client = xmlrpc.createClient({
        host: 'localhost',
        port: 9000,
        path: '/'
    });

    client.methodCall('hello', ['world'], (err, val) => {
        console.log(val);
    });
});
