// example from https://github.com/malijs/mali#example

import Mali = require('mali');
import path = require('path');

const PROTO_PATH = path.resolve(__dirname, '../protos/helloworld.proto');

async function sayHello(ctx: Mali.Context) {
  ctx.res = { message: 'Hello '.concat(ctx.req.name) };
}

const app = new Mali(PROTO_PATH);
// $ExpectType void
app.use({sayHello});
// $ExpectType any
app.start('127.0.0.1:50051');
