// https://github.com/hapijs/hapi/blob/master/API.md#-responseevents
import {Request, ResponseToolkit, Server, ServerOptions, ServerRoute, ResponseObject} from "hapi";
import * as Crypto from "crypto";

const preResponse = (request: Request, h: ResponseToolkit) => {

    const response:ResponseObject = request.response;

    const hash = Crypto.createHash('sha1');
    response.events.on('peek', (chunk:any) => {
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
