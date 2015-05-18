// ReSharper disable InconsistentNaming
// ReSharper disable WrongExpressionStatement
/// <reference path="./tcomb.d.ts"/>
/// <reference path="../node/node.d.ts"/>
/// <reference path="../jasmine/jasmine.d.ts" />

// tests adapted from/for tcomb's test folder

'use strict';
import assert = require('assert');
var t = <TComb.tcomb> require('../index');

var Any = t.Any;
var Nil = t.Nil;
var Bool = t.Bool;
var Num = t.Num;
var Str = t.Str;
var Arr = t.Arr;
var Obj = t.Obj;
var Func = t.Func;
var Err = t.Err;
var Re = t.Re;
var Dat = t.Dat;
var struct = t.struct;
var enums = t.enums;
var union = t.union;
var tuple = t.tuple;
var maybe = t.maybe;
var subtype = t.subtype;
var list = t.list;
var dict = t.dict;
var func = t.func;
var getTypeName = t.getTypeName;
var mixin = t.mixin;
var format = t.format;

//
// setup
//

var ok = function (x:any) { assert.strictEqual(true, x); };
var ko = function (x:any) { assert.strictEqual(false, x); };
var eq = assert.deepEqual;
var throwsWithMessage = function (f:any, message:any) {
  assert.throws(f, function (err:any) {
    ok(err instanceof Error);
    eq(err.message, message);
    return true;
  });
};
var doesNotThrow = assert.doesNotThrow;

var noop = function () {};
var Point = struct({
  x: Num,
  y: Num
});

describe('update', function () {

  var update = t.update;
  var Tuple = tuple([Str, Num]);
  var List = list(Num);
  var Dict = dict(Str, Num);

  it('should handle $set command', function () {
    var instance = 1;
    var actual = update(instance, {$set: 2});
    eq(actual, 2);
    var instance2 = [1, 2, 3];
    actual = update(instance2, {1: {'$set': 4}});
    eq(instance2, [1, 2, 3]);
    eq(actual, [1, 4, 3]);
  });

  it('$set and null value, fix #65', function () {
    var NullStruct = struct({a: Num, b: maybe(Num)});
    var instance = new NullStruct({a: 1});
    var updated = update(instance, {b: {$set: 2}});
    eq(instance, {a: 1, b: null});
    eq(updated, {a: 1, b: 2});
  });

  it('should handle $apply command', function () {
    var $apply = function (n:any) { return n + 1; };
    var instance = 1;
    var actual = update(instance, {$apply: $apply});
    eq(actual, 2);
    var instance2 = [1, 2, 3];
    actual = update(instance2, {1: {'$apply': $apply}});
    eq(instance2, [1, 2, 3]);
    eq(actual, [1, 3, 3]);
  });

  it('should handle $unshift command', function () {
    var actual = update([1, 2, 3], {'$unshift': [4]});
    eq(actual, [4, 1, 2, 3]);
    actual = update([1, 2, 3], {'$unshift': [4, 5]});
    eq(actual, [4, 5, 1, 2, 3]);
    actual = update([1, 2, 3], {'$unshift': [[4, 5]]});
    eq(actual, [[4, 5], 1, 2, 3]);
  });

  it('should handle $push command', function () {
    var actual = update([1, 2, 3], {'$push': [4]});
    eq(actual, [1, 2, 3, 4]);
    actual = update([1, 2, 3], {'$push': [4, 5]});
    eq(actual, [1, 2, 3, 4, 5]);
    actual = update([1, 2, 3], {'$push': [[4, 5]]});
    eq(actual, [1, 2, 3, [4, 5]]);
  });

  it('should handle $splice command', function () {
    var instance = [1, 2, {a: [12, 17, 15]}];
    var actual = update(instance, {2: {a: {$splice: [[1, 1, 13, 14]]}}});
    eq(instance, [1, 2, {a: [12, 17, 15]}]);
    eq(actual, [1, 2, {a: [12, 13, 14, 15]}]);
  });

  it('should handle $remove command', function () {
    var instance = {a: 1, b: 2};
    var actual = update(instance, {'$remove': ['a']});
    eq(instance, {a: 1, b: 2});
    eq(actual, {b: 2});
  });

  it('should handle $swap command', function () {
    var instance = [1, 2, 3, 4];
    var actual = update(instance, {'$swap': {from: 1, to: 2}});
    eq(instance, [1, 2, 3, 4]);
    eq(actual, [1, 3, 2, 4]);
  });

  describe('structs', function () {

    var instance = new Point({x: 0, y: 1});

    it('should handle $set command', function () {
      var updated = update(instance, {x: {$set: 1}});
      eq(instance, {x: 0, y: 1});
      eq(updated, {x: 1, y: 1});
    });

    it('should handle $apply command', function () {
      var updated = update(instance, {x: {$apply: function (x:any) {
        return x + 2;
      }}});
      eq(instance, {x: 0, y: 1});
      eq(updated, {x: 2, y: 1});
    });

    it('should handle $merge command', function () {
      var updated = update(instance, {'$merge': {x: 2, y: 2}});
      eq(instance, {x: 0, y: 1});
      eq(updated, {x: 2, y: 2});
      var Nested = struct({
        a: Num,
        b: struct({
          c: Num,
          d: Num,
          e: Num
        })
      });
      instance = new Nested({a: 1, b: {c: 2, d: 3, e: 4}});
      updated = update(instance, {b: {'$merge': {c: 5, e: 6}}});
      eq(instance, {a: 1, b: {c: 2, d: 3, e: 4}});
      eq(updated, {a: 1, b: {c: 5, d: 3, e: 6}});
    });

  });

  describe('tuples', function () {

    var instance = Tuple(['a', 1]);

    it('should handle $set command', function () {
      var updated = update(instance, {0: {$set: 'b'}});
      eq(updated, ['b', 1]);
    });

  });

  describe('lists', function () {

    var instance = List([1, 2, 3, 4]);

    it('should handle $set command', function () {
      var updated = update(instance, {2: {$set: 5}});
      eq(updated, [1, 2, 5, 4]);
    });

    it('should handle $splice command', function () {
      var updated = update(instance, {$splice: [[1, 2, 5, 6]]});
      eq(updated, [1, 5, 6, 4]);
    });

    it('should handle $concat command', function () {
      var updated = update(instance, {$push: [5]});
      eq(updated, [1, 2, 3, 4, 5]);
      updated = update(instance, {$push: [5, 6]});
      eq(updated, [1, 2, 3, 4, 5, 6]);
    });

    it('should handle $prepend command', function () {
      var updated = update(instance, {$unshift: [5]});
      eq(updated, [5, 1, 2, 3, 4]);
      updated = update(instance, {$unshift: [5, 6]});
      eq(updated, [5, 6, 1, 2, 3, 4]);
    });

    it('should handle $swap command', function () {
      var updated = update(instance, {$swap: {from: 1, to: 2}});
      eq(updated, [1, 3, 2, 4]);
    });

  });

  describe('dicts', function () {

    var instance = Dict({a: 1, b: 2});

    it('should handle $set command', function () {
      var updated = update(instance, {a: {$set: 2}});
      eq(updated, {a: 2, b: 2});
    });

    it('should handle $remove command', function () {
      var updated = update(instance, {$remove: ['a']});
      eq(updated, {b: 2});
    });

  });

  describe('memory saving', function () {

    it('should reuse members that are not updated', function () {
      var Struct = struct({
        a: Num,
        b: Str,
        c: tuple([Num, Num]),
      });
      var List = list(Struct);
      var instance = List([{
        a: 1,
        b: 'one',
        c: [1000, 1000000]
      },{
        a: 2,
        b: 'two',
        c: [2000, 2000000]
      }]);

      var updated = update(instance, {
        1: {
          a: {$set: 119}
        }
      });

      assert.strictEqual((<any> updated)[0], (<any> instance)[0]);
      assert.notStrictEqual((<any> updated)[1], (<any> instance)[1]);
      assert.strictEqual((<any> updated)[1].c, (<any> instance)[1].c);
    });
  });

  describe('all together now', function () {

    it('should handle mixed commands', function () {
      var Struct = struct({
        a: Num,
        b: Tuple,
        c: List,
        d: Dict
      });
      var instance = new Struct({
        a: 1,
        b: ['a', 1],
        c: [1, 2, 3, 4],
        d: {a: 1, b: 2}
      });
      var updated = update(instance, {
        a: {$set: 1},
        b: {0: {$set: 'b'}},
        c: {2: {$set: 5}},
        d: {$remove: ['a']}
      });
      eq(updated, {
        a: 1,
        b: ['b', 1],
        c: [1, 2, 5, 4],
        d: {b: 2}
      });
    });

    it('should handle nested structures', function () {
      var Struct = struct({
        a: struct({
          b: tuple([
            Str,
            list(Num)
          ])
        })
      });
      var instance = new Struct({
        a: {
          b: ['a', [1, 2, 3]]
        }
      });
      var updated = update(instance, {
        a: {b: {1: {2: {$set: 4}}}}
      });
      eq(updated, {
        a: {
          b: ['a', [1, 2, 4]]
        }
      });
    });

  });

});

