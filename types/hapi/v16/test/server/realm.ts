
// From https://hapijs.com/api/16.1.1#serverrealm

import * as Hapi from '../../';

var registerFunction: Hapi.PluginFunction<{}> = function(server, options, next) {

    console.log(server.realm.modifiers.route.prefix);
    return next();
};
