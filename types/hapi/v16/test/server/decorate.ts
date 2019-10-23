
// From https://hapijs.com/api/16.1.1#serverdecoratetype-property-method-options

import * as Hapi from '../../';
const server = new Hapi.Server();
server.connection({ port: 80 });

const success = function (this: Hapi.ReplyNoContinue) {

    return this.response({ status: 'ok' });
};

server.decorate('reply', 'success', success);

declare module '../../' {
    interface Base_Reply {
        success: () => Response;
    }
}

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        return reply.success();
    }
});

// custom typing code for decorating request

server.decorate('request', 'some_request_method', (request) => {
    return function() {
        // Do some sort of processing;
        return request.id;
    }
}, {apply: true});

declare module '../../' {
    interface Request {
        some_request_method(): void;
    }
}

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        request.some_request_method();
        return reply();
    }
});

// custom typing code for decorating server

server.decorate('server', 'some_server_method', (server: Hapi.Server) => {
    return function(arg1: number){
        return "some text";
    }
});

declare module '../../' {
    interface Server {
        some_server_method(arg1: number): string;
    }
}

server.some_server_method(1);
