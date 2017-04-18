import * as HapiES6 from 'hapi';
import InertES6 from 'inert';

const server = new HapiES6.Server({});
server.register(InertES6, {}, (err) => {});

// added in addition to code from docs
server.register({
    register: InertES6,
    options: {etagsCacheMaxSize: 400},
}, (err) => {});

// added in addition to code from docs
server.register({
    register: InertES6,
    once: true,
}, (err) => {});

server.route({
    path: '',
    method: 'GET',
    handler: {
        file: {
            path: '',
            confine: true,
        },
        directory: {
            path: '',
            listing: true
        },
    },
    config: { files: { relativeTo: __dirname } }
})

var fileHandler: HapiES6.FileHandlerObject = {
    path: '',
    confine: true,
}

var directoryHandler: HapiES6.DirectoryHandlerObject = {
    path: function(){
        if(Math.random() > 0.5) {
            return '';
        }
        else if(Math.random() > 0) {
            return [''];
        }
        return new Error('');
    },
    listing: true,
}

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

server.ext('onPostHandler', function (request: HapiES6.Request, reply: HapiES6.ReplyWithContinue) {

    const response = request.response;
    if (response.isBoom &&
        response.output!.statusCode === 404) {

        return reply.file('404.html').code(404);
    }

    return reply.continue();
});
