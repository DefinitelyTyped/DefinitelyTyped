/// <reference path="../node/index.d.ts"/>   // only for require()
/// <reference path="pino.d.ts"/>
// This contains all of the code from the docs on https://www.npmjs.com/package/pino

import * as pino from 'pino';
const logger: pino.Logger = pino();
const info = logger.info
const error = logger.error

info('hello world')
error('this is at error level')
info('the answer is %d', 42)
info({ obj: 42 }, 'hello world')
info({ obj: 42, b: 2 }, 'hello world')
info({ obj: { aa: 'bbb' } }, 'another')
setImmediate(info, 'after setImmediate')
error(new Error('an error'))


const instance = pino({
  name: 'myapp',
  safe: true,
  serializers: {
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res
  }
})

const pretty = pino.pretty()
const instance2 = pino({
  name: 'app',
  safe: true
}, pretty)


const log = instance
logger.child({ a: 'property' }).info('hello child!')
