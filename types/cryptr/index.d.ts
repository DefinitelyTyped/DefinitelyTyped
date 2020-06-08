// Type definitions for cryptr 4.0
// Project: https://github.com/MauriceButler/cryptr
// Definitions by: Roman Rogowski <https://github.com/rrogowski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Cryptr {
    /**
     * Cryptr provides a mechanism for aes-256-ctr encryption/decryption.
     * @param secret key used for encryption/decryption
     */
    constructor(secret: string);

    /** Encrypt a string. */
    encrypt(value: string): string;

    /** Decrypt a string. */
    decrypt(value: string): string;
}

export = Cryptr;
