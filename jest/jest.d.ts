// Type definitions for Jest 0.1.18
// Project: http://facebook.github.io/jest/
// Definitions by: Phips Peter <https://github.com/pspeter3/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function describe(name: string, fn: jest.EmptyFunction): void;
declare function expect(actual: any): jest.Matchers;
declare var it: jest.It;
declare var require: jest.Require;

declare module jest {
    function autoMockOff(): void;
    function autoMockOn(): void;
    function clearAllTimers(): void;
    function dontMock(moduleName: string): void;
    function genMockFromModule(moduleName: string): Mock;
    function genMockFunction(): Mock;
    function genMockFn(): Mock;
    function mock(moduleName: string): void;
    function runAllTicks(): void;
    function runAllTimers(): void;

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

    interface Mock {
        mock: MockContext;
        mockClear(): void;
        mockImplementation(fn: Function): void;
        mockImpl(fn: Function): void;
        mockReturnThis(): void;
        mockReturnValue(value: any): void;
        mockReturnValueOnce(value: any): void;
    }

    interface MockContext {
        calls: any[][];
        instances: any[][];
    }
}