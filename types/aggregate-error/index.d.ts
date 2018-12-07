// Type definitions for aggregate-error 1.0
// Project: https://github.com/sindresorhus/aggregate-error#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = AggregateError;

declare class AggregateError extends Error implements Iterable<Error> {
    constructor(errors: Iterable<Error | string>);

    [Symbol.iterator](): Iterator<Error>;
}
