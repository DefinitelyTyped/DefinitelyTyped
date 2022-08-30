import body = require('koa-better-body');

// $ExpectType Body
const parser1: body.Body = body();
typeof parser1 === 'function';

const testOptions: body.Options = {
  jsonLimit: '100mb',
  delimiter: '&',
  extendTypes: {
    custom: ['application/json']
  }
};

const otherOptions: body.Options = {
  jsonLimit: '100mb',
  delimiter: '&',
  extendTypes: {
    custom: 'application/graphql'
  }
};

// $ExpectType Body
const parser: body.Body = body(testOptions);
