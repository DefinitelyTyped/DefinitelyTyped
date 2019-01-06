// Type definitions for strong-log-transformer 1.0
// Project: https://github.com/strongloop/strong-log-transformer
// Definitions by: Aleh Zasypkin <https://github.com/azasypkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

interface Options {
    format: string;
    tag: string;
    mergeMultiline: boolean;
    timeStamp: boolean;
}

interface StrongLogTransformer {
    (options?: Partial<Options>): NodeJS.ReadWriteStream;
    DEFAULTS: Options;
    cli(args: string[]): void;
}

declare const strongLogTransformer: StrongLogTransformer;

export = strongLogTransformer;
