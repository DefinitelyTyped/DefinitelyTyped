'use strict';

import * as Hapi from 'hapi';

var handler: Hapi.RouteHandler = function(request, reply) {
    reply('success');
}
var strictHandler: Hapi.RouteHandler = function(request, reply) {
    reply(123);
}
