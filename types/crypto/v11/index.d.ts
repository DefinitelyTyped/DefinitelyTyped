// Type definitions for non-npm package Node.js 11.15
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
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
//                 Ivan Sieder <https://github.com/ivansieder>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer } from 'buffer';
import * as stream from 'stream';

export {};

export interface Certificate {
    exportChallenge(spkac: BinaryLike): Buffer;
    exportPublicKey(spkac: BinaryLike): Buffer;
    verifySpkac(spkac: Binary): boolean;
}
export const Certificate: {
    new(): Certificate;
    (): Certificate;
};

export namespace constants { // https://nodejs.org/dist/latest-v10.x/docs/api/crypto.html#crypto_crypto_constants
    const OPENSSL_VERSION_NUMBER: number;

    /** Applies multiple bug workarounds within OpenSSL. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html for detail. */
    const SSL_OP_ALL: number;
    /** Allows legacy insecure renegotiation between OpenSSL and unpatched clients or servers. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html. */
    const SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
    /** Attempts to use the server's preferences instead of the client's when selecting a cipher. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html. */
    const SSL_OP_CIPHER_SERVER_PREFERENCE: number;
    /** Instructs OpenSSL to use Cisco's "speshul" version of DTLS_BAD_VER. */
    const SSL_OP_CISCO_ANYCONNECT: number;
    /** Instructs OpenSSL to turn on cookie exchange. */
    const SSL_OP_COOKIE_EXCHANGE: number;
    /** Instructs OpenSSL to add server-hello extension from an early version of the cryptopro draft. */
    const SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
    /** Instructs OpenSSL to disable a SSL 3.0/TLS 1.0 vulnerability workaround added in OpenSSL 0.9.6d. */
    const SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
    /** Instructs OpenSSL to always use the tmp_rsa key when performing RSA operations. */
    const SSL_OP_EPHEMERAL_RSA: number;
    /** Allows initial connection to servers that do not support RI. */
    const SSL_OP_LEGACY_SERVER_CONNECT: number;
    const SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
    const SSL_OP_MICROSOFT_SESS_ID_BUG: number;
    /** Instructs OpenSSL to disable the workaround for a man-in-the-middle protocol-version vulnerability in the SSL 2.0 server implementation. */
    const SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
    const SSL_OP_NETSCAPE_CA_DN_BUG: number;
    const SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
    const SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
    const SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
    /** Instructs OpenSSL to disable support for SSL/TLS compression. */
    const SSL_OP_NO_COMPRESSION: number;
    const SSL_OP_NO_QUERY_MTU: number;
    /** Instructs OpenSSL to always start a new session when performing renegotiation. */
    const SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
    const SSL_OP_NO_SSLv2: number;
    const SSL_OP_NO_SSLv3: number;
    const SSL_OP_NO_TICKET: number;
    const SSL_OP_NO_TLSv1: number;
    const SSL_OP_NO_TLSv1_1: number;
    const SSL_OP_NO_TLSv1_2: number;
    const SSL_OP_PKCS1_CHECK_1: number;
    const SSL_OP_PKCS1_CHECK_2: number;
    /** Instructs OpenSSL to always create a new key when using temporary/ephemeral DH parameters. */
    const SSL_OP_SINGLE_DH_USE: number;
    /** Instructs OpenSSL to always create a new key when using temporary/ephemeral ECDH parameters. */
    const SSL_OP_SINGLE_ECDH_USE: number;
    const SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
    const SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
    const SSL_OP_TLS_BLOCK_PADDING_BUG: number;
    const SSL_OP_TLS_D5_BUG: number;
    /** Instructs OpenSSL to disable version rollback attack detection. */
    const SSL_OP_TLS_ROLLBACK_BUG: number;

    const ENGINE_METHOD_RSA: number;
    const ENGINE_METHOD_DSA: number;
    const ENGINE_METHOD_DH: number;
    const ENGINE_METHOD_RAND: number;
    const ENGINE_METHOD_EC: number;
    const ENGINE_METHOD_CIPHERS: number;
    const ENGINE_METHOD_DIGESTS: number;
    const ENGINE_METHOD_PKEY_METHS: number;
    const ENGINE_METHOD_PKEY_ASN1_METHS: number;
    const ENGINE_METHOD_ALL: number;
    const ENGINE_METHOD_NONE: number;

    const DH_CHECK_P_NOT_SAFE_PRIME: number;
    const DH_CHECK_P_NOT_PRIME: number;
    const DH_UNABLE_TO_CHECK_GENERATOR: number;
    const DH_NOT_SUITABLE_GENERATOR: number;

