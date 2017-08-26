///<reference types="node" />
///<reference types="mocha" />

'use strict';

/**
 * The tests are adapted from ../eventemitter3/eventemitter3-tests.ts
 */

import { EventEmitter, EventSubscription } from 'fbemitter';
import * as util from 'util';
import * as assert from 'assert';

describe('EventEmitter', function tests() {
    'use strict';

    it('inherits when used with require(util).inherits', function () {
        class Beast extends EventEmitter {
            /* rawr, i'm a beast */
        }

        util.inherits(Beast, EventEmitter);

        var moop = new Beast()
            , meap = new Beast();

        assert.strictEqual(moop instanceof Beast, true);
        assert.strictEqual(moop instanceof EventEmitter, true);

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
                assert.strictEqual(bar, 'bar');
                assert.strictEqual(this, context);

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
                        assert.strictEqual(arguments.length, args.length);
                        assert.deepStrictEqual(Array.prototype.slice.call(arguments), args);
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
                        assert.strictEqual(arguments.length, args.length);
                        assert.deepStrictEqual(Array.prototype.slice.call(arguments), args);
                    });

                    e.once('args', function () {
                        assert.strictEqual(arguments.length, args.length);
                        assert.deepStrictEqual(Array.prototype.slice.call(arguments), args);
                    });

                    e.once('args', function () {
                        assert.strictEqual(arguments.length, args.length);
                        assert.deepStrictEqual(Array.prototype.slice.call(arguments), args);
                    });

                    e.once('args', function () {
                        assert.strictEqual(arguments.length, args.length);
                        assert.deepStrictEqual(Array.prototype.slice.call(arguments), args);
                    });

                    e.emit.apply(e, (['args'] as any[]).concat(args));
                })(i);
            }
        });

        it('emits with context, multiple listeners (force loop)', function () {
            var e = new EventEmitter();

            e.addListener('foo', function (bar: string) {
                assert.deepStrictEqual(this, { foo: 'bar' });
                assert.strictEqual(bar, 'bar');
            }, { foo: 'bar' });

            e.addListener('foo', function (bar: string) {
                assert.deepStrictEqual(this, { bar: 'baz' });
                assert.strictEqual(bar, 'bar');
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
            assert.strictEqual(pattern, 'foobazbarbanana');
        });

        it('receives the emitted events', function (done) {
            var e = new EventEmitter();

            e.addListener('data', function (a: string, b: EventEmitter, c: Date, d: void, undef: void) {
                assert.strictEqual(a, 'foo');
                assert.strictEqual(b, e);
                assert.strictEqual(c instanceof Date, true);
                assert.strictEqual(undef, undefined);
                assert.strictEqual(arguments.length, 3);

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

            assert.strictEqual(pattern.join(';'), 'foo1;foo2');
        });

    });

    describe('EventEmitter#listeners', function () {
        it('returns an empty array if no listeners are specified', function () {
            var e = new EventEmitter();

            assert.strictEqual(e.listeners('foo') instanceof Array, true);
            assert.strictEqual(e.listeners('foo').length, 0);
        });

        it('returns an array of function', function () {
             var e = new EventEmitter();

             function foo() {}

             e.addListener('foo', foo);
             assert.strictEqual(e.listeners('foo') instanceof Array, true);
             assert.strictEqual(e.listeners('foo').length, 1);
             console.log(e.listeners('foo')[0]);
             assert.strictEqual(e.listeners('foo')[0], foo);
        });

        it('is not vulnerable to modifications', function () {
            var e = new EventEmitter();

            function foo() {}

            e.addListener('foo', foo);

            assert.strictEqual(e.listeners('foo')[0], foo);

            e.listeners('foo').length = 0;
            assert.strictEqual(e.listeners('foo')[0], foo);
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

            assert.strictEqual(e.listeners('foo').length, 0);
            assert.strictEqual(calls, 1);
        });

        it('only emits once if emits are nested inside the listener', function () {
            var e = new EventEmitter()
                , calls = 0;

            e.once('foo', function () {
                calls++;
                e.emit('foo');
            });

            e.emit('foo');
            assert.strictEqual(e.listeners('foo').length, 0);
            assert.strictEqual(calls, 1);
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

            assert.strictEqual(e.listeners('foo').length, 1);
            assert.strictEqual(multi, 5);
            assert.strictEqual(foo, 1);
            assert.strictEqual(bar, 1);
        });

        it('only emits once with context', function (done) {
            var context = { foo: 'bar' }
                , e = new EventEmitter();

            e.once('foo', function (bar: string) {
                assert.strictEqual(this, context);
                assert.strictEqual(bar, 'bar');
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

            assert.strictEqual(e.listeners('foo').length, 1);
            assert.strictEqual(e.listeners('bar').length, 2);

            foo.remove();
            assert.strictEqual(e.listeners('foo').length, 0);
            assert.strictEqual(e.listeners('bar').length, 2);

            bar2.remove();
            assert.strictEqual(e.listeners('bar').length, 1);

            bar1.remove();
            assert.strictEqual(e.listeners('bar').length, 0);
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
            assert.strictEqual(e.listeners('foo').length, 0);
            assert.strictEqual(e.listeners('bar').length, 1);
            assert.strictEqual(e.listeners('aaa').length, 1);

            e.removeAllListeners('bar');
            e.removeAllListeners('aaa');
            assert.strictEqual(e.listeners('foo').length, 0);
            assert.strictEqual(e.listeners('bar').length, 0);
            assert.strictEqual(e.listeners('aaa').length, 0);
        });

        it('just nukes the fuck out of everything', function () {
            var e = new EventEmitter();

            e.addListener('foo', function () { throw new Error('oops'); });
            e.addListener('foo', function () { throw new Error('oops'); });
            e.addListener('bar', function () { throw new Error('oops'); });
            e.addListener('aaa', function () { throw new Error('oops'); });

            e.removeAllListeners();
            assert.strictEqual(e.listeners('foo').length, 0);
            assert.strictEqual(e.listeners('bar').length, 0);
            assert.strictEqual(e.listeners('aaa').length, 0);
        });
    });

});
