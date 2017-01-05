
/// <reference types="mocha"" />

import {Expectation, Extension, Spy, createSpy, isSpy, assert, spyOn, extend, restoreSpies}
      from 'expect';
import * as expect from 'expect';

describe('chaining assertions', function () {
  it('should allow chaining for array-like applications', function () {
    expect([ 1, 2, 'foo', 3 ])
      .toExist()
      .toBeAn(Array)
      .toInclude('foo')
      .toExclude('bar')
  })

  it('should allow chaining for number checking', function () {
    expect(3.14)
      .toExist()
      .toBeLessThan(4.2)
      .toBeGreaterThan(3.0)
  })
})
describe('createSpy', function () {
  describe('when given a function', function () {
    it('returns a spy function', function () {
      const spy = createSpy(function () {})
      expect(spy).toBeA(Function)
    })
  })
})

describe('A spy', function () {
  let targetContext:any, targetArguments:any;
  const target = {
    method: function () {
      targetContext = this
      targetArguments = Array.prototype.slice.call(arguments, 0)
    }
  }

  let spy:any;

  it('is a spy', function () {
    expect(isSpy(spy)).toBe(true)
  })

  it('has a destroy method', function () {
    expect(spy.destroy).toBeA(Function)
  })

  it('has a restore method', function () {
    expect(spy.restore).toBeA(Function)
  })

  it('knows how many times it has been called', function () {
    spy()
    spy()
    expect(spy.calls.length).toEqual(2)
  })

  it('knows the arguments it was called with', function () {
    spy(1, 2, 3)
    expect(spy).toHaveBeenCalledWith(1, 2, 3)
  })

  describe('that calls some other function', function () {
    let otherContext:any, otherArguments:any;
    function otherFn() {
      otherContext = this
      otherArguments = Array.prototype.slice.call(arguments, 0)
    }

    beforeEach(function () {
      spy.andCall(otherFn)
      otherContext = otherArguments = null
    })

    it('calls that function', function () {
      spy()
      expect(otherContext).toNotBe(null)
    })

    it('uses the correct context', function () {
      const context = {}
      spy.call(context)
      expect(otherContext).toBe(context)
    })

    it('passes the arguments through', function () {
      spy(1, 2, 3)
      expect(otherArguments).toEqual([ 1, 2, 3 ])
    })
  })

  describe('that calls through', function () {
    beforeEach(function () {
      spy.andCallThrough()
    })

    it('calls the original function', function () {
      spy()
      expect(targetContext).toNotBe(null)
    })

    it('uses the correct context', function () {
      const context = {}
      spy.call(context)
      expect(targetContext).toBe(context)
    })

    it('passes the arguments through', function () {
      spy(1, 2, 3)
      expect(targetArguments).toEqual([ 1, 2, 3 ])
    })
  })

  describe('with a thrown value', function () {
    beforeEach(function () {
      spy.andThrow('hello')
    })

    it('throws the correct value', function () {
      expect(spy).toThrow('hello')
    })
  })

  describe('with a return value', function () {
    beforeEach(function () {
      spy.andReturn('hello')
    })

    it('returns the correct value', function () {
      expect(spy()).toEqual('hello')
    })
  })
})
describe('expect.extend', function () {
  const ColorAssertions:Extension = {
    toBeAColor() {
      assert(
        this.actual.match(/^#[a-fA-F0-9]{6}$/),
        'expected %s to be an HTML color',
        this.actual
      )
    }
  }

  let assertSpy:Spy;
  beforeEach(function () {
    extend(ColorAssertions)
    assertSpy = spyOn(expect, 'assert')
  })

  afterEach(function () {
    assertSpy.restore()
  })

  it('works', function () {
    interface ColorExpectation extends Expectation {
      toBeAColor():Expectation;
    }
    (<ColorExpectation>expect('#ff00ff')).toBeAColor()
    expect(assertSpy).toHaveBeenCalled()
  })
})

describe('restoreSpies', function () {
  describe('with one spy', function () {
    const original = function () {}
    const target = { method: original }

    beforeEach(function () {
      spyOn(target, 'method')
    })

    it('works with spyOn()', function () {
      expect(target.method).toNotEqual(original)
      restoreSpies()
      expect(target.method).toEqual(original)
    })

    it('is idempotent', function () {
      expect(target.method).toNotEqual(original)
      restoreSpies()
      restoreSpies()
      expect(target.method).toEqual(original)
    })

    it('can work even on createSpy()', function () {
      createSpy(original)
      restoreSpies()
    })
  })

  describe('with multiple spies', function () {
    const originals = [ function () {}, function () {} ]
    const targets = [
      { method: originals[0] },
      { method: originals[1] }
    ]

    it('still works', function () {
      spyOn(targets[0], 'method')
      spyOn(targets[1], 'method')

      expect(targets[0].method).toNotEqual(originals[0])
      expect(targets[1].method).toNotEqual(originals[1])

      restoreSpies()

      expect(targets[0].method).toEqual(originals[0])
      expect(targets[1].method).toEqual(originals[1])
    })
  })
})

describe('A function that was spied on', function () {
  const video = {
    play: function () {}
  }

  let spy:Spy;
  beforeEach(function () {
    spy = spyOn(video, 'play')
  })

  it('tracks the number of calls', function () {
    expect(spy.calls.length).toEqual(1)
  })

  it('tracks the context that was used', function () {
    expect(spy.calls[0].context).toBe(video)
  })

  it('tracks the arguments that were used', function () {
    expect(spy.calls[0].arguments).toEqual([ 'some', 'args' ])
  })

  it('was called', function () {
    expect(spy).toHaveBeenCalled()
  })

  it('was called with the correct args', function () {
    expect(spy).toHaveBeenCalledWith('some', 'args')
  })

  it('can be restored', function () {
    expect(video.play).toEqual(spy)
    spy.restore()
    expect(video.play).toNotEqual(spy)
  })
})

describe('A function that was spied on but not called', function () {
  const video = {
    play: function () {}
  }

  let spy:Spy;
  beforeEach(function () {
    spy = spyOn(video, 'play')
  })

  it('number of calls to be zero', function () {
    expect(spy.calls.length).toEqual(0)
  })

  it('was not called', function () {
    expect(spy).toNotHaveBeenCalled()
  })
})

describe('toBeA', function () {
  it('requires the value to be a function or string', function () {
    expect(function () {
      expect('actual').toBeA(4)
    }).toThrow(/must be a function or a string/)
  })

  it('does not throw when the actual value is an instanceof the constructor', function () {
    expect(function () {
      expect(new Expectation('foo')).toBeA(Expectation)
    }).toNotThrow()
  })

  it('throws when the actual value is not an instanceof the constructor', function () {
    expect(function () {
      expect('actual').toBeA(Expectation)
    }).toThrow(/to be/)
  })

  it('does not throw when the expected value is the typeof the actual value', function () {
    expect(function () {
      expect(4).toBeA('number')
      expect(NaN).toBeA('number') // hahaha
    }).toNotThrow()
  })

  it('throws when the expected value is not the typeof the actual value', function () {
    expect(function () {
      expect('actual').toBeA('number')
    }).toThrow(/to be/)
  })

  it('does not throw when the actual value is an array', function () {
    expect(function () {
      expect([]).toBeAn('array')
    }).toNotThrow()
  })

  it('throws when the actual value is not an array', function () {
    expect(function () {
      expect('actual').toBeAn('array')
    }).toThrow(/to be/)
  })
})

describe('toBeGreaterThan', function () {
  it('does not throw when the actual value is greater than the expected value', function () {
    expect(function () {
      expect(3).toBeGreaterThan(2)
    }).toNotThrow()
  })

  it('throws when the actual value is not greater than the expected value', function () {
    expect(function () {
      expect(2).toBeGreaterThan(3)
    }).toThrow(/to be greater than/)
  })
})


describe('toBeLessThan', function () {
  it('does not throw when the actual value is less than the expected value', function () {
    expect(function () {
      expect(2).toBeLessThan(3)
    }).toNotThrow()
  })

  it('throws when the actual value is not less than the expected value', function () {
    expect(function () {
      expect(3).toBeLessThan(2)
    }).toThrow(/to be less than/)
  })
})

describe('toBeTruthy', function () {
  it('does not throw on truthy actual values', function () {
    expect(function () {
      expect(1).toBeTruthy()
      expect({ hello: 'world' }).toBeTruthy()
      expect([ 1, 2, 3 ]).toBeTruthy()
    }).toNotThrow()
  })

  it('throws on falsy actual values', function () {
    expect(function () {
      expect(0).toBeTruthy()
    }).toThrow()

    expect(function () {
      expect(null).toBeTruthy()
    }).toThrow()

    expect(function () {
      expect(undefined).toBeTruthy()
    }).toThrow()
  })
})

describe('toBeFalsy', function () {
  it('throws on truthy values', function () {
    expect(function () {
      expect(42).toBeFalsy()
    }).toThrow()

    expect(function () {
      expect({ foo: 'bar' }).toBeFalsy()
    }).toThrow()

    expect(function () {
      expect([]).toBeFalsy()
    }).toThrow()
  })

  it('does not throw with falsy actual values', function () {
    expect(function () {
      expect(0).toBeFalsy()
      expect(null).toBeFalsy()
      expect(undefined).toBeFalsy()
    }).toNotThrow()
  })
})

describe('toEqual', function () {
  it('works', function () {
    expect(function () {
      expect('actual').toEqual('expected')
    }).toThrow(/Expected 'actual' to equal 'expected'/)
  })

  it('works with objects that have the same keys in different order', function () {
    const a = { a: 'a', b: 'b', c: 'c' }
    const b = { b: 'b', c: 'c', a: 'a' }
    expect(a).toEqual(b)
  })

  it('shows diff', function () {
    try {
      expect('actual').toEqual('expected')
    } catch (err) {
      expect(err.actual).toEqual('actual')
      expect(err.expected).toEqual('expected')
      expect(err.showDiff).toEqual(true)
    }
  })
})

describe('toExclude', function () {
  it('requires the actual value to be an array or string', function () {
    expect(function () {
      expect(1).toExclude(2)
    }).toThrow(/must be an array or a string/)
  })

  it('does not throw when an array does not contain the expected value', function () {
    expect(function () {
      expect([ 1, 2, 3 ]).toExclude(4)
    }).toNotThrow()
  })

  it('throws when an array contains the expected value', function () {
    expect(function () {
      expect([ 1, 2, 3 ]).toExclude(2)
    }).toThrow(/to exclude/)
  })

  it('does not throw when an array does not contain the expected value', function () {
    expect(function () {
      expect('hello world').toExclude('goodbye')
    }).toNotThrow()
  })

  it('throws when a string contains the expected value', function () {
    expect(function () {
      expect('hello world').toExclude('hello')
    }).toThrow(/to exclude/)
  })
})

describe('toExist', function () {
  it('does not throw on truthy actual values', function () {
    expect(function () {
      expect(1).toExist()
      expect({ 'hello': 'world' }).toExist()
      expect([ 1, 2, 3 ]).toExist()
    }).toNotThrow()
  })

  it('throws on falsy actual values', function () {
    expect(function () {
      expect(0).toExist()
    }).toThrow()

    expect(function () {
      expect(null).toExist()
    }).toThrow()

    expect(function () {
      expect(undefined).toExist()
    }).toThrow()
  })
})

describe('toNotExist', function () {
  it('throws on truthy values', function () {
    expect(function () {
      expect(42).toNotExist()
    }).toThrow()

    expect(function () {
      expect({ foo: 'bar' }).toNotExist()
    }).toThrow()

    expect(function () {
      expect([]).toNotExist()
    }).toThrow()
  })

  it('does not throw with falsy actual values', function () {
    expect(function () {
      expect(0).toNotExist()
      expect(null).toNotExist()
      expect(undefined).toNotExist()
    }).toNotThrow()
  })
})

describe('toInclude', function () {
  it('requires the actual value to be an array or string', function () {
    expect(function () {
      expect(1).toInclude(2)
    }).toThrow(/must be an array or a string/)
  })

  it('does not throw when an array contains an expected integer', function () {
    expect(function () {
      expect([ 1, 2, 3 ]).toInclude(2)
      expect([ { a: 1 }, { c: 2 } ]).toInclude({ c: 2 })
    }).toNotThrow()
  })

  it('does not throw when an array contains an expected object', function () {
    expect(function () {
      expect([ { a: 1 }, { c: 2 } ]).toInclude({ c: 2 })
    }).toNotThrow()
  })

  it('throws when an array does not contain an expected integer', function () {
    expect(function () {
      expect([ 1, 2, 3 ]).toInclude(4)
    }).toThrow(/to include/)
  })

  it('throws when an array does not contain an expected object', function () {
    expect(function () {
      expect([ { a: 1 }, { c: 2 } ]).toInclude({ a: 2 })
    }).toThrow(/to include/)
  })

  it('does not throw when a string contains the expected value', function () {
    expect(function () {
      expect('hello world').toInclude('world')
    }).toNotThrow()
  })

  it('throws when a string does not contain the expected value', function () {
    expect(function () {
      expect('hello world').toInclude('goodbye')
    }).toThrow(/to include/)
  })
})

describe('toMatch', function () {
  it('requires the pattern to be a RegExp', function () {
    expect(function () {
      expect('actual').toMatch('expected')
    }).toThrow(/must be a RegExp/)
  })

  it('does not throw when the actual value matches the pattern', function () {
    expect(function () {
      expect('actual').toMatch(/^actual$/)
    }).toNotThrow()
  })

  it('throws when the actual value does not match the pattern', function () {
    expect(function () {
      expect('actual').toMatch(/nope/)
    }).toThrow(/to match/)
  })
})

describe('toNotMatch', function () {
  it('requires the pattern to be a RegExp', function () {
    expect(function () {
      expect('actual').toNotMatch('expected')
    }).toThrow(/must be a RegExp/)
  })

  it('does not throw when the actual value does not match the pattern', function () {
    expect(function () {
      expect('actual').toNotMatch(/nope/)
    }).toNotThrow()
  })

  it('throws when the actual value matches the pattern', function () {
    expect(function () {
      expect('actual').toNotMatch(/^actual$/)
    }).toThrow(/to not match/)
  })
})

describe('toNotEqual', function () {
  it('works with arrays of objects', function () {
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
    ]

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
    ]

    expect(a).toNotEqual(b)
  })

  if (typeof Map !== 'undefined') {
    it('works with Map', function () {
      const a = new Map()
      a.set('key', 'value')

      const b = new Map()
      b.set('key', 'another value')

      expect(a).toNotEqual(b)
    })
  }

  if (typeof Set !== 'undefined') {
    it('works with Set', function () {
      const a = new Set()
      a.add('a')

      const b = new Set()
      b.add('b')

      expect(a).toNotEqual(b)
    })
  }
})

