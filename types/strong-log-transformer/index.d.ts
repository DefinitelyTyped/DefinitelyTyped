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
