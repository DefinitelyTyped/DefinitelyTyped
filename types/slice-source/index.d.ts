// Type definitions for slice-source 0.4
// Project: https://github.com/mbostock/slice-source
// Definitions by: Björn Harrtell <https://github.com/bjornharrtell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:use-default-type-parameter
declare function slice(source: ReadableStream | ReadableStreamReader<any> | SliceSource): SliceSource;

interface SliceChunk {
    value: Uint8Array;
    done: boolean;
}

interface SliceSource {
    slice(length: number): Promise<Uint8Array>;
    read(): Promise<SliceChunk>;
    cancel(): Promise<void>;
}

export = slice;
