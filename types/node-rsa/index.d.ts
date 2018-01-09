// Type definitions for node-rsa 0.4
// Project: https://github.com/rzcoder/node-rsa
// Definitions by: Ali Taheri <https://github.com/alitaheri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

declare class NodeRSA {
    /**
     * Generate new key with length specified.
     */
    constructor(key?: NodeRSA.KeyBits);

    /**
     * Load key from string/buffer/components.
     */
    constructor(key: NodeRSA.Key, format?: NodeRSA.Format, options?: NodeRSA.Options);

    /**
     * @param bits Key size in bits. 2048 by default.
     * @param exponent public exponent. 65537 by default.
     */
    generateKeyPair(bits?: number, exponent?: number): void;

    /**
     * Import key from PEM string, PEM/DER Buffer or components.
     */
    importKey(key: NodeRSA.Key, format?: NodeRSA.Format): void;

    /**
     * Export key to PEM string, PEM/DER Buffer or components.
     */
    exportKey(format?: NodeRSA.Format): NodeRSA.Key;

    isPrivate(): boolean;

    /**
     * @param strict if true method will return false if key pair have private exponent. Default false.
     */
    isPublic(strict?: boolean): boolean;

    /**
     * Return true if key pair doesn't have any data.
     */
    isEmpty(): boolean;

    /**
     * Return key size in bits.
     */
    getKeySize(): number;

    /**
     * Return max data size for encrypt in bytes.
     */
    getMaxMessageSize(): number;

    encrypt(data: NodeRSA.Data, encoding?: 'buffer'): Buffer;
    encrypt(data: NodeRSA.Data, encoding: NodeRSA.Encoding): string;
    encrypt(data: Buffer, encoding: 'buffer', sourceEncoding?: NodeRSA.Encoding): Buffer;
    encrypt(data: Buffer, encoding: NodeRSA.Encoding, sourceEncoding?: NodeRSA.Encoding): string;

    encryptPrivate(data: NodeRSA.Data, encoding?: 'buffer'): Buffer;
    encryptPrivate(data: NodeRSA.Data, encoding: NodeRSA.Encoding): string;
    encryptPrivate(data: Buffer, encoding: 'buffer', sourceEncoding?: NodeRSA.Encoding): Buffer;
    encryptPrivate(data: Buffer, encoding: NodeRSA.Encoding, sourceEncoding?: NodeRSA.Encoding): string;

    decrypt(data: Buffer | string, encoding?: 'buffer'): Buffer;
    decrypt(data: Buffer | string, encoding: NodeRSA.Encoding): string;
    decrypt<T extends object>(data: Buffer | string, encoding: 'json'): T;

    decryptPublic(data: Buffer | string, encoding?: 'buffer'): Buffer;
    decryptPublic(data: Buffer | string, encoding: NodeRSA.Encoding): string;
    decryptPublic<T extends object>(data: Buffer | string, encoding: 'json'): T;

    sign(data: NodeRSA.Data, encoding?: 'buffer'): Buffer;
    sign(data: NodeRSA.Data, encoding: NodeRSA.Encoding): string;
    sign(data: Buffer, encoding: 'buffer', sourceEncoding?: NodeRSA.Encoding): Buffer;
    sign(data: Buffer, encoding: NodeRSA.Encoding, sourceEncoding?: NodeRSA.Encoding): string;

    verify(data: NodeRSA.Data, signature: Buffer): boolean;
    verify(data: Buffer, signature: Buffer, sourceEncoding?: NodeRSA.Encoding): boolean;
    verify(data: Buffer, signature: string, sourceEncoding: NodeRSA.Encoding, signatureEncoding: NodeRSA.Encoding): boolean;
    verify(data: NodeRSA.Data, signature: string, sourceEncoding: undefined, signatureEncoding: NodeRSA.Encoding): boolean;
}

declare namespace NodeRSA {
    type Key = string | Buffer | KeyComponents;
    type Data = string | object | any[];

    type Format =
        | 'private' | 'public'
        | 'pkcs1' | 'pkcs1-pem' | 'pkcs1-der'
        | 'pkcs1-private' | 'pkcs1-private-pem' | 'pkcs1-private-der'
        | 'pkcs1-public' | 'pkcs1-public-pem' | 'pkcs1-public-der'
        | 'pkcs8' | 'pkcs8-pem' | 'pkcs8-der'
        | 'pkcs8-private' | 'pkcs8-private-pem' | 'pkcs8-private-der'
        | 'pkcs8-public' | 'pkcs8-public-pem' | 'pkcs8-public-der'
        | 'components' | 'components-pem' | 'components-der'
        | 'components-private' | 'components-private-pem' | 'components-private-der'
        | 'components-public' | 'components-public-pem' | 'components-public-der';

    type EncryptionScheme = 'pkcs1_oaep' | 'pkcs1';

    type HashingAlgorithm =
        | 'ripemd160'
        | 'md4' | 'md5'
        | 'sha' | 'sha1'
        | 'sha224' | 'sha256' | 'sha384' | 'sha512';

    type SigningScheme = 'pkcs1' | 'pss';

    type SigningSchemeHash =
        | 'pkcs1-ripemd160'
        | 'pkcs1-md4' | 'pkcs1-md5'
        | 'pkcs1-sha' | 'pkcs1-sha1'
        | 'pkcs1-sha224' | 'pkcs1-sha256' | 'pkcs1-sha384' | 'pkcs1-sha512'
        | 'pss-ripemd160'
        | 'pss-md4' | 'pss-md5'
        | 'pss-sha' | 'pss-sha1'
        | 'pss-sha224' | 'pss-sha256' | 'pss-sha384' | 'pss-sha512';

    type Encoding =
        | 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'latin1'
        | 'base64' | 'hex' | 'binary' | 'buffer';

    interface KeyComponents {
        n: Buffer;
        e: Buffer | number;
        d: Buffer;
        p: Buffer;
        q: Buffer;
        dmp1: Buffer;
        dmq1: Buffer;
        coeff: Buffer;
    }

    interface KeyBits {
        /**
         * The length of the key in bits.
         */
        b: number;
    }

    interface AdvancedEncryptionSchemePKCS1 {
        scheme: 'pkcs1';
        padding: number;
    }

    interface AdvancedEncryptionSchemePKCS1OAEP {
        scheme: 'pkcs1_oaep';
        hash: HashingAlgorithm;

        /**
         * Mask generation function.
         */
        mgf?(data: Buffer, length: number, hash: HashingAlgorithm): Buffer;
    }

    type AdvancedEncryptionScheme =
        | AdvancedEncryptionSchemePKCS1
        | AdvancedEncryptionSchemePKCS1OAEP;

    interface AdvancedSigningSchemePSS {
        scheme: 'pss';
        hash: HashingAlgorithm;
        saltLength: number;
    }

    interface AdvancedSigningSchemePKCS1 {
        scheme: 'pkcs1';
        hash: HashingAlgorithm;
    }

    type AdvancedSigningScheme =
        | AdvancedSigningSchemePSS
        | AdvancedSigningSchemePKCS1;

    interface Options {
        /**
         * Working environment. (auto detects by default)
         */
        environment?: 'browser' | 'node';

        /**
         * Padding scheme for encrypt/decrypt. Default is 'pkcs1_oaep'.
         */
        encryptionScheme?: EncryptionScheme | AdvancedEncryptionScheme;

        /**
         * scheme used for signing and verifying.. Default 'pkcs1-sha256', or, if chosen pss: 'pss-sha1'.
         */
        signingScheme?: SigningScheme | SigningSchemeHash | AdvancedSigningScheme;
    }
}

export = NodeRSA;
