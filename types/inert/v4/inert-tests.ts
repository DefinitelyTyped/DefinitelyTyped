// Copied from: https://github.com/hapijs/inert#examples

import Path = require('path');
import Hapi = require('hapi');
import Inert = require('inert');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }
});
server.connection({ port: 3000 });

server.register(Inert, () => {});

// added in addition to code from docs
const options: Inert.OptionalRegistrationOptions = {etagsCacheMaxSize: 400};
server.register({
    register: Inert,
    options,
}, (err) => {});

// added in addition to code from docs
server.register({
    register: Inert,
    once: true,
}, (err) => {});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info!.uri);
});

// https://github.com/hapijs/inert#serving-a-single-file

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        file: 'page.html'
    }
});

// https://github.com/hapijs/inert#customized-file-response

server.route({
    method: 'GET',
    path: '/file',
    handler: function (request, reply) {

        let path = 'plain.txt';
        if (request.headers['x-magic'] === 'sekret') {
            path = 'awesome.png';
        }

        return reply.file(path).vary('x-magic');
    }
});

const handler: Hapi.ServerExtRequestHandler = function (request, reply) {

    const response = request.response!;
    if (response.isBoom &&
        response.output!.statusCode === 404) {

        return reply.file('404.html').code(404);
    }

    return reply.continue();
}

server.ext('onPostHandler', handler);

// additional code added in addition to doc example code

var file: Inert.FileHandlerRouteObject = {
    path: '',
    confine: true,
};
var directory: Inert.DirectoryHandlerRouteObject = {
    path: '',
    listing: true
};

file = {
    path: '',
    confine: true,
};

server.route({
    path: '',
    method: 'GET',
    handler: {
        file,
        directory: {
            path: function(){
                if(Math.random() > 0.5) {
                    return '';
                }
                else if(Math.random() > 0) {
                    return [''];
                }
                return new Error('');
            }
        },
    },
    config: { files: { relativeTo: __dirname } }
})