//
// assert
//

describe('assert', function () {

  var assert = t.assert;

  it('should nor throw when guard is true', function () {
    assert(true);
  });

  it('should throw a default message', function () {
    throwsWithMessage(function () {
      assert(1 === 2);
    }, 'assert failed');
  });

  it('should throw the specified message', function () {
    throwsWithMessage(function () {
      assert(1 === 2, 'my message');
    }, 'my message');
  });

  it('should format the specified message', function () {
    throwsWithMessage(function () {
      assert(1 === 2, '%s !== %s', 1, 2);
    }, '1 !== 2');
  });

  it('should handle custom fail behaviour', function () {
    var fail = t.fail;
    t.fail = function (message) {
      try {
        throw new Error(message);
      } catch (e) {
        eq(e.message, 'report error');
      }
    };
    doesNotThrow(function () {
      assert(1 === 2, 'report error');
    });
    t.fail = fail;
  });

});

//
// utils
//

describe('format(str, [...])', function () {

  it('should format strings', function () {
    eq(format('%s', 'a'), 'a');
    eq(format('%s', 2), '2');
    eq(format('%s === %s', 1, 1), '1 === 1');
  });

  it('should format JSON', function () {
    eq(format('%j', {a: 1}), '{"a":1}');
  });

  it('should handle undefined formatters', function () {
    eq(format('%o', 'a'), '%o a');
  });

  it('should handle escaping %', function () {
    eq(format('%%s'), '%s');
  });

  it('should not consume an argument with a single %', function () {
    eq(format('%s%', '100'), '100%');
  });

  it('should handle less arguments than placeholders', function () {
    eq(format('%s %s', 'a'), 'a %s');
  });

  it('should handle more arguments than placeholders', function () {
    eq(format('%s', 'a', 'b', 'c'), 'a b c');
  });

  it('should be extensible', function () {
    (<any>format).formatters.l = function (x:any) { return x.length; };
    eq(format('%l', ['a', 'b', 'c']), '3');
  });

});

