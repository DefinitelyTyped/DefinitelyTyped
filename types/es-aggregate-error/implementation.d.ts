/// <reference types="node" />

declare class AggregateError extends Error implements NodeJS.ErrnoException {
    readonly errors: ReadonlyArray<any>;
    readonly name: 'AggregateError';
    readonly message: string;

    // any here, to match Node's own typings

    constructor(errors: ReadonlyArray<any>, message?: string);

    static shim(): void;
}

export = AggregateError;
