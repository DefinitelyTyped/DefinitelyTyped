// Type definitions for merge-stream
// Project: https://github.com/grncdr/merge-stream
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "merge-stream" {

    interface IMergedStream extends NodeJS.ReadWriteStream {
        add: (source: NodeJS.ReadableStream) => IMergedStream;
    }

    function merge<T extends NodeJS.ReadableStream>(...streams: T[]): IMergedStream;
    export = merge;
}
