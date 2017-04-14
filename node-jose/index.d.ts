// Type definitions for node-jose v0.9.3
// Project: https://github.com/cisco/node-jose
// Definitions by: Jason Burns <https://github.com/Drynwynn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// Most of this documentation comes directly from the excellently documented
// node-jose package, with only a bit added in to explain intermediate types.
// It should currently be considered a wip, as I created it for a personal
// project, but have not spent the necessary time to make it feature complete.
// Uses 'object' so requires tsc >2.2

/// <reference types="node" />

/**
 * Exposes all implemented algorithms through a common interface comprised of
 * six primary 'action' functions.
 */
export module JWA {

    /**
     * Options that can be given to the decrypt function.  Additional data can be
     * passed in with `aad` or `adata` (`aad` will take precedence if both are given),
     * an initialization vector with `iv`, and an authentication tag or code with
     * `tag` or `mac` (`tag` will take precedence).
     */
    type decryptEncryptOptions = {
        aad?: Buffer,
        adata?: Buffer,
        iv?: Buffer,
        tag?: Buffer, // Not used in encrypt
        mac?: Buffer, // Not used in encrypt
        epu?: Buffer, // encryption party info
        epv?: Buffer, // encryption party info
        kdata?: Buffer,
        epk?: Buffer, // ephemeral pub key used in ec
        enc?: string, // algorithm to use in ec
        alg?: string, // variation of enc, probably oversight in lib code
        apu?: Buffer, // agreement party info used in ec
        apv?: Buffer, // agreement party info used in ec
        p2s?: Buffer, // used in pbes
        p2c?: number // used in pbes
    };

    /**
     * Options that can be given to the derive functions.  Some options are only viable
     * for certain algorithms.  Future doc will expand these use cases.
     */
    type deriveOptions = {
        length?: number, // key length
        otherInfo?: Buffer, // info used in concatkdf
        public?: Buffer, // public key used in ecdh
        hash?: Buffer, // hash used in ecdh
        salt?: Buffer, // salt value used in hkdf
        info?: Buffer, // app identifier info used in hkdf
    };

    /**
     * Options used for all sign algorithms.
     */
    type signVerifyOptions = { loose?: boolean }; // used in hmac algo

    /**
     * The object that is returned from encrypt options.  Some algorithms return a
     * tag value, so a simple buffer cannot be used here.
     */
    type encryptReturn = {
        data: Buffer, // The cipher text
        tag?: Buffer // The tag used in some algorithms
    }

    /**
     * Return object for sign functions.  The data is replicated into the return for
     * ease of use.
     */
    type signReturn = {
        data: Buffer, // the data passed into the sign function
        mac: Buffer // the signature for `data`
    }

    /**
     * Return object for verify functions.  The data and mac are replicated into the
     * return for ease of use.
     */
    type verifyReturn = {
        data: Buffer, // the data passed into the verify function
        mac: Buffer, // the signature for `data`
        valid: boolean // whether the signature matches the data
    }

    /**
     * Run the decryption algorithm given by `alg`, if it is supported in the current
     * implementation.
     *
     * @param {string} alg The algorithm to use
     * @param {(string | Buffer)} key The decryption key
     * @param {(string | Buffer)} cdata The ciphertext
     * @param {decryptOptions} [props] Any of the allowed decryption options given in `JWA.decryptEncryptOptions`
     * @returns {Promise<Buffer>} A buffer with the plain text.
     */
    function decrypt(alg: string, key: string | Buffer, cdata: string | Buffer, props?: decryptEncryptOptions): Promise<Buffer>;

    /**
     * Derive a new cryptographically strong key from weaker key material, using `alg` if it is
     * implemented
     *
     * @param {string} alg The algorithm to use
     * @param {(string | Buffer)} key The weak key material
     * @param {deriveOptions} props Options to be used by algorithm, defined in `JWA.deriveOptions`.
     * @returns {Promise<Buffer>} The stronger key material
     */
    function derive(alg: string, key: string | Buffer, props?: deriveOptions): Promise<Buffer>;

    /**
     * Create a hash of `data` using the algorithm `alg` if implemented.
     *
     * @param {string} alg The algorithm to use
     * @param {(string | Buffer)} data The data to hash
     * @param {*} props Unused at this time, left for future implementations
     * @returns {Promise<Buffer>} The hash
     */
    function digest(alg: string, data: string | Buffer, props?: any): Promise<Buffer>;

    /**
     * Run the encryption algorithm given by `alg`, if it is supported by the implementation.
     *
     * @param {string} alg The algorithm to use
     * @param {(string | Buffer)} key The encryption key
     * @param {(string | Buffer)} pdata The plaintext
     * @param {encryptOptions} props Options used by the specified algorithm in `JWA.decryptEncryptOptions`.
     * @returns {Promise<Buffer>} The ciphertext in `data` field, `tag` field included if in algorithm.
     */
    function encrypt(alg: string, key: string | Buffer, pdata: string | Buffer, props?: decryptEncryptOptions): Promise<encryptReturn>;

    /**
     * Sign `pdata` with the request algorithm if supported.
     *
     * @param {string} alg The algorithm to use
     * @param {(string | Buffer)} key The signing key
     * @param {(string | Buffer)} pdata The data to add integrity to
     * @param {signOptions} props Options used by the algorithm as defined in `JWA.signVerifyOptions`
     * @returns {Promise<signReturn>} The signature is in the `mac` field.
     */
    function sign(alg: string, key: string | Buffer, pdata: string | Buffer, props: signVerifyOptions): Promise<signReturn>;