    const ALPN_ENABLED: number;

    const RSA_PKCS1_PADDING: number;
    const RSA_SSLV23_PADDING: number;
    const RSA_NO_PADDING: number;
    const RSA_PKCS1_OAEP_PADDING: number;
    const RSA_X931_PADDING: number;
    const RSA_PKCS1_PSS_PADDING: number;
    /** Sets the salt length for RSA_PKCS1_PSS_PADDING to the digest size when signing or verifying. */
    const RSA_PSS_SALTLEN_DIGEST: number;
    /** Sets the salt length for RSA_PKCS1_PSS_PADDING to the maximum permissible value when signing data. */
    const RSA_PSS_SALTLEN_MAX_SIGN: number;
    /** Causes the salt length for RSA_PKCS1_PSS_PADDING to be determined automatically when verifying a signature. */
    const RSA_PSS_SALTLEN_AUTO: number;

    const POINT_CONVERSION_COMPRESSED: number;
    const POINT_CONVERSION_UNCOMPRESSED: number;
    const POINT_CONVERSION_HYBRID: number;

    /** Specifies the built-in default cipher list used by Node.js (colon-separated values). */
    const defaultCoreCipherList: string;
    /** Specifies the active default cipher list used by the current Node.js process  (colon-separated values). */
    const defaultCipherList: string;
}

/** @deprecated since v10.0.0 */
export const fips: boolean;

export function createHash(algorithm: string, options?: stream.TransformOptions): Hash;
export function createHmac(algorithm: string, key: BinaryLike, options?: stream.TransformOptions): Hmac;

export type Utf8AsciiLatin1Encoding = "utf8" | "ascii" | "latin1";
export type HexBase64Latin1Encoding = "latin1" | "hex" | "base64";
export type Utf8AsciiBinaryEncoding = "utf8" | "ascii" | "binary";
export type HexBase64BinaryEncoding = "binary" | "base64" | "hex";
export type ECDHKeyFormat = "compressed" | "uncompressed" | "hybrid";

export class Hash extends stream.Transform {
    private constructor();
    update(data: BinaryLike): Hash;
    update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Hash;
    digest(): Buffer;
    digest(encoding: HexBase64Latin1Encoding): string;
}
export class Hmac extends stream.Transform {
    private constructor();
    update(data: BinaryLike): Hmac;
    update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Hmac;
    digest(): Buffer;
    digest(encoding: HexBase64Latin1Encoding): string;
}

export type KeyObjectType = 'secret' | 'public' | 'private';

export interface KeyExportOptions<T extends KeyFormat> {
    type: 'pkcs1' | 'spki' | 'pkcs8' | 'sec1';
    format: T;
    cipher?: string;
    passphrase?: string | Buffer;
}

export class KeyObject {
    private constructor();
    asymmetricKeyType?: KeyType;
    export(options: KeyExportOptions<'pem'>): string | Buffer;
    export(options?: KeyExportOptions<'der'>): Buffer;
    symmetricSize?: number;
    type: KeyObjectType;
}

export type CipherCCMTypes = 'aes-128-ccm' | 'aes-192-ccm' | 'aes-256-ccm';
export type CipherGCMTypes = 'aes-128-gcm' | 'aes-192-gcm' | 'aes-256-gcm';

export type Binary = Buffer | ArrayBufferView;
export type BinaryLike = string | Binary;

export type CipherKey = BinaryLike | KeyObject;

export interface CipherCCMOptions extends stream.TransformOptions {
    authTagLength: number;
}
export interface CipherGCMOptions extends stream.TransformOptions {
    authTagLength?: number;
}
/** @deprecated since v10.0.0 use createCipheriv() */
export function createCipher(algorithm: CipherCCMTypes, password: BinaryLike, options: CipherCCMOptions): CipherCCM;
/** @deprecated since v10.0.0 use createCipheriv() */
export function createCipher(algorithm: CipherGCMTypes, password: BinaryLike, options?: CipherGCMOptions): CipherGCM;
/** @deprecated since v10.0.0 use createCipheriv() */
export function createCipher(algorithm: string, password: BinaryLike, options?: stream.TransformOptions): Cipher;

export function createCipheriv(
    algorithm: CipherCCMTypes,
    key: CipherKey,
    iv: BinaryLike | null,
    options: CipherCCMOptions
): CipherCCM;
export function createCipheriv(
    algorithm: CipherGCMTypes,
    key: CipherKey,
    iv: BinaryLike | null,
    options?: CipherGCMOptions
): CipherGCM;
export function createCipheriv(
    algorithm: string, key: CipherKey, iv: BinaryLike | null, options?: stream.TransformOptions
): Cipher;

