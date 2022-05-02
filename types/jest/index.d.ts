// Type definitions for Jest 27.4
// Project: https://jestjs.io/
// Definitions by: Asana (https://asana.com)
//                 Ivo Stratev <https://github.com/NoHomey>
//                 jwbay <https://github.com/jwbay>
//                 Alexey Svetliakov <https://github.com/asvetliakov>
//                 Alex Jover Morales <https://github.com/alexjoverm>
//                 Allan Lukwago <https://github.com/epicallan>
//                 Ika <https://github.com/ikatyang>
//                 Waseem Dahman <https://github.com/wsmd>
//                 Jamie Mason <https://github.com/JamieMason>
//                 Douglas Duteil <https://github.com/douglasduteil>
//                 Ahn <https://github.com/ahnpnl>
//                 Jeff Lau <https://github.com/UselessPickles>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Martin Hochel <https://github.com/hotell>
//                 Sebastian Sebald <https://github.com/sebald>
//                 Andy <https://github.com/andys8>
//                 Antoine Brault <https://github.com/antoinebrault>
//                 Gregor Stamać <https://github.com/gstamac>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Alex Bolenok <https://github.com/quassnoi>
//                 Mario Beltrán Alarcón <https://github.com/Belco90>
//                 Tony Hallett <https://github.com/tonyhallett>
//                 Jason Yu <https://github.com/ycmjason>
//                 Devansh Jethmalani <https://github.com/devanshj>
//                 Pawel Fajfer <https://github.com/pawfa>
//                 Regev Brody <https://github.com/regevbr>
//                 Alexandre Germain <https://github.com/gerkindev>
//                 Adam Jones <https://github.com/domdomegg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

declare var beforeAll: typeof import('@jest/globals').beforeAll;
declare var beforeEach: typeof import('@jest/globals').beforeEach;
declare var afterAll: typeof import('@jest/globals').afterAll;
declare var afterEach: typeof import('@jest/globals').afterEach;
declare var describe: typeof import('@jest/globals').describe;
declare var fdescribe: typeof import('@jest/globals').fdescribe;
declare var xdescribe: typeof import('@jest/globals').xdescribe;
declare var it: typeof import('@jest/globals').it;
declare var fit: typeof import('@jest/globals').fit;
declare var xit: typeof import('@jest/globals').xit;
declare var test: typeof import('@jest/globals').test;
declare var xtest: typeof import('@jest/globals').xtest;

declare const expect: typeof import('@jest/globals').expect;

declare const jest: typeof import('@jest/globals').jest;

// Jest ships with a copy of Jasmine. They monkey-patch its APIs and divergence/deprecation are expected.
// Relevant parts of Jasmine's API are below so they can be changed and removed over time.
// This file can't reference jasmine.d.ts since the globals aren't compatible.

declare function spyOn<T>(object: T, method: keyof T): jasmine.Spy;
/**
 * If you call the function pending anywhere in the spec body,
 * no matter the expectations, the spec will be marked pending.
 */
declare function pending(reason?: string): void;
/**
 * Fails a test when called within one.
 */
declare function fail(error?: any): never;
declare namespace jasmine {
    let DEFAULT_TIMEOUT_INTERVAL: number;
    function clock(): Clock;
    function any(aclass: any): Any;
    function anything(): Any;
    function arrayContaining(sample: any[]): ArrayContaining;
    function objectContaining(sample: any): ObjectContaining;
    function createSpy(name?: string, originalFn?: (...args: any[]) => any): Spy;
    function createSpyObj(baseName: string, methodNames: any[]): any;
    // tslint:disable-next-line: no-unnecessary-generics
    function createSpyObj<T>(baseName: string, methodNames: any[]): T;
    function pp(value: any): string;
    function addCustomEqualityTester(equalityTester: CustomEqualityTester): void;
    function stringMatching(value: string | RegExp): Any;

    interface Clock {
        install(): void;
        uninstall(): void;
        /**
         * Calls to any registered callback are triggered when the clock isticked forward
         * via the jasmine.clock().tick function, which takes a number of milliseconds.
         */
        tick(ms: number): void;
        mockDate(date?: Date): void;
    }