describe('mixin(x, y, [overwrite])', function () {

  it('should mix two objects', function () {
    var o1 = {a: 1};
    var o2 = {b: 2};
    var o3 = mixin(o1, o2);
    ok(o3 === o1);
    eq(o3.a, 1);
    eq(o3.b, 2);
  });

  it('should throw if a property already exists', function () {
    throwsWithMessage(function () {
      var o1 = {a: 1};
      var o2 = {a: 2, b: 2};
      mixin(o1, o2);
    }, 'Cannot overwrite property a');
  });

  it('should not throw if a property already exists but overwrite = true', function () {
    var o1 = {a: 1};
    var o2 = {a: 2, b: 2};
    var o3 = mixin(o1, o2, true);
    eq(o3.a, 2);
    eq(o3.b, 2);
  });

  it('should not mix prototype properties', function () {
    function F() {}
    F.prototype.method = noop;
    var source = new (<any>F)();
    var target = {};
    mixin(target, source);
    eq((<any>target).method, undefined);
  });

});

describe('getFunctionName(f, [defaultName])', function () {

  var getFunctionName = t.getFunctionName;

  it('should return the name of a named function', function () {
    eq(getFunctionName(function myfunc(){}), 'myfunc');
  });

  it('should return the value of `displayName` if specified', function () {
    var f = function myfunc(){};
    (<any>f).displayName = 'mydisplayname';
    eq(getFunctionName(f), 'mydisplayname');
  });

  it('should fallback on function arity if nothing is specified', function () {
    eq(getFunctionName(function (a:any, b:any, c:any) { return a + b + c; }), '<function3>');
  });

});

describe('getTypeName(type)', function () {

  var UnnamedStruct = struct({});
  var NamedStruct = struct({}, 'NamedStruct');
  var UnnamedUnion = union([Str, Num]);
  var NamedUnion = union([Str, Num], 'NamedUnion');
  var UnnamedMaybe = maybe(Str);
  var NamedMaybe = maybe(Str, 'NamedMaybe');
  var UnnamedEnums = enums({a: 'A', b: 'B'});
  var NamedEnums = enums({}, 'NamedEnums');
  var UnnamedTuple = tuple([Str, Num]);
  var NamedTuple = tuple([Str, Num], 'NamedTuple');
  var UnnamedSubtype = subtype(Str, function notEmpty(x) { return x !== ''; });
  var NamedSubtype = subtype(Str, function (x) { return x !== ''; }, 'NamedSubtype');
  var UnnamedList = list(Str);
  var NamedList = list(Str, 'NamedList');
  var UnnamedDict = dict(Str, Str);
  var NamedDict = dict(Str, Str, 'NamedDict');
  var UnnamedFunc = func(Str, Str);
  var NamedFunc = func(Str, Str, 'NamedFunc');

  it('should return the name of a named type', function () {
    eq(getTypeName(NamedStruct), 'NamedStruct');
    eq(getTypeName(NamedUnion), 'NamedUnion');
    eq(getTypeName(NamedMaybe), 'NamedMaybe');
    eq(getTypeName(NamedEnums), 'NamedEnums');
    eq(getTypeName(NamedTuple), 'NamedTuple');
    eq(getTypeName(NamedSubtype), 'NamedSubtype');
    eq(getTypeName(NamedList), 'NamedList');
    eq(getTypeName(NamedDict), 'NamedDict');
    eq(getTypeName(NamedFunc), 'NamedFunc');
  });

  it('should return a meaningful name of a unnamed type', function () {
    eq(getTypeName(UnnamedStruct), '{}');
    eq(getTypeName(UnnamedUnion), 'Str | Num');
    eq(getTypeName(UnnamedMaybe), '?Str');
    eq(getTypeName(UnnamedEnums), '"a" | "b"');
    eq(getTypeName(UnnamedTuple), '[Str, Num]');
    eq(getTypeName(UnnamedSubtype), '{Str | notEmpty}');
    eq(getTypeName(UnnamedList), 'Array<Str>');
    eq(getTypeName(UnnamedDict), '{[key:Str]: Str}');
    eq(getTypeName(UnnamedFunc), '(Str) => Str');
  });

});

//
// Any
//

describe('Any', function () {

  var T = Any;

  describe('constructor', function () {

    it('should behave like identity', function () {
      eq(Any('a'), 'a');
    });

    it('should throw if used with new', function () {
      throwsWithMessage(function () {
        /* jshint ignore:start */
        var x = new   (<any>T)();
        /* jshint ignore:end */
      }, 'Operator `new` is forbidden for type `Any`');
    });

  });

  describe('#is(x)', function () {

    it('should always return true', function () {
      ok(T.is(null));
      ok(T.is(undefined));
      ok(T.is(0));
      ok(T.is(true));
      ok(T.is(''));
      ok(T.is([]));
      ok(T.is({}));
      ok(T.is(noop));
      ok(T.is(/a/));
      ok(T.is(new RegExp('a')));
      ok(T.is(new Error()));
    });

  });

});

//
// irreducible types
//

describe('irreducible types constructors', function () {

  [
    {T: Nil, x: null},
    {T: Str, x: 'a'},
    {T: Num, x: 1},
    {T: Bool, x: true},
    {T: Arr, x: []},
    {T: Obj, x: {}},
    {T: Func, x: noop},
    {T: Err, x: new Error()},
    {T: Re, x: /a/},
    {T: Dat, x: new Date()}
  ].forEach(function (o) {

    var T = o.T;
    var x = o.x;

    it('should accept only valid values', function () {
      eq(T(x), x);
    });

    it('should throw if used with new', function () {
      throwsWithMessage(function () {
        /* jshint ignore:start */
        var x = new    (<any>T) ();
        /* jshint ignore:end */
      }, 'Operator `new` is forbidden for type `' + getTypeName(T) + '`');
    });

  });

});

