// Type definitions for multistream 2.1
// Project: https://github.com/feross/multistream
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from 'stream';

declare function multistream(streams: multistream.Streams): NodeJS.ReadableStream;

declare namespace multistream {
    type LazyStream = () => Stream;
    type FactoryStream = (cb: (err: Error | null, stream: NodeJS.ReadableStream) => any) => void;
    type Streams = Array<LazyStream | NodeJS.ReadableStream> | FactoryStream;

    function obj(streams: Streams): NodeJS.ReadableStream;
}

export = multistream;
