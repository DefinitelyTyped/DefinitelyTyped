// Type definitions for mochaccino 1.2
// Project: https://github.com/pawelgalazka/mochaccino#readme
// Definitions by: Thomas-P <https://github.com/thomas-p>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="sinon" />


declare module 'mochaccino' {

    import * as Sinon from "sinon";

    interface Expect {
        not: Expect;

        toBe<T>(arg: T): void;

        toContain<T>(arg: T): void;

        toEqual<T>(arg: T): void;

        toHaveBeenCalled(): void;

        toHaveBeenCalledWith(...arg: any[]): void;

        toHaveBeenCalledTimes(callCount: number): void;

        toBeDefined(): void;

        toBeUndefined(): void;

        toBeNull(): void;

        toBeTruthy(): void;

        toBeFalsy(): void;

        toBeLessThan(other: number): void;

        toBeGreaterThan(other: number): void;

        toThrow(): void;

        toThrowError<T>(errType: T): void;

        toMatch<T>(matchExpression: T): void;
    }


    interface SpyProxy {
        and: SpyProxy;
        spyProxy: true;
        getSubject: () => Sinon.SinonStub;
        callThrough: () => void;
        returnValue: (obj: any) => void;
        callFake: (fake: Function) => void;
    }

    interface Dom {
        exposedProperties: ['window', 'navigator', 'document'];
        create: () => void;
        destroy: () => void;
        clear: () => void;
    }

    export function expect<T>(value: T): Expect;

    export function spy(...config: any[]): (...args: any[]) => SpyProxy;

    export const dom: Dom;
}
