
// From https://hapijs.com/api/16.1.1#serverapp

import * as Hapi from '../../';
var server = new Hapi.Server();
server.app.key = 'value';

const handler: Hapi.RouteHandler = function (request, reply) {

    return reply(request.server.app.key);
};
