///<reference types="node" />

'use strict';

/**
 * The tests are adapted from ../eventemitter3/eventemitter3-tests.ts
 */

import { EventEmitter, EventSubscription } from 'fbemitter';
import * as util from 'util';

// Declaring shims removes assert dependency. These tests are never executed, only typechecked, so this is fine.
declare function assertEqual<T>(actual: T, expected: T): void;

// Stub mocha functions
const {describe, it, before, after, beforeEach, afterEach} = null as any as {
    [s: string]: ((s: string, cb: (done: any) => void) => void) & ((cb: (done: any) => void) => void) & {only: any, skip: any};
};

describe('EventEmitter', function tests() {
    'use strict';

    it('inherits when used with require(util).inherits', function () {
        class Beast extends EventEmitter {
            /* rawr, i'm a beast */
        }

        util.inherits(Beast, EventEmitter);

        var moop = new Beast()
            , meap = new Beast();

        assertEqual(moop instanceof Beast, true);
        assertEqual(moop instanceof EventEmitter, true);

        moop.listeners('click');
        meap.listeners('click');

        moop.addListener('data', function () {
            throw new Error('I should not emit');
        });

        meap.emit('data', 'rawr');
        meap.removeAllListeners();
    });

    describe('EventEmitter#emit', function () {
        it('emits with context', function (done) {
            var context = { bar: 'baz' }
                , e = new EventEmitter();

            e.addListener('foo', function (bar: string) {
                assertEqual(bar, 'bar');
                assertEqual(this, context);

                done();
            }, context);

            e.emit('foo', 'bar');
        });

        it('can emit the function with multiple arguments', function () {
            var e = new EventEmitter();

            for(var i = 0; i < 100; i++) {
                (function (j: number) {
                    for (var i = 0, args: number[] = []; i < j; i++) {
                        args.push(j);
                    }

                    e.once('args', function () {
                        assertEqual(arguments.length, args.length);
                        assertEqual(Array.prototype.slice.call(arguments), args);
                    });

                    e.emit.apply(e, (['args'] as any[]).concat(args));
                })(i);
            }
        });

        it('can emit the function with multiple arguments, multiple listeners', function () {
            var e = new EventEmitter();

            for(var i = 0; i < 100; i++) {
                (function (j: number) {
                    for (var i = 0, args: number[] = []; i < j; i++) {
                        args.push(j);
                    }

                    e.once('args', function () {
                        assertEqual(arguments.length, args.length);
                        assertEqual(Array.prototype.slice.call(arguments), args);
                    });

                    e.once('args', function () {
                        assertEqual(arguments.length, args.length);
                        assertEqual(Array.prototype.slice.call(arguments), args);
                    });

                    e.once('args', function () {
                        assertEqual(arguments.length, args.length);
                        assertEqual(Array.prototype.slice.call(arguments), args);
                    });

                    e.once('args', function () {
                        assertEqual(arguments.length, args.length);
                        assertEqual(Array.prototype.slice.call(arguments), args);
                    });

                    e.emit.apply(e, (['args'] as any[]).concat(args));
                })(i);
            }
        });

        it('emits with context, multiple listeners (force loop)', function () {
            var e = new EventEmitter();

            e.addListener('foo', function (bar: string) {
                assertEqual(this, { foo: 'bar' });
                assertEqual(bar, 'bar');
            }, { foo: 'bar' });

            e.addListener('foo', function (bar: string) {
                assertEqual(this, { bar: 'baz' });
                assertEqual(bar, 'bar');
            }, { bar: 'baz' });

            e.emit('foo', 'bar');
        });

        it('emits with different contexts', function () {
            var e = new EventEmitter()
                , pattern = '';

            function writer() {
                pattern += this;
            }

            e.addListener('write', writer, 'foo');
            e.addListener('write', writer, 'baz');
            e.once('write', writer, 'bar');
            e.once('write', writer, 'banana');

            e.emit('write');
            assertEqual(pattern, 'foobazbarbanana');
        });

        it('receives the emitted events', function (done) {
            var e = new EventEmitter();

            e.addListener('data', function (a: string, b: EventEmitter, c: Date, d: void, undef: void) {
                assertEqual(a, 'foo');
                assertEqual(b, e);
                assertEqual(c instanceof Date, true);
                assertEqual(undef, undefined);
                assertEqual(arguments.length, 3);

                done();
            });

            e.emit('data', 'foo', e, new Date());
        });

        it('emits to all event listeners', function () {
            var e = new EventEmitter()
                , pattern: string[] = [];

            e.addListener('foo', function () {
                pattern.push('foo1');
            });

            e.addListener('foo', function () {
                pattern.push('foo2');
            });

            e.emit('foo');

            assertEqual(pattern.join(';'), 'foo1;foo2');
        });

    });

    describe('EventEmitter#listeners', function () {
        it('returns an empty array if no listeners are specified', function () {
            var e = new EventEmitter();

            assertEqual(e.listeners('foo') instanceof Array, true);
            assertEqual(e.listeners('foo').length, 0);
        });

        it('returns an array of function', function () {
             var e = new EventEmitter();

             function foo() {}

             e.addListener('foo', foo);
             assertEqual(e.listeners('foo') instanceof Array, true);
             assertEqual(e.listeners('foo').length, 1);
             console.log(e.listeners('foo')[0]);
             assertEqual(e.listeners('foo')[0], foo);
        });

        it('is not vulnerable to modifications', function () {
            var e = new EventEmitter();

            function foo() {}

            e.addListener('foo', foo);

            assertEqual(e.listeners('foo')[0], foo);

            e.listeners('foo').length = 0;
            assertEqual(e.listeners('foo')[0], foo);
        });
    });

    describe('EventEmitter#once', function () {
        it('only emits it once', function () {
            var e = new EventEmitter()
                , calls = 0;

            e.once('foo', function () {
                calls++;
            });

            e.emit('foo');
            e.emit('foo');
            e.emit('foo');
            e.emit('foo');
            e.emit('foo');

            assertEqual(e.listeners('foo').length, 0);
            assertEqual(calls, 1);
        });

        it('only emits once if emits are nested inside the listener', function () {
            var e = new EventEmitter()
                , calls = 0;

            e.once('foo', function () {
                calls++;
                e.emit('foo');
            });

            e.emit('foo');
            assertEqual(e.listeners('foo').length, 0);
            assertEqual(calls, 1);
        });

        it('only emits once for multiple events', function () {
            var e = new EventEmitter()
                , multi = 0
                , foo = 0
                , bar = 0;

            e.once('foo', function () {
                foo++;
            });

            e.once('foo', function () {
                bar++;
            });

            e.addListener('foo', function () {
                multi++;
            });

            e.emit('foo');
            e.emit('foo');
            e.emit('foo');
            e.emit('foo');
            e.emit('foo');

            assertEqual(e.listeners('foo').length, 1);
            assertEqual(multi, 5);
            assertEqual(foo, 1);
            assertEqual(bar, 1);
        });

        it('only emits once with context', function (done) {
            var context = { foo: 'bar' }
                , e = new EventEmitter();

            e.once('foo', function (bar: string) {
                assertEqual(this, context);
                assertEqual(bar, 'bar');
                done();
            }, context);

            e.emit('foo', 'bar');
        });
    });

    describe('EventSubscription#remove', function () {
        it('should only remove the event with the specified function', function () {
            var e = new EventEmitter();

            function bar() {}
            var foo = e.addListener('foo', function () {});
            var bar1 = e.addListener('bar', function () {});
            var bar2 = e.addListener('bar', bar);

            assertEqual(e.listeners('foo').length, 1);
            assertEqual(e.listeners('bar').length, 2);

            foo.remove();
            assertEqual(e.listeners('foo').length, 0);
            assertEqual(e.listeners('bar').length, 2);

            bar2.remove();
            assertEqual(e.listeners('bar').length, 1);

            bar1.remove();
            assertEqual(e.listeners('bar').length, 0);
        });
    });

    describe('EventEmitter#removeAllListeners', function () {
        it('removes all events for the specified events', function () {
            var e = new EventEmitter();

            e.addListener('foo', function () { throw new Error('oops'); });
            e.addListener('foo', function () { throw new Error('oops'); });
            e.addListener('bar', function () { throw new Error('oops'); });
            e.addListener('aaa', function () { throw new Error('oops'); });

            e.removeAllListeners('foo');
            assertEqual(e.listeners('foo').length, 0);
            assertEqual(e.listeners('bar').length, 1);
            assertEqual(e.listeners('aaa').length, 1);

            e.removeAllListeners('bar');
            e.removeAllListeners('aaa');
            assertEqual(e.listeners('foo').length, 0);
            assertEqual(e.listeners('bar').length, 0);
            assertEqual(e.listeners('aaa').length, 0);
        });

        it('just nukes everything', function () {
            var e = new EventEmitter();

            e.addListener('foo', function () { throw new Error('oops'); });
            e.addListener('foo', function () { throw new Error('oops'); });
            e.addListener('bar', function () { throw new Error('oops'); });
            e.addListener('aaa', function () { throw new Error('oops'); });

            e.removeAllListeners();
            assertEqual(e.listeners('foo').length, 0);
            assertEqual(e.listeners('bar').length, 0);
            assertEqual(e.listeners('aaa').length, 0);
        });
    });

});
