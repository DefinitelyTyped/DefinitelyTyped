// Type definitions for merge2 v0.3.6
// Project: https://github.com/teambition/merge2
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'merge2' {
    interface IOptions {
        end?: boolean;
        objectMode?: boolean;
    }

    interface IMerge2Stream extends NodeJS.ReadWriteStream {
        add(...args: Array<NodeJS.ReadWriteStream | IMerge2Stream | Array<NodeJS.ReadWriteStream | IMerge2Stream | IOptions>>): IMerge2Stream;
    }

    interface IMerge2 {
        (...args: Array<NodeJS.ReadWriteStream | IMerge2Stream | Array<NodeJS.ReadWriteStream | IMerge2Stream> | IOptions>): IMerge2Stream;
    }

    var _tmp: IMerge2;
    export = _tmp;
}