    /**
     * Verify the data in `pdata` is valid by using `key` and `mac`.
     *
     * @param {string} alg The algorithm to use
     * @param {(string | Buffer)} key The verifying key
     * @param {(string | Buffer)} pdata The signed data to verify
     * @param {(string | Buffer)} mac The signature as previously returned via the `sign` function
     * @param {signVerifyOptions} props Options used by the algorithm as defined in `JWA.signVerifyOptions`
     * @returns {Promise<verifyReturn} object with a `valid` field denoted if signature is valid.
     */
    function verify(alg: string, key: string | Buffer, pdata: string | Buffer, mac: string | Buffer, props: signVerifyOptions): Promise<verifyReturn>;
}

/**
 * Contains all the encrypton tools for JWTs.
 */
export module JWE {

    /**
     * Used to customize decryption processes. The following options are currently
     * supported:
     *
     * @property {} handlers An object where each name is a JOSE header member name and
     *              the value can be a boolean, function, or an object.
     *
     * Handlers are intended to support 'crit' extensions. When a boolean value,
     * the member is expected to be processed once decryption is fully complete.
     * When a function, it is called just before the ciphertext is decrypted
     * (processed as if it were a `prepare` handler, as decribed in `decryptCritProcessors`).
     * Note that normal processing of `decrypt()` does not continue until all
     * relevant handlers have completed. Any changes handlers make to the
     * provided objects affects `decrypt()`'s processing.
     */
    type decryptCritHeaderOptions = {
        handlers: { [crit_header: string]: boolean | Function | decryptCritProcessors }
    };

    /**
     * For the critical header processing, the options may include an object like this,
     * which defines these fields to run at various times of decryption processing.
     * @property {Function} recipient A function called after a valid key is
     *           determined; it takes an object describing the recipient, and
     *           returns a Promise that is fulfilled once the handler's processing
     *           is complete.
     * @property {Function} prepare A function called just prior to decrypting
     *           the ciphertext; it takes an object describing the decryption
     *           result (but containing `ciphertext` and `tag' instead of `payload`
     *           and `plaintext`), and returns a Promise that is fulfilled once
     *           the handler's processing is complete.
     * @property {Function} complete A function called once decryption is complete,
     *           just prior to fulfilling the Promise returned by `decrypt()`; it
     *           takes the object that will be returned by `decrypt()`'s fulfilled
     *           Promise, and returns a Promise that is fulfilled once the handler's
     *           processing is complete.
     */
    type decryptCritProcessors = {
        recipient?: Function,
        prepare?: Function,
        complete?: Function
    };

    /**
     * Object that defines the output that is given from the `decrypt()` function
     * of a `Decryptor`.
     *
     * @property {any} header The JOSE Header, combined from the relevant "header" and
     *           "protected" fields from the original JWE object.
     * @property {string[]} protected An array containing the names of the protected fields
     * @property {JWK.Key} key The used to decrypt the content
     * @property {Buffer} payload The decrypted content (as a Buffer)
     * @property {Buffer} plaintext An alias for `payload`
     */
    type decryptReturn = {
        header: any,
        protected: string[],
        key: JWK.Key,
        payload: Buffer,
        plaintext: Buffer
    };

    /**
     * The options for {@link createEncrypt}.
     *
     * @property {boolean|string} zip Determines the compression algorithm to
     *           apply to the plaintext (if any) before it is encrypted. This can
     *           also be `true` (which is equivalent to `"DEF"`) or **`false`**
     *           (the default, which is equivalent to no compression).
     * @property {string} format Determines the serialization format of the
     *           output.  Expected to be `"general"` for general JSON
     *           Serialization, `"flattened"` for flattened JSON Serialization,
     *           or `"compact"` for Compact Serialization (default is
     *           **`"general"`**).
     * @property {boolean} compact Determines if the output is the Compact
     *           serialization (`true`) or the JSON serialization (**`false`**,
     *           the default).
     * @property {string} contentAlg The algorithm used to encrypt the plaintext
     *           (default is **`"A128CBC-HS256"`**).
     * @property {string|string[]} protect The names of the headers to integrity
     *           protect.  The value `""` means that none of the header parameters
     *           are integrity protected, while `"*"` (the default) means that all
     *           header parameters are integrity protected.
     * @property {object} fields Any extra fields to include in the JWT.
     * @property {string} aad Additional authenticated data to include
     * @property {string} cek A content encryption key for the underlying algorithm
     * @property {string} iv An init vector for the underlying algorithm.
     */
    type encOpts = {
        zip?: boolean | string,
        format?: string,
        compact?: boolean,
        contentAlg?: string,
        protect?: string | string[],
        fields?: any,
        aad?: string,
        cek?: string,
        iv?: string
    };

    /**
     * Factory function that reates a new Decrypter for the given Key or KeyStore.
     *
     * @param {(JWK.KeyStore|JWK.Key)} ks The Key or KeyStore to use for decryption.
     * @param {decryptCritHeaderOptions} [opts] The options for this decryptor.
     * @returns {Decrypter} The new Decryptor.
     */
    function createDecrypt(ks: JWK.KeyStore | JWK.Key, opts?: decryptCritHeaderOptions): Decrypter;

    /**
     * Factory function to create `Encrypter`s.  See doc for opts and return for more info.
     *
     * @param {enc_opts} opts The options used to create the Encrypter.
     * @param {(JWK.Key|JWK.Key[]|{key: JWK.Key}|{key: JWK.Key}[])} rcpts The recipient list for the JWT
     * @returns {Encrypter} An object that can perform actions turning JWTs into JWEs.
     */
    function createEncrypt(opts: encOpts, rcpts: JWK.Key | JWK.Key[] | { key: JWK.Key } | { key: JWK.Key }[]): Encrypter;
    function createEncrypt(rcpts: JWK.Key | JWK.Key[] | { key: JWK.Key } | { key: JWK.Key }[]): Encrypter;

    /**
     * @class Decrypter
     * @classdesc
     * Processor of encrypted data.
     *
     * @description
     * **NOTE:** This class cannot be instantiated directly. Instead
     * call {@link createDecrypt}.
     */
    interface Decrypter {

