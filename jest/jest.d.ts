// Type definitions for Jest 0.1.18
// Project: http://facebook.github.io/jest/
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function afterEach(fn: jest.EmptyFunction): void;
declare function beforeEach(fn: jest.EmptyFunction): void;
declare function describe(name: string, fn: jest.EmptyFunction): void;
declare var it: jest.It;
declare function pit(name: string, fn: jest.EmptyFunction): void;
declare var require: jest.Require;
declare function xdescribe(name: string, fn: jest.EmptyFunction): void;
declare function xit(name: string, fn: jest.EmptyFunction): void;

declare function expect(actual: any): jest.Matchers;

declare module jest {
    function autoMockOff(): void;
    function autoMockOn(): void;
    function clearAllTimers(): void;
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
        toBeUndefined(): boolean;
        toMatch(expected: RegExp): boolean;
        toContain(expected: string): boolean;
        toBeCloseTo(expected: number, delta: number): boolean;
        toBeGreaterThen(expected: number): boolean;
        toBeLessThen(expected: number): boolean;
        toBeCalled(): boolean;
        toBeCalledWith(...args: any[]): boolean;
        lastCalledWith(...args: any[]): boolean;
    }

    interface It {
        (name: string, fn: EmptyFunction): void;
        only(name: string, fn: EmptyFunction): void;
    }

    interface Require {
        (moduleName: string): any;
        requireActual(moduleName: string): any;
    }

    interface Mock<T> {
        new(): T;
        (...args:any[]): any; // TODO please fix this line! added for TypeScript 1.1.0-1 https://github.com/borisyankov/DefinitelyTyped/pull/2932
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
}