/// <reference types="node" />

import stream = require("stream");
declare function bl(): bl.LineStream;
declare function bl(stream: NodeJS.ReadableStream, options?: bl.LineStreamOptions): bl.LineStream;

declare namespace bl {
    export interface LineStreamOptions extends stream.TransformOptions {
        keepEmptyLines?: boolean | undefined;
    }

    export interface LineStream extends stream.Transform {
    }

    export interface LineStreamCreatable extends LineStream {
        new(options?: LineStreamOptions): LineStream;
    }

    // TODO is it possible to declare static factory functions without name (directly on the module)
    //
    // JS:
    // // convinience API
    // module.exports = function(readStream, options) {
    //      return module.exports.createStream(readStream, options);
    // };
    //
    // TS:
    // ():LineStream; // same as createStream():LineStream
    // (stream:stream.Stream, options?:LineStreamOptions):LineStream; // same as createStream(stream, options?):LineStream

    export function createStream(): LineStream;
    export function createStream(stream: NodeJS.ReadableStream, options?: LineStreamOptions): LineStream;

    export var LineStream: LineStreamCreatable;
}

export = bl;
