// Type definitions for create-hmac 1.1
// Project: https://github.com/crypto-browserify/createHmac
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { Hmac } from 'crypto';

export = createHmac;

declare function createHmac(algo: createHmac.Algorithm, key: string | Buffer): Hmac;

declare namespace createHmac {
    type Algorithm =
        | 'rmd160'
        | 'ripemd160'
        | 'md5'
        | 'sha'
        | 'sha1'
        | 'sha224'
        | 'sha256'
        | 'sha384'
        | 'sha512';
}