describe('withArgs', function () {
  const fn = function (arg1:any, arg2:any) {
    if (arg1 === 'first' && typeof arg2 === 'undefined') {
      throw new Error('first arg found')
    }
    if (arg1 === 'first' && arg2 === 'second') {
      throw new Error('both args found')
    }
  }

  it('invokes actual function with args', function () {
    expect(function () {
      expect(fn).withArgs('first').toThrow(/first arg found/)
    }).toNotThrow()
  })

  it('can be chained', function () {
    expect(function () {
      expect(fn).withArgs('first').withArgs('second').toThrow(/both args found/)
    }).toNotThrow()
  })

  it('throws when actual is not a function', function () {
    expect(function () {
      expect('not a function').withArgs('first')
    }).toThrow(/must be a function/)
  })
})

describe('withContext', function () {
  const context = {
    check: true
  }
  const fn = function (arg:any) {
    if (this.check && typeof arg === 'undefined') {
      throw new Error('context found')
    }
    if (this.check && arg === 'good') {
      throw new Error('context and args found')
    }
  }

  it('calls function with context', function () {
    expect(function () {
      expect(fn).withContext(context).toThrow(/context found/)
    }).toNotThrow()
  })

  it('calls function with context and args', function () {
    expect(function () {
      expect(fn).withContext(context).withArgs('good').toThrow(/context and args found/)
    }).toNotThrow()
  })

})
