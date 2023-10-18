/// <reference types="node" />

export function canYouSee(ks: JWK.Key | JWK.KeyStore, opts: object): JWS.Verifier;

export namespace JWA {
    interface DecryptEncryptOptions {
        aad?: Buffer | undefined;
        adata?: Buffer | undefined;
        iv?: Buffer | undefined;
        tag?: Buffer | undefined; // Not used in encrypt
        mac?: Buffer | undefined; // Not used in encrypt
        epu?: Buffer | undefined; // encryption party info
        epv?: Buffer | undefined; // encryption party info
        kdata?: Buffer | undefined;
        epk?: Buffer | undefined; // ephemeral pub key used in ec
        enc?: string | undefined; // algorithm to use in ec
        alg?: string | undefined; // variation of enc, probably oversight in lib code
        apu?: Buffer | undefined; // agreement party info used in ec
        apv?: Buffer | undefined; // agreement party info used in ec
        p2s?: Buffer | undefined; // used in pbes
        p2c?: number | undefined; // used in pbes
    }

    interface DeriveOptions {
        length?: number | undefined; // key length
        otherInfo?: Buffer | undefined; // info used in concatkdf
        public?: Buffer | undefined; // public key used in ecdh
        hash?: Buffer | undefined; // hash used in ecdh
        salt?: Buffer | undefined; // salt value used in hkdf
        info?: Buffer | undefined; // app identifier info used in hkdf
    }

    interface EncryptReturn {
        data: Buffer; // The cipher text
        tag?: Buffer | undefined; // The tag used in some algorithms
    }

    interface SignReturn {
        data: Buffer; // the data passed into the sign function
        mac: Buffer; // the signature for `data`
    }

    interface SignVerifyOptions {
        loose?: boolean | undefined;
    }

    interface VerifyReturn {
        data: Buffer; // the data passed into the verify function
        mac: Buffer; // the signature for `data`
        valid: boolean; // whether the signature matches the data
    }

    function decrypt(
        alg: string,
        key: string | Buffer,
        cdata: string | Buffer,
        props?: DecryptEncryptOptions,
    ): Promise<Buffer>;

    function derive(alg: string, key: string | Buffer, props?: DeriveOptions): Promise<Buffer>;

    function digest(alg: string, data: string | Buffer, props?: any): Promise<Buffer>;

    function encrypt(
        alg: string,
        key: string | Buffer,
        pdata: string | Buffer,
        props?: DecryptEncryptOptions,
    ): Promise<EncryptReturn>;

    function sign(
        alg: string,
        key: string | Buffer,
        pdata: string | Buffer,
        props: SignVerifyOptions,
    ): Promise<SignReturn>;

    function verify(
        alg: string,
        key: string | Buffer,
        pdata: string | Buffer,
        mac: string | Buffer,
        props: SignVerifyOptions,
    ): Promise<VerifyReturn>;
}

export namespace JWE {
    interface EncryptOptions {
        format?: "general" | "compact" | "flattened" | undefined;
        zip?: boolean | "DEF" | undefined;
        fields?: object | undefined;
        contentAlg?: string | undefined;
        protect?: string | string[] | undefined;
        iv?: string | Buffer | undefined;
    }

    function createEncrypt(keys: JWK.Key | JWK.Key[]): Encryptor;
    function createEncrypt(options: EncryptOptions, key: JWK.Key | JWK.Key[]): Encryptor;

    function createDecrypt(key: JWK.Key | JWK.KeyStore, opts?: any): Decryptor;

    interface Encryptor {
        update(input: any): this;
        final(): Promise<string>;
    }

    interface Decryptor {
        decrypt(input: string): Promise<DecryptResult>;
    }

    interface DecryptResult {
        header: object;
        /**
         * an array of the member names from the "protected" member
         */
        protected: string[];
        /**
         * Key used to decrypt
         */
        key: JWK.Key;
        /**
         * Buffer of the decrypted content
         */
        payload: Buffer;
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
        form?: "json" | "private" | "pkcs8" | "public" | "spki" | "pkix" | "x509" | "pem",
        extras?: Record<string, unknown>,
    ): Promise<Key>;
    /**
     * To import a JWK-set as a keystore
     */
    function asKeyStore(ks: object | string): Promise<KeyStore>;

    function createKey(kty: any, size: any, props: any): Promise<Key>;
    /**
     * To create an empty keystore
     */
    function createKeyStore(): KeyStore;

