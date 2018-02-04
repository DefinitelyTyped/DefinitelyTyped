// from https://hapijs.com/tutorials/validation?lang=en_US
import { ServerRouteConfig, Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "hapi";
import * as Joi from "joi";

const options: ServerOptions = {
    port: 8000,
};

const configObject: ServerRouteConfig = {
    validate: {
        params: {
            name: Joi.string().min(3).max(10)
        }
    }
};

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: (request: Request, h: ResponseToolkit) => {
        return 'ok: ' + request.path;
    },
    config: configObject
};

const server = new Server(options);
server.route(serverRoute);

server.start();
console.log('Server started at: ' + server.info.uri);
