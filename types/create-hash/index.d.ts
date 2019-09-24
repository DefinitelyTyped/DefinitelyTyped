// Type definitions for create-hash 1.2
// Project: https://github.com/crypto-browserify/createHash
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

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

    type encoding = 'utf8' | 'hex' | 'base64';

    interface HashAlgorithm {
        update(data: string): void;
        digest(target?: encoding): string;
    }
}

declare function createHash(algo: createHash.Algorithm): createHash.HashAlgorithm;

export = createHash;
