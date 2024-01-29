/// <reference types="node" />

declare class AggregateError extends Error implements NodeJS.ErrnoException {
    readonly errors: readonly any[];
    readonly name: "AggregateError";
    readonly message: string;

    // Using `any` here, to match Node's own typings:
    constructor(errors: readonly any[], message?: string);
}

export = AggregateError;