describe('Nil', function () {

  describe('#is(x)', function () {

    it('should return true when x is null or undefined', function () {
      ok(Nil.is(null));
      ok(Nil.is(undefined));
    });

    it('should return false when x is neither null nor undefined', function () {
      ko(Nil.is(0));
      ko(Nil.is(true));
      ko(Nil.is(''));
      ko(Nil.is([]));
      ko(Nil.is({}));
      ko(Nil.is(noop));
      ko(Nil.is(new Error()));
      ko(Nil.is(new Date()));
      ko(Nil.is(/a/));
      ko(Nil.is(new RegExp('a')));
    });

  });

});

describe('Bool', function () {

  describe('#is(x)', function () {

    it('should return true when x is true or false', function () {
      ok(Bool.is(true));
      ok(Bool.is(false));
    });

    it('should return false when x is neither true nor false', function () {
      ko(Bool.is(null));
      ko(Bool.is(undefined));
      ko(Bool.is(0));
      ko(Bool.is(''));
      ko(Bool.is([]));
      ko(Bool.is({}));
      ko(Bool.is(noop));
      ko(Bool.is(/a/));
      ko(Bool.is(new RegExp('a')));
      ko(Bool.is(new Error()));
      ko(Bool.is(new Date()));
    });

  });

});

describe('Num', function () {

  describe('#is(x)', function () {

    it('should return true when x is a number', function () {
      ok(Num.is(0));
      ok(Num.is(1));
      /* jshint ignore:start */
      ko(Num.is(new Number(1)));
      /* jshint ignore:end */
    });

    it('should return false when x is not a number', function () {
      ko(Num.is(NaN));
      ko(Num.is(Infinity));
      ko(Num.is(-Infinity));
      ko(Num.is(null));
      ko(Num.is(undefined));
      ko(Num.is(true));
      ko(Num.is(''));
      ko(Num.is([]));
      ko(Num.is({}));
      ko(Num.is(noop));
      ko(Num.is(/a/));
      ko(Num.is(new RegExp('a')));
      ko(Num.is(new Error()));
      ko(Num.is(new Date()));
    });

  });

});

describe('Str', function () {

  describe('#is(x)', function () {

    it('should return true when x is a string', function () {
      ok(Str.is(''));
      ok(Str.is('a'));
      /* jshint ignore:start */
      ko(Str.is(new String('a')));
      /* jshint ignore:end */
    });

    it('should return false when x is not a string', function () {
      ko(Str.is(NaN));
      ko(Str.is(Infinity));
      ko(Str.is(-Infinity));
      ko(Str.is(null));
      ko(Str.is(undefined));
      ko(Str.is(true));
      ko(Str.is(1));
      ko(Str.is([]));
      ko(Str.is({}));
      ko(Str.is(noop));
      ko(Str.is(/a/));
      ko(Str.is(new RegExp('a')));
      ko(Str.is(new Error()));
      ko(Str.is(new Date()));
    });

  });

});

describe('Arr', function () {

  describe('#is(x)', function () {

    it('should return true when x is an array', function () {
      ok(Arr.is([]));
    });

    it('should return false when x is not an array', function () {
      ko(Arr.is(NaN));
      ko(Arr.is(Infinity));
      ko(Arr.is(-Infinity));
      ko(Arr.is(null));
      ko(Arr.is(undefined));
      ko(Arr.is(true));
      ko(Arr.is(1));
      ko(Arr.is('a'));
      ko(Arr.is({}));
      ko(Arr.is(noop));
      ko(Arr.is(/a/));
      ko(Arr.is(new RegExp('a')));
      ko(Arr.is(new Error()));
      ko(Arr.is(new Date()));
    });

  });

});

describe('Obj', function () {

  describe('#is(x)', function () {

    it('should return true when x is an object', function () {
      function A() {}
      ok(Obj.is({}));
      ok(Obj.is(new (<any>A)()));
    });

    it('should return false when x is not an object', function () {
      ko(Obj.is(null));
      ko(Obj.is(undefined));
      ko(Obj.is(0));
      ko(Obj.is(''));
      ko(Obj.is([]));
      ko(Obj.is(noop));
    });

  });

});

describe('Func', function () {

  describe('#is(x)', function () {

    it('should return true when x is a function', function () {
      ok(Func.is(noop));
      /* jshint ignore:start */
      ok(Func.is(new Function()));
      /* jshint ignore:end */
    });

    it('should return false when x is not a function', function () {
      ko(Func.is(null));
      ko(Func.is(undefined));
      ko(Func.is(0));
      ko(Func.is(''));
      ko(Func.is([]));
      /* jshint ignore:start */
      ko(Func.is(new String('1')));
      ko(Func.is(new Number(1)));
      ko(Func.is(new Boolean()));
      /* jshint ignore:end */
      ko(Func.is(/a/));
      ko(Func.is(new RegExp('a')));
      ko(Func.is(new Error()));
      ko(Func.is(new Date()));
    });

  });

});

describe('Err', function () {

  describe('#is(x)', function () {

    it('should return true when x is an error', function () {
      ok(Err.is(new Error()));
    });

    it('should return false when x is not an error', function () {
      ko(Err.is(null));
      ko(Err.is(undefined));
      ko(Err.is(0));
      ko(Err.is(''));
      ko(Err.is([]));
      /* jshint ignore:start */
      ko(Err.is(new String('1')));
      ko(Err.is(new Number(1)));
      ko(Err.is(new Boolean()));
      /* jshint ignore:end */
      ko(Err.is(/a/));
      ko(Err.is(new RegExp('a')));
      ko(Err.is(new Date()));
    });

  });

});

