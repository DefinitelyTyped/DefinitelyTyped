// Type definitions for aes256 1.0
// Project: https://github.com/JamesMGreene/node-aes256
// Definitions by: Thomas den Hollander <https://github.com/ThomasdenH>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * An API to allow for greatly simplified AES-256 encryption and decryption using a passphrase of
 * any length plus a random Initialization Vector.
 */
declare const aes256: {
    /**
     * Encrypt a clear-text message using AES-256 plus a random Initialization Vector.
     * @param key  A passphrase of any length to used to generate a symmetric session key.
     * @param plaintext  The clear-text message to be encrypted.
     * @returns A custom-encrypted version of the input.
     */
    encrypt(key: string, plaintext: string): string;

    /**
     * Decrypt an encrypted message back to clear-text using AES-256 plus a random Initialization Vector.
     * @param key  A passphrase of any length to used to generate a symmetric session key.
     * @param encrypted  The encrypted message to be decrypted.
     * @returns The original plain-text message.
     */
    decrypt(key: string, plaintext: string): string;

    /**
     * Create a symmetric cipher with a given passphrase to then encrypt/decrypt data symmetrically.
     * @param key  A passphrase of any length to used to generate a symmetric session key.
     */
    createCipher(key: string): AesCipher;
};

export declare class AesCipher {
    /**
     * Create a symmetric cipher with a given passphrase to then encrypt/decrypt data symmetrically.
     * @param key  A passphrase of any length to used to generate a symmetric session key.
     */
    constructor(key: string);

    /**
     * A passphrase of any length to used to generate a symmetric session key.
     */
    readonly key: string;

    /**
     * Encrypt a clear-text message using AES-256 plus a random Initialization Vector.
     * @param plaintext  The clear-text message to be encrypted.
     * @returns A custom-encrypted version of the input.
     */
    encrypt(plaintext: string): string;

    /**
     * Decrypt an encrypted message back to clear-text using AES-256 plus a random Initialization Vector.
     * @param encrypted  The encrypted message to be decrypted.
     * @returns The original plain-text message.
     */
    decrypt(encrypted: string): string;
}

export default aes256;
