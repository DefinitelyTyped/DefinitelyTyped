
// From https://hapijs.com/api/16.1.1#serverconnectionoptions

import * as Hapi from 'hapi';
const server = new Hapi.Server();

const web = server.connection({ port: 8000, host: 'example.com', labels: ['web'] });
const admin = server.connection({ port: 8001, host: 'example.com', labels: ['admin'] });

server.connections.length === 2;
web.connections.length === 1;
admin.connections.length === 1;

// example 2

var registerFunction: Hapi.PluginFunction<{}> = function (srv, options, next) {

    // Use the 'srv' argument to add a new connection

    const server = srv.connection();

    // Use the 'server' return value to manage the new connection

    server.route({
        path: '/',
        method: 'GET',
        handler: function (request, reply) {

            return reply('hello');
        }
    });

    return next();
};

registerFunction.attributes = {
    name: 'example',
    connections: false
};
