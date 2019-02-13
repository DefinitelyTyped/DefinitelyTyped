// Type definitions for node-jose 1.1.1
// Project: https://github.com/cisco/node-jose
// Definitions by: Nadun Indunil <https://github.com/nadunindunil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function canYouSee(ks: JWK.Key | JWK.KeyStore, opts: object): JWS.Verifier;

export namespace JWA {
    type decryptEncryptOptions = {
        aad?: Buffer;
        adata?: Buffer;
        iv?: Buffer;
        tag?: Buffer; // Not used in encrypt
        mac?: Buffer; // Not used in encrypt
        epu?: Buffer; // encryption party info
        epv?: Buffer; // encryption party info
        kdata?: Buffer;
        epk?: Buffer; // ephemeral pub key used in ec
        enc?: string; // algorithm to use in ec
        alg?: string; // variation of enc, probably oversight in lib code
        apu?: Buffer; // agreement party info used in ec
        apv?: Buffer; // agreement party info used in ec
        p2s?: Buffer; // used in pbes
        p2c?: number; // used in pbes
    };

    type deriveOptions = {
        length?: number; // key length
        otherInfo?: Buffer; // info used in concatkdf
        public?: Buffer; // public key used in ecdh
        hash?: Buffer; // hash used in ecdh
        salt?: Buffer; // salt value used in hkdf
        info?: Buffer; // app identifier info used in hkdf
    };

    type encryptReturn = {
        data: Buffer; // The cipher text
        tag?: Buffer; // The tag used in some algorithms
    };

    type signReturn = {
        data: Buffer; // the data passed into the sign function
        mac: Buffer; // the signature for `data`
    };

    type signVerifyOptions = { loose?: boolean };

    type verifyReturn = {
        data: Buffer; // the data passed into the verify function
        mac: Buffer; // the signature for `data`
        valid: boolean; // whether the signature matches the data
    };

    function decrypt(
        alg: string,
        key: string | Buffer,
        cdata: string | Buffer,
        props?: decryptEncryptOptions
    ): Promise<Buffer>;

    function derive(alg: string, key: string | Buffer, props?: deriveOptions): Promise<Buffer>;

    function digest(alg: string, data: string | Buffer, props?: any): Promise<Buffer>;

    function encrypt(
        alg: string,
        key: string | Buffer,
        pdata: string | Buffer,
        props?: decryptEncryptOptions
    ): Promise<encryptReturn>;

    function sign(
        alg: string,
        key: string | Buffer,
        pdata: string | Buffer,
        props: signVerifyOptions
    ): Promise<signReturn>;

    function verify(
        alg: string,
        key: string | Buffer,
        pdata: string | Buffer,
        mac: string | Buffer,
        props: signVerifyOptions
    ): Promise<verifyReturn>;
}

export namespace JWE {
    function createEncrypt(key: JWK.Key): JWE.Encryptor;
    function createEncrypt(keys: JWK.Key[]): JWE.Encryptor;
    function createEncrypt(
        options: {
            format?: 'compact' | 'flattened';
            zip?: boolean;
            fields?: object;
        },
        key: JWK.Key
    ): JWE.Encryptor;

    function createDecrypt(key: JWK.Key | JWK.KeyStore, opts?: any): JWE.Decryptor;

    export interface Encryptor {
        update(input: any): this;
        final(): Promise<string>;
    }

    export interface Decryptor {
        decrypt(input: string): Promise<JWE.DecryptResult>;
    }

    export interface DecryptResult {
        /**
         * an array of the member names from the "protected" member
         */
        protected: string[];
        /**
         * the decrypted content (alternate)
         */
        plaintext: Buffer;
    }
}

export namespace JWK {
    const MODE_DECRYPT: string;

    const MODE_ENCRYPT: string;

    const MODE_SIGN: string;

    const MODE_UNWRAP: string;

    const MODE_VERIFY: string;

    const MODE_WRAP: string;

    function asKey(
        key: string | Buffer | object | RawKey,
        form?: 'json' | 'private' | 'pkcs8' | 'public' | 'spki' | 'pkix' | 'x509' | 'pem'
    ): Promise<JWK.Key>;
    /**
     * To import a JWK-set as a keystore
     */
    function asKeyStore(ks: object | string): Promise<JWK.KeyStore>;

    function createKey(kty: any, size: any, props: any): Promise<JWK.Key>;
    /**
     * To create an empty keystore
     */
    function createKeyStore(): JWK.KeyStore;
    
    function isKey(input: any): input is JWK.Key;

    function isKeyStore(input: any): input is JWK.KeyStore;

    export type KeyUse = 'sig' | 'enc' | 'desc';

    export interface JWEEncryptor {
        update(input: any): this;
        final(): Promise<string>;
    }

    export interface RawKey {
        alg: string;
        kty: string;
        use: KeyUse;

