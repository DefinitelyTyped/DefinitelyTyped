/// <reference types="node" />
import * as stream from "stream";

export = from2;

declare function from2(read: from2.ReadInput): from2.Stream;
declare function from2(opts: from2.ObjectModeOptions, read: from2.ReadObjectInput): from2.Stream;
declare function from2(opts: from2.Options, read: from2.ReadInput): from2.Stream;

declare namespace from2 {
    interface Stream extends NodeJS.ReadableStream {
        readonly destroyed: boolean;
        destroy: (err?: Error) => void;
    }
    function obj(read: ReadObjectInput): Stream;
    function obj(opts: { objectMode?: true | undefined } & stream.ReadableOptions, read: ReadObjectInput): Stream;

    function ctor(opts?: Options): From2Ctor<ReadInput>;
    function ctor(opts: ObjectModeOptions): From2Ctor<ReadObjectInput>;

    type ObjectModeOptions = { objectMode: true } & stream.ReadableOptions;
    type Options = { objectMode?: false | undefined } & stream.ReadableOptions;

    type From2Ctor<R extends ReadInput | ReadObjectInput> = new(read: R) => Stream;

    type ReadObjectInput = ReadCallback<NextObjectCallback> | any[];
    type ReadInput = ReadCallback<NextCallback> | Chunk[];
    type ReadCallback<N extends NextCallback | NextObjectCallback> = (size: number, next: N) => void;
    type NextCallback = (err: any | undefined, chunk: Chunk) => void;
    type NextObjectCallback = (err: any | undefined, chunk: any) => void;
    type Chunk = string | Buffer | Uint8Array | null;
}
