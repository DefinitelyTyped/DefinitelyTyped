// Type definitions for rev-hash 2.0
// Project: https://github.com/sindresorhus/rev-hash
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Create a hash for file revving
 * @param input Data to create a hash from.
 */
declare function revHash(input: Buffer | string): string;

export = revHash;
