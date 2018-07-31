
// From https://hapijs.com/api/16.1.1#serverinfo

import * as Hapi from '../../';

// added in addition to code from docs
interface PluginOptions {
    quantity: number;
}

// modified from docs
var registerFunction: Hapi.PluginFunction<PluginOptions> = function(server, options, next) {

    server.route({
        method: 'GET',
        path: '/test',
        handler: function (request, reply) {

            // modified from docs
            return reply(`ok ${options.quantity}`);
        }
    });

    return next();
};

var attributes: Hapi.PluginAttributes = {
    name: 'test',
    version: '1.0.0'
};

var attributes: Hapi.PluginAttributes = {
    pkg: {} // require('./package.json'),
};

registerFunction.attributes = attributes;