        /**
         * Decrypts the given input.
         *
         * {opts}, if provided, is used to customize this specific decrypt operation.
         * This argument has the same semantics as {JWE.createDecrypt}, and takes
         * precedence over those options.
         *
         * @param {object|string} input The encrypted content
         * @param {decryptCritHeaderOptions} [opts] The options for this decryption operation.
         * @returns {Promise<decryptReturn>} A promise for the decyprted plaintext
         * @memberOf Decrypter
         */
        decrypt(input: object | string, opts?: decryptCritHeaderOptions): Promise<decryptReturn>;
    }

    /**
     * @class Encrypter
     * @classdesc
     * Generator of encrypted data.
     *
     * @description
     * **NOTE:** This class cannot be instantiated directly. Instead call
     * {@link createEncrypt}.
     */
    interface Encrypter {
        /**
         * Indicates the compression algorithm applied to the plaintext
         * before it is encrypted.  The possible values are:
         *
         * + **`"DEF"`**: Compress the plaintext using the DEFLATE algorithm.
         * + **`""`**: Do not compress the plaintext.
         *
         * @type {string}
         * @memberOf Encrypter
         * @readonly
         */
        zip: string;

        /**
         * Indicates whether the output of this encryption generator is
         * using the Compact serialization (`true`) or the JSON
         * serialization (`false`).
         *
         * @type {boolean}
         * @memberOf Encrypter
         * @readonly
         */
        compact: boolean;

        /**
         * Indicates the format the output of this encryption generator takes.
         *
         * @type {string}
         * @memberOf Encrypter
         * @readonly
         */
        format: string;

        /**
         * The header parameter names that are protected. Protected header fields
         * are first serialized to UTF-8 then encoded as util.base64url, then used as
         * the additional authenticated data in the encryption operation.
         *
         * @type {string[]}
         * @memberOf Encrypter
         * @readonly
         */
        protected: string[];

        /**
         * The global header parameters, both protected and unprotected. Call
         * {@link Encrypter#protected} to determine which parameters will
         * be protected.
         *
         * @type {object}
         * @memberOf Encrypter
         * @readonly
         */
        header: object;

        /**
         * Updates the plaintext data for the encryption generator. The plaintext
         * is appended to the end of any other plaintext already applied.
         *
         * If {data} is a Buffer, {encoding} is ignored. Otherwise, {data} is
         * converted to a Buffer internally to {encoding}.
         *
         * @param {(Buffer|string)} [data] The plaintext to apply.
         * @param {string} [encoding] The encoding of the plaintext.
         * @returns {Encrypter} This encryption generator.
         * @throws {Error} If ciphertext has already been generated.
         * @memberOf Encrypter
         */
        update(data?: Buffer | string, encoding?: string): Encrypter;

        /**
         * Finishes the encryption operation.
         *
         * The returned Promise, when fulfilled, is the JSON Web Encryption (JWE)
         * object, either in the Compact (if {@link Encrypter#compact} is
         * `true`) or the JSON serialization.
         *
         * @param {(Buffer|string)} [data] The final plaintext data to apply.
         * @param {string} [encoding] The encoding of the final plaintext data (if any).
         * @returns {(Promise<string|object>)} A promise for the encryption operation.
         * @throws {Error} If ciphertext has already been generated.
         * @memberOf Encrypter
         */
        final(data?: Buffer | string, encoding?: string): Promise<string | object>;
    }
}

/**
 * Tools for creating and manipulating keys and keystores.
 */
export module JWK {

    /**
     * The following constants are used to select the different modes for
     * operation, their names are self-explanatory.
     */
    const MODE_DECRYPT: string;
    const MODE_ENCRYPT: string;
    const MODE_SIGN: string;
    const MODE_UNWRAP: string;
    const MODE_VERIFY: string;
    const MODE_WRAP: string;

    // These are copied in code directly from KeyStore statics, don't know
    // how to mimic that in d.ts, so for now they're copy pasta.  Also, the javadoc will be
    // on these defitions as the actual library will not usually have you executing the static
    // methods themselves (e.g. you'll do JWK.asKey instead of JWK.KeyStore.asKey()).
    /**
     * Coerces the given object into a Key. If {key} is an instance of JWK.Key,
     * it is returned directly. Otherwise, this method first creates a new
     * JWK.KeyStore and calls {@link KeyStore#add} on this new KeyStore.
     *
     * @param {(object|string)} key The value to coerce into a Key
     * @param {string} [form] The format of a String Key to expect
     * @param {object} [extras] extra jwk fields inserted when importing from a non json string (eg "pem")
     * @returns {Promise<JWK.Key>} A promise for the coerced Key.
     */
    function asKey(key: object | string, form?: string, extras?: object): Promise<JWK.Key>;

    /**
     * Coerces the given object into a KeyStore. This method uses the following
     * algorithm to coerce {ks}:
     *
     * 1. if {ks} is an instance of JWK.KeyStore, it is returned directly
     * 2. if {ks} is a string, it is parsed into a JSON value
     * 3. if {ks} is an array, it creates a new JWK.KeyStore and calls {@link
     *    JWK.KeyStore#add} for each element in the {ks} array.
     * 4. if {ks} is a JSON object, it creates a new JWK.KeyStore and calls {@link
     *    JWK.KeyStore#add} for each element in the "keys" property.
     *
     * @param {object|string} ks The value to coerce into a KeyStore
     * @returns {Promise<JWK.KeyStore>} A promise for the coerced KeyStore.
     */
    function asKeyStore(ks: object | string): Promise<JWK.KeyStore>;

    /**
     * Creates a new empty KeyStore.
     *
     * @returns {JWK.KeyStore} The empty KeyStore.
     */
    function createKeyStore(): JWK.KeyStore;

    /**
     * Determines if the given object is a JWK.Key instance.
     *
     * @param {object} obj The object to test
     * @returns {boolean} `true` if {obj} is a JWK.Key
     */
    function isKey(obj: any): boolean;

