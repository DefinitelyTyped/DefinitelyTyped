import http = require("http");
import * as Boom from 'boom';
import * as Hapi from 'hapi';
import * as Wreck from 'wreck';
import * as h2o2 from './index';

// const handler = function (request: Hapi.Request, reply: Hapi.IReply) {
//     return reply.proxy({ host: 'example.com', port: 80, protocol: 'http' });
// };

const server = new Hapi.Server({});

var proxyOptions: h2o2.ProxyHandlerOptions = {
    host: '10.33.33.1',
    port: '443',
    protocol: 'https'
};
var routeConfig: Hapi.RouteConfiguration = {
    method: 'GET',
    path: '/',
    handler: {
        proxy: proxyOptions
    }
};
server.route({
    method: 'GET',
    path: '/',
    handler: {
        proxy: proxyOptions
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        proxy: {
            uri: 'https://some.upstream.service.com/that/has?what=you&want=todo'
        }
    }
});

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
                    reply(payload).headers = res.headers;
                });
            }
        }
    }
});
