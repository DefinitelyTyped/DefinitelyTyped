import * as hapi from 'hapi';
import * as auth from 'hapi-auth-cookie';

const server = new hapi.Server({ port: 8000 });

server.register({
    plugin: auth,
});

const options: auth.Options = {
    cookie: {
        clearInvalid: true,
        name:         'session',
        domain:       '.typescript.org',
        password:     'abcdef',
        isSecure:     true,
        ttl:          259200000,
    },
    keepAlive:    true,
    redirectTo:   '/login',
    appendNext:   false,
    validateFunc: async () => {
        return { valid: true };
    },
};

server.auth.strategy('session', 'cookie', options);

server.route({ method: 'get', path: '/', handler: async (request) => {
    request.cookieAuth.set('key', 'value');
    request.cookieAuth.set({ user: request.params.user });
    request.cookieAuth.clear();
    request.cookieAuth.clear('key');
    request.cookieAuth.ttl(1000);
}});
