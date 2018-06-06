import Koa = require('koa');
import sslify = require('koa-sslify');

new Koa().use(sslify({}));

new Koa().use(sslify({
  trustAzureHeader: true,
}));

new Koa().use(sslify({
  trustProtoHeader: true,
}));

new Koa().use(sslify({
  specCompliantDisallow: true,
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
  internalRedirectMethods: ['GET'],
}));

new Koa().use(sslify({
  redirectMethods: ['GET'],
}));

new Koa().use(sslify({
  ignoreUrl: true,
}));
