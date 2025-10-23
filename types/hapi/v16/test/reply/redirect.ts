// From https://hapijs.com/api/16.1.1#replyredirecturi

import Hapi = require("hapi");
const handler: Hapi.RouteHandler = function(request, reply) {
    return reply.redirect("http://example.com");
};