export class Cipher extends stream.Transform {
    private constructor();
    update(data: BinaryLike): Buffer;
    update(data: string, input_encoding: Utf8AsciiBinaryEncoding): Buffer;
    update(data: Binary, input_encoding: undefined, output_encoding: HexBase64BinaryEncoding): string;
    update(data: string, input_encoding: Utf8AsciiBinaryEncoding | undefined, output_encoding: HexBase64BinaryEncoding): string;
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
export function createDecipher(algorithm: CipherCCMTypes, password: BinaryLike, options: CipherCCMOptions): DecipherCCM;
/** @deprecated since v10.0.0 use createDecipheriv() */
export function createDecipher(algorithm: CipherGCMTypes, password: BinaryLike, options?: CipherGCMOptions): DecipherGCM;
/** @deprecated since v10.0.0 use createDecipheriv() */
export function createDecipher(algorithm: string, password: BinaryLike, options?: stream.TransformOptions): Decipher;

export function createDecipheriv(
    algorithm: CipherCCMTypes,
    key: BinaryLike,
    iv: BinaryLike | null,
    options: CipherCCMOptions,
): DecipherCCM;
export function createDecipheriv(
    algorithm: CipherGCMTypes,
    key: BinaryLike,
    iv: BinaryLike | null,
    options?: CipherGCMOptions,
): DecipherGCM;
export function createDecipheriv(algorithm: string, key: BinaryLike, iv: BinaryLike | null, options?: stream.TransformOptions): Decipher;

export class Decipher extends stream.Transform {
    private constructor();
    update(data: Binary): Buffer;
    update(data: string, input_encoding: HexBase64BinaryEncoding): Buffer;
    update(data: Binary, input_encoding: undefined, output_encoding: Utf8AsciiBinaryEncoding): string;
    update(data: string, input_encoding: HexBase64BinaryEncoding | undefined, output_encoding: Utf8AsciiBinaryEncoding): string;
    final(): Buffer;
    final(output_encoding: string): string;
    setAutoPadding(auto_padding?: boolean): this;
    // setAuthTag(tag: Binary): this;
    // setAAD(buffer: Binary): this;
}
export interface DecipherCCM extends Decipher {
    setAuthTag(buffer: Binary): this;
    setAAD(buffer: Binary, options: { plaintextLength: number }): this;
}
export interface DecipherGCM extends Decipher {
    setAuthTag(buffer: Binary): this;
    setAAD(buffer: Binary, options?: { plaintextLength: number }): this;
}

export interface PrivateKeyInput {
    key: string | Buffer;
    format?: KeyFormat;
    type?: 'pkcs1' | 'pkcs8' | 'sec1';
    passphrase?: string | Buffer;
}

export interface PublicKeyInput {
    key: string | Buffer;
    format?: KeyFormat;
    type?: 'pkcs1' | 'spki';
}

export function createPrivateKey(key: PrivateKeyInput | string | Buffer): KeyObject;
export function createPublicKey(key: PublicKeyInput | string | Buffer | KeyObject): KeyObject;
export function createSecretKey(key: Buffer): KeyObject;

export function createSign(algorithm: string, options?: stream.WritableOptions): Signer;

export interface SignPrivateKeyInput extends PrivateKeyInput {
    padding?: number;
    saltLength?: number;
}

export type KeyLike = string | Buffer | KeyObject;

export class Signer extends stream.Writable {
    private constructor();

    update(data: BinaryLike): Signer;
    update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Signer;
    sign(private_key: SignPrivateKeyInput | KeyLike): Buffer;
    sign(private_key: SignPrivateKeyInput | KeyLike, output_format: HexBase64Latin1Encoding): string;
}

export function createVerify(algorith: string, options?: stream.WritableOptions): Verify;
export class Verify extends stream.Writable {
    private constructor();

