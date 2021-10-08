// Type definitions for universalify 1.0
// Project: https://github.com/RyanZim/universalify#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

export function fromCallback<Arguments extends readonly unknown[], ErrorValue, ReturnValue>(
    fn: (...arguments_: [...Arguments, (error: ErrorValue, value: ReturnValue) => void]) => void,
): {
    (...arguments_: Arguments): Promise<ReturnValue>;
    (...arguments_: [...Arguments, (error: ErrorValue, value: ReturnValue) => void]): void;
};

export function fromPromise<Arguments extends readonly unknown[], Value>(
    fn: (...arguments_: [...Arguments]) => Promise<Value>,
): {
    (...arguments_: Arguments): Promise<Value>;
    (...arguments_: [...Arguments, (error: unknown, value: Value) => void]): void;
};
