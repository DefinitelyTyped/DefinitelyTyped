// https://github.com/hapijs/hapi/blob/master/API.md#-serverauthapi
import {
    Server,
    ServerAuthScheme,
} from "@hapi/hapi";
import * as Boom from "@hapi/boom";

declare module '@hapi/hapi' {
    interface ServerAuthSchemeObjectApi {
        settings: {
            x: number;
        };
    }
}

const scheme: ServerAuthScheme = (server, options) => {
    return {
        api: {
            settings: {
                x: 5
            }
        },
        authenticate(request, h) {
            const authorization = request.headers.authorization;
            if (!authorization) {
                throw Boom.unauthorized(null, 'Custom');
            }
            return h.authenticated({ credentials: { user: { a: 1 }, custom: {} } });
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
