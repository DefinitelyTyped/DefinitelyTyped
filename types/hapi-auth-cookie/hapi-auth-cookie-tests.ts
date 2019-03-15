import * as hapi from 'hapi';
import * as auth from 'hapi-auth-cookie';

const server = new hapi.Server({ port: 8000 });

server.register({
    plugin: auth,
});

const options: auth.Options = {
    clearInvalid: true,
    cookie:       'session',
    domain:       '.typescript.org',
    keepAlive:    true,
    password:     'abcdef',
    redirectTo:   '/login',
    isSecure:     true,
    appendNext:   false,
    ttl:          259200000,
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
