// https://github.com/hapijs/hapi/blob/master/API.md#-serverauthapi
import {
    Request,
    ResponseToolkit,
    Server,
    ServerAuthScheme,
    ServerAuthSchemeObject,
    ServerAuthSchemeOptions
} from "hapi";
import * as Boom from "boom";

const scheme:ServerAuthScheme = (server:Server, options:ServerAuthSchemeOptions): ServerAuthSchemeObject => {

    return {
        api: {
            settings: {
                x: 5
            }
        },
        authenticate: (request: Request, h: ResponseToolkit) => {

            const authorization = request.headers.authorization;
            if (!authorization) {
                throw Boom.unauthorized(null, 'Custom');
            }

            return h.authenticated({ credentials: { user: 'john' } });
        }
    };

};

const server = new Server({
    port: 8000,
});
server.auth.scheme('custom', scheme);
server.auth.strategy('default', 'custom');
server.start();

console.log(server.auth.api.default.settings.x);    // 5