    /**
     * Determines if the given object is an instance of JWK.KeyStore.
     *
     * @param {*} obj The object to test
     * @returns {boolean} `true` if {obj} is an instance of JWK.KeyStore,
     *          and `false` otherwise.
     */
    function isKeyStore(obj: any): boolean;

    /**
     * Options that can be used for searching a keystore for specific keys.
     */
    type KS_search_props = { alg?: string, use?: string, kid?: string, kty?: string };

    /**
     * @class JWK.KeyStore
     * @classdesc
     * Represents a collection of Keys.
     *
     * @description
     * **NOTE:** This constructor cannot be called directly. Instead call {@link
     * JWK.createKeyStore}.
     */
    interface KeyStore {
        /**
         * @method JWK.KeyStore#add
         * @description
         * Adds a Key to this KeyStore. If {jwk} is a string, it is first
         * parsed into a plain JSON object. If {jwk} is already an instance
         * of JWK.Key, its (public) JSON representation is first obtained
         * then applied to a new JWK.Key object within this KeyStore.
         *
         * @param {(string|JWK.Key|object)} key The JSON Web Key (JWK)
         * @param {string} [form] The formate of a string key to expect
         * @param {*} [extras] extra jwk fields inserted when importing from a non json string (eg "pem")
         * @returns {Promise<JWK.Key>} The promise for the added key
         *
         * @memberOf KeyStore
         */
        add(key: string | JWK.Key | object, form?: string, extras?: any): Promise<JWK.Key>;

        /**
         * Retrieves all of the contained Keys that optinally match all of the
         * given properties.
         *
         * If {props} are specified, this method only returns Keys which exactly
         * match the given properties. The properties can be any of the
         * following:
         *
         * + **alg**: The algorithm for the Key.
         * + **use**: The usage for the Key.
         * + **kid**: The identifier for the Key.
         *
         * If no properties are given, this method returns all of the Keys for this
         * KeyStore.
         *
         * @param {JWK.KS_search_props} [props] The properties to match against
         * @param {boolean} [local = false] `true` if only the Keys
         *        directly contained by this KeyStore should be returned, or
         *        `false` if it should return all Keys of this KeyStore and
         *        its ancestors.
         * @returns {JWK.Key[]} The list of matching Keys, or an empty array if no
         *          matches are found.
         *
         * @memberOf KeyStore
         */
        all(props?: JWK.KS_search_props, local?: boolean): JWK.Key[];

        /**
         * @method JWK.KeyStore#generate
         * @description
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
         *
         * The returned Promise, when fulfilled, returns the generated Key.
         *
         * @param {string} kty The type of generated key
         * @param {(string|number)} [size] The size of the generated key
         * @param {*} [props] Additional properties to apply to the generated
         *        key.
         * @returns {Promise<JWK.Key>} The promise for the generated Key
         * @throws {Error} If {kty} is not supported
         *
         * @memberOf KeyStore
         */
        generate(kty: string, size?: string | number, props?: any): Promise<JWK.Key>;

        /**
         * Retrieves the contained Key matching the given {kid}, and optionally
         * all of the given properties.  This method equivalent to calling
         * {@link JWK.Store#all}, then returning the first Key whose
         * "kid" is {kid}. If {kid} is undefined, then the first Key that
         * is returned from `all()` is returned.
         *
         * @param {String} [kid]
         * @param {object} [props]
         * @param {Boolean} [local = false]
         * @returns {JWK.Key}
         *
         * @param {string} [kid] The key identifier to match against.
         * @param {JWK.KS_search_props} [props] The properties to match against.
         * @param {boolean} [local = false] `true` if only the Keys
         *        directly contained by this KeyStore should be returned, or
         *        `false` if it should return all Keys of this KeyStore and
         *        its ancestors.
         * @returns {JWK.Key} The Key matching {kid} and {props}, or `null`
         *          if no match is found.
         *
         * @memberOf KeyStore
         */
        get(kid?: string, props?: JWK.KS_search_props, local?: boolean): JWK.Key;
        get(props?: JWK.KS_search_props, local?: boolean): JWK.Key;

        /**
         * @method JWK.KeyStore#remove
         * @description
         * Removes a Key from this KeyStore.
         *
         * **NOTE:** The removed Key's {keystore} property is not changed.
         *
         * @param {JWK.Key} key The key to remove.
         *
         * @memberOf KeyStore
         */
        remove(key: JWK.Key): void;

        /**
         * @method JWK.KeyStore#temp
         * @description
         * Creates a temporary KeyStore based on this KeyStore.
         *
         * @returns {JWK.KeyStore} The temporary KeyStore.
         *
         * @memberOf KeyStore
         */
        temp(): JWK.KeyStore;

        /**
         * @method JWK.KeyStore#toJSON
         * @description
         * Generates a JSON representation of this KeyStore, which conforms
         * to a JWK Set from {I-D.ietf-jose-json-web-key}.
         *
         * @param {boolean} [isPrivate = false] `true` if the private fields
         *        of stored keys are to be included.
         * @returns {*} The JSON representation of this KeyStore.
         *
         * @memberOf KeyStore
         */
        toJSON(isPrivate?: boolean): any;
    }

    // The below functions are technically defined as static functions on the KeyStore class,
    // and then copied to the exports for the JWK module.  See the documentation above for their
    // use, but they are here just for completion sake, but commented out as you should use them
    // from the module as intended.
    /*
    var KeyStore: {
      asKey(key: object|string, form: string, extras: object): Promise<JWK.Key>;
      asKeyStore(ks: any): Promise<JWK.KeyStore>;
      createKeyStore(): JWK.KeyStore;
      isKey(obj: any): boolean;
      isKeyStore(obj: any): boolean;
    }
    */

