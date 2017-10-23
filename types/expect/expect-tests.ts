/// <reference types="mocha"" />

import { Expectation, Extension, Spy, createSpy, isSpy, assert, spyOn, extend, restoreSpies } from 'expect';
import * as expect from 'expect';

describe('chaining assertions', () => {
  it('should allow chaining for array-like applications', () => {
    expect([ 1, 2, 'foo', 3 ])
      .toExist()
      .toBeAn(Array)
      .toInclude('foo')
      .toExclude('bar');
  });

  it('should allow chaining for number checking', () => {
    expect(3.14)
      .toExist()
      .toBeLessThan(4.2)
      .toBeLessThanOrEqualTo(3.14)
      .toBeGreaterThan(3.0)
      .toBeGreaterThanOrEqualTo(3.14);
  });
});

describe('createSpy', () => {
  describe('when given a function', () => {
    it('returns a spy function', () => {
      const spy = createSpy(() => { return; });
      expect(spy).toBeA(Function);
    });
  });
});

describe('A spy', () => {
  let targetContext: any;
  let targetArguments: any;
  const target = {
    method() {
      targetContext = this;
      targetArguments = Array.prototype.slice.call(arguments, 0);
    }
  };

  let spy: Spy<{}>;

  beforeEach(() => {
    spy = createSpy(target.method);
    targetContext = targetArguments = null;
  });

  it('is a spy', () => {
    expect(isSpy(spy)).toBe(true);
  });

  it('has the same length as the function passed in', () => {
    expect(spy.length).toBe(0);
    expect(createSpy(a => a).length).toBe(1);
    expect(createSpy((a, b, c) => a * b * c).length).toBe(3);
  });

  it('has a destroy method', () => {
    expect(spy.destroy).toBeA(Function);
  });

  it('has a restore method', () => {
    expect(spy.restore).toBeA(Function);
  });

  it('has a reset method', () => {
    expect(spy.reset).toBeA(Function);
  });

  it('reset clears out all previous calls', () => {
    spy();
    expect(spy.calls.length).toEqual(1);
    spy.reset();
    expect(spy.calls.length).toEqual(0);
  });

  it('knows how many times it has been called', () => {
    spy();
    spy();
    expect(spy.calls.length).toEqual(2);
  });

  it('knows the arguments it was called with', () => {
    spy(1, 2, 3);
    expect(spy).toHaveBeenCalledWith(1, 2, 3);
  });

  describe('that calls some other function', () => {
    let otherContext: any;
    let otherArguments: any;
    function otherFn() {
      otherContext = this;
      otherArguments = Array.prototype.slice.call(arguments, 0);
    }

    beforeEach(() => {
      spy.andCall(otherFn);
      otherContext = otherArguments = null;
    });

    it('calls that function', () => {
      spy();
      expect(otherContext).toNotBe(null);
    });

    it('uses the correct context', () => {
      const context = {};
      spy.call(context);
      expect(otherContext).toBe(context);
    });

    it('passes the arguments through', () => {
      spy(1, 2, 3);
      expect(otherArguments).toEqual([ 1, 2, 3 ]);
    });
  });

  describe('that calls through', () => {
    beforeEach(() => {
      spy.andCallThrough();
    });

    it('calls the original function', () => {
      spy();
      expect(targetContext).toNotBe(null);
    });

    it('uses the correct context', () => {
      const context = {};
      spy.call(context);
      expect(targetContext).toBe(context);
    });

    it('passes the arguments through', () => {
      spy(1, 2, 3);
      expect(targetArguments).toEqual([ 1, 2, 3 ]);
    });
  });

  describe('with a thrown value', () => {
    beforeEach(() => {
      spy.andThrow('hello');
    });

    it('throws the correct value', () => {
      expect(spy).toThrow('hello');
    });
  });

  describe('with a return value', () => {
    beforeEach(() => {
      spy.andReturn('hello');
    });

    it('returns the correct value', () => {
      expect(spy()).toEqual('hello');
    });
  });
});

