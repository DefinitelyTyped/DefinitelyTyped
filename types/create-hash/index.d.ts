// Type definitions for create-hash 1.2
// Project: https://github.com/crypto-browserify/createHash
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { Hash } from 'crypto';

export = createHash;

declare function createHash(algo: createHash.Algorithm): Hash;

declare namespace createHash {
    type Algorithm =
        | 'md5'
        | 'rmd160'
        | 'ripemd160'
        | 'sha'
        | 'sha1'
        | 'sha224'
        | 'sha256'
        | 'sha384'
        | 'sha512';
}
