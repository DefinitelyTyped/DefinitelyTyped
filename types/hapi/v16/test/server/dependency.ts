
// From https://hapijs.com/api/16.1.1#serverdependencydependencies-after

import * as Hapi from '../../';

const after: Hapi.AfterDependencyLoadCallback = function (server, next) {

    // Additional plugin registration logic
    return next();
};

var registerFunction: Hapi.PluginFunction<{}> = function (server, options, next) {

    server.dependency('yar', after);
    return next();
};

// Example 2, via attributes

registerFunction.attributes = {
    name: 'test',
    version: '1.0.0',
    dependencies: 'yar'
};
