import Koa = require('koa');
import sslify = require('koa-sslify');

new Koa().use(sslify());

new Koa().use(sslify({}));

new Koa().use(sslify({
    resolver: sslify.xForwardedProtoResolver,
}));

new Koa().use(sslify({
    resolver: sslify.azureResolver,
}));

new Koa().use(sslify({
    resolver: sslify.customProtoHeaderResolver('x-protocol'),
}));

new Koa().use(sslify({
    resolver: sslify.forwardedResolver,
}));

new Koa().use(sslify({
    disallowStatus: 405,
}));

new Koa().use(sslify({
    port: 1234,
}));

new Koa().use(sslify({
    hostname: 'my-host',
}));

new Koa().use(sslify({
    temporary: false,
}));

new Koa().use(sslify({
    redirectMethods: ['GET'],
}));

new Koa().use(sslify({
    skipDefaultPort: false,
}));

new Koa().use(sslify({
    ignoreUrl: true,
}));
