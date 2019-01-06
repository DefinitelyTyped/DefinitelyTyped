// Type definitions for argon2-browser 1.1
// Project: https://github.com/antelle/argon2-browser#readme
// Definitions by: Ivan Gabriele <https://github.com/ivangabriele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export namespace argon2 {
    function hash(options: Argon2BrowserHashOptions): Promise<Argon2BrowserHashResult>;

    interface Argon2BrowserHashOptions {
        distPath?: string;
        hashLen?: number;
        mem?: number;
        parallelism?: number;
        pass: string;
        salt: string;
        time?: number;
        type?: ArgonType;
    }

    interface Argon2BrowserHashResult {
        encoded: string;
        hash: Uint8Array;
        hashHex: string;
    }

    enum ArgonType {
        Argon2d = 0,
        Argon2i = 1
    }
}
