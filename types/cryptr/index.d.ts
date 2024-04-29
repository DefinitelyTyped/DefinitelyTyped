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
