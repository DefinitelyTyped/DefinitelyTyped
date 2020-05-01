// Type definitions for Node.js 10.17
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer } from 'buffer';
import * as stream from 'stream';

export {};

export interface Certificate {
    exportChallenge(spkac: string | Buffer | ArrayBufferView): Buffer;
    exportPublicKey(spkac: string | Buffer | ArrayBufferView): Buffer;
    verifySpkac(spkac: Buffer | ArrayBufferView): boolean;
}
export const Certificate: {
    new(): Certificate;
    (): Certificate;
};

/** @deprecated since v10.0.0 */
export const fips: boolean;

export interface CredentialDetails {
    pfx: string;
    key: string;
    passphrase: string;
    cert: string;
    ca: string | string[];
    crl: string | string[];
    ciphers: string;
}
/** @deprecated since v0.11.13 - use tls.SecureContext instead. */
export interface Credentials { context?: any; }
/** @deprecated since v0.11.13 - use tls.createSecureContext instead. */
export function createCredentials(details: CredentialDetails): Credentials;
export function createHash(algorithm: string, options?: stream.TransformOptions): Hash;
export function createHmac(algorithm: string, key: string | Buffer | ArrayBufferView, options?: stream.TransformOptions): Hmac;

export type Utf8AsciiLatin1Encoding = "utf8" | "ascii" | "latin1";
export type HexBase64Latin1Encoding = "latin1" | "hex" | "base64";
export type Utf8AsciiBinaryEncoding = "utf8" | "ascii" | "binary";
export type HexBase64BinaryEncoding = "binary" | "base64" | "hex";
export type ECDHKeyFormat = "compressed" | "uncompressed" | "hybrid";

export interface Hash extends stream.Transform {
    update(data: string | Buffer | ArrayBufferView): Hash;
    update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Hash;
    digest(): Buffer;
    digest(encoding: HexBase64Latin1Encoding): string;
}
export interface Hmac extends stream.Transform {
    update(data: string | Buffer | ArrayBufferView): Hmac;
    update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Hmac;
    digest(): Buffer;
    digest(encoding: HexBase64Latin1Encoding): string;
}
export type CipherCCMTypes = 'aes-128-ccm' | 'aes-192-ccm' | 'aes-256-ccm';
export type CipherGCMTypes = 'aes-128-gcm' | 'aes-192-gcm' | 'aes-256-gcm';
export interface CipherCCMOptions extends stream.TransformOptions {
    authTagLength: number;
}
export interface CipherGCMOptions extends stream.TransformOptions {
    authTagLength?: number;
}
/** @deprecated since v10.0.0 use createCipheriv() */
export function createCipher(algorithm: CipherCCMTypes, password: string | Buffer | ArrayBufferView, options: CipherCCMOptions): CipherCCM;
/** @deprecated since v10.0.0 use createCipheriv() */
export function createCipher(algorithm: CipherGCMTypes, password: string | Buffer | ArrayBufferView, options?: CipherGCMOptions): CipherGCM;
/** @deprecated since v10.0.0 use createCipheriv() */
export function createCipher(algorithm: string, password: string | Buffer | ArrayBufferView, options?: stream.TransformOptions): Cipher;

export function createCipheriv(algorithm: CipherCCMTypes, key: string | Buffer | ArrayBufferView, iv: string | Buffer | ArrayBufferView, options: CipherCCMOptions): CipherCCM;
export function createCipheriv(algorithm: CipherGCMTypes, key: string | Buffer | ArrayBufferView, iv: string | Buffer | ArrayBufferView, options?: CipherGCMOptions): CipherGCM;
export function createCipheriv(algorithm: string, key: string | Buffer | ArrayBufferView, iv: string | Buffer | ArrayBufferView, options?: stream.TransformOptions): Cipher;

