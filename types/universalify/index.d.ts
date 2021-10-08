// Type definitions for universalify 1.0
// Project: https://github.com/RyanZim/universalify#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

export function fromCallback<Arguments extends readonly unknown[], Err, Value>(
    fn: (...arguments_: [...Arguments, (error: Err, value: Value) => void]) => void,
): {
    (...arguments: Arguments): Promise<Value>;
    (...arguments: [...Arguments, (error: Err, value: Value) => void]): void;
};

export function fromPromise<Arguments extends readonly unknown[], Value>(
    fn: (...arguments_: [...Arguments]) => Promise<Value>,
): {
    (...arguments: Arguments): Promise<Value>;
    (...arguments: [...Arguments, (error: unknown, value: Value) => void]): void;
};
