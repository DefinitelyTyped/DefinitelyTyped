import Koa = require('koa');
import sslify, { xForwardedProtoResolver, azureResolver, customProtoHeaderResolver, forwardedResolver } from 'koa-sslify';

new Koa().use(sslify());

new Koa().use(sslify({}));

new Koa().use(sslify({
    resolver: xForwardedProtoResolver,
}));

new Koa().use(sslify({
    resolver: azureResolver,
}));

new Koa().use(sslify({
    resolver: customProtoHeaderResolver('x-protocol'),
}));

new Koa().use(sslify({
    resolver: forwardedResolver,
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
