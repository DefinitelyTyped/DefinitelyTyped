// Type definitions for Jest 15.1.1
// Project: http://facebook.github.io/jest/
// Definitions by: Asana <https://asana.com>, Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare function afterEach(fn: () => any): void;
declare function beforeEach(fn: () => any): void;
declare function describe(name: string, fn: () => any): void;
declare function expect(actual: any): jest.Matchers;
declare function it(name: string, fn: () => any): void;
declare function fit(name: string, fn: () => any): void;

declare function test(name: string, fn: () => any): void;
declare function xdescribe(name: string, fn: () => any): void;
declare function xit(name: string, fn: () => any): void;

declare namespace jest {
    interface Matchers {
        lastCalledWith(...args: any[]): boolean;
        not: Matchers;
        toBe(expected: any): boolean;
        toBeCalled(): boolean;
        toBeCalledWith(...args: any[]): boolean;
        toBeCloseTo(expected: number, delta: number): boolean;
        toBeDefined(): boolean;
        toBeFalsy(): boolean;
        toBeGreaterThan(expected: number): boolean;
        toBeGreaterThanOrEqual(expected: number): boolean;
        toBeLessThan(expected: number): boolean;
        toBeLessThanOrEqual(expected: number): boolean;
        toBeNull(): boolean;
        toBeTruthy(): boolean;
        toBeUndefined(): boolean;
        toContain(expected: string): boolean;
        toEqual(expected: any): boolean;
        toMatch(expected: RegExp): boolean;
        toMatchSnapshot(): boolean;
        toThrow(): boolean;
        toThrowError(expected: string | RegExp): boolean;
        toThrowError<TFunction extends Function>(expected: TFunction): boolean;
    }
    
    interface MockContext<T> {
        calls: any[][];
        instances: T[];
    }

    interface Mock<T> {
        new (): T;
        (...args: any[]): any; // Making Mock Callable and fixing: Value of type 'Mock<T>' is not callable.
        mock: MockContext<T>;
        mockClear(): void;
        mockImplementation(fn: Function): Mock<T>;
        mockImplementationOnce(fn: Function): Mock<T>;
        mockReturnThis(): Mock<T>;
        mockReturnValue(value: any): Mock<T>;
        mockReturnValueOnce(value: any): Mock<T>;
    }
    
    function clearAllTimers(): void;
    function disableAutomock(): void;
    function enableAutomock(): void;
    function fn<T>(implementation?: Function): Mock<T>;
    function isMockFunction(fn: Function): boolean;
    function genMockFromModule<T>(moduleName: string): T;
    function mock(moduleName: string, factory?: Function, options?: {virtual: boolean}): void;
    function resetModules(): void;
    function runAllTicks(): void;
    function runAllTimers(): void;
    function runOnlyPendingTimers(): void;
    function setMock<T>(moduleName: string, moduleExports: T): void;
    function unmock(moduleName: string): void;
    function useFakeTimers(): void;
    function useRealTimers(): void;

    // taken from Jasmine which takes from TypeScript lib.core.es6.d.ts, applicable to CustomMatchers.contains()
    interface ArrayLike<T> {
        length: number;
        [n: number]: T;
    }
}

interface NodeRequire {
    requireActual(moduleName: string): any;
    requireMock(moduleName: string): any;
}