    /**
     * @class JWK.Key
     * @classdesc
     * Represents a JSON Web Key instance.
     *
     * @description
     * **NOTE:** This class cannot be instantiated directly. Instead call
     * {@link JWK.asKey}, {@link JWK.KeyStore#add}, or
     * {@link JWK.KeyStore#generate}.
     */
    interface Key {

        /**
         * @member {String} JWK.Key#alg
         * @description
         * The sole algorithm this key can be used for.
         *
         * @type {string}
         * @memberOf Key
         */
        alg: string;

        /**
         * @member {JWK.KeyStore} JWK.Key#keystore
         * @description
         * The owning keystore.
         *
         * @type {JWK.KeyStore}
         * @memberOf Key
         */
        keystore: JWK.KeyStore;

        /**
         * @member {string} JWK.Key#kid
         * @description
         * The identifier for this Key.
         *
         * @type {string}
         * @memberOf Key
         */
        kid: string;

        /**
         * @member {string} JWK.Key#kty
         * @description
         * The type of Key.
         *
         * @type {string}
         * @memberOf Key
         */
        kty: string;

        /**
         * @member {number} JWK.Key#length
         * @description
         * The size of this Key, in bits.
         *
         * @type {number}
         * @memberOf Key
         */
        length: number;

        /**
         * @member {String} JWK.Key#use
         * @description
         * The usage for this Key.
         *
         * @type {string}
         * @memberOf Key
         */
        use: string;

        /**
         * @method JWK.Key#algorithms
         * @description
         * The possible algorithms this Key can be used for. The returned
         * list is not any particular order, but is filtered based on the
         * Key's intended usage.
         *
         * @param {string} mode The operation mode, see the MODE_* JWK constants.
         * @returns {string[]} The list of supported algorithms
         * @see JWK.Key#supports
         * @memberOf Key
         */
        algorithms: (mode: string) => string[];

        /**
         * @method JWK.Key#decrypt
         * @description
         * Decrypts the given data using the specified algorithm.
         *
         * **NOTE:** This is the primitive decryption operation; the input is
         * _**NOT**_ a JSON Web Encryption (JWE) object.
         *
         * **NOTE:** This operation is treated as distinct from {@link
         * JWK.Key#unwrap}, as different algorithms and properties are often used
         * for unwrapping a key versues decrypting arbitrary data.
         *
         * The Promise, when fulfilled, returns the plaintext data.
         *
         * @param {String} alg The decryption algorithm.
         * @param {Buffer|String} data The data to decypt.
         * @param {object} [props] Additional data for the decryption operation.
         * @returns {Promise} The promise for the decryption operation.
         * @throws {Error} If {alg} is not appropriate for this Key; or if
         *         the Key does not contain the appropriate properties.
         *
         *
         * @memberOf Key
         */
        decrypt: (alg: string, data: string | Buffer, props?: any) => Promise<object>;

        /**
         * @method JWK.Key#encrypt
         * @description
         * Encrypts the given data using the specified algorithm.
         *
         * **NOTE:** This is the primitive encryption operation; the output is
         * _**NOT**_ a JSON Web Encryption (JWE) object.
         *
         * **NOTE:** This operation is treated as distinct from {@link
         * JWK.Key#wrap}, as different algorithms and properties are often
         * used for wrapping a key versues encrypting arbitrary data.
         *
         * The Promise, when fulfilled, returns an object with the following
         * properties:
         *
         * + **data**: The ciphertext data
         * + **mac**: The associated message authentication code (MAC).
         *
         * @param {String} alg The encryption algorithm
         * @param {Buffer|String} data The data to encrypt
         * @param {object} [props] Additional properties for the encryption
         *        algorithm.
         * @returns {Promise} The promise for the encryption operation.
         * @throws {Error} If {alg} is not appropriate for this Key; or if
         *         this Key does not contain the appropriate parameters.
         *
         *
         * @memberOf Key
         */
        encrypt: (alg: string, data: string | Buffer, props?: any) => Promise<object>;

        /**
         * @method JWK.Key#get
         * @description
         * Retrieves the value of the given parameter. The value returned by this
         * method is in its natural format, which might not exactly match its
         * JSON encoding (e.g., a binary string rather than a base64url-encoded
         * string).
         *
         * **NOTE:** This method can return `false`. Call
         * {@link JWK.Key#has} to determine if the parameter is present.
         *
         * @param {String} name The name of the parameter
         * @param {Boolean} [isPrivate=false] `true` if private parameters should
         *        be checked.
         * @returns {any} The value of the named parameter, or undefined if
         *          it is not present.
         *
         *
         * @memberOf Key
         */
        get: (name: string, isPrivate?: boolean) => any;

        /**
         * @method JWK.Key#has
         * @description
         * Determines if this Key contains the given parameter.
         *
         * @param {string} name The name of the parameter
         * @param {boolean} [isPrivate=false] `true` if private parameters should be
         *        checked.
         * @returns {boolean} `true` if the given parameter is present; `false`
         *          otherwise.
         * @memberOf Key
         */
        has: (name: string, isPrivate?: boolean) => boolean;

        /**
         * @method JWK.Key#sign
         * @description
         * Sign the given data using the specified algorithm.
         *
         * **NOTE:** This is the primitive signing operation; the output is
         * _**NOT**_ a JSON Web Signature (JWS) object.
         *
         * The Promise, when fulfilled, returns an object with the following
         * properties:
         *
         * + **data**: The data that was signed (and should be equal to {data}).
         * + **mac**: The signature or message authentication code (MAC).
         *
         * @param {String} alg The signing algorithm
         * @param {String|Buffer} data The data to sign
         * @param {object} [props] Additional properties for the signing
         *        algorithm.
         * @returns {Promise} The promise for the signing operation.
         * @throws {Error} If {alg} is not appropriate for this Key; or if
         *         this Key does not contain the appropriate parameters.
         * @memberOf Key
         */
        sign: (alg: string, data: string | Buffer, props?: any) => Promise<object>;

