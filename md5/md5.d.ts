// Type definitions for md5 v2.1.0
// Project: https://github.com/pvorb/node-md5
// Definitions by: Bill Sourour <https://github.com/arcdev1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
declare module 'md5' {
/**
 * js function for hashing messages with MD5
 * 
 * @param {(string | Buffer)} message - a string or buffer to hash
 * @returns {string} the resultant MD5 hash of the given message
 */
    function main(message: string | Buffer): string;
    export = main;
}
