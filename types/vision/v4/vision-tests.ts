import * as Hapi from 'hapi';
import Vision from 'vision';
const server = new Hapi.Server();
server.connection({ port: 80 });

// https://github.com/hapijs/vision/blob/master/API.md#serverrendertemplate-context-options-callback

server.register(Vision, (err) => {

    if (err) {
        throw err;
    }

    server.views({
        engines: { html: require('handlebars') },
        path: __dirname + '/templates'
    });

    const context = {
        title: 'Views Example',
        message: 'Hello, World'
    };

    server.render('hello', context, {}, (err, rendered, config) => {

        console.log(rendered);
    });

    // https://github.com/hapijs/vision/blob/master/API.md#requestrendertemplate-context-options-callback

    server.views({
        engines: { html: require('handlebars') },
        path: __dirname + '/templates'
    });

    server.route({
        method: 'GET',
        path: '/view',
        handler: function (request, reply) {

            request.render('test', { message: 'hello' }, {}, (err, rendered, config) => {

                return reply(rendered);
            });
        }
    });

    // https://github.com/hapijs/vision/blob/master/API.md#the-view-handler

    server.views({
        engines: { html: require('handlebars') },
        path: __dirname + '/templates'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: {
            view: {
                template: 'hello',
                context: {
                    title: 'Views Example',
                    message: 'Hello, World'
                }
            }
        }
    });

    // https://github.com/hapijs/vision/blob/master/API.md#replyviewtemplate-context-options

    server.views({
        engines: { html: require('handlebars') },
        path: __dirname + '/templates'
    });

    const handler: Hapi.RouteHandler = function (request, reply) {

        const context = {
            title: 'Views Example',
            message: 'Hello, World'
        };

        return reply.view('hello', context);
    };

    server.route({ method: 'GET', path: '/', handler: handler });

});

// Extending CompileOptions or RuntimeOptions interfaces

server.register(Vision, (err) => {

    if (err) {
        throw err;
    }

    server.views({
        engines: { html: require('handlebars') },
        path: __dirname + '/templates'
    });

    var opts: Hapi.CompileOptions = {
        noEscape: true
    };

    server.route({
        method: 'GET',
        path: '/temp1',
        handler: {
            view: {
                template: 'temp1',
                options: {
                    compileOptions: opts
                }
            }
        }
    });
});

declare module 'hapi' {
    interface CompileOptions {
        noEscape: boolean;
    }
}