describe('Re', function () {

  describe('#is(x)', function () {

    it('should return true when x is a regexp', function () {
      ok(Re.is(/a/));
      ok(Re.is(new RegExp('a')));
    });

    it('should return false when x is not a regexp', function () {
      ko(Re.is(null));
      ko(Re.is(undefined));
      ko(Re.is(0));
      ko(Re.is(''));
      ko(Re.is([]));
      /* jshint ignore:start */
      ko(Re.is(new String('1')));
      ko(Re.is(new Number(1)));
      ko(Re.is(new Boolean()));
      /* jshint ignore:end */
      ko(Re.is(new Error()));
      ko(Re.is(new Date()));
    });

  });

});

describe('Dat', function () {

  describe('#is(x)', function () {

    it('should return true when x is a Dat', function () {
      ok(Dat.is(new Date()));
    });

    it('should return false when x is not a Dat', function () {
      ko(Dat.is(null));
      ko(Dat.is(undefined));
      ko(Dat.is(0));
      ko(Dat.is(''));
      ko(Dat.is([]));
      /* jshint ignore:start */
      ko(Dat.is(new String('1')));
      ko(Dat.is(new Number(1)));
      ko(Dat.is(new Boolean()));
      /* jshint ignore:end */
      ko(Dat.is(new Error()));
      ko(Dat.is(/a/));
      ko(Dat.is(new RegExp('a')));
    });

  });

});

//
// struct
//