        /**
         * @method JWK.Key#supports
         * @description
         * Determines if the given algorithm is supported.
         *
         * @param {String} alg The algorithm in question
         * @param {String} [mode] The operation mode
         * @returns {Boolean} `true` if {alg} is supported, and `false` otherwise.
         * @see JWK.Key#algorithms
         * @memberOf Key
         */
        supports: (alg: string, mode?: string) => boolean;

        /**
         * Generates the thumbprint of this Key.
         *
         * @param {String} [hash] The hash algorithm to use
         * @returns {Promise} The promise for the thumbprint generation.
         * @memberOf Key
         */
        thumbprint: (hash?: string) => Promise<string>;

        /**
         * @method JWK.Key#toJSON
         * @description
         * Returns the JSON representation of this Key.  All properties of the
         * returned JSON object are properly encoded (e.g., base64url encoding for
         * any binary strings).
         *
         * @param {Boolean} [isPrivate=false] `true` if private parameters should be
         *        included.
         * @param {String[]} [excluded] The list of parameters to exclude from
         *        the returned JSON.
         * @returns {object} The plain JSON object
         *
         *
         * @memberOf Key
         */
        toJSON: (isPrivate?: boolean, excluded?: string[]) => object;

        /**
         * @method JWK.Key#toObject
         * @description
         * Returns the plain object representing this Key.  All properties of the
         * returned object are in their natural encoding (e.g., binary strings
         * instead of base64url encoded).
         *
         * @param {Boolean} [isPrivate=false] `true` if private parameters should be
         *        included.
         * @param {String[]} [excluded] The list of parameters to exclude from
         *        the returned object.
         * @returns {object} The plain object.
         *
         *
         * @memberOf Key
         */
        toObject: (isPrivate?: boolean, excluded?: string[]) => object;

        /**
         * @method JWK.Key#toPEM
         * @description
         * Returns the PEM representation of this Key as a string.
         *
         * @param {Boolean} [isPrivate=false] `true` if private parameters should be
         *        included.
         * @returns {string} The PEM-encoded string
         * @memberOf Key
         */
        toPEM: (include_priv?: boolean) => string;

        /**
         * @method JWK.Key#unwrap
         * @description
         * Unwraps the given key using the specified algorithm.
         *
         * **NOTE:** This is the primitive unwrap operation; the input is
         * _**NOT**_ a JSON Web Encryption (JWE) object.
         *
         * **NOTE:** This operation is treated as distinct from {@link
         * JWK.Key#decrypt}, as different algorithms and properties are often used
         * for unwrapping a key versues decrypting arbitrary data.
         *
         * The Promise, when fulfilled, returns the unwrapped key.
         *
         * @param {String} alg The unwrap algorithm.
         * @param {Buffer|String} data The data to unwrap.
         * @param {object} [props] Additional data for the unwrap operation.
         * @returns {Promise} The promise for the unwrap operation.
         * @throws {Error} If {alg} is not appropriate for this Key; or if
         *         the Key does not contain the appropriate properties.
         * @memberOf Key
         */
        unwrap: (alg: string, data: string | Buffer, props?: any) => Promise<object>;

        /**
         * @method JWK.Key#verify
         * @description
         * Verify the given data and signature using the specified algorithm.
         *
         * **NOTE:** This is the primitive verification operation; the input is
         * _**NOT**_ a JSON Web Signature.</p>
         *
         * The Promise, when fulfilled, returns an object with the following
         * properties:
         *
         * + **data**: The data that was verified (and should be equal to
         *   {data}).
         * + **mac**: The signature or MAC that was verified (and should be equal
         *   to {mac}).
         * + **valid**: `true` if {mac} is valid for {data}.
         *
         * @param {String} alg The verification algorithm
         * @param {String|Buffer} data The data to verify
         * @param {String|Buffer} mac The signature or MAC to verify
         * @param {object} [props] Additional properties for the verification
         *        algorithm.
         * @returns {Promise} The promise for the verification operation.
         * @throws {Error} If {alg} is not appropriate for this Key; or if
         *         the Key does not contain the appropriate properties.
         *
         *
         * @memberOf Key
         */
        verify: (alg: string, data: string | Buffer, mac: string | Buffer, props?: any) => Promise<object>;

        /**
         * @method JWK.Key#wrap
         * @description
         * Wraps the given key using the specified algorithm.
         *
         * **NOTE:** This is the primitive encryption operation; the output is
         * _**NOT**_ a JSON Web Encryption (JWE) object.
         *
         * **NOTE:** This operation is treated as distinct from {@link
         * JWK.Key#encrypt}, as different algorithms and properties are
         * often used for wrapping a key versues encrypting arbitrary data.
         *
         * The Promise, when fulfilled, returns an object with the following
         * properties:
         *
         * + **data**: The ciphertext data
         * + **headers**: The additional header parameters to apply to a JWE.
         *
         * @param {String} alg The encryption algorithm
         * @param {Buffer|String} data The data to encrypt
         * @param {object} [props] Additional properties for the encryption
         *        algorithm.
         * @returns {Promise} The promise for the encryption operation.
         * @throws {Error} If {alg} is not appropriate for this Key; or if
         *         this Key does not contain the appropriate parameters.
         * @memberOf Key
         */
        wrap: (alg: string, data: string | Buffer, props?: any) => Promise<object>;
    }
}

/**
 * Contains all the signing tools for JWTs.
 */
export module JWS {

    /**
     * @property {Boolean} [compact] Use compact serialization?
     * @property {String} [format] The serialization format to use ("compact",
     *                 "flattened", "general")
     * @property {object} [fields] Additional header fields
     * @property {"*" | string[]} [protect] which headers to protect, "*" for all headers.
     */
    type signOpts = {
        alg?: string,
        compact?: boolean,
        format?: string,
        fields?: object,
        protect?: "*" | string[]
    };

