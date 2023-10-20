import BN = require("bn.js");
import stream = require("stream");

export {};
type NodeStream = stream;
type Integer = number;
type Infinity = any;
type ReadableStream<T> = any;

export namespace cleartext {
    /**
     * Class that represents an OpenPGP cleartext signed message.
     * See {@link https://tools.ietf.org/html/rfc4880#section-7}
     */
    class CleartextMessage {
        /**
         * @param text The cleartext of the signed message
         * @param signature The detached signature or an empty signature for unsigned messages
         */
        constructor(text: string, signature: signature.Signature);

        /**
         * Returns the key IDs of the keys that signed the cleartext message
         * @returns array of keyid objects
         */
        getSigningKeyIds(): any[];

        /**
         * Sign the cleartext message
         * @param privateKeys private keys with decrypted secret key data for signing
         * @param signature (optional) any existing detached signature
         * @param date (optional) The creation time of the signature that should be created
         * @param userIds (optional) user IDs to sign with, e.g. [ { name:'Steve Sender', email:'steve@openpgp.org' }]
         * @returns new cleartext message with signed content
         */
        sign(privateKeys: any[], signature: signature.Signature, date: Date, userIds: any[]): Promise<CleartextMessage>;

        /**
         * Sign the cleartext message
         * @param privateKeys private keys with decrypted secret key data for signing
         * @param signature (optional) any existing detached signature
         * @param date (optional) The creation time of the signature that should be created
         * @param userIds (optional) user IDs to sign with, e.g. [ { name:'Steve Sender', email:'steve@openpgp.org' }]
         * @returns new detached signature of message content
         */
        signDetached(
            privateKeys: any[],
            signature: signature.Signature,
            date: Date,
            userIds: any[],
        ): Promise<signature.Signature>;

        /**
         * Verify signatures of cleartext signed message
         * @param keys array of keys to verify signatures
         * @param date (optional) Verify the signature against the given date, i.e. check signature creation time < date < expiration time
         * @returns list of signer's keyid and validity of signature
         */
        verify(keys: any[], date: Date): Promise<Array<{ keyid: type.keyid.Keyid; valid: boolean }>>;

        /**
         * Verify signatures of cleartext signed message
         * @param keys array of keys to verify signatures
         * @param date (optional) Verify the signature against the given date, i.e. check signature creation time < date < expiration time
         * @returns list of signer's keyid and validity of signature
         */
        verifyDetached(keys: any[], date: Date): Promise<Array<{ keyid: type.keyid.Keyid; valid: boolean }>>;

        /**
         * Get cleartext
         * @returns cleartext of message
         */
        getText(): string;

        /**
         * Returns ASCII armored text of cleartext signed message
         * @returns ASCII armor
         */
        armor(): string | ReadableStream<String>;
    }

    /**
     * reads an OpenPGP cleartext signed message and returns a CleartextMessage object
     * @param armoredText text to be parsed
     * @returns new cleartext message object
     */
    function readArmored(armoredText: string | ReadableStream<String>): Promise<CleartextMessage>;

    /**
     * Creates a new CleartextMessage object from text
     * @param text
     */
    function fromText(text: string): CleartextMessage;
}

/**
 * @see module:config/config
 */
export namespace config {
    var prefer_hash_algorithm: any;

    var encryption_cipher: any;

    var compression: any;

    var deflate_level: any;

    /**
     * Use Authenticated Encryption with Additional Data (AEAD) protection for symmetric encryption.
     * **NOT INTEROPERABLE WITH OTHER OPENPGP IMPLEMENTATIONS**
     * **FUTURE OPENPGP.JS VERSIONS MAY BREAK COMPATIBILITY WHEN USING THIS OPTION**
     */
    var aead_protect: any;

    /**
     * Use Authenticated Encryption with Additional Data (AEAD) protection for symmetric encryption.
     * 0 means we implement a variant of {@link https://tools.ietf.org/html/draft-ford-openpgp-format-00|this IETF draft}.
     * 4 means we implement {@link https://tools.ietf.org/html/draft-ietf-openpgp-rfc4880bis-04|RFC4880bis-04}.
     * Note that this determines how AEAD packets are parsed even when aead_protect is set to false
     */
    var aead_protect_version: any;

    /**
     * Default Authenticated Encryption with Additional Data (AEAD) encryption mode
     * Only has an effect when aead_protect is set to true.
     */
    var aead_mode: any;

    /**
     * Chunk Size Byte for Authenticated Encryption with Additional Data (AEAD) mode
     * Only has an effect when aead_protect is set to true.
     * Must be an integer value from 0 to 56.
     */
    var aead_chunk_size_byte: any;

    /**
     * {@link https://tools.ietf.org/html/rfc4880#section-3.7.1.3|RFC4880 3.7.1.3}:
     * Iteration Count Byte for S2K (String to Key)
     */
    var s2k_iteration_count_byte: any;

    /**
     * Use integrity protection for symmetric encryption
     */
    var integrity_protect: any;

    var ignore_mdc_error: any;

    var allow_unauthenticated_stream: any;

    var checksum_required: any;

    var rsa_blinding: any;

    /**
     * Work-around for rare GPG decryption bug when encrypting with multiple passwords.
     * **Slower and slightly less secure**
     */
    var password_collision_check: any;

    var revocations_expire: any;

    var use_native: any;

    var min_bytes_for_web_crypto: any;

    var zero_copy: any;

    var debug: any;

    var tolerant: any;

    var show_version: any;

    var show_comment: any;

    var versionstring: any;

    var commentstring: any;

    var keyserver: any;

    var node_store: any;

    /**
     * Max userid string length (used for parsing)
     */
    var max_userid_length: any;

    namespace localStorage {
        class LocalStorage {
            /**
             * This object is used for storing and retrieving configuration from HTML5 local storage.
             */
            constructor();

            /**
             * Reads the config out of the HTML5 local storage
             * and initializes the object config.
             * if config is null the default config will be used
             */
            read(): void;

            /**
             * Writes the config to HTML5 local storage
             */
            write(): void;
        }
    }
}

export class LocalStorage {
    /**
     * This object is used for storing and retrieving configuration from HTML5 local storage.
     */
    constructor();

    /**
     * Reads the config out of the HTML5 local storage
     * and initializes the object config.
     * if config is null the default config will be used
     */
    read(): void;

    /**
     * Writes the config to HTML5 local storage
     */
    write(): void;
}

/**
 * @see module:crypto/crypto
 * @see module:crypto/signature
 * @see module:crypto/public_key
 * @see module:crypto/cipher
 * @see module:crypto/random
 * @see module:crypto/hash
 */
export namespace crypto {
    /**
     * @see module:crypto/public_key/elliptic/ecdh
     */
    namespace aes_kw {
        /**
         * AES key wrap
         * @param key
         * @param data
         * @returns
         */
        function wrap(key: string, data: string): Uint8Array;

        /**
         * AES key unwrap
         * @param key
         * @param data
         * @returns
         * @throws
         */
        function unwrap(key: string, data: string): Uint8Array;
    }

    namespace cfb {
        function encrypt(algo: any, key: any, plaintext: any, iv: any): any;
        function decrypt(algo: any, key: any, ciphertext: any, iv: any): Promise<any>;
    }

    namespace cipher {
        /**
         * AES-128 encryption and decryption (ID 7)
         * @param key 128-bit key
         * @see
         * @see
         * @returns
         */
        function aes128(key: string): object;

        /**
         * AES-128 Block Cipher (ID 8)
         * @param key 192-bit key
         * @see
         * @see
         * @returns
         */
        function aes192(key: string): object;

        /**
         * AES-128 Block Cipher (ID 9)
         * @param key 256-bit key
         * @see
         * @see
         * @returns
         */
        function aes256(key: string): object;

        /**
         * Triple DES Block Cipher (ID 2)
         * @param key 192-bit key
         * @see
         * @returns
         */
        function tripledes(key: string): object;

        /**
         * CAST-128 Block Cipher (ID 3)
         * @param key 128-bit key
         * @see
         * @returns
         */
        function cast5(key: string): object;

        /**
         * Twofish Block Cipher (ID 10)
         * @param key 256-bit key
         * @see
         * @returns
         */
        function twofish(key: string): object;

        /**
         * Blowfish Block Cipher (ID 4)
         * @param key 128-bit key
         * @see
         * @returns
         */
        function blowfish(key: string): object;

        /**
         * Not implemented
         * @throws
         */
        function idea(): void;
    }

    namespace cmac {
        /**
         * This implementation of CMAC is based on the description of OMAC in
         * http://web.cs.ucdavis.edu/~rogaway/papers/eax.pdf. As per that
         * document:
         * We have made a small modification to the OMAC algorithm as it was
         * originally presented, changing one of its two constants.
         * Specifically, the constant 4 at line 85 was the constant 1/2 (the
         * multiplicative inverse of 2) in the original definition of OMAC [14].
         * The OMAC authors indicate that they will promulgate this modification
         * [15], which slightly simplifies implementations.
         */
        const blockLength: any;

        /**
         * xor `padding` into the end of `data`. This function implements "the
         * operation xor→ [which] xors the shorter string into the end of longer
         * one". Since data is always as least as long as padding, we can
         * simplify the implementation.
         * @param data
         * @param padding
         */
        function rightXorMut(data: Uint8Array, padding: Uint8Array): void;
    }

    namespace crypto {
        /**
         * Encrypts data using specified algorithm and public key parameters.
         * See {@link https://tools.ietf.org/html/rfc4880#section-9.1|RFC 4880 9.1} for public key algorithms.
         * @param algo Public key algorithm
         * @param pub_params Algorithm-specific public key parameters
         * @param data Data to be encrypted as MPI
         * @param fingerprint Recipient fingerprint
         * @returns encrypted session key parameters
         */
        function publicKeyEncrypt(
            algo: enums.publicKey,
            pub_params: Array<type.mpi.MPI | type.oid.OID | type.kdf_params.KDFParams>,
            data: type.mpi.MPI,
            fingerprint: string,
        ): any[];

        /**
         * Decrypts data using specified algorithm and private key parameters.
         * See {@link https://tools.ietf.org/html/rfc4880#section-9.1|RFC 4880 9.1} for public key algorithms.
         * @param algo Public key algorithm
         * @param key_params Algorithm-specific public, private key parameters
         * @param data_params encrypted session key parameters
         * @param fingerprint Recipient fingerprint
         * @returns An MPI containing the decrypted data
         */
        function publicKeyDecrypt(
            algo: enums.publicKey,
            key_params: Array<type.mpi.MPI | type.oid.OID | type.kdf_params.KDFParams>,
            data_params: Array<type.mpi.MPI | type.oid.OID | type.kdf_params.KDFParams>,
            fingerprint: string,
        ): type.mpi.MPI;

        /**
         * Returns the types comprising the private key of an algorithm
         * @param algo The public key algorithm
         * @returns The array of types
         */
        function getPrivKeyParamTypes(algo: string): any[];

        /**
         * Returns the types comprising the public key of an algorithm
         * @param algo The public key algorithm
         * @returns The array of types
         */
        function getPubKeyParamTypes(algo: string): any[];

        /**
         * Returns the types comprising the encrypted session key of an algorithm
         * @param algo The public key algorithm
         * @returns The array of types
         */
        function getEncSessionKeyParamTypes(algo: string): any[];

        /**
         * Generate algorithm-specific key parameters
         * @param algo The public key algorithm
         * @param bits Bit length for RSA keys
         * @param oid Object identifier for ECC keys
         * @returns The array of parameters
         */
        function generateParams(algo: string, bits: Integer, oid: type.oid.OID): any[];

        /**
         * Generates a random byte prefix for the specified algorithm
         * See {@link https://tools.ietf.org/html/rfc4880#section-9.2|RFC 4880 9.2} for algorithms.
         * @param algo Symmetric encryption algorithm
         * @returns Random bytes with length equal to the block size of the cipher, plus the last two bytes repeated.
         */
        function getPrefixRandom(algo: enums.symmetric): Uint8Array;

        /**
         * Generating a session key for the specified symmetric algorithm
         * See {@link https://tools.ietf.org/html/rfc4880#section-9.2|RFC 4880 9.2} for algorithms.
         * @param algo Symmetric encryption algorithm
         * @returns Random bytes as a string to be used as a key
         */
        function generateSessionKey(algo: enums.symmetric): Uint8Array;
    }

    namespace eax {
        /**
         * Class to en/decrypt using EAX mode.
         * @param cipher The symmetric cipher algorithm to use e.g. 'aes128'
         * @param key The encryption key
         */
        function EAX(cipher: string, key: Uint8Array): void;

        /**
         * Encrypt plaintext input.
         * @param plaintext The cleartext input to be encrypted
         * @param nonce The nonce (16 bytes)
         * @param adata Associated data to sign
         * @returns The ciphertext output
         */
        function encrypt(plaintext: Uint8Array, nonce: Uint8Array, adata: Uint8Array): Promise<Uint8Array>;

        /**
         * Decrypt ciphertext input.
         * @param ciphertext The ciphertext input to be decrypted
         * @param nonce The nonce (16 bytes)
         * @param adata Associated data to verify
         * @returns The plaintext output
         */
        function decrypt(ciphertext: Uint8Array, nonce: Uint8Array, adata: Uint8Array): Promise<Uint8Array>;
    }

    namespace gcm {
        /**
         * Class to en/decrypt using GCM mode.
         * @param cipher The symmetric cipher algorithm to use e.g. 'aes128'
         * @param key The encryption key
         */
        function GCM(cipher: string, key: Uint8Array): void;
    }

    /**
     * @see
     * @see
     */
    namespace hash {
        /**
         * @see module:md5
         */
        var md5: any;

        /**
         * @see asmCrypto
         */
        var sha1: any;

        /**
         * @see hash.js
         */
        var sha224: any;

        /**
         * @see asmCrypto
         */
        var sha256: any;

        /**
         * @see hash.js
         */
        var sha384: any;

        /**
         * @see asmCrypto
         */
        var sha512: any;

        /**
         * @see hash.js
         */
        var ripemd: any;

        /**
         * Create a hash on the specified data using the specified algorithm
         * @param algo Hash algorithm type (see {@link https://tools.ietf.org/html/rfc4880#section-9.4|RFC 4880 9.4})
         * @param data Data to be hashed
         * @returns hash value
         */
        function digest(algo: enums.hash, data: Uint8Array): Promise<Uint8Array>;

        /**
         * Returns the hash size in bytes of the specified hash algorithm type
         * @param algo Hash algorithm type (See {@link https://tools.ietf.org/html/rfc4880#section-9.4|RFC 4880 9.4})
         * @returns Size in bytes of the resulting hash
         */
        function getHashByteLength(algo: enums.hash): Integer;
    }

    /**
     * @see module:packet.PublicKeyEncryptedSessionKey
     */
    namespace pkcs5 {
        /**
         * Add pkcs5 padding to a text.
         * @param msg Text to add padding
         * @returns Text with padding added
         */
        function encode(msg: string): string;

        /**
         * Remove pkcs5 padding from a string.
         * @param msg Text to remove padding from
         * @returns Text with padding removed
         */
        function decode(msg: string): string;
    }

    namespace ocb {
        /**
         * Class to en/decrypt using OCB mode.
         * @param cipher The symmetric cipher algorithm to use e.g. 'aes128'
         * @param key The encryption key
         */
        function OCB(cipher: string, key: Uint8Array): void;

        /**
         * Encrypt plaintext input.
         * @param plaintext The cleartext input to be encrypted
         * @param nonce The nonce (15 bytes)
         * @param adata Associated data to sign
         * @returns The ciphertext output
         */
        function encrypt(plaintext: Uint8Array, nonce: Uint8Array, adata: Uint8Array): Promise<Uint8Array>;

        /**
         * Decrypt ciphertext input.
         * @param ciphertext The ciphertext input to be decrypted
         * @param nonce The nonce (15 bytes)
         * @param adata Associated data to sign
         * @returns The ciphertext output
         */
        function decrypt(ciphertext: Uint8Array, nonce: Uint8Array, adata: Uint8Array): Promise<Uint8Array>;
    }

    /**
     * @see module:crypto/public_key/rsa
     * @see module:crypto/public_key/elliptic/ecdh
     * @see module:packet.PublicKeyEncryptedSessionKey
     */
    namespace pkcs1 {
        namespace eme {
            /**
             * Create a EME-PKCS1-v1_5 padded message
             * @see
             * @param M message to be encoded
             * @param k the length in octets of the key modulus
             * @returns EME-PKCS1 padded message
             */
            function encode(M: string, k: Integer): Promise<String>;

            /**
             * Decode a EME-PKCS1-v1_5 padded message
             * @see
             * @param EM encoded message, an octet string
             * @returns message, an octet string
             */
            function decode(EM: string): string;
        }

        namespace emsa {
            /**
             * Create a EMSA-PKCS1-v1_5 padded message
             * @see
             * @param algo Hash algorithm type used
             * @param hashed message to be encoded
             * @param emLen intended length in octets of the encoded message
             * @returns encoded message
             */
            function encode(algo: Integer, hashed: Uint8Array, emLen: Integer): string;
        }

        /**
         * ASN1 object identifiers for hashes
         * @see
         */
        const hash_headers: any;
    }

    namespace public_key {
        namespace dsa {
            /**
             * DSA Sign function
             * @param hash_algo
             * @param hashed
             * @param g
             * @param p
             * @param q
             * @param x
             * @returns
             */
            function sign(hash_algo: Integer, hashed: Uint8Array, g: BN, p: BN, q: BN, x: BN): object;

            /**
             * DSA Verify function
             * @param hash_algo
             * @param r
             * @param s
             * @param hashed
             * @param g
             * @param p
             * @param q
             * @param y
             * @returns BN
             */
            function verify(hash_algo: Integer, r: BN, s: BN, hashed: Uint8Array, g: BN, p: BN, q: BN, y: BN): any;
        }

        namespace elgamal {
            /**
             * ElGamal Encryption function
             * @param m
             * @param p
             * @param g
             * @param y
             * @returns
             */
            function encrypt(m: BN, p: BN, g: BN, y: BN): object;

            /**
             * ElGamal Encryption function
             * @param c1
             * @param c2
             * @param p
             * @param x
             * @returns BN
             */
            function decrypt(c1: BN, c2: BN, p: BN, x: BN): any;
        }

        /**
         * @see module:crypto/public_key/elliptic/curve
         * @see module:crypto/public_key/elliptic/ecdh
         * @see module:crypto/public_key/elliptic/ecdsa
         * @see module:crypto/public_key/elliptic/eddsa
         */
        namespace elliptic {
            namespace curve {
                class Curve {}
            }

            namespace ecdh {
                /**
                 * Generate ECDHE ephemeral key and secret from public key
                 * @param curve Elliptic curve object
                 * @param Q Recipient public key
                 * @returns Returns public part of ephemeral key and generated ephemeral secret
                 */
                function genPublicEphemeralKey(curve: curve.Curve, Q: Uint8Array): Promise<{ V: Uint8Array; S: BN }>;

                /**
                 * Encrypt and wrap a session key
                 * @param oid Elliptic curve object identifier
                 * @param cipher_algo Symmetric cipher to use
                 * @param hash_algo Hash algorithm to use
                 * @param m Value derived from session key (RFC 6637)
                 * @param Q Recipient public key
                 * @param fingerprint Recipient fingerprint
                 * @returns Returns public part of ephemeral key and encoded session key
                 */
                function encrypt(
                    oid: type.oid.OID,
                    cipher_algo: enums.symmetric,
                    hash_algo: enums.hash,
                    m: type.mpi.MPI,
                    Q: Uint8Array,
                    fingerprint: string,
                ): Promise<{ V: BN; C: BN }>;

                /**
                 * Generate ECDHE secret from private key and public part of ephemeral key
                 * @param curve Elliptic curve object
                 * @param V Public part of ephemeral key
                 * @param d Recipient private key
                 * @returns Generated ephemeral secret
                 */
                function genPrivateEphemeralKey(curve: curve.Curve, V: Uint8Array, d: Uint8Array): Promise<BN>;

