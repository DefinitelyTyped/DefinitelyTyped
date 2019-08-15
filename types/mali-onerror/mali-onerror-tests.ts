import onError = require('mali-onerror');
import Mali = require('mali');
import path = require('path');

// Example mali app from Mali docs
const PROTO_PATH = path.resolve(__dirname, '../protos/helloworld.proto');

function errorLogger(err: Error, ctx: Mali.Context) {
  console.log('Error on %s: %s', ctx.name, err.toString());
}

const app = new Mali(PROTO_PATH);
app.use(onError(errorLogger));
