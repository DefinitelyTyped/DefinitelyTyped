// From https://hapijs.com/api/16.1.1#error-response

import Boom = require("boom");
import Hapi = require("hapi");

const server = new Hapi.Server();

server.route({
    method: "GET",
    path: "/badRequest",
    handler: function(request, reply) {
        return reply(Boom.badRequest("Unsupported parameter"));
    },
});

server.route({
    method: "GET",
    path: "/internal",
    handler: function(request, reply) {
        return reply(new Error("unexpect error"));
    },
});
