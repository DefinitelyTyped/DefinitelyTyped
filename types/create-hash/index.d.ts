// Type definitions for create-hash 1.2
// Project: https://github.com/crypto-browserify/createHash
// Definitions by: BendingBender <https://github.com/BendingBender>,
//                 Konstantin Yuriev <https://github.com/gallowsmaker>
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type encoding = 'utf8' | 'hex' | 'base64';
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

export namespace createHash {
    interface HashAlgorithm {
        update(data: string): void;
        digest(target?: encoding): string;
        write(data: string): void;
        end(): void;
        read(): void;
    }

    export function createHash(algo: Algorithm): createHash.HashAlgorithm;
}