                /**
                 * Decrypt and unwrap the value derived from session key
                 * @param oid Elliptic curve object identifier
                 * @param cipher_algo Symmetric cipher to use
                 * @param hash_algo Hash algorithm to use
                 * @param V Public part of ephemeral key
                 * @param C Encrypted and wrapped value derived from session key
                 * @param d Recipient private key
                 * @param fingerprint Recipient fingerprint
                 * @returns Value derived from session
                 */
                function decrypt(
                    oid: type.oid.OID,
                    cipher_algo: enums.symmetric,
                    hash_algo: enums.hash,
                    V: Uint8Array,
                    C: Uint8Array,
                    d: Uint8Array,
                    fingerprint: string,
                ): Promise<BN>;
            }

            namespace ecdsa {
                /**
                 * Sign a message using the provided key
                 * @param oid Elliptic curve object identifier
                 * @param hash_algo Hash algorithm used to sign
                 * @param m Message to sign
                 * @param d Private key used to sign the message
                 * @param hashed The hashed message
                 * @returns Signature of the message
                 */
                function sign(
                    oid: type.oid.OID,
                    hash_algo: enums.hash,
                    m: Uint8Array,
                    d: Uint8Array,
                    hashed: Uint8Array,
                ): object;

                /**
                 * Verifies if a signature is valid for a message
                 * @param oid Elliptic curve object identifier
                 * @param hash_algo Hash algorithm used in the signature
                 * @param signature Signature to verify
                 * @param m Message to verify
                 * @param Q Public key used to verify the message
                 * @param hashed The hashed message
                 * @returns
                 */
                function verify(
                    oid: type.oid.OID,
                    hash_algo: enums.hash,
                    signature: object,
                    m: Uint8Array,
                    Q: Uint8Array,
                    hashed: Uint8Array,
                ): boolean;
            }

            namespace eddsa {
                /**
                 * Sign a message using the provided keygit
                 * @param oid Elliptic curve object identifier
                 * @param hash_algo Hash algorithm used to sign
                 * @param m Message to sign
                 * @param d Private key used to sign
                 * @param hashed The hashed message
                 * @returns Signature of the message
                 */
                function sign(
                    oid: type.oid.OID,
                    hash_algo: enums.hash,
                    m: Uint8Array,
                    d: Uint8Array,
                    hashed: Uint8Array,
                ): object;

                /**
                 * Verifies if a signature is valid for a message
                 * @param oid Elliptic curve object identifier
                 * @param hash_algo Hash algorithm used in the signature
                 * @param signature Signature to verify the message
                 * @param m Message to verify
                 * @param Q Public key used to verify the message
                 * @param hashed The hashed message
                 * @returns
                 */
                function verify(
                    oid: type.oid.OID,
                    hash_algo: enums.hash,
                    signature: object,
                    m: Uint8Array,
                    Q: Uint8Array,
                    hashed: Uint8Array,
                ): boolean;
            }

            namespace key {
                class KeyPair {}
            }
        }

        namespace prime {
            /**
             * Probabilistic random number generator
             * @param bits Bit length of the prime
             * @param e Optional RSA exponent to check against the prime
             * @param k Optional number of iterations of Miller-Rabin test
             * @returns BN
             */
            function randomProbablePrime(bits: Integer, e: BN, k: Integer): any;

            /**
             * Probabilistic primality testing
             * @param n Number to test
             * @param e Optional RSA exponent to check against the prime
             * @param k Optional number of iterations of Miller-Rabin test
             * @returns
             */
            function isProbablePrime(n: BN, e: BN, k: Integer): boolean;

            /**
             * Tests whether n is probably prime or not using Fermat's test with b = 2.
             * Fails if b^(n-1) mod n === 1.
             * @param n Number to test
             * @param b Optional Fermat test base
             * @returns
             */
            function fermat(n: BN, b: Integer): boolean;

            /**
             * Tests whether n is probably prime or not using the Miller-Rabin test.
             * See HAC Remark 4.28.
             * @param n Number to test
             * @param k Optional number of iterations of Miller-Rabin test
             * @param rand Optional function to generate potential witnesses
             * @returns
             */
            function millerRabin(n: BN, k: Integer, rand: Function): boolean;
        }

        namespace rsa {
            /**
             * Create signature
             * @param m message
             * @param n RSA public modulus
             * @param e RSA public exponent
             * @param d RSA private exponent
             * @returns RSA Signature
             */
            function sign(m: BN, n: BN, e: BN, d: BN): BN;

            /**
             * Verify signature
             * @param s signature
             * @param n RSA public modulus
             * @param e RSA public exponent
             * @returns
             */
            function verify(s: BN, n: BN, e: BN): BN;

            /**
             * Encrypt message
             * @param m message
             * @param n RSA public modulus
             * @param e RSA public exponent
             * @returns RSA Ciphertext
             */
            function encrypt(m: BN, n: BN, e: BN): BN;

            /**
             * Decrypt RSA message
             * @param m message
             * @param n RSA public modulus
             * @param e RSA public exponent
             * @param d RSA private exponent
             * @param p RSA private prime p
             * @param q RSA private prime q
             * @param u RSA private inverse of prime q
             * @returns RSA Plaintext
             */
            function decrypt(m: BN, n: BN, e: BN, d: BN, p: BN, q: BN, u: BN): BN;

            /**
             * Generate a new random private key B bits long with public exponent E.
             * When possible, webCrypto is used. Otherwise, primes are generated using
             * 40 rounds of the Miller-Rabin probabilistic random prime generation algorithm.
             * @see module:crypto/public_key/prime
             * @param B RSA bit length
             * @param E RSA public exponent in hex string
             * @returns RSA public modulus, RSA public exponent, RSA private exponent,
             *          RSA private prime p, RSA private prime q, u = q ** -1 mod p
             */
            function generate(B: Integer, E: string): object;
        }
    }

    namespace random {
        /**
         * Retrieve secure random byte array of the specified length
         * @param length Length in bytes to generate
         * @returns Random byte array
         */
        function getRandomBytes(length: Integer): Uint8Array;

        /**
         * Create a secure random MPI that is greater than or equal to min and less than max.
         * @param min Lower bound, included
         * @param max Upper bound, excluded
         * @returns Random MPI
         */
        function getRandomBN(min: type.mpi.MPI, max: type.mpi.MPI): BN;

        /**
         * Buffer for secure random numbers
         */
        function RandomBuffer(): void;
    }

    namespace signature {
        /**
         * Verifies the signature provided for data using specified algorithms and public key parameters.
         * See {@link https://tools.ietf.org/html/rfc4880#section-9.1|RFC 4880 9.1}
         * and {@link https://tools.ietf.org/html/rfc4880#section-9.4|RFC 4880 9.4}
         * for public key and hash algorithms.
         * @param algo Public key algorithm
         * @param hash_algo Hash algorithm
         * @param msg_MPIs Algorithm-specific signature parameters
         * @param pub_MPIs Algorithm-specific public key parameters
         * @param data Data for which the signature was created
         * @param hashed The hashed data
         * @returns True if signature is valid
         */
        function verify(
            algo: enums.publicKey,
            hash_algo: enums.hash,
            msg_MPIs: type.mpi.MPI[],
            pub_MPIs: type.mpi.MPI[],
            data: Uint8Array,
            hashed: Uint8Array,
        ): boolean;

        /**
         * Creates a signature on data using specified algorithms and private key parameters.
         * See {@link https://tools.ietf.org/html/rfc4880#section-9.1|RFC 4880 9.1}
         * and {@link https://tools.ietf.org/html/rfc4880#section-9.4|RFC 4880 9.4}
         * for public key and hash algorithms.
         * @param algo Public key algorithm
         * @param hash_algo Hash algorithm
         * @param key_params Algorithm-specific public and private key parameters
         * @param data Data to be signed
         * @param hashed The hashed data
         * @returns Signature
         */
        function sign(
            algo: enums.publicKey,
            hash_algo: enums.hash,
            key_params: type.mpi.MPI[],
            data: Uint8Array,
            hashed: Uint8Array,
        ): Uint8Array;
    }
}

export namespace eme {
    /**
     * Create a EME-PKCS1-v1_5 padded message
     * @see
     * @param M message to be encoded
     * @param k the length in octets of the key modulus
     * @returns EME-PKCS1 padded message
     */
    function encode(M: string, k: Integer): Promise<String>;

    /**
     * Decode a EME-PKCS1-v1_5 padded message
     * @see
     * @param EM encoded message, an octet string
     * @returns message, an octet string
     */
    function decode(EM: string): string;
}

export namespace emsa {
    /**
     * Create a EMSA-PKCS1-v1_5 padded message
     * @see
     * @param algo Hash algorithm type used
     * @param hashed message to be encoded
     * @param emLen intended length in octets of the encoded message
     * @returns encoded message
     */
    function encode(algo: Integer, hashed: Uint8Array, emLen: Integer): string;
}

export namespace encoding {
    namespace armor {
        /**
         * Add additional information to the armor version of an OpenPGP binary
         * packet block.
         * @version 2011-12-16
         * @param customComment (optional) additional comment to add to the armored string
         * @returns The header information
         */
        function addheader(customComment: string): string;

        /**
         * Calculates a checksum over the given data and returns it base64 encoded
         * @param data Data to create a CRC-24 checksum for
         * @returns Base64 encoded checksum
         */
        function getCheckSum(data: string | ReadableStream<String>): string | ReadableStream<String>;

        /**
         * Internal function to calculate a CRC-24 checksum over a given string (data)
         * @param data Data to create a CRC-24 checksum for
         * @returns The CRC-24 checksum
         */
        function createcrc24(data: string | ReadableStream<String>): Uint8Array | ReadableStream<Uint8Array>;

        /**
         * Splits a message into two parts, the body and the checksum. This is an internal function
         * @param text OpenPGP armored message part
         * @returns An object with attribute "body" containing the body
         *          and an attribute "checksum" containing the checksum.
         */
        function splitChecksum(text: string): object;

        /**
         * DeArmor an OpenPGP armored message; verify the checksum and return
         * the encoded bytes
         * @param text OpenPGP armored message
         * @returns An object with attribute "text" containing the message text,
         *          an attribute "data" containing a stream of bytes and "type" for the ASCII armor type
         */
        function dearmor(text: string): Promise<Object>;

        /**
         * Armor an OpenPGP binary packet block
         * @param messagetype type of the message
         * @param body
         * @param partindex
         * @param parttotal
         * @param customComment (optional) additional comment to add to the armored string
         * @returns Armored text
         */
        function armor(
            messagetype: Integer,
            body: any,
            partindex: Integer,
            parttotal: Integer,
            customComment?: string,
        ): string | ReadableStream<String>;
    }

    namespace base64 {
        /**
         * Convert binary array to radix-64
         * @param t Uint8Array to convert
         * @param u if true, output is URL-safe
         * @returns radix-64 version of input string
         */
        function s2r(t: Uint8Array | ReadableStream<Uint8Array>, u?: boolean): string | ReadableStream<String>;

        /**
         * Convert radix-64 to binary array
         * @param t radix-64 string to convert
         * @param u if true, input is interpreted as URL-safe
         * @returns binary array version of input string
         */
        function r2s(t: string | ReadableStream<String>, u: boolean): Uint8Array | ReadableStream<Uint8Array>;
    }
}

export namespace enums {
    /**
     * Maps curve names under various standards to one
     * @see
     */
    enum curve {
        /**
         * NIST P-256 Curve
         */
        p256 = "p256",
        "P-256" = "p256",
        secp256r1 = "p256",
        prime256v1 = "p256",
        "1.2.840.10045.3.1.7" = "p256",
        "2a8648ce3d030107" = "p256",
        "2A8648CE3D030107" = "p256",
        /**
         * NIST P-384 Curve
         */
        p384 = "p384",
        "P-384" = "p384",
        secp384r1 = "p384",
        "1.3.132.0.34" = "p384",
        "2b81040022" = "p384",
        "2B81040022" = "p384",
        /**
         * NIST P-521 Curve
         */
        p521 = "p521",
        "P-521" = "p521",
        secp521r1 = "p521",
        "1.3.132.0.35" = "p521",
        "2b81040023" = "p521",
        "2B81040023" = "p521",
        /**
         * SECG SECP256k1 Curve
         */
        secp256k1 = "secp256k1",
        "1.3.132.0.10" = "secp256k1",
        "2b8104000a" = "secp256k1",
        "2B8104000A" = "secp256k1",
        /**
         * Ed25519
         */
        ED25519 = "ed25519",
        ed25519 = "ed25519",
        Ed25519 = "ed25519",
        "1.3.6.1.4.1.11591.15.1" = "ed25519",
        "2b06010401da470f01" = "ed25519",
        "2B06010401DA470F01" = "ed25519",
        /**
         * Curve25519
         */
        X25519 = "curve25519",
        cv25519 = "curve25519",
        curve25519 = "curve25519",
        Curve25519 = "curve25519",
        "1.3.6.1.4.1.3029.1.5.1" = "curve25519",
        "2b060104019755010501" = "curve25519",
        "2B060104019755010501" = "curve25519",
        /**
         * BrainpoolP256r1 Curve
         */
        brainpoolP256r1 = "brainpoolP256r1",
        "1.3.36.3.3.2.8.1.1.7" = "brainpoolP256r1",
        "2b2403030208010107" = "brainpoolP256r1",
        "2B2403030208010107" = "brainpoolP256r1",
        /**
         * BrainpoolP384r1 Curve
         */
        brainpoolP384r1 = "brainpoolP384r1",
        "1.3.36.3.3.2.8.1.1.11" = "brainpoolP384r1",
        "2b240303020801010b" = "brainpoolP384r1",
        "2B240303020801010B" = "brainpoolP384r1",
        /**
         * BrainpoolP512r1 Curve
         */
        brainpoolP512r1 = "brainpoolP512r1",
        "1.3.36.3.3.2.8.1.1.13" = "brainpoolP512r1",
        "2b240303020801010d" = "brainpoolP512r1",
        "2B240303020801010D" = "brainpoolP512r1",
    }

    /**
     * A string to key specifier type
     */
    enum s2k {
        simple = 0,
        salted = 1,
        iterated = 3,
        gnu = 101,
    }

    /**
     * {@link https://tools.ietf.org/html/draft-ietf-openpgp-rfc4880bis-04#section-9.1|RFC4880bis-04, section 9.1}
     */
    enum publicKey {
        /**
         * RSA (Encrypt or Sign) [HAC]
         */
        rsa_encrypt_sign = 1,
        /**
         * RSA (Encrypt only) [HAC]
         */
        rsa_encrypt = 2,
        /**
         * RSA (Sign only) [HAC]
         */
        rsa_sign = 3,
        /**
         * Elgamal (Encrypt only) [ELGAMAL] [HAC]
         */
        elgamal = 16,
        /**
         * DSA (Sign only) [FIPS186] [HAC]
         */
        dsa = 17,
        /**
         * ECDH (Encrypt only) [RFC6637]
         */
        ecdh = 18,
        /**
         * ECDSA (Sign only) [RFC6637]
         */
        ecdsa = 19,
        /**
         * EdDSA (Sign only)
         * [ {@link https://tools.ietf.org/html/draft-koch-eddsa-for-openpgp-04|Draft RFC}]
         */
        eddsa = 22,
        /**
         * Reserved for AEDH
         */
        aedh = 23,
        /**
         * Reserved for AEDSA
         */
        aedsa = 24,
    }

    /**
     * {@link https://tools.ietf.org/html/rfc4880#section-9.2|RFC4880, section 9.2}
     */
    enum symmetric {
        plaintext = 0,
        /**
         * Not implemented!
         */
        idea = 1,
        "3des" = 2,
        tripledes = 2,
        cast5 = 3,
        blowfish = 4,
        aes128 = 7,
        aes192 = 8,
        aes256 = 9,
        twofish = 10,
    }

    /**
     * {@link https://tools.ietf.org/html/rfc4880#section-9.3|RFC4880, section 9.3}
     */
    enum compression {
        uncompressed = 0,
        /**
         * RFC1951
         */
        zip = 1,
        /**
         * RFC1950
         */
        zlib = 2,
        bzip2 = 3,
    }

    /**
     * {@link https://tools.ietf.org/html/rfc4880#section-9.4|RFC4880, section 9.4}
     */
    enum hash {
        md5 = 1,
        sha1 = 2,
        ripemd = 3,
        sha256 = 8,
        sha384 = 9,
        sha512 = 10,
        sha224 = 11,
    }

    /**
     * A list of hash names as accepted by webCrypto functions.
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest|Parameters, algo}
     */
    enum webHash {
        "SHA-1" = 2,
        "SHA-256" = 8,
        "SHA-384" = 9,
        "SHA-512" = 10,
    }

    /**
     * {@link https://tools.ietf.org/html/draft-ietf-openpgp-rfc4880bis-04#section-9.6|RFC4880bis-04, section 9.6}
     */
    enum aead {
        eax = 1,
        ocb = 2,
        experimental_gcm = 100,
    }

    /**
     * A list of packet types and numeric tags associated with them.
     */
    enum packet {
        publicKeyEncryptedSessionKey = 1,
        signature = 2,
        symEncryptedSessionKey = 3,
        onePassSignature = 4,
        secretKey = 5,
        publicKey = 6,
        secretSubkey = 7,
        compressed = 8,
        symmetricallyEncrypted = 9,
        marker = 10,
        literal = 11,
        trust = 12,
        userid = 13,
        publicSubkey = 14,
        userAttribute = 17,
        symEncryptedIntegrityProtected = 18,
        modificationDetectionCode = 19,
        symEncryptedAEADProtected = 20,
    }

    /**
     * Data types in the literal packet
     */
    enum literal {
        /**
         * Binary data 'b'
         */
        binary = "",
        /**
         * Text data 't'
         */
        text = "",
        /**
         * Utf8 data 'u'
         */
        utf8 = "",
        /**
         * MIME message body part 'm'
         */
        mime = "",
    }

