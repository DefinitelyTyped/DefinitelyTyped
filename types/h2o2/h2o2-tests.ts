import wreck = require('wreck');
import h2o2 = require('h2o2');
import hapi = require('hapi');

async function main() {
    const server = new hapi.Server({});
    await server.register(h2o2);

    server.route({
        method: 'GET',
        path: '/hproxyoptions',
        async handler(request, h) {
            // ResponseToolkit augmentation
            // https://github.com/hapijs/h2o2#hproxyoptions
            return h.proxy({ host: 'example.com', port: 80, protocol: 'http' });
        }
    });

    server.route({
        method: 'GET',
        path: '/using-the-host-port-protocol-options',
        handler: {
            // HandlerDecorations augmentation
            // https://github.com/hapijs/h2o2#using-the-host-port-protocol-options
            proxy: {
                host: '10.33.33.1',
                port: '443',
                protocol: 'https'
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/using-the-uri-option',
        handler: {
            // HandlerDecorations augmentation
            // https://github.com/hapijs/h2o2#using-the-uri-option
            proxy: {
                uri: 'https://some.upstream.service.com/that/has?what=you&want=todo'
            }
        }
    });


    server.route({
        method: 'GET',
        path: '/custom-uri-template-values',
        handler: {
            // HandlerDecorations augmentation
            // https://github.com/hapijs/h2o2#custom-uri-template-values
            proxy: {
                uri: '{protocol}://{host}:{port}/go/to/{path}'
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/custom-uri-template-values/{bar}',
        handler: {
            // HandlerDecorations augmentation
            // https://github.com/hapijs/h2o2#custom-uri-template-values
            proxy: {
                uri: 'https://some.upstream.service.com/some/path/to/{bar}'
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: {
            // HandlerDecorations augmentation
            // https://github.com/hapijs/h2o2#using-the-mapuri-and-onresponse-options
            proxy: {
                async mapUri(request) {
                    console.log('doing some additional stuff before redirecting');
                    return {
                        uri: 'https://some.upstream.service.com/'
                    };
                },

                async onResponse(err, res, request, h, settings, ttl) {
                    console.log('receiving the response from the upstream.');
                    const payload = await wreck.read(res, { json: true });

                    console.log('some payload manipulation if you want to.')
                    let response = h.response(payload);

                    // TODO find a quicker way to do this
                    for (let header in res.headers) {
                        let value = res.headers[header];
                        if (value) {
                            if (typeof value === 'string') {
                                value = [value];
                            }
                            for (let v of value) {
                                response = response.header(header, v);
                            }
                        }
                    }
                    return response;
                }
            }
        }
    });

    await server.start();
    await server.stop();
}

/**
 * test code added in additional to code in docs.  Demonstrates that for the moment
 * you need flat
 * objects with typing along the way to benefit from typescript catching
 * misspelt, or unsupported keys.
 * This is because of an unknown reason.  Expecting this to work because:
 * "Object literals get special treatment and undergo excess
 * property checking when assigning them to other variables, or passing them
 * as arguments", see github.com/Microsoft/TypeScript
 */

var proxyOptions: h2o2.ProxyHandlerOptions = {
    host: '10.33.33.1',
    port: '443',
    protocol: 'https'  // errors correctly if misspelt
}

const badProtocolDemo: hapi.ServerRoute = {
    method: 'GET',
    path: '/',
    handler: {
        proxy: {
            host: '10.33.33.1',
            port: '443'
            // port: null // detected as incompatible
        }
    }
};

const replyViaToolkit: hapi.ServerRoute = {
    method: 'GET',
    path: '/',
    async handler(req, h): Promise<hapi.ResponseObject> {
        return h.proxy({
            host: '10.33.33.1',
            port: '443',
            protocol: 'https'
        });
    }
};

if (!module.parent) {
    main().then(() => console.log('done'), err => console.error(err.stack));
}
