/// <reference path="bunyan.d.ts" />

import bunyan = require('bunyan');

var ringBufferOptions:bunyan.RingBufferOptions = {
    limit: 100
};
var ringBuffer:bunyan.RingBuffer = new bunyan.RingBuffer(ringBufferOptions);
ringBuffer.write("hello");
ringBuffer.end();
ringBuffer.destroy();
ringBuffer.destroySoon();

var level:number;
level = bunyan.resolveLevel("trace");
level = bunyan.resolveLevel("debug");
level = bunyan.resolveLevel("info");
level = bunyan.resolveLevel("warn");
level = bunyan.resolveLevel("error");
level = bunyan.resolveLevel("fatal");
level = bunyan.resolveLevel(bunyan.TRACE);
level = bunyan.resolveLevel(bunyan.DEBUG);
level = bunyan.resolveLevel(bunyan.INFO);
level = bunyan.resolveLevel(bunyan.WARN);
level = bunyan.resolveLevel(bunyan.ERROR);
level = bunyan.resolveLevel(bunyan.FATAL);

var options:bunyan.LoggerOptions = {
    name: 'test-logger',
    streams: [{
        type: 'stream',
        stream: process.stdout,
        level: bunyan.TRACE
    }, {
        type: 'file',
        path: '/tmp/test.log',
        level: bunyan.DEBUG,
        closeOnExit: true
    }, {
        type: 'rotating-file',
        path: '/tmp/test2.log',
        level: bunyan.INFO,
        closeOnExit: false
    }, {
        type: 'raw',
        stream: process.stderr,
        level: bunyan.WARN
    }, {
        type: 'raw',
        stream: ringBuffer,
        level: bunyan.ERROR
    }]
};

var log = bunyan.createLogger(options);

log.addSerializers(bunyan.stdSerializers);
var child = log.child({name: 'child'});
child.reopenFileStreams();
log.addStream({path: '/dev/null', name: 'stream1'});
child.level(bunyan.DEBUG);
child.level('debug');
child.levels(0, bunyan.ERROR);
child.levels(0, 'error');
child.levels('stream1', bunyan.FATAL);
child.levels('stream1', 'fatal');

var buffer = new Buffer(0);
var error = new Error('');
var object = {
    test: 123
};

log.trace(buffer);
log.trace(error);
log.trace(object);
log.trace('Hello, %s', 'world!');
log.debug(buffer);
log.debug(error);
log.debug(object);
log.debug('Hello, %s', 'world!');
log.info(buffer);
log.info(error);
log.info(object);
log.info('Hello, %s', 'world!');
log.warn(buffer);
log.warn(error);
log.warn(object);
log.warn('Hello, %s', 'world!');
log.error(buffer);
log.error(error);
log.error(object);
log.error('Hello, %s', 'world!');
log.fatal(buffer);
log.fatal(error);
log.fatal(object);
log.fatal('Hello, %s', 'world!');

var recursive: any = {
    hello: 'world',
    whats: {
        huh: recursive
    }
}

JSON.stringify(recursive, bunyan.safeCycles());
