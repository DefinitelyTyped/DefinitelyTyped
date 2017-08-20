import pino = require('pino');

const log = pino();
const info = log.info;
const error = log.error;

info('hello world');
error('this is at error level');
info('the answer is %d', 42);
info({obj: 42}, 'hello world');
info({obj: 42, b: 2}, 'hello world');
info({obj: {aa: 'bbb'}}, 'another');
setImmediate(info, 'after setImmediate');
error(new Error('an error'));

let log2: pino.Logger = pino({
    name: 'myapp',
    safe: true,
    serializers: {
        req: pino.stdSerializers.req,
        res: pino.stdSerializers.res
    }
});

let pretty = pino.pretty();
pretty.pipe(process.stdout);
const log3 = pino({
    name: 'app',
    safe: true
}, pretty);
log3.child({widget: 'foo'}).info('hello');
log3.child({widget: 'bar'}).warn('hello 2');

pino({
    browser: {
        write(o) {
        }
    }
});

pino({
    browser: {
        write: {
            info(o) {
            },
            error(o) {
            }
        }
    }
});

if ('pino' in log) console.log(`pino version: ${log.pino}`);

log.child({a: 'property'}).info('hello child!');
log.level = 'error';
log.info('nope');
const child = log.child({foo: 'bar'});
child.info('nope again');
child.level = 'info';
child.info('hooray');
log.info('nope nope nope');
log.child({foo: 'bar', level: 'debug'}).debug('debug!');
const customSerializers = {
    test() {
        return 'this is my serializer';
    }
};
pino().child({serializers: customSerializers}).info({test: 'should not show up'});
const child2 = log.child({father: true});
const childChild = child2.child({baby: true});

log.level = 'info';
if (log.levelVal === 30) {
    console.log('logger level is `info`');
}

log.addLevel('myLevel', 35);
log.level = 'myLevel';
log.myLevel('a message');

const listener = (lvl: any, val: any, prevLvl: any, prevVal: any) => {
    console.log(lvl, val, prevLvl, prevVal);
};
log.on('level-change', (lvl, val, prevLvl, prevVal) => {
    console.log(lvl, val, prevLvl, prevVal);
});
log.level = 'trace';
log.removeListener('level-change', listener);
log.level = 'info';

pino.levels.values.error === 50;
pino.levels.labels[50] === 'error';
