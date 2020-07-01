// from https://hapijs.com/tutorials/validation?lang=en_US
import { Request, ResponseToolkit, RouteOptions, Server, ServerOptions, ServerRoute } from "@hapi/hapi";
import * as Joi from "@hapi/joi";

const options: ServerOptions = {
    port: 8000,
};

const routeOptions: RouteOptions = {
    validate: {
        payload: {
            id: Joi.string().uuid().required(),
            name: Joi.object({
                firstName: Joi.string().required(),
                lastName: Joi.string().allow(null)
            }),
            firstName: Joi.ref("name.firstName")
        },
        params: {
            name: Joi.string().min(3).max(10),
            nameRef: Joi.ref("name")
        },
        state: {
            woop: Joi.string().allow('doop'),
        },
    },
    response: {
        schema: Joi.object({
            a: Joi.string(),
            b: Joi.object({
                c: Joi.number()
            }),
            d: Joi.ref("b.c")
        })
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
