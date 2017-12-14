// https://github.com/hapijs/hapi/blob/master/API.md#-servereventevents
// https://github.com/hapijs/hapi/blob/master/API.md#-requestevents
import {
    Lifecycle,
    Request,
    ResponseToolkit,
    RouteOptions,
    Server,
    ServerOptions,
    ServerRoute
} from "hapi";
import * as Crypto from 'crypto';

const options: ServerOptions = {
    port: 8000,
};

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: (request: Request, h: ResponseToolkit) => {
        return 'ok: ' + request.path;
    }
};

const onRequest: Lifecycle.Method = (request: Request, h: ResponseToolkit) => {

    /*
     * Server events
     */
    request.server.events.on('request', (request: Request, event: any, tags: any) => {
        console.log(request.paramsArray);
        console.log(event);
        console.log(tags);
    });

    request.server.events.on('response', (request: Request) => {
        console.log('Response sent for request: ' + request.path);
    });

    request.server.events.on('start', (route: RouteOptions) => {
        console.log('Server started');
    });

    request.server.events.once('stop', (route: RouteOptions) => {
        console.log('Server stoped');
    });

    /*
     * Request events
     */
    const hash = Crypto.createHash('sha1');

    request.events.on("peek", (chunk: any) => {
        hash.update(chunk);
    });

    request.events.once("finish", () => {
        console.log(hash.digest('hex'));
    });

    request.events.once("disconnect", () => {
        console.error('request aborted');
    });

    return h.continue;

};

const server = new Server(options);
server.route(serverRoute);
server.ext('onRequest', onRequest);

server.start();
console.log('Server started at: ' + server.info.uri);

