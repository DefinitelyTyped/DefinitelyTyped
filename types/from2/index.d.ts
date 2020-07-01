// Type definitions for from2 2.3
// Project: https://github.com/hughsk/from2
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as stream from 'stream';

export = from2;

declare function from2(read: from2.ReadInput): NodeJS.ReadableStream;
declare function from2(opts: from2.ObjectModeOptions, read: from2.ReadObjectInput): NodeJS.ReadableStream;
declare function from2(opts: from2.Options, read: from2.ReadInput): NodeJS.ReadableStream;

declare namespace from2 {
    function obj(read: ReadObjectInput): NodeJS.ReadableStream;
    function obj(opts: { objectMode?: true } & stream.ReadableOptions, read: ReadObjectInput): NodeJS.ReadableStream;

    function ctor(opts?: Options): From2Ctor<ReadInput>;
    function ctor(opts: ObjectModeOptions): From2Ctor<ReadObjectInput>;

    type ObjectModeOptions = { objectMode: true } & stream.ReadableOptions;
    type Options = { objectMode?: false } & stream.ReadableOptions;

    type From2Ctor<R extends ReadInput | ReadObjectInput> = new(read: R) => NodeJS.ReadableStream;

    type ReadObjectInput = ReadCallback<NextObjectCallback> | any[];
    type ReadInput = ReadCallback<NextCallback> | Chunk[];
    type ReadCallback<N extends NextCallback | NextObjectCallback> = (size: number, next: N) => void;
    type NextCallback = (err: any | undefined, chunk: Chunk) => void;
    type NextObjectCallback = (err: any | undefined, chunk: any) => void;
    type Chunk = string | Buffer | Uint8Array | null;
}
