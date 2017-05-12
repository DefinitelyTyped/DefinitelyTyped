'use strict';

import * as Hapi from 'hapi';

var authConfig: Hapi.RouteAdditionalConfigurationOptions = {
  app: {}
};

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