    /**
     * One pass signature packet type
     */
    enum signature {
        /**
         * 0x00: Signature of a binary document.
         */
        binary = 0,
        /**
         * 0x01: Signature of a canonical text document.
         * Canonicalyzing the document by converting line endings.
         */
        text = 1,
        /**
         * 0x02: Standalone signature.
         * This signature is a signature of only its own subpacket contents.
         * It is calculated identically to a signature over a zero-lengh
         * binary document.  Note that it doesn't make sense to have a V3
         * standalone signature.
         */
        standalone = 2,
        /**
         * 0x10: Generic certification of a User ID and Public-Key packet.
         * The issuer of this certification does not make any particular
         * assertion as to how well the certifier has checked that the owner
         * of the key is in fact the person described by the User ID.
         */
        cert_generic = 16,
        /**
         * 0x11: Persona certification of a User ID and Public-Key packet.
         * The issuer of this certification has not done any verification of
         * the claim that the owner of this key is the User ID specified.
         */
        cert_persona = 17,
        /**
         * 0x12: Casual certification of a User ID and Public-Key packet.
         * The issuer of this certification has done some casual
         * verification of the claim of identity.
         */
        cert_casual = 18,
        /**
         * 0x13: Positive certification of a User ID and Public-Key packet.
         * The issuer of this certification has done substantial
         * verification of the claim of identity.
         * Most OpenPGP implementations make their "key signatures" as 0x10
         * certifications.  Some implementations can issue 0x11-0x13
         * certifications, but few differentiate between the types.
         */
        cert_positive = 19,
        /**
         * 0x30: Certification revocation signature
         * This signature revokes an earlier User ID certification signature
         * (signature class 0x10 through 0x13) or direct-key signature
         * (0x1F).  It should be issued by the same key that issued the
         * revoked signature or an authorized revocation key.  The signature
         * is computed over the same data as the certificate that it
         * revokes, and should have a later creation date than that
         * certificate.
         */
        cert_revocation = 48,
        /**
         * 0x18: Subkey Binding Signature
         * This signature is a statement by the top-level signing key that
         * indicates that it owns the subkey.  This signature is calculated
         * directly on the primary key and subkey, and not on any User ID or
         * other packets.  A signature that binds a signing subkey MUST have
         * an Embedded Signature subpacket in this binding signature that
         * contains a 0x19 signature made by the signing subkey on the
         * primary key and subkey.
         */
        subkey_binding = 24,
        /**
         * 0x19: Primary Key Binding Signature
         * This signature is a statement by a signing subkey, indicating
         * that it is owned by the primary key and subkey.  This signature
         * is calculated the same way as a 0x18 signature: directly on the
         * primary key and subkey, and not on any User ID or other packets.
         * When a signature is made over a key, the hash data starts with the
         * octet 0x99, followed by a two-octet length of the key, and then body
         * of the key packet.  (Note that this is an old-style packet header for
         * a key packet with two-octet length.)  A subkey binding signature
         * (type 0x18) or primary key binding signature (type 0x19) then hashes
         * the subkey using the same format as the main key (also using 0x99 as
         * the first octet).
         */
        key_binding = 25,
        /**
         * 0x1F: Signature directly on a key
         * This signature is calculated directly on a key.  It binds the
         * information in the Signature subpackets to the key, and is
         * appropriate to be used for subpackets that provide information
         * about the key, such as the Revocation Key subpacket.  It is also
         * appropriate for statements that non-self certifiers want to make
         * about the key itself, rather than the binding between a key and a
         * name.
         */
        key = 31,
        /**
         * 0x20: Key revocation signature
         * The signature is calculated directly on the key being revoked.  A
         * revoked key is not to be used.  Only revocation signatures by the
         * key being revoked, or by an authorized revocation key, should be
         * considered valid revocation signatures.a
         */
        key_revocation = 32,
        /**
         * 0x28: Subkey revocation signature
         * The signature is calculated directly on the subkey being revoked.
         * A revoked subkey is not to be used.  Only revocation signatures
         * by the top-level signature key that is bound to this subkey, or
         * by an authorized revocation key, should be considered valid
         * revocation signatures.
         * Key revocation signatures (types 0x20 and 0x28)
         * hash only the key being revoked.
         */
        subkey_revocation = 40,
        /**
         * 0x40: Timestamp signature.
         * This signature is only meaningful for the timestamp contained in
         * it.
         */
        timestamp = 64,
        /**
         * 0x50: Third-Party Confirmation signature.
         * This signature is a signature over some other OpenPGP Signature
         * packet(s).  It is analogous to a notary seal on the signed data.
         * A third-party signature SHOULD include Signature Target
         * subpacket(s) to give easy identification.  Note that we really do
         * mean SHOULD.  There are plausible uses for this (such as a blind
         * party that only sees the signature, not the key or source
         * document) that cannot include a target subpacket.
         */
        third_party = 80,
    }

    /**
     * Signature subpacket type
     */
    enum signatureSubpacket {
        signature_creation_time = 2,
        signature_expiration_time = 3,
        exportable_certification = 4,
        trust_signature = 5,
        regular_expression = 6,
        revocable = 7,
        key_expiration_time = 9,
        placeholder_backwards_compatibility = 10,
        preferred_symmetric_algorithms = 11,
        revocation_key = 12,
        issuer = 16,
        notation_data = 20,
        preferred_hash_algorithms = 21,
        preferred_compression_algorithms = 22,
        key_server_preferences = 23,
        preferred_key_server = 24,
        primary_user_id = 25,
        policy_uri = 26,
        key_flags = 27,
        signers_user_id = 28,
        reason_for_revocation = 29,
        features = 30,
        signature_target = 31,
        embedded_signature = 32,
        issuer_fingerprint = 33,
        preferred_aead_algorithms = 34,
    }

    /**
     * Key flags
     */
    enum keyFlags {
        /**
         * 0x01 - This key may be used to certify other keys.
         */
        certify_keys = 1,
        /**
         * 0x02 - This key may be used to sign data.
         */
        sign_data = 2,
        /**
         * 0x04 - This key may be used to encrypt communications.
         */
        encrypt_communication = 4,
        /**
         * 0x08 - This key may be used to encrypt storage.
         */
        encrypt_storage = 8,
        /**
         * 0x10 - The private component of this key may have been split
         * by a secret-sharing mechanism.
         */
        split_private_key = 16,
        /**
         * 0x20 - This key may be used for authentication.
         */
        authentication = 32,
        /**
         * 0x80 - The private component of this key may be in the
         * possession of more than one person.
         */
        shared_private_key = 128,
    }

    /**
     * Key status
     */
    enum keyStatus {
        invalid = 0,
        expired = 1,
        revoked = 2,
        valid = 3,
        no_self_cert = 4,
    }

    /**
     * Armor type
     */
    enum armor {
        multipart_section = 0,
        multipart_last = 1,
        signed = 2,
        message = 3,
        public_key = 4,
        private_key = 5,
        signature = 6,
    }

    /**
     * {@link https://tools.ietf.org/html/rfc4880#section-5.2.3.23|RFC4880, section 5.2.3.23}
     */
    enum reasonForRevocation {
        /**
         * No reason specified (key revocations or cert revocations)
         */
        no_reason = 0,
        /**
         * Key is superseded (key revocations)
         */
        key_superseded = 1,
        /**
         * Key material has been comPromise<any>d (key revocations)
         */
        key_comPromised = 2,
        /**
         * Key is retired and no longer used (key revocations)
         */
        key_retired = 3,
        /**
         * User ID information is no longer valid (cert revocations)
         */
        userid_invalid = 32,
    }

    /**
     * {@link https://tools.ietf.org/html/draft-ietf-openpgp-rfc4880bis-04#section-5.2.3.25|RFC4880bis-04, section 5.2.3.25}
     */
    enum features {
        /**
         * 0x01 - Modification Detection (packets 18 and 19)
         */
        modification_detection = 1,
        /**
         * 0x02 - AEAD Encrypted Data Packet (packet 20) and version 5
         * Symmetric-Key Encrypted Session Key Packets (packet 3)
         */
        aead = 2,
        /**
         * 0x04 - Version 5 Public-Key Packet format and corresponding new
         * fingerprint format
         */
        v5_keys = 4,
    }

    /**
     * Asserts validity and converts from string/integer to integer.
     */
    function write(): void;

    /**
     * Converts from an integer to string.
     */
    function read(): void;
}

export interface HKPOptions {
    /**
     * (optionsl) The long public key ID.
     */
    keyId?: string | undefined;
    /**
     * (optional) This can be any part of the key user ID such as name or email address.
     */
    query?: string | undefined;
}

export namespace hkp {
    class HKP {
        /**
         * Initialize the HKP client and configure it with the key server url and fetch function.
         * @param keyServerBaseUrl (optional) The HKP key server base url including
         *        the protocol to use, e.g. 'https://pgp.mit.edu'; defaults to
         *        openpgp.config.keyserver (https://keyserver.ubuntu.com)
         */
        constructor(keyServerBaseUrl: string);

        /**
         * Search for a public key on the key server either by key ID or part of the user ID.
         * @param options.keyID The long public key ID.
         * @param options.query This can be any part of the key user ID such as name
         *        or email address.
         * @returns The ascii armored public key.
         */
        lookup(options: HKPOptions): Promise<String>;

        /**
         * Upload a public key to the server.
         * @param publicKeyArmored An ascii armored public key to be uploaded.
         * @returns
         */
        upload(publicKeyArmored: string): Promise<any>;
    }
}

export class HKP {
    /**
     * Initialize the HKP client and configure it with the key server url and fetch function.
     * @param keyServerBaseUrl (optional) The HKP key server base url including
     *        the protocol to use, e.g. 'https://pgp.mit.edu'; defaults to
     *        openpgp.config.keyserver (https://keyserver.ubuntu.com)
     */
    constructor(keyServerBaseUrl: string);

    /**
     * Search for a public key on the key server either by key ID or part of the user ID.
     * @param options.keyID The long public key ID.
     * @param options.query This can be any part of the key user ID such as name
     *        or email address.
     * @returns The ascii armored public key.
     */
    lookup(options: HKPOptions): Promise<String>;

    /**
     * Upload a public key to the server.
     * @param publicKeyArmored An ascii armored public key to be uploaded.
     * @returns
     */
    upload(publicKeyArmored: string): Promise<any>;
}

export namespace key {
    /**
     * Class that represents an OpenPGP key. Must contain a primary key.
     * Can contain additional subkeys, signatures, user ids, user attributes.
     */
    class Key {
        /**
         * @param packetlist The packets that form this key
         */
        constructor(packetlist: packet.List);

        primaryKey: Key;

        /**
         * Transforms packetlist to structured key data
         * @param packetlist The packets that form a key
         */
        packetlist2structure(packetlist: packet.List): void;

        /**
         * Transforms structured key data to packetlist
         * @returns The packets that form a key
         */
        toPacketlist(): packet.List;

        /**
         * Returns an array containing all public or private subkeys matching keyId;
         * If keyId is not present, returns all subkeys.
         * @param keyId
         * @returns
         */
        getSubkeys(keyId?: type.keyid.Keyid): any[];

        /**
         * Returns an array containing all public or private keys matching keyId.
         * If keyId is not present, returns all keys starting with the primary key.
         * @param keyId
         * @returns
         */
        getKeys(keyId?: type.keyid.Keyid): any[];

        /**
         * Returns key IDs of all keys
         * @returns
         */
        getKeyIds(): any[];

        /**
         * Returns userids
         * @returns array of userids
         */
        getUserIds(): string[];

        /**
         * Returns true if this is a public key
         * @returns
         */
        isPublic(): boolean;

        /**
         * Returns true if this is a private key
         * @returns
         */
        isPrivate(): boolean;

        /**
         * Returns key as public key (shallow copy)
         * @returns new public Key
         */
        toPublic(): Key;

        /**
         * Returns ASCII armored text of key
         * @returns ASCII armor
         */
        armor(): string;

        /**
         * Returns last created key or key by given keyId that is available for signing and verification
         * @param keyId, optional
         * @param date (optional) use the given date for verification instead of the current time
         * @param userId, optional user ID
         * @returns key or null if no signing key has been found
         */
        getSigningKey(keyId: type.keyid.Keyid, date?: Date, userId?: object): Promise<Key | SubKey | null>;

        /**
         * Returns last created key or key by given keyId that is available for encryption or decryption
         * @param keyId, optional
         * @param date, optional
         * @param userId, optional
         * @returns key or null if no encryption key has been found
         */
        getEncryptionKey(keyId?: type.keyid.Keyid, date?: Date, userId?: string): Promise<Key | SubKey | null>;

        /**
         * Encrypts all secret key and subkey packets matching keyId
         * @param passphrases - if multiple passphrases, then should be in same order as packets each should encrypt
         * @param keyId
         * @returns
         */
        encrypt(
            passphrases: string | any[],
            keyId?: type.keyid.Keyid,
        ): Promise<Array<packet.SecretKey | packet.SecretSubkey>>;

        /**
         * Decrypts all secret key and subkey packets matching keyId
         * @param passphrases
         * @param keyId
         * @returns true if all matching key and subkey packets decrypted successfully
         */
        decrypt(passphrases: string | string[], keyId?: type.keyid.Keyid): Promise<Boolean>;

        /**
         * Checks if a signature on a key is revoked
         * @param
         * @param signature The signature to verify
         * @param key, optional The key to verify the signature
         * @param date Use the given date instead of the current time
         * @returns True if the certificate is revoked
         */
        isRevoked(
            signature: packet.Signature,
            key?: packet.PublicSubkey | packet.SecretSubkey | packet.PublicKey | packet.SecretKey,
            date?: Date,
        ): Promise<Boolean>;

        /**
         * Verify primary key. Checks for revocation signatures, expiration time
         * and valid self signature
         * @param date (optional) use the given date for verification instead of the current time
         * @param userId (optional) user ID
         * @returns The status of the primary key
         */
        verifyPrimaryKey(date?: Date, userId?: object): Promise<enums.keyStatus>;

        /**
         * Returns the latest date when the key can be used for encrypting, signing, or both, depending on the `capabilities` paramater.
         * When `capabilities` is null, defaults to returning the expiry date of the primary key.
         * Returns null if `capabilities` is passed and the key does not have the specified capabilities or is revoked or invalid.
         * Returns Infinity if the key doesn't expire.
         * @param capabilities, optional
         * @param keyId, optional
         * @param userId, optional user ID
         * @returns
         */
        getExpirationTime(
            capabilities?: "encrypt" | "sign" | "encrypt_sign",
            keyId?: type.keyid.Keyid,
            userId?: object,
        ): Promise<Date | Infinity | null>;

        /**
         * Returns primary user and most significant (latest valid) self signature
         * - if multiple primary users exist, returns the one with the latest self signature
         * - otherwise, returns the user with the latest self signature
         * @param date (optional) use the given date for verification instead of the current time
         * @param userId (optional) user ID to get instead of the primary user, if it exists
         * @returns The primary user and the self signature
         */
        getPrimaryUser(date?: Date, userId?: object): Promise<{ user: User; selfCertification: packet.Signature }>;

        /**
         * Update key with new components from specified key with same key ID:
         * users, subkeys, certificates are merged into the destination key,
         * duplicates and expired signatures are ignored.
         * If the specified key is a private key and the destination key is public,
         * the destination key is transformed to a private key.
         * @param key Source key to merge
         * @returns
         */
        update(key: Key): Promise<undefined>;

        /**
         * Revokes the key
         * @param reasonForRevocation optional, object indicating the reason for revocation
         * @param reasonForRevocation.flag optional, flag indicating the reason for revocation
         * @param reasonForRevocation.string optional, string explaining the reason for revocation
         * @param date optional, override the creationtime of the revocation signature
         * @returns new key with revocation signature
         */
        revoke(reasonForRevocation: revoke_reasonForRevocation, date: Date): Promise<Key>;

        /**
         * Get revocation certificate from a revoked key.
         * (To get a revocation certificate for an unrevoked key, call revoke() first.)
         * @returns armored revocation certificate
         */
        getRevocationCertificate(): Promise<String>;

        /**
         * Applies a revocation certificate to a key
         * This adds the first signature packet in the armored text to the key,
         * if it is a valid revocation signature.
         * @param revocationCertificate armored revocation certificate
         * @returns new revoked key
         */
        applyRevocationCertificate(revocationCertificate: string): Promise<Key>;

        /**
         * Signs primary user of key
         * @param privateKey decrypted private keys for signing
         * @param date (optional) use the given date for verification instead of the current time
         * @param userId (optional) user ID to get instead of the primary user, if it exists
         * @returns new public key with new certificate signature
         */
        signPrimaryUser(privateKey: any[], date: Date, userId: object): Promise<Key>;

        /**
         * Signs all users of key
         * @param privateKeys decrypted private keys for signing
         * @returns new public key with new certificate signature
         */
        signAllUsers(privateKeys: any[]): Promise<Key>;

        /**
         * Verifies primary user of key
         * - if no arguments are given, verifies the self certificates;
         * - otherwise, verifies all certificates signed with given keys.
         * @param keys array of keys to verify certificate signatures
         * @param date (optional) use the given date for verification instead of the current time
         * @param userId (optional) user ID to get instead of the primary user, if it exists
         * @returns List of signer's keyid and validity of signature
         */
        verifyPrimaryUser(
            keys: any[],
            date: Date,
            userId: object,
        ): Promise<Array<{ keyid: type.keyid.Keyid; valid: boolean }>>;

        /**
         * Verifies all users of key
         * - if no arguments are given, verifies the self certificates;
         * - otherwise, verifies all certificates signed with given keys.
         * @param keys array of keys to verify certificate signatures
         * @returns list of userid, signer's keyid and validity of signature
         */
        verifyAllUsers(keys: any[]): Promise<Array<{ userid: string; keyid: type.keyid.Keyid; valid: boolean }>>;

        /**
         * Calculates the key id of the key
         * @returns A 8 byte key id
         */
        getKeyId(): string;

        /**
         * Calculates the fingerprint of the key
         * @returns A string containing the fingerprint in lowercase hex
         */
        getFingerprint(): string;

        /**
         * Calculates whether two keys have the same fingerprint without actually calculating the fingerprint
         * @returns Whether the two keys have the same version and public key data
         */
        hasSameFingerprintAs(): boolean;

        /**
         * Returns algorithm information
         * @returns An object of the form {algorithm: string, bits:int, curve:String}
         */
        getAlgorithmInfo(): object;

        /**
         * Returns the creation time of the key
         * @returns
         */
        getCreationTime(): Date;

        /**
         * Check whether secret-key data is available in decrypted form. Returns null for public keys.
         * @returns
         */
        isDecrypted(): boolean | null;
    }

    /**
     * Returns the valid and non-expired signature that has the latest creation date, while ignoring signatures created in the future.
     * @param signatures List of signatures
     * @param date Use the given date instead of the current time
     * @returns The latest valid signature
     */
    function getLatestValidSignature(signatures: any[], date: Date): Promise<packet.Signature>;

    /**
     * Class that represents an user ID or attribute packet and the relevant signatures.
     */
    class User {
        constructor();

        userId: packet.Userid;

        /**
         * Transforms structured user data to packetlist
         * @returns
         */
        toPacketlist(): packet.List;

        /**
         * Signs user
         * @param primaryKey The primary key packet
         * @param privateKeys Decrypted private keys for signing
         * @returns New user with new certificate signatures
         */
        sign(primaryKey: packet.SecretKey | packet.PublicKey, privateKeys: any[]): Promise<Key>;

        /**
         * Checks if a given certificate of the user is revoked
         * @param primaryKey The primary key packet
         * @param certificate The certificate to verify
         * @param key, optional The key to verify the signature
         * @param date Use the given date instead of the current time
         * @returns True if the certificate is revoked
         */
        isRevoked(
            primaryKey: packet.SecretKey | packet.PublicKey,
            certificate: packet.Signature,
            key: packet.PublicSubkey | packet.SecretSubkey | packet.PublicKey | packet.SecretKey,
            date: Date,
        ): Promise<Boolean>;

        /**
         * Verifies the user certificate
         * @param primaryKey The primary key packet
         * @param certificate A certificate of this user
         * @param keys Array of keys to verify certificate signatures
         * @param date Use the given date instead of the current time
         * @returns status of the certificate
         */
        verifyCertificate(
            primaryKey: packet.SecretKey | packet.PublicKey,
            certificate: packet.Signature,
            keys: any[],
            date: Date,
        ): Promise<enums.keyStatus>;

        /**
         * Verifies all user certificates
         * @param primaryKey The primary key packet
         * @param keys Array of keys to verify certificate signatures
         * @param date Use the given date instead of the current time
         * @returns List of signer's keyid and validity of signature
         */
        verifyAllCertifications(
            primaryKey: packet.SecretKey | packet.PublicKey,
            keys: any[],
            date: Date,
        ): Promise<Array<{ keyid: type.keyid.Keyid; valid: boolean }>>;

        /**
         * Verify User. Checks for existence of self signatures, revocation signatures
         * and validity of self signature
         * @param primaryKey The primary key packet
         * @param date Use the given date instead of the current time
         * @returns Status of user
         */
        verify(primaryKey: packet.SecretKey | packet.PublicKey, date: Date): Promise<enums.keyStatus>;

        /**
         * Update user with new components from specified user
         * @param user Source user to merge
         * @param primaryKey primary key used for validation
         * @returns
         */
        update(user: User, primaryKey: packet.SecretKey | packet.SecretSubkey): Promise<undefined>;
    }

    /**
     * Create signature packet
     * @param dataToSign Contains packets to be signed
     * @param signingKeyPacket secret key packet for signing
     * @param signatureProperties (optional) properties to write on the signature packet before signing
     * @param date (optional) override the creationtime of the signature
     * @param userId (optional) user ID
     * @returns signature packet
     */
    function createSignaturePacket(
        dataToSign: object,
        signingKeyPacket: packet.SecretKey | packet.SecretSubkey,
        signatureProperties: object,
        date: Date,
        userId: object,
    ): packet.Signature;

    /**
     * Class that represents a subkey packet and the relevant signatures.
     */
    class SubKey {
        constructor();

        /**
         * Transforms structured subkey data to packetlist
         * @returns
         */
        toPacketlist(): packet.List;