describe('expect.extend', () => {
  const ColorAssertions: Extension = {
    toBeAColor() {
      assert(
        this.actual.match(/^#[a-fA-F0-9]{6}$/),
        'expected %s to be an HTML color',
        this.actual
      );
    }
  };

  let assertSpy: Spy<{}>;

  beforeEach(() => {
    extend(ColorAssertions);
    assertSpy = spyOn(expect, 'assert');
  });

  afterEach(() => {
    assertSpy.restore();
  });

  it('works', () => {
    interface ColorExpectation<T> extends Expectation<T> {
      toBeAColor(): Expectation<T>;
    }
    (<ColorExpectation<string>> expect('#ff00ff')).toBeAColor();
    expect(assertSpy).toHaveBeenCalled();
  });
});

describe('restoreSpies', () => {
  describe('with one spy', () => {
    const original = () => { return; };
    const target = { method: original };

    beforeEach(() => {
      spyOn(target, 'method');
    });

    it('works with spyOn()', () => {
      expect(target.method).toNotEqual(original);
      restoreSpies();
      expect(target.method).toEqual(original);
    });

    it('is idempotent', () => {
      expect(target.method).toNotEqual(original);
      restoreSpies();
      restoreSpies();
      expect(target.method).toEqual(original);
    });

    it('can work even on createSpy()', () => {
      createSpy(original);
      restoreSpies();
    });
  });

  describe('with multiple spies', () => {
    const originals = [ () => { return; }, () => { return; } ];
    const targets = [
      { method: originals[0] },
      { method: originals[1] }
    ];

    it('still works', () => {
      spyOn(targets[0], 'method');
      spyOn(targets[1], 'method');

      expect(targets[0].method).toNotEqual(originals[0]);
      expect(targets[1].method).toNotEqual(originals[1]);

      restoreSpies();

      expect(targets[0].method).toEqual(originals[0]);
      expect(targets[1].method).toEqual(originals[1]);
    });
  });
});

describe('A function that was spied on', () => {
  const video = {
    play(...args: any[]) { return; }
  };

  let spy: Spy<{}>;

  beforeEach(() => {
    spy = spyOn(video, 'play');
    video.play('some', 'args');
  });

  it('tracks the number of calls', () => {
    expect(spy.calls.length).toEqual(1);
  });

  it('tracks the context that was used', () => {
    expect(spy.calls[0].context).toBe(video);
  });

  it('tracks the arguments that were used', () => {
    expect(spy.calls[0].arguments).toEqual([ 'some', 'args' ]);
  });

  it('was called', () => {
    expect(spy).toHaveBeenCalled();
  });

  it('was called with the correct args', () => {
    expect(spy).toHaveBeenCalledWith('some', 'args');
  });

  it('can be restored', () => {
    expect(video.play).toEqual(spy);
    spy.restore();
    expect(video.play).toNotEqual(spy);
  });
});

describe('A function that was spied on but not called', () => {
  const video = {
    play() { return; }
  };

  let spy: Spy<{}>;

  beforeEach(() => {
    spy = spyOn(video, 'play');
  });

  it('number of calls to be zero', () => {
    expect(spy.calls.length).toEqual(0);
  });

  it('was not called', () => {
    expect(spy).toNotHaveBeenCalled();
  });
});

describe('toBeA', () => {
  it('requires the value to be a function or string', () => {
    expect(() => {
      expect('actual').toBeA(4);
    }).toThrow(/must be a function or a string/);
  });

  it('does not throw when the actual value is an instanceof the constructor', () => {
    expect(() => {
      expect(new Expectation('foo')).toBeA(Expectation);
    }).toNotThrow();
  });

  it('throws when the actual value is not an instanceof the constructor', () => {
    expect(() => {
      expect('actual').toBeA(Expectation);
    }).toThrow(/to be/);
  });

  it('does not throw when the expected value is the typeof the actual value', () => {
    expect(() => {
      expect(4).toBeA('number');
      expect(NaN).toBeA('number'); // hahaha
    }).toNotThrow();
  });

  it('throws when the expected value is not the typeof the actual value', () => {
    expect(() => {
      expect('actual').toBeA('number');
    }).toThrow(/to be/);
  });

  it('does not throw when the actual value is an array', () => {
    expect(() => {
      expect([]).toBeAn('array');
    }).toNotThrow();
  });

  it('throws when the actual value is not an array', () => {
    expect(() => {
      expect('actual').toBeAn('array');
    }).toThrow(/to be/);
  });
});

describe('toBeGreaterThan', () => {
  it('does not throw when the actual value is greater than the expected value', () => {
    expect(() => {
      expect(3).toBeGreaterThan(2);
    }).toNotThrow();
  });

  it('throws when the actual value is not greater than the expected value', () => {
    expect(() => {
      expect(2).toBeGreaterThan(3);
    }).toThrow(/to be greater than/);
  });
});

describe('toBeGreaterThanOrEqualTo', () => {
  it('does not throw when the actual value is greater than the expected value', () => {
    expect(() => {
      expect(3).toBeGreaterThanOrEqualTo(2);
    }).toNotThrow();
  });

  it('does not throw when the actual value is equal to the expected value', () => {
    expect(() => {
      expect(3).toBeGreaterThanOrEqualTo(3);
    }).toNotThrow();
  });

  it('throws when the actual value is not greater than or equal to the expected value', () => {
    expect(() => {
      expect(2).toBeGreaterThanOrEqualTo(3);
    }).toThrow(/to be greater than or equal to/);
  });
});

describe('toBeLessThan', () => {
  it('does not throw when the actual value is less than the expected value', () => {
    expect(() => {
      expect(2).toBeLessThan(3);
    }).toNotThrow();
  });

  it('throws when the actual value is not less than the expected value', () => {
    expect(() => {
      expect(3).toBeLessThan(2);
    }).toThrow(/to be less than/);
  });
});

describe('toBeLessThanOrEqualTo', () => {
  it('does not throw when the actual value is less than the expected value', () => {
    expect(() => {
      expect(2).toBeLessThanOrEqualTo(3);
    }).toNotThrow();
  });

  it('does not throw when the actual value is equal to the expected value', () => {
    expect(() => {
      expect(2).toBeLessThanOrEqualTo(2);
    }).toNotThrow();
  });

  it('throws when the actual value is not less than the expected value', () => {
    expect(() => {
      expect(3).toBeLessThanOrEqualTo(2);
    }).toThrow(/to be less than or equal to/);
  });
});

describe('toBeTruthy', () => {
  it('does not throw on truthy actual values', () => {
    expect(() => {
      expect(1).toBeTruthy();
      expect({ hello: 'world' }).toBeTruthy();
      expect([ 1, 2, 3 ]).toBeTruthy();
    }).toNotThrow();
  });

  it('throws on falsy actual values', () => {
    expect(() => {
      expect(0).toBeTruthy();
    }).toThrow();

    expect(() => {
      expect(null).toBeTruthy();
    }).toThrow();

    expect(() => {
      expect(undefined).toBeTruthy();
    }).toThrow();
  });
});

describe('toBeFalsy', () => {
  it('throws on truthy values', () => {
    expect(() => {
      expect(42).toBeFalsy();
    }).toThrow();

    expect(() => {
      expect({ foo: 'bar' }).toBeFalsy();
    }).toThrow();

    expect(() => {
      expect([]).toBeFalsy();
    }).toThrow();
  });

  it('does not throw with falsy actual values', () => {
    expect(() => {
      expect(0).toBeFalsy();
      expect(null).toBeFalsy();
      expect(undefined).toBeFalsy();
    }).toNotThrow();
  });
});

describe('toEqual', () => {
  it('works', () => {
    expect(() => {
      expect('actual').toEqual('expected');
    }).toThrow(/Expected 'actual' to equal 'expected'/);
  });

  it('works with objects that have the same keys in different order', () => {
    const a = { a: 'a', b: 'b', c: 'c' };
    const b = { b: 'b', c: 'c', a: 'a' };
    expect(a).toEqual(b);
  });

  it('shows diff', () => {
    try {
      expect('actual').toEqual('expected');
    } catch (err) {
      expect(err.actual).toEqual('actual');
      expect(err.expected).toEqual('expected');
      expect(err.showDiff).toEqual(true);
    }
  });
});

describe('toExclude', () => {
  it('requires the actual value to be an array or string', () => {
    expect(() => {
      expect(1).toExclude(2);
    }).toThrow(/must be an array or a string/);
  });

  it('does not throw when an array does not contain the expected value', () => {
    expect(() => {
      expect([ 1, 2, 3 ]).toExclude(4);
    }).toNotThrow();
  });

  it('throws when an array contains the expected value', () => {
    expect(() => {
      expect([ 1, 2, 3 ]).toExclude(2);
    }).toThrow(/to exclude/);
  });

  it('throws when an object contains an expected object', () => {
    expect(() => {
      expect({ a: 1 }).toExclude({ a: 1 });
    }).toThrow(/to exclude/);
  });

  it('does not throw when an array contains an unexpected object', () => {
    expect(() => {
      expect({ a: 1 }).toExclude({ b: 2 });
    }).toNotThrow();
  });

  it('does not throw when an object contains an expected object with an unexpected value', () => {
    expect(() => {
      expect({ a: 1 }).toExclude({ a: 2 });
    }).toNotThrow();
  });

  it('does not throw when an array does not contain the expected value', () => {
    expect(() => {
      expect('hello world').toExclude('goodbye');
    }).toNotThrow();
  });

  it('throws when a string contains the expected value', () => {
    expect(() => {
      expect('hello world').toExclude('hello');
    }).toThrow(/to exclude/);
  });
});

describe('toExcludeKey', () => {
  it('requires the actual value to have keys', () => {
    expect(() => {
      expect(1).toExcludeKey('hello');
    }).toThrow(/must be an object/);
  });

  it('throws when there is a key that exists', () => {
    expect(() => {
      expect({ a: 1 }).toExcludeKey('a');
    }).toThrow(/exclude key/);
  });

  it('does not throw when there is a key that does not exist', () => {
    expect(() => {
      expect({ a: 1 }).toExcludeKey('b');
    }).toNotThrow();
  });
});

describe('toExcludeKeys', () => {
  it('throws when there is a key that exists', () => {
    expect(() => {
      expect({ a: 1 }).toExcludeKeys([ 'a' ]);
    }).toThrow(/exclude key/);
  });

  it('does not throw when there is a key that does not exist', () => {
    expect(() => {
      expect({ a: 1 }).toExcludeKeys([ 'b' ]);
    }).toNotThrow();
  });

  it('throws when all keys exist', () => {
    expect(() => {
      expect({ a: 1, b: 2, c: 3 }).toExcludeKeys([ 'a', 'b', 'c' ]);
    }).toThrow(/exclude key/);
  });

  it('does not throw when even one key does not exist', () => {
    expect(() => {
      expect({ a: 1, c: 3 }).toExcludeKeys([ 'a', 'b', 'c' ]);
    }).toNotThrow();
  });

  it('works with arrays', () => {
    expect(() => {
      expect([ 0, 1, 2 ]).toExcludeKeys([ '0', 1, 2 ]);
    }).toThrow(/exclude key/);

    expect(() => {
      expect([ 0, 1, 2 ]).toExcludeKeys([ 3 ]);
    }).toNotThrow();
  });
});

describe('toExist', () => {
  it('does not throw on truthy actual values', () => {
    expect(() => {
      expect(1).toExist();
      expect({ hello: 'world' }).toExist();
      expect([ 1, 2, 3 ]).toExist();
    }).toNotThrow();
  });

  it('throws on falsy actual values', () => {
    expect(() => {
      expect(0).toExist();
    }).toThrow();

    expect(() => {
      expect(null).toExist();
    }).toThrow();

    expect(() => {
      expect(undefined).toExist();
    }).toThrow();
  });
});

describe('toNotExist', () => {
  it('throws on truthy values', () => {
    expect(() => {
      expect(42).toNotExist();
    }).toThrow();

    expect(() => {
      expect({ foo: 'bar' }).toNotExist();
    }).toThrow();

    expect(() => {
      expect([]).toNotExist();
    }).toThrow();
  });

  it('does not throw with falsy actual values', () => {
    expect(() => {
      expect(0).toNotExist();
      expect(null).toNotExist();
      expect(undefined).toNotExist();
    }).toNotThrow();
  });
});

describe('toInclude', () => {
  it('requires the actual value to be an array, object, or a string', () => {
    expect(() => {
      expect(1).toInclude(2);
    }).toThrow(/must be an array, object, or a string/);
  });

  it('does not throw when an array contains an expected integer', () => {
    expect(() => {
      expect([ 1, 2, 3 ]).toInclude(2);
      expect([ { a: 1 }, { c: 2 } ]).toInclude({ c: 2 });
    }).toNotThrow();
  });

  it('does not throw when an array contains an expected object', () => {
    expect(() => {
      expect([ { a: 1 }, { c: 2 } ]).toInclude({ c: 2 });
    }).toNotThrow();
  });

  it('does not throw when an object contains an expected object', () => {
    expect(() => {
      expect({ a: 1, b: 2, c: 3 }).toInclude({ b: 2 });
    }).toNotThrow();

    expect(() => {
      expect({ a: 1, b: 2 }).toInclude({});
    }).toNotThrow();
  });

  it('throws when an object does not contain an expected object', () => {
    expect(() => {
      expect({ a: 1, b: 2, c: 3 }).toInclude({ d: 4 });
    }).toThrow(/to include/);

    expect(() => {
      expect({ a: 1, b: 2, c: 3 }).toInclude({ b: 4 });
    }).toThrow(/to include/);
  });

  it('does not throw when an object contains an expected object in a deep key', () => {
    expect(() => {
      expect(
        { a: 1, b: 2, c: { d: 4, e: { f: 5, g: 6, h: 7 } } }
      ).toInclude(
        { b: 2, c: { e: { f: 5, g: 6, h: 7 } } }
      );
    }).toNotThrow();
  });

  it('throws when an object does not contain an expected object in a deep key', () => {
    expect(() => {
      expect(
        { a: 1, b: 2, c: { d: 4, e: { f: 5, g: 6, h: 7 } } }
      ).toInclude(
        { b: 2, c: { e: { f: 5, g: 999, h: 7 } } }
      );
    }).toThrow(/to include/);
  });

  it('compares partial object only when both expected and actual properties are object', () => {
    expect(() => {
      expect({ a: { b: 2 } }).toInclude({ a: {} });
    }).toNotThrow();

    expect(() => {
      expect({ a: 1 }).toInclude({ a: {} });
    }).toThrow(/to include/);

    expect(() => {
      expect({ a: [] }).toInclude({ a: {} });
    }).toThrow(/to include/);

    expect(() => {
      expect({ a: '1' }).toInclude({ a: {} });
    }).toThrow(/to include/);

    expect(() => {
      expect({ a: () => { return; } }).toInclude({ a: {} });
    }).toThrow(/to include/);
  });

  if (typeof Object.create === 'function') {
    it('ignores nonenumerable properties of an expected object', () => {
      expect(() => {
        expect({}).toInclude(Object.create({}, { a: { value: 1 } }));
      }).toNotThrow();
    });
  }

  if (typeof Symbol === 'function') {
    const symbol = Symbol();

    it('does not throw when an object contains an expected object with a symbol key', () => {
      expect(() => {
        expect({ [symbol]: 1, b: 2 }).toInclude({ [symbol]: 1 });
      }).toNotThrow();
    });

    it('throws when an object contain an expected object without a symbol key', () => {
      expect(() => {
        expect({ a: 1, b: 2 }).toInclude({ [symbol]: 1 });
      }).toThrow(/to include/);
    });
  }

  it('throws when an array does not contain an expected integer', () => {
    expect(() => {
      expect([ 1, 2, 3 ]).toInclude(4);
    }).toThrow(/to include/);
  });

  it('throws when an array does not contain an expected object', () => {
    expect(() => {
      expect([ { a: 1 }, { c: 2 } ]).toInclude({ a: 2 });
    }).toThrow(/to include/);
  });

  it('does not throw when a string contains the expected value', () => {
    expect(() => {
      expect('hello world').toInclude('world');
    }).toNotThrow();
  });

  it('throws when a string does not contain the expected value', () => {
    expect(() => {
      expect('hello world').toInclude('goodbye');
    }).toThrow(/to include/);
  });
});

describe('toIncludeKey', () => {
  it('requires the actual value to have keys', () => {
    expect(() => {
      expect(1).toIncludeKey('hello');
    }).toThrow(/must be an object/);
  });

  it('does not throw when there is a key that exists', () => {
    expect(() => {
      expect({ a: 1 }).toIncludeKey('a');
    }).toNotThrow();
  });

  it('throws when there is a key that does not exist', () => {
    expect(() => {
      expect({ a: 1 }).toIncludeKey('b');
    }).toThrow(/include key/);
  });
});

describe('toIncludeKeys', () => {
  it('requires the actual value to have keys', () => {
    expect(() => {
      expect(1).toIncludeKeys([ 'hello' ]);
    }).toThrow(/must be an object/);
  });

  it('does not throw when there is a key that exists', () => {
    expect(() => {
      expect({ a: 1 }).toIncludeKeys([ 'a' ]);
    }).toNotThrow();
  });

  it('throws when there is a key that does not exist', () => {
    expect(() => {
      expect({ a: 1 }).toIncludeKeys([ 'b' ]);
    }).toThrow(/include key/);
  });

  it('does not throw when all keys exist', () => {
    expect(() => {
      expect({ a: 1, b: 2, c: 3 }).toIncludeKeys([ 'a', 'b', 'c' ]);
    }).toNotThrow();
  });

  it('throws when even one key does not exist', () => {
    expect(() => {
      expect({ a: 1, c: 3 }).toIncludeKeys([ 'a', 'b', 'c' ]);
    }).toThrow(/include key/);
  });

  it('works with arrays', () => {
    expect(() => {
      expect([ 0, 1, 2 ]).toIncludeKeys([ '0', 1, 2 ]);
    }).toNotThrow();

    expect(() => {
      expect([ 0, 1, 2 ]).toIncludeKeys([ 3 ]);
    }).toThrow(/include key/);
  });
});

describe('expect(string).toMatch', () => {
  it('does not throw when the actual value matches the pattern', () => {
    expect(() => {
      expect('actual').toMatch(/^actual$/);
    }).toNotThrow();
  });

  it('throws when the actual value does not match the pattern', () => {
    expect(() => {
      expect('actual').toMatch(/nope/);
    }).toThrow(/to match/);
  });
});

describe('expect(object).toMatch', () => {
  it('does not throw when the actual value matches the pattern', () => {
    expect(() => {
      expect({
        statusCode: 200,
        headers: {
          server: 'express web server'
        }
      }).toMatch({
        statusCode: 200,
        headers: {
          server: /express/
        }
      });
    }).toNotThrow();
  });

  it('throws when the actual value does not match the pattern', () => {
    expect(() => {
      expect({
        statusCode: 200,
        headers: {
          server: 'nginx web server'
        }
      }).toMatch({
        statusCode: 200,
        headers: {
          server: /express/
        }
      });
    }).toThrow(/to match/);
  });
});

describe('expect(array).toMatch', () => {
  it('does not throw when the array contains an object that matches the pattern', () => {
    const array = [
      { one: 'one' },
      { two: 'two' },
      { three: 'three' }
    ];

    expect(array).toMatch([ { one: /one/ } ]);
  });
});

describe('expect(string).toNotMatch', () => {
  it('does not throw when the actual value does not match the pattern', () => {
    expect(() => {
      expect('actual').toNotMatch(/nope/);
    }).toNotThrow();
  });

  it('throws when the actual value matches the pattern', () => {
    expect(() => {
      expect('actual').toNotMatch(/^actual$/);
    }).toThrow(/to not match/);
  });
});

describe('expect(object).toNotMatch', () => {
  it('does not throw when the actual value does not match the pattern', () => {
    expect(() => {
      expect({
        statusCode: 200,
        headers: {
          server: 'nginx web server'
        }
      }).toNotMatch({
        statusCode: 200,
        headers: {
          server: /express/
        }
      });
    }).toNotThrow();
  });

  it('throws when the actual value matches the pattern', () => {
    expect(() => {
      expect({
        statusCode: 200,
        headers: {
          server: 'express web server'
        }
      }).toNotMatch({
        statusCode: 200,
        headers: {
          server: /express/
        }
      });
    }).toThrow(/to not match/);
  });
});

describe('expect(array).toNotMatch', () => {
  it('does not throw when the array does not contain an object that matches the pattern', () => {
    const array = [
      { one: 'one' },
      { two: 'two' },
      { three: 'three' }
    ];

    expect(array).toNotMatch([ { one: /two/ } ]);
  });
});

describe('toNotEqual', () => {
  it('works', () => {
    expect('actual').toNotEqual('expected');
  });

  it('works with objects that do not have the same keys', () => {
    const a = { a: 'a', b: 'b', c: 'c' };
    const b = { a: 'a', b: 'b', d: 'c' };
    expect(a).toNotEqual(b);
  });

  it('works with objects that have different prototypes and different keys', () => {
    class A {
      a: any;
      constructor(prop: any) {
        this.a = prop;
      }
    }

    class B {
      b: any;
      constructor(prop: any) {
        this.b = prop;
      }
    }

    const a = new A('hi');
    const b = new B('hi');

    expect(a).toNotEqual(b);
  });

  it('works with arrays of objects', () => {
    const a = [
      {
        id: 0,
        text: 'Array Object 0',
        boo: false
      },
      {
        id: 1,
        text: 'Array Object 1',
        boo: false
      }
    ];

    const b = [
      {
        id: 0,
        text: 'Array Object 0',
        boo: true // value of boo is changed to true here
      },
      {
        id: 1,
        text: 'Array Object 1',
        boo: false
      }
    ];

    expect(a).toNotEqual(b);
  });

  if (typeof Map !== 'undefined') {
    it('works with Map', () => {
      const a = new Map();
      a.set('key', 'value');

      const b = new Map();
      b.set('key', 'another value');

      expect(a).toNotEqual(b);
    });
  }

  if (typeof Set !== 'undefined') {
    it('works with Set', () => {
      const a = new Set();
      a.add('a');

      const b = new Set();
      b.add('b');

      expect(a).toNotEqual(b);
    });
  }
});

describe('withArgs', () => {
  const fn = (arg1: any, arg2: any) => {
    if (arg1 === 'first' && typeof arg2 === 'undefined') {
      throw new Error('first arg found');
    }
    if (arg1 === 'first' && arg2 === 'second') {
      throw new Error('both args found');
    }
  };

  it('invokes actual function with args', () => {
    expect(() => {
      expect(fn).withArgs('first').toThrow(/first arg found/);
    }).toNotThrow();
  });

  it('can be chained', () => {
    expect(() => {
      expect(fn).withArgs('first').withArgs('second').toThrow(/both args found/);
    }).toNotThrow();
  });

  it('throws when actual is not a function', () => {
    expect(() => {
      expect('not a function').withArgs('first');
    }).toThrow(/must be a function/);
  });
});

describe('withContext', () => {
  const context = {
    check: true
  };

  const fn = function fn(arg: any) {
    if (this.check && typeof arg === 'undefined')
      throw new Error('context found');

    if (this.check && arg === 'good')
      throw new Error('context and args found');
  };

  it('calls function with context', () => {
    expect(() => {
      expect(fn).withContext(context).toThrow(/context found/);
    }).toNotThrow();
  });

  it('calls function with context and args', () => {
    expect(() => {
      expect(fn).withContext(context).withArgs('good').toThrow(/context and args found/);
    }).toNotThrow();
  });

  it('throws when actual is not a function', () => {
    expect(() => {
      expect('not a function').withContext(context).toThrow();
    }).toThrow(/must be a function/);
  });
});
