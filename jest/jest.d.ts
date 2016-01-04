// Type definitions for Jest 0.1.18
// Project: http://facebook.github.io/jest/
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare function afterEach(fn: jest.EmptyFunction): void;
declare function beforeEach(fn: jest.EmptyFunction): void;
declare function describe(name: string, fn: jest.EmptyFunction): void;
declare var it: jest.It;
declare function pit(name: string, fn: jest.EmptyFunction): void;

declare function xdescribe(name: string, fn: jest.EmptyFunction): void;
declare function xit(name: string, fn: jest.EmptyFunction): void;

declare function expect(actual: any): jest.Matchers;

interface NodeRequire {
    requireActual(moduleName: string): any;
}

declare module jest {
    function addMatchers(matchers: CustomMatcherFactories): void;
    function autoMockOff(): void;
    function autoMockOn(): void;
    function clearAllTimers(): void;
    function currentTestPath(): string;
    function dontMock(moduleName: string): void;
    function genMockFromModule<T>(moduleName: string): Mock<T>;
    function genMockFunction<T>(): Mock<T>;
    function genMockFn<T>(): Mock<T>;
    function mock(moduleName: string): void;
    function runAllTicks(): void;
    function runAllTimers(): void;
    function runOnlyPendingTimers(): void;
    function setMock<T>(moduleName: string, moduleExports: T): void;

    interface EmptyFunction {
        (): void;
    }

    interface Matchers {
        not: Matchers;
        toThrow(expected?: any): boolean;
        toBe(expected: any): boolean;
        toEqual(expected: any): boolean;
        toBeFalsy(): boolean;
        toBeTruthy(): boolean;
        toBeNull(): boolean;
        toBeDefined(): boolean;
        toBeUndefined(): boolean;
        toMatch(expected: RegExp): boolean;
        toContain(expected: string): boolean;
        toBeCloseTo(expected: number, delta: number): boolean;
        toBeGreaterThan(expected: number): boolean;
        toBeLessThen(expected: number): boolean;
        toBeCalled(): boolean;
        toBeCalledWith(...args: any[]): boolean;
        lastCalledWith(...args: any[]): boolean;
    }

    interface It {
        (name: string, fn: EmptyFunction): void;
        only(name: string, fn: EmptyFunction): void;
    }

    interface Mock<T> {
        new (): T;
        (...args: any[]): any; // TODO please fix this line! added for TypeScript 1.1.0-1 https://github.com/borisyankov/DefinitelyTyped/pull/2932
        mock: MockContext<T>;
        mockClear(): void;
        mockImplementation(fn: Function): Mock<T>;
        mockImpl(fn: Function): Mock<T>;
        mockReturnThis(): Mock<T>;
        mockReturnValue(value: any): Mock<T>;
        mockReturnValueOnce(value: any): Mock<T>;
    }

    interface MockContext<T> {
        calls: any[][];
        instances: T[];
    }

    // taken from Jasmine since addMatchers calls into the jasmine api
    interface CustomMatcherFactories {
        [index: string]: CustomMatcherFactory;
    }

    // taken from Jasmine since addMatchers calls into the jasmine api
    interface CustomMatcherFactory {
        (util: MatchersUtil, customEqualityTesters: Array<CustomEqualityTester>): CustomMatcher;
    }

    // taken from Jasmine since addMatchers calls into the jasmine api
    interface MatchersUtil {
        equals(a: any, b: any, customTesters?: Array<CustomEqualityTester>): boolean;
        contains<T>(haystack: ArrayLike<T> | string, needle: any, customTesters?: Array<CustomEqualityTester>): boolean;
        buildFailureMessage(matcherName: string, isNot: boolean, actual: any, ...expected: Array<any>): string;
    }

    // taken from Jasmine since addMatchers calls into the jasmine api
    interface CustomEqualityTester {
        (first: any, second: any): boolean;
    }

    // taken from Jasmine since addMatchers calls into the jasmine api
    interface CustomMatcher {
        compare<T>(actual: T, expected: T): CustomMatcherResult;
        compare(actual: any, expected: any): CustomMatcherResult;
    }

    // taken from Jasmine since addMatchers calls into the jasmine api
    interface CustomMatcherResult {
        pass: boolean;
        message: string;
    }

    // taken from Jasmine which takes from TypeScript lib.core.es6.d.ts, applicable to CustomMatchers.contains()
    interface ArrayLike<T> {
        length: number;
        [n: number]: T;
    }
}
