
// From https://hapijs.com/api/16.1.1#replyredirecturi

import * as Hapi from '../../';
const handler: Hapi.RouteHandler = function (request, reply) {

    return reply.redirect('http://example.com');
};
