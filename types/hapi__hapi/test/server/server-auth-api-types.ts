// https://github.com/hapijs/hapi/blob/master/API.md#-serverauthapi
import {
    Server,
    ServerAuthScheme,
} from "@hapi/hapi";
import * as Boom from "@hapi/boom";

interface SomeCustomSchemeApi {
    a: 1;
    b: 'two';
    c: {
        three: boolean
    };
}

interface MyRefs {
    AuthApi: SomeCustomSchemeApi;
    Headers: {
        authorization?: string;
        hmac?: string
    };
    AuthUser: {
        pepe: boolean;
        papa: string;
        a?: string
    };
}

type MyAuthSchema = ServerAuthScheme<
    {},
    MyRefs
>;

const scheme: MyAuthSchema = (server, options) => {
    return {
        api: {
            a: 1,
            b: 'two',
            c: {
                three: false
            }
        },
        authenticate(request, h) {
            const authorization = request.headers.authorization;
            if (!authorization) {
                throw Boom.unauthorized(null, 'Custom');
            }

            // request.auth.credentials.user.
            return h.authenticated({
                credentials: {
                    user: {
                        papa: 'true',
                        pepe: true,
                        a: undefined // this is extended somewhere else but can be overwritten
                    },
                    // app: {}
                }
            });
        }
    };
};

const server = new Server({
    port: 8000,
});

server.auth.scheme <MyRefs>('custom', scheme);
server.auth.strategy('default', 'custom');
server.start();

console.log(server.auth.api.default.settings.x);    // 5
