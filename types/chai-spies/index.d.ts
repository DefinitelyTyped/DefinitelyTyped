// Type definitions for chai-spies
// Project: https://github.com/chaijs/chai-spies
// Definitions by: Ilya Kuznetsov <https://github.com/kuzn-ilya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />

declare namespace Chai {
    interface ChaiStatic {
        spy: ChaiSpies.Spy;
    }

    interface Assertion {
        /**
         * ####.spy
         * Asserts that object is a spy.
         * ```ts
         * expect(spy).to.be.spy;
         * spy.should.be.spy;
         * ``` 
         */
        spy: Assertion;

        /**
         * ####.called
         * Assert that a spy has been called. Negation passes through.
         * ```ts
         * expect(spy).to.have.been.called();
         * spy.should.have.been.called();
         * ```
         * Note that ```called``` can be used as a chainable method.  
         */
        called: ChaiSpies.Called;
    }
}

declare namespace ChaiSpies {

    interface Spy {
        /**
         * #### chai.spy (function)
         *
         * Wraps a function in a proxy function. All calls will pass through to the original function.
         * ```ts
         * function original() {}
         * var spy = chai.spy(original)
         *   , e_spy = chai.spy();
         * ```
         * @param fn function to spy on. @default ```function () {}``` 
         * @returns function to actually call
         */ 
        (): SpyFunc0Proxy<void>;
        <R>(fn: SpyFunc0<R>): SpyFunc0Proxy<R>;
        <A1, R>(fn: SpyFunc1<A1, R>): SpyFunc1Proxy<A1, R>;
        <A1, A2, R>(fn: SpyFunc2<A1, A2, R>): SpyFunc2Proxy<A1, A2, R>;
        <A1, A2, A3, R>(fn: SpyFunc3<A1, A2, A3, R>): SpyFunc3Proxy<A1, A2, A3, R>;
        <A1, A2, A3, A4, R>(fn: SpyFunc4<A1, A2, A3, A4, R>): SpyFunc4Proxy<A1, A2, A3, A4, R>;
        <A1, A2, A3, A4, A5, R>(fn: SpyFunc5<A1, A2, A3, A4, A5, R>): SpyFunc5Proxy<A1, A2, A3, A4, A5, R>;
        <A1, A2, A3, A4, A5, A6, R>(fn: SpyFunc6<A1, A2, A3, A4, A5, A6, R>): SpyFunc6Proxy<A1, A2, A3, A4, A5, A6, R>;
        <A1, A2, A3, A4, A5, A6, A7, R>(fn: SpyFunc7<A1, A2, A3, A4, A5, A6, A7, R>): SpyFunc7Proxy<A1, A2, A3, A4, A5, A6, A7, R>;
        <A1, A2, A3, A4, A5, A6, A7, A8, R>(fn: SpyFunc8<A1, A2, A3, A4, A5, A6, A7, A8, R>): SpyFunc8Proxy<A1, A2, A3, A4, A5, A6, A7, A8, R>;
        <A1, A2, A3, A4, A5, A6, A7, A8, A9, R>(fn: SpyFunc9<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>): SpyFunc9Proxy<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>;
        <A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>(fn: SpyFunc10<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>): SpyFunc10Proxy<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>;
        <R>(name: string, fn: SpyFunc0<R>): SpyFunc0Proxy<R>;
        <A1, R>(name: string, fn: SpyFunc1<A1, R>): SpyFunc1Proxy<A1, R>;
        <A1, A2, R>(name: string, fn: SpyFunc2<A1, A2, R>): SpyFunc2Proxy<A1, A2, R>;
        <A1, A2, A3, R>(name: string, fn: SpyFunc3<A1, A2, A3, R>): SpyFunc3Proxy<A1, A2, A3, R>;
        <A1, A2, A3, A4, R>(name: string, fn: SpyFunc4<A1, A2, A3, A4, R>): SpyFunc4Proxy<A1, A2, A3, A4, R>;
        <A1, A2, A3, A4, A5, R>(name: string, fn: SpyFunc5<A1, A2, A3, A4, A5, R>): SpyFunc5Proxy<A1, A2, A3, A4, A5, R>;
        <A1, A2, A3, A4, A5, A6, R>(name: string, fn: SpyFunc6<A1, A2, A3, A4, A5, A6, R>): SpyFunc6Proxy<A1, A2, A3, A4, A5, A6, R>;
        <A1, A2, A3, A4, A5, A6, A7, R>(name: string, fn: SpyFunc7<A1, A2, A3, A4, A5, A6, A7, R>): SpyFunc7Proxy<A1, A2, A3, A4, A5, A6, A7, R>;
        <A1, A2, A3, A4, A5, A6, A7, A8, R>(name: string, fn: SpyFunc8<A1, A2, A3, A4, A5, A6, A7, A8, R>): SpyFunc8Proxy<A1, A2, A3, A4, A5, A6, A7, A8, R>;
        <A1, A2, A3, A4, A5, A6, A7, A8, A9, R>(name: string, fn: SpyFunc9<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>): SpyFunc9Proxy<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>;
        <A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>(name: string, fn: SpyFunc10<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>): SpyFunc10Proxy<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>;

