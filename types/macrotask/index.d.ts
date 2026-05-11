export as namespace macrotask;

export function run<TArgs extends any[]>(
    task: (...args: TArgs) => void,
    ...args: TArgs
): CancelToken;

export function clear(cancel: CancelToken): void;

export class CancelToken {
    // needed for TS to not accept just any object, only instances of CancelToken
    private __cancel__prop: "imaginary";
}
