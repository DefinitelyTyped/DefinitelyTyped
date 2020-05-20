// Type definitions for sha.js 2.4
// Project: https://github.com/crypto-browserify/sha.js
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Hash } from 'crypto';

export = SHA;

declare function SHA(algorithm: string): Hash;

declare namespace SHA {
    type Algorithm = 'sha' | 'sha1' | 'sha224' | 'sha256' | 'sha384' | 'sha512';
    interface HashStatic {
        new (): Hash;
    }

    const sha: HashStatic;
    const sha1: HashStatic;
    const sha224: HashStatic;
    const sha256: HashStatic;
    const sha384: HashStatic;
    const sha512: HashStatic;
}
