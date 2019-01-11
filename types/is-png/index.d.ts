// Type definitions for is-png 1.1
// Project: https://github.com/sindresorhus/is-png#readme
// Definitions by: James Wild <https://github.com/jameswilddev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Check whether a buffer contains a PNG image.
 * @remarks This only performs a header check, and the buffer may not parse as a PNG file.
 * @param buffer The buffer to check.
 * @returns Whether the given buffer contains a PNG image.
 */
declare function isPng(buffer: Uint8Array | Buffer): boolean;

export = isPng;
