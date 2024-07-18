/// <reference types="node" />

export {};

/**
 * An ArrayBuffer or ArrayBufferView, including Node.js Buffers.
 */
type BufferSource = ArrayBufferView | ArrayBuffer;

export namespace kem {
    /**
     * Basic information about a KEM algorithm.
     */
    interface Algorithm {
        /**
         * Unique identifier (e.g., 'mceliece8192128').
         */
        name: string;
        /**
         * Display name (e.g., 'Classic McEliece 8192128').
         */
        description: string;
        /**
         * Size of the public key, in bytes.
         */
        publicKeySize: number;
        /**
         * Size of the private key, in bytes.
         */
        privateKeySize: number;
        /**
         * Size of the generated key, in bytes. This is always at least 16.
         */
        keySize: number;
        /**
         * Size of the ciphertext (encapsulated key), in bytes.
         */
        encryptedKeySize: number;
    }

    interface GenerateKeyResult {
        /**
         * Exactly keySize bytes of cryptographically secure key material.
         */
        key: ArrayBuffer;
        /**
         * The ciphertext (encapsulated key), consisting of encryptedKeySize
         * bytes.
         */
        encryptedKey: ArrayBuffer;
    }

    /**
     * KEM public key.
     */
    class PublicKey {
        /**
         * Imports an existing public key for the given algorithm from the given
         * key material.
         */
        constructor(name: string, bytes: BufferSource);

        /**
         * Basic information about the associated KEM algorithm.
         */
        readonly algorithm: Algorithm;

        /**
         * Returns a copy of the underlying key material.
         */
        export(): ArrayBuffer;

        /**
         * Generates a new shared secret and encapsulates it. The resulting
         * ciphertext can be decrypted using the matching private key.
         */
        generateKey(): Promise<GenerateKeyResult>;
    }

    /**
     * KEM private key.
     */
    class PrivateKey {
        /**
         * Imports an existing private key for the given algorithm from the given
         * key material.
         */
        constructor(name: string, bytes: BufferSource);

        /**
         * Basic information about the associated KEM algorithm.
         */
        readonly algorithm: Algorithm;

        /**
         * Returns a copy of the underlying key material.
         */
        export(): ArrayBuffer;

        /**
         * Decrypts the given ciphertext in order to obtain a shared secret. The
         * encapsulated shared secret must have been generated using the
         * matching public key.
         */
        decryptKey(encryptedKey: BufferSource): Promise<ArrayBuffer>;
    }

    interface GenerateKeyPairResult {
        publicKey: PublicKey;
        privateKey: PrivateKey;
    }

    /**
     * Generates a new key pair for the given algorithm.
     */
    function generateKeyPair(algorithm: string): Promise<GenerateKeyPairResult>;

    /**
     * All supported key encapsulation algorithms.
     */
    const supportedAlgorithms: Algorithm[];
}

export namespace sign {
    /**
     * Basic information about a signature algorithm.
     */
    interface Algorithm {
        /**
         * Unique identifier (e.g., 'dilithium2').
         */
        name: string;
        /**
         * Display name (e.g., 'Dilithium2').
         */
        description: string;
        /**
         * Size of the public key, in bytes.
         */
        publicKeySize: number;
        /**
         * Size of the private key, in bytes.
         */
        privateKeySize: number;
        /**
         * Maximum size of a signature, in bytes.
         */
        signatureSize: number;
    }

    /**
     * Signature public key.
     */
    class PublicKey {
        /**
         * Imports an existing public key for the given algorithm from the given
         * key material.
         */
        constructor(name: string, bytes: BufferSource);

        /**
         * Basic information about the associated signature algorithm.
         */
        readonly algorithm: Algorithm;

        /**
         * Returns a copy of the underlying key material.
         */
        export(): ArrayBuffer;

        /**
         * Verifies that the given signature is correct for the given message.
         * The signature must have been produced using the matching private key.
         */
        verify(message: BufferSource, signature: BufferSource): Promise<boolean>;
    }

    /**
     * Signature private key.
     */
    class PrivateKey {
        /**
         * Imports an existing private key for the given algorithm from the given
         * key material.
         */
        constructor(name: string, bytes: BufferSource);

        /**
         * Basic information about the associated signature algorithm.
         */
        readonly algorithm: Algorithm;

        /**
         * Returns a copy of the underlying key material.
         */
        export(): ArrayBuffer;

        /**
         * Computes a signature for the given message using this private key.
         */
        sign(message: BufferSource): Promise<ArrayBuffer>;
    }

    interface GenerateKeyPairResult {
        publicKey: PublicKey;
        privateKey: PrivateKey;
    }

    /**
     * Generates a new key pair for the given algorithm.
     */
    function generateKeyPair(algorithm: string): Promise<GenerateKeyPairResult>;

