// Type definitions for pidcrypt 0.0
// Project: https://github.com/nikvdp/pidcrypt
// Definitions by: Benjamin Just <https://github.com/BamButz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'pidcrypt' {
    interface DecryptTextOptions {
        nBits: number;
        UTF8: boolean;
        A0_PAD: boolean;
    }

    interface EncryptTextOptions {
        nBits: number;
    }

    function getRandomBytes(len: number): number;
}
