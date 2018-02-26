// Type definitions for mochaccino 1.2
// Project: https://github.com/pawelgalazka/mochaccino#readme
// Definitions by: Thomas-P <https://github.com/thomas-p>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import * as Sinon from "sinon";
export interface Expect {
    not: Expect;
    toBe(arg: any): void;
    toContain(arg: any): void;
    toEqual(arg: any): void;
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
    toThrowError(errType: any): void;
    toMatch(matchExpression: any): void;
}
export interface SpyProxy {
    and: SpyProxy;
    spyProxy: true;
    getSubject: () => Sinon.SinonStub;
    callThrough: () => void;
    returnValue: (obj: any) => void;
    callFake: (fake: (...args: any[]) => any) => void;
}
export interface Dom {
    exposedProperties: ['window', 'navigator', 'document'];
    create: () => void;
    destroy: () => void;
    clear: () => void;
}
export function expect(value: any): Expect;
export function spy(...config: any[]): (...args: any[]) => SpyProxy;
export const dom: Dom;