export interface Cipher extends stream.Transform {
    update(data: string | Buffer | ArrayBufferView): Buffer;
    update(data: string, input_encoding: Utf8AsciiBinaryEncoding): Buffer;
    update(data: Buffer | ArrayBufferView, output_encoding: HexBase64BinaryEncoding): string;
    update(data: Buffer | ArrayBufferView, input_encoding: any, output_encoding: HexBase64BinaryEncoding): string;
    // second arg ignored
    update(data: string, input_encoding: Utf8AsciiBinaryEncoding, output_encoding: HexBase64BinaryEncoding): string;
    final(): Buffer;
    final(output_encoding: string): string;
    setAutoPadding(auto_padding?: boolean): this;
    // getAuthTag(): Buffer;
    // setAAD(buffer: Buffer): this; // docs only say buffer
}
export interface CipherCCM extends Cipher {
    setAAD(buffer: Buffer, options: { plaintextLength: number }): this;
    getAuthTag(): Buffer;
}
export interface CipherGCM extends Cipher {
    setAAD(buffer: Buffer, options?: { plaintextLength: number }): this;
    getAuthTag(): Buffer;
}
/** @deprecated since v10.0.0 use createDecipheriv() */
export function createDecipher(algorithm: CipherCCMTypes, password: string | Buffer | ArrayBufferView, options: CipherCCMOptions): DecipherCCM;
/** @deprecated since v10.0.0 use createDecipheriv() */
export function createDecipher(algorithm: CipherGCMTypes, password: string | Buffer | ArrayBufferView, options?: CipherGCMOptions): DecipherGCM;
/** @deprecated since v10.0.0 use createDecipheriv() */
export function createDecipher(algorithm: string, password: string | Buffer | ArrayBufferView, options?: stream.TransformOptions): Decipher;

export function createDecipheriv(
    algorithm: CipherCCMTypes,
    key: string | Buffer | ArrayBufferView,
    iv: string | Buffer | ArrayBufferView,
    options: CipherCCMOptions,
): DecipherCCM;
export function createDecipheriv(
    algorithm: CipherGCMTypes,
    key: string | Buffer | ArrayBufferView,
    iv: string | Buffer | ArrayBufferView,
    options?: CipherGCMOptions,
): DecipherGCM;
export function createDecipheriv(algorithm: string, key: string | Buffer | ArrayBufferView, iv: string | Buffer | ArrayBufferView, options?: stream.TransformOptions): Decipher;

export interface Decipher extends stream.Transform {
    update(data: Buffer | ArrayBufferView): Buffer;
    update(data: string, input_encoding: HexBase64BinaryEncoding): Buffer;
    update(data: Buffer | ArrayBufferView, input_encoding: HexBase64BinaryEncoding | undefined, output_encoding: Utf8AsciiBinaryEncoding): string;
    // second arg is ignored
    update(data: string, input_encoding: HexBase64BinaryEncoding, output_encoding: Utf8AsciiBinaryEncoding): string;
    final(): Buffer;
    final(output_encoding: string): string;
    setAutoPadding(auto_padding?: boolean): this;
    // setAuthTag(tag: Buffer | TypedArray | DataView): this;
    // setAAD(buffer: Buffer | TypedArray | DataView): this;
}
export interface DecipherCCM extends Decipher {
    setAuthTag(buffer: Buffer | ArrayBufferView): this;
    setAAD(buffer: Buffer | ArrayBufferView, options: { plaintextLength: number }): this;
}
export interface DecipherGCM extends Decipher {
    setAuthTag(buffer: Buffer | ArrayBufferView): this;
    setAAD(buffer: Buffer | ArrayBufferView, options?: { plaintextLength: number }): this;
}

