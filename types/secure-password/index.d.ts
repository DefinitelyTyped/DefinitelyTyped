// Type definitions for secure-password 3.1
// Project: https://github.com/emilbayes/secure-password#readme
// Definitions by: Jarom Loveridge <https://github.com/jloveridge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/// <reference types="node" />

declare class SecurePassword {
    constructor(opts?: { memlimit?: number; opslimit?: number; });

    memlimit: number;

    opslimit: number;

    /**
     * Create a hash of the password.
     * @param passwordBuf
     */
    hash(passwordBuf: Buffer): Promise<Buffer>;
    hash(passwordBuf: Buffer, cb: (err: any, hash?: Buffer) => void): void;

    /**
     * Create a hash of the password buffer.
     * @param buff
     */
    hashSync(buff: Buffer): Buffer;

    /**
     * Verify password and hash match.
     * @param passwordBuf
     * @param hashBuf
     */
    verify(passwordBuf: Buffer, hashBuf: Buffer): Promise<symbol>;
    verify(passwordBuf: Buffer, hashBuf: Buffer, cb: (err: any, result?: symbol) => void): void;

    /**
     * Verify password and hash match.
     * @param passwordBuf
     * @param hashBuf
     */
    verifySync(passwordBuf: Buffer, hashBuf: Buffer): symbol;

    static HASH_BYTES: number;

    static INVALID: symbol;

    static INVALID_UNRECOGNIZED_HASH: symbol;

    static MEMLIMIT_DEFAULT: number;

    static MEMLIMIT_MAX: number;

    static MEMLIMIT_MIN: number;

    static OPSLIMIT_DEFAULT: number;

    static OPSLIMIT_MAX: number;

    static OPSLIMIT_MIN: number;

    static PASSWORD_BYTES_MAX: number;

    static PASSWORD_BYTES_MIN: number;

    static VALID: symbol;

    static VALID_NEEDS_REHASH: symbol;
}

export = SecurePassword;
