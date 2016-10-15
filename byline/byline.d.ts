// Type definitions for byline 4.2.1
// Project: https://github.com/jahewson/node-byline
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "byline" {
    import stream = require("stream");

    function bl(): bl.LineStream;
    function bl(stream: NodeJS.ReadableStream, options?: bl.LineStreamOptions): bl.LineStream;

    namespace bl {

        export interface LineStreamOptions extends stream.TransformOptions {
            keepEmptyLines?: boolean;
        }

        export interface LineStream extends stream.Transform {
        }

        export interface LineStreamCreatable extends LineStream {
            new (options?: LineStreamOptions): LineStream
        }

        export function createStream(): LineStream;
        export function createStream(stream: NodeJS.ReadableStream, options?: LineStreamOptions): LineStream;

        export var LineStream: LineStreamCreatable;
    }

    export = bl;
}