export function createSign(algorithm: string, options?: stream.WritableOptions): Signer;
export interface Signer extends stream.WritableStream {
    update(data: string | Buffer | ArrayBufferView): Signer;
    update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Signer;
    sign(private_key: string | { key: string; passphrase?: string, padding?: number, saltLength?: number }): Buffer;
    sign(private_key: string | { key: string; passphrase?: string, padding?: number, saltLength?: number }, output_format: HexBase64Latin1Encoding): string;
}
export function createVerify(algorith: string, options?: stream.WritableOptions): Verify;
export interface Verify extends stream.WritableStream {
    update(data: string | Buffer | ArrayBufferView): Verify;
    update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Verify;
    verify(object: string | object, signature: Buffer | ArrayBufferView): boolean;
    verify(object: string | object, signature: string, signature_format: HexBase64Latin1Encoding): boolean;
    // https://nodejs.org/api/crypto.html#crypto_verifier_verify_object_signature_signature_format
    // The signature field accepts a TypedArray type, but it is only available starting ES2017
}
export function createDiffieHellman(prime_length: number, generator?: number | Buffer | ArrayBufferView): DiffieHellman;
export function createDiffieHellman(prime: Buffer | ArrayBufferView): DiffieHellman;
export function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding): DiffieHellman;
export function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding, generator: number | Buffer | ArrayBufferView): DiffieHellman;
export function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding, generator: string, generator_encoding: HexBase64Latin1Encoding): DiffieHellman;
export interface DiffieHellman {
    generateKeys(): Buffer;
    generateKeys(encoding: HexBase64Latin1Encoding): string;
    computeSecret(other_public_key: Buffer | ArrayBufferView): Buffer;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer;
    computeSecret(other_public_key: Buffer | ArrayBufferView, output_encoding: HexBase64Latin1Encoding): string;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding, output_encoding: HexBase64Latin1Encoding): string;
    getPrime(): Buffer;
    getPrime(encoding: HexBase64Latin1Encoding): string;
    getGenerator(): Buffer;
    getGenerator(encoding: HexBase64Latin1Encoding): string;
    getPublicKey(): Buffer;
    getPublicKey(encoding: HexBase64Latin1Encoding): string;
    getPrivateKey(): Buffer;
    getPrivateKey(encoding: HexBase64Latin1Encoding): string;
    setPublicKey(public_key: Buffer | ArrayBufferView): void;
    setPublicKey(public_key: string, encoding: string): void;
    setPrivateKey(private_key: Buffer | ArrayBufferView): void;
    setPrivateKey(private_key: string, encoding: string): void;
    verifyError: number;
}
export function getDiffieHellman(group_name: string): DiffieHellman;
export function pbkdf2(
    password: string | Buffer | ArrayBufferView,
    salt: string | Buffer | ArrayBufferView,
    iterations: number,
    keylen: number,
    digest: string,
    callback: (err: Error | null, derivedKey: Buffer) => any,
): void;
export function pbkdf2Sync(password: string | Buffer | ArrayBufferView, salt: string | Buffer | ArrayBufferView, iterations: number, keylen: number, digest: string): Buffer;

export function randomBytes(size: number): Buffer;
export function randomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;
export function pseudoRandomBytes(size: number): Buffer;
export function pseudoRandomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;

export function randomFillSync<T extends Buffer | ArrayBufferView>(buffer: T, offset?: number, size?: number): T;
export function randomFill<T extends Buffer | ArrayBufferView>(buffer: T, callback: (err: Error | null, buf: T) => void): void;
export function randomFill<T extends Buffer | ArrayBufferView>(buffer: T, offset: number, callback: (err: Error | null, buf: T) => void): void;
export function randomFill<T extends Buffer | ArrayBufferView>(buffer: T, offset: number, size: number, callback: (err: Error | null, buf: T) => void): void;

export interface ScryptOptions {
    N?: number;
    r?: number;
    p?: number;
    maxmem?: number;
}
export function scrypt(
    password: string | Buffer | ArrayBufferView,
    salt: string | Buffer | ArrayBufferView,
    keylen: number, callback: (err: Error | null, derivedKey: Buffer) => void,
): void;
export function scrypt(
    password: string | Buffer | ArrayBufferView,
    salt: string | Buffer | ArrayBufferView,
    keylen: number,
    options: ScryptOptions,
    callback: (err: Error | null, derivedKey: Buffer) => void,
): void;
export function scryptSync(password: string | Buffer | ArrayBufferView, salt: string | Buffer | ArrayBufferView, keylen: number, options?: ScryptOptions): Buffer;

export interface RsaPublicKey {
    key: string;
    padding?: number;
}
export interface RsaPrivateKey {
    key: string;
    passphrase?: string;
    padding?: number;
}
export function publicEncrypt(public_key: string | RsaPublicKey, buffer: Buffer | ArrayBufferView): Buffer;
export function privateDecrypt(private_key: string | RsaPrivateKey, buffer: Buffer | ArrayBufferView): Buffer;
export function privateEncrypt(private_key: string | RsaPrivateKey, buffer: Buffer | ArrayBufferView): Buffer;
export function publicDecrypt(public_key: string | RsaPublicKey, buffer: Buffer | ArrayBufferView): Buffer;
export function getCiphers(): string[];
export function getCurves(): string[];
export function getFips(): 1 | 0;
export function getHashes(): string[];
export class ECDH {
    static convertKey(
        key: string | Buffer | ArrayBufferView,
        curve: string,
        inputEncoding?: HexBase64Latin1Encoding,
        outputEncoding?: "latin1" | "hex" | "base64",
        format?: "uncompressed" | "compressed" | "hybrid",
    ): Buffer | string;
    generateKeys(): Buffer;
    generateKeys(encoding: HexBase64Latin1Encoding, format?: ECDHKeyFormat): string;
    computeSecret(other_public_key: Buffer | ArrayBufferView): Buffer;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer;
    computeSecret(other_public_key: Buffer | ArrayBufferView, output_encoding: HexBase64Latin1Encoding): string;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding, output_encoding: HexBase64Latin1Encoding): string;
    getPrivateKey(): Buffer;
    getPrivateKey(encoding: HexBase64Latin1Encoding): string;
    getPublicKey(): Buffer;
    getPublicKey(encoding: HexBase64Latin1Encoding, format?: ECDHKeyFormat): string;
    setPrivateKey(private_key: Buffer | ArrayBufferView): void;
    setPrivateKey(private_key: string, encoding: HexBase64Latin1Encoding): void;
}
export function createECDH(curve_name: string): ECDH;
export function timingSafeEqual(a: Buffer | ArrayBufferView, b: Buffer | ArrayBufferView): boolean;
/** @deprecated since v10.0.0 */
export const DEFAULT_ENCODING: string;

