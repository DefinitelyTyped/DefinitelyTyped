import body = require('koa-better-body');

// $ExpectType Body
body();

const testOptions: body.Options = {
  jsonLimit: '100mb',
};

// $ExpectType Body
body(testOptions);
