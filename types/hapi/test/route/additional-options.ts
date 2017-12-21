'use strict';

import * as Hapi from 'hapi';

var authConfig: Hapi.RouteAdditionalConfigurationOptions = {
    app: {},
    payload: {},
};

var extConfigSingle: Hapi.RouteAdditionalConfigurationOptions = {
    ext: {
        type: 'onPreAuth',
        method: <Hapi.ServerExtRequestHandler> function (request, reply) {
            reply('ok');
        }
    }
}

var extConfigMulti: Hapi.RouteAdditionalConfigurationOptions = {
    ext: [{
        type: 'onPreAuth',
        method: <Hapi.ServerExtRequestHandler> function (request, reply) {
            reply('ok');
        }
    }, {
        type: 'onPostAuth',
        method: <Hapi.ServerExtRequestHandler> function (request, reply) {
            reply('ok');
        }
    }, {
        type: 'onPostStart',
        method: <Hapi.ServerExtFunction> function (server, next) {
            next();
        }
  }]
}

// Handler in config
const user: Hapi.RouteAdditionalConfigurationOptions = {
    cache: { expiresIn: 5000, statuses: [200, 201] },
    handler: function (request, reply) {
        return reply({ name: 'John' });
    }
};

// Add in addition to examples in docs

var cache: Hapi.RouteCacheOptions = {
    privacy: 'default',
    expiresIn: 5000,
};

cache = {
    privacy: 'default',
    expiresAt: '22:44',
};

cache = {
    privacy: 'default',
};

/* should error (as does!)
var cache: Hapi.RouteCacheOptions = {
    expiresIn: 5000,
    expiresAt: '22:44',
};
*/

var payloadOptions: Hapi.RoutePayloadConfigurationObject = {
    allow: 'multipart/form-data',
    maxBytes: 123,
    output: 'file',
    timeout: 1000
};

var payloadOptions: Hapi.RoutePayloadConfigurationObject = {
    allow: 'multipart/form-data',
    maxBytes: 123,
    output: 'file',
    timeout: false
};