    update(data: BinaryLike): Verify;
    update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Verify;
    verify(object: object | KeyLike, signature: Binary): boolean;
    verify(object: object | KeyLike, signature: string, signature_format?: HexBase64Latin1Encoding): boolean;
    // https://nodejs.org/api/crypto.html#crypto_verifier_verify_object_signature_signature_format
    // The signature field accepts a TypedArray type, but it is only available starting ES2017
}
export function createDiffieHellman(prime_length: number, generator?: number | Binary): DiffieHellman;
export function createDiffieHellman(prime: Binary): DiffieHellman;
export function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding): DiffieHellman;
export function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding, generator: number | Binary): DiffieHellman;
export function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding, generator: string, generator_encoding: HexBase64Latin1Encoding): DiffieHellman;
export class DiffieHellman {
    private constructor();
    generateKeys(): Buffer;
    generateKeys(encoding: HexBase64Latin1Encoding): string;
    computeSecret(other_public_key: Binary): Buffer;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer;
    computeSecret(other_public_key: Binary, output_encoding: HexBase64Latin1Encoding): string;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding, output_encoding: HexBase64Latin1Encoding): string;
    getPrime(): Buffer;
    getPrime(encoding: HexBase64Latin1Encoding): string;
    getGenerator(): Buffer;
    getGenerator(encoding: HexBase64Latin1Encoding): string;
    getPublicKey(): Buffer;
    getPublicKey(encoding: HexBase64Latin1Encoding): string;
    getPrivateKey(): Buffer;
    getPrivateKey(encoding: HexBase64Latin1Encoding): string;
    setPublicKey(public_key: Binary): void;
    setPublicKey(public_key: string, encoding: string): void;
    setPrivateKey(private_key: Binary): void;
    setPrivateKey(private_key: string, encoding: string): void;
    verifyError: number;
}
export function getDiffieHellman(group_name: string): DiffieHellman;
export function pbkdf2(
    password: BinaryLike,
    salt: BinaryLike,
    iterations: number,
    keylen: number,
    digest: string,
    callback: (err: Error | null, derivedKey: Buffer) => any,
): void;
export function pbkdf2Sync(password: BinaryLike, salt: BinaryLike, iterations: number, keylen: number, digest: string): Buffer;

export function randomBytes(size: number): Buffer;
export function randomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;
export function pseudoRandomBytes(size: number): Buffer;
export function pseudoRandomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;

export function randomFillSync<T extends Binary>(buffer: T, offset?: number, size?: number): T;
export function randomFill<T extends Binary>(buffer: T, callback: (err: Error | null, buf: T) => void): void;
export function randomFill<T extends Binary>(buffer: T, offset: number, callback: (err: Error | null, buf: T) => void): void;
export function randomFill<T extends Binary>(buffer: T, offset: number, size: number, callback: (err: Error | null, buf: T) => void): void;

export interface ScryptOptions {
    N?: number;
    r?: number;
    p?: number;
    maxmem?: number;
}
export function scrypt(
    password: BinaryLike,
    salt: BinaryLike,
    keylen: number, callback: (err: Error | null, derivedKey: Buffer) => void,
): void;
export function scrypt(
    password: BinaryLike,
    salt: BinaryLike,
    keylen: number,
    options: ScryptOptions,
    callback: (err: Error | null, derivedKey: Buffer) => void,
): void;
export function scryptSync(password: BinaryLike, salt: BinaryLike, keylen: number, options?: ScryptOptions): Buffer;

export interface RsaPublicKey {
    key: KeyLike;
    padding?: number;
}
export interface RsaPrivateKey {
    key: KeyLike;
    passphrase?: string;
    padding?: number;
}
export function publicEncrypt(public_key: RsaPublicKey | KeyLike, buffer: Binary): Buffer;
export function privateDecrypt(private_key: RsaPrivateKey | KeyLike, buffer: Binary): Buffer;
export function privateEncrypt(private_key: RsaPrivateKey | KeyLike, buffer: Binary): Buffer;
export function publicDecrypt(public_key: RsaPublicKey | KeyLike, buffer: Binary): Buffer;
export function getCiphers(): string[];
export function getCurves(): string[];
export function getFips(): 1 | 0;
export function getHashes(): string[];
export class ECDH {
    private constructor();
    static convertKey(
        key: BinaryLike,
        curve: string,
        inputEncoding?: HexBase64Latin1Encoding,
        outputEncoding?: "latin1" | "hex" | "base64",
        format?: "uncompressed" | "compressed" | "hybrid",
    ): Buffer | string;
    generateKeys(): Buffer;
    generateKeys(encoding: HexBase64Latin1Encoding, format?: ECDHKeyFormat): string;
    computeSecret(other_public_key: Binary): Buffer;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer;
    computeSecret(other_public_key: Binary, output_encoding: HexBase64Latin1Encoding): string;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding, output_encoding: HexBase64Latin1Encoding): string;
    getPrivateKey(): Buffer;
    getPrivateKey(encoding: HexBase64Latin1Encoding): string;
    getPublicKey(): Buffer;
    getPublicKey(encoding: HexBase64Latin1Encoding, format?: ECDHKeyFormat): string;
    setPrivateKey(private_key: Binary): void;
    setPrivateKey(private_key: string, encoding: HexBase64Latin1Encoding): void;
}
export function createECDH(curve_name: string): ECDH;
export function timingSafeEqual(a: Binary, b: Binary): boolean;
/** @deprecated since v10.0.0 */
export const DEFAULT_ENCODING: string;

