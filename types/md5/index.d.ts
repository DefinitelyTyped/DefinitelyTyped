// Type definitions for md5 2.2
// Project: https://github.com/pvorb/node-md5
// Definitions by: Bill Sourour <https://github.com/arcdev1>
//                 Cameron Crothers <https://github.com/jprogrammer>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * js function for hashing messages with MD5
 *
 * @param message - a string or buffer to hash
 * @param options
 * @returns the resultant MD5 hash of the given message
 */
declare function md5(message: string | Buffer | number[], options?: md5.Options): string;

declare namespace md5 {
    interface Options {
        asBytes?: boolean;
        asString?: boolean;
        encoding?: 'binary' | string;
    }
}

export = md5;
