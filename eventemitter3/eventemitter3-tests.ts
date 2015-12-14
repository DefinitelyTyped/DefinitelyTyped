///<reference path="eventemitter3.d.ts" />
///<reference path="../node/node.d.ts" />
///<reference path="../mocha/mocha.d.ts" />
'use strict';

import EventEmitter = require('eventemitter3');
import util = require('util');
import * as EventEmitter3ImportedAsES6Module from 'eventemitter3';

declare namespace Assume {
  interface Class<T> {
    new(...args: any[]): T;
  }

  interface Assume<T> {
    equals(compare: T): Assume<T>;
    equal(compare: T): Assume<T>;
    eqls(compare: T): Assume<T>;
    is: Assume<T>;
    deep: Assume<T>;
    to: Assume<T>;
    either(arr: T[]): Assume<T>;
    instanceOf(clazz: Class<T>): Assume<T>;
    a(typeofString: string): Assume<T>;
  }

  export function assume<T>(input: T): Assume<T>;
}

let assume = Assume.assume;

class EventEmitterTest {
    v: EventEmitter3.EventEmitter;

    constructor() {
        this.v = new EventEmitter();
        this.v = new EventEmitter3ImportedAsES6Module();

        // Some methods are missing or incompatible with current implementation (v4.2.x) of NodeJS.EventEmitter
        // (e.g. getMaxListenters or listeners)
        // var n: NodeJS.EventEmitter = this.v;
    }

    listeners() {
        var v1: Function[] = this.v.listeners('click');
    }

    emit() {
        var v1: boolean = this.v.emit('click');
        var v2: boolean = this.v.emit('click', 1);
        var v3: boolean = this.v.emit('click', 1, '1');
        var v4: boolean = this.v.emit('click', 1, '1', true);
        var v5: boolean = this.v.emit('click', 1, '1', true, new Date());
    }

    on() {
        var fn = () => console.log(1);
        var v1: EventEmitter3.EventEmitter = this.v.on('click', fn);
        var v2: EventEmitter3.EventEmitter = this.v.on('click', fn, this);
    }

    once() {
        var fn = () => console.log(1);
        var v1: EventEmitter3.EventEmitter = this.v.once('click', fn);
        var v2: EventEmitter3.EventEmitter = this.v.once('click', fn, this);
    }

    removeListener() {
        var fn = () => console.log(1);
        var v1: EventEmitter3.EventEmitter = this.v.removeListener('click', fn);
        var v2: EventEmitter3.EventEmitter = this.v.removeListener('click', fn, true);
    }

    removeAllListeners() {
        var v1: EventEmitter3.EventEmitter = this.v.removeAllListeners('click');
    }

    off() {
        var fn = () => console.log(1);
        var v1: EventEmitter3.EventEmitter = this.v.off('click', fn);
        var v2: EventEmitter3.EventEmitter = this.v.off('click', fn, true);
    }

    addListener() {
        var fn = () => console.log(1);
        var v1: EventEmitter3.EventEmitter = this.v.addListener('click', fn);
        var v2: EventEmitter3.EventEmitter = this.v.addListener('click', fn, this);
    }

    setMaxListeners() {
        var v1: EventEmitter3.EventEmitter = this.v.setMaxListeners();
    }
}