        // e and n make up the public key
        e: string;
        n: string;
    }

    export interface KeyStoreGetFilter {
        kty?: string;
        use?: KeyUse;
        alg?: string;
    }

    export interface KeyStoreGetOptions extends KeyStoreGetFilter {
        kid: string;
    }

    export interface KeyStore {
        /**
         * To export the public keys of a keystore as a JWK-set
         */
        toJSON(exportPrivateKeys?: boolean): object;
        /**
         * To retrieve a key from a keystore
         */
        get(kid: string, filter?: KeyStoreGetFilter): RawKey;
        get(options: KeyStoreGetOptions): RawKey;
        all(options?: Partial<KeyStoreGetOptions>): RawKey[];
        add(key: RawKey): Promise<JWK.Key>;
        /**
         * @param key
         *  String serialization of a JSON JWK/(base64-encoded) PEM/(binary-encoded) DER
         *  Buffer of a JSON JWK/(base64-encoded) PEM/(binary-encoded) DER
         * @param form
         * is either a:
         * - "json" for a JSON stringified JWK
         * - "private" for a DER encoded 'raw' private key
         * - "pkcs8" for a DER encoded (unencrypted!) PKCS8 private key
         * - "public" for a DER encoded SPKI public key (alternate to 'spki')
         * - "spki" for a DER encoded SPKI public key
         * - "pkix" for a DER encoded PKIX X.509 certificate
         * - "x509" for a DER encoded PKIX X.509 certificate
         * - "pem" for a PEM encoded of PKCS8 / SPKI / PKIX
         */
        add(
            key: string | Buffer | JWK.Key | object,
            form?: 'json' | 'private' | 'pkcs8' | 'public' | 'spki' | 'pkix' | 'x509' | 'pem'
        ): Promise<JWK.Key>;

        generate(kty: string, size?: string | number, props?: any): Promise<JWK.Key>;

        remove(key: JWK.Key): void;
    }

    export interface Key {
        keystore: JWK.KeyStore;
        length: number;
        kty: string;
        kid: string;
        use: KeyUse;
        alg: string;

        toPEM(isPrivate?: boolean): string;
        toJSON(isPrivate?: boolean, excluded?: string[]): object;
        thumbprint(hash?: string): Promise<string>;
    }
}

export namespace JWS {
    function createSign(key: JWK.Key): JWS.Signer;
    function createSign(keys: JWK.Key[]): JWS.Signer;
    function createSign(
        options: {
            format?: 'compact' | 'flattened';
            alg?: string;
            compact?: boolean;
            fields?: object;
        },
        key: JWK.Key | JWK.Key[]
    ): JWS.Signer;

    /**
     * Using a keystore.
     */
    function createVerify(keyStore: JWK.KeyStore): JWS.Verifier;

    /**
     * To verify using a key embedded in the JWS
     */
    function createVerify(): JWS.Verifier;

    function createVerify(
        input: string | JWK.Key | object,
        opts?: { allowEmbeddedKey?: boolean; algorithms?: string[]; handlers?: any }
    ): JWS.Verifier;

    export interface createSignResult {
        signResult: object;
    }

    export interface Signer {
        update(input: Buffer | string, encoding?: string): this;
        final(): Promise<createSignResult>;
    }

    export interface BaseResult {
        /**
         * the combined 'protected' and 'unprotected' header members
         */
        header: object;
        /**
         * the signed content
         */
        payload: Buffer;
        /**
         * The key used to verify the signature
         */
        key: JWK.Key;
        protected: string[];
    }

    export interface VerificationResult extends BaseResult {
        /**
         * the verified signature
         */
        signature: Buffer | string;
    }

    export interface Verifier {
        verify(input: string, opts?: { allowEmbeddedKey?: boolean }): Promise<VerificationResult>;
    }

    export interface exp {
        complete(jws: any): any;
    }

    export interface verifyOptions {
        allowEmbeddedKey?: boolean;
        algorithms?: string[];
        handlers: { exp: boolean | exp };
    }
}

type parseReturn = {
    type: 'JWS' | 'JWE';
    format: 'compact' | 'json';
    input: Buffer | string | object;
    header: object;
    perform: (ks: JWK.KeyStore) => Promise<JWE.DecryptResult> | Promise<JWS.VerificationResult>;
};

export function parse(input: Buffer | string | object): parseReturn;

export namespace parse {
    function compact(input: Buffer | string | object): parseReturn;

    function json(input: Buffer | string | object): parseReturn;
}

export namespace util {
    function asBuffer(input: string | Buffer, encoding?: string): Buffer;

    function randomBytes(len: number): Buffer;

    namespace base64url {
        function decode(base64url: string): string;

        function encode(buffer: string | Buffer, encoding?: string): string;
    }

    namespace utf8 {
        function decode(input: string): string;

        function encode(input: string): string;
    }
}
