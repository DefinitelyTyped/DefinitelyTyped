// Type definitions for Preamble-TS-Standalone
// Project: https://github.com/Preamble-BDD/standalone/
// Definitions by: Jeffrey Schwartz <https://github.com/jeffschwartz/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../q/Q.d.ts" />

declare interface IMatcher {
    apiName: string;
    api(...args: any[]): any;
    evaluator(expectedValue: any, matcherValue?: any): boolean;
    negator?: boolean;
    minArgs: number;
    maxArgs: number;
}

declare interface Preamble {
    registerMatcher(matcher: IMatcher): void;
    Q: typeof Q;
}

declare var preamble: Preamble;

declare function registerMatcher(matcher: IMatcher): void;

declare function describe(label: string, callback: () => void): void;

declare function xdescribe(label: string, callback: () => void): void;

declare function it(label: string, callback: (done?: () => void) => void, timeoutInterval?: number): void;

declare function xit(label: string, callback: (done?: () => void) => void, timeoutInterval?: number): void;

declare function beforeEach(callback: (done?: () => void) => void, timeoutInterval?: number): void;

declare function afterEach(callback: (done?: () => void) => void, timeoutInterval?: number): void;

declare function expect(ev: any): {
    toBe(matcherValue: any): void;
    toEqual(matcherValue: any): void;
    toBeTrue(): void;
    toBeTruthy(): void;
    toBeDefined(): void;
    toBeUndefined(): void;
    toBeNull(): void;
    toMatch(regExp: RegExp): void;
    toHaveBeenCalled(): void;
    toHaveBeenCalledWith(...matcherValue: any[]): void;
    toHaveBeenCalledWithContext(matcherValue: {}): void;
    toHaveReturnedValue(matcherValue: any): void;
    toHaveThrown(): void;
    toHaveThrownWithMessage(matcherValue: string): void;
    toHaveThrownWithName(matcherValue: string): void;
    // declare your custom matchers here
    toBeAString(): void;
    toBeANumber(): void;
    toBeInstanceOf(matcherValue: any): void
    not: {
        toBe(matcherValue: any): void;
        toEqual(matcherValue: any): void;
        toBeTrue(): void;
        toBeTruthy(): void;
        toBeDefined(): void;
        toBeUndefined(): void;
        toBeNull(): void;
        toHaveBeenCalled(): void;
        toHaveBeenCalledWith(...matcherValue: any[]): void;
        toHaveBeenCalledWithContext(matcherValue: {}): void;
        toHaveReturnedValue(matcherValue: any): void;
        toHaveThrown(): void;
        toHaveThrownWithMessage(matcherValue: string): void;
        toHaveThrownWithName(matcherValue: string): void;
        // declare your custom negated matchers here
        toBeAString(): void;
        toBeANumber(): void;
        toMatch(regExp: RegExp): void;
        toBeInstanceOf(matcherValue: any): void;
    }
};

declare function spyOn(...args: any[]): Spy;

declare interface StaticSpy {
    (...args: any[]): any;
}

declare interface And {
    reset: () => Spy;
    callWithContext: (context: {}) => Spy;
    throw: () => Spy;
    throwWithMessage: (message: string) => Spy;
    throwWithName: (name: string) => Spy;
    return: (ret: any) => Spy;
    callFake: (fn: (...args: any[]) => any) => Spy;
    callActual: () => Spy;
    callStub: () => Spy;
}

declare interface Calls {
    count: () => number;
    forCall: (i: number) => ACall;
    all: () => ACall[];
    wasCalledWith: (...args: any[]) => boolean;
    wasCalledWithContext: (obj: {}) => boolean;
    returned: (value: any) => boolean;
    threw: () => boolean;
    threwWithName: (name: string) => boolean;
    threwWithMessage: (message: string) => boolean;
}

declare interface Spy extends StaticSpy {
    _spyMaker: string;
    _returns: any;
    _callActual: boolean;
    _callFake: (...args: any[]) => any;
    _callWithContext: {};
    _throws: boolean;
    _throwsMessage: string;
    _throwsName: string;
    _hasExpectations: boolean;
    and: And;
    calls: Calls;
    validate: () => void;
    _resetCalls: () => void;
}

declare interface SpyOnStatic {
    (...args: any[]): Spy;
}

declare function spyOnN(argObject: {}, argPropertyNames: string[]): void;

// args API
declare class Args {
    args: any[];
    constructor(...args: any[]);
    getLength: () => number;
    hasArg: (i: number) => boolean;
    getArg: (i: number) => any;
    hasArgProperty: (i: number, propertyName: string) => boolean;
    getArgProperty: (i: number, propertyName: string) => string;
}

declare class ACall {
    constructor(context: {}, args: Args, error: Error, returned: any);
    getContext: () => {};
    getArgs: () => Args;
    getArg: (i: number) => any;
    getArgsLength: () => number;
    getArgProperty: (i: number, propertyName: string) => any;
    hasArgProperty: (i: number, propertyName: string) => boolean;
    hasArg: (i: number) => boolean;
    getError: () => Error;
    getReturned: () => any;
}

declare function mock(...args: any[]): Mock;

declare function validate(): void;

declare interface MockStatic {
    (...args: any[]): Mock;
}

declare interface MockProxyStatic {
    (...args: any[]): void;
}

declare interface Mock extends MockProxyStatic {
    and: MockAnd;
    validate: () => void;
}

declare interface MockAnd {
    expect: MockExpect;
    // since a mock is also a spy, these methods delegate to the spy property
    reset: () => Mock;
    callWithContext: (context: {}) => Mock;
    throw: () => Mock;
    throwWithMessage: (message: string) => Mock;
    throwWithName: (name: string) => Mock;
    return: (ret: any) => Mock;
    callFake: (fn: (...args: any[]) => any) => Mock;
    callActual: () => Mock;
    callStub: () => Mock;
}

declare interface MockExpect {
    it: MockIt;
}

declare interface MockIt {
    toBeCalled: () => Mock;
    toBeCalledWith: (...args: any[]) => Mock;
    toBeCalledWithContext: (context: {}) => Mock;
    toReturnValue: (value: any) => Mock;
    toThrow: () => Mock;
    toThrowWithName: (name: string) => Mock;
    toThrowWithMessage: (message: string) => Mock;
    not: MockNot;
}

declare interface MockNot {
    toBeCalled: () => Mock;
    toBeCalledWith: (...args: any[]) => Mock;
    toBeCalledWithContext: (context: {}) => Mock;
    toReturnValue: (value: any) => Mock;
    toThrow: () => Mock;
    toThrowWithName: (name: string) => Mock;
    toThrowWithMessage: (message: string) => Mock;
}