        /**
         * #### chai.spy.on (function)
         *
         * Wraps an object method into spy. All calls will pass through to the original function.
         * ```ts
         * var spy = chai.spy.on(Array, 'isArray');
         * ```
         * @param {Object} object
         * @param {String} method name to spy on
         * @returns function to actually call
         */ 
        on(object: Object, ...methodNames: string[]): any;

        /**
         * #### chai.spy.object (function)
         *
         * Creates an object with spied methods.
         * ```ts
         * var object = chai.spy.object('Array', [ 'push', 'pop' ]);
         * ```
         * @param {String} [name] object name
         * @param {String[]|Object} method names or method definitions
         * @returns object with spied methods
         */
        object(name: string, methods: string[]): any;           
        object(methods: string[]): any;           
        object<T>(name: string, methods: T): T;           
        object<T>(methods: T): T;           

        /**
         * #### chai.spy.returns (function)
         *
         * Creates a spy which returns static value.
         *```ts
         *      var method = chai.spy.returns(true);
         *```
         * @param {*} value static value which is returned by spy
         * @returns new spy function which returns static value
         * @api public
         */

        returns<T>(value: T): SpyFunc0Proxy<T>;
    }

    interface Called {
        (): Chai.Assertion;
        with: With;
        always: Always;

        /**
         * ####.once
         * Assert that a spy has been called exactly once.
         * ```ts
         * expect(spy).to.have.been.called.once;
         * expect(spy).to.not.have.been.called.once;
         * spy.should.have.been.called.once;
         * spy.should.not.have.been.called.once;
         * ```
         */
        once: Chai.Assertion; 

        /**
         * ####.twice
         * Assert that a spy has been called exactly twice.
         * ```ts 
         * expect(spy).to.have.been.called.twice;
         * expect(spy).to.not.have.been.called.twice;
         * spy.should.have.been.called.twice;
         * spy.should.not.have.been.called.twice;
         * ```
         */
        twice: Chai.Assertion;

        /**
         * ####.exactly(n)
         * Assert that a spy has been called exactly ```n``` times.
         * ```ts
         * expect(spy).to.have.been.called.exactly(3);
         * expect(spy).to.not.have.been.called.exactly(3);
         * spy.should.have.been.called.exactly(3);
         * spy.should.not.have.been.called.exactly(3);
         * ```
         */
        exactly(n: number): Chai.Assertion;

        /**
         * ####.min(n) / .at.least(n)
         * Assert that a spy has been called minimum of ```n``` times.
         * ```ts
         * expect(spy).to.have.been.called.min(3);
         * expect(spy).to.not.have.been.called.at.least(3);
         * spy.should.have.been.called.at.least(3);
         * spy.should.not.have.been.called.min(3);
         * ```
         */
        min(n: number): Chai.Assertion;

        /**
         * ####.max(n) / .at.most(n)
         * Assert that a spy has been called maximum of ```n``` times.
         * ```ts
         * expect(spy).to.have.been.called.max(3);
         * expect(spy).to.not.have.been.called.at.most(3);
         * spy.should.have.been.called.at.most(3);
         * spy.should.not.have.been.called.max(3);
         * ```
         */
        max(n: number): Chai.Assertion;

        at: At;
        /**
         * ####.above(n) / .gt(n)
         * Assert that a spy has been called more than ```n``` times.
         * ```ts
         * expect(spy).to.have.been.called.above(3);
         * spy.should.not.have.been.called.above(3);
         * ``` 
         */
        above(n: number): Chai.Assertion;

        /**
         * ####.above(n) / .gt(n)
         * Assert that a spy has been called more than ```n``` times.
         * ```ts
         * expect(spy).to.have.been.called.gt(3);
         * spy.should.not.have.been.called.gt(3);
         * ``` 
         */
        gt(n: number): Chai.Assertion;

        /**
         * ####.below(n) / .lt(n)
         * Assert that a spy has been called fewer than ```n``` times.
         * ```ts
         * expect(spy).to.have.been.called.below(3);
         * spy.should.not.have.been.called.below(3);
         * ```   
         */
        below(n: number): Chai.Assertion;

        /**
         * ####.below(n) / .lt(n)
         * Assert that a spy has been called fewer than ```n``` times.
         * ```ts
         * expect(spy).to.have.been.called.lt(3);
         * spy.should.not.have.been.called.lt(3);
         * ```   
         */
        lt(n: number): Chai.Assertion;
    }

    interface With {
        /**
         * ####.with
         * Assert that a spy has been called with a given argument at least once, even if more arguments were provided.
         * ```ts
         * spy('foo');
         * expect(spy).to.have.been.called.with('foo');
         * spy.should.have.been.called.with('foo');
         * ```
         * Will also pass for ```spy('foo', 'bar')``` and ```spy(); spy('foo')```.
         * If used with multiple arguments, assert that a spy has been called with all the given arguments at least once.  
         * ```ts
         * spy('foo', 'bar', 1);
         * expect(spy).to.have.been.called.with('bar', 'foo');
         * spy.should.have.been.called.with('bar', 'foo');
         * ```
         */
        (a: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any): Chai.Assertion;

        /**
         * ####.with.exactly
         * Similar to .with, but will pass only if the list of arguments is exactly the same as the one provided.
         * ```ts
         * spy();
         * spy('foo', 'bar');
         * expect(spy).to.have.been.called.with.exactly('foo', 'bar');
         * spy.should.have.been.called.with.exactly('foo', 'bar');
         * ```
         * Will not pass for ```spy('foo')```, ```spy('bar')```, ```spy('bar'); spy('foo')```, ```spy('foo'); spy('bar')```, ```spy('bar', 'foo')``` or ```spy('foo', 'bar', 1)```.
         * Can be used for calls with a single argument too.
         */

        exactly(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any): Chai.Assertion;
    }

    interface Always {
        with: AlwaysWith;
    }

    interface AlwaysWith {
        /**
         * ####.always.with
         * Assert that every time the spy has been called the argument list contained the given arguments.
         * ```ts
         * spy('foo');
         * spy('foo', 'bar');
         * spy(1, 2, 'foo');
         * expect(spy).to.have.been.called.always.with('foo');
         * spy.should.have.been.called.always.with('foo');
         * ```
         */
        (a: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any): Chai.Assertion;

        /**
         * ####.always.with.exactly
         * Assert that the spy has never been called with a different list of arguments than the one provided.
         * ```ts
         * spy('foo');
         * spy('foo');
         * expect(spy).to.have.been.called.always.with.exactly('foo');
         * spy.should.have.been.called.always.with.exactly('foo');
         * ```
         */
        exactly(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any): Chai.Assertion;
    }

    interface At {
        /**
         * ####.min(n) / .at.least(n)
         * Assert that a spy has been called minimum of ```n``` times.
         * ```ts
         * expect(spy).to.have.been.called.min(3);
         * expect(spy).to.not.have.been.called.at.least(3);
         * spy.should.have.been.called.at.least(3);
         * spy.should.not.have.been.called.min(3);
         * ```
         */
        least(n: number): Chai.Assertion;

