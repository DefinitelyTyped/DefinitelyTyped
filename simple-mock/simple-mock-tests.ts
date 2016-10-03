/// <reference path="../mocha/mocha.d.ts"/>
/// <reference path="../node/node.d.ts"/>
/// <reference path="../bluebird/bluebird.d.ts"/>

/// <reference path="./simple-mock.d.ts"/>

'use strict'

import simple = require('simple-mock');
import assert = require('assert');

import Bluebird = require('bluebird');

// Following code is a TypeScript convertion of the test suite bundled with simple-mock.
// Original test in MIT license

describe('simple', function () {
  describe('spy()', function () {
    describe('for noop function', function () {
      let spyFn: Simple.Spy<void>;

      beforeEach(function () {
        spyFn = simple.spy(function () {})
      })

      it('can be queried without having been called', function () {
        assert.equal(spyFn.callCount, 0)
        assert.deepEqual(spyFn.calls, [])
        assert(spyFn.lastCall)
        assert.deepEqual(spyFn.lastCall.args, [])
      })

      it('can be queried for arguments on a single call', function () {
        let context = {
          spyFn: spyFn
        }

        context.spyFn('with', 'args')

        assert(spyFn.called)
        assert.equal(spyFn.callCount, 1)
        assert(spyFn.calls)
        assert(spyFn.firstCall)
        assert.equal(spyFn.firstCall, spyFn.lastCall)
        assert.equal(spyFn.firstCall, spyFn.calls[0])
        assert.deepEqual(spyFn.lastCall.args, ['with', 'args'])
        assert.equal(spyFn.lastCall.context, context)
      })

      it('can be queried for arguments over multiple calls', function () {
        let context = {
          spyFn: spyFn
        }

        spyFn('with', 'args')
        spyFn('and')
        context.spyFn('more', 'args')

        assert(spyFn.called)
        assert.equal(spyFn.callCount, 3)
        assert(spyFn.calls)
        assert(spyFn.firstCall)
        assert.equal(spyFn.firstCall, spyFn.calls[0])
        assert.deepEqual(spyFn.firstCall.args, ['with', 'args'])
        assert(spyFn.calls[1])
        assert.deepEqual(spyFn.calls[1].args, ['and'])
        assert(spyFn.lastCall)
        assert.equal(spyFn.lastCall, spyFn.calls[2])
        assert.deepEqual(spyFn.lastCall.args, ['more', 'args'])
        assert.equal(spyFn.lastCall.context, context)
      })
    })

    describe('for a throwing function', function () {
      let originalFn: () => void;
      let spyFn: Simple.Spy<void>;
      beforeEach(function () {
        let i = 0

        originalFn = function () {
          throw new Error(`${i++}`)
        }

        spyFn = simple.spy(originalFn)
      })

      it('can be queried without having been called', function () {
        assert(!spyFn.called)
        assert.equal(spyFn.callCount, 0)
        assert.deepEqual(spyFn.calls, [])
        assert(spyFn.lastCall)
        assert.equal(spyFn.lastCall.threw, undefined)
      })

      it('can be queried for what it threw on a single call', function () {
        let threw: Error;
        try {
          spyFn()
        } catch (e) {
          threw = e
        }

        assert(threw)
        assert(spyFn.called)
        assert.equal(spyFn.callCount, 1)
        assert(spyFn.firstCall)
        assert.equal(spyFn.firstCall.threw, threw)
      })

      it('can be queried for what it threw over multiple calls', function () {
        let threw: Error[] = []
        try {
          spyFn()
        } catch (e) {
          threw.push(e)
        }
        try {
          spyFn()
        } catch (e) {
          threw.push(e)
        }
        try {
          spyFn()
        } catch (e) {
          threw.push(e)
        }

        assert.equal(threw.length, 3)
        assert(spyFn.called)
        assert.equal(spyFn.callCount, 3)
        assert(spyFn.firstCall)
        assert.equal(spyFn.firstCall.threw, threw[0])
        assert.equal(spyFn.calls[1].threw, threw[1])
        assert.equal(spyFn.lastCall.threw, threw[2])
      })
    })

    describe('for a returning function', function () {
      let originalFn: () => number;
      let spyFn: Simple.Spy<number>;
      beforeEach(function () {
        let i = 1

        originalFn = () => {
          return i++
        }

        spyFn = simple.spy(originalFn)
      })

      it('can be queried without having been called', function () {
        assert(!spyFn.called)
        assert.equal(spyFn.callCount, 0)
        assert.deepEqual(spyFn.calls, [])
        assert(spyFn.lastCall)
        assert.equal(spyFn.lastCall.returned, undefined)
      })

      it('can be queried for what it threw on a single call', function () {
        let returned: number

        returned = spyFn()

        assert(returned)
        assert.equal(spyFn.callCount, 1)
        assert(spyFn.firstCall)
        assert.equal(spyFn.firstCall.returned, returned)
      })

      it('can be queried for what it threw over multiple calls', function () {
        let returned: number[] = []

        returned.push(spyFn())
        returned.push(spyFn())
        returned.push(spyFn())

        assert.equal(returned.length, 3)
        assert(spyFn.called)
        assert.equal(spyFn.callCount, 3)
        assert(spyFn.firstCall)
        assert.equal(spyFn.firstCall.returned, returned[0])
        assert.equal(spyFn.calls[1].returned, returned[1])
        assert.equal(spyFn.lastCall.returned, returned[2])
      })
    })

    describe('calls of multiple spies', function () {
      it('can be compared to determine the order they were called in', function () {
        let spy1 = simple.spy(function () {})
        let spy2 = simple.spy(function () {})
        let spy3 = simple.spy(function () {})

        spy1()
        spy3()
        spy2()
        spy1()

        assert(spy1.lastCall.k > spy2.lastCall.k)
        assert(spy1.lastCall.k > spy3.lastCall.k)
        assert(spy2.lastCall.k > spy3.lastCall.k)
        assert(spy3.lastCall.k > spy1.calls[0].k)
      })
    })
  })

  describe('stub()', function () {
    describe('with no configuration', function () {
      let stubFn: Simple.Stub<void>;
      it('is also a spy', function () {
        stubFn = simple.stub()

        stubFn('etc')
        assert(stubFn.called)
        assert(stubFn.lastCall.args[0], 'etc')
      })
    })

    describe('for a single callback configuration', function () {
      let stubFn: Simple.Stub<void>;
      describe('with default index', function () {
        beforeEach(function () {
          stubFn = simple.stub().callbackWith(1, 2, 3)
        })

        it('can call back with arguments', function () {
          stubFn('a', function () {
            assert(stubFn.called)
            assert.equal(stubFn.callCount, 1)
            assert.equal(stubFn.lastCall.args[0], 'a')
            assert.equal(arguments.length, 3)
            assert.equal(arguments[0], 1)
            assert.equal(arguments[1], 2)
            assert.equal(arguments[2], 3)
          })
        })

        it('can call back with arguments, over multiple calls', function () {
          stubFn('a', function () {})
          stubFn('b', function () {
            assert(stubFn.called)
            assert.equal(stubFn.callCount, 2)
            assert.equal(stubFn.lastCall.args[0], 'b')
            assert.equal(arguments.length, 3)
            assert.equal(arguments[0], 1)
            assert.equal(arguments[1], 2)
            assert.equal(arguments[2], 3)
          })
        })
      })

      describe('with specified index', function () {
        beforeEach(function () {
          stubFn = simple.stub().callbackArgWith(1, 2, 3)
        })

        it('can call back with arguments', function () {
          stubFn('a', function () {
            assert(stubFn.called)
            assert.equal(stubFn.callCount, 1)
            assert.equal(stubFn.lastCall.args[0], 'a')
            assert.equal(arguments.length, 2)
            assert.equal(arguments[0], 2)
            assert.equal(arguments[1], 3)
          })
        })

        it('can call back with arguments, over multiple calls', function () {
          stubFn('a', function () {})
          stubFn('b', function () {
            assert(stubFn.called)
            assert.equal(stubFn.callCount, 2)
            assert.equal(stubFn.lastCall.args[0], 'b')
            assert.equal(arguments.length, 2)
            assert.equal(arguments[0], 2)
            assert.equal(arguments[1], 3)
          })
        })
      })

      describe('with context specified', function () {
        beforeEach(function () {
          stubFn = simple.stub().callback().inThisContext({ a: 'a' })
        })

        it('should do what...', function (done) {
          stubFn(function () {
            assert.equal(this.a, 'a')
            done()
          })
        })
      })
    })

    describe('for a multiple callback configurations', function () {
      let stubFn: Simple.Stub<void>;
      beforeEach(function () {
        stubFn = simple.stub().callbackWith(1).callbackWith(2).callbackWith(3)
      })

      it('can call back once with arguments', function () {
        stubFn('a', function () {
          assert(stubFn.called)
          assert.equal(stubFn.callCount, 1)
          assert.equal(stubFn.lastCall.args[0], 'a')
          assert.equal(arguments[0], 1)
        })
      })

      it('can call back with arguments, over multiple calls, looping per default', function () {
        stubFn('a', function () {})
        stubFn('b', function () {
          assert(stubFn.called)
          assert.equal(stubFn.callCount, 2)
          assert.equal(stubFn.lastCall.args[0], 'b')
          assert.equal(arguments[0], 2)
        })
        stubFn('c', function () {
          assert(stubFn.called)
          assert.equal(stubFn.callCount, 3)
          assert.equal(stubFn.lastCall.args[0], 'c')
          assert.equal(arguments[0], 3)
        })
        stubFn('d', function () {
          assert.equal(stubFn.callCount, 4)
          assert.equal(stubFn.lastCall.args[0], 'd')
          assert.equal(arguments[0], 1)
        })
      })

      it('can call back with arguments, over multiple calls, looping turned off', function () {
        stubFn.loop = false
        stubFn('a', function () {})
        stubFn('b', function () {
          assert(stubFn.called)
          assert.equal(stubFn.callCount, 2)
          assert.equal(stubFn.lastCall.args[0], 'b')
          assert.equal(arguments[0], 2)
        })
        stubFn('c', function () {
          assert(stubFn.called)
          assert.equal(stubFn.callCount, 3)
          assert.equal(stubFn.lastCall.args[0], 'c')
          assert.equal(arguments[0], 3)
        })
        let neverCalled = true
        stubFn('d', function () {
          neverCalled = false
        })
        assert(neverCalled)
      })
    })

    describe('for a single throwing configuration', function () {
      let stubFn: Simple.Stub<void>;
      beforeEach(function () {
        stubFn = simple.stub().throwWith(new Error('example'))
      })

      it('can throw', function () {
        let threw: Error
        try {
          stubFn()
        } catch (e) {
          threw = e
        }

        assert(threw)
        assert(stubFn.called)
        assert.equal(stubFn.callCount, 1)
        assert.equal(threw.message, 'example')
      })

      it('can throw over multiple calls, looping per default', function () {
        let threw: Error[] = []
        try {
          stubFn()
        } catch (e) {
          threw.push(e)
        }
        try {
          stubFn()
        } catch (e) {
          threw.push(e)
        }

        assert.equal(threw.length, 2)
        assert(stubFn.called)
        assert.equal(stubFn.callCount, 2)
        assert.equal(threw[0], threw[1])
        assert.equal(threw[0].message, 'example')
      })
    })

    describe('for a multiple throwing configurations', function () {
      let stubFn: Simple.Stub<void>;
      beforeEach(function () {
        stubFn = simple.stub().throwWith(new Error('a')).throwWith(new Error('b'))
      })

      it('can throw', function () {
        let threw: Error
        try {
          stubFn()
        } catch (e) {
          threw = e
        }

        assert(threw)
        assert(stubFn.called)
        assert.equal(stubFn.callCount, 1)
        assert.equal(threw.message, 'a')
      })

      it('can throw over multiple calls, looping per default', function () {
        let threw: Error[] = []
        try {
          stubFn()
        } catch (e) {
          threw.push(e)
        }
        try {
          stubFn()
        } catch (e) {
          threw.push(e)
        }
        try {
          stubFn()
        } catch (e) {
          threw.push(e)
        }

        assert.equal(threw.length, 3)
        assert(stubFn.called)
        assert.equal(stubFn.callCount, 3)
        assert.equal(threw[0].message, 'a')
        assert.equal(threw[1].message, 'b')
        assert.equal(threw[2].message, 'a')
      })

      it('can throw over multiple calls, looping turned off', function () {
        stubFn.loop = false

        let threw: Error[] = []
        try {
          stubFn()
        } catch (e) {
          threw.push(e)
        }
        try {
          stubFn()
        } catch (e) {
          threw.push(e)
        }
        try {
          stubFn()
        } catch (e) {
          threw.push(e)
        }

        assert.equal(threw.length, 2)
        assert(stubFn.called)
        assert.equal(stubFn.callCount, 3)
        assert.equal(threw[0].message, 'a')
        assert.equal(threw[1].message, 'b')
      })
    })

    describe('for a single returning configuration', function () {
      let stubFn: Simple.Stub<string>;
      beforeEach(function () {
        stubFn = simple.stub()
      })

      it('can return', function () {
        stubFn.returnWith('example')

        let returned: string
        returned = stubFn()

        assert(returned)
        assert.equal(stubFn.callCount, 1)
        assert.equal(returned, 'example')
      })

      it('can return an empty string', function () {
        stubFn.returnWith('')

        let returned: string
        returned = stubFn()

        assert.equal(stubFn.callCount, 1)
        assert.equal(returned, '')
      })

      it('can return over multiple calls, looping per default', function () {
        stubFn.returnWith('example-a')
        stubFn.returnWith('example-b')

        let returned: string[] = []
        returned.push(stubFn())
        returned.push(stubFn())
        returned.push(stubFn())
        returned.push(stubFn())

        assert.equal(returned.length, 4)
        assert(stubFn.called)
        assert.equal(stubFn.callCount, 4)
        assert.equal(returned[0], returned[2])
        assert.equal(returned[0], 'example-a')
        assert.equal(returned[1], returned[3])
        assert.equal(returned[1], 'example-b')
      })
    })

    describe('for a multiple returning configurations', function () {
      let stubFn: Simple.Stub<string>;
      beforeEach(function () {
        stubFn = simple.stub().returnWith('a').returnWith('b')
      })

      it('can return', function () {
        let returned: string
        returned = stubFn()

        assert(returned)
        assert.equal(stubFn.callCount, 1)
        assert.equal(returned, 'a')
      })

      it('can return over multiple calls, looping per default', function () {
        let returned: string[] = []
        returned.push(stubFn())
        returned.push(stubFn())
        returned.push(stubFn())

        assert.equal(returned.length, 3)
        assert(stubFn.called)
        assert.equal(stubFn.callCount, 3)
        assert.equal(returned[0], 'a')
        assert.equal(returned[1], 'b')
        assert.equal(returned[2], 'a')
      })

      it('can return over multiple calls, looping turned off', function () {
        stubFn.loop = false

        let returned: string[] = []
        returned.push(stubFn())
        returned.push(stubFn())
        returned.push(stubFn())

        assert.equal(returned.length, 3)
        assert(stubFn.called)
        assert.equal(stubFn.callCount, 3)
        assert.equal(returned[0], 'a')
        assert.equal(returned[1], 'b')
        assert.equal(returned[2], undefined)
      })
    })

    describe('for a specified function to call', function () {
      it('should be called with arguments and return', function () {
        let stubFn = simple.stub().callFn(function () {
          return arguments
        })

        let returned = stubFn('z', 'x')

        assert.equal(stubFn.callCount, 1)
        assert.equal(returned[0], 'z')
        assert.equal(returned[1], 'x')
      })

      it('should be able to throw', function () {
        let stubFn = simple.stub().callFn(function () {
          throw new Error('my message')
        })

        try {
          stubFn()
        } catch(e) {
          assert(e instanceof Error)
          assert.equal(e.message, 'my message')
        }
      })

      it('should be called in context', function () {
        let mockObj = {
          stubFn: simple.stub().callFn(function () {
            return this
          })
        }

        let returned = mockObj.stubFn()

        assert.equal(returned, mockObj)
      })

      it('can be called in specified context', function () {
        let anotherMockObj = {}

        let mockObj = {
          stubFn: simple.stub().callFn(function () {
            return this
          }).inThisContext(anotherMockObj)
        }

        let returned = mockObj.stubFn()

        assert.equal(returned, anotherMockObj)
      })
    })

    describe('for custom/when-conforming promises', function () {
      let fulfilledStub: Simple.Stub<boolean>
      let rejectedStub: Simple.Stub<boolean>

      beforeEach(function () {
        fulfilledStub = simple.stub().returnWith(true)
        rejectedStub = simple.stub().returnWith(true)

        interface MockPromise<T> {
          resolveValue: T,
          rejectValue: T,
          then(fulfilledFn: (value: any) => T, rejectedFn: (error: any) => T): void;
        }

        let mockPromise: MockPromise<boolean> = {
          resolveValue: null as boolean,
          rejectValue: null as boolean,
          then: function (fulfilledFn: (value: any) => boolean, rejectedFn: (error: any) => boolean) {
            let self = this
            process.nextTick(function () {
              if (self.resolveValue) return fulfilledFn(self.resolveValue)
              if (self.rejectValue) return rejectedFn(self.rejectValue)
            })
          }
        }

        simple.mock(simple, 'Promise', {
          when: function<T>(value: T) {
            let promise: MockPromise<T> = Object.create(mockPromise)
            promise.resolveValue = value
            return promise
          },
          reject: function<T>(value: T) {
            let promise: MockPromise<T> = Object.create(mockPromise)
            promise.rejectValue = value
            return promise
          }
        })
      })

      describe('with a single resolving configuration', function () {
        let stubFn: Simple.Stub<PromiseLike<string>>;
        beforeEach(function () {
          stubFn = simple.stub().resolveWith('example')
        })

        it('can return a promise', function (done) {
          let returned = stubFn()

          assert(returned)

          returned.then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 1)
            assert.equal(fulfilledStub.lastCall.arg, 'example')
            assert.equal(rejectedStub.callCount, 0)
            done()
          }, 0)
        })
      })

      describe('with a multiple resolving configurations', function () {
        let stubFn: Simple.Stub<PromiseLike<string>>;
        beforeEach(function () {
          stubFn = simple.stub().resolveWith('a').resolveWith('b')
        })

        it('can return a promise', function (done) {
          let returned = stubFn()

          assert(returned)

          returned.then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 1)
            assert.equal(fulfilledStub.lastCall.arg, 'a')
            assert.equal(rejectedStub.callCount, 0)
            done()
          }, 0)
        })

        it('can return over multiple calls, looping per default', function (done) {
          stubFn().then(fulfilledStub, rejectedStub)
          stubFn().then(fulfilledStub, rejectedStub)
          stubFn().then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 3)
            assert.equal(fulfilledStub.calls[0].arg, 'a')
            assert.equal(fulfilledStub.calls[1].arg, 'b')
            assert.equal(fulfilledStub.calls[2].arg, 'a')
            assert.equal(rejectedStub.callCount, 0)
            done()
          }, 0)
        })
      })

      describe('with a single rejecting configuration', function () {
        let stubFn: Simple.Stub<PromiseLike<string>>;
        beforeEach(function () {
          stubFn = simple.stub().rejectWith('example')
        })

        it('can return a promise', function (done) {
          let returned = stubFn()

          assert(returned)

          returned.then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 0)
            assert.equal(rejectedStub.callCount, 1)
            assert.equal(rejectedStub.lastCall.arg, 'example')
            done()
          }, 0)
        })
      })

      describe('with a multiple rejecting configurations', function () {
        let stubFn: Simple.Stub<PromiseLike<string>>;
        beforeEach(function () {
          stubFn = simple.stub().rejectWith('a').rejectWith('b')
        })

        it('can return a promise', function (done) {
          let returned = stubFn()

          assert(returned)

          returned.then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 0)
            assert.equal(rejectedStub.callCount, 1)
            assert.equal(rejectedStub.lastCall.arg, 'a')
            done()
          }, 0)
        })

        it('can return over multiple calls, looping per default', function (done) {
          stubFn().then(fulfilledStub, rejectedStub)
          stubFn().then(fulfilledStub, rejectedStub)
          stubFn().then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 0)
            assert.equal(rejectedStub.callCount, 3)
            assert.equal(rejectedStub.calls[0].arg, 'a')
            assert.equal(rejectedStub.calls[1].arg, 'b')
            assert.equal(rejectedStub.calls[2].arg, 'a')
            done()
          }, 0)
        })
      })
    })

    describe('for native/conforming promises', function () {
      let fulfilledStub: Simple.Stub<boolean>
      let rejectedStub: Simple.Stub<boolean>

      beforeEach(function () {
        fulfilledStub = simple.stub().returnWith(true)
        rejectedStub = simple.stub().returnWith(true)
      })

      describe('with a single resolving configuration', function () {
        let stubFn: Simple.Stub<PromiseLike<string>>;
        beforeEach(function () {
          stubFn = simple.stub().resolveWith('example')
        })

        it('can return a promise', function (done) {
          let returned = stubFn()

          assert(returned)

          returned.then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 1)
            assert.equal(fulfilledStub.lastCall.arg, 'example')
            assert.equal(rejectedStub.callCount, 0)
            done()
          }, 0)
        })
      })

      describe('with a multiple resolving configurations', function () {
        let stubFn: Simple.Stub<PromiseLike<string>>;
        beforeEach(function () {
          stubFn = simple.stub().resolveWith('a').resolveWith('b')
        })

        it('can return a promise', function (done) {
          let returned = stubFn()

          assert(returned)

          returned.then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 1)
            assert.equal(fulfilledStub.lastCall.arg, 'a')
            assert.equal(rejectedStub.callCount, 0)
            done()
          }, 0)
        })

        it('can return over multiple calls, looping per default', function (done) {
          stubFn().then(fulfilledStub, rejectedStub)
          stubFn().then(fulfilledStub, rejectedStub)
          stubFn().then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 3)
            assert.equal(fulfilledStub.calls[0].arg, 'a')
            assert.equal(fulfilledStub.calls[1].arg, 'b')
            assert.equal(fulfilledStub.calls[2].arg, 'a')
            assert.equal(rejectedStub.callCount, 0)
            done()
          }, 0)
        })
      })

      describe('with a single rejecting configuration', function () {
        let stubFn: Simple.Stub<PromiseLike<string>>;
        beforeEach(function () {
          stubFn = simple.stub().rejectWith('example')
        })

        it('can return a promise', function (done) {
          let returned = stubFn()

          assert(returned)

          returned.then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 0)
            assert.equal(rejectedStub.callCount, 1)
            assert.equal(rejectedStub.lastCall.arg, 'example')
            done()
          }, 0)
        })
      })

      describe('with a multiple rejecting configurations', function () {
        let stubFn: Simple.Stub<PromiseLike<string>>;
        beforeEach(function () {
          stubFn = simple.stub().rejectWith('a').rejectWith('b')
        })

        it('can return a promise', function (done) {
          let returned = stubFn()

          assert(returned)

          returned.then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 0)
            assert.equal(rejectedStub.callCount, 1)
            assert.equal(rejectedStub.lastCall.arg, 'a')
            done()
          }, 0)
        })

        it('can return over multiple calls, looping per default', function (done) {
          stubFn().then(fulfilledStub, rejectedStub)
          stubFn().then(fulfilledStub, rejectedStub)
          stubFn().then(fulfilledStub, rejectedStub)

          setTimeout(function () {
            assert.equal(fulfilledStub.callCount, 0)
            assert.equal(rejectedStub.callCount, 3)
            assert.equal(rejectedStub.calls[0].arg, 'a')
            assert.equal(rejectedStub.calls[1].arg, 'b')
            assert.equal(rejectedStub.calls[2].arg, 'a')
            done()
          }, 0)
        })
      })
    })
  })

  describe('mock()', function () {
    describe('on a object with prototype', function () {
      class ProtoKlass {
        protoValue: string = 'x'
        protoFn() {
          return 'x'
        }
      }

      let obj: any

      before(function () {
      })

      beforeEach(function () {
        obj = new ProtoKlass()
      })

      it('can mock instance values over its prototype\'s and restore', function () {
        simple.mock(obj, 'protoValue', 'y')
        assert.equal(obj.protoValue, 'y')
        simple.restore()
        assert.equal(obj.protoValue, 'x')
      })

      it('can mock with custom instance functions over its prototype\'s and restore', function () {
        simple.mock(obj, 'protoFn', function () {
          return 'y'
        })
        assert.equal(obj.protoFn(), 'y')
        assert(obj.protoFn.called)
        simple.restore()
        assert.equal(obj.protoFn(), 'x')
      })

      it('can mock with stubbed functions over its prototype\'s and restore', function () {
        simple.mock(obj, 'protoFn').returnWith('y')
        assert.equal(obj.protoFn(), 'y')
        assert(obj.protoFn.called)
        simple.restore()
        assert.equal(obj.protoFn(), 'x')
      })

      it('can mock with stubbed functions and prototype\'s original over its prototype\'s and restore', function () {
        simple.mock(obj, 'protoFn').returnWith('y').callOriginal().returnWith('z')
        assert.equal(obj.protoFn(), 'y')
        assert.equal(obj.protoFn(), 'x')
        assert.equal(obj.protoFn(), 'z')
        assert.equal(obj.protoFn.callCount, 3)
        simple.restore()
        assert.equal(obj.protoFn(), 'x')
      })
    })

    describe('on an anonymous object', function () {
      let obj: any
      beforeEach(function () {
        obj = {
          a: 'a',
          b: 'b',
          c: 'c',
          fnD: function () {
            return 'd'
          }
        }
      })

      it('can mock instance values and restore', function () {
        let beforeKeys = Object.keys(obj)
        simple.mock(obj, 'a', 'd')
        simple.mock(obj, 'd', 'a')
        assert.equal(obj.a, 'd')
        assert.equal(obj.d, 'a')
        simple.restore()
        assert.equal(obj.a, 'a')
        assert.equal(obj.d, undefined)
        assert.deepEqual(Object.keys(obj), beforeKeys)
      })

      it('can mock with spy on pre-existing functions and restore', function () {
        simple.mock(obj, 'fnD').returnWith('a')
        assert.equal(obj.fnD(), 'a')
        assert(obj.fnD.called)
        simple.restore()
        assert.equal(obj.fnD(), 'd')
      })

      it('can mock with newly stubbed functions and restore', function () {
        simple.mock(obj, 'fnA').returnWith('a')
        assert.equal(obj.fnA(), 'a')
        assert(obj.fnA.called)
        simple.restore()
        assert.equal(obj.fnA, undefined)
      })
    })

    describe('with one argument', function () {
      it('returns a spy', function () {
        let called = 0

        let spy = simple.mock(function () {
          called++
        })

        spy()
        assert.equal(called, 1)
        assert(spy.called)
      })
    })

    describe('with no arguments', function () {
      it('returns a stub', function () {
        let stub = simple.mock().returnWith('x')

        let x = stub()
        assert(stub.called)
        assert(x, 'x')
      })
    })
  })
})

simple.Promise = Bluebird;
