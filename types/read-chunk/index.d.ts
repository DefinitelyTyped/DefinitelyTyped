// Type definitions for read-chunk v2.1.0
// Project: https://github.com/sindresorhus/read-chunk
// Definitions by: crispybee <https://github.com/crispybee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = ReadChunk;

    /**
     * Asynchronous: Reads a chunk from a file. Returns a Promise<Buffer>.
     * @param {string} filePath The path to the file.
     * @param {number} startingPosition Position to start reading.
     * @param {number} length Number of bytes to read.
     * @return {Promise<Buffer>} Returns a Promise<Buffer>.
     */
declare function ReadChunk(filePath: string, startingPosition: number, length: number): Promise<Buffer>;

declare namespace ReadChunk {
    /**
     * Synchronous: Reads a chunk from a file. Returns a Buffer.
     * @param {string} filePath The path to the file.
     * @param {number} startingPosition Position to start reading.
     * @param {number} length Number of bytes to read.
     * @return {Buffer} Returns a Buffer.
     */
    function sync(filePath: string, startingPosition: number, length: number): Buffer;
}

