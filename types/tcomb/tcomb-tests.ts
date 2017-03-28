/// <reference types="node"/>

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

// tests adapted from/for tcomb's test folder

// tslint:disable:no-construct

import assert = require('assert');
import t = require("tcomb");
import { Any, Nil, Bool, Num, Str, Arr, Obj, Func, Err, Re, Dat,
  struct, enums, union, tuple, maybe, subtype, list, dict, func, getTypeName, mixin, format } from "tcomb";

//
// setup
//

const ok = (x: any) => { assert.strictEqual(true, x); };
const ko = (x: any) => { assert.strictEqual(false, x); };
const eq = assert.deepEqual;
const throwsWithMessage = (f: any, message: any) => {
  assert.throws(f, (err: any) => {
    ok(err instanceof Error);
    eq(err.message, message);
    return true;
  });
};
const doesNotThrow = assert.doesNotThrow;

const noop = () => {};
const Point = struct({
  x: Num,
  y: Num
});

describe('update', () => {
  const update = t.update;
  const Tuple = tuple([Str, Num]);
  const List = list(Num);
  const Dict = dict(Str, Num);

  it('should handle $set command', () => {
    const instance = 1;
    let actual = update(instance, {$set: 2});
    eq(actual, 2);
    const instance2 = [1, 2, 3];
    actual = update(instance2, {1: {$set: 4}});
    eq(instance2, [1, 2, 3]);
    eq(actual, [1, 4, 3]);
  });

  it('$set and null value, fix #65', () => {
    const NullStruct = struct({a: Num, b: maybe(Num)});
    const instance = new NullStruct({a: 1});
    const updated = update(instance, {b: {$set: 2}});
    eq(instance, {a: 1, b: null});
    eq(updated, {a: 1, b: 2});
  });

  it('should handle $apply command', () => {
    const $apply = (n: any) => n + 1;
    const instance = 1;
    let actual = update(instance, {$apply});
    eq(actual, 2);
    const instance2 = [1, 2, 3];
    actual = update(instance2, {1: {$apply}});
    eq(instance2, [1, 2, 3]);
    eq(actual, [1, 3, 3]);
  });

  it('should handle $unshift command', () => {
    let actual = update([1, 2, 3], {$unshift: [4]});
    eq(actual, [4, 1, 2, 3]);
    actual = update([1, 2, 3], {$unshift: [4, 5]});
    eq(actual, [4, 5, 1, 2, 3]);
    actual = update([1, 2, 3], {$unshift: [[4, 5]]});
    eq(actual, [[4, 5], 1, 2, 3]);
  });

  it('should handle $push command', () => {
    let actual = update([1, 2, 3], {$push: [4]});
    eq(actual, [1, 2, 3, 4]);
    actual = update([1, 2, 3], {$push: [4, 5]});
    eq(actual, [1, 2, 3, 4, 5]);
    actual = update([1, 2, 3], {$push: [[4, 5]]});
    eq(actual, [1, 2, 3, [4, 5]]);
  });

  it('should handle $splice command', () => {
    const instance = [1, 2, {a: [12, 17, 15]}];
    const actual = update(instance, {2: {a: {$splice: [[1, 1, 13, 14]]}}});
    eq(instance, [1, 2, {a: [12, 17, 15]}]);
    eq(actual, [1, 2, {a: [12, 13, 14, 15]}]);
  });

  it('should handle $remove command', () => {
    const instance = {a: 1, b: 2};
    const actual = update(instance, {$remove: ['a']});
    eq(instance, {a: 1, b: 2});
    eq(actual, {b: 2});
  });

  it('should handle $swap command', () => {
    const instance = [1, 2, 3, 4];
    const actual = update(instance, {$swap: {from: 1, to: 2}});
    eq(instance, [1, 2, 3, 4]);
    eq(actual, [1, 3, 2, 4]);
  });

  describe('structs', () => {
    let instance = new Point({x: 0, y: 1});

    it('should handle $set command', () => {
      const updated = update(instance, {x: {$set: 1}});
      eq(instance, {x: 0, y: 1});
      eq(updated, {x: 1, y: 1});
    });

    it('should handle $apply command', () => {
      const updated = update(instance, {x: {$apply: (x: any) => x + 2}});
      eq(instance, {x: 0, y: 1});
      eq(updated, {x: 2, y: 1});
    });

    it('should handle $merge command', () => {
      let updated = update(instance, {$merge: {x: 2, y: 2}});
      eq(instance, {x: 0, y: 1});
      eq(updated, {x: 2, y: 2});
      const Nested = struct({
        a: Num,
        b: struct({
          c: Num,
          d: Num,
          e: Num
        })
      });
      instance = new Nested({a: 1, b: {c: 2, d: 3, e: 4}});
      updated = update(instance, {b: {$merge: {c: 5, e: 6}}});
      eq(instance, {a: 1, b: {c: 2, d: 3, e: 4}});
      eq(updated, {a: 1, b: {c: 5, d: 3, e: 6}});
    });
  });

  describe('tuples', () => {
    const instance = Tuple(['a', 1]);

    it('should handle $set command', () => {
      const updated = update(instance, {0: {$set: 'b'}});
      eq(updated, ['b', 1]);
    });
  });

  describe('lists', () => {
    const instance = List([1, 2, 3, 4]);

    it('should handle $set command', () => {
      const updated = update(instance, {2: {$set: 5}});
      eq(updated, [1, 2, 5, 4]);
    });

    it('should handle $splice command', () => {
      const updated = update(instance, {$splice: [[1, 2, 5, 6]]});
      eq(updated, [1, 5, 6, 4]);
    });

    it('should handle $concat command', () => {
      let updated = update(instance, {$push: [5]});
      eq(updated, [1, 2, 3, 4, 5]);
      updated = update(instance, {$push: [5, 6]});
      eq(updated, [1, 2, 3, 4, 5, 6]);
    });

    it('should handle $prepend command', () => {
      let updated = update(instance, {$unshift: [5]});
      eq(updated, [5, 1, 2, 3, 4]);
      updated = update(instance, {$unshift: [5, 6]});
      eq(updated, [5, 6, 1, 2, 3, 4]);
    });

    it('should handle $swap command', () => {
      const updated = update(instance, {$swap: {from: 1, to: 2}});
      eq(updated, [1, 3, 2, 4]);
    });
  });

  describe('dicts', () => {
    const instance = Dict({a: 1, b: 2});

    it('should handle $set command', () => {
      const updated = update(instance, {a: {$set: 2}});
      eq(updated, {a: 2, b: 2});
    });

    it('should handle $remove command', () => {
      const updated = update(instance, {$remove: ['a']});
      eq(updated, {b: 2});
    });
  });

  describe('memory saving', () => {
    it('should reuse members that are not updated', () => {
      const Struct = struct({
        a: Num,
        b: Str,
        c: tuple([Num, Num]),
      });
      const List = list(Struct);
      const instance = List([{
        a: 1,
        b: 'one',
        c: [1000, 1000000]
      }, {
        a: 2,
        b: 'two',
        c: [2000, 2000000]
      }]);

      const updated = update(instance, {
        1: {
          a: {$set: 119}
        }
      });

      assert.strictEqual((<any> updated)[0], (<any> instance)[0]);
      assert.notStrictEqual((<any> updated)[1], (<any> instance)[1]);
      assert.strictEqual((<any> updated)[1].c, (<any> instance)[1].c);
    });
  });

  describe('all together now', () => {
    it('should handle mixed commands', () => {
      const Struct = struct({
        a: Num,
        b: Tuple,
        c: List,
        d: Dict
      });
      const instance = new Struct({
        a: 1,
        b: ['a', 1],
        c: [1, 2, 3, 4],
        d: {a: 1, b: 2}
      });
      const updated = update(instance, {
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

    it('should handle nested structures', () => {
      const Struct = struct({
        a: struct({
          b: tuple([
            Str,
            list(Num)
          ])
        })
      });
      const instance = new Struct({
        a: {
          b: ['a', [1, 2, 3]]
        }
      });
      const updated = update(instance, {
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

describe('assert', () => {
  const assert = t.assert;

  it('should nor throw when guard is true', () => {
    assert(true);
  });

  it('should throw a default message', () => {
    throwsWithMessage(() => {
      assert(1 === 2 + 1);
    }, 'assert failed');
  });

  it('should throw the specified message', () => {
    throwsWithMessage(() => {
      assert(1 === 2 + 1, 'my message');
    }, 'my message');
  });

  it('should format the specified message', () => {
    throwsWithMessage(() => {
      assert(1 === 2 + 1, '%s !== %s', 1, 2);
    }, '1 !== 2');
  });

  it('should handle custom fail behaviour', () => {
    const fail = t.fail;
    t.fail = message => {
      try {
        throw new Error(message);
      } catch (e) {
        eq(e.message, 'report error');
      }
    };
    doesNotThrow(() => {
      assert(1 === 2 + 1, 'report error');
    });
    t.fail = fail;
  });
});

//
// utils
//

describe('format(str, [...])', () => {
  it('should format strings', () => {
    eq(format('%s', 'a'), 'a');
    eq(format('%s', 2), '2');
    eq(format('%s === %s', 1, 1), '1 === 1');
  });

  it('should format JSON', () => {
    eq(format('%j', {a: 1}), '{"a":1}');
  });

  it('should handle undefined formatters', () => {
    eq(format('%o', 'a'), '%o a');
  });

  it('should handle escaping %', () => {
    eq(format('%%s'), '%s');
  });

  it('should not consume an argument with a single %', () => {
    eq(format('%s%', '100'), '100%');
  });

  it('should handle less arguments than placeholders', () => {
    eq(format('%s %s', 'a'), 'a %s');
  });

  it('should handle more arguments than placeholders', () => {
    eq(format('%s', 'a', 'b', 'c'), 'a b c');
  });

  it('should be extensible', () => {
    (<any> format).formatters.l = (x: any) => x.length;
    eq(format('%l', ['a', 'b', 'c']), '3');
  });
});

describe('mixin(x, y, [overwrite])', () => {
  it('should mix two objects', () => {
    const o1 = {a: 1};
    const o2 = {b: 2};
    const o3 = mixin(o1, o2);
    ok(o3 === o1);
    eq(o3.a, 1);
    eq(o3.b, 2);
  });

  it('should throw if a property already exists', () => {
    throwsWithMessage(() => {
      const o1 = {a: 1};
      const o2 = {a: 2, b: 2};
      mixin(o1, o2);
    }, 'Cannot overwrite property a');
  });

  it('should not throw if a property already exists but overwrite = true', () => {
    const o1 = {a: 1};
    const o2 = {a: 2, b: 2};
    const o3 = mixin(o1, o2, true);
    eq(o3.a, 2);
    eq(o3.b, 2);
  });

  it('should not mix prototype properties', () => {
    function F() {}
    F.prototype.method = noop;
    const source = new (<any> F)();
    const target = {};
    mixin(target, source);
    eq((<any> target).method, undefined);
  });
});

describe('getFunctionName(f, [defaultName])', () => {
  const getFunctionName = t.getFunctionName;

  it('should return the name of a named function', () => {
    eq(getFunctionName(function myfunc(){}), 'myfunc');
  });

  it('should return the value of `displayName` if specified', () => {
    const f = function myfunc(){};
    (<any> f).displayName = 'mydisplayname';
    eq(getFunctionName(f), 'mydisplayname');
  });

  it('should fallback on function arity if nothing is specified', () => {
    eq(getFunctionName((a: any, b: any, c: any) => a + b + c), '<function3>');
  });
});

describe('getTypeName(type)', () => {
  const UnnamedStruct = struct({});
  const NamedStruct = struct({}, 'NamedStruct');
  const UnnamedUnion = union([Str, Num]);
  const NamedUnion = union([Str, Num], 'NamedUnion');
  const UnnamedMaybe = maybe(Str);
  const NamedMaybe = maybe(Str, 'NamedMaybe');
  const UnnamedEnums = enums({a: 'A', b: 'B'});
  const NamedEnums = enums({}, 'NamedEnums');
  const UnnamedTuple = tuple([Str, Num]);
  const NamedTuple = tuple([Str, Num], 'NamedTuple');
  const UnnamedSubtype = subtype(Str, function notEmpty(x) { return x !== ''; });
  const NamedSubtype = subtype(Str, x => x !== '', 'NamedSubtype');
  const UnnamedList = list(Str);
  const NamedList = list(Str, 'NamedList');
  const UnnamedDict = dict(Str, Str);
  const NamedDict = dict(Str, Str, 'NamedDict');
  const UnnamedFunc = func(Str, Str);
  const NamedFunc = func(Str, Str, 'NamedFunc');

  it('should return the name of a named type', () => {
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

  it('should return a meaningful name of a unnamed type', () => {
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

describe('Any', () => {
  const T = Any;

  describe('constructor', () => {
    it('should behave like identity', () => {
      eq(Any('a'), 'a');
    });

    it('should throw if used with new', () => {
      throwsWithMessage(() => {
        const x = new (<any> T)();
      }, 'Operator `new` is forbidden for type `Any`');
    });
  });

  describe('#is(x)', () => {
    it('should always return true', () => {
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

describe('irreducible types constructors', () => {
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
  ].forEach(o => {
    const { T, x } = o;

    it('should accept only valid values', () => {
      eq((<any> T)(x), x);
    });

    it('should throw if used with new', () => {
      throwsWithMessage(() => {
        const x = new (<any> T) ();
      }, 'Operator `new` is forbidden for type `' + getTypeName(T) + '`');
    });
  });
});

describe('Nil', () => {
  describe('#is(x)', () => {
    it('should return true when x is null or undefined', () => {
      ok(Nil.is(null));
      ok(Nil.is(undefined));
    });

    it('should return false when x is neither null nor undefined', () => {
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

describe('Bool', () => {
  describe('#is(x)', () => {
    it('should return true when x is true or false', () => {
      ok(Bool.is(true));
      ok(Bool.is(false));
    });

    it('should return false when x is neither true nor false', () => {
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

describe('Num', () => {
  describe('#is(x)', () => {
    it('should return true when x is a number', () => {
      ok(Num.is(0));
      ok(Num.is(1));
      ko(Num.is(new Number(1)));
    });

    it('should return false when x is not a number', () => {
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

describe('Str', () => {
  describe('#is(x)', () => {
    it('should return true when x is a string', () => {
      ok(Str.is(''));
      ok(Str.is('a'));
      ko(Str.is(new String('a')));
    });

    it('should return false when x is not a string', () => {
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

describe('Arr', () => {
  describe('#is(x)', () => {
    it('should return true when x is an array', () => {
      ok(Arr.is([]));
    });

    it('should return false when x is not an array', () => {
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

describe('Obj', () => {
  describe('#is(x)', () => {
    it('should return true when x is an object', () => {
      function A() {}
      ok(Obj.is({}));
      ok(Obj.is(new (<any> A)()));
    });

    it('should return false when x is not an object', () => {
      ko(Obj.is(null));
      ko(Obj.is(undefined));
      ko(Obj.is(0));
      ko(Obj.is(''));
      ko(Obj.is([]));
      ko(Obj.is(noop));
    });
  });
});

describe('Func', () => {
  describe('#is(x)', () => {
    it('should return true when x is a function', () => {
      ok(Func.is(noop));
      ok(Func.is(new Function()));
    });

    it('should return false when x is not a function', () => {
      ko(Func.is(null));
      ko(Func.is(undefined));
      ko(Func.is(0));
      ko(Func.is(''));
      ko(Func.is([]));
      ko(Func.is(new String('1')));
      ko(Func.is(new Number(1)));
      ko(Func.is(new Boolean()));
      ko(Func.is(/a/));
      ko(Func.is(new RegExp('a')));
      ko(Func.is(new Error()));
      ko(Func.is(new Date()));
    });
  });
});

describe('Err', () => {
  describe('#is(x)', () => {
    it('should return true when x is an error', () => {
      ok(Err.is(new Error()));
    });

    it('should return false when x is not an error', () => {
      ko(Err.is(null));
      ko(Err.is(undefined));
      ko(Err.is(0));
      ko(Err.is(''));
      ko(Err.is([]));
      ko(Err.is(new String('1')));
      ko(Err.is(new Number(1)));
      ko(Err.is(new Boolean()));
      ko(Err.is(/a/));
      ko(Err.is(new RegExp('a')));
      ko(Err.is(new Date()));
    });
  });
});

describe('Re', () => {
  describe('#is(x)', () => {
    it('should return true when x is a regexp', () => {
      ok(Re.is(/a/));
      ok(Re.is(new RegExp('a')));
    });

    it('should return false when x is not a regexp', () => {
      ko(Re.is(null));
      ko(Re.is(undefined));
      ko(Re.is(0));
      ko(Re.is(''));
      ko(Re.is([]));
      ko(Re.is(new String('1')));
      ko(Re.is(new Number(1)));
      ko(Re.is(new Boolean()));
      ko(Re.is(new Error()));
      ko(Re.is(new Date()));
    });
  });
});

describe('Dat', () => {
  describe('#is(x)', () => {
    it('should return true when x is a Dat', () => {
      ok(Dat.is(new Date()));
    });

    it('should return false when x is not a Dat', () => {
      ko(Dat.is(null));
      ko(Dat.is(undefined));
      ko(Dat.is(0));
      ko(Dat.is(''));
      ko(Dat.is([]));
      ko(Dat.is(new String('1')));
      ko(Dat.is(new Number(1)));
      ko(Dat.is(new Boolean()));
      ko(Dat.is(new Error()));
      ko(Dat.is(/a/));
      ko(Dat.is(new RegExp('a')));
    });
  });
});

//
// struct
//

describe('struct', () => {
  describe('combinator', () => {
    it('should throw if used with wrong arguments', () => {
      throwsWithMessage(() => {
        (<any> struct)();
      }, 'Invalid argument `props` = `undefined` supplied to `struct` combinator');

      throwsWithMessage(() => {
        struct({a: null});
      }, 'Invalid argument `props` = `[object Object]` supplied to `struct` combinator');

      throwsWithMessage(() => {
        (<any> struct)({}, 1);
      }, 'Invalid argument `name` = `1` supplied to `struct` combinator');
    });
  });
  describe('constructor', () => {
    it('should be idempotent', () => {
      const T = Point;
      const p1 = T({x: 0, y: 0});
      const p2 = T(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });

    it('should accept only valid values', () => {
      throwsWithMessage(() => {
        Point(1);
      }, 'Invalid argument `value` = `1` supplied to struct type `{x: Num, y: Num}`');
    });
  });

  describe('#is(x)', () => {
    it('should return true when x is an instance of the struct', () => {
      const p = new Point({ x: 1, y: 2 });
      ok(Point.is(p));
    });
  });

  describe('#update()', () => {
    const Type = struct({name: Str});
    const instance = new Type({name: 'Giulio'});

    it('should return a new instance', () => {
      const newInstance = Type.update(instance, {name: {$set: 'Canti'}});
      ok(Type.is(newInstance));
      eq( (<any> instance).name, 'Giulio');
      eq((<any> newInstance).name, 'Canti');
    });
  });

  describe('#extend(props, [name])', () => {
    it('should extend an existing struct', () => {
      const Point = struct({
        x: Num,
        y: Num
      }, 'Point');
      const Point3D = Point.extend({z: Num}, 'Point3D');
      eq(getTypeName(Point3D), 'Point3D');
      eq((<any> Point3D).meta.props.x, Num);
      eq((<any> Point3D).meta.props.y, Num);
      eq((<any> Point3D).meta.props.z, Num);
    });

    it('should handle an array as argument', () => {
      const Type = struct({a: Str}, 'Type');
      const Mixin = [{b: Num, c: Bool}];
      const NewType = Type.extend(Mixin, 'NewType');
      eq(getTypeName(NewType), 'NewType');
      eq((<any> NewType).meta.props.a, Str);
      eq((<any> NewType).meta.props.b, Num);
      eq((<any> NewType).meta.props.c, Bool);
    });

    it('should handle a struct (or list of structs) as argument', () => {
      const A = struct({a: Str}, 'A');
      const B = struct({b: Str}, 'B');
      const C = struct({c: Str}, 'C');
      const MixinD = {d: Str};
      const E = A.extend([B, C, MixinD]);
      eq(E.meta.props, {
        a: Str,
        b: Str,
        c: Str,
        d: Str
      });
    });

    it('should support prototypal inheritance', () => {
      interface Rectangle { w: number; h: number; area(): number; };
      const Rectangle = struct({
        w: Num,
        h: Num
      }, 'Rectangle');
      Rectangle.prototype.area = function(this: Rectangle) {
        return this.w * this.h;
      };
      interface Cube extends Rectangle { l: number; }
      const Cube = Rectangle.extend({
        l: Num
      });
      Cube.prototype.volume = function(this: Cube) {
        return this.area() * this.l;
      };

      assert('function' === typeof Rectangle.prototype.area);
      assert('function' === typeof Cube.prototype.area);
      assert(undefined === Rectangle.prototype.volume);
      assert('function' === typeof Cube.prototype.volume);
      assert(Cube.prototype.constructor === Cube);

      const c = new Cube({w: 2, h: 2, l: 2});
      eq((<any> c).volume(), 8);
    });
  });
});

//
// enums
//

describe('enums', () => {
  describe('combinator', () => {
    it('should throw if used with wrong arguments', () => {
      throwsWithMessage(() => {
        (<any> enums)();
      }, 'Invalid argument `map` = `undefined` supplied to `enums` combinator');

      throwsWithMessage(() => {
        (<any> enums)({}, 1);
      }, 'Invalid argument `name` = `1` supplied to `enums` combinator');
    });
  });

  describe('constructor', () => {
    const T = enums({a: 0}, 'T');

    it('should throw if used with new', () => {
      throwsWithMessage(() => {
        const x = new (<any> T)('a');
      }, 'Operator `new` is forbidden for type `T`');
    });

    it('should accept only valid values', () => {
      eq((<any> T)('a'), 'a');
      throwsWithMessage(() => {
        (<any> T)('b');
      }, 'Invalid argument `value` = `b` supplied to enums type `T`, expected one of ["a"]');
    });
  });

  describe('#is(x)', () => {
    const Direction = enums({
      North: 0,
      East: 1,
      South: 2,
      West: 3,
      1: 'North-East',
      2.5: 'South-East'
    });

    it('should return true when x is an instance of the enum', () => {
      ok(Direction.is('North'));
      ok(Direction.is(1));
      ok(Direction.is('1'));
      ok(Direction.is(2.5));
    });

    it('should return false when x is not an instance of the enum', () => {
      ko(Direction.is('North-East'));
      ko(Direction.is(2));
    });
  });

  describe('#of(keys)', () => {
    it('should return an enum', () => {
      const Size = (<any> enums).of(['large', 'small', 1, 10.9]); ///!!!
      ok(Size.meta.map.large === 'large');
      ok(Size.meta.map.small === 'small');
      ok(Size.meta.map['1'] === 1);
      ok(Size.meta.map[10.9] === 10.9);
    });

    it('should handle a string', () => {
      const Size = (<any> enums).of('large small 10');
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

describe('union', () => {
  const Circle = struct({
    center: Point,
    radius: Num
  }, 'Circle');

  const Rectangle = struct({
    a: Point,
    b: Point
  });

  const Shape = union([Circle, Rectangle], 'Shape');

  Shape.dispatch = values => {
    assert(Obj.is(values));
    return values.hasOwnProperty('center') ?
      Circle :
      Rectangle;
  };

  describe('combinator', () => {
    it('should throw if used with wrong arguments', () => {
      throwsWithMessage(() => {
        (<any> union)();
      }, 'Invalid argument `types` = `undefined` supplied to `union` combinator');

      throwsWithMessage(() => {
        union([]);
      }, 'Invalid argument `types` = `` supplied to `union` combinator, provide at least two types');

      throwsWithMessage(() => {
        union([Circle]);
      }, 'Invalid argument `types` = `Circle` supplied to `union` combinator, provide at least two types');

      throwsWithMessage(() => {
        (<any> union)([Circle, Point], 1);
      }, 'Invalid argument `name` = `1` supplied to `union` combinator');
    });
  });

  describe('constructor', () => {
    it('should throw when dispatch() is not implemented', () => {
      throwsWithMessage(() => {
        const T = union([Str, Num], 'T');
        T.dispatch = null;
        T(1);
      }, 'Unimplemented `dispatch()` function for union type `T`');
    });

    it('should have a default dispatch() implementation', () => {
      const T = union([Str, Num], 'T');
      eq(T(1), 1);
    });

    it('should throw when dispatch() does not return a type', () => {
      throwsWithMessage(() => {
        const T = union([Str, Num], 'T');
        T(true);
      }, 'The `dispatch()` function of union type `T` returns no type constructor');
    });

    it('should build instances when dispatch() is implemented', () => {
      const circle = Shape({center: {x: 0, y: 0}, radius: 10});
      ok(Circle.is(circle));
    });

    it('should throw if used with new and union types are not instantiables with new', () => {
      throwsWithMessage(() => {
        const T = union([Str, Num], 'T');
        T.dispatch = () => Str;
        const x = new T('a');
      }, 'Operator `new` is forbidden for type `T`');
    });

    it('should not throw if used with new and union types are instantiables with new', () => {
      doesNotThrow(() => {
        Shape({center: {x: 0, y: 0}, radius: 10});
      });
    });

    it('should be idempotent', () => {
      const p1 = Shape({center: {x: 0, y: 0}, radius: 10});
      const p2 = Shape(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });
  });

  describe('#is(x)', () => {
    it('should return true when x is an instance of the union', () => {
      const p = new Circle({center: { x: 0, y: 0 }, radius: 10});
      ok(Shape.is(p));
    });
  });
});

//
// maybe
//

describe('maybe', () => {
  describe('combinator', () => {
    it('should throw if used with wrong arguments', () => {
      throwsWithMessage(() => {
        (<any> maybe)();
      }, 'Invalid argument `type` = `undefined` supplied to `maybe` combinator');

      throwsWithMessage(() => {
        (<any> maybe)(Point, 1);
      }, 'Invalid argument `name` = `1` supplied to `maybe` combinator');
    });

    it('should be idempotent', () => {
      const MaybeStr = maybe(Str);
      ok(maybe(MaybeStr) === MaybeStr);
    });

    it('should be noop with Any', () => {
      ok(maybe(Any) === Any);
    });

    it('should be noop with Nil', () => {
      ok((<any> maybe)(Nil) === Nil);
    });
  });

  describe('constructor', () => {
    it('should throw if used with new', () => {
      throwsWithMessage(() => {
        const T = maybe(Str, 'T');
        const x = new (<any> T)();
      }, 'Operator `new` is forbidden for type `T`');
    });

    it('should coerce values', () => {
      const T = maybe(Point);
      eq(T(null), null);
      eq(T(undefined), null);
      ok(Point.is(T({x: 0, y: 0})));
    });

    it('should be idempotent', () => {
      const T = maybe(Point);
      const p1 = T({x: 0, y: 0});
      const p2 = T(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });
  });

  describe('#is(x)', () => {
    it('should return true when x is an instance of the maybe', () => {
      const Radio = maybe(Str);
      ok(Radio.is('a'));
      ok(Radio.is(null));
      ok(Radio.is(undefined));
    });
  });
});

//
// tuple
//

describe('tuple', () => {
  const Area = tuple([Num, Num], 'Area');

  describe('combinator', () => {
    it('should throw if used with wrong arguments', () => {
      throwsWithMessage(() => {
        (<any> tuple)();
      }, 'Invalid argument `types` = `undefined` supplied to `tuple` combinator');

      throwsWithMessage(() => {
        (<any> tuple)([Point, Point], 1);
      }, 'Invalid argument `name` = `1` supplied to `tuple` combinator');
    });
  });

  describe('constructor', () => {
    const S = struct({}, 'S');
    const T = tuple([S, S], 'T');

    it('should coerce values', () => {
      const t = T([{}, {}]);
      ok(S.is((<any> t)[0]));
      ok(S.is((<any> t)[1]));
    });

    it('should accept only valid values', () => {
      throwsWithMessage(() => {
        T(1);
      }, 'Invalid argument `value` = `1` supplied to tuple type `T`, expected an `Arr` of length `2`');

      throwsWithMessage(() => {
        T([1, 1]);
      }, 'Invalid argument `value` = `1` supplied to struct type `S`');
    });

    it('should be idempotent', () => {
      const T = tuple([Str, Num]);
      const p1 = T(['a', 1]);
      const p2 = T(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });
  });

  describe('#is(x)', () => {
    it('should return true when x is an instance of the tuple', () => {
      ok(Area.is([1, 2]));
    });

    it('should return false when x is not an instance of the tuple', () => {
      ko(Area.is([1]));
      ko(Area.is([1, 2, 3]));
      ko(Area.is([1, 'a']));
    });

    it('should not depend on `this`', () => {
      ok([[1, 2]].every(Area.is));
    });
  });

  describe('#update()', () => {
    const Type = tuple([Str, Num]);
    const instance = Type(['a', 1]);

    it('should return a new instance', () => {
      const newInstance = Type.update(instance, {0: {$set: 'b'}});
      assert(Type.is(newInstance));
      assert((<any> instance)[0] === 'a');
      assert((<any> newInstance)[0] === 'b');
    });
  });
});

//
// list
//

describe('list', () => {
  describe('combinator', () => {
    it('should throw if used with wrong arguments', () => {
      throwsWithMessage(() => {
        (<any> list)();
      }, 'Invalid argument `type` = `undefined` supplied to `list` combinator');

      throwsWithMessage(() => {
        (<any> list)(Point, 1);
      }, 'Invalid argument `name` = `1` supplied to `list` combinator');
    });
  });

  describe('constructor', () => {
    const S = struct({}, 'S');
    const T = list(S, 'T');

    it('should coerce values', () => {
      const t = T([{}]);
      ok(S.is((<any> t)[0]));
    });

    it('should accept only valid values', () => {
      throwsWithMessage(() => {
        T(1);
      }, 'Invalid argument `value` = `1` supplied to list type `T`');

      throwsWithMessage(() => {
        T([1]);
      }, 'Invalid argument `value` = `1` supplied to struct type `S`');
    });

    it('should be idempotent', () => {
      const T = list(Num);
      const p1 = T([1, 2]);
      const p2 = T(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });
  });

  describe('#is(x)', () => {
    const Path = list(Point);
    const p1 = new Point({x: 0, y: 0});
    const p2 = new Point({x: 1, y: 1});

    it('should return true when x is a list', () => {
      ok(Path.is([p1, p2]));
    });

    it('should not depend on `this`', () => {
      ok([[p1, p2]].every(Path.is));
    });
  });

  describe('#update()', () => {
    const Type = list(Str);
    const instance = Type(['a', 'b']);

    it('should return a new instance', () => {
      const newInstance = Type.update(instance, {$push: ['c']});
      assert(Type.is(newInstance));
      assert((<any> instance).length === 2);
      assert((<any> newInstance).length === 3);
    });
  });
});

//
// subtype
//

describe('subtype', () => {
  const True = () => true;

  describe('combinator', () => {
    it('should throw if used with wrong arguments', () => {
      throwsWithMessage(() => {
        (<any> subtype)();
      }, 'Invalid argument `type` = `undefined` supplied to `subtype` combinator');

      throwsWithMessage(() => {
        subtype(Point, null);
      }, 'Invalid argument `predicate` = `null` supplied to `subtype` combinator');

      throwsWithMessage(() => {
        (<any> subtype)(Point, True, 1);
      }, 'Invalid argument `name` = `1` supplied to `subtype` combinator');
    });
  });

  describe('constructor', () => {
    it('should throw if used with new and a type that is not instantiable with new', () => {
      throwsWithMessage(() => {
        const T = subtype(Str, () => true, 'T');
        const x = new(<any> T)();
      }, 'Operator `new` is forbidden for type `T`');
    });

    it('should coerce values', () => {
      const T = subtype(Point, () => true);
      const p = T({x: 0, y: 0});
      ok(Point.is(p));
    });

    it('should accept only valid values', () => {
      const predicate = (p: any) => p.x > 0;
      const T = subtype(Point, predicate, 'T');
      throwsWithMessage(() => {
        T({x: 0, y: 0});
      }, 'Invalid argument `value` = `[object Object]` supplied to subtype type `T`');
    });
  });

  describe('#is(x)', () => {
    const Positive = subtype(Num, n => n >= 0);

    it('should return true when x is a subtype', () => {
      ok(Positive.is(1));
    });

    it('should return false when x is not a subtype', () => {
      ko(Positive.is(-1));
    });
  });

  describe('#update()', () => {
    const Type = subtype(Str, s => s.length > 2);
    const instance = Type('abc');

    it('should return a new instance', () => {
      const newInstance = Type.update(instance, {$set: 'bca'});
      assert(Type.is(newInstance));
      eq(newInstance, 'bca');
    });
  });
});

//
// dict
//

describe('dict', () => {
  describe('combinator', () => {
    it('should throw if used with wrong arguments', () => {
      throwsWithMessage(() => {
        (<any> dict)();
      }, 'Invalid argument `domain` = `undefined` supplied to `dict` combinator');

      throwsWithMessage(() => {
        (<any> dict)(Str);
      }, 'Invalid argument `codomain` = `undefined` supplied to `dict` combinator');

      throwsWithMessage(() => {
        (<any> dict)(Str, Point, 1);
      }, 'Invalid argument `name` = `1` supplied to `dict` combinator');
    });
  });

  describe('constructor', () => {
    const S = struct({}, 'S');
    const Domain = subtype(Str, x => x !== 'forbidden', 'Domain');
    const T = dict(Domain, S, 'T');

    it('should coerce values', () => {
      const t = T({a: {}});
      ok(S.is((<any> t).a));
    });

    it('should accept only valid values', () => {
      throwsWithMessage(() => {
        T(1);
      }, 'Invalid argument `value` = `1` supplied to dict type `T`');

      throwsWithMessage(() => {
        T({a: 1});
      }, 'Invalid argument `value` = `1` supplied to struct type `S`');

      throwsWithMessage(() => {
        T({forbidden: {}});
      }, 'Invalid argument `value` = `forbidden` supplied to subtype type `Domain`');
    });

    it('should be idempotent', () => {
      const T = dict(Str, Str);
      const p1 = T({a: 'a', b: 'b'});
      const p2 = T(p1);
      eq(Object.isFrozen(p1), true);
      eq(Object.isFrozen(p2), true);
      eq(p2 === p1, true);
    });
  });

  describe('#is(x)', () => {
    const T = dict(Str, Point);
    const p1 = new Point({x: 0, y: 0});
    const p2 = new Point({x: 1, y: 1});

    it('should return true when x is a list', () => {
      ok(T.is({a: p1, b: p2}));
    });

    it('should not depend on `this`', () => {
      ok([{a: p1, b: p2}].every(T.is));
    });
  });

  describe('#update()', () => {
    const Type = dict(Str, Str);
    const instance = Type({p1: 'a', p2: 'b'});

    it('should return a new instance', () => {
      const newInstance = Type.update(instance, {p2: {$set: 'c'}});
      ok(Type.is(newInstance));
      eq((<any> instance).p2, 'b');
      eq((<any> newInstance).p2, 'c');
    });
  });
});

//
// func
//

describe('func', () => {
  it('should handle a no types', () => {
    const T = func([], Str);
    eq(T.meta.domain.length, 0);
    const getGreeting = T.of(() => 'Hi');
    eq(getGreeting(), 'Hi');
  });

  it('should handle a single type', () => {
    const T = func(Num, Num);
    eq(T.meta.domain.length, 1);
    ok(T.meta.domain[0] === Num);
  });

  it('should automatically instrument a function', () => {
    const T = func(Num, Num);
    const f = () => 'hi';
    ok(T.is(T(f)));
  });

  describe('of', () => {
    it('should check the arguments', () => {
      const T = func([Num, Num], Num);
      const sum = T.of((a: any, b: any) => a + b);
      eq(sum(1, 2), 3);

      throwsWithMessage(() => {
        sum(1, 2, 3);
      }, 'Invalid argument `value` = `1,2,3` supplied to tuple type `[Num, Num]`, expected an `Arr` of length `2`');

      throwsWithMessage(() => {
        sum('a', 2);
      }, 'Invalid argument `value` = `a` supplied to irreducible type `Num`');
    });

    it('should check the return value', () => {
      const T = func([Num, Num], Num);
      const sum = T.of(() => {
        return 'a';
      });

      throwsWithMessage(() => {
        sum(1, 2);
      }, 'Invalid argument `value` = `a` supplied to irreducible type `Num`');
    });

    it('should preserve `this`', () => {
      const o = {name: 'giulio'};
      (<any> o).getTypeName = func([], Str).of(function(this: any) {
        return this.name;
      });
      eq((<any> o).getTypeName(), 'giulio');
    });

    it('should handle function types', () => {
      const A = func([Str], Str);
      const B = func([Str, A], Str);

      const f = A.of((s: any) => s + '!');
      const g = B.of((str: any, strAction: any) => strAction(str));

      eq(g('hello', f), 'hello!');
    });

    it('should be idempotent', () => {
      const f = (s: any) => s;
      const g = func([Str], Str).of(f);
      const h = func([Str], Str).of(g);
      ok(h === g);
    });
  });

  describe('currying', () => {
    it('should curry functions', () => {
      const Type = func([Num, Num, Num], Num);
      const sum = Type.of((a: any, b: any, c: any) => a + b + c);
      eq(sum(1, 2, 3), 6);
      eq(sum(1, 2)(3), 6);
      eq(sum(1)(2, 3), 6);
      eq(sum(1)(2)(3), 6);

      // important: the curried function must be of the correct type
      const CurriedType = func([Num, Num], Num);
      const sum1 = sum(1);
      eq(sum1(2, 3), 6);
      eq(sum1(2)(3), 6);
      ok(CurriedType.is(sum1));
    });

    it('should throw if partial arguments are wrong', () => {
      const T = func([Num, Num], Num);
      const sum = T.of((a: any, b: any) => a + b);

      throwsWithMessage(() => {
        sum('a');
      }, 'Invalid argument `value` = `a` supplied to irreducible type `Num`');

      throwsWithMessage(() => {
        const sum1 = sum(1);
        sum1('a');
      }, 'Invalid argument `value` = `a` supplied to irreducible type `Num`');
    });
  });
});
