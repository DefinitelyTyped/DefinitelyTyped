// Type definitions for merge2 v1.1.0
// Project: https://github.com/teambition/merge2
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//				   Chigozirim C. <https://github.com/smac89>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import {DuplexOptions} from 'stream';

type StreamType = NodeJS.ReadableStream | IMerge2Stream;

interface IMerge2Stream extends NodeJS.ReadWriteStream {
    add(...args: Array<StreamType | Array<StreamType>>): IMerge2Stream;
}

declare function IMerge2 (...args: Array<StreamType | Array<StreamType> | DuplexOptions>): IMerge2Stream;

declare namespace IMerge2 {}

export = IMerge2;
