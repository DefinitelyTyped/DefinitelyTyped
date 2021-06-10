// Type definitions for universalify 1.0
// Project: https://github.com/RyanZim/universalify#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

export type UniversalFunction<Arguments extends unknown[], ReturnValue> = ((...args: [...Arguments, (value: ReturnValue) => unknown]) => void) &
    ((...args: Arguments) => Promise<ReturnValue>);

export function fromCallback<Arguments extends unknown[], ReturnValue>(fn: (...args: [...Arguments, (value: ReturnValue) => unknown]) => unknown): UniversalFunction<Arguments, ReturnValue>;
export function fromPromise<Arguments extends unknown[], ReturnValue>(fn: (...args: Arguments) => Promise<ReturnValue>): UniversalFunction<Arguments, ReturnValue>;
