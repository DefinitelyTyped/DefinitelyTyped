/// <reference types="node" />

import { Readable, ReadableOptions } from "stream";

declare namespace ReadableToReadable {
    interface ReadFunction {
        (): boolean;
    }

    interface Options<From, To> {
        map?: (chunk: From) => To;
        end?: boolean;
    }
}

declare class ReadableToReadable<From = string, To = From> extends Readable {
    constructor(input: Readable, options?: ReadableToReadable.Options<From, To> & Partial<ReadableOptions>);
    static readFrom<From = string, To = From>(
        input: Readable,
        options?: ReadableToReadable.Options<From, To>,
    ): ReadableToReadable.ReadFunction;
}

export = ReadableToReadable;
