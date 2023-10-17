/// <reference types="node" />
import * as stream from "stream";

type Stream = NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream;
type Index = number | string;
type LabeledStreamList = ReadonlyArray<string | Stream | ReadonlyArray<Stream>>;

interface splicer extends Omit<stream.Duplex, "push" | "unshift"> {
    readonly length: number;
    splice(index: Index, howMany: number, ...stream: ReadonlyArray<Stream>): Stream[];
    push(...stream: ReadonlyArray<Stream>): number;
    pop(): Stream | undefined;
    unshift(...stream: ReadonlyArray<Stream>): number;
    shift(): Stream | undefined;
    get(index: Index): Stream | undefined;
    indexOf(labelOrStream: string | Stream): number;
}

declare function splicer(streams?: LabeledStreamList, opts?: stream.TransformOptions): splicer;

declare namespace splicer {
    function obj(streams?: LabeledStreamList, opts?: stream.TransformOptions): splicer;
}

export = splicer;
