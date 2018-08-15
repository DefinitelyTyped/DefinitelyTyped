
// From https://hapijs.com/api/16.1.1#serverhandlername-method

import * as Hapi from '../../';
const server = new Hapi.Server();
server.connection({ host: 'localhost', port: 8000 });

// Defines new handler for routes on this server
var handler: Hapi.MakeRouteHandler = function (route, options) {

    return function (request, reply) {

        return reply('new handler: ' + options.msg);
    }
};

server.handler('test', handler);

interface TestPluginConfig {
    msg: string;
}

declare module '../../' {
    interface RouteHandlerPlugins {
        test?: TestPluginConfig;
    }
}

server.route({
    method: 'GET',
    path: '/',
    handler: { test: { msg: 'test' } }
});

server.start(function (err) { });

// example 2

handler = function (route, options: TestPluginConfig) {

    return function (request, reply) {

        return reply('new handler: ' + options.msg);
    }
};

// Change the default payload processing for this handler
handler.defaults = {
    payload: {
        output: 'stream',
        parse: false
    }
};

server.handler('test', handler);