describe('struct', function () {

  describe('combinator', function () {

    it('should throw if used with wrong arguments', function () {

      throwsWithMessage(function () {
        (<any>struct)();
      }, 'Invalid argument `props` = `undefined` supplied to `struct` combinator');

      throwsWithMessage(function () {
        struct({a: null});
      }, 'Invalid argument `props` = `[object Object]` supplied to `struct` combinator');

      throwsWithMessage(function () {
        (<any>struct)({}, 1);
      }, 'Invalid argument `name` = `1` supplied to `struct` combinator');

    });

  });
  describe('constructor', function () {

    it('should be idempotent', function () {
      var T = Point;
      var p1 = T({x: 0, y: 0});
      var p2 = T(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });

    it('should accept only valid values', function () {
      throwsWithMessage(function () {
        Point(1);
      }, 'Invalid argument `value` = `1` supplied to struct type `{x: Num, y: Num}`');
    });

  });

  describe('#is(x)', function () {

    it('should return true when x is an instance of the struct', function () {
      var p = new Point({ x: 1, y: 2 });
      ok(Point.is(p));
    });

  });

  describe('#update()', function () {

    var Type = struct({name: Str});
    var instance = new Type({name: 'Giulio'});

    it('should return a new instance', function () {
      var newInstance = Type.update(instance, {name: {$set: 'Canti'}});
      ok(Type.is(newInstance));
      eq( (<any> instance).name, 'Giulio');
      eq((<any> newInstance).name, 'Canti');
    });

  });

  describe('#extend(props, [name])', function () {

    it('should extend an existing struct', function () {
      var Point = struct({
        x: Num,
        y: Num
      }, 'Point');
      var Point3D = Point.extend({z: Num}, 'Point3D');
      eq(getTypeName(Point3D), 'Point3D');
      eq((<any>Point3D).meta.props.x, Num);
      eq((<any>Point3D).meta.props.y, Num);
      eq((<any>Point3D).meta.props.z, Num);
    });

    it('should handle an array as argument', function () {
      var Type = struct({a: Str}, 'Type');
      var Mixin = [{b: Num, c: Bool}];
      var NewType = Type.extend(Mixin, 'NewType');
      eq(getTypeName(NewType), 'NewType');
      eq((<any>NewType).meta.props.a, Str);
      eq((<any>NewType).meta.props.b, Num);
      eq((<any>NewType).meta.props.c, Bool);
    });

    it('should handle a struct (or list of structs) as argument', function () {
      var A = struct({a: Str}, 'A');
      var B = struct({b: Str}, 'B');
      var C = struct({c: Str}, 'C');
      var MixinD = {d: Str};
      var E = A.extend([B, C, MixinD]);
      eq(E.meta.props, {
        a: Str,
        b: Str,
        c: Str,
        d: Str
      });
    });

    it('should support prototypal inheritance', function () {
      var Rectangle = struct({
        w: Num,
        h: Num
      }, 'Rectangle');
      Rectangle.prototype.area = function () {
        return this.w * this.h;
      };
      var Cube = Rectangle.extend({
        l: Num
      });
      Cube.prototype.volume = function () {
        return this.area() * this.l;
      };

      assert('function' === typeof Rectangle.prototype.area);
      assert('function' === typeof Cube.prototype.area);
      assert(undefined === Rectangle.prototype.volume);
      assert('function' === typeof Cube.prototype.volume);
      assert(Cube.prototype.constructor === Cube);

      var c = new Cube({w:2, h:2, l:2});
      eq((<any>c).volume(), 8);
    });

  });

});

//
// enums
//

describe('enums', function () {

  describe('combinator', function () {

    it('should throw if used with wrong arguments', function () {

      throwsWithMessage(function () {
        (<any>enums)();
      }, 'Invalid argument `map` = `undefined` supplied to `enums` combinator');

      throwsWithMessage(function () {
        (<any>enums)({}, 1);
      }, 'Invalid argument `name` = `1` supplied to `enums` combinator');

    });

  });

  describe('constructor', function () {

    var T = enums({a: 0}, 'T');

    it('should throw if used with new', function () {
      throwsWithMessage(function () {
        /* jshint ignore:start */
        var x = new (<any>T)('a');
        /* jshint ignore:end */
      }, 'Operator `new` is forbidden for type `T`');
    });

    it('should accept only valid values', function () {
      eq((<any>T)('a'), 'a');
      throwsWithMessage(function () {
        (<any>T)('b');
      }, 'Invalid argument `value` = `b` supplied to enums type `T`, expected one of ["a"]');
    });

  });

  describe('#is(x)', function () {

    var Direction = enums({
      North: 0,
      East: 1,
      South: 2,
      West: 3,
      1: 'North-East',
      2.5: 'South-East'
    });

    it('should return true when x is an instance of the enum', function () {
      ok(Direction.is('North'));
      ok(Direction.is(1));
      ok(Direction.is('1'));
      ok(Direction.is(2.5));
    });

    it('should return false when x is not an instance of the enum', function () {
      ko(Direction.is('North-East'));
      ko(Direction.is(2));
    });

  });

  describe('#of(keys)', function () {

    it('should return an enum', function () {
      var Size = (<any>enums).of(['large', 'small', 1, 10.9]); ///!!!
      ok(Size.meta.map.large === 'large');
      ok(Size.meta.map.small === 'small');
      ok(Size.meta.map['1'] === 1);
      ok(Size.meta.map[10.9] === 10.9);
    });

    it('should handle a string', function () {
      var Size = (<any>enums).of('large small 10');
      ok(Size.meta.map.large === 'large');
      ok(Size.meta.map.small === 'small');
      ok(Size.meta.map['10'] === '10');
      ok(Size.meta.map[10] === '10');
    });

  });

});

//
// union
//

describe('union', function () {

  var Circle = struct({
    center: Point,
    radius: Num
  }, 'Circle');

  var Rectangle = struct({
    a: Point,
    b: Point
  });

  var Shape = union([Circle, Rectangle], 'Shape');

  Shape.dispatch = function (values) {
    assert(Obj.is(values));
    return values.hasOwnProperty('center') ?
      Circle :
      Rectangle;
  };

  describe('combinator', function () {

    it('should throw if used with wrong arguments', function () {

      throwsWithMessage(function () {
        (<any>union)();
      }, 'Invalid argument `types` = `undefined` supplied to `union` combinator');

      throwsWithMessage(function () {
        union([]);
      }, 'Invalid argument `types` = `` supplied to `union` combinator, provide at least two types');

      throwsWithMessage(function () {
        union([Circle]);
      }, 'Invalid argument `types` = `Circle` supplied to `union` combinator, provide at least two types');

      throwsWithMessage(function () {
        (<any>union)([Circle, Point], 1);
      }, 'Invalid argument `name` = `1` supplied to `union` combinator');

    });

  });

  describe('constructor', function () {

    it('should throw when dispatch() is not implemented', function () {
      throwsWithMessage(function () {
        var T = union([Str, Num], 'T');
        T.dispatch = null;
        T(1);
      }, 'Unimplemented `dispatch()` function for union type `T`');
    });

    it('should have a default dispatch() implementation', function () {
      var T = union([Str, Num], 'T');
      eq(T(1), 1);
    });

    it('should throw when dispatch() does not return a type', function () {
      throwsWithMessage(function () {
        var T = union([Str, Num], 'T');
        T(true);
      }, 'The `dispatch()` function of union type `T` returns no type constructor');
    });

    it('should build instances when dispatch() is implemented', function () {
      var circle = Shape({center: {x: 0, y: 0}, radius: 10});
      ok(Circle.is(circle));
    });

    it('should throw if used with new and union types are not instantiables with new', function () {
      throwsWithMessage(function () {
        var T = union([Str, Num], 'T');
        T.dispatch = function () { return Str; };
        /* jshint ignore:start */
        var x = new T('a');
        /* jshint ignore:end */
      }, 'Operator `new` is forbidden for type `T`');
    });

    it('should not throw if used with new and union types are instantiables with new', function () {
      doesNotThrow(function () {
        Shape({center: {x: 0, y: 0}, radius: 10});
      });
    });

    it('should be idempotent', function () {
      var p1 = Shape({center: {x: 0, y: 0}, radius: 10});
      var p2 = Shape(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });

  });

  describe('#is(x)', function () {

    it('should return true when x is an instance of the union', function () {
      var p = new Circle({center: { x: 0, y: 0 }, radius: 10});
      ok(Shape.is(p));
    });

  });

});

//
// maybe
//

describe('maybe', function () {

  describe('combinator', function () {

    it('should throw if used with wrong arguments', function () {

      throwsWithMessage(function () {
        (<any>maybe)();
      }, 'Invalid argument `type` = `undefined` supplied to `maybe` combinator');

      throwsWithMessage(function () {
        (<any>maybe)(Point, 1);
      }, 'Invalid argument `name` = `1` supplied to `maybe` combinator');

    });

    it('should be idempotent', function () {
      var MaybeStr = maybe(Str);
      ok(maybe(MaybeStr) === MaybeStr);
    });

    it('should be noop with Any', function () {
      ok(maybe(Any) === Any);
    });

    it('should be noop with Nil', function () {
      ok((<any>maybe)(Nil) === Nil);
    });

  });

  describe('constructor', function () {

    it('should throw if used with new', function () {
      throwsWithMessage(function () {
        /* jshint ignore:start */
        var T = maybe(Str, 'T');
        var x = new (<any>T)();
        /* jshint ignore:end */
      }, 'Operator `new` is forbidden for type `T`');
    });

    it('should coerce values', function () {
      var T = maybe(Point);
      eq(T(null), null);
      eq(T(undefined), null);
      ok(Point.is(T({x: 0, y: 0})));
    });

    it('should be idempotent', function () {
      var T = maybe(Point);
      var p1 = T({x: 0, y: 0});
      var p2 = T(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });

  });

  describe('#is(x)', function () {

    it('should return true when x is an instance of the maybe', function () {
      var Radio = maybe(Str);
      ok(Radio.is('a'));
      ok(Radio.is(null));
      ok(Radio.is(undefined));
    });

  });

});

//
// tuple
//

describe('tuple', function () {

  var Area = tuple([Num, Num], 'Area');

  describe('combinator', function () {

    it('should throw if used with wrong arguments', function () {

      throwsWithMessage(function () {
        (<any>tuple)();
      }, 'Invalid argument `types` = `undefined` supplied to `tuple` combinator');

      throwsWithMessage(function () {
        (<any>tuple)([Point, Point], 1);
      }, 'Invalid argument `name` = `1` supplied to `tuple` combinator');

    });

  });

  describe('constructor', function () {

    var S = struct({}, 'S');
    var T = tuple([S, S], 'T');

    it('should coerce values', function () {
      var t = T([{}, {}]);
      ok(S.is((<any> t)[0]));
      ok(S.is((<any> t)[1]));
    });

    it('should accept only valid values', function () {

      throwsWithMessage(function () {
        T(1);
      }, 'Invalid argument `value` = `1` supplied to tuple type `T`, expected an `Arr` of length `2`');

      throwsWithMessage(function () {
        T([1, 1]);
      }, 'Invalid argument `value` = `1` supplied to struct type `S`');

    });

    it('should be idempotent', function () {
      var T = tuple([Str, Num]);
      var p1 = T(['a', 1]);
      var p2 = T(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });

  });

  describe('#is(x)', function () {

    it('should return true when x is an instance of the tuple', function () {
      ok(Area.is([1, 2]));
    });

    it('should return false when x is not an instance of the tuple', function () {
      ko(Area.is([1]));
      ko(Area.is([1, 2, 3]));
      ko(Area.is([1, 'a']));
    });

    it('should not depend on `this`', function () {
      ok([[1, 2]].every(Area.is));
    });

  });

  describe('#update()', function () {

    var Type = tuple([Str, Num]);
    var instance = Type(['a', 1]);

    it('should return a new instance', function () {
      var newInstance = Type.update(instance, {0: {$set: 'b'}});
      assert(Type.is(newInstance));
      assert((<any> instance)[0] === 'a');
      assert((<any> newInstance)[0] === 'b');
    });

  });

});

//
// list
//

describe('list', function () {

  describe('combinator', function () {

    it('should throw if used with wrong arguments', function () {

      throwsWithMessage(function () {
        (<any>list)();
      }, 'Invalid argument `type` = `undefined` supplied to `list` combinator');

      throwsWithMessage(function () {
        (<any>list)(Point, 1);
      }, 'Invalid argument `name` = `1` supplied to `list` combinator');

    });

  });

  describe('constructor', function () {

    var S = struct({}, 'S');
    var T = list(S, 'T');

    it('should coerce values', function () {
      var t = T([{}]);
      ok(S.is((<any> t)[0]));
    });

    it('should accept only valid values', function () {

      throwsWithMessage(function () {
        T(1);
      }, 'Invalid argument `value` = `1` supplied to list type `T`');

      throwsWithMessage(function () {
        T([1]);
      }, 'Invalid argument `value` = `1` supplied to struct type `S`');

    });

    it('should be idempotent', function () {
      var T = list(Num);
      var p1 = T([1, 2]);
      var p2 = T(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });

  });

  describe('#is(x)', function () {

    var Path = list(Point);
    var p1 = new Point({x: 0, y: 0});
    var p2 = new Point({x: 1, y: 1});

    it('should return true when x is a list', function () {
      ok(Path.is([p1, p2]));
    });

    it('should not depend on `this`', function () {
      ok([[p1, p2]].every(Path.is));
    });

  });

  describe('#update()', function () {

    var Type = list(Str);
    var instance = Type(['a', 'b']);

    it('should return a new instance', function () {
      var newInstance = Type.update(instance, {'$push': ['c']});
      assert(Type.is(newInstance));
      assert((<any>instance).length === 2);
      assert((<any>newInstance).length === 3);
    });

  });

});

//
// subtype
//

describe('subtype', function () {

  var True = function () { return true; };

  describe('combinator', function () {

    it('should throw if used with wrong arguments', function () {

      throwsWithMessage(function () {
        (<any>subtype)();
      }, 'Invalid argument `type` = `undefined` supplied to `subtype` combinator');

      throwsWithMessage(function () {
        subtype(Point, null);
      }, 'Invalid argument `predicate` = `null` supplied to `subtype` combinator');

      throwsWithMessage(function () {
        (<any>subtype)(Point, True, 1);
      }, 'Invalid argument `name` = `1` supplied to `subtype` combinator');

    });

  });

  describe('constructor', function () {

    it('should throw if used with new and a type that is not instantiable with new', function () {
      throwsWithMessage(function () {
        /* jshint ignore:start */
        var T = subtype(Str, function () { return true; }, 'T');
        var x = new(<any> T)();
        /* jshint ignore:end */
      }, 'Operator `new` is forbidden for type `T`');
    });

    it('should coerce values', function () {
      var T = subtype(Point, function () { return true; });
      var p = T({x: 0, y: 0});
      ok(Point.is(p));
    });

    it('should accept only valid values', function () {
      var predicate = function (p:any) { return p.x > 0; };
      var T = subtype(Point, predicate, 'T');
      throwsWithMessage(function () {
        T({x: 0, y: 0});
      }, 'Invalid argument `value` = `[object Object]` supplied to subtype type `T`');
    });

  });

  describe('#is(x)', function () {

    var Positive = subtype(Num, function (n) {
      return n >= 0;
    });

    it('should return true when x is a subtype', function () {
      ok(Positive.is(1));
    });

    it('should return false when x is not a subtype', function () {
      ko(Positive.is(-1));
    });

  });

  describe('#update()', function () {

    var Type = subtype(Str, function (s) { return s.length > 2; });
    var instance = Type('abc');

    it('should return a new instance', function () {
      var newInstance = Type.update(instance, {'$set': 'bca'});
      assert(Type.is(newInstance));
      eq(newInstance, 'bca');
    });

  });

});

//
// dict
//

describe('dict', function () {

  describe('combinator', function () {

    it('should throw if used with wrong arguments', function () {

      throwsWithMessage(function () {
        (<any>dict)();
      }, 'Invalid argument `domain` = `undefined` supplied to `dict` combinator');

      throwsWithMessage(function () {
        (<any>dict)(Str);
      }, 'Invalid argument `codomain` = `undefined` supplied to `dict` combinator');

      throwsWithMessage(function () {
        (<any>dict)(Str, Point, 1);
      }, 'Invalid argument `name` = `1` supplied to `dict` combinator');

    });

  });

  describe('constructor', function () {

    var S = struct({}, 'S');
    var Domain = subtype(Str, function (x) {
      return x !== 'forbidden';
    }, 'Domain');
    var T = dict(Domain, S, 'T');

    it('should coerce values', function () {
      var t = T({a: {}});
      ok(S.is((<any>t).a));
    });

    it('should accept only valid values', function () {

      throwsWithMessage(function () {
        T(1);
      }, 'Invalid argument `value` = `1` supplied to dict type `T`');

      throwsWithMessage(function () {
        T({a: 1});
      }, 'Invalid argument `value` = `1` supplied to struct type `S`');

      throwsWithMessage(function () {
        T({forbidden: {}});
      }, 'Invalid argument `value` = `forbidden` supplied to subtype type `Domain`');

    });

    it('should be idempotent', function () {
      var T = dict(Str, Str);
      var p1 = T({a: 'a', b: 'b'});
      var p2 = T(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });

  });

  describe('#is(x)', function () {

    var T = dict(Str, Point);
    var p1 = new Point({x: 0, y: 0});
    var p2 = new Point({x: 1, y: 1});

    it('should return true when x is a list', function () {
      ok(T.is({a: p1, b: p2}));
    });

    it('should not depend on `this`', function () {
      ok([{a: p1, b: p2}].every(T.is));
    });

  });

  describe('#update()', function () {

    var Type = dict(Str, Str);
    var instance = Type({p1: 'a', p2: 'b'});

    it('should return a new instance', function () {
      var newInstance = Type.update(instance, {p2: {$set: 'c'}});
      ok(Type.is(newInstance));
      eq((<any>instance).p2, 'b');
      eq((<any>newInstance).p2, 'c');
    });

  });

});

//
// func
//

describe('func', function () {

  it('should handle a no types', function () {
    var T = func([], Str);
    eq(T.meta.domain.length, 0);
    var getGreeting = T.of(function () { return 'Hi'; });
    eq(getGreeting(), 'Hi');
  });

  it('should handle a single type', function () {
    var T = func(Num, Num);
    eq(T.meta.domain.length, 1);
    ok(T.meta.domain[0] === Num);
  });

  it('should automatically instrument a function', function () {
    var T = func(Num, Num);
    var f = function () { return 'hi'; };
    ok(T.is(T(f)));
  });

  describe('of', function () {

    it('should check the arguments', function () {

      var T = func([Num, Num], Num);
      var sum = T.of(function (a:any, b:any) {
        return a + b;
      });
      eq(sum(1, 2), 3);

      throwsWithMessage(function () {
        sum(1, 2, 3);
      }, 'Invalid argument `value` = `1,2,3` supplied to tuple type `[Num, Num]`, expected an `Arr` of length `2`');

      throwsWithMessage(function () {
        sum('a', 2);
      }, 'Invalid argument `value` = `a` supplied to irreducible type `Num`');

    });

    it('should check the return value', function () {

      var T = func([Num, Num], Num);
      var sum = T.of(function () {
        return 'a';
      });

      throwsWithMessage(function () {
        sum(1, 2);
      }, 'Invalid argument `value` = `a` supplied to irreducible type `Num`');

    });

    it('should preserve `this`', function () {
      var o = {name: 'giulio'};
      (<any>o).getTypeName = func([], Str).of(function () {
        return this.name;
      });
      eq((<any>o).getTypeName(), 'giulio');
    });

    it('should handle function types', function () {
      var A = func([Str], Str);
      var B = func([Str, A], Str);

      var f = A.of(function (s:any) {
        return s + '!';
      });
      var g = B.of(function (str:any, strAction:any) {
        return strAction(str);
      });

      eq(g('hello', f), 'hello!');
    });

    it('should be idempotent', function () {
      var f = function (s:any) { return s; };
      var g = func([Str], Str).of(f);
      var h = func([Str], Str).of(g);
      ok(h === g);
    });

  });

  describe('currying', function () {

    it('should curry functions', function () {
      var Type = func([Num, Num, Num], Num);
      var sum = Type.of(function (a:any, b:any, c:any) {
        return a + b + c;
      });
      eq(sum(1, 2, 3), 6);
      eq(sum(1, 2)(3), 6);
      eq(sum(1)(2, 3), 6);
      eq(sum(1)(2)(3), 6);

      // important: the curried function must be of the correct type
      var CurriedType = func([Num, Num], Num);
      var sum1 = sum(1);
      eq(sum1(2, 3), 6);
      eq(sum1(2)(3), 6);
      ok(CurriedType.is(sum1));
    });

    it('should throw if partial arguments are wrong', function () {

      var T = func([Num, Num], Num);
      var sum = T.of(function (a:any, b:any) {
        return a + b;
      });

      throwsWithMessage(function () {
        sum('a');
      }, 'Invalid argument `value` = `a` supplied to irreducible type `Num`');

      throwsWithMessage(function () {
        var sum1 = sum(1);
        sum1('a');
      }, 'Invalid argument `value` = `a` supplied to irreducible type `Num`');

    });

  });

});
