// Type definitions for is-stream 1.1
// Project: https://github.com/sindresorhus/is-stream#readme
// Definitions by: BendingBender <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import * as stream from "stream";

export = isStream;

declare function isStream(maybeStream: any): maybeStream is stream.Stream;

declare namespace isStream {
    function writable(maybeWritable: any): maybeWritable is stream.Writable;
    function readable(maybeReadable: any): maybeReadable is stream.Readable;
    function duplex(maybeDuplex: any): maybeDuplex is stream.Duplex;
    function transform(maybeTransform: any): maybeTransform is stream.Transform;
}