        /**
         * Checks if a binding signature of a subkey is revoked
         * @param primaryKey The primary key packet
         * @param signature The binding signature to verify
         * @param key, optional The key to verify the signature
         * @param date Use the given date instead of the current time
         * @returns True if the binding signature is revoked
         */
        isRevoked(
            primaryKey: packet.SecretKey | packet.PublicKey,
            signature: packet.Signature,
            key: packet.PublicSubkey | packet.SecretSubkey | packet.PublicKey | packet.SecretKey,
            date: Date,
        ): Promise<Boolean>;

        /**
         * Verify subkey. Checks for revocation signatures, expiration time
         * and valid binding signature
         * @param primaryKey The primary key packet
         * @param date Use the given date instead of the current time
         * @returns The status of the subkey
         */
        verify(primaryKey: packet.SecretKey | packet.PublicKey, date: Date): Promise<enums.keyStatus>;

        /**
         * Returns the expiration time of the subkey or Infinity if key does not expire
         * Returns null if the subkey is invalid.
         * @param primaryKey The primary key packet
         * @param date Use the given date instead of the current time
         * @returns
         */
        getExpirationTime(primaryKey: packet.SecretKey | packet.PublicKey, date: Date): Promise<Date | Infinity | null>;

        /**
         * Update subkey with new components from specified subkey
         * @param subKey Source subkey to merge
         * @param primaryKey primary key used for validation
         * @returns
         */
        update(subKey: SubKey, primaryKey: packet.SecretKey | packet.SecretSubkey): Promise<undefined>;

        /**
         * Revokes the subkey
         * @param primaryKey decrypted private primary key for revocation
         * @param reasonForRevocation optional, object indicating the reason for revocation
         * @param reasonForRevocation.flag optional, flag indicating the reason for revocation
         * @param reasonForRevocation.string optional, string explaining the reason for revocation
         * @param date optional, override the creationtime of the revocation signature
         * @returns new subkey with revocation signature
         */
        revoke(
            primaryKey: packet.SecretKey,
            reasonForRevocation: revoke_reasonForRevocation,
            date: Date,
        ): Promise<SubKey>;

        /**
         * Calculates the key id of the key
         * @returns A 8 byte key id
         */
        getKeyId(): string;

        /**
         * Calculates the fingerprint of the key
         * @returns A string containing the fingerprint in lowercase hex
         */
        getFingerprint(): string;

        /**
         * Calculates whether two keys have the same fingerprint without actually calculating the fingerprint
         * @returns Whether the two keys have the same version and public key data
         */
        hasSameFingerprintAs(): boolean;

        /**
         * Returns algorithm information
         * @returns An object of the form {algorithm: string, bits:int, curve:String}
         */
        getAlgorithmInfo(): object;

        /**
         * Returns the creation time of the key
         * @returns
         */
        getCreationTime(): Date;

        /**
         * Check whether secret-key data is available in decrypted form. Returns null for public keys.
         * @returns
         */
        isDecrypted(): boolean | null;
    }

    /**
     * Reads an unarmored OpenPGP key list and returns one or multiple key objects
     * @param data to be parsed
     * @returns result object with key and error arrays
     */
    function read(data: Uint8Array): Promise<{ keys: Array<Key>; err: Array<Error> | null }>;

    interface KeyResult {
        keys: Array<Key>;
        err: Array<Error> | null;
    }

    /**
     * Reads an OpenPGP armored text and returns one or multiple key objects
     * @param armoredText text to be parsed
     * @returns result object with key and error arrays
     */
    function readArmored(armoredText: string | ReadableStream<String>): Promise<KeyResult>;

    /**
     * Generates a new OpenPGP key. Supports RSA and ECC keys.
     * Primary and subkey will be of same type.
     * @param options.keyType To indicate what type of key to make.
     *        RSA is 1. See {@link https://tools.ietf.org/html/rfc4880#section-9.1}
     * @param options.numBits number of bits for the key creation.
     * @param options.userIds Assumes already in form of "User Name <username@email.com>"
     *        If array is used, the first userId is set as primary user Id
     * @param options.passphrase The passphrase used to encrypt the resulting private key
     * @param options.keyExpirationTime The number of seconds after the key creation time that the key expires
     * @param curve (optional) elliptic curve for ECC keys
     * @param date Override the creation date of the key and the key signatures
     * @param subkeys (optional) options for each subkey, default to main key options. e.g. [ {sign: true, passphrase: '123'}]
     *        sign parameter defaults to false, and indicates whether the subkey should sign rather than encrypt
     * @returns
     */
    function generate(options: KeyOptions): Promise<Key>;

    /**
     * Reformats and signs an OpenPGP key with a given User ID. Currently only supports RSA keys.
     * @param options.privateKey The private key to reformat
     * @param options.keyType
     * @param options.userIds Assumes already in form of "User Name <username@email.com>"
     *        If array is used, the first userId is set as primary user Id
     * @param options.passphrase The passphrase used to encrypt the resulting private key
     * @param options.keyExpirationTime The number of seconds after the key creation time that the key expires
     * @param date Override the creation date of the key and the key signatures
     * @param subkeys (optional) options for each subkey, default to main key options. e.g. [ {sign: true, passphrase: '123'}]
     * @returns
     */
    function reformat(date: Date, subkeys: any[]): Promise<Key>;

    /**
     * Checks if a given certificate or binding signature is revoked
     * @param primaryKey The primary key packet
     * @param dataToVerify The data to check
     * @param revocations The revocation signatures to check
     * @param signature The certificate or signature to check
     * @param key, optional The key packet to check the signature
     * @param date Use the given date instead of the current time
     * @returns True if the signature revokes the data
     */
    function isDataRevoked(
        primaryKey: packet.SecretKey | packet.PublicKey,
        dataToVerify: object,
        revocations: any[],
        signature: packet.Signature,
        key: packet.PublicSubkey | packet.SecretSubkey | packet.PublicKey | packet.SecretKey,
        date: Date,
    ): Promise<Boolean>;

    /**
     * Check if signature has revocation key sub packet (not supported by OpenPGP.js)
     * and throw error if found
     * @param signature The certificate or signature to check
     * @param keyId Check only certificates or signatures from a certain issuer key ID
     */
    function checkRevocationKey(signature: packet.Signature, keyId: type.keyid.Keyid): void;

    /**
     * Returns the preferred signature hash algorithm of a key
     * @param key (optional) the key to get preferences from
     * @param keyPacket key packet used for signing
     * @param date (optional) use the given date for verification instead of the current time
     * @param userId (optional) user ID
     * @returns
     */
    function getPreferredHashAlgo(
        key: Key,
        keyPacket: packet.SecretKey | packet.SecretSubkey,
        date: Date,
        userId: object,
    ): Promise<String>;

    /**
     * Returns the preferred symmetric/aead algorithm for a set of keys
     * @param type Type of preference to return
     * @param keys Set of keys
     * @param date (optional) use the given date for verification instead of the current time
     * @param userIds (optional) user IDs
     * @returns Preferred symmetric algorithm
     */
    function getPreferredAlgo(
        type: "symmetric" | "aead",
        keys: any[],
        date: Date,
        userIds: any[],
    ): Promise<enums.symmetric>;

    /**
     * Returns whether aead is supported by all keys in the set
     * @param keys Set of keys
     * @param date (optional) use the given date for verification instead of the current time
     * @param userIds (optional) user IDs
     * @returns
     */
    function isAeadSupported(keys: any[], date: Date, userIds: any[]): Promise<Boolean>;
}

export interface revoke_reasonForRevocation {
    /**
     * optional, flag indicating the reason for revocation
     */
    flag: enums.reasonForRevocation;
    /**
     * optional, string explaining the reason for revocation
     */
    string: string;
}

/**
 * Class that represents an user ID or attribute packet and the relevant signatures.
 */
export class User {
    constructor();

    /**
     * Transforms structured user data to packetlist
     * @returns
     */
    toPacketlist(): packet.List;

    /**
     * Signs user
     * @param primaryKey The primary key packet
     * @param privateKeys Decrypted private keys for signing
     * @returns New user with new certificate signatures
     */
    sign(primaryKey: packet.SecretKey | packet.PublicKey, privateKeys: any[]): Promise<key.Key>;

    /**
     * Checks if a given certificate of the user is revoked
     * @param primaryKey The primary key packet
     * @param certificate The certificate to verify
     * @param key, optional The key to verify the signature
     * @param date Use the given date instead of the current time
     * @returns True if the certificate is revoked
     */
    isRevoked(
        primaryKey: packet.SecretKey | packet.PublicKey,
        certificate: packet.Signature,
        key: packet.PublicSubkey | packet.SecretSubkey | packet.PublicKey | packet.SecretKey,
        date: Date,
    ): Promise<Boolean>;

    /**
     * Verifies the user certificate
     * @param primaryKey The primary key packet
     * @param certificate A certificate of this user
     * @param keys Array of keys to verify certificate signatures
     * @param date Use the given date instead of the current time
     * @returns status of the certificate
     */
    verifyCertificate(
        primaryKey: packet.SecretKey | packet.PublicKey,
        certificate: packet.Signature,
        keys: any[],
        date: Date,
    ): Promise<enums.keyStatus>;

    /**
     * Verifies all user certificates
     * @param primaryKey The primary key packet
     * @param keys Array of keys to verify certificate signatures
     * @param date Use the given date instead of the current time
     * @returns List of signer's keyid and validity of signature
     */
    verifyAllCertifications(
        primaryKey: packet.SecretKey | packet.PublicKey,
        keys: any[],
        date: Date,
    ): Promise<Array<{ keyid: type.keyid.Keyid; valid: boolean }>>;

    /**
     * Verify User. Checks for existence of self signatures, revocation signatures
     * and validity of self signature
     * @param primaryKey The primary key packet
     * @param date Use the given date instead of the current time
     * @returns Status of user
     */
    verify(primaryKey: packet.SecretKey | packet.PublicKey, date: Date): Promise<enums.keyStatus>;

    /**
     * Update user with new components from specified user
     * @param user Source user to merge
     * @param primaryKey primary key used for validation
     * @returns
     */
    update(user: key.User, primaryKey: packet.SecretKey | packet.SecretSubkey): Promise<undefined>;
}

/**
 * Class that represents a subkey packet and the relevant signatures.
 */
export class SubKey {
    constructor();

    /**
     * Transforms structured subkey data to packetlist
     * @returns
     */
    toPacketlist(): packet.List;

    /**
     * Checks if a binding signature of a subkey is revoked
     * @param primaryKey The primary key packet
     * @param signature The binding signature to verify
     * @param key, optional The key to verify the signature
     * @param date Use the given date instead of the current time
     * @returns True if the binding signature is revoked
     */
    isRevoked(
        primaryKey: packet.SecretKey | packet.PublicKey,
        signature: packet.Signature,
        key: packet.PublicSubkey | packet.SecretSubkey | packet.PublicKey | packet.SecretKey,
        date: Date,
    ): Promise<Boolean>;

    /**
     * Verify subkey. Checks for revocation signatures, expiration time
     * and valid binding signature
     * @param primaryKey The primary key packet
     * @param date Use the given date instead of the current time
     * @returns The status of the subkey
     */
    verify(primaryKey: packet.SecretKey | packet.PublicKey, date: Date): Promise<enums.keyStatus>;

    /**
     * Returns the expiration time of the subkey or Infinity if key does not expire
     * Returns null if the subkey is invalid.
     * @param primaryKey The primary key packet
     * @param date Use the given date instead of the current time
     * @returns
     */
    getExpirationTime(primaryKey: packet.SecretKey | packet.PublicKey, date: Date): Promise<Date | Infinity | null>;

    /**
     * Update subkey with new components from specified subkey
     * @param subKey Source subkey to merge
     * @param primaryKey primary key used for validation
     * @returns
     */
    update(subKey: key.SubKey, primaryKey: packet.SecretKey | packet.SecretSubkey): Promise<undefined>;

    /**
     * Revokes the subkey
     * @param primaryKey decrypted private primary key for revocation
     * @param reasonForRevocation optional, object indicating the reason for revocation
     * @param reasonForRevocation.flag optional, flag indicating the reason for revocation
     * @param reasonForRevocation.string optional, string explaining the reason for revocation
     * @param date optional, override the creationtime of the revocation signature
     * @returns new subkey with revocation signature
     */
    revoke(
        primaryKey: packet.SecretKey,
        reasonForRevocation: revoke_reasonForRevocation,
        date: Date,
    ): Promise<key.SubKey>;

    /**
     * Calculates the key id of the key
     * @returns A 8 byte key id
     */
    getKeyId(): string;

    /**
     * Calculates the fingerprint of the key
     * @returns A string containing the fingerprint in lowercase hex
     */
    getFingerprint(): string;

    /**
     * Calculates whether two keys have the same fingerprint without actually calculating the fingerprint
     * @returns Whether the two keys have the same version and public key data
     */
    hasSameFingerprintAs(): boolean;

    /**
     * Returns algorithm information
     * @returns An object of the form {algorithm: string, bits:int, curve:String}
     */
    getAlgorithmInfo(): object;

    /**
     * Returns the creation time of the key
     * @returns
     */
    getCreationTime(): Date;

    /**
     * Check whether secret-key data is available in decrypted form. Returns null for public keys.
     * @returns
     */
    isDecrypted(): boolean | null;
}

/**
 * @see module:keyring/keyring
 * @see module:keyring/localstore
 */
export namespace keyring {
    namespace keyring {
        class Keyring {
            /**
             * Initialization routine for the keyring.
             * @param storeHandler class implementing loadPublic(), loadPrivate(), storePublic(), and storePrivate() methods
             */
            constructor(storeHandler?: localstore.LocalStore);

            /**
             * Calls the storeHandler to load the keys
             */
            load(): void;

            /**
             * Calls the storeHandler to save the keys
             */
            store(): void;

            /**
             * Clear the keyring - erase all the keys
             */
            clear(): void;

            /**
             * Searches the keyring for keys having the specified key id
             * @param keyId provided as string of lowercase hex number
             *        withouth 0x prefix (can be 16-character key ID or fingerprint)
             * @param deep if true search also in subkeys
             * @returns keys found or null
             */
            getKeysForId(keyId: string, deep: boolean): any[] | null;

            /**
             * Removes keys having the specified key id from the keyring
             * @param keyId provided as string of lowercase hex number
             *        withouth 0x prefix (can be 16-character key ID or fingerprint)
             * @returns keys found or null
             */
            removeKeysForId(keyId: string): any[] | null;

            /**
             * Get all public and private keys
             * @returns all keys
             */
            getAllKeys(): any[];
        }

        /**
         * Array of keys
         * @param keys The keys to store in this array
         */
        function KeyArray(keys: any[]): void;
    }

    namespace localstore {
        class LocalStore {
            /**
             * The class that deals with storage of the keyring.
             * Currently the only option is to use HTML5 local storage.
             * @param prefix prefix for itemnames in localstore
             */
            constructor(prefix: string);

            /**
             * Load the public keys from HTML5 local storage.
             * @returns array of keys retrieved from localstore
             */
            loadPublic(): any[];

            /**
             * Load the private keys from HTML5 local storage.
             * @returns array of keys retrieved from localstore
             */
            loadPrivate(): any[];

            /**
             * Saves the current state of the public keys to HTML5 local storage.
             * The key array gets stringified using JSON
             * @param keys array of keys to save in localstore
             */
            storePublic(keys: any[]): void;

            /**
             * Saves the current state of the private keys to HTML5 local storage.
             * The key array gets stringified using JSON
             * @param keys array of keys to save in localstore
             */
            storePrivate(keys: any[]): void;
        }
    }
}

export class LocalStore {
    /**
     * The class that deals with storage of the keyring.
     * Currently the only option is to use HTML5 local storage.
     * @param prefix prefix for itemnames in localstore
     */
    constructor(prefix: string);

    /**
     * Load the public keys from HTML5 local storage.
     * @returns array of keys retrieved from localstore
     */
    loadPublic(): any[];

    /**
     * Load the private keys from HTML5 local storage.
     * @returns array of keys retrieved from localstore
     */
    loadPrivate(): any[];

    /**
     * Saves the current state of the public keys to HTML5 local storage.
     * The key array gets stringified using JSON
     * @param keys array of keys to save in localstore
     */
    storePublic(keys: any[]): void;

    /**
     * Saves the current state of the private keys to HTML5 local storage.
     * The key array gets stringified using JSON
     * @param keys array of keys to save in localstore
     */
    storePrivate(keys: any[]): void;
}

export namespace message {
    /**
     * Class that represents an OpenPGP message.
     * Can be an encrypted message, signed message, compressed message or literal message
     */
    class Message {
        packets: packet.List;

        /**
         * @param packetlist The packets that form this message
         *        See {@link https://tools.ietf.org/html/rfc4880#section-11.3}
         */
        constructor(packetlist: packet.List);

        /**
         * Returns the key IDs of the keys to which the session key is encrypted
         * @returns array of keyid objects
         */
        getEncryptionKeyIds(): any[];

        /**
         * Returns the key IDs of the keys that signed the message
         * @returns array of keyid objects
         */
        getSigningKeyIds(): any[];

        /**
         * Decrypt the message. Either a private key, a session key, or a password must be specified.
         * @param privateKeys (optional) private keys with decrypted secret data
         * @param passwords (optional) passwords used to decrypt
         * @param sessionKeys (optional) session keys in the form: { data:Uint8Array, algorithm:String, [aeadAlgorithm:String] }
         * @param streaming (optional) whether to process data as a stream
         * @returns new message with decrypted content
         */
        decrypt(privateKeys?: any[], passwords?: any[], sessionKeys?: any[], streaming?: boolean): Promise<Message>;

        /**
         * Decrypt encrypted session keys either with private keys or passwords.
         * @param privateKeys (optional) private keys with decrypted secret data
         * @param passwords (optional) passwords used to decrypt
         * @returns array of object with potential sessionKey, algorithm pairs
         */
        decryptSessionKeys(
            privateKeys?: any[],
            passwords?: any[],
        ): Promise<Array<{ data: Uint8Array; algorithm: string }>>;

        /**
         * Get literal data that is the body of the message
         * @returns literal body of the message as Uint8Array
         */
        getLiteralData(): Uint8Array | null;

        /**
         * Get filename from literal data packet
         * @returns filename of literal data packet as string
         */
        getFilename(): string | null;

        /**
         * Get literal data as text
         * @returns literal body of the message interpreted as text
         */
        getText(): string | null;

        /**
         * Encrypt the message either with public keys, passwords, or both at once.
         * @param keys (optional) public key(s) for message encryption
         * @param passwords (optional) password(s) for message encryption
         * @param sessionKey (optional) session key in the form: { data:Uint8Array, algorithm:String, [aeadAlgorithm:String] }
         * @param wildcard (optional) use a key ID of 0 instead of the public key IDs
         * @param date (optional) override the creation date of the literal package
         * @param userIds (optional) user IDs to encrypt for, e.g. [ { name:'Robert Receiver', email:'robert@openpgp.org' }]
         * @param streaming (optional) whether to process data as a stream
         * @returns new message with encrypted content
         */
        encrypt(
            keys?: any[],
            passwords?: any[],
            sessionKey?: object,
            wildcard?: boolean,
            date?: Date,
            userIds?: any[],
            streaming?: boolean,
        ): Promise<Message>;

        /**
         * Sign the message (the literal data packet of the message)
         * @param privateKeys private keys with decrypted secret key data for signing
         * @param signature (optional) any existing detached signature to add to the message
         * @param date (optional) override the creation time of the signature
         * @param userIds (optional) user IDs to sign with, e.g. [ { name:'Steve Sender', email:'steve@openpgp.org' }]
         * @returns new message with signed content
         */
        sign(privateKeys: any[], signature?: signature.Signature, date?: Date, userIds?: any[]): Promise<Message>;

        /**
         * Compresses the message (the literal and -if signed- signature data packets of the message)
         * @param compression compression algorithm to be used
         * @returns new message with compressed content
         */
        compress(compression: enums.compression): Message;

