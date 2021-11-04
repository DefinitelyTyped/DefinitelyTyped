// https://github.com/hapijs/hapi/blob/master/API.md#-responseevents
import { Lifecycle, Request, ResponseObject, ResponseToolkit, Server, ServerOptions, ServerRoute } from "hapi";
import * as Crypto from "crypto";

const preResponse: Lifecycle.Method = (request, h) => {
    // In onPreResponse, the response object will be defined.
    const response = <ResponseObject> request.response;

    const hash = Crypto.createHash('sha1');
    response.events.on('peek', (chunk, encoding) => {
        hash.update(chunk);
    });

    response.events.once('finish', () => {
        console.log(hash.digest('hex'));
    });

    return h.continue;
};

const server = new Server({
    port: 8000,
});

server.ext('onPreResponse', preResponse);

server.start();
console.log('Server started at: ' + server.info.uri);
