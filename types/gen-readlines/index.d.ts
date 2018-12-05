// Type definitions for gen-readlines 0.1
// Project: https://github.com/neurosnap/gen-readlines#readme
// Definitions by: Peter Harris <https://github.com/CodeAnimal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Generator based line reader
 *
 * @param fd            The file descriptor
 * @param filesize      The size of the file in bytes
 * @param bufferSize    The size of the buffer in bytes, default: 64*1024
 * @param position      The position where to start reading the file in bytes, default: 0
 *
 * @returns The generator object, yeilding each line as a string
 */
declare function readlines(fd: number, filesize: number, bufferSize?: number, position?: number): IterableIterator<Buffer>;

export = readlines;
