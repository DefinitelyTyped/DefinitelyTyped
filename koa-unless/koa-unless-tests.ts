import koa = require('koa');
import unless = require('koa-unless');

const app = new koa();

const skippedMiddleware = function *() {
  throw new Error('Should not be executed');
};

skippedMiddleware.unless = unless;

app.use(skippedMiddleware.unless({
  path: '/some-url',
  ext: [ 'png', 'jpg' ],
  method: [ 'options', 'delete' ],
  useOriginalUrl: true,
  custom: function() {
    return false;
  }
}));

const anotherSkippedMiddleware = function *() {
  throw new Error('Should not be executed');
};

app.use(anotherSkippedMiddleware.unless({
  path: [ '/index', '/about' ],
  ext: 'bmp',
  method: 'get',
  useOriginalUrl: false,
  custom: function() {
    return false;
  }
}));

const lastSkippedMiddleware = function *() {
  throw new Error('Should not be executed');
};

app.use(lastSkippedMiddleware.unless(function() {
  return false;
});
