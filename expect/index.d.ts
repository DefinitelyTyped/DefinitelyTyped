// Type definitions for Expect 1.20
// Project: https://github.com/mjackson/expect
// Definitions by: Justin Reidy <https://github.com/jmreidy/>, Risto Keravuori <https://github.com/merrywhether/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace expect {
    export type CompareValues<T> = (a: T, b: T) => boolean;
    export type Comparator = (target: {}, key: string) => boolean;
    export type KeyType = string | number;

    export class Expectation<T> {
        constructor(actual: any);
        toExist(message?: string): Expectation<T>;
        toBeTruthy(message?: string): Expectation<T>;
        toNotExist(message?: string): Expectation<T>;
        toBeFalsy(message?: string): Expectation<T>;

        toBe(value: T, message?: string): Expectation<T>;
        toNotBe(value: any, message?: string): Expectation<T>;
        toEqual(value: any, message?: string): Expectation<T>;
        toNotEqual(value: any, message?: string): Expectation<T>;
        toThrow(error?: {}, message?: string): Expectation<T>;
        toNotThrow(error?: {}, message?: string): Expectation<T>;

        toBeA(value: string | {}, message?: string): Expectation<T>;
        toBeAn(value: string | {}, message?: string): Expectation<T>;
        toNotBeA(value: string | {}, message?: string): Expectation<T>;
        toNotBeAn(value: string | {}, message?: string): Expectation<T>;
        toMatch(value: string | RegExp | {}, message?: string): Expectation<T>;
        toNotMatch(value: string | RegExp | {}, message?: string): Expectation<T>;

        toBeLessThan(value: number, message?: string): Expectation<T>;
        toBeLessThanOrEqualTo(value: number, messasge?: string): Expectation<T>;
        toBeFewerThan(value: number, message?: string): Expectation<T>;
        toBeGreaterThan(value: number, message?: string): Expectation<T>;
        toBeGreaterThanOrEqualTo(value: number, messasge?: string): Expectation<T>;
        toBeMoreThan(value: number, message?: string): Expectation<T>;

        toInclude<U>(value: any, compareValues?: CompareValues<U>, message?: string): Expectation<T>;
        toContain<U>(value: any, compareValues?: CompareValues<U>, message?: string): Expectation<T>;
        toExclude<U>(value: any, compareValues?: CompareValues<U>, message?: string): Expectation<T>;
        toNotContain<U>(value: any, compareValues?: CompareValues<U>, message?: string): Expectation<T>;

        toIncludeKeys(keys: KeyType[], comparator?: Comparator, message?: string): Expectation<T>;
        toContainKeys(keys: KeyType[], comparator?: Comparator, message?: string): Expectation<T>;
        toExcludeKeys(keys: KeyType[], comparator?: Comparator, message?: string): Expectation<T>;
        toNotContainKeys(keys: KeyType[], comparator?: Comparator, message?: string): Expectation<T>;
        toNotIncludeKeys(keys: KeyType[], comparator?: Comparator, message?: string): Expectation<T>;
        toIncludeKey(key: KeyType, comparator?: Comparator, message?: string): Expectation<T>;
        toContainKey(key: KeyType, comparator?: Comparator, message?: string): Expectation<T>;
        toExcludeKey(key: KeyType, comparator?: Comparator, message?: string): Expectation<T>;
        toNotContainKey(key: KeyType, comparator?: Comparator, message?: string): Expectation<T>;
        toNotIncludeKey(key: KeyType, comparator?: Comparator, message?: string): Expectation<T>;

        toHaveBeenCalled(message?: string): Expectation<T>;
        toNotHaveBeenCalled(message?: string): Expectation<T>;
        toHaveBeenCalledWith(...args: any[]): Expectation<T>;

        // deprecated
        withContext(context: any): Expectation<T>;
        withArgs(...args: any[]): Expectation<T>;
    }

    export interface Extension {
        [name: string]: (args?: any[]) => void;
    }

    export interface Call<T> {
        context: T;
        arguments: any[];
    }

    export interface Spy<T> {
        (...args: any[]): void;
        __isSpy: boolean;
        calls: Array<Call<T>>;
        andCall(fn: (...args: any[]) => any): Spy<T>;
        andCallThrough(): Spy<T>;
        andThrow(object: {}): Spy<T>;
        andReturn(value: any): Spy<T>;
        getLastCall(): Call<T>;
        restore(): void;
        destroy(): void;
        reset(): void;
    }


    export function createSpy(fn?: (...args: any[]) => any, restore?: (...args: any[]) => any): Spy<any>;
    export function spyOn<T>(object: T, methodName: string): Spy<T>;
    export function isSpy(object: {}): boolean;
    export function restoreSpies(): void;
    export function assert(condition: boolean, messageFormat: string, ...extraArgs: any[]): void;
    export function extend(extension: Extension): void;

}

declare function expect<T>(actual: T): expect.Expectation<T>;

export = expect;
