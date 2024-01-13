/// <reference types="node"/>

interface Options {
    readable?: boolean | undefined;
    writable?: boolean | undefined;
    error?: boolean | undefined;
}
type Stream = NodeJS.ReadableStream | NodeJS.WritableStream;
type Callback = (error?: Error | null) => void;
declare function eos(
    stream: Stream,
    callback?: Callback,
): () => void;
declare function eos(
    stream: Stream,
    options: Options,
    callback?: Callback,
): () => void;
declare namespace eos {
}
export = eos;