        /**
         * Create a detached signature for the message (the literal data packet of the message)
         * @param privateKeys private keys with decrypted secret key data for signing
         * @param signature (optional) any existing detached signature
         * @param date (optional) override the creation time of the signature
         * @param userIds (optional) user IDs to sign with, e.g. [ { name:'Steve Sender', email:'steve@openpgp.org' }]
         * @returns new detached signature of message content
         */
        signDetached(
            privateKeys: any[],
            signature?: signature.Signature,
            date?: Date,
            userIds?: any[],
        ): Promise<signature.Signature>;

        /**
         * Verify message signatures
         * @param keys array of keys to verify signatures
         * @param date (optional) Verify the signature against the given date, i.e. check signature creation time < date < expiration time
         * @param streaming (optional) whether to process data as a stream
         * @returns list of signer's keyid and validity of signature
         */
        verify(
            keys: any[],
            date?: Date,
            streaming?: boolean,
        ): Promise<Array<{ keyid: type.keyid.Keyid; valid: boolean }>>;

        /**
         * Verify detached message signature
         * @param keys array of keys to verify signatures
         * @param signature
         * @param date Verify the signature against the given date, i.e. check signature creation time < date < expiration time
         * @returns list of signer's keyid and validity of signature
         */
        verifyDetached(
            keys: any[],
            signature: signature.Signature,
            date?: Date,
        ): Promise<Array<{ keyid: type.keyid.Keyid; valid: boolean }>>;

        /**
         * Unwrap compressed message
         * @returns message Content of compressed message
         */
        unwrapCompressed(): Message;

        /**
         * Append signature to unencrypted message object
         * @param detachedSignature The detached ASCII-armored or Uint8Array PGP signature
         */
        appendSignature(detachedSignature: string | Uint8Array): void;

        /**
         * Returns ASCII armored text of message
         * @returns ASCII armor
         */
        armor(): ReadableStream<String>;
    }

    /**
     * Encrypt a session key either with public keys, passwords, or both at once.
     * @param sessionKey session key for encryption
     * @param symAlgo session key algorithm
     * @param aeadAlgo (optional) aead algorithm, e.g. 'eax' or 'ocb'
     * @param publicKeys (optional) public key(s) for message encryption
     * @param passwords (optional) for message encryption
     * @param wildcard (optional) use a key ID of 0 instead of the public key IDs
     * @param date (optional) override the date
     * @param userIds (optional) user IDs to encrypt for, e.g. [ { name:'Robert Receiver', email:'robert@openpgp.org' }]
     * @returns new message with encrypted content
     */
    function encryptSessionKey(
        sessionKey: Uint8Array,
        symAlgo: string,
        aeadAlgo: string,
        publicKeys: any[],
        passwords: any[],
        wildcard: boolean,
        date: Date,
        userIds: any[],
    ): Promise<Message>;

    /**
     * Create signature packets for the message
     * @param literalDataPacket the literal data packet to sign
     * @param privateKeys private keys with decrypted secret key data for signing
     * @param signature (optional) any existing detached signature to append
     * @param date (optional) override the creationtime of the signature
     * @param userIds (optional) user IDs to sign with, e.g. [ { name:'Steve Sender', email:'steve@openpgp.org' }]
     * @returns list of signature packets
     */
    function createSignaturePackets(
        literalDataPacket: packet.Literal,
        privateKeys: any[],
        signature: signature.Signature,
        date: Date,
        userIds: any[],
    ): Promise<packet.List>;

    /**
     * Create object containing signer's keyid and validity of signature
     * @param signature signature packets
     * @param literalDataList array of literal data packets
     * @param keys array of keys to verify signatures
     * @param date Verify the signature against the given date,
     *        i.e. check signature creation time < date < expiration time
     * @returns list of signer's keyid and validity of signature
     */
    function createVerificationObject(
        signature: packet.Signature,
        literalDataList: any[],
        keys: any[],
        date: Date,
    ): Promise<Array<{ keyid: type.keyid.Keyid; valid: boolean }>>;

    /**
     * Create list of objects containing signer's keyid and validity of signature
     * @param signatureList array of signature packets
     * @param literalDataList array of literal data packets
     * @param keys array of keys to verify signatures
     * @param date Verify the signature against the given date,
     *        i.e. check signature creation time < date < expiration time
     * @returns list of signer's keyid and validity of signature
     */
    function createVerificationObjects(
        signatureList: any[],
        literalDataList: any[],
        keys: any[],
        date: Date,
    ): Promise<Array<{ keyid: type.keyid.Keyid; valid: boolean }>>;

    /**
     * reads an OpenPGP armored message and returns a message object
     * @param armoredText text to be parsed
     * @returns new message object
     */
    function readArmored(armoredText: string | ReadableStream<String>): Promise<Message>;

    /**
     * reads an OpenPGP message as byte array and returns a message object
     * @param input binary message
     * @param fromStream whether the message was created from a Stream
     * @returns new message object
     */
    function read(input: Uint8Array | ReadableStream<Uint8Array>, fromStream?: boolean): Promise<Message>;

    /**
     * creates new message object from text
     * @param text
     * @param filename (optional)
     * @param date (optional)
     * @param type (optional) data packet type
     * @returns new message object
     */
    function fromText(
        text: string | ReadableStream<String>,
        filename?: string,
        date?: Date,
        type?: "utf8" | "binary" | "text" | "mime",
    ): Message;

    /**
     * creates new message object from binary data
     * @param bytes
     * @param filename (optional)
     * @param date (optional)
     * @param type (optional) data packet type
     * @returns new message object
     */
    function fromBinary(
        bytes: Uint8Array | ReadableStream<Uint8Array>,
        filename?: string,
        date?: Date,
        type?: "utf8" | "binary" | "text" | "mime",
    ): Message;
}

export interface revokeKey_reasonForRevocation {
    /**
     * (optional) flag indicating the reason for revocation
     */
    flag: enums.reasonForRevocation;
    /**
     * (optional) string explaining the reason for revocation
     */
    string: string;
}

/**
 * @see module:packet/all_packets
 * @see module:packet/clone
 * @see module:packet.List
 */
export namespace packet {
    type AnyPacket =
        | Compressed
        | Literal
        | Marker
        | OnePassSignature
        | PublicKey
        | PublicKeyEncryptedSessionKey
        | PublicSubkey
        | SecretKey
        | SecretSubkey
        | Signature
        | SymEncryptedAEADProtected
        | SymEncryptedIntegrityProtected
        | SymEncryptedSessionKey
        | SymmetricallyEncrypted
        | Trust
        | UserAttribute
        | Userid;

    /**
     * Allocate a new packet
     * @param tag property name from {@link module:enums.packet}
     * @returns new packet object with type based on tag
     */
    function newPacketFromTag(tag: string): object;

    /**
     * Allocate a new packet from structured packet clone
     * @see
     * @param packetClone packet clone
     * @returns new packet object with data from packet clone
     */
    function fromStructuredClone(packetClone: object): object;

    class Compressed {
        /**
         * Implementation of the Compressed Data Packet (Tag 8)
         * {@link https://tools.ietf.org/html/rfc4880#section-5.6|RFC4880 5.6}:
         * The Compressed Data packet contains compressed data.  Typically,
         * this packet is found as the contents of an encrypted packet, or following
         * a Signature or One-Pass Signature packet, and contains a literal data packet.
         */
        constructor();

        /**
         * Packet type
         */
        tag: enums.packet;

        /**
         * List of packets
         */
        packets: List;

        /**
         * Compression algorithm
         */
        algorithm: any;

        /**
         * Compressed packet data
         */
        compressed: Uint8Array | ReadableStream<Uint8Array>;

        /**
         * Parsing function for the packet.
         * @param bytes Payload of a tag 8 packet
         */
        read(bytes: Uint8Array | ReadableStream<Uint8Array>): void;

        /**
         * Return the compressed packet.
         * @returns binary compressed packet
         */
        write(): Uint8Array | ReadableStream<Uint8Array>;

        /**
         * Decompression method for decompressing the compressed data
         * read by read_packet
         */
        decompress(): void;

        /**
         * Compress the packet data (member decompressedData)
         */
        compress(): void;
    }

    class Literal {
        /**
         * Implementation of the Literal Data Packet (Tag 11)
         * {@link https://tools.ietf.org/html/rfc4880#section-5.9|RFC4880 5.9}:
         * A Literal Data packet contains the body of a message; data that is not to be
         * further interpreted.
         * @param date the creation date of the literal package
         */
        constructor(date: Date);

        /**
         * Set the packet data to a javascript native string, end of line
         * will be normalized to \r\n and by default text is converted to UTF8
         * @param text Any native javascript string
         * @param format (optional) The format of the string of bytes
         */
        setText(text: string | ReadableStream<String>, format?: "utf8" | "binary" | "text" | "mime"): void;

        /**
         * Returns literal data packets as native JavaScript string
         * with normalized end of line to \n
         * @param clone (optional) Whether to return a clone so that getBytes/getText can be called again
         * @returns literal data as text
         */
        getText(clone: boolean): string | ReadableStream<String>;

        /**
         * Set the packet data to value represented by the provided string of bytes.
         * @param bytes The string of bytes
         * @param format The format of the string of bytes
         */
        setBytes(bytes: Uint8Array | ReadableStream<Uint8Array>, format: "utf8" | "binary" | "text" | "mime"): void;

        /**
         * Get the byte sequence representing the literal packet data
         * @param clone (optional) Whether to return a clone so that getBytes/getText can be called again
         * @returns A sequence of bytes
         */
        getBytes(clone: boolean): Uint8Array | ReadableStream<Uint8Array>;

        /**
         * Sets the filename of the literal packet data
         * @param filename Any native javascript string
         */
        setFilename(filename: string): void;

        /**
         * Get the filename of the literal packet data
         * @returns filename
         */
        getFilename(): string;

        /**
         * Parsing function for a literal data packet (tag 11).
         * @param input Payload of a tag 11 packet
         * @returns object representation
         */
        read(input: Uint8Array | ReadableStream<Uint8Array>): Literal;

        /**
         * Creates a string representation of the packet
         * @returns Uint8Array representation of the packet
         */
        write(): Uint8Array | ReadableStream<Uint8Array>;
    }

    class Marker {
        /**
         * Implementation of the strange "Marker packet" (Tag 10)
         * {@link https://tools.ietf.org/html/rfc4880#section-5.8|RFC4880 5.8}:
         * An experimental version of PGP used this packet as the Literal
         * packet, but no released version of PGP generated Literal packets with this
         * tag. With PGP 5.x, this packet has been reassigned and is reserved for use as
         * the Marker packet.
         * Such a packet MUST be ignored when received.
         */
        constructor();

        /**
         * Parsing function for a literal data packet (tag 10).
         * @param input Payload of a tag 10 packet
         * @param position Position to start reading from the input string
         * @param len Length of the packet or the remaining length of
         *        input at position
         * @returns Object representation
         */
        read(input: string, position: Integer, len: Integer): Marker;
    }

    class OnePassSignature {
        /**
         * Implementation of the One-Pass Signature Packets (Tag 4)
         * {@link https://tools.ietf.org/html/rfc4880#section-5.4|RFC4880 5.4}:
         * The One-Pass Signature packet precedes the signed data and contains
         * enough information to allow the receiver to begin calculating any
         * hashes needed to verify the signature.  It allows the Signature
         * packet to be placed at the end of the message, so that the signer
         * can compute the entire signed message in one pass.
         */
        constructor();

        /**
         * Packet type
         */
        tag: enums.packet;

        /**
         * A one-octet version number.  The current version is 3.
         */
        version: any;

        /**
         * A one-octet signature type.
         * Signature types are described in
         * {@link https://tools.ietf.org/html/rfc4880#section-5.2.1|RFC4880 Section 5.2.1}.
         */
        signatureType: any;

        /**
         * A one-octet number describing the hash algorithm used.
         * @see
         */
        hashAlgorithm: any;

        /**
         * A one-octet number describing the public-key algorithm used.
         * @see
         */
        publicKeyAlgorithm: any;

        /**
         * An eight-octet number holding the Key ID of the signing key.
         */
        issuerKeyId: any;

        /**
         * A one-octet number holding a flag showing whether the signature is nested.
         * A zero value indicates that the next packet is another One-Pass Signature packet
         * that describes another signature to be applied to the same message data.
         */
        flags: any;

        /**
         * parsing function for a one-pass signature packet (tag 4).
         * @param bytes payload of a tag 4 packet
         * @returns object representation
         */
        read(bytes: Uint8Array): OnePassSignature;

        /**
         * creates a string representation of a one-pass signature packet
         * @returns a Uint8Array representation of a one-pass signature packet
         */
        write(): Uint8Array;

        /**
         * Fix custom types after cloning
         */
        postCloneTypeFix(): void;
    }

    class List {
        /**
         * This class represents a list of openpgp packets.
         * Take care when iterating over it - the packets themselves
         * are stored as numerical indices.
         */
        constructor();

        /**
         * The number of packets contained within the list.
         */
        readonly length: Integer;

        /**
         * Reads a stream of binary data and interprents it as a list of packets.
         * @param A Uint8Array of bytes.
         */
        read(A: Uint8Array | ReadableStream<Uint8Array>): void;

        /**
         * Creates a binary representation of openpgp objects contained within the
         * class instance.
         * @returns A Uint8Array containing valid openpgp packets.
         */
        write(): Uint8Array | ReadableStream<Uint8Array>;

        /**
         * Adds a packet to the list. This is the only supported method of doing so;
         * writing to packetlist[i] directly will result in an error.
         * @param packet Packet to push
         */
        push(packet: object): void;

        /**
         * Creates a new PacketList with all packets from the given types
         */
        filterByTag(...tags: enums.packet[]): List;

        /**
         * Traverses packet tree and returns first matching packet
         * @param type The packet type
         * @returns
         */
        findPacket(type: enums.packet): AnyPacket | undefined;

        /**
         * Returns array of found indices by tag
         */
        indexOfTag(...tags: enums.packet[]): number[];

        /**
         * Concatenates packetlist or array of packets
         */
        concat(packets?: List): void;

        /**
         * Allocate a new packetlist from structured packetlist clone
         * See {@link https://w3c.github.io/html/infrastructure.html#safe-passing-of-structured-data}
         * @param packetClone packetlist clone
         * @returns new packetlist object with data from packetlist clone
         */
        static fromStructuredClone(packetClone: object): object;
    }

    class PublicKey {
        /**
         * Implementation of the Key Material Packet (Tag 5,6,7,14)
         * {@link https://tools.ietf.org/html/rfc4880#section-5.5|RFC4480 5.5}:
         * A key material packet contains all the information about a public or
         * private key.  There are four variants of this packet type, and two
         * major versions.
         * A Public-Key packet starts a series of packets that forms an OpenPGP
         * key (sometimes called an OpenPGP certificate).
         */
        constructor();

        /**
         * Packet type
         */
        tag: enums.packet;

        /**
         * Packet version
         */
        version: Integer;

        /**
         * Key creation date.
         */
        created: Date;

        /**
         * Public key algorithm.
         */
        algorithm: string;

        /**
         * Algorithm specific params
         */
        params: object[];

        /**
         * Time until expiration in days (V3 only)
         */
        expirationTimeV3: Integer;

        /**
         * Fingerprint in lowercase hex
         */
        fingerprint: string;

        /**
         * Keyid
         */
        keyid: type.keyid.Keyid;

        /**
         * Internal Parser for public keys as specified in {@link https://tools.ietf.org/html/rfc4880#section-5.5.2|RFC 4880 section 5.5.2 Public-Key Packet Formats}
         * called by read_tag&lt;num&gt;
         * @param bytes Input array to read the packet from
         * @returns This object with attributes set by the parser
         */
        read(bytes: Uint8Array): object;

        /**
         * Alias of read()
         * @see module:packet.PublicKey#read
         */
        readPublicKey: any;

        /**
         * Same as write_private_key, but has less information because of
         * public key.
         * @returns OpenPGP packet body contents,
         */
        write(): Uint8Array;

        /**
         * Alias of write()
         * @see module:packet.PublicKey#write
         */
        writePublicKey: any;

        /**
         * Write an old version packet - it's used by some of the internal routines.
         */
        writeOld(): void;

        /**
         * Check whether secret-key data is available in decrypted form. Returns null for public keys.
         * @returns
         */
        isDecrypted(): boolean | null;

        /**
         * Returns the creation time of the key
         * @returns
         */
        getCreationTime(): Date;

        /**
         * Calculates the key id of the key
         * @returns A 8 byte key id
         */
        getKeyId(): string;

        /**
         * Calculates the fingerprint of the key
         * @returns A Uint8Array containing the fingerprint
         */
        getFingerprintBytes(): Uint8Array;

        /**
         * Calculates the fingerprint of the key
         * @returns A string containing the fingerprint in lowercase hex
         */
        getFingerprint(): string;

        /**
         * Calculates whether two keys have the same fingerprint without actually calculating the fingerprint
         * @returns Whether the two keys have the same version and public key data
         */
        hasSameFingerprintAs(): boolean;

        /**
         * Returns algorithm information
         * @returns An object of the form {algorithm: string, bits:int, curve:String}
         */
        getAlgorithmInfo(): object;

        /**
         * Fix custom types after cloning
         */
        postCloneTypeFix(): void;
    }

    class PublicKeyEncryptedSessionKey {
        /**
         * Public-Key Encrypted Session Key Packets (Tag 1)
         * {@link https://tools.ietf.org/html/rfc4880#section-5.1|RFC4880 5.1}:
         * A Public-Key Encrypted Session Key packet holds the session key
         * used to encrypt a message. Zero or more Public-Key Encrypted Session Key
         * packets and/or Symmetric-Key Encrypted Session Key packets may precede a
         * Symmetrically Encrypted Data Packet, which holds an encrypted message. The
         * message is encrypted with the session key, and the session key is itself
         * encrypted and stored in the Encrypted Session Key packet(s). The
         * Symmetrically Encrypted Data Packet is preceded by one Public-Key Encrypted
         * Session Key packet for each OpenPGP key to which the message is encrypted.
         * The recipient of the message finds a session key that is encrypted to their
         * public key, decrypts the session key, and then uses the session key to
         * decrypt the message.
         */
        constructor();

        encrypted: any[];

        /**
         * Parsing function for a publickey encrypted session key packet (tag 1).
         * @param input Payload of a tag 1 packet
         * @param position Position to start reading from the input string
         * @param len Length of the packet or the remaining length of
         *        input at position
         * @returns Object representation
         */
        read(input: Uint8Array, position: Integer, len: Integer): PublicKeyEncryptedSessionKey;

        /**
         * Create a string representation of a tag 1 packet
         * @returns The Uint8Array representation
         */
        write(): Uint8Array;

        /**
         * Encrypt session key packet
         * @param key Public key
         * @returns
         */
        encrypt(key: PublicKey): Promise<Boolean>;

        /**
         * Decrypts the session key (only for public key encrypted session key
         * packets (tag 1)
         * @param key Private key with secret params unlocked
         * @returns
         */
        decrypt(key: SecretKey): Promise<Boolean>;

        /**
         * Fix custom types after cloning
         */
        postCloneTypeFix(): void;
    }

    class PublicSubkey {
        /**
         * A Public-Subkey packet (tag 14) has exactly the same format as a
         * Public-Key packet, but denotes a subkey.  One or more subkeys may be
         * associated with a top-level key.  By convention, the top-level key
         * provides signature services, and the subkeys provide encryption
         * services.
         */
        constructor();

        /**
         * Packet type
         */
        tag: enums.packet;

        /**
         * Packet version
         */
        version: Integer;

        /**
         * Key creation date.
         */
        created: Date;

        /**
         * Public key algorithm.
         */
        algorithm: string;

        /**
         * Algorithm specific params
         */
        params: object[];

        /**
         * Time until expiration in days (V3 only)
         */
        expirationTimeV3: Integer;

        /**
         * Fingerprint in lowercase hex
         */
        fingerprint: string;

        /**
         * Keyid
         */
        keyid: type.keyid.Keyid;

