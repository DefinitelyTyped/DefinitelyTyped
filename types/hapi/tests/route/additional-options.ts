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
