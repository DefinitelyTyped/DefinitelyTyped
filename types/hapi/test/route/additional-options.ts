'use strict';

import * as Hapi from 'hapi';

var authConfig: Hapi.RouteAdditionalConfigurationOptions = {
  app: {}
};

// Handler in config
const user: Hapi.RouteAdditionalConfigurationOptions = {
    cache: { expiresIn: 5000 },
    handler: function (request, reply) {

        return reply({ name: 'John' });
    }
};


// Add in addition to examples in docs

var cache: Hapi.RouteCacheOptions = {
    privacy: 'default',
    statuses: [200, 201],
    expiresIn: 5000,
};

cache = {
    privacy: 'default',
    statuses: [200, 201],
    expiresAt: '22:44',
};

// /* typings should cause this to error, but currently does not
var cache: Hapi.RouteCacheOptions = {
    expiresIn: 5000,
    expiresAt: '22:44',
};
// */
