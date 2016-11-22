// This contains all of the code from the docs on https://www.npmjs.com/package/pino

import * as PINO from 'pino';
import * as stream from 'stream';

var pino = PINO()
var info = pino.info
var error = pino.error

info('hello world')
error('this is at error level')
info('the answer is %d', 42)
info({ obj: 42 }, 'hello world')
info({ obj: 42, b: 2 }, 'hello world')
info({ obj: { aa: 'bbb' } }, 'another')
setImmediate(info, 'after setImmediate')
error(new Error('an error'))


var instance = PINO({
  name: 'myapp',
  safe: true,
  serializers: {
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res
  }
})

let version:number = pino.LOG_VERSION;
let levels:Object = pino.levels;

let pretty:stream.Transform = PINO.pretty();

var pretty = PINO.pretty()
var instance2 = PINO({
  name: 'app',
  safe: true
}, pretty)


var logger = instance
logger.child({ a: 'property' }).info('hello child!')
