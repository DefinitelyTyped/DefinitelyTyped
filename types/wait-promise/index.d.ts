// Type definitions for wait-promise 0.4
// Project: https://github.com/akira-cn/wait-promise
// Definitions by: Paul Melnikow <https://github.com/paulmelnikow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface Wait {
    before(time: number): this;
    and(func: () => void): this;
    after(time: number): this;
    every(interval: number, limit?: number): this;
    limit(limit: number): this;
    check<T>(cond: () => T): Promise<T>;
    check(): Promise<void>;
    // The promise returned by `forward()` never resolves.
    forward(): Promise<void>;
    till<T>(cond: () => T): Promise<T>;
    until<T>(cond: () => T): Promise<T>;
}

export function every(interval: number, limit?: number): Wait;
export function and(func: () => void): Wait;
export function limit(limit: number): Wait;
export function before(time: number): Wait;
export function after(time: number): Wait;
export function sleep(time: number): Promise<void>;
export function until<T>(cond: () => T): Promise<T>;
// The promise returned by `forward()` never resolves.
export function forward(): Promise<void>;
export function till<T>(cond: () => T): Promise<T>;
export function check<T>(cond: () => T): Promise<T>;
export function check(): Promise<void>;