    /**
     * All supported signature algorithms.
     */
    const supportedAlgorithms: Algorithm[];
}

interface ClassicGenerateKeyPairResult {
    publicKey: Buffer;
    privateKey: Buffer;
}

interface ClassicGenerateKeyResult {
    key: Buffer;
    encryptedKey: Buffer;
}

/**
 * Classic KEM API. Available in Node.js only.
 *
 * Please consider using the newer PQClean.kem namespace instead of the
 * PQClean.KEM class.
 */
export class KEM {
    /**
     * Creates a new KEM instance for the given algorithm.
     */
    constructor(algorithm: string);

    /**
     * The identifiers of all supported KEM algorithms.
     */
    static readonly supportedAlgorithms: string[];

    /**
     * The (maximum) key size in bytes that this instance can encapsulate.
     */
    readonly keySize: number;

    /**
     * The size of the ciphertext (encapsulated key) in bytes.
     */
    readonly encryptedKeySize: number;

    /**
     * The size of the public key in bytes.
     */
    readonly publicKeySize: number;

    /**
     * The size of the private key in bytes.
     */
    readonly privateKeySize: number;

    /**
     * Creates and returns a new key pair. Both keys will be returned as
     * Buffers.
     */
    keypair(): ClassicGenerateKeyPairResult;

    /**
     * Creates and returns a new key pair. The function returns immediately and
     * calls the given callback with both keys when the key pair has been
     * generated, or when an error has occurred.
     */
    keypair(callback: (err: Error | null, result: ClassicGenerateKeyPairResult) => void): void;

    /**
     * Generates a new symmetric key and encrypts (encapsulates) it using the
     * given publicKey. Returns the key and the encrypted key as Buffers.
     */
    generateKey(publicKey: Buffer): ClassicGenerateKeyResult;

    /**
     * Generates a new symmetric key and encrypts (encapsulates) it using the
     * given publicKey. The function returns immediately and calls the given
     * callback with the key and the encrypted key when the operation has
     * completed, or when an error has occurred.
     */
    generateKey(publicKey: Buffer, callback: (err: Error | null, result: ClassicGenerateKeyResult) => void): void;

    /**
     * Decrypts (decapsulates) the encryptedKey using the given privateKey and
     * returns the decrypted key as a Buffer.
     */
    decryptKey(privateKey: Buffer, encryptedKey: Buffer): Buffer;

    /**
     * Decrypts (decapsulates) the encryptedKey using the given privateKey. The
     * function returns immediately and calls the given callback with the
     * decrypted key when the operation has completed, or when an error has
     * occurred.
     */
    decryptKey(privateKey: Buffer, encryptedKey: Buffer, callback: (err: Error | null, result: Buffer) => void): void;
}

/**
 * Classic signature API. Available in Node.js only.
 *
 * Please consider using the newer PQClean.sign namespace instead of the
 * PQClean.Sign class.
 */
export class Sign {
    /**
     * Creates a new Sign instance for the given algorithm.
     */
    constructor(algorithm: string);

    /**
     * The identifiers of all supported signature algorithms.
     */
    static readonly supportedAlgorithms: string[];

    /**
     * The (maximum) signature size in bytes that this instance produces.
     */
    readonly signatureSize: number;

    /**
     * The size of the public key in bytes.
     */
    readonly publicKeySize: number;

    /**
     * The size of the private key in bytes.
     */
    readonly privateKeySize: number;

    /**
     * Creates and returns a new key pair. Both keys will be returned as
     * Buffers.
     */
    keypair(): ClassicGenerateKeyPairResult;

    /**
     * Creates and returns a new key pair. The function returns immediately and
     * calls the given callback with both keys when the key pair has been
     * generated, or when an error has occurred.
     */
    keypair(callback: (err: Error | null, result: ClassicGenerateKeyPairResult) => void): void;

    /**
     * Verifies a given signature against a given message and public key.
     * Returns true if and only if the signature is valid, false otherwise.
     */
    verify(publicKey: Buffer, message: Buffer, signature: Buffer): boolean;

    /**
     * Verifies a given signature against a given message and public key. The
     * function returns immediately and calls the given callback with the
     * result, which is true if and only if the signature is valid, false
     * otherwise, or when an error has occurred.
     */
    verify(
        publicKey: Buffer,
        message: Buffer,
        signature: Buffer,
        callback: (err: Error | null, result: boolean) => void,
    ): void;

    /**
     * Signs the given message using the given privateKey and returns the
     * signature as a Buffer.
     */
    sign(privateKey: Buffer, message: Buffer): Buffer;

    /**
     * Signs the given message using the given privateKey. The function
     * returns immediately and calls the given callback with the signature as a
     * Buffer when the signature has been computed, or when an error has
     * occurred.
     */
    sign(privateKey: Buffer, message: Buffer, callback: (err: Error | null, signature: Buffer) => void): void;
}