        /**
         * ####.max(n) / .at.most(n)
         * Assert that a spy has been called maximum of ```n``` times.
         * ```ts
         * expect(spy).to.have.been.called.max(3);
         * expect(spy).to.not.have.been.called.at.most(3);
         * spy.should.have.been.called.at.most(3);
         * spy.should.not.have.been.called.max(3);
         * ```
         */
        most(n: number): Chai.Assertion;
    }

    interface Resetable {
        /**
         * #### proxy.reset (function)
         *
         * Resets __spy object parameters for instantiation and reuse
         * @returns proxy spy object
         */ 
        reset(): this;
    }

    interface SpyFunc0<R> {
        (): R;
    }

    interface SpyFunc1<A1, R> { 
        (a: A1): R; 
    }

    interface SpyFunc2<A1, A2, R> { 
        (a: A1, b: A2): R; 
    }

    interface SpyFunc3<A1, A2, A3, R> { 
        (a: A1, b: A2, c: A3): R; 
    }

    interface SpyFunc4<A1, A2, A3, A4, R> { 
        (a: A1, b: A2, c: A3, d: A4): R; 
    }

    interface SpyFunc5<A1, A2, A3, A4, A5, R> { 
        (a: A1, b: A2, c: A3, d: A4, e: A5): R; 
    }

    interface SpyFunc6<A1, A2, A3, A4, A5, A6, R> { 
        (a: A1, b: A2, c: A3, d: A4, e: A5, f: A6): R; 
    }

    interface SpyFunc7<A1, A2, A3, A4, A5, A6, A7, R> { 
        (a: A1, b: A2, c: A3, d: A4, e: A5, f: A6, g: A7): R; 
    }

    interface SpyFunc8<A1, A2, A3, A4, A5, A6, A7, A8, R> { 
        (a: A1, b: A2, c: A3, d: A4, e: A5, f: A6, g: A7, h: A8): R; 
    }
    
    interface SpyFunc9<A1, A2, A3, A4, A5, A6, A7, A8, A9, R> { 
        (a: A1, b: A2, c: A3, d: A4, e: A5, f: A6, g: A7, h: A8, i: A9): R; 
    }
    
    interface SpyFunc10<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R> { 
        (a: A1, b: A2, c: A3, d: A4, e: A5, f: A6, g: A7, h: A8, i: A9, j: A10): R; 
    }

    interface SpyFunc0Proxy<R> extends SpyFunc0<R>, Resetable {
    }

    interface SpyFunc1Proxy<A1, R> extends SpyFunc1<A1, R>, Resetable { 
    }

    interface SpyFunc2Proxy<A1, A2, R> extends SpyFunc2<A1, A2, R>, Resetable { 
    }

    interface SpyFunc3Proxy<A1, A2, A3, R> extends SpyFunc3<A1, A2, A3, R>, Resetable { 
    }

    interface SpyFunc4Proxy<A1, A2, A3, A4, R> extends SpyFunc4<A1, A2, A3, A4, R>, Resetable { 
    }

    interface SpyFunc5Proxy<A1, A2, A3, A4, A5, R> extends SpyFunc5<A1, A2, A3, A4, A5, R>, Resetable { 
    }

    interface SpyFunc6Proxy<A1, A2, A3, A4, A5, A6, R> extends SpyFunc6<A1, A2, A3, A4, A5, A6, R>, Resetable { 
    }

    interface SpyFunc7Proxy<A1, A2, A3, A4, A5, A6, A7, R> extends SpyFunc7<A1, A2, A3, A4, A5, A6, A7, R>, Resetable { 
    }

    interface SpyFunc8Proxy<A1, A2, A3, A4, A5, A6, A7, A8, R> extends SpyFunc8<A1, A2, A3, A4, A5, A6, A7, A8, R>, Resetable { 
    }
    
    interface SpyFunc9Proxy<A1, A2, A3, A4, A5, A6, A7, A8, A9, R> extends SpyFunc9<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>, Resetable { 
    }
    
    interface SpyFunc10Proxy<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R> extends SpyFunc10<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>, Resetable { 
    }
}

declare var spies: ChaiSpies.Spy;

declare module "chai-spies" {
    export = spies;
}
