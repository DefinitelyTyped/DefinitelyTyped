"use strict";

import Hapi = require("hapi");

var handler: Hapi.RouteHandler = function(request, reply) {
    reply("success");
};
var strictHandler: Hapi.RouteHandler = function(request, reply) {
    reply(123);
};
