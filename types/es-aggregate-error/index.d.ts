// Type definitions for es-aggregate-error 1.0
// Project: https://github.com/es-shims/AggregateError#readme
// Definitions by: AverageHelper <https://github.com/AverageHelper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare class AggregateError extends Error implements NodeJS.ErrnoException {
    readonly errors: unknown[];
    readonly name: "AggregateError";
    readonly message: string;

    constructor(errors: unknown[], message?: string);

    static shim(): void;
}

export = AggregateError;
