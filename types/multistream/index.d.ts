// Type definitions for multistream 2.1
// Project: https://github.com/feross/multistream
// Definitions by: mrmlnc <https://github.com/mrmlnc>, Kenzie Togami <https://github.com/kenzierocks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from 'stream';

declare function multistream(streams: multistream.Streams): NodeJS.ReadableStream;

interface FactoryStreamCallback {
    (err: Error | null, stream: null): any;
    (err: null, stream: NodeJS.ReadableStream): any;
}

declare namespace multistream {
    type LazyStream = () => Stream;
    type FactoryStream = (cb: FactoryStreamCallback) => void;
    type Streams = Array<LazyStream | NodeJS.ReadableStream> | FactoryStream;

    function obj(streams: Streams): NodeJS.ReadableStream;
}

export = multistream;