        /**
         * Internal Parser for public keys as specified in {@link https://tools.ietf.org/html/rfc4880#section-5.5.2|RFC 4880 section 5.5.2 Public-Key Packet Formats}
         * called by read_tag&lt;num&gt;
         * @param bytes Input array to read the packet from
         * @returns This object with attributes set by the parser
         */
        read(bytes: Uint8Array): object;

        /**
         * Alias of read()
         * @see module:packet.PublicKey#read
         */
        readPublicKey: any;

        /**
         * Same as write_private_key, but has less information because of
         * public key.
         * @returns OpenPGP packet body contents,
         */
        write(): Uint8Array;

        /**
         * Alias of write()
         * @see module:packet.PublicKey#write
         */
        writePublicKey: any;

        /**
         * Write an old version packet - it's used by some of the internal routines.
         */
        writeOld(): void;

        /**
         * Check whether secret-key data is available in decrypted form. Returns null for public keys.
         * @returns
         */
        isDecrypted(): boolean | null;

        /**
         * Returns the creation time of the key
         * @returns
         */
        getCreationTime(): Date;

        /**
         * Calculates the key id of the key
         * @returns A 8 byte key id
         */
        getKeyId(): string;

        /**
         * Calculates the fingerprint of the key
         * @returns A Uint8Array containing the fingerprint
         */
        getFingerprintBytes(): Uint8Array;

        /**
         * Calculates the fingerprint of the key
         * @returns A string containing the fingerprint in lowercase hex
         */
        getFingerprint(): string;

        /**
         * Calculates whether two keys have the same fingerprint without actually calculating the fingerprint
         * @returns Whether the two keys have the same version and public key data
         */
        hasSameFingerprintAs(): boolean;

        /**
         * Returns algorithm information
         * @returns An object of the form {algorithm: string, bits:int, curve:String}
         */
        getAlgorithmInfo(): object;

        /**
         * Fix custom types after cloning
         */
        postCloneTypeFix(): void;
    }

    class SecretKey {
        /**
         * A Secret-Key packet contains all the information that is found in a
         * Public-Key packet, including the public-key material, but also
         * includes the secret-key material after all the public-key fields.
         */
        constructor();

        /**
         * Packet type
         */
        tag: enums.packet;

        /**
         * Encrypted secret-key data
         */
        encrypted: any;

        /**
         * Indicator if secret-key data is encrypted. `this.isEncrypted === false` means data is available in decrypted form.
         */
        isEncrypted: any;

        /**
         * Internal parser for private keys as specified in
         * {@link https://tools.ietf.org/html/draft-ietf-openpgp-rfc4880bis-04#section-5.5.3|RFC4880bis-04 section 5.5.3}
         * @param bytes Input string to read the packet from
         */
        read(bytes: string): void;

        /**
         * Creates an OpenPGP key packet for the given key.
         * @returns A string of bytes containing the secret key OpenPGP packet
         */
        write(): string;

        /**
         * Check whether secret-key data is available in decrypted form. Returns null for public keys.
         * @returns
         */
        isDecrypted(): boolean | null;

        /**
         * Encrypt the payload. By default, we use aes256 and iterated, salted string
         * to key specifier. If the key is in a decrypted state (isEncrypted === false)
         * and the passphrase is empty or undefined, the key will be set as not encrypted.
         * This can be used to remove passphrase protection after calling decrypt().
         * @param passphrase
         * @returns
         */
        encrypt(passphrase: string): Promise<Boolean>;

        /**
         * Decrypts the private key params which are needed to use the key.
         * {@link module:packet.SecretKey.isDecrypted} should be false, as
         * otherwise calls to this function will throw an error.
         * @param passphrase The passphrase for this private key as string
         * @returns
         */
        decrypt(passphrase: string): Promise<Boolean>;

        /**
         * Clear private params, return to initial state
         */
        clearPrivateParams(): void;

        /**
         * Fix custom types after cloning
         */
        postCloneTypeFix(): void;

        /**
         * Packet version
         */
        version: Integer;

        /**
         * Key creation date.
         */
        created: Date;

        /**
         * Public key algorithm.
         */
        algorithm: string;

        /**
         * Algorithm specific params
         */
        params: object[];

        /**
         * Time until expiration in days (V3 only)
         */
        expirationTimeV3: Integer;

        /**
         * Fingerprint in lowercase hex
         */
        fingerprint: string;

        /**
         * Keyid
         */
        keyid: type.keyid.Keyid;

        /**
         * Alias of read()
         * @see module:packet.PublicKey#read
         */
        readPublicKey: any;

        /**
         * Alias of write()
         * @see module:packet.PublicKey#write
         */
        writePublicKey: any;

        /**
         * Write an old version packet - it's used by some of the internal routines.
         */
        writeOld(): void;

        /**
         * Returns the creation time of the key
         * @returns
         */
        getCreationTime(): Date;

        /**
         * Calculates the key id of the key
         * @returns A 8 byte key id
         */
        getKeyId(): string;

        /**
         * Calculates the fingerprint of the key
         * @returns A Uint8Array containing the fingerprint
         */
        getFingerprintBytes(): Uint8Array;

        /**
         * Calculates the fingerprint of the key
         * @returns A string containing the fingerprint in lowercase hex
         */
        getFingerprint(): string;

        /**
         * Calculates whether two keys have the same fingerprint without actually calculating the fingerprint
         * @returns Whether the two keys have the same version and public key data
         */
        hasSameFingerprintAs(): boolean;

        /**
         * Returns algorithm information
         * @returns An object of the form {algorithm: string, bits:int, curve:String}
         */
        getAlgorithmInfo(): object;
    }

    class SecretSubkey {
        /**
         * A Secret-Subkey packet (tag 7) is the subkey analog of the Secret
         * Key packet and has exactly the same format.
         */
        constructor();

        /**
         * Packet type
         */
        tag: enums.packet;

        /**
         * Encrypted secret-key data
         */
        encrypted: any;

        /**
         * Indicator if secret-key data is encrypted. `this.isEncrypted === false` means data is available in decrypted form.
         */
        isEncrypted: any;

        /**
         * Internal parser for private keys as specified in
         * {@link https://tools.ietf.org/html/draft-ietf-openpgp-rfc4880bis-04#section-5.5.3|RFC4880bis-04 section 5.5.3}
         * @param bytes Input string to read the packet from
         */
        read(bytes: string): void;

        /**
         * Creates an OpenPGP key packet for the given key.
         * @returns A string of bytes containing the secret key OpenPGP packet
         */
        write(): string;

        /**
         * Check whether secret-key data is available in decrypted form. Returns null for public keys.
         * @returns
         */
        isDecrypted(): boolean | null;

        /**
         * Encrypt the payload. By default, we use aes256 and iterated, salted string
         * to key specifier. If the key is in a decrypted state (isEncrypted === false)
         * and the passphrase is empty or undefined, the key will be set as not encrypted.
         * This can be used to remove passphrase protection after calling decrypt().
         * @param passphrase
         * @returns
         */
        encrypt(passphrase: string): Promise<Boolean>;

        /**
         * Decrypts the private key params which are needed to use the key.
         * {@link module:packet.SecretKey.isDecrypted} should be false, as
         * otherwise calls to this function will throw an error.
         * @param passphrase The passphrase for this private key as string
         * @returns
         */
        decrypt(passphrase: string): Promise<Boolean>;

        /**
         * Clear private params, return to initial state
         */
        clearPrivateParams(): void;

        /**
         * Fix custom types after cloning
         */
        postCloneTypeFix(): void;

        /**
         * Packet version
         */
        version: Integer;

        /**
         * Key creation date.
         */
        created: Date;

        /**
         * Public key algorithm.
         */
        algorithm: string;

        /**
         * Algorithm specific params
         */
        params: object[];

        /**
         * Time until expiration in days (V3 only)
         */
        expirationTimeV3: Integer;

        /**
         * Fingerprint in lowercase hex
         */
        fingerprint: string;

        /**
         * Keyid
         */
        keyid: type.keyid.Keyid;

        /**
         * Alias of read()
         * @see module:packet.PublicKey#read
         */
        readPublicKey: any;

        /**
         * Alias of write()
         * @see module:packet.PublicKey#write
         */
        writePublicKey: any;

        /**
         * Write an old version packet - it's used by some of the internal routines.
         */
        writeOld(): void;

        /**
         * Returns the creation time of the key
         * @returns
         */
        getCreationTime(): Date;

        /**
         * Calculates the key id of the key
         * @returns A 8 byte key id
         */
        getKeyId(): string;

        /**
         * Calculates the fingerprint of the key
         * @returns A Uint8Array containing the fingerprint
         */
        getFingerprintBytes(): Uint8Array;

        /**
         * Calculates the fingerprint of the key
         * @returns A string containing the fingerprint in lowercase hex
         */
        getFingerprint(): string;

        /**
         * Calculates whether two keys have the same fingerprint without actually calculating the fingerprint
         * @returns Whether the two keys have the same version and public key data
         */
        hasSameFingerprintAs(): boolean;

        /**
         * Returns algorithm information
         * @returns An object of the form {algorithm: string, bits:int, curve:String}
         */
        getAlgorithmInfo(): object;
    }

    class Signature {
        /**
         * Implementation of the Signature Packet (Tag 2)
         * {@link https://tools.ietf.org/html/rfc4880#section-5.2|RFC4480 5.2}:
         * A Signature packet describes a binding between some public key and
         * some data.  The most common signatures are a signature of a file or a
         * block of text, and a signature that is a certification of a User ID.
         * @param date the creation date of the signature
         */
        constructor(date: Date);

        /**
         * parsing function for a signature packet (tag 2).
         * @param bytes payload of a tag 2 packet
         * @param position position to start reading from the bytes string
         * @param len length of the packet or the remaining length of bytes at position
         * @returns object representation
         */
        read(bytes: string, position: Integer, len: Integer): Signature;

        /**
         * Signs provided data. This needs to be done prior to serialization.
         * @param key private key used to sign the message.
         * @param data Contains packets to be signed.
         * @returns
         */
        sign(key: SecretKey, data: object): Promise<Boolean>;

        /**
         * Creates Uint8Array of bytes of all subpacket data except Issuer and Embedded Signature subpackets
         * @returns subpacket data
         */
        write_hashed_sub_packets(): Uint8Array;

        /**
         * Creates Uint8Array of bytes of Issuer and Embedded Signature subpackets
         * @returns subpacket data
         */
        write_unhashed_sub_packets(): Uint8Array;

        /**
         * verifys the signature packet. Note: not signature types are implemented
         * @param key the public key to verify the signature
         * @param signatureType expected signature type
         * @param data data which on the signature applies
         * @returns True if message is verified, else false.
         */
        verify(
            key: PublicSubkey | PublicKey | SecretSubkey | SecretKey,
            signatureType: enums.signature,
            data: string | object,
        ): Promise<Boolean>;

        /**
         * Verifies signature expiration date
         * @param date (optional) use the given date for verification instead of the current time
         * @returns true if expired
         */
        isExpired(date: Date): boolean;

        /**
         * Returns the expiration time of the signature or Infinity if signature does not expire
         * @returns expiration time
         */
        getExpirationTime(): Date;

        /**
         * Fix custom types after cloning
         */
        postCloneTypeFix(): void;
    }

    class SymEncryptedAEADProtected {
        /**
         * Implementation of the Symmetrically Encrypted Authenticated Encryption with
         * Additional Data (AEAD) Protected Data Packet
         * {@link https://tools.ietf.org/html/draft-ford-openpgp-format-00#section-2.1}:
         * AEAD Protected Data Packet
         */
        constructor();

        /**
         * Parse an encrypted payload of bytes in the order: version, IV, ciphertext (see specification)
         * @param bytes
         */
        read(bytes: Uint8Array | ReadableStream<Uint8Array>): void;

        /**
         * Write the encrypted payload of bytes in the order: version, IV, ciphertext (see specification)
         * @returns The encrypted payload
         */
        write(): Uint8Array | ReadableStream<Uint8Array>;

        /**
         * Decrypt the encrypted payload.
         * @param sessionKeyAlgorithm The session key's cipher algorithm e.g. 'aes128'
         * @param key The session key used to encrypt the payload
         * @param streaming Whether the top-level function will return a stream
         * @returns
         */
        decrypt(sessionKeyAlgorithm: string, key: Uint8Array, streaming: boolean): boolean;

        /**
         * Encrypt the packet list payload.
         * @param sessionKeyAlgorithm The session key's cipher algorithm e.g. 'aes128'
         * @param key The session key used to encrypt the payload
         * @param streaming Whether the top-level function will return a stream
         */
        encrypt(sessionKeyAlgorithm: string, key: Uint8Array, streaming: boolean): void;

        /**
         * En/decrypt the payload.
         * @param fn Whether to encrypt or decrypt
         * @param key The session key used to en/decrypt the payload
         * @param data The data to en/decrypt
         * @param streaming Whether the top-level function will return a stream
         * @returns
         */
        crypt(
            fn: "encrypt" | "decrypt",
            key: Uint8Array,
            data: Uint8Array | ReadableStream<Uint8Array>,
            streaming: boolean,
        ): Uint8Array | ReadableStream<Uint8Array>;
    }

    class SymEncryptedIntegrityProtected {
        /**
         * Implementation of the Sym. Encrypted Integrity Protected Data Packet (Tag 18)
         * {@link https://tools.ietf.org/html/rfc4880#section-5.13|RFC4880 5.13}:
         * The Symmetrically Encrypted Integrity Protected Data packet is
         * a variant of the Symmetrically Encrypted Data packet. It is a new feature
         * created for OpenPGP that addresses the problem of detecting a modification to
         * encrypted data. It is used in combination with a Modification Detection Code
         * packet.
         */
        constructor();

        /**
         * The encrypted payload.
         */
        encrypted: any;

        /**
         * If after decrypting the packet this is set to true,
         * a modification has been detected and thus the contents
         * should be discarded.
         */
        modification: boolean;

        /**
         * Encrypt the payload in the packet.
         * @param sessionKeyAlgorithm The selected symmetric encryption algorithm to be used e.g. 'aes128'
         * @param key The key of cipher blocksize length to be used
         * @param streaming Whether to set this.encrypted to a stream
         * @returns
         */
        encrypt(sessionKeyAlgorithm: string, key: Uint8Array, streaming: boolean): Promise<Boolean>;

        /**
         * Decrypts the encrypted data contained in the packet.
         * @param sessionKeyAlgorithm The selected symmetric encryption algorithm to be used e.g. 'aes128'
         * @param key The key of cipher blocksize length to be used
         * @param streaming Whether to read this.encrypted as a stream
         * @returns
         */
        decrypt(sessionKeyAlgorithm: string, key: Uint8Array, streaming: boolean): Promise<Boolean>;
    }

    class SymEncryptedSessionKey {
        /**
         * Public-Key Encrypted Session Key Packets (Tag 1)
         * {@link https://tools.ietf.org/html/rfc4880#section-5.1|RFC4880 5.1}:
         * A Public-Key Encrypted Session Key packet holds the session key
         * used to encrypt a message. Zero or more Public-Key Encrypted Session Key
         * packets and/or Symmetric-Key Encrypted Session Key packets may precede a
         * Symmetrically Encrypted Data Packet, which holds an encrypted message. The
         * message is encrypted with the session key, and the session key is itself
         * encrypted and stored in the Encrypted Session Key packet(s). The
         * Symmetrically Encrypted Data Packet is preceded by one Public-Key Encrypted
         * Session Key packet for each OpenPGP key to which the message is encrypted.
         * The recipient of the message finds a session key that is encrypted to their
         * public key, decrypts the session key, and then uses the session key to
         * decrypt the message.
         */
        constructor();

        /**
         * Parsing function for a symmetric encrypted session key packet (tag 3).
         * @param input Payload of a tag 1 packet
         * @param position Position to start reading from the input string
         * @param len Length of the packet or the remaining length of
         *        input at position
         * @returns Object representation
         */
        read(input: Uint8Array, position: Integer, len: Integer): SymEncryptedSessionKey;

        /**
         * Decrypts the session key
         * @param passphrase The passphrase in string form
         * @returns
         */
        decrypt(passphrase: string): Promise<Boolean>;

        /**
         * Encrypts the session key
         * @param passphrase The passphrase in string form
         * @returns
         */
        encrypt(passphrase: string): Promise<Boolean>;

        /**
         * Fix custom types after cloning
         */
        postCloneTypeFix(): void;
    }

    class SymmetricallyEncrypted {
        /**
         * Implementation of the Symmetrically Encrypted Data Packet (Tag 9)
         * {@link https://tools.ietf.org/html/rfc4880#section-5.7|RFC4880 5.7}:
         * The Symmetrically Encrypted Data packet contains data encrypted with a
         * symmetric-key algorithm. When it has been decrypted, it contains other
         * packets (usually a literal data packet or compressed data packet, but in
         * theory other Symmetrically Encrypted Data packets or sequences of packets
         * that form whole OpenPGP messages).
         */
        constructor();

        /**
         * Packet type
         */
        tag: enums.packet;

        /**
         * Encrypted secret-key data
         */
        encrypted: any;

        /**
         * Decrypted packets contained within.
         */
        packets: List;

        /**
         * When true, decrypt fails if message is not integrity protected
         * @see module:config.ignore_mdc_error
         */
        ignore_mdc_error: any;

        /**
         * Decrypt the symmetrically-encrypted packet data
         * See {@link https://tools.ietf.org/html/rfc4880#section-9.2|RFC 4880 9.2} for algorithms.
         * @param sessionKeyAlgorithm Symmetric key algorithm to use
         * @param key The key of cipher blocksize length to be used
         * @returns
         */
        decrypt(sessionKeyAlgorithm: enums.symmetric, key: Uint8Array): Promise<Boolean>;

        /**
         * Encrypt the symmetrically-encrypted packet data
         * See {@link https://tools.ietf.org/html/rfc4880#section-9.2|RFC 4880 9.2} for algorithms.
         * @param sessionKeyAlgorithm Symmetric key algorithm to use
         * @param key The key of cipher blocksize length to be used
         * @returns
         */
        encrypt(sessionKeyAlgorithm: enums.symmetric, key: Uint8Array): Promise<Boolean>;
    }

    class Trust {
        /**
         * Implementation of the Trust Packet (Tag 12)
         * {@link https://tools.ietf.org/html/rfc4880#section-5.10|RFC4880 5.10}:
         * The Trust packet is used only within keyrings and is not normally
         * exported.  Trust packets contain data that record the user's
         * specifications of which key holders are trustworthy introducers,
         * along with other information that implementing software uses for
         * trust information.  The format of Trust packets is defined by a given
         * implementation.
         * Trust packets SHOULD NOT be emitted to output streams that are
         * transferred to other users, and they SHOULD be ignored on any input
         * other than local keyring files.
         */
        constructor();

        /**
         * Parsing function for a trust packet (tag 12).
         * Currently not implemented as we ignore trust packets
         * @param byptes payload of a tag 12 packet
         */
        read(byptes: string): void;
    }

    class UserAttribute {
        /**
         * Implementation of the User Attribute Packet (Tag 17)
         * The User Attribute packet is a variation of the User ID packet.  It
         * is capable of storing more types of data than the User ID packet,
         * which is limited to text.  Like the User ID packet, a User Attribute
         * packet may be certified by the key owner ("self-signed") or any other
         * key owner who cares to certify it.  Except as noted, a User Attribute
         * packet may be used anywhere that a User ID packet may be used.
         * While User Attribute packets are not a required part of the OpenPGP
         * standard, implementations SHOULD provide at least enough
         * compatibility to properly handle a certification signature on the
         * User Attribute packet.  A simple way to do this is by treating the
         * User Attribute packet as a User ID packet with opaque contents, but
         * an implementation may use any method desired.
         */
        constructor();

        /**
         * parsing function for a user attribute packet (tag 17).
         * @param input payload of a tag 17 packet
         */
        read(input: Uint8Array): void;

        /**
         * Creates a binary representation of the user attribute packet
         * @returns string representation
         */
        write(): Uint8Array;

        /**
         * Compare for equality
         * @param usrAttr
         * @returns true if equal
         */
        equals(usrAttr: UserAttribute): boolean;
    }

