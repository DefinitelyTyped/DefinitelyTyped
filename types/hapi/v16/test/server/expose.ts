
// From https://hapijs.com/api/16.1.1#serverexposekey-value

import * as Hapi from '../../';
var register: Hapi.PluginFunction<{}> = function (server, options, next) {

    server.expose('util', function () { console.log('something'); });
    return next();
};

// example of `expose()` merging object

register = function (server, options, next) {

    server.expose({ util: function () { console.log('something'); } });
    return next();
};
