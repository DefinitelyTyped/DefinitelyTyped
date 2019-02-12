declare module "crypto" {
    import * as stream from "stream";

    interface Certificate {
        exportChallenge(spkac: BinaryLike): Buffer;
        exportPublicKey(spkac: BinaryLike): Buffer;
        verifySpkac(spkac: Binary): boolean;
    }
    const Certificate: {
        new(): Certificate;
        (): Certificate;
    };

    /** @deprecated since v10.0.0 */
    const fips: boolean;

    function createHash(algorithm: string, options?: stream.TransformOptions): Hash;
    function createHmac(algorithm: string, key: BinaryLike, options?: stream.TransformOptions): Hmac;

    type Utf8AsciiLatin1Encoding = "utf8" | "ascii" | "latin1";
    type HexBase64Latin1Encoding = "latin1" | "hex" | "base64";
    type Utf8AsciiBinaryEncoding = "utf8" | "ascii" | "binary";
    type HexBase64BinaryEncoding = "binary" | "base64" | "hex";
    type ECDHKeyFormat = "compressed" | "uncompressed" | "hybrid";

    interface Hash extends NodeJS.ReadWriteStream {
        update(data: BinaryLike): Hash;
        update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Hash;
        digest(): Buffer;
        digest(encoding: HexBase64Latin1Encoding): string;
    }
    interface Hmac extends NodeJS.ReadWriteStream {
        update(data: BinaryLike): Hmac;
        update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Hmac;
        digest(): Buffer;
        digest(encoding: HexBase64Latin1Encoding): string;
    }

    export type KeyObjectType = 'secret' | 'public' | 'private';

    interface KeyObject {
        asymmetricKeyType?: KeyType;
        export(options?: {
            type: 'pkcs1' | 'spki' | 'pkcs8' | 'sec1',
            format: KeyFormat,
            cipher?: string,
            passphrase?: string | Buffer
        }): string | Buffer;
        symmetricSize?: number;
        type: KeyObjectType;
    }

    type CipherCCMTypes = 'aes-128-ccm' | 'aes-192-ccm' | 'aes-256-ccm';
    type CipherGCMTypes = 'aes-128-gcm' | 'aes-192-gcm' | 'aes-256-gcm';

    type Binary = Buffer | NodeJS.TypedArray | DataView;
    type BinaryLike = string | Binary;

    type CipherKey = BinaryLike | KeyObject;

    interface CipherCCMOptions extends stream.TransformOptions {
        authTagLength: number;
    }
    interface CipherGCMOptions extends stream.TransformOptions {
        authTagLength?: number;
    }
    /** @deprecated since v10.0.0 use createCipheriv() */
    function createCipher(algorithm: CipherCCMTypes, password: BinaryLike, options: CipherCCMOptions): CipherCCM;
    /** @deprecated since v10.0.0 use createCipheriv() */
    function createCipher(algorithm: CipherGCMTypes, password: BinaryLike, options?: CipherGCMOptions): CipherGCM;
    /** @deprecated since v10.0.0 use createCipheriv() */
    function createCipher(algorithm: string, password: BinaryLike, options?: stream.TransformOptions): Cipher;

    function createCipheriv(
        algorithm: CipherCCMTypes,
        key: CipherKey,
        iv: BinaryLike,
        options: CipherCCMOptions
    ): CipherCCM;
    function createCipheriv(
        algorithm: CipherGCMTypes,
        key: CipherKey,
        iv: BinaryLike,
        options?: CipherGCMOptions
    ): CipherGCM;
    function createCipheriv(
        algorithm: string, key: CipherKey, iv: BinaryLike, options?: stream.TransformOptions
    ): Cipher;

    interface Cipher extends NodeJS.ReadWriteStream {
        update(data: BinaryLike): Buffer;
        update(data: string, input_encoding: Utf8AsciiBinaryEncoding): Buffer;
        update(data: Binary, output_encoding: HexBase64BinaryEncoding): string;
        update(data: Binary, input_encoding: any, output_encoding: HexBase64BinaryEncoding): string;
        // second arg ignored
        update(data: string, input_encoding: Utf8AsciiBinaryEncoding, output_encoding: HexBase64BinaryEncoding): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding?: boolean): this;
        // getAuthTag(): Buffer;
        // setAAD(buffer: Buffer): this; // docs only say buffer
    }
    interface CipherCCM extends Cipher {
        setAAD(buffer: Buffer, options: { plaintextLength: number }): this;
        getAuthTag(): Buffer;
    }
    interface CipherGCM extends Cipher {
        setAAD(buffer: Buffer, options?: { plaintextLength: number }): this;
        getAuthTag(): Buffer;
    }
    /** @deprecated since v10.0.0 use createCipheriv() */
    function createDecipher(algorithm: CipherCCMTypes, password: BinaryLike, options: CipherCCMOptions): DecipherCCM;
    /** @deprecated since v10.0.0 use createCipheriv() */
    function createDecipher(algorithm: CipherGCMTypes, password: BinaryLike, options?: CipherGCMOptions): DecipherGCM;
    /** @deprecated since v10.0.0 use createCipheriv() */
    function createDecipher(algorithm: string, password: BinaryLike, options?: stream.TransformOptions): Decipher;

    function createDecipheriv(
        algorithm: CipherCCMTypes,
        key: BinaryLike,
        iv: BinaryLike,
        options: CipherCCMOptions,
    ): DecipherCCM;
    function createDecipheriv(
        algorithm: CipherGCMTypes,
        key: BinaryLike,
        iv: BinaryLike,
        options?: CipherGCMOptions,
    ): DecipherGCM;
    function createDecipheriv(algorithm: string, key: BinaryLike, iv: BinaryLike, options?: stream.TransformOptions): Decipher;

    interface Decipher extends NodeJS.ReadWriteStream {
        update(data: Binary): Buffer;
        update(data: string, input_encoding: HexBase64BinaryEncoding): Buffer;
        update(data: Binary, input_encoding: any, output_encoding: Utf8AsciiBinaryEncoding): string;
        // second arg is ignored
        update(data: string, input_encoding: HexBase64BinaryEncoding, output_encoding: Utf8AsciiBinaryEncoding): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding?: boolean): this;
        // setAuthTag(tag: Binary): this;
        // setAAD(buffer: Binary): this;
    }
    interface DecipherCCM extends Decipher {
        setAuthTag(buffer: Binary): this;
        setAAD(buffer: Binary, options: { plaintextLength: number }): this;
    }
    interface DecipherGCM extends Decipher {
        setAuthTag(buffer: Binary): this;
        setAAD(buffer: Binary, options?: { plaintextLength: number }): this;
    }

    interface PrivateKeyInput {
        key: string | Buffer;
        format?: KeyFormat;
        type?: 'pkcs1' | 'pkcs8' | 'sec1';
        passphrase?: string | Buffer;
    }

    interface PublicKeyInput {
        key: string | Buffer;
        format?: KeyFormat;
        type?: 'pkcs1' | 'spki';
    }

    function createPrivateKey(key: PrivateKeyInput | string | Buffer): KeyObject;
    function createPublicKey(key: PublicKeyInput | string | Buffer): KeyObject;
    function createSecretKey(key: Buffer): KeyObject;

    function createSign(algorithm: string, options?: stream.WritableOptions): Signer;

    interface SignPrivateKeyInput extends PrivateKeyInput {
        padding?: number;
        saltLength?: number;
    }

    type KeyLike = string | Buffer | KeyObject;

    interface Signer extends NodeJS.WritableStream {
        update(data: BinaryLike): Signer;
        update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Signer;
        sign(private_key: SignPrivateKeyInput | KeyLike): Buffer;
        sign(private_key: SignPrivateKeyInput | KeyLike, output_format: HexBase64Latin1Encoding): string;
    }

    function createVerify(algorith: string, options?: stream.WritableOptions): Verify;
    interface Verify extends NodeJS.WritableStream {
        update(data: BinaryLike): Verify;
        update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Verify;
        verify(object: Object | KeyLike, signature: Binary): boolean;
        verify(object: Object | KeyLike, signature: string, signature_format: HexBase64Latin1Encoding): boolean;
        // https://nodejs.org/api/crypto.html#crypto_verifier_verify_object_signature_signature_format
        // The signature field accepts a TypedArray type, but it is only available starting ES2017
    }
    function createDiffieHellman(prime_length: number, generator?: number | Binary): DiffieHellman;
    function createDiffieHellman(prime: Binary): DiffieHellman;
    function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding): DiffieHellman;
    function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding, generator: number | Binary): DiffieHellman;
    function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding, generator: string, generator_encoding: HexBase64Latin1Encoding): DiffieHellman;
    interface DiffieHellman {
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
    function getDiffieHellman(group_name: string): DiffieHellman;
    function pbkdf2(
        password: BinaryLike,
        salt: BinaryLike,
        iterations: number,
        keylen: number,
        digest: string,
        callback: (err: Error | null, derivedKey: Buffer) => any,
    ): void;
    function pbkdf2Sync(password: BinaryLike, salt: BinaryLike, iterations: number, keylen: number, digest: string): Buffer;

    function randomBytes(size: number): Buffer;
    function randomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;
    function pseudoRandomBytes(size: number): Buffer;
    function pseudoRandomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;

    function randomFillSync<T extends Binary>(buffer: T, offset?: number, size?: number): T;
    function randomFill<T extends Binary>(buffer: T, callback: (err: Error | null, buf: T) => void): void;
    function randomFill<T extends Binary>(buffer: T, offset: number, callback: (err: Error | null, buf: T) => void): void;
    function randomFill<T extends Binary>(buffer: T, offset: number, size: number, callback: (err: Error | null, buf: T) => void): void;

    interface ScryptOptions {
        N?: number;
        r?: number;
        p?: number;
        maxmem?: number;
    }
    function scrypt(
        password: BinaryLike,
        salt: BinaryLike,
        keylen: number, callback: (err: Error | null, derivedKey: Buffer) => void,
    ): void;
    function scrypt(
        password: BinaryLike,
        salt: BinaryLike,
        keylen: number,
        options: ScryptOptions,
        callback: (err: Error | null, derivedKey: Buffer) => void,
    ): void;
    function scryptSync(password: BinaryLike, salt: BinaryLike, keylen: number, options?: ScryptOptions): Buffer;

    interface RsaPublicKey {
        key: KeyLike;
        padding?: number;
    }
    interface RsaPrivateKey {
        key: KeyLike;
        passphrase?: string;
        padding?: number;
    }
    function publicEncrypt(public_key: RsaPublicKey | KeyLike, buffer: Binary): Buffer;
    function privateDecrypt(private_key: RsaPrivateKey | KeyLike, buffer: Binary): Buffer;
    function privateEncrypt(private_key: RsaPrivateKey | KeyLike, buffer: Binary): Buffer;
    function publicDecrypt(public_key: RsaPublicKey | KeyLike, buffer: Binary): Buffer;
    function getCiphers(): string[];
    function getCurves(): string[];
    function getHashes(): string[];
    class ECDH {
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
    function createECDH(curve_name: string): ECDH;
    function timingSafeEqual(a: Binary, b: Binary): boolean;
    /** @deprecated since v10.0.0 */
    const DEFAULT_ENCODING: string;

    export type KeyType = 'rsa' | 'dsa' | 'ec';
    export type KeyFormat = 'pem' | 'der';

    interface BasePrivateKeyEncodingOptions<T extends KeyFormat> {
        format: T;
        cipher: string;
        passphrase: string;
    }

    interface RSAKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
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

    interface DSAKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
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

    interface ECKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
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

    interface KeyPairSyncResult<T1 extends string | Buffer, T2 extends string | Buffer> {
        publicKey: T1;
        privateKey: T2;
    }

    function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;

    function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;

    function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;

    function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
    function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
    function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;

    function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
    function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
    function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;

    function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
    function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
    function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;

    namespace generateKeyPair {
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
}
