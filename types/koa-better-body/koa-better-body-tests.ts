import body = require('koa-better-body');

// $ExpectType Body
const parser1: body.Body = body();
typeof parser1 === 'function'

const testOptions: body.Options = {
  jsonLimit: '100mb',
  delimiter: '&',
};

// $ExpectType Body
const parser: body.Body = body(testOptions);
