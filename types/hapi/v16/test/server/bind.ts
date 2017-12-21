
// From https://hapijs.com/api/16.1.1#serverbindcontext

import * as Hapi from '../../';

interface HandlerThis {
    message: string;
}

const handler: Hapi.RouteHandler = function (this: HandlerThis, request, reply) {

    return reply(this.message);
};

var register: Hapi.PluginFunction<{}> = function (server, options, next) {

    const bind: HandlerThis = {
        message: 'hello'
    };

    server.bind(bind);
    server.route({ method: 'GET', path: '/', handler: handler });
    return next();
};
