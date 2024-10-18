// If the issue at https://github.com/Microsoft/TypeScript/issues/1360 is fixed,
// then an update should be submitted replacing the promisify declaration with
// the following declarations.
/*
function promisify<T>(original: (...args: any[], callback: (error: any, arg: T) => any) => any): ((...args: any[]) => Promise<T>);

function promisify(original: (...args: any[], callback: (error: any, ...args: any[]) => any) => any): ((...args: any[]) => Promise<any>);
*/

export type Callback<T> = (err: any, arg?: T) => any;
export type CallbackFunction = (...args: any[]) => any;
export type PromiseFunction = (...args: any[]) => Promise<any>;

export function promisify<T>(original: (cb: Callback<T>) => any): () => Promise<T>;
export function promisify<T, U>(original: (param1: U, cb: Callback<T>) => any): (param1: U) => Promise<T>;
export function promisify<T, U, V>(
    original: (param1: U, param2: V, cb: Callback<T>) => any,
): (param1: U, param2: V) => Promise<T>;
export function promisify<T, U, V, W>(
    original: (param1: U, param2: V, param3: W, cb: Callback<T>) => any,
): (param1: U, param2: V, param3: W) => Promise<T>;
export function promisify(original: CallbackFunction): PromiseFunction;

export namespace promisify {
    /**
     * This symbol can be placed on the function to be promisified to
     * provide names as an array of strings for the values in a success
     * callback.
     */
    const argumentNames: symbol;

    /**
     * The user can supply their own Promise implementation by setting it
     * here. Otherwise, the global Promise object will be used.
     */
    let Promise: PromiseConstructor;
}
