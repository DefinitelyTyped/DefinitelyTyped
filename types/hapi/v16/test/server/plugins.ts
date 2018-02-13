
// From https://hapijs.com/api/16.1.1#serverplugins

import * as Hapi from '../../';

var registerFunction: Hapi.PluginFunction<{}> = function(server, options, next) {

    server.expose('key', 'value');
    server.plugins.example.key === 'value';
    return next();
};

registerFunction.attributes = {
    name: 'example'
};