    /**
     * @property {JWK.Key} key Key used to sign content
     * @property {object} [header] Per-signatory header fields
     * @property {String} [reference] Reference field to identify the key
     * @property {"*" | string[]} [protect] List of fields to integrity
     *        protect ("*" to protect all fields)
     */
    type signSignatory = {
        key: JWK.Key,
        header?: object,
        reference?: string,
        protect?: "*" | string[]
    };

    /**
   * Used to customize verification processes. The following options are currently
   * supported:
   *
   * @property {} handlers An object where each name is a JOSE header member name and
   *              the value can be a boolean, function, or an object.
   *
   * Handlers are intended to support 'crit' extensions. When a boolean value,
   * the member is expected to be processed once verification is fully complete.
   * When a function, it is called just before the input is verified.
   * (processed as if it were a `prepare` handler, as decribed in `verifyCritProcessors`).
   * Note that normal processing of `verify()` does not continue until all
   * relevant handlers have completed. Any changes handlers make to the
   * provided objects affects `verify()`'s processing.
   */
    type verifyOptions = {
        handlers: { [crit_header: string]: boolean | Function | verifyCritProcessors }
    };

    /**
     * For the critical header processing, the options may include an object like this,
     * which defines these fields to run at various times of verification processing.
     * @property {Function} recipient A function called after a valid key is
     *           determined; it takes an object describing the recipient, and
     *           returns a Promise that is fulfilled once the handler's processing
     *           is complete.
     * @property {Function} prepare A function called just prior to verifying
     *           the input; it takes an object describing the verification
     *           result, and returns a Promise that is fulfilled once
     *           the handler's processing is complete.
     * @property {Function} complete A function called once verification is complete,
     *           just prior to fulfilling the Promise returned by `verify()`; it
     *           takes the object that will be returned by `verify()`'s fulfilled
     *           Promise, and returns a Promise that is fulfilled once the handler's
     *           processing is complete.
     */
    type verifyCritProcessors = {
        recipient?: Function,
        prepare?: Function,
        complete?: Function
    };

    /**
     * Object that defines the output that is given from the `verify()` function
     * of a `Verifier`.
     *
     * @property {any} header The JOSE Header, combined from the relevant "header" and
     *           "protected" fields from the original JWE object.
     * @property {JWK.Key} key The Key used for verifying.
     * @property {Buffer} payload The verified content (as a Buffer)
     * @property {string[]} protected An array containing the names of the protected fields
     * @property {Buffer} signature The data that was used to verify payload with key.
     */
    type verifyReturn = {
        header: object,
        key: JWK.Key,
        payload: Buffer,
        protected: string[],
        signature: Buffer
    }

    /**
     * Creates a new JWS.Signer with the given options and signatories.
     *
     * @param {signOpts} opts The signing options.
     * @param {(JWK.Key|JWK.Key[]|signSignatory[])} signs Signatories, either as an array of
     *        JWK.Key instances; or an array of signing signatory objects.
     * @returns {Signer} The signature generator.
     * @throws {Error} If Compact serialization is requested but there are
     *         multiple signatories
     */
    function createSign(opts: signOpts, signs: JWK.Key | JWK.Key[] | signSignatory[]): Signer;
    function createSign(signs: JWK.Key | JWK.Key[] | signSignatory[]): Signer;

    /**
     * @description
     * Creates a new JWS.Verifier with the given Key or KeyStore.
     *
     * @param {JWK.Key|JWK.KeyStore} ks The Key or KeyStore to use for verification.
     * @returns {Verifier} The new verifier.
     */
    function createVerify(ks?: JWK.Key | JWK.KeyStore, opts?: verifyOptions): Verifier;

    /**
     * @class JWS.Signer
     * @classdesc Generator of signed content.
     *
     * @description
     * **NOTE:** this class cannot be instantiated directly. Instead call {@link
     * JWS.createSign}.
     */
    interface Signer {

        /**
         * @member {Boolean} JWS.Signer#compact
         * @description
         * Indicates whether the outuput of this signature generator is using
         * the Compact serialization (`true`) or the JSON serialization
         * (`false`).
         *
         * @type {boolean}
         * @memberOf Signer
         */
        compact: boolean;

        /**
         * @member {string} JWS.Signer#format
         * @description
         * The serialization format to use ("compact",
         * "flattened", "general")
         * @memberOf Signer
         */
        format: string;

        /**
         * @method JWS.Signer#update
         * @description
         * Updates the signing content for this signature content. The content
         * is appended to the end of any other content already applied.
         *
         * If {data} is a Buffer, {encoding} is ignored. Otherwise, {data} is
         * converted to a Buffer internally to {encoding}.
         *
         * @param {Buffer|String} data The data to sign.
         * @param {String} [encoding="binary"] The encoding of {data}.
         * @returns {Signer} This signature generator.
         * @throws {Error} If a signature has already been generated.
         * @memberOf Signer
         */
        update(data?: Buffer | string, encoding?: string): Signer;

        /**
         * @method JWS.Signer#final
         * @description
         * Finishes the signature operation.
         *
         * The returned Promise, when fulfilled, is the JSON Web Signature (JWS)
         * object, either in the Compact (if {@link JWS.Signer#format} is
         * `"compact"`), the flattened JSON (if {@link JWS.Signer#format} is
         * "flattened"), or the general JSON serialization.
         *
         * @param {Buffer|String} [data] The final content to apply.
         * @param {String} [encoding="binary"] The encoding of the final content
         *        (if any).
         * @returns {Promise<string|object>} The promise for the signatures
         * @throws {Error} If a signature has already been generated.
         * @memberOf Signer
         */
        final(data?: Buffer | string, encoding?: string): Promise<string | object>;
    }

    /**
     * @class JWS.Verifier
     * @classdesc Parser of signed content.
     *
     * @description
     * **NOTE:** this class cannot be instantiated directly. Instead call {@link
     * JWS.createVerify}.
     *
     * @interface Verifier
     */
    interface Verifier {

