declare module "crypto" {
    export interface Certificate {
        exportChallenge(spkac: string | Buffer): Buffer;
        exportPublicKey(spkac: string | Buffer): Buffer;
        verifySpkac(spkac: Buffer): boolean;
    }
    export var Certificate: {
        new (): Certificate;
        (): Certificate;
    }

    export var fips: boolean;

    export interface CredentialDetails {
        pfx: string;
        key: string;
        passphrase: string;
        cert: string;
        ca: string | string[];
        crl: string | string[];
        ciphers: string;
    }
    export interface Credentials { context?: any; }
    export function createCredentials(details: CredentialDetails): Credentials;
    export function createHash(algorithm: string): Hash;
    export function createHmac(algorithm: string, key: string | Buffer): Hmac;

    type Utf8AsciiLatin1Encoding = "utf8" | "ascii" | "latin1";
    type HexBase64Latin1Encoding = "latin1" | "hex" | "base64";
    type Utf8AsciiBinaryEncoding = "utf8" | "ascii" | "binary";
    type HexBase64BinaryEncoding = "binary" | "base64" | "hex";
    type ECDHKeyFormat = "compressed" | "uncompressed" | "hybrid";

    export interface Hash extends NodeJS.ReadWriteStream {
        update(data: string | Buffer): Hash;
        update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Hash;
        digest(): Buffer;
        digest(encoding: HexBase64Latin1Encoding): string;
    }
    export interface Hmac extends NodeJS.ReadWriteStream {
        update(data: string | Buffer): Hmac;
        update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Hmac;
        digest(): Buffer;
        digest(encoding: HexBase64Latin1Encoding): string;
    }
    export function createCipher(algorithm: string, password: any): Cipher;
    export function createCipheriv(algorithm: string, key: any, iv: any): Cipher;
    export interface Cipher extends NodeJS.ReadWriteStream {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding: Utf8AsciiBinaryEncoding): Buffer;
        update(data: Buffer, input_encoding: any, output_encoding: HexBase64BinaryEncoding): string;
        update(data: string, input_encoding: Utf8AsciiBinaryEncoding, output_encoding: HexBase64BinaryEncoding): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding?: boolean): void;
        getAuthTag(): Buffer;
        setAAD(buffer: Buffer): void;
    }
    export function createDecipher(algorithm: string, password: any): Decipher;
    export function createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
    export interface Decipher extends NodeJS.ReadWriteStream {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding: HexBase64BinaryEncoding): Buffer;
        update(data: Buffer, input_encoding: any, output_encoding: Utf8AsciiBinaryEncoding): string;
        update(data: string, input_encoding: HexBase64BinaryEncoding, output_encoding: Utf8AsciiBinaryEncoding): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding?: boolean): void;
        setAuthTag(tag: Buffer): void;
        setAAD(buffer: Buffer): void;
    }
    export function createSign(algorithm: string): Signer;
    export interface Signer extends NodeJS.WritableStream {
        update(data: string | Buffer): Signer;
        update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Signer;
        sign(private_key: string | { key: string; passphrase?: string }): Buffer;
        sign(private_key: string | { key: string; passphrase?: string }, output_format: HexBase64Latin1Encoding): string;
    }
    export function createVerify(algorith: string): Verify;
    export interface Verify extends NodeJS.WritableStream {
        update(data: string | Buffer): Verify;
        update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Verify;
        verify(object: string, signature: Buffer): boolean;
        verify(object: string, signature: string, signature_format: HexBase64Latin1Encoding): boolean;
    }
    export function createDiffieHellman(prime_length: number, generator?: number): DiffieHellman;
    export function createDiffieHellman(prime: Buffer): DiffieHellman;
    export function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding): DiffieHellman;
    export function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding, generator: number | Buffer): DiffieHellman;
    export function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding, generator: string, generator_encoding: HexBase64Latin1Encoding): DiffieHellman;
    export interface DiffieHellman {
        generateKeys(): Buffer;
        generateKeys(encoding: HexBase64Latin1Encoding): string;
        computeSecret(other_public_key: Buffer): Buffer;
        computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer;
        computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding, output_encoding: HexBase64Latin1Encoding): string;
        getPrime(): Buffer;
        getPrime(encoding: HexBase64Latin1Encoding): string;
        getGenerator(): Buffer;
        getGenerator(encoding: HexBase64Latin1Encoding): string;
        getPublicKey(): Buffer;
        getPublicKey(encoding: HexBase64Latin1Encoding): string;
        getPrivateKey(): Buffer;
        getPrivateKey(encoding: HexBase64Latin1Encoding): string;
        setPublicKey(public_key: Buffer): void;
        setPublicKey(public_key: string, encoding: string): void;
        setPrivateKey(private_key: Buffer): void;
        setPrivateKey(private_key: string, encoding: string): void;
        verifyError: number;
    }
    export function getDiffieHellman(group_name: string): DiffieHellman;
    export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any): void;
    export function pbkdf2Sync(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string): Buffer;
    export function randomBytes(size: number): Buffer;
    export function randomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;
    export function pseudoRandomBytes(size: number): Buffer;
    export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;
    export function randomFillSync(buffer: Buffer | Uint8Array, offset?: number, size?: number): Buffer;
    export function randomFill(buffer: Buffer, callback: (err: Error, buf: Buffer) => void): void;
    export function randomFill(buffer: Uint8Array, callback: (err: Error, buf: Uint8Array) => void): void;
    export function randomFill(buffer: Buffer, offset: number, callback: (err: Error, buf: Buffer) => void): void;
    export function randomFill(buffer: Uint8Array, offset: number, callback: (err: Error, buf: Uint8Array) => void): void;
    export function randomFill(buffer: Buffer, offset: number, size: number, callback: (err: Error, buf: Buffer) => void): void;
    export function randomFill(buffer: Uint8Array, offset: number, size: number, callback: (err: Error, buf: Uint8Array) => void): void;
    export interface RsaPublicKey {
        key: string;
        padding?: number;
    }
    export interface RsaPrivateKey {
        key: string;
        passphrase?: string,
        padding?: number;
    }
    export function publicEncrypt(public_key: string | RsaPublicKey, buffer: Buffer): Buffer
    export function privateDecrypt(private_key: string | RsaPrivateKey, buffer: Buffer): Buffer
    export function privateEncrypt(private_key: string | RsaPrivateKey, buffer: Buffer): Buffer
    export function publicDecrypt(public_key: string | RsaPublicKey, buffer: Buffer): Buffer
    export function getCiphers(): string[];
    export function getCurves(): string[];
    export function getHashes(): string[];
    export interface ECDH {
        generateKeys(): Buffer;
        generateKeys(encoding: HexBase64Latin1Encoding): string;
        generateKeys(encoding: HexBase64Latin1Encoding, format: ECDHKeyFormat): string;
        computeSecret(other_public_key: Buffer): Buffer;
        computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer;
        computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding, output_encoding: HexBase64Latin1Encoding): string;
        getPrivateKey(): Buffer;
        getPrivateKey(encoding: HexBase64Latin1Encoding): string;
        getPublicKey(): Buffer;
        getPublicKey(encoding: HexBase64Latin1Encoding): string;
        getPublicKey(encoding: HexBase64Latin1Encoding, format: ECDHKeyFormat): string;
        setPrivateKey(private_key: Buffer): void;
        setPrivateKey(private_key: string, encoding: HexBase64Latin1Encoding): void;
    }
    export function createECDH(curve_name: string): ECDH;
    export function timingSafeEqual(a: Buffer, b: Buffer): boolean;
    export var DEFAULT_ENCODING: string;
}
