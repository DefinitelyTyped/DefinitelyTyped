'use strict';

import * as Hapi from '../../';

// different methods
var routeConfig: Hapi.RouteConfiguration = {
  path: '/signin',
  method: 'PUT',
  vhost: 'site.coms',
};
var routeConfig: Hapi.RouteConfiguration = {
  path: '/signin',
  method: '*'
};
var routeConfig: Hapi.RouteConfiguration = {
  path: '/signin',
  method: ['OPTIONS', '*']
};

// different handlers
var routeConfig: Hapi.RouteConfiguration = {
  path: '/signin',
  method: 'PUT',
  handler: 'some registered handler'
};
var routeConfig: Hapi.RouteConfiguration = {
  path: '/signin',
  method: 'PUT',
  handler: function (request, reply) {
    return reply('ok');
  }
};

const server = new Hapi.Server();
server.route(routeConfig);

// Handler in config
const user: Hapi.RouteAdditionalConfigurationOptions = {
    cache: { expiresIn: 5000 },
    handler: function (request, reply) {

        return reply({ name: 'John' });
    }
};

server.route({method: 'GET', path: '/user', config: user });
