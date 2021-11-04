
// From https://hapijs.com/api/16.1.1#serverpathrelativeto

import * as Hapi from 'hapi';

var register: Hapi.PluginFunction<{}> = function (server, options, next) {

    // Assuming the Inert plugin was registered previously

    server.path(__dirname + '../static');
    server.route({ path: '/file', method: 'GET', handler() {} });
    next();
};
