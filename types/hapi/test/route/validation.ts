// from https://hapijs.com/tutorials/validation?lang=en_US
import { Request, ResponseToolkit, RouteOptions, Server, ServerOptions, ServerRoute } from "hapi";
import * as Joi from "joi";

const options: ServerOptions = {
    port: 8000,
};

const routeOptions: RouteOptions = {
    validate: {
        params: {
            name: Joi.string().min(3).max(10)
        }
    },
    response: {
        schema: Joi.string()
    }
};

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler(request, h) {
        return 'ok: ' + request.path;
    },
    options: routeOptions
};

const server = new Server(options);
server.route(serverRoute);

server.start();
console.log('Server started at: ' + server.info.uri);
