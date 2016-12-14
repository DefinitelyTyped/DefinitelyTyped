// NOTE: This code is only intended for type-checking by the TypeScript compiler, 
// and it is not intended for execution.
// See the pino docs for usage examples.


// This file contains all of the example code for the core pino library from the docs on https://www.npmjs.com/package/pino

/// <reference path='../pino/index.d.ts' />

// from: Usage
import PINO = require('pino')
var pino = PINO()
 
pino.info('hello world')
pino.error('this is at error level')
pino.info('the answer is %d', 42)
pino.info({ obj: 42 }, 'hello world')
pino.info({ obj: 42, b: 2 }, 'hello world')
pino.info({ obj: { aa: 'bbb' } }, 'another')
setImmediate(function () {
  pino.info('after setImmediate')
})
pino.error(new Error('an error'))
 
var child = pino.child({ a: 'property' })
child.info('hello child!')
 
var childsChild = child.child({ another: 'property' })
childsChild.info('hello baby..')



// from: pino([opts], [stream])
var logger = PINO({
  name: 'myapp',
  safe: true,
  serializers: {
    req: PINO.stdSerializers.req,
    res: PINO.stdSerializers.res
  }
})


// from : logger.child(bindings)
logger.child({ a: 'property' }).info('hello child!')
var logger = PINO()
logger.level = 'error'
logger.info('nope') //does not log
var child = logger.child({foo: 'bar'})
child.info('nope again') //does not log
child.level = 'info'
child.info('hooray') //will log
logger.info('nope nope nope') //will not log, level is still set to error
logger.child({ foo: 'bar', level: 'debug' }).debug('debug!')

 
var customSerializers = {
  test: function () {
    return 'this is my serializer'
  }
}
var child = PINO().child({serializers: customSerializers})
 
child.info({test: 'should not show up'})


// from: logger.level
logger.level = 'info'


// from: logger.addLevel(name, lvl)
interface LoggerWithMyLevel extends Pino.Logger {
  myLevel(msg: string, ...args : any[]): void
  myLevel(obj: {}, msg?: string, ...args : any[]): void
}
var log_withMyLevel = <LoggerWithMyLevel>PINO()
log_withMyLevel.addLevel('myLevel', 35)
log_withMyLevel.level = 'myLevel'
log_withMyLevel.myLevel('a message')

var log_withMyLevel = <LoggerWithMyLevel>PINO({level: 'myLevel', levelVal: 35})
log_withMyLevel.myLevel('a message')


// from: logger.on('level-change', fn)
// NOTE: types were added since we want to check the types
var listener = function (lvl: string, val: number, prevLvl: string, prevVal: number) {
  console.log(lvl, val, prevLvl, prevVal)
}
logger.on('level-change', listener)
logger.level = 'trace' // trigger console message 
logger.removeListener('level-change', listener)
logger.level = 'info' // no message, since listener was removed 


// from: logger.levels.values & pino.levels.values
pino.levels.values.error === 50 // true 


// from: logger.levels.labels & pino.levels.labels
pino.levels.labels[50] === 'error' // true 


// from: pino.pretty([opts])
var pretty = PINO.pretty()
pretty.pipe(process.stdout)
var log = PINO({
  name: 'app',
  safe: true
}, pretty)
 
log.child({ widget: 'foo' }).info('hello')
log.child({ widget: 'bar' }).warn('hello 2')


// from: Extreme mode explained
var stream = require('stream')
var logger = PINO({extreme: true}, new stream.Writable({write: function (chunk: string | Buffer) {
  // do something with chunk 
}}))
logger.on('error', function (err: Error) {
  console.error('pino logger cannot flush on exit due to provided output stream')
  process.exit(1)
})


