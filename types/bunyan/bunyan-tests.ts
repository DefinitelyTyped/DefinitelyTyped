import Logger = require('bunyan');

let ringBufferOptions: Logger.RingBufferOptions = {
    limit: 100
};
let ringBuffer: Logger.RingBuffer = new Logger.RingBuffer(ringBufferOptions);
ringBuffer.write("hello");
ringBuffer.end();
ringBuffer.destroy();
ringBuffer.destroySoon();

let level: number;
level = Logger.resolveLevel("trace");
level = Logger.resolveLevel("debug");
level = Logger.resolveLevel("info");
level = Logger.resolveLevel("warn");
level = Logger.resolveLevel("error");
level = Logger.resolveLevel("fatal");
level = Logger.resolveLevel(Logger.TRACE);
level = Logger.resolveLevel(Logger.DEBUG);
level = Logger.resolveLevel(Logger.INFO);
level = Logger.resolveLevel(Logger.WARN);
level = Logger.resolveLevel(Logger.ERROR);
level = Logger.resolveLevel(Logger.FATAL);

let options: Logger.LoggerOptions = {
    name: 'test-logger',
    serializers: Logger.stdSerializers,
    streams: [{
        type: 'stream',
        stream: process.stdout,
        level: Logger.TRACE
    }, {
        type: 'file',
        path: '/tmp/test.log',
        level: Logger.DEBUG,
        closeOnExit: true
    }, {
        type: 'rotating-file',
        path: '/tmp/test2.log',
        level: Logger.INFO,
        closeOnExit: false,
        period: '1d',
        count: 3
    }, {
        type: 'raw',
        stream: process.stderr,
        level: Logger.WARN
    }, {
        type: 'raw',
        stream: ringBuffer,
        level: Logger.ERROR
    }]
};

let log = Logger.createLogger(options);

let customSerializer = (anything: any) => {
    return { obj: anything };
};

log.addSerializers({ anything: customSerializer });
log.addSerializers(Logger.stdSerializers);
log.addSerializers(
    {
        err: Logger.stdSerializers.err,
        req: Logger.stdSerializers.req,
        res: Logger.stdSerializers.res
    }
);

let child = log.child({ name: 'child' });
child.reopenFileStreams();
log.addStream({ path: '/dev/null' });
child.level(Logger.DEBUG);
child.level('debug');
child.levels(0, Logger.ERROR);
child.levels(0, 'error');
child.levels('stream1', Logger.FATAL);
child.levels('stream1', 'fatal');

let buffer = new Buffer(0);
let error = new Error('');
let object = {
    test: 123
};

log.trace();
log.trace(buffer);
log.trace(error);
log.trace(object);
log.trace('Hello, %s', 'world!');
log.debug();
log.debug(buffer);
log.debug(error);
log.debug(object);
log.debug('Hello, %s', 'world!');
log.info();
log.info(buffer);
log.info(error);
log.info(object);
log.info('Hello, %s', 'world!');
log.warn();
log.warn(buffer);
log.warn(error);
log.warn(object);
log.warn('Hello, %s', 'world!');
log.error();
log.error(buffer);
log.error(error);
log.error(object);
log.error('Hello, %s', 'world!');
log.fatal();
log.fatal(buffer);
log.fatal(error);
log.fatal(object);
log.fatal('Hello, %s', 'world!');

let recursive: any = {
    hello: 'world',
    whats: {}
};
recursive.whats['huh'] = recursive;

JSON.stringify(recursive, Logger.safeCycles());

class MyLogger extends Logger {
    constructor() {
        super(options);
    }
}