export type KeyType = 'rsa' | 'dsa' | 'ec';
export type KeyFormat = 'pem' | 'der';

export interface BasePrivateKeyEncodingOptions<T extends KeyFormat> {
    format: T;
    cipher?: string;
    passphrase?: string;
}

export interface RSAKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
    /**
     * Key size in bits
     */
    modulusLength: number;
    /**
     * @default 0x10001
     */
    publicExponent?: number;

    publicKeyEncoding: {
        type: 'pkcs1' | 'spki';
        format: PubF;
    };
    privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
        type: 'pkcs1' | 'pkcs8';
    };
}

export interface DSAKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
    /**
     * Key size in bits
     */
    modulusLength: number;
    /**
     * Size of q in bits
     */
    divisorLength: number;

    publicKeyEncoding: {
        type: 'spki';
        format: PubF;
    };
    privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
        type: 'pkcs8';
    };
}

export interface ECKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
    /**
     * Name of the curve to use.
     */
    namedCurve: string;

    publicKeyEncoding: {
        type: 'pkcs1' | 'spki';
        format: PubF;
    };
    privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
        type: 'sec1' | 'pkcs8';
    };
}

export interface KeyPairSyncResult<T1 extends string | Buffer, T2 extends string | Buffer> {
    publicKey: T1;
    privateKey: T2;
}

export function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
export function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
export function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
export function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;

export function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
export function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
export function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
export function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;

export function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
export function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
export function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
export function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;

export function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
export function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
export function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
export function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;

export function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
export function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
export function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
export function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;

export function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
export function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
export function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
export function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;

export namespace generateKeyPair {
    function __promisify__(type: "rsa", options: RSAKeyPairOptions<'pem', 'pem'>): Promise<{ publicKey: string, privateKey: string }>;
    function __promisify__(type: "rsa", options: RSAKeyPairOptions<'pem', 'der'>): Promise<{ publicKey: string, privateKey: Buffer }>;
    function __promisify__(type: "rsa", options: RSAKeyPairOptions<'der', 'pem'>): Promise<{ publicKey: Buffer, privateKey: string }>;
    function __promisify__(type: "rsa", options: RSAKeyPairOptions<'der', 'der'>): Promise<{ publicKey: Buffer, privateKey: Buffer }>;

    function __promisify__(type: "dsa", options: DSAKeyPairOptions<'pem', 'pem'>): Promise<{ publicKey: string, privateKey: string }>;
    function __promisify__(type: "dsa", options: DSAKeyPairOptions<'pem', 'der'>): Promise<{ publicKey: string, privateKey: Buffer }>;
    function __promisify__(type: "dsa", options: DSAKeyPairOptions<'der', 'pem'>): Promise<{ publicKey: Buffer, privateKey: string }>;
    function __promisify__(type: "dsa", options: DSAKeyPairOptions<'der', 'der'>): Promise<{ publicKey: Buffer, privateKey: Buffer }>;

    function __promisify__(type: "ec", options: ECKeyPairOptions<'pem', 'pem'>): Promise<{ publicKey: string, privateKey: string }>;
    function __promisify__(type: "ec", options: ECKeyPairOptions<'pem', 'der'>): Promise<{ publicKey: string, privateKey: Buffer }>;
    function __promisify__(type: "ec", options: ECKeyPairOptions<'der', 'pem'>): Promise<{ publicKey: Buffer, privateKey: string }>;
    function __promisify__(type: "ec", options: ECKeyPairOptions<'der', 'der'>): Promise<{ publicKey: Buffer, privateKey: Buffer }>;
}
