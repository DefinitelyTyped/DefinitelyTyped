// Type definitions for universalify 2.0
// Project: https://github.com/RyanZim/universalify#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>, Jan Peer Stöcklmair <https://github.com/JPeer264>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { List } from 'ts-toolbelt';

export interface UniversalifyResult<T, A extends any[]> {
    (...args: List.Append<A, (err: any, result?: T) => void>): void;
    (...arg1: A): Promise<T>;
}

/**
 * Returns promise if the last argument is not a callback
 * Returns void and puts the result in the callback, which is the last argument of the function
 */
export function fromCallback<T, A extends any[]>(
    func: (...args: List.Append<A, (err: any, result?: T) => void>) => void,
): UniversalifyResult<T, A>;
export function fromPromise<T, A extends any[]>(func: (...args: A) => Promise<T>): UniversalifyResult<T, A>;
