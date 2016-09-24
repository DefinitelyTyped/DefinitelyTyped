///<reference path="eventemitter3.d.ts" />
'use strict';

import EventEmitter = require('eventemitter3');

const eventName = 'test';
const eventSymbol = Symbol('test');
const fn = () => console.log(1);

// Extending EventEmitter
class TestEmitter extends EventEmitter {
    constructor() {
        super();
    }

    test() {
        return this;
    }
}

const ee: TestEmitter = new TestEmitter();

// EventEmitter.prefixed
// should be boolean or string static property
const prefix = EventEmitter.prefixed;
if (typeof prefix === 'boolean') {
    console.log(prefix.valueOf());
} else {
    console.log(prefix.length);
}

// EventEmitter.eventNames()
// should return array of strings or symbols
ee.eventNames().every((event) => {
    if (typeof event === 'symbol') {
        return false;
    } else {
        return event.length > 0;
    }
});

// EventEmitter.listeners()
// should return array of functions
ee.listeners(eventName).map((listener) => {
    return listener.bind(this);
});
// should accept symbol as event name
ee.listeners(eventSymbol).map((listener) => {
    return listener.bind(this);
});
// should return boolean with 'exists' flag
const hasListeners: boolean = ee.listeners(eventName, true);

// EventEmitter.emit()
// should support any number of arguments
ee.emit(eventName, 1, true, {}, [], 'test', Symbol(), null);
// should accept symbol as event name
ee.emit(eventSymbol);

// EventEmitter.addListener() and EventEmitter.on()
// should accept function
ee.on(eventName, fn);
ee.addListener(eventName, fn);
// should accept optional context argument
ee.on(eventName, fn, this);
ee.addListener(eventName, fn, this);
// should accept symbol as event name
ee.on(eventSymbol, fn);
ee.addListener(eventSymbol, fn);
// should support fluent interface
ee.on(eventSymbol, fn).test();
ee.addListener(eventSymbol, fn).test();

// EventEmitter.once()
// should accept event name and function
ee.once(eventName, fn);
// should accept optional context argument
ee.once(eventName, fn, this);
ee.once(eventName, fn, {});
// should accept symbol as event name
ee.once(eventSymbol, fn);
// should support fluent interface
ee.once(eventSymbol, fn).test();

// EventEmitter.removeListener() and EventEmitter.off()
// should accept event name
ee.removeListener(eventName);
ee.off(eventName);
// should accept optional function
ee.removeListener(eventName, fn);
ee.off(eventName, fn);
// should accept optional context argument
ee.removeListener(eventName, fn, {});
ee.off(eventName, fn, {});
// should accept optional boolean flag for removing listeners added with `EventEmitter.once()`
ee.removeListener(eventName, fn, null, true);
ee.off(eventName, fn, null, true);
// should accept symbol as event name
ee.removeListener(eventSymbol);
ee.off(eventSymbol);
// should support fluent interface
ee.removeListener(eventName).test();
ee.off(eventName).test();

// EventEmitter.removeAllListeners()
// should not require any arguments
ee.removeAllListeners();
// should accept optional event name
ee.removeAllListeners(eventName);
// should accept symbol as event name
ee.removeAllListeners(eventSymbol);
// should support fluent interface
ee.removeAllListeners(eventName).test();

// EventEmitter.setMaxListeners()
// should support fluent interface
ee.setMaxListeners().test();