    interface Any {
        new (expectedClass: any): any;
        jasmineMatches(other: any): boolean;
        jasmineToString(): string;
    }

    interface ArrayContaining {
        new (sample: any[]): any;
        asymmetricMatch(other: any): boolean;
        jasmineToString(): string;
    }

    interface ObjectContaining {
        new (sample: any): any;
        jasmineMatches(other: any, mismatchKeys: any[], mismatchValues: any[]): boolean;
        jasmineToString(): string;
    }

    interface Spy {
        (...params: any[]): any;
        identity: string;
        and: SpyAnd;
        calls: Calls;
        mostRecentCall: { args: any[] };
        argsForCall: any[];
        wasCalled: boolean;
    }

    interface SpyAnd {
        /**
         * By chaining the spy with and.callThrough, the spy will still track all
         * calls to it but in addition it will delegate to the actual implementation.
         */
        callThrough(): Spy;
        /**
         * By chaining the spy with and.returnValue, all calls to the function
         * will return a specific value.
         */
        returnValue(val: any): Spy;
        /**
         * By chaining the spy with and.returnValues, all calls to the function
         * will return specific values in order until it reaches the end of the return values list.
         */
        returnValues(...values: any[]): Spy;
        /**
         * By chaining the spy with and.callFake, all calls to the spy
         * will delegate to the supplied function.
         */
        callFake(fn: (...args: any[]) => any): Spy;
        /**
         * By chaining the spy with and.throwError, all calls to the spy
         * will throw the specified value.
         */
        throwError(msg: string): Spy;
        /**
         * When a calling strategy is used for a spy, the original stubbing
         * behavior can be returned at any time with and.stub.
         */
        stub(): Spy;
    }

    interface Calls {
        /**
         * By chaining the spy with calls.any(),
         * will return false if the spy has not been called at all,
         * and then true once at least one call happens.
         */
        any(): boolean;
        /**
         * By chaining the spy with calls.count(),
         * will return the number of times the spy was called
         */
        count(): number;
        /**
         * By chaining the spy with calls.argsFor(),
         * will return the arguments passed to call number index
         */
        argsFor(index: number): any[];
        /**
         * By chaining the spy with calls.allArgs(),
         * will return the arguments to all calls
         */
        allArgs(): any[];
        /**
         * By chaining the spy with calls.all(), will return the
         * context (the this) and arguments passed all calls
         */
        all(): CallInfo[];
        /**
         * By chaining the spy with calls.mostRecent(), will return the
         * context (the this) and arguments for the most recent call
         */
        mostRecent(): CallInfo;
        /**
         * By chaining the spy with calls.first(), will return the
         * context (the this) and arguments for the first call
         */
        first(): CallInfo;
        /**
         * By chaining the spy with calls.reset(), will clears all tracking for a spy
         */
        reset(): void;
    }

    interface CallInfo {
        /**
         * The context (the this) for the call
         */
        object: any;
        /**
         * All arguments passed to the call
         */
        args: any[];
        /**
         * The return value of the call
         */
        returnValue: any;
    }

    interface CustomMatcherFactories {
        [index: string]: CustomMatcherFactory;
    }

    type CustomMatcherFactory = (util: MatchersUtil, customEqualityTesters: CustomEqualityTester[]) => CustomMatcher;

    interface MatchersUtil {
        equals(a: any, b: any, customTesters?: CustomEqualityTester[]): boolean;
        // tslint:disable-next-line: no-unnecessary-generics
        contains<T>(haystack: ArrayLike<T> | string, needle: any, customTesters?: CustomEqualityTester[]): boolean;
        buildFailureMessage(matcherName: string, isNot: boolean, actual: any, ...expected: any[]): string;
    }

    type CustomEqualityTester = (first: any, second: any) => boolean;

    interface CustomMatcher {
        compare<T>(actual: T, expected: T, ...args: any[]): CustomMatcherResult;
        compare(actual: any, ...expected: any[]): CustomMatcherResult;
    }

    interface CustomMatcherResult {
        pass: boolean;
        message: string | (() => string);
    }

    interface ArrayLike<T> {
        length: number;
        [n: number]: T;
    }
}