        /**
         * If the verifier was created with a key, this key will be assumed to be
         * assumed to be be the one to verify a signature, regardless of the kid of
         * the JWT.
         *
         * @type {JWK.Key}
         * @memberOf Verifier
         */
        defaultKey: JWK.Key;

        /**
         * The keystore that will be used to look up the `kid` from the JWT in.
         *
         * @type {JWK.KeyStore}
         * @memberOf Verifier
         */
        keystore: JWK.KeyStore;

        /**
         * @method JWS.Verifier#verify
         * @description
         * Verifies the input JWS with one of the keys in the keystore associated with
         * this verifier.
         *
         * @param {string} input The JWS in compact format.
         * @param {verifyOptions} [opts] See verifyOptions documentation.
         * @returns {Promise<verifyReturn>} See verifyReturn documentation.
         * @memberOf Verifier
         */
        verify(input: string, opts?: verifyOptions): Promise<verifyReturn>
    }
}

/**
 * A collection of Buffer and conversion utilities.
 */
export module util {

    /**
     * Converts the given input into a Buffer with the given encoding.
     *
     * @param {(Buffer|string|Array<any>|ArrayBuffer|ArrayBufferView)} input
     * @param {string} encoding Defaults to 'binary'
     * @returns {Buffer}
     */
    function asBuffer(input: Buffer | string | Array<any> | ArrayBuffer | ArrayBufferView, encoding?: string): Buffer;

    /**
     * Returns a Buffer filled with random bytes of length `len`.
     *
     * @param {number} len
     * @returns {Buffer}
     */
    function randomBytes(len: number): Buffer;

    /**
     * @namespace base64url
     * @description
     * Provides methods to encode and decode data according to the
     * base64url alphabet.
     */
    module base64url {

        /**
         * Decodes the input from base64url.
         *
         * @param {String} input The data to decode.
         * @returns {Buffer} the base64url decoding of {input}.
         */
        function decode(input: string): Buffer;

        /**
         * Encodes the input to base64url.
         *
         * If {input} is a Buffer, then {encoding} is ignored. Otherwise,
         * {encoding} can be one of "binary", "base64", "hex", "utf8".
         *
         * @param {(Buffer|string)} input The data to encode.
         * @param {string} [encoding = binary] The input encoding format.
         * @returns {string} the base64url encoding of {input}.
         */
        function encode(input: Buffer | string, encoding?: string): string;
    }

    /**
     * @namespace utf8
     * @description
     * Provides methods to encode and decode data as utf8.
     */
    module utf8 {

        /**
        * Decodes the input from utf8.
        *
        * @param {string} input The data to decode.
        * @returns {string} the utf8 decoding of {input}.
        */
        function decode(input: string): string;

        /**
         * Encodes the input as utf8
         *
         * @param {string} input the data to encode.
         * @returns {string} the ut8 encoding of {input}.
         */
        function encode(input: string): string;
    }
}

/**
 * Possible return value from the parse function.  The values inside the return
 * depend heavily on the type of JWT that is passed into it.
 * @property {string} type Defines whether the JWT was a "JWS" or a "JWE"
 * @property {string} format Whether the JWT was in compact or JSON format
 * @property {Buffer|string|object} input The JWT
 * @property {object} header All of the headers from the recipients or signatories.
 * @property {function} perform The operation to perform.  After calling parse, call the
 *   `perform` function from the return with a valid keystore to verify or decrypt the JWT.
 */
type parseCompactReturn = {
    type: "JWS" | "JWE",
    format: "compact" | "json",
    input: Buffer | string | object,
    header: object,
    perform: (ks: JWK.KeyStore) => Promise<JWE.decryptReturn> | Promise<JWS.verifyReturn>
};

/**
 * Possible return value from the parse function.  The values inside the return
 * depend heavily on the type of JWT that is passed into it.
 * @property {string} type Defines whether the JWT was a "JWS" or a "JWE"
 * @property {string} format Whether the JWT was in compact or JSON format
 * @property {Buffer|string|object} input The JWT
 * @property {object} all All of the headers from the recipients or signatories.
 * @property {function} perform The operation to perform.  After calling parse, call the
 *   `perform` function from the return with a valid keystore to verify or decrypt the JWT.
 */
type parseJSONReturn = {
    type: "JWS" | "JWE",
    format: "compact" | "json",
    input: Buffer | string | object,
    all: object,
    perform: (ks: JWK.KeyStore) => Promise<JWE.decryptReturn> | Promise<JWS.verifyReturn>
};

/**
 * Given a JWT passed in as input, the function will return all the known data about
 * the JWT as described in the return documentation, as well as a function to process
 * the token (either verify it or decrypt it).  This is a helper function that performs
 * guessing logic so the user does not need to manage whether a token is compact, json,
 * JWS, or JWE.
 *
 * @param {Buffer|string|object} input The token
 * @returns {parseCompactReturn|parseJSONReturn} the return object, as defined by its documentation.
 */
export function parse(input: Buffer | string | object): parseCompactReturn | parseJSONReturn;
export namespace parse {

    /**
     * A helper function for `parse`, but is available for usage.  This function is called
     * for JWTs in the compact format.
     *
     * @param {Buffer|string|object} input The token
     * @returns {parseCompactReturn|parseJSONReturn} the return object, as defined by its documentation.
     */
    function compact(input: Buffer | string | object): parseCompactReturn | parseJSONReturn;

    /**
     * A helper function for `parse`, but is available for usage.  This function is called
     * for JWTs in the JSON format.
     *
     * @param {Buffer|string|object} input The token
     * @returns {parseCompactReturn|parseJSONReturn} the return object, as defined by its documentation.
     */
    function json(input: Buffer | string | object): parseCompactReturn | parseJSONReturn;
}
