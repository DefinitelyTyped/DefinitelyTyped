// Type definitions for argon2-browser 1.5
// Project: https://github.com/antelle/argon2-browser#readme
// Definitions by: Ivan Gabriele <https://github.com/ivangabriele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace argon2 {
    function hash(options: HashOptions): Promise<HashResult>;
    function verify(options: VerifyOptions): Promise<void>;

    interface HashOptions {
        distPath?: string;
        hashLen?: number;
        mem?: number;
        parallelism?: number;
        pass: string;
        salt: string;
        time?: number;
        type?: ArgonType;
    }

    interface HashResult {
        encoded: string;
        hash: Uint8Array;
        hashHex: string;
    }

    interface VerifyOptions {
        distPath?: string;
        encoded: string | Uint8Array;
        pass: string;
        type?: ArgonType;
    }

    enum ArgonType {
        Argon2d = 0,
        Argon2i = 1,
        Argon2id = 2,
    }
}