describe('EventEmitter', function tests() {
  'use strict';

  it('exposes a `prefixed` property', function () {
    assume(EventEmitter.prefixed).is.either([false, '~']);
  });

  it('inherits when used with require(util).inherits', function () {
    class Beast extends EventEmitter {
      /* rawr, i'm a beast */
    }

    util.inherits(Beast, EventEmitter);

    var moop = new Beast()
      , meap = new Beast();

    assume(moop).is.instanceOf(Beast);
    assume(moop).is.instanceOf(EventEmitter);

    moop.listeners();
    meap.listeners();

    moop.on('data', function () {
      throw new Error('I should not emit');
    });

    meap.emit('data', 'rawr');
    meap.removeListener('foo');
    meap.removeAllListeners();
  });

  describe('EventEmitter#emit', function () {
    it('should return false when there are not events to emit', function () {
      var e = new EventEmitter();

      assume(e.emit('foo')).equals(false);
      assume(e.emit('bar')).equals(false);
    });

    it('emits with context', function (done) {
      var context = { bar: 'baz' }
        , e = new EventEmitter();

      e.on('foo', function (bar: string) {
        assume(bar).equals('bar');
        assume(this).equals(context);

        done();
      }, context).emit('foo', 'bar');
    });

    it('emits with context, multiple arguments (force apply)', function (done) {
      var context = { bar: 'baz' }
        , e = new EventEmitter();

      e.on('foo', function (bar: string) {
        assume(bar).equals('bar');
        assume(this).equals(context);

        done();
      }, context).emit('foo', 'bar', 1,2,3,4,5,6,7,8,9,0);
    });

    it('can emit the function with multiple arguments', function () {
      var e = new EventEmitter();

      for(var i = 0; i < 100; i++) {
        (function (j: number) {
          for (var i = 0, args: number[] = []; i < j; i++) {
            args.push(j);
          }

          e.once('args', function () {
            assume(arguments.length).equals(args.length);
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
            assume(arguments.length).equals(args.length);
          });

          e.once('args', function () {
            assume(arguments.length).equals(args.length);
          });

          e.once('args', function () {
            assume(arguments.length).equals(args.length);
          });

          e.once('args', function () {
            assume(arguments.length).equals(args.length);
          });

          e.emit.apply(e, (['args'] as any[]).concat(args));
        })(i);
      }
    });

    it('emits with context, multiple listeners (force loop)', function () {
      var e = new EventEmitter();

      e.on('foo', function (bar: string) {
        assume(this).eqls({ foo: 'bar' });
        assume(bar).equals('bar');
      }, { foo: 'bar' });

      e.on('foo', function (bar: string) {
        assume(this).eqls({ bar: 'baz' });
        assume(bar).equals('bar');
      }, { bar: 'baz' });

      e.emit('foo', 'bar');
    });

    it('emits with different contexts', function () {
      var e = new EventEmitter()
        , pattern = '';

      function writer() {
        pattern += this;
      }

      e.on('write', writer, 'foo');
      e.on('write', writer, 'baz');
      e.once('write', writer, 'bar');
      e.once('write', writer, 'banana');

      e.emit('write');
      assume(pattern).equals('foobazbarbanana');
    });

    it('should return true when there are events to emit', function (done) {
      var e = new EventEmitter();

      e.on('foo', function () {
        process.nextTick(done);
      });

      assume(e.emit('foo')).equals(true);
      assume(e.emit('foob')).equals(false);
    });

    it('receives the emitted events', function (done) {
      var e = new EventEmitter();

      e.on('data', function (a: string, b: EventEmitter3.EventEmitter, c: Date, d: void, undef: void) {
        assume(a).equals('foo');
        assume(b).equals(e);
        assume(c).is.instanceOf(Date);
        assume(undef).equals(undefined);
        assume(arguments.length).equals(3);

        done();
      });

      e.emit('data', 'foo', e, new Date());
    });

    it('emits to all event listeners', function () {
      var e = new EventEmitter()
        , pattern: string[] = [];

      e.on('foo', function () {
        pattern.push('foo1');
      });

      e.on('foo', function () {
        pattern.push('foo2');
      });

      e.emit('foo');

      assume(pattern.join(';')).equals('foo1;foo2');
    });

    (function each(keys: string[]) {
      var key = keys.shift();

      if (!key) return;

      it('can store event which is a known property: '+ key, function (next) {
        var e = new EventEmitter();

        e.on(key, function (key: string) {
          assume(key).equals(key);
          next();
        }).emit(key, key);
      });

      each(keys);
    })([
      'hasOwnProperty',
      'constructor',
      '__proto__',
      'toString',
      'toValue',
      'unwatch',
      'watch'
    ]);
  });

  describe('EventEmitter#listeners', function () {
    it('returns an empty array if no listeners are specified', function () {
      var e = new EventEmitter();

      assume(e.listeners('foo')).is.a('array');
      assume(e.listeners('foo').length).equals(0);
    });

    it('returns an array of function', function () {
       var e = new EventEmitter();

       function foo() {}

       e.on('foo', foo);
       assume(e.listeners('foo')).is.a('array');
       assume(e.listeners('foo').length).equals(1);
       assume(e.listeners('foo')).deep.equals([foo]);
    });

    it('is not vulnerable to modifications', function () {
      var e = new EventEmitter();

      function foo() {}

      e.on('foo', foo);

      assume(e.listeners('foo')).deep.equals([foo]);

      e.listeners('foo').length = 0;
      assume(e.listeners('foo')).deep.equals([foo]);
    });

    it('can return a boolean as indication if listeners exist', function () {
      var e = new EventEmitter();

      function foo() {}

      e.once('once', foo);
      e.once('multiple', foo);
      e.once('multiple', foo);
      e.on('on', foo);
      e.on('multi', foo);
      e.on('multi', foo);

      assume(e.listeners('foo', true)).equals(false);
      assume(e.listeners('multiple', true)).equals(true);
      assume(e.listeners('on', true)).equals(true);
      assume(e.listeners('multi', true)).equals(true);

      e.removeAllListeners();

      assume(e.listeners('multiple', true)).equals(false);
      assume(e.listeners('on', true)).equals(false);
      assume(e.listeners('multi', true)).equals(false);
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

      assume(e.listeners('foo').length).equals(0);
      assume(calls).equals(1);
    });

    it('only emits once if emits are nested inside the listener', function () {
      var e = new EventEmitter()
        , calls = 0;

      e.once('foo', function () {
        calls++;
        e.emit('foo');
      });

      e.emit('foo');
      assume(e.listeners('foo').length).equals(0);
      assume(calls).equals(1);
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

      e.on('foo', function () {
        multi++;
      });

      e.emit('foo');
      e.emit('foo');
      e.emit('foo');
      e.emit('foo');
      e.emit('foo');

      assume(e.listeners('foo').length).equals(1);
      assume(multi).equals(5);
      assume(foo).equals(1);
      assume(bar).equals(1);
    });

    it('only emits once with context', function (done) {
      var context = { foo: 'bar' }
        , e = new EventEmitter();

      e.once('foo', function (bar: string) {
        assume(this).equals(context);
        assume(bar).equals('bar');

        done();
      }, context).emit('foo', 'bar');
    });
  });

  describe('EventEmitter#removeListener', function () {
    it('should only remove the event with the specified function', function () {
      var e = new EventEmitter();

      function bar() {}
      e.on('foo', function () {});
      e.on('bar', function () {});
      e.on('bar', bar);

      assume(e.removeListener('foo', bar)).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.listeners('bar').length).equals(2);

      assume(e.removeListener('foo')).equals(e);
      assume(e.listeners('foo').length).equals(0);
      assume(e.listeners('bar').length).equals(2);

      assume(e.removeListener('bar', bar)).equals(e);
      assume(e.listeners('bar').length).equals(1);
      assume(e.removeListener('bar')).equals(e);
      assume(e.listeners('bar').length).equals(0);
    });

    it('should only remove once events when using the once flag', function () {
      var e = new EventEmitter();

      function foo() {}
      e.on('foo', foo);

      assume(e.removeListener('foo', function () {}, undefined, true)).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.removeListener('foo', foo, undefined, true)).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.removeListener('foo', foo)).equals(e);
      assume(e.listeners('foo').length).equals(0);

      e.on('foo', foo);
      e.once('foo', foo);

      assume(e.removeListener('foo', function () {}, undefined, true)).equals(e);
      assume(e.listeners('foo').length).equals(2);
      assume(e.removeListener('foo', foo, undefined, true)).equals(e);
      assume(e.listeners('foo').length).equals(1);

      e.once('foo', foo);

      assume(e.removeListener('foo', foo)).equals(e);
      assume(e.listeners('foo').length).equals(0);
    });

    it('should only remove listeners matching the correct context', function () {
      var e = new EventEmitter()
        , context = { foo: 'bar' };

      function foo() {}
      function bar() {}
      e.on('foo', foo, context);

      assume(e.listeners('foo').length).equals(1);
      assume(e.removeListener('foo', function () {}, context)).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.removeListener('foo', foo, { baz: 'quux' })).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.removeListener('foo', foo, context)).equals(e);
      assume(e.listeners('foo').length).equals(0);

      e.on('foo', foo, context);
      e.on('foo', bar);

      assume(e.listeners('foo').length).equals(2);
      assume(e.removeListener('foo', foo, { baz: 'quux' })).equals(e);
      assume(e.listeners('foo').length).equals(2);
      assume(e.removeListener('foo', foo, context)).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.listeners('foo')[0]).equals(bar);

      e.on('foo', foo, context);

      assume(e.listeners('foo').length).equals(2);
      assume(e.removeAllListeners('foo')).equals(e);
      assume(e.listeners('foo').length).equals(0);
    });
  });

  describe('EventEmitter#removeAllListeners', function () {
    it('removes all events for the specified events', function () {
      var e = new EventEmitter();

      e.on('foo', function () { throw new Error('oops'); });
      e.on('foo', function () { throw new Error('oops'); });
      e.on('bar', function () { throw new Error('oops'); });
      e.on('aaa', function () { throw new Error('oops'); });

      assume(e.removeAllListeners('foo')).equals(e);
      assume(e.listeners('foo').length).equals(0);
      assume(e.listeners('bar').length).equals(1);
      assume(e.listeners('aaa').length).equals(1);

      assume(e.removeAllListeners('bar')).equals(e);
      assume(e.removeAllListeners('aaa')).equals(e);

      assume(e.emit('foo')).equals(false);
      assume(e.emit('bar')).equals(false);
      assume(e.emit('aaa')).equals(false);
    });

    it('just nukes the fuck out of everything', function () {
      var e = new EventEmitter();

      e.on('foo', function () { throw new Error('oops'); });
      e.on('foo', function () { throw new Error('oops'); });
      e.on('bar', function () { throw new Error('oops'); });
      e.on('aaa', function () { throw new Error('oops'); });

      assume(e.removeAllListeners()).equals(e);
      assume(e.listeners('foo').length).equals(0);
      assume(e.listeners('bar').length).equals(0);
      assume(e.listeners('aaa').length).equals(0);

      assume(e.emit('foo')).equals(false);
      assume(e.emit('bar')).equals(false);
      assume(e.emit('aaa')).equals(false);
    });
  });

  describe('#setMaxListeners', function () {
    it('is a function', function () {
      var e = new EventEmitter();

      assume(e.setMaxListeners).is.a('function');
    });

    it('returns self when called', function () {
      var e = new EventEmitter();

      assume(e.setMaxListeners()).to.equal(e);
    });
  });
});
