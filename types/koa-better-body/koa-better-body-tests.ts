import body = require('koa-better-body');

// $ExpectType Body
body();

const testOptions: body.Options = {
  jsonLimit: '100mb',
  encoding: 'utf-8',
  uploadDir: './',
  keepExtensions: true,
};

// $ExpectType Body
body(testOptions);
