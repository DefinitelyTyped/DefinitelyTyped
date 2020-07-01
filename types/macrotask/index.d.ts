// Type definitions for macrotask 3.0
// Project: https://github.com/calvinmetcalf/macrotask#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export as namespace macrotask;

export function run<TArgs extends any[]>(
    task: (...args: TArgs) => void,
    ...args: TArgs
): CancelToken;

export function clear(cancel: CancelToken): void;

export class CancelToken {
    // needed for TS to not accept just any object, only instances of CancelToken
    private __cancel__prop: 'imaginary';
}