    class Userid {
        /**
         * Implementation of the User ID Packet (Tag 13)
         * A User ID packet consists of UTF-8 text that is intended to represent
         * the name and email address of the key holder.  By convention, it
         * includes an RFC 2822 [RFC2822] mail name-addr, but there are no
         * restrictions on its content.  The packet length in the header
         * specifies the length of the User ID.
         */
        constructor();

        /**
         * A string containing the user id. Usually in the form
         * John Doe <john@example.com>
         */
        userid: string;

        /**
         * Parsing function for a user id packet (tag 13).
         * @param input payload of a tag 13 packet
         */
        read(input: Uint8Array): void;

        /**
         * Parse userid string, e.g. 'John Doe <john@example.com>'
         */
        parse(): void;

        /**
         * Creates a binary representation of the user id packet
         * @returns binary representation
         */
        write(): Uint8Array;

        /**
         * Set userid string from object, e.g. { name:'Phil Zimmermann', email:'phil@openpgp.org' }
         */
        format(): void;
    }

    namespace all_packets {
        /**
         * @see module:packet.Compressed
         */
        var Compressed: any;

        /**
         * @see module:packet.SymEncryptedIntegrityProtected
         */
        var SymEncryptedIntegrityProtected: any;

        /**
         * @see module:packet.SymEncryptedAEADProtected
         */
        var SymEncryptedAEADProtected: any;

        /**
         * @see module:packet.PublicKeyEncryptedSessionKey
         */
        var PublicKeyEncryptedSessionKey: any;

        /**
         * @see module:packet.SymEncryptedSessionKey
         */
        var SymEncryptedSessionKey: any;

        /**
         * @see module:packet.Literal
         */
        var Literal: any;

        /**
         * @see module:packet.PublicKey
         */
        var PublicKey: any;

        /**
         * @see module:packet.SymmetricallyEncrypted
         */
        var SymmetricallyEncrypted: any;

        /**
         * @see module:packet.Marker
         */
        var Marker: any;

        /**
         * @see module:packet.PublicSubkey
         */
        var PublicSubkey: any;

        /**
         * @see module:packet.UserAttribute
         */
        var UserAttribute: any;

        /**
         * @see module:packet.OnePassSignature
         */
        var OnePassSignature: any;

        /**
         * @see module:packet.SecretKey
         */
        var SecretKey: any;

        /**
         * @see module:packet.Userid
         */
        var Userid: any;

        /**
         * @see module:packet.SecretSubkey
         */
        var SecretSubkey: any;

        /**
         * @see module:packet.Signature
         */
        var Signature: any;

        /**
         * @see module:packet.Trust
         */
        var Trust: any;
    }

    namespace clone {
        /**
         * Create a packetlist from the correspoding object types.
         * @param options the object passed to and from the web worker
         * @returns a mutated version of the options optject
         */
        function clonePackets(options: object): object;

        /**
         * Creates an object with the correct prototype from a corresponding packetlist.
         * @param options the object passed to and from the web worker
         * @param method the public api function name to be delegated to the worker
         * @returns a mutated version of the options optject
         */
        function parseClonedPackets(options: object, method: string): object;
    }

    namespace packet {
        /**
         * Encodes a given integer of length to the openpgp length specifier to a
         * string
         * @param length The length to encode
         * @returns String with openpgp length representation
         */
        function writeSimpleLength(length: Integer): Uint8Array;

        /**
         * Writes a packet header version 4 with the given tag_type and length to a
         * string
         * @param tag_type Tag type
         * @param length Length of the payload
         * @returns String of the header
         */
        function writeHeader(tag_type: Integer, length: Integer): string;

        /**
         * Writes a packet header Version 3 with the given tag_type and length to a
         * string
         * @param tag_type Tag type
         * @param length Length of the payload
         * @returns String of the header
         */
        function writeOldHeader(tag_type: Integer, length: Integer): string;

        /**
         * Whether the packet type supports partial lengths per RFC4880
         * @param tag_type Tag type
         * @returns String of the header
         */
        function supportsStreaming(tag_type: Integer): boolean;

        /**
         * Generic static Packet Parser function
         * @param input Input stream as string
         * @param callback Function to call with the parsed packet
         * @returns Returns false if the stream was empty and parsing is done, and true otherwise.
         */
        function read(input: Uint8Array | ReadableStream<Uint8Array>, callback: Function): boolean;
    }
}

export namespace polyfills {}

export namespace signature {
    /**
     * Class that represents an OpenPGP signature.
     */
    class Signature {
        /**
         * @param packetlist The signature packets
         */
        constructor(packetlist: packet.List);

        /**
         * Returns ASCII armored text of signature
         * @returns ASCII armor
         */
        armor(): ReadableStream<String>;

        packets: packet.List;
    }

    /**
     * reads an OpenPGP armored signature and returns a signature object
     * @param armoredText text to be parsed
     * @returns new signature object
     */
    function readArmored(armoredText: string | ReadableStream<String>): Promise<Signature>;

    /**
     * reads an OpenPGP signature as byte array and returns a signature object
     * @param input binary signature
     * @returns new signature object
     */
    function read(input: Uint8Array | ReadableStream<Uint8Array>): Promise<Signature>;
}

export namespace type {
    /**
     * Encoded symmetric key for ECDH
     */
    namespace ecdh_symkey {
        class ECDHSymmetricKey {
            constructor();

            /**
             * Read an ECDHSymmetricKey from an Uint8Array
             * @param input Where to read the encoded symmetric key from
             * @returns Number of read bytes
             */
            read(input: Uint8Array): number;

            /**
             * Write an ECDHSymmetricKey as an Uint8Array
             * @returns An array containing the value
             */
            write(): Uint8Array;
        }
    }

    /**
     * Implementation of type KDF parameters
     * {@link https://tools.ietf.org/html/rfc6637#section-7|RFC 6637 7}:
     * A key derivation function (KDF) is necessary to implement the EC
     * encryption.  The Concatenation Key Derivation Function (Approved
     * Alternative 1) [NIST-SP800-56A] with the KDF hash function that is
     * SHA2-256 [FIPS-180-3] or stronger is REQUIRED.
     */
    namespace kdf_params {
        class KDFParams {
            /**
             * @param hash Hash algorithm
             * @param cipher Symmetric algorithm
             */
            constructor(hash: enums.hash, cipher: enums.symmetric);

            /**
             * Read KDFParams from an Uint8Array
             * @param input Where to read the KDFParams from
             * @returns Number of read bytes
             */
            read(input: Uint8Array): number;

            /**
             * Write KDFParams to an Uint8Array
             * @returns Array with the KDFParams value
             */
            write(): Uint8Array;
        }
    }

    /**
     * Implementation of type key id
     * {@link https://tools.ietf.org/html/rfc4880#section-3.3|RFC4880 3.3}:
     * A Key ID is an eight-octet scalar that identifies a key.
     * Implementations SHOULD NOT assume that Key IDs are unique.  The
     * section "Enhanced Key Formats" below describes how Key IDs are
     * formed.
     */
    namespace keyid {
        class Keyid {
            constructor();

            /**
             * Parsing method for a key id
             * @param input Input to read the key id from
             */
            read(input: Uint8Array): void;

            /**
             * Checks equality of Key ID's
             * @param keyid
             * @param matchWildcard Indicates whether to check if either keyid is a wildcard
             */
            equals(keyid: Keyid, matchWildcard: boolean): void;
        }
    }

    /**
     * Implementation of type MPI ( {@link https://tools.ietf.org/html/rfc4880#section-3.2|RFC4880 3.2})
     * Multiprecision integers (also called MPIs) are unsigned integers used
     * to hold large integers such as the ones used in cryptographic
     * calculations.
     * An MPI consists of two pieces: a two-octet scalar that is the length
     * of the MPI in bits followed by a string of octets that contain the
     * actual integer.
     */
    namespace mpi {
        class MPI {
            constructor();

            /**
             * Parsing function for a MPI ( {@link https://tools.ietf.org/html/rfc4880#section-3.2|RFC 4880 3.2}).
             * @param input Payload of MPI data
             * @param endian Endianness of the data; 'be' for big-endian or 'le' for little-endian
             * @returns Length of data read
             */
            read(input: Uint8Array, endian: string): Integer;

            /**
             * Converts the mpi object to a bytes as specified in
             * {@link https://tools.ietf.org/html/rfc4880#section-3.2|RFC4880 3.2}
             * @param endian Endianness of the payload; 'be' for big-endian or 'le' for little-endian
             * @param length Length of the data part of the MPI
             * @returns mpi Byte representation
             */
            write(endian: string, length: Integer): Uint8Array;
        }
    }

    /**
     * Wrapper to an OID value
     * {@link https://tools.ietf.org/html/rfc6637#section-11|RFC6637, section 11}:
     * The sequence of octets in the third column is the result of applying
     * the Distinguished Encoding Rules (DER) to the ASN.1 Object Identifier
     * with subsequent truncation.  The truncation removes the two fields of
     * encoded Object Identifier.  The first omitted field is one octet
     * representing the Object Identifier tag, and the second omitted field
     * is the length of the Object Identifier body.  For example, the
     * complete ASN.1 DER encoding for the NIST P-256 curve OID is "06 08 2A
     * 86 48 CE 3D 03 01 07", from which the first entry in the table above
     * is constructed by omitting the first two octets.  Only the truncated
     * sequence of octets is the valid representation of a curve OID.
     */
    namespace oid {
        class OID {
            constructor();

            /**
             * Method to read an OID object
             * @param input Where to read the OID from
             * @returns Number of read bytes
             */
            read(input: Uint8Array): number;

            /**
             * Serialize an OID object
             * @returns Array with the serialized value the OID
             */
            write(): Uint8Array;

            /**
             * Serialize an OID object as a hex string
             * @returns String with the hex value of the OID
             */
            toHex(): string;

            /**
             * If a known curve object identifier, return the canonical name of the curve
             * @returns String with the canonical name of the curve
             */
            getName(): string;
        }
    }

    /**
     * Implementation of the String-to-key specifier
     * {@link https://tools.ietf.org/html/rfc4880#section-3.7|RFC4880 3.7}:
     * String-to-key (S2K) specifiers are used to convert passphrase strings
     * into symmetric-key encryption/decryption keys.  They are used in two
     * places, currently: to encrypt the secret part of private keys in the
     * private keyring, and to convert passphrases to encryption keys for
     * symmetrically encrypted messages.
     */
    namespace s2k {
        class S2K {
            constructor();

            algorithm: enums.hash;

            type: enums.s2k;

            c: Integer;

            /**
             * Eight bytes of salt in a binary string.
             */
            salt: string;

            /**
             * Parsing function for a string-to-key specifier ( {@link https://tools.ietf.org/html/rfc4880#section-3.7|RFC 4880 3.7}).
             * @param input Payload of string-to-key specifier
             * @returns Actual length of the object
             */
            read(input: string): Integer;

            /**
             * Serializes s2k information
             * @returns binary representation of s2k
             */
            write(): Uint8Array;

            /**
             * Produces a key using the specified passphrase and the defined
             * hashAlgorithm
             * @param passphrase Passphrase containing user input
             * @returns Produced key with a length corresponding to
             *          hashAlgorithm hash length
             */
            produce_key(passphrase: string): Uint8Array;
        }
    }
}

/**
 * This object contains utility functions
 */
export namespace util {
    /**
     * Get transferable objects to pass buffers with zero copy (similar to "pass by reference" in C++)
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage
     * Also, convert ReadableStreams to MessagePorts
     * @param obj the options object to be passed to the web worker
     * @returns an array of binary data to be passed
     */
    function getTransferables(obj: object): any[];

    /**
     * Convert MessagePorts back to ReadableStreams
     * @param obj
     * @returns
     */
    function restoreStreams(obj: object): object;

    /**
     * Create hex string from a binary
     * @param str String to convert
     * @returns String containing the hexadecimal values
     */
    function str_to_hex(str: string): string;

    /**
     * Create binary string from a hex encoded string
     * @param str Hex string to convert
     * @returns
     */
    function hex_to_str(str: string): string;

    /**
     * Convert a Uint8Array to an MPI-formatted Uint8Array.
     * Note: the output is **not** an MPI object.
     * @see
     * @see
     * @param bin An array of 8-bit integers to convert
     * @returns MPI-formatted Uint8Array
     */
    function Uint8Array_to_MPI(bin: Uint8Array): Uint8Array;

    /**
     * Convert a Base-64 encoded string an array of 8-bit integer
     * Note: accepts both Radix-64 and URL-safe strings
     * @param base64 Base-64 encoded string to convert
     * @returns An array of 8-bit integers
     */
    function b64_to_Uint8Array(base64: string): Uint8Array;

    /**
     * Convert an array of 8-bit integer to a Base-64 encoded string
     * @param bytes An array of 8-bit integers to convert
     * @param url If true, output is URL-safe
     * @returns Base-64 encoded string
     */
    function Uint8Array_to_b64(bytes: Uint8Array, url?: boolean): string;

    /**
     * Convert a hex string to an array of 8-bit integers
     * @param hex A hex string to convert
     * @returns An array of 8-bit integers
     */
    function hex_to_Uint8Array(hex: string): Uint8Array;

    /**
     * Convert an array of 8-bit integers to a hex string
     * @param bytes Array of 8-bit integers to convert
     * @returns Hexadecimal representation of the array
     */
    function Uint8Array_to_hex(bytes: Uint8Array): string;

    /**
     * Convert a string to an array of 8-bit integers
     * @param str String to convert
     * @returns An array of 8-bit integers
     */
    function str_to_Uint8Array(str: string): Uint8Array;

    /**
     * Convert an array of 8-bit integers to a string
     * @param bytes An array of 8-bit integers to convert
     * @returns String representation of the array
     */
    function Uint8Array_to_str(bytes: Uint8Array): string;

    /**
     * Convert a native javascript string to a Uint8Array of utf8 bytes
     * @param str The string to convert
     * @returns A valid squence of utf8 bytes
     */
    function encode_utf8(str: string | ReadableStream<string>): Uint8Array | ReadableStream<string>;

    /**
     * Convert a Uint8Array of utf8 bytes to a native javascript string
     * @param utf8 A valid squence of utf8 bytes
     * @returns A native javascript string
     */
    function decode_utf8(utf8: Uint8Array | ReadableStream<string>): string | ReadableStream<string>;

    /**
     * Concat a list of Uint8Arrays, Strings or Streams
     * The caller must not mix Uint8Arrays with Strings, but may mix Streams with non-Streams.
     * @param Array of Uint8Arrays/Strings/Streams to concatenate
     * @returns Concatenated array
     */
    var concat: any;

    /**
     * Concat Uint8Arrays
     * @param Array of Uint8Arrays to concatenate
     * @returns Concatenated array
     */
    var concatUint8Array: any;

    /**
     * Check Uint8Array equality
     * @param first array
     * @param second array
     * @returns equality
     */
    function equalsUint8Array(first: Uint8Array, second: Uint8Array): boolean;

    /**
     * Calculates a 16bit sum of a Uint8Array by adding each character
     * codes modulus 65535
     * @param Uint8Array to create a sum of
     * @returns 2 bytes containing the sum of all charcodes % 65535
     */
    function write_checksum(Uint8Array: Uint8Array): Uint8Array;

    /**
     * Helper function to print a debug message. Debug
     * messages are only printed if
     * @param str String of the debug message
     */
    function print_debug(str: string): void;

    /**
     * Helper function to print a debug message. Debug
     * messages are only printed if
     * @param str String of the debug message
     */
    function print_debug_hexarray_dump(str: string): void;

    /**
     * Helper function to print a debug message. Debug
     * messages are only printed if
     * @param str String of the debug message
     */
    function print_debug_hexstr_dump(str: string): void;

    /**
     * Helper function to print a debug error. Debug
     * messages are only printed if
     * @param str String of the debug message
     */
    function print_debug_error(str: string): void;

    /**
     * Read a stream to the end and print it to the console when it's closed.
     * @param str String of the debug message
     * @param input Stream to print
     * @param concat Function to concatenate chunks of the stream (defaults to util.concat).
     */
    function print_entire_stream(
        str: string,
        input: ReadableStream<string> | Uint8Array | string,
        concat: Function,
    ): void;

    /**
     * If S[1] == 0, then double(S) == (S[2..128] || 0);
     * otherwise, double(S) == (S[2..128] || 0) xor
     * (zeros(120) || 10000111).
     * Both OCB and EAX (through CMAC) require this function to be constant-time.
     * @param data
     */
    /* Illegal function name 'double' can't be used here
    function double(data: Uint8Array): void;
    */

    /**
     * Shift a Uint8Array to the right by n bits
     * @param array The array to shift
     * @param bits Amount of bits to shift (MUST be smaller
     *        than 8)
     * @returns Resulting array.
     */
    function shiftRight(array: Uint8Array, bits: Integer): string;

    /**
     * Get native Web Cryptography api, only the current version of the spec.
     * The default configuration is to use the api when available. But it can
     * be deactivated with config.use_native
     * @returns The SubtleCrypto api or 'undefined'
     */
    function getWebCrypto(): object;

    /**
     * Get native Web Cryptography api for all browsers, including legacy
     * implementations of the spec e.g IE11 and Safari 8/9. The default
     * configuration is to use the api when available. But it can be deactivated
     * with config.use_native
     * @returns The SubtleCrypto api or 'undefined'
     */
    function getWebCryptoAll(): object;

    /**
     * Detect Node.js runtime.
     */
    function detectNode(): void;

    /**
     * Get native Node.js module
     * @param The module to require
     * @returns The required module or 'undefined'
     */
    function nodeRequire(The: string): object;

    /**
     * Get native Node.js crypto api. The default configuration is to use
     * the api when available. But it can also be deactivated with config.use_native
     * @returns The crypto module or 'undefined'
     */
    function getNodeCrypto(): object;

    /**
     * Get native Node.js Buffer constructor. This should be used since
     * Buffer is not available under browserify.
     * @returns The Buffer constructor or 'undefined'
     */
    function getNodeBuffer(): Function;

    /**
     * Format user id for internal use.
     */
    function formatUserId(id: { name: string; email: string; comment: string }): string;

    /**
     * Parse user id.
     */
    function parseUserId(userId: string): { name: string; email: string; comment: string };

    /**
     * Normalize line endings to \r\n
     */
    function canonicalizeEOL(): void;

    /**
     * Convert line endings from canonicalized \r\n to native \n
     */
    function nativeEOL(): void;

    /**
     * Remove trailing spaces and tabs from each line
     */
    function removeTrailingSpaces(): void;

    /**
     * Encode input buffer using Z-Base32 encoding.
     * See: https://tools.ietf.org/html/rfc6189#section-5.1.6
     * @param data The binary data to encode
     * @returns Binary data encoded using Z-Base32
     */
    function encodeZBase32(data: Uint8Array): string;
}

export namespace wkd {
    class WKD {
        /**
         * Initialize the WKD client
         */
        constructor();

        /**
         * Search for a public key using Web Key Directory protocol.
         * @param options.email User's email.
         * @param options.rawBytes Returns Uint8Array instead of parsed key.
         * @returns The public key.
         */
        lookup(
            options: { email: string; rawBytes?: boolean | undefined },
        ): Promise<Uint8Array | { keys: Array<key.Key>; err: Array<Error> | null }>;
    }
}

export namespace worker {
    /**
     * @see module:openpgp.initWorker
     * @see module:openpgp.getWorker
     * @see module:openpgp.destroyWorker
     * @see module:worker/worker
     */
    namespace async_proxy {
        class AsyncProxy {
            /**
             * Initializes a new proxy and loads the web worker
             * @param path The path to the worker or 'openpgp.worker.js' by default
             * @param n number of workers to initialize if path given
             * @param config config The worker configuration
             * @param worker alternative to path parameter: web worker initialized with 'openpgp.worker.js'
             */
            constructor(path: string, n: number, config: object, worker: any[]);

            /**
             * Message handling
             */
            handleMessage(): void;

            /**
             * Get new request ID
             * @returns New unique request ID
             */
            getID(): Integer;

