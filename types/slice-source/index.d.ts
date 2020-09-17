// Type definitions for slice-source 0.4
// Project: https://github.com/mbostock/slice-source
// Definitions by: Björn Harrtell <https://github.com/bjornharrtell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function slice(source: ReadableStream | ReadableStreamReader | SliceSource): SliceSource;

export interface SliceChunk {
    value: Uint8Array;
    done: boolean;
}

export interface SliceSource {
    slice(length: number): Promise<Uint8Array>;
    read(): Promise<SliceChunk>;
    cancel(): Promise<void>;
}
