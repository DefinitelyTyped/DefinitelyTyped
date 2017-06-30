import http = require("http");
import * as Boom from 'boom';
import * as Hapi from 'hapi';
import * as Wreck from 'wreck';
import h2o2 = require('h2o2');

// https://github.com/hapijs/h2o2#manual-loading

const server = new Hapi.Server({});

server.register({
    register: h2o2
}, function (err) {

    if (err) {
        console.log('Failed to load h2o2');
    }

    server.start(function (err) {

        console.log('Server started at: ' + server.info!.uri);
    });
});

// https://github.com/hapijs/h2o2#replyproxyoptions

const handler: Hapi.RouteHandler = function (request, reply) {

    return reply.proxy({ host: 'example.com', port: 80, protocol: 'http' });
};

// https://github.com/hapijs/h2o2#using-the-host-port-protocol-options

server.route({
    method: 'GET',
    path: '/',
    handler: {
        proxy: {
            host: '10.33.33.1',
            port: '443',
            protocol: 'https'
        }
    }
});

// https://github.com/hapijs/h2o2#using-the-uri-option

server.route({
    method: 'GET',
    path: '/',
    handler: {
        proxy: {
            uri: 'https://some.upstream.service.com/that/has?what=you&want=todo'
        }
    }
});

// https://github.com/hapijs/h2o2#custom-uri-template-values

server.route({
    method: 'GET',
    path: '/foo',
    handler: {
        proxy: {
            uri: '{protocol}://{host}:{port}/go/to/{path}'
        }
    }
});

server.route({
    method: 'GET',
    path: '/foo/{bar}',
    handler: {
        proxy: {
            uri: 'https://some.upstream.service.com/some/path/to/{bar}'
        }
    }
});

// https://github.com/hapijs/h2o2#using-the-mapuri-and-onresponse-options

server.route({
    method: 'GET',
    path: '/',
    handler: {
        proxy: {
            mapUri: function (request, callback) {

                console.log('doing some aditional stuff before redirecting');
                callback(null, 'https://some.upstream.service.com/');
            },
            onResponse: function (err, res, request, reply, settings, ttl) {

                console.log('receiving the response from the upstream.');
                Wreck.read(res, { json: true }, function (err, payload) {

                    console.log('some payload manipulation if you want to.')
                    reply(payload).headers = res.headers as any;
                });
            }
        }
    }
});

/**
 * test code added in additional to code in docs.  Demonstrates that for the moment
 * you need flat
 * objects with typing along the way to benefit from typescript catching
 * misspelt, or unsupported keys.
 * This is because of an unknown reason.  Expecting this to work because:
 * "Object literals get special treatment and undergo excess
 * property checking when assigning them to other variables, or passing them
 * as arguments", see github.com/Microsoft/TypeScript
 */

var proxyOptions: h2o2.ProxyHandlerOptions = {
    host: '10.33.33.1',
    port: '443',
    protocol: 'https'  // errors correctly if misspelt
}

server.route({
    method: 'GET',
    path: '/',
    handler: {
        proxy: {
            host: '10.33.33.1',
            port: '443',
            BAD_protocol: 'https'  // TODO change typings to fix this / submit bug report
        }
    }
})

server.route({
    method: 'GET',
    path: '/',
    handler: {
        proxy: {
            uri: 'https://some.upstream.service.com/that/has?what=you&want=todo'
        }
    }
})

server.route({
    method: 'GET',
    path: '/',
    handler: {
        proxy: {
            mapUri: function (request: Hapi.Request, callback: (err: null | Boom.BoomError, value: string) => void) {

                console.log('doing some aditional stuff before redirecting');
                callback(null, 'https://some.upstream.service.com/');
            },
            onResponse: function (err: null | Boom.BoomError, res: http.IncomingMessage, request: Hapi.Request, reply: Hapi.ReplyWithContinue, settings: h2o2.ProxyHandlerOptions, ttl: number) {

                console.log('receiving the response from the upstream.');
                Wreck.read(res, { json: true }, function (err: null | Boom.BoomError, payload: any) {

                    console.log('some payload manipulation if you want to.')
                    reply(payload).headers = res.headers as any;
                });
            }
        }
    }
});