            /**
             * Send message to worker with random data
             * @param size Number of bytes to send
             */
            seedRandom(size: Integer): void;

            /**
             * Terminates the workers
             */
            terminate(): void;

            /**
             * Generic proxy function that handles all commands from the public api.
             * @param method the public api function to be delegated to the worker thread
             * @param options the api function's options
             * @returns see the corresponding public api functions for their return types
             */
            delegate(method: string, options: object): Promise<any>;
        }
    }

    /**
     * @see module:openpgp.initWorker
     * @see module:openpgp.getWorker
     * @see module:openpgp.destroyWorker
     * @see module:worker/async_proxy
     */
    namespace worker {
        /**
         * Handle random buffer exhaustion by requesting more random bytes from the main window
         * @returns Empty Promise<any> whose resolution indicates that the buffer has been refilled
         */
        function randomCallback(): Promise<Object>;

        /**
         * Set config from main context to worker context.
         * @param config The openpgp configuration
         */
        function configure(config: object): void;

        /**
         * Seed the library with entropy gathered window.crypto.getRandomValues
         * as this api is only avalible in the main window.
         * @param buffer Some random bytes
         */
        function seedRandom(buffer: any[]): void;

        /**
         * Generic proxy function that handles all commands from the public api.
         * @param method The public api function to be delegated to the worker thread
         * @param options The api function's options
         */
        function delegate(method: string, options: object): void;

        /**
         * Respond to the main window.
         * @param event Contains event type and data
         */
        function response(event: object): void;
    }
}

export interface WorkerOptions {
    /**
     * relative path to the worker scripts, default: 'openpgp.worker.js'
     */
    path: string;
    /**
     * number of workers to initialize
     */
    n?: number | undefined;
    /**
     * alternative to path parameter: web workers initialized with 'openpgp.worker.js'
     */
    workers?: any[] | undefined;
}

/**
 * Set the path for the web worker script and create an instance of the async proxy
 * @param path relative path to the worker scripts, default: 'openpgp.worker.js'
 * @param n number of workers to initialize
 * @param workers alternative to path parameter: web workers initialized with 'openpgp.worker.js'
 */
export function initWorker(options: WorkerOptions): void;

/**
 * Returns a reference to the async proxy if the worker was initialized with openpgp.initWorker()
 * @returns the async proxy or null if not initialized
 */
export function getWorker(): worker.async_proxy.AsyncProxy | null;

/**
 * Cleanup the current instance of the web worker.
 */
export function destroyWorker(): void;

export interface UserID {
    name?: string | undefined;
    email?: string | undefined;
}

export interface KeyOptions {
    /**
     * array of user IDs e.g. [ { name:'Phil Zimmermann', email:'phil@openpgp.org' }]
     */
    userIds: UserID[];
    /**
     * (optional) The passphrase used to encrypt the resulting private key
     */
    passphrase?: string | undefined;
    /**
     * (optional) number of bits for RSA keys: 2048 or 4096.
     */
    numBits?: number | undefined;
    /**
     * (optional) The number of seconds after the key creation time that the key expires
     */
    keyExpirationTime?: number | undefined;
    /**
     * (optional) elliptic curve for ECC keys: elliptic curve for ECC keys:
     *                                         curve25519, p256, p384, p521, secp256k1,
     *                                         brainpoolP256r1, brainpoolP384r1, or brainpoolP512r1.
     */
    curve?: string | undefined;
    /**
     * (optional) override the creation date of the key and the key signatures
     */
    date?: Date | undefined;
    /**
     * (optional) options for each subkey, default to main key options. e.g. [ {sign: true, passphrase: '123'}]
     *            sign parameter defaults to false, and indicates whether the subkey should sign rather than encrypt
     */
    subkeys?: { sign: true; passphrase: string }[] | undefined;
}

/**
 * Generates a new OpenPGP key pair. Supports RSA and ECC keys. Primary and subkey will be of same type.
 * @param options
 * @returns The generated key object in the form:
 *          { key:Key, privateKeyArmored:String, publicKeyArmored:String, revocationCertificate:String }
 */
export function generateKey(
    option: KeyOptions,
): Promise<{ key: key.Key; privateKeyArmored: string; publicKeyArmored: string; revocationCertificate: string }>;

/**
 * Reformats signature packets for a key and rewraps key object.
 * @param privateKey private key to reformat
 * @param userIds array of user IDs e.g. [ { name:'Phil Zimmermann', email:'phil@openpgp.org' }]
 * @param passphrase (optional) The passphrase used to encrypt the resulting private key
 * @param keyExpirationTime (optional) The number of seconds after the key creation time that the key expires
 * @param revocationCertificate (optional) Whether the returned object should include a revocation certificate to revoke the public key
 * @returns The generated key object in the form:
 *          { key:Key, privateKeyArmored:String, publicKeyArmored:String, revocationCertificate:String }
 */
export function reformatKey(
    privateKey: key.Key,
    userIds: any[],
    passphrase?: string,
    keyExpirationTime?: number,
    revocationCertificate?: boolean,
): Promise<Object>;

/**
 * Revokes a key. Requires either a private key or a revocation certificate.
 * If a revocation certificate is passed, the reasonForRevocation parameters will be ignored.
 * @param key (optional) public or private key to revoke
 * @param revocationCertificate (optional) revocation certificate to revoke the key with
 * @param reasonForRevocation (optional) object indicating the reason for revocation
 * @param reasonForRevocation.flag (optional) flag indicating the reason for revocation
 * @param reasonForRevocation.string (optional) string explaining the reason for revocation
 * @returns The revoked key object in the form:
 *          { privateKey:Key, privateKeyArmored:String, publicKey:Key, publicKeyArmored:String }
 *          (if private key is passed) or { publicKey:Key, publicKeyArmored:String } (otherwise)
 */
export function revokeKey(
    key?: key.Key,
    revocationCertificate?: string,
    reasonForRevocation?: revokeKey_reasonForRevocation,
): Promise<
    | {
        privateKey: key.Key;
        privateKeyArmored: string;
        publicKey: key.Key;
        publicKeyArmored: string;
    }
    | {
        publicKey: key.Key;
        publicKeyArmored: string;
    }
>;

/**
 * Unlock a private key with your passphrase.
 * @param privateKey the private key that is to be decrypted
 * @param passphrase the user's passphrase(s) chosen during key generation
 * @returns the unlocked key object in the form: { key:Key }
 */
export function decryptKey(privateKey: key.Key, passphrase: string | any[]): Promise<{ key: key.Key }>;

/**
 * Lock a private key with your passphrase.
 * @param privateKey the private key that is to be decrypted
 * @param passphrase the user's passphrase(s) chosen during key generation
 * @returns the locked key object in the form: { key:Key }
 */
export function encryptKey(privateKey: key.Key, passphrase: string | any[]): Promise<{ key: key.Key }>;

export interface EncryptOptions {
    /**
     * message to be encrypted as created by openpgp.message.fromText or openpgp.message.fromBinary
     */
    message: message.Message;
    /**
     * (optional) array of keys or single key, used to encrypt the message
     */
    publicKeys?: key.Key | any[] | undefined;
    /**
     * (optional) private keys for signing. If omitted message will not be signed
     */
    privateKeys?: key.Key | any[] | undefined;
    /**
     * (optional) array of passwords or a single password to encrypt the message
     */
    passwords?: string | any[] | undefined;
    /**
     * (optional) session key in the form: { data:Uint8Array, algorithm:String }
     */
    sessionKey?: { data: Uint8Array; algorithm: string } | undefined;
    /**
     * (optional) which compression algorithm to compress the message with, defaults to what is specified in config
     */
    compression?: enums.compression | undefined;
    /**
     * (optional) if the return values should be ascii armored or the message/signature objects
     */
    armor?: boolean | undefined;
    /**
     * (optional) whether to return data as a stream. Defaults to the type of stream `message` was created from, if any.
     */
    streaming?: "web" | "node" | false | undefined;
    /**
     * (optional) if the signature should be detached (if true, signature will be added to returned object)
     */
    detached?: boolean | undefined;
    /**
     * (optional) a detached signature to add to the encrypted message
     */
    signature?: signature.Signature | undefined;
    /**
     * (optional) if the unencrypted session key should be added to returned object
     */
    returnSessionKey?: boolean | undefined;
    /**
     * (optional) use a key ID of 0 instead of the public key IDs
     */
    wildcard?: boolean | undefined;
    /**
     * (optional) override the creation date of the message signature
     */
    date?: Date | undefined;
    /**
     * (optional) array of user IDs to sign with, one per key in `privateKeys`, e.g. [ { name:'Steve Sender', email:'steve@openpgp.org' }]
     */
    fromUserIds?: UserID[] | undefined;
    /**
     * (optional) array of user IDs to encrypt for, one per key in `publicKeys`, e.g. [ { name:'Robert Receiver', email:'robert@openpgp.org' }]
     */
    toUserIds?: UserID[] | undefined;
}

export interface EncryptResult {
    sessionKey: { data: Uint8Array; algorithm: string; aeadAlgorithm: string };
}

/**
 * Encrypts message text/data with public keys, passwords or both at once. At least either public keys or passwords
 * must be specified. If private keys are specified, those will be used to sign the message.
 * @param options
 * @returns Object containing encrypted (and optionally signed) message in the form:
 *          {
 *          data: string|ReadableStream<String>|NodeStream, (if `armor` was true, the default)
 *          message: Message, (if `armor` was false)
 *          signature: string|ReadableStream<String>|NodeStream, (if `detached` was true and `armor` was true)
 *          signature: Signature (if `detached` was true and `armor` was false)
 *          sessionKey: { data, algorithm, aeadAlgorithm } (if `returnSessionKey` was true)
 *          }
 */
export function encrypt(
    options: EncryptOptions & { armor?: true | undefined; detached?: false | undefined },
): Promise<EncryptResult & { data: string }>;
export function encrypt(
    options: EncryptOptions & { armor?: true | undefined; detached: true },
): Promise<EncryptResult & { data: string; signature: string }>;
export function encrypt(
    options: EncryptOptions & { armor: false; detached?: false | undefined },
): Promise<EncryptResult & { message: message.Message }>;
export function encrypt(
    options: EncryptOptions & { armor: false; detached: true },
): Promise<EncryptResult & { message: message.Message; signature: signature.Signature }>;
export function encrypt(
    options: EncryptOptions,
): Promise<
    EncryptResult & {
        data: string | ReadableStream<String>;
        message: message.Message;
        signature: string | ReadableStream<String> | signature.Signature;
    }
>;

export interface DecryptOptions {
    /**
     * the message object with the encrypted data
     */
    message: message.Message;
    /**
     * (optional) private keys with decrypted secret key data or session key
     */
    privateKeys?: key.Key | key.Key[] | undefined;
    /**
     * (optional) passwords to decrypt the message
     */
    passwords?: string | string[] | undefined;
    /**
     * (optional) session keys in the form: { data:Uint8Array, algorithm:String }
     */
    sessionKeys?: { data: Uint8Array; algorithm: string } | { data: Uint8Array; algorithm: string }[] | undefined;
    /**
     * (optional) array of public keys or single key, to verify signatures
     */
    publicKeys?: key.Key | key.Key[] | undefined;
    /**
     * (optional) whether to return data as a string(Stream) or Uint8Array(Stream). If 'utf8' (the default), also normalize newlines.
     */
    format?: "utf8" | "binary" | undefined;
    /**
     * (optional) whether to return data as a stream. Defaults to the type of stream `message` was created from, if any.
     */
    streaming?: "web" | "node" | false | undefined;
    /**
     * (optional) detached signature for verification
     */
    signature?: signature.Signature | undefined;
    /**
     * (optional) use the given date for verification instead of the current time
     */
    date?: Date | undefined;
}

export interface DecryptResult {
    data: string | ReadableStream<String> | NodeStream | Uint8Array | ReadableStream<Uint8Array>;
    filename: string;
    signatures: {
        keyid: type.keyid.Keyid;
        verified: Promise<Boolean>;
        valid: boolean;
    }[];
}

/**
 * Decrypts a message with the user's private key, a session key or a password. Either a private key,
 * a session key or a password must be specified.
 * @param options
 * @returns Object containing decrypted and verified message in the form:
 *          {
 *          data: string|ReadableStream<String>|NodeStream, (if format was 'utf8', the default)
 *          data: Uint8Array|ReadableStream<Uint8Array>|NodeStream, (if format was 'binary')
 *          filename: string,
 *          signatures: [
 *          {
 *          keyid: module:type/keyid,
 *          verified: Promise<Boolean>,
 *          valid: boolean (if streaming was false)
 *          }, ...
 *          ]
 *          }
 */
export function decrypt(
    options: DecryptOptions & { format: "utf8" },
): Promise<DecryptResult & { data: string | ReadableStream<String> | NodeStream }>;
export function decrypt(
    options: DecryptOptions & { format: "binary" },
): Promise<DecryptResult & { data: Uint8Array | ReadableStream<Uint8Array> | NodeStream }>;
export function decrypt(options: DecryptOptions): Promise<DecryptResult>;

export interface SignOptions {
    /**
     * (cleartext) message to be signed
     */
    message: cleartext.CleartextMessage | message.Message;
    /**
     * array of keys or single key with decrypted secret key data to sign cleartext
     */
    privateKeys: key.Key | any[];
    /**
     * (optional) if the return value should be ascii armored or the message object
     */
    armor?: boolean | undefined;
    /**
     * (optional) whether to return data as a stream. Defaults to the type of stream `message` was created from, if any.
     */
    streaming?: "web" | "node" | false | undefined;
    /**
     * (optional) if the return value should contain a detached signature
     */
    detached?: boolean | undefined;
    /**
     * (optional) override the creation date of the signature
     */
    date?: Date | undefined;
    /**
     *  (optional) array of user IDs to sign with, one per key in `privateKeys`, e.g. [ { name:'Steve Sender', email:'steve@openpgp.org' }]
     */
    fromUserIds?: UserID[] | undefined;
}

export interface SignResult {
    data: string | ReadableStream<String> | NodeStream;
    message: message.Message;
    signature: string | ReadableStream<String> | NodeStream | signature.Signature;
}

/**
 * Signs a cleartext message.
 * @param options
 * @returns Object containing signed message in the form:
 *          {
 *          data: string|ReadableStream<String>|NodeStream, (if `armor` was true, the default)
 *          message: Message (if `armor` was false)
 *          }
 *          Or, if `detached` was true:
 *          {
 *          signature: string|ReadableStream<String>|NodeStream, (if `armor` was true, the default)
 *          signature: Signature (if `armor` was false)
 *          }{
 */
export function sign(
    options: SignOptions & { armor?: true | undefined; detached?: false | undefined },
): Promise<{ data: string }>;
export function sign(
    options: SignOptions & { armor: false; detached?: false | undefined },
): Promise<{ message: message.Message }>;
export function sign(
    options: SignOptions & { armor?: true | undefined; detached: true },
): Promise<{ signature: string }>;
export function sign(
    options: SignOptions & { armor: false; detached: true },
): Promise<{ signature: signature.Signature }>;
export function sign(options: SignOptions): Promise<SignResult>;

export interface VerifyOptions {
    /**
     * array of publicKeys or single key, to verify signatures
     */
    publicKeys: key.Key | any[];
    /**
     * (cleartext) message object with signatures
     */
    message: cleartext.CleartextMessage | message.Message;
    /**
     * (optional) whether to return data as a stream. Defaults to the type of stream `message` was created from, if any.
     */
    streaming?: "web" | "node" | false | undefined;
    /**
     * (optional) detached signature for verification
     */
    signature?: signature.Signature | undefined;
    /**
     * (optional) use the given date for verification instead of the current time
     */
    date?: Date | undefined;
}

export interface VerifyResult {
    data: string | ReadableStream<String> | NodeStream | Uint8Array | ReadableStream<Uint8Array> | NodeStream;
    signatures: {
        keyid: type.keyid.Keyid;
        verified: Promise<Boolean>;
        valid: boolean;
    }[];
}

/**
 * Verifies signatures of cleartext signed message
 * @param options
 * @returns Object containing verified message in the form:
 *          {
 *          data: string|ReadableStream<String>|NodeStream, (if `message` was a CleartextMessage)
 *          data: Uint8Array|ReadableStream<Uint8Array>|NodeStream, (if `message` was a Message)
 *          signatures: [
 *          {
 *          keyid: module:type/keyid,
 *          verified: Promise<Boolean>,
 *          valid: boolean (if `streaming` was false)
 *          }, ...
 *          ]
 *          }
 */
export function verify(options: VerifyOptions): Promise<VerifyResult>;

/**
 * Encrypt a symmetric session key with public keys, passwords, or both at once. At least either public keys
 * or passwords must be specified.
 * @param data the session key to be encrypted e.g. 16 random bytes (for aes128)
 * @param algorithm algorithm of the symmetric session key e.g. 'aes128' or 'aes256'
 * @param aeadAlgorithm (optional) aead algorithm, e.g. 'eax' or 'ocb'
 * @param publicKeys (optional) array of public keys or single key, used to encrypt the key
 * @param passwords (optional) passwords for the message
 * @param wildcard (optional) use a key ID of 0 instead of the public key IDs
 * @param date (optional) override the date
 * @param toUserIds (optional) array of user IDs to encrypt for, one per key in `publicKeys`, e.g. [ { name:'Phil Zimmermann', email:'phil@openpgp.org' }]
 * @returns the encrypted session key packets contained in a message object
 */
export function encryptSessionKey(
    data: Uint8Array,
    algorithm: string,
    aeadAlgorithm?: string,
    publicKeys?: key.Key | key.Key[],
    passwords?: string | string[],
    wildcard?: boolean,
    date?: Date,
    toUserIds?: any[],
): Promise<message.Message>;

/**
 * Decrypt symmetric session keys with a private key or password. Either a private key or
 * a password must be specified.
 * @param message a message object containing the encrypted session key packets
 * @param privateKeys (optional) private keys with decrypted secret key data
 * @param passwords (optional) passwords to decrypt the session key
 * @returns Array of decrypted session key, algorithm pairs in form:
 *          { data:Uint8Array, algorithm:String }
 *          or 'undefined' if no key packets found
 */
export function decryptSessionKeys(
    message: message.Message,
    privateKeys?: key.Key | key.Key[],
    passwords?: string | string[],
): Promise<{ data: Uint8Array; algorithm: string }[] | undefined>;

/**
 * Input validation
 */
export function checkString(): void;

/**
 * Normalize parameter to an array if it is not undefined.
 * @param param the parameter to be normalized
 * @returns the resulting array or undefined
 */
export function toArray(param: object): any[] | undefined;

/**
 * Convert data to or from Stream
 * @param data the data to convert
 * @param streaming (optional) whether to return a ReadableStream
 * @returns the data in the respective format
 */
export function convertStream(data: object, streaming?: "web" | "node" | false): object;

/**
 * Convert object properties from Stream
 * @param obj the data to convert
 * @param streaming (optional) whether to return ReadableStreams
 * @param keys (optional) which keys to return as streams, if possible
 * @returns the data in the respective format
 */
export function convertStreams(obj: object, streaming: "web" | "node" | false, keys: any[]): object;

/**
 * Link result.data to the message stream for cancellation.
 * Also, forward errors in the message to result.data.
 * @param result the data to convert
 * @param message message object
 * @param erroringStream (optional) stream which either errors or gets closed without data
 * @returns
 */
export function linkStreams(result: object, message: message.Message, erroringStream: ReadableStream<string>): object;

/**
 * Wait until signature objects have been verified
 * @param signatures list of signatures
 */
export function prepareSignatures(signatures: object): void;

/**
 * Global error handler that logs the stack trace and rethrows a high lvl error message.
 * @param message A human readable high level error Message
 * @param error The internal error that caused the failure
 */
export function onError(message: string, error: Error): void;

/**
 * Check for native AEAD support and configuration by the user. Only
 * browsers that implement the current WebCrypto specification support
 * native GCM. Native EAX is built on CTR and CBC, which current
 * browsers support. OCB and CFB are not natively supported.
 * @returns If authenticated encryption should be used
 */
export function nativeAEAD(): boolean;