    function isKey(input: any): input is Key;

    function isKeyStore(input: any): input is KeyStore;

    type KeyUse = "sig" | "enc" | "desc";

    interface JWEEncryptor {
        update(input: any): this;
        final(): Promise<string>;
    }

    interface RawKey {
        alg: string;
        kty: string;
        use: KeyUse;
        kid: string;

        // e and n make up the public key
        e: string;
        n: string;
    }

    interface KeyStoreGetFilter {
        kty?: string | undefined;
        use?: KeyUse | undefined;
        alg?: string | undefined;
    }

    interface KeyStoreGetOptions extends KeyStoreGetFilter {
        kid: string;
    }

    interface KeyStore {
        /**
         * To export the public keys of a keystore as a JWK-set
         */
        toJSON(exportPrivateKeys?: boolean): object;
        /**
         * To retrieve a key from a keystore
         */
        get(kid: string, filter?: KeyStoreGetFilter): Key;
        get(options: KeyStoreGetOptions): Key;
        all(options?: Partial<KeyStoreGetOptions>): Key[];
        add(key: RawKey): Promise<Key>;
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
            key: string | Buffer | Key | object,
            form?: "json" | "private" | "pkcs8" | "public" | "spki" | "pkix" | "x509" | "pem",
            extras?: Record<string, unknown>,
        ): Promise<Key>;

        /**
         * Generates a new random Key into this KeyStore.
         *
         * The type of {size} depends on the value of {kty}:
         *
         * + **`EC`**: String naming the curve to use, which can be one of:
         *   `"P-256"`, `"P-384"`, or `"P-521"` (default is **`"P-256"`**).
         * + **`RSA`**: Number describing the size of the key, in bits (default is
         *   **`2048`**).
         * + **`oct`**: Number describing the size of the key, in bits (default is
         *   **`256`**).
         *
         * Any properties in {props} are applied before the key is generated,
         * and are expected to be data types acceptable in JSON.  This allows the
         * generated key to have a specific key identifier, or to specify its
         * acceptable usage.
         */
        generate(kty: string, size?: string | number, props?: any): Promise<Key>;

        remove(key: Key): void;
    }

    interface Key {
        keystore: KeyStore;
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
    interface SignOptions {
        format?: "compact" | "flattened" | undefined;
        alg?: string | undefined;
        compact?: boolean | undefined;
        fields?: object | undefined;
    }

    function createSign(keys: JWK.Key | JWK.Key[]): Signer;
    function createSign(options: SignOptions, key: JWK.Key | JWK.Key[]): Signer;

    /**
     * Using a keystore.
     */
    function createVerify(
        input?: string | JWK.Key | JWK.KeyStore | object,
        opts?: { allowEmbeddedKey?: boolean | undefined; algorithms?: string[] | undefined; handlers?: any },
    ): Verifier;

    interface CreateSignResult {
        signResult: object;
    }

    interface Signer {
        update(input: Buffer | string, encoding?: string): this;
        final(): Promise<CreateSignResult>;
    }

    interface BaseResult {
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

    interface VerificationResult extends BaseResult {
        /**
         * the verified signature
         */
        signature: Buffer | string;
    }

    interface Verifier {
        verify(input: string, opts?: { allowEmbeddedKey?: boolean | undefined }): Promise<VerificationResult>;
    }

    interface Exp {
        complete(jws: any): any;
    }

    interface VerifyOptions {
        allowEmbeddedKey?: boolean | undefined;
        algorithms?: string[] | undefined;
        handlers: { exp: boolean | Exp };
    }
}

export function parse(input: Buffer | string | object): parse.ParseReturn;

export namespace parse {
    interface ParseReturn {
        type: "JWS" | "JWE";
        format: "compact" | "json";
        input: Buffer | string | object;
        header: object;
        perform: (ks: JWK.KeyStore) => Promise<JWE.DecryptResult> | Promise<JWS.VerificationResult>;
    }
    function compact(input: Buffer | string | object): ParseReturn;

    function json(input: Buffer | string | object): ParseReturn;
}

export namespace util {
    function asBuffer(input: string | Buffer, encoding?: string): Buffer;

    function randomBytes(len: number): Buffer;

    namespace base64url {
        function decode(base64url: string): Buffer;

        function encode(buffer: string | Buffer, encoding?: string): string;
    }

    namespace utf8 {
        function decode(input: string): string;

        function encode(input: string): string;
    }
}
