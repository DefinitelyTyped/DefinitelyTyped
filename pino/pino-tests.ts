/// <reference path="../node/node.d.ts"/>   // only for require()
/// <reference path="pino.d.ts"/>
// This contains all of the code from the docs on https://www.npmjs.com/package/pino

import PINO = require('pino')
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

var pretty = PINO.pretty()
var instance2 = PINO({
  name: 'app',
  safe: true
}, pretty)


var logger = instance
logger.child({ a: 'property' }).info('hello child!')