export type KeyType = 'rsa' | 'dsa' | 'ec';
export type KeyFormat = 'pem' | 'der';

export interface BasePrivateKeyEncodingOptions<T extends KeyFormat> {
    format: T;
    cipher: string;
    passphrase: string;
}

export interface KeyPairKeyObjectResult {
    publicKey: KeyObject;
    privateKey: KeyObject;
}

export interface ECKeyPairKeyObjectOptions {
    /**
     * Name of the curve to use.
     */
    namedCurve: string;
}

export interface RSAKeyPairKeyObjectOptions {
    /**
     * Key size in bits
     */
    modulusLength: number;

    /**
     * @default 0x10001
     */
    publicExponent?: number;
}

export interface DSAKeyPairKeyObjectOptions {
    /**
     * Key size in bits
     */
    modulusLength: number;

    /**
     * Size of q in bits
     */
    divisorLength: number;
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
export function generateKeyPairSync(type: 'rsa', options: RSAKeyPairKeyObjectOptions): KeyPairKeyObjectResult;

export function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
export function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
export function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
export function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;
export function generateKeyPairSync(type: 'dsa', options: DSAKeyPairKeyObjectOptions): KeyPairKeyObjectResult;

export function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
export function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
export function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
export function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;
export function generateKeyPairSync(type: 'ec', options: ECKeyPairKeyObjectOptions): KeyPairKeyObjectResult;

export function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
export function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
export function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
export function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;
export function generateKeyPair(type: 'rsa', options: RSAKeyPairKeyObjectOptions, callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void): void;

export function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
export function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
export function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
export function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;
export function generateKeyPair(type: 'dsa', options: DSAKeyPairKeyObjectOptions, callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void): void;

export function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
export function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
export function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
export function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;
export function generateKeyPair(type: 'ec', options: ECKeyPairKeyObjectOptions, callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void): void;

export namespace generateKeyPair {
    function __promisify__(type: "rsa", options: RSAKeyPairOptions<'pem', 'pem'>): Promise<{ publicKey: string, privateKey: string }>;
    function __promisify__(type: "rsa", options: RSAKeyPairOptions<'pem', 'der'>): Promise<{ publicKey: string, privateKey: Buffer }>;
    function __promisify__(type: "rsa", options: RSAKeyPairOptions<'der', 'pem'>): Promise<{ publicKey: Buffer, privateKey: string }>;
    function __promisify__(type: "rsa", options: RSAKeyPairOptions<'der', 'der'>): Promise<{ publicKey: Buffer, privateKey: Buffer }>;
    function __promisify__(type: "rsa", options: RSAKeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;

    function __promisify__(type: "dsa", options: DSAKeyPairOptions<'pem', 'pem'>): Promise<{ publicKey: string, privateKey: string }>;
    function __promisify__(type: "dsa", options: DSAKeyPairOptions<'pem', 'der'>): Promise<{ publicKey: string, privateKey: Buffer }>;
    function __promisify__(type: "dsa", options: DSAKeyPairOptions<'der', 'pem'>): Promise<{ publicKey: Buffer, privateKey: string }>;
    function __promisify__(type: "dsa", options: DSAKeyPairOptions<'der', 'der'>): Promise<{ publicKey: Buffer, privateKey: Buffer }>;
    function __promisify__(type: "dsa", options: DSAKeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;

    function __promisify__(type: "ec", options: ECKeyPairOptions<'pem', 'pem'>): Promise<{ publicKey: string, privateKey: string }>;
    function __promisify__(type: "ec", options: ECKeyPairOptions<'pem', 'der'>): Promise<{ publicKey: string, privateKey: Buffer }>;
    function __promisify__(type: "ec", options: ECKeyPairOptions<'der', 'pem'>): Promise<{ publicKey: Buffer, privateKey: string }>;
    function __promisify__(type: "ec", options: ECKeyPairOptions<'der', 'der'>): Promise<{ publicKey: Buffer, privateKey: Buffer }>;
    function __promisify__(type: "ec", options: ECKeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;
}
