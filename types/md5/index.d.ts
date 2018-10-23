// Type definitions for md5 v2.1.0
// Project: https://github.com/pvorb/node-md5
// Definitions by: Bill Sourour <https://github.com/arcdev1>, Cameron Crothers <https://github.com/jprogrammer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * js function for hashing messages with MD5
 *
 * @param {(string | Buffer)} message - a string or buffer to hash
 * @returns {string} the resultant MD5 hash of the given message
 */
declare function md5(message: string | Buffer | Array<number>): string;

declare namespace md5 {}

export = md5;
