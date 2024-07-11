/// <reference types="node" />

declare function jconv(buf: Buffer, from: string, to: string): Buffer;

declare namespace jconv {
    interface Encoding {
        name: string;
        convert: (buf: Buffer) => Buffer;
    }

    /*
     * Adds a new encoding. Already used internally with SJIS, JIS and EUCJP.
     */
    function defineEncoding(obj: Encoding): void;

    /*
     * Converts a Buffer from one encoding straight to another, and returns a new Buffer.
     */
    function convert(buf: Buffer, from: string, to: string): Buffer;

    /*
     * Decodes a Buffer with the given encoding to a string.
     */
    function decode(buf: Buffer, from: string): string;

    /*
     * Encodes a string to a Buffer with a given encoding.
     */
    function encode(str: string, to: string): Buffer;

    /*
     * Checks whether an encoding exists.
     */
    function encodingExists(encoding: string): boolean;
}

export = jconv;
