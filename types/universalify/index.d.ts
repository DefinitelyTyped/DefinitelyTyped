// Type definitions for universalify 2.0
// Project: https://github.com/RyanZim/universalify#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>, Jan Peer Stöcklmair <https://github.com/JPeer264>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * interfaces with different args length
 * Depending on the arg it should either return
 *  - Promise<T> (no callback as last arg) or
 *  - void (result is in callback -> last arg of function)
 */
export interface FromCallbackReturn<T> {
    (callback: (err: any, result?: T) => void): void;
    (): Promise<T>;
}
export interface FromCallbackReturnOne<T, A1> {
    (arg1: A1, callback: (err: any, result?: T) => void): void;
    (arg1: A1): Promise<T>;
}
export interface FromCallbackReturnTwo<T, A1, A2> {
    (arg1: A1, arg2: A2, callback: (err: any, result?: T) => void): void;
    (arg1: A1, arg2: A2): Promise<T>;
}
export interface FromCallbackReturnThree<T, A1, A2, A3> {
    (arg1: A1, arg2: A2, arg3: A3, callback: (err: any, result?: T) => void): void;
    (arg1: A1, arg2: A2, arg3: A3): Promise<T>;
}
export interface FromCallbackReturnFour<T, A1, A2, A3, A4> {
    (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any, result?: T) => void): void;
    (arg1: A1, arg2: A2, arg3: A3, arg4: A4): Promise<T>;
}
export interface FromCallbackReturnFive<T, A1, A2, A3, A4, A5> {
    (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any, result?: T) => void): void;
    (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5): Promise<T>;
}

/**
 * Returns promise if the last argument is not a callback
 * Returns void and puts the result in the callback, which is the last argument of the function
 */
export function fromCallback<T>(func: (callback: (err: any, result?: T) => void) => void): FromCallbackReturn<T>;
export function fromCallback<T, A1>(
    func: (arg1: A1, callback: (err: any, result?: T) => void) => void,
): FromCallbackReturnOne<T, A1>;
export function fromCallback<T, A1, A2>(
    func: (arg1: A1, arg2: A2, callback: (err: any, result?: T) => void) => void,
): FromCallbackReturnTwo<T, A1, A2>;
export function fromCallback<T, A1, A2, A3>(
    func: (arg1: A1, arg2: A2, arg3: A3, callback: (err: any, result?: T) => void) => void,
): FromCallbackReturnThree<T, A1, A2, A3>;
export function fromCallback<T, A1, A2, A3, A4>(
    func: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any, result?: T) => void) => void,
): FromCallbackReturnFour<T, A1, A2, A3, A4>;
export function fromCallback<T, A1, A2, A3, A4, A5>(
    func: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any, result?: T) => void) => void,
): FromCallbackReturnFive<T, A1, A2, A3, A4, A5>;

/**
 * Returns promise if the last argument is not a callback
 * Returns void and puts the result in the callback, which is the last argument of the function
 */
export function fromPromise<T>(func: () => Promise<T>): FromCallbackReturn<T>;
export function fromPromise<T, A1>(func: (arg1: A1) => Promise<T>): FromCallbackReturnOne<T, A1>;
export function fromPromise<T, A1, A2>(func: (arg1: A1, arg2: A2) => Promise<T>): FromCallbackReturnTwo<T, A1, A2>;
export function fromPromise<T, A1, A2, A3>(
    func: (arg1: A1, arg2: A2, arg3: A3) => Promise<T>,
): FromCallbackReturnThree<T, A1, A2, A3>;
export function fromPromise<T, A1, A2, A3, A4>(
    func: (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Promise<T>,
): FromCallbackReturnFour<T, A1, A2, A3, A4>;
export function fromPromise<T, A1, A2, A3, A4, A5>(
    func: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Promise<T>,
): FromCallbackReturnFive<T, A1, A2, A3, A4, A5>;
