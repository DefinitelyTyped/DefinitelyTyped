// Type definitions for openpgp 4.0.0
// Project: http://openpgpjs.org/
// Definitions by: Guillaume Lacasa <https://blog.lacasa.fr>
//                 Errietta Kostala <https://github.com/errietta>
//                 Daniel Montesinos <https://github.com/damonpam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace openpgp;

export interface UserId {
    name?: string,
    email?: string,
}

export interface SessionKey {
    data: Uint8Array,
    algorithm: string
}

export interface EncryptOptions {
    message: message.Message
    publicKeys?: key.Key | key.Key[],
    privateKeys?: key.Key | key.Key[],
    passwords?: string | string[],
    sessionKey?: SessionKey,
    compression?: enums.compression,
    armor?: boolean,
    detached?: boolean,
    signature?: Signature,
    returnSessionKey?: boolean,
    wildcard?: boolean,
    date?: Date,
    fromUserId?: UserId,
    toUserId?: UserId,
}

export interface EncryptedMessage {
    data: string,
    message: string,
}

export interface DecryptOptions {
    message: message.Message,
    privateKeys?: key.Key | key.Key[],
    passwords?: string | string[],
    sessionKeys?: SessionKey | SessionKey[],
    publicKeys?: key.Key | key.Key[],
    format?: string,
    signature?: Signature,
    date?: Date,
}

export interface KeyContainer {
    key: key.Key,
}

export interface KeyPair extends KeyContainer {
    privateKeyArmored: string,
    publicKeyArmored: string
}

export interface KeyOptions {
    userIds?: UserId[],
    passphrase?: string,
    numBits?: number,
    keyExpirationTime?: number,
    curve?: string,
    date?: Date,
    subkeys?: KeyOptions[]
}

export interface Keyid {
    bytes: string,
}

export interface Signature {
    keyid: Keyid,
    valid: boolean
}

export interface VerifiedMessage {
    data: Uint8Array | string,
    signatures: Array<Signature>,
    filename: string,
}

export interface OpenPGPWorker {
    randomCallback(): void;
    configure(config: any): void;
    seedRandom(buffer: ArrayBuffer): void;
    delegate(id: number, method: string, options: any): void;
    response(event: any): void;
}

export interface WorkerOptions {
    path?: string,
    n?: number,
    workers?: OpenPGPWorker[],
    config?: any,
}

export class AsyncProxy {
    constructor(options: WorkerOptions);
    getId(): number;
    seedRandom(workerId: number, size: number): Promise<void>;
    terminate(): void;
    delegate(method: string, options: any): void;

    workers: OpenPGPWorker[];
}

/**
 * Set the path for the web worker script and create an instance of the async proxy
 * @param {String} path            relative path to the worker scripts, default: 'openpgp.worker.js'
 * @param {Number} n               number of workers to initialize
 * @param {Array<Object>} workers  alternative to path parameter: web workers initialized with 'openpgp.worker.js'
 */
export function initWorker(options: WorkerOptions): boolean;

/**
 * Returns a reference to the async proxy if the worker was initialized with openpgp.initWorker()
 * @returns {module:worker/async_proxy.AsyncProxy|null} the async proxy or null if not initialized
 */
export function getWorker(): AsyncProxy;

/**
 * Cleanup the current instance of the web worker.
 */
export function destroyWorker(): void;

/**
 * Encrypts message text/data with public keys, passwords or both at once. At least either public keys or passwords
 *   must be specified. If private keys are specified, those will be used to sign the message.
 * @param  {Message} message                      message to be encrypted as created by openpgp.message.fromText or openpgp.message.fromBinary
 * @param  {Key|Array<Key>} publicKeys            (optional) array of keys or single key, used to encrypt the message
 * @param  {Key|Array<Key>} privateKeys           (optional) private keys for signing. If omitted message will not be signed
 * @param  {String|Array<String>} passwords       (optional) array of passwords or a single password to encrypt the message
 * @param  {Object} sessionKey                    (optional) session key in the form: { data:Uint8Array, algorithm:String }
 * @param  {module:enums.compression} compression (optional) which compression algorithm to compress the message with, defaults to what is specified in config
 * @param  {Boolean} armor                        (optional) if the return values should be ascii armored or the message/signature objects
 * @param  {Boolean} detached                     (optional) if the signature should be detached (if true, signature will be added to returned object)
 * @param  {Signature} signature                  (optional) a detached signature to add to the encrypted message
 * @param  {Boolean} returnSessionKey             (optional) if the unencrypted session key should be added to returned object
 * @param  {Boolean} wildcard                     (optional) use a key ID of 0 instead of the public key IDs
 * @param  {Date} date                            (optional) override the creation date of the message and the message signature
 * @param  {Object} fromUserId                    (optional) user ID to sign with, e.g. { name:'Steve Sender', email:'steve@openpgp.org' }
 * @param  {Object} toUserId                      (optional) user ID to encrypt for, e.g. { name:'Robert Receiver', email:'robert@openpgp.org' }
 * @returns {Promise<Object>}                      encrypted (and optionally signed message) in the form:
 *                                                  {data: ASCII armored message if 'armor' is true,
 *                                                  message: full Message object if 'armor' is false, signature: detached signature if 'detached' is true}
 * @async
 * @static
 */
export function encrypt(options: EncryptOptions): Promise<EncryptedMessage>;

/**
 * Decrypts a message with the user's private key, a session key or a password. Either a private key,
 *   a session key or a password must be specified.
 * @param  {Message} message                  the message object with the encrypted data
 * @param  {Key|Array<Key>} privateKeys       (optional) private keys with decrypted secret key data or session key
 * @param  {String|Array<String>} passwords   (optional) passwords to decrypt the message
 * @param  {Object|Array<Object>} sessionKeys (optional) session keys in the form: { data:Uint8Array, algorithm:String }
 * @param  {Key|Array<Key>} publicKeys        (optional) array of public keys or single key, to verify signatures
 * @param  {String} format                    (optional) return data format either as 'utf8' or 'binary'
 * @param  {Signature} signature              (optional) detached signature for verification
 * @param  {Date} date                        (optional) use the given date for verification instead of the current time
 * @returns {Promise<Object>}             decrypted and verified message in the form:
 *                                         { data:Uint8Array|String, filename:String, signatures:[{ keyid:String, valid:Boolean }] }
 * @async
 * @static
 */
export function decrypt(options: DecryptOptions): Promise<VerifiedMessage>;

/**
 * Generates a new OpenPGP key pair. Supports RSA and ECC keys. Primary and subkey will be of same type.
 * @param  {Array<Object>} userIds   array of user IDs e.g. [{ name:'Phil Zimmermann', email:'phil@openpgp.org' }]
 * @param  {String} passphrase       (optional) The passphrase used to encrypt the resulting private key
 * @param  {Number} numBits          (optional) number of bits for RSA keys: 2048 or 4096.
 * @param  {Number} keyExpirationTime (optional) The number of seconds after the key creation time that the key expires
 * @param  {String} curve            (optional) elliptic curve for ECC keys:
 *                                              curve25519, p256, p384, p521, secp256k1,
 *                                              brainpoolP256r1, brainpoolP384r1, or brainpoolP512r1.
 * @param  {Date} date               (optional) override the creation date of the key and the key signatures
 * @param  {Array<Object>} subkeys   (optional) options for each subkey, default to main key options. e.g. [{sign: true, passphrase: '123'}]
 *                                              sign parameter defaults to false, and indicates whether the subkey should sign rather than encrypt
 * @returns {Promise<Object>}         The generated key object in the form:
 *                                     { key:Key, privateKeyArmored:String, publicKeyArmored:String }
 * @async
 * @static
 */
export function generateKey(options: KeyOptions): Promise<KeyPair>;

/**
 * Reformats signature packets for a key and rewraps key object.
 * @param  {Key} privateKey          private key to reformat
 * @param  {Array<Object>} userIds   array of user IDs e.g. [{ name:'Phil Zimmermann', email:'phil@openpgp.org' }]
 * @param  {String} passphrase       (optional) The passphrase used to encrypt the resulting private key
 * @param  {Number} keyExpirationTime (optional) The number of seconds after the key creation time that the key expires
 * @returns {Promise<Object>}         The generated key object in the form:
 *                                     { key:Key, privateKeyArmored:String, publicKeyArmored:String }
 * @async
 * @static
 */
export function reformatKey(options: {
    privateKey: key.Key,
    userIds?: UserId[],
    passphrase?: string,
    keyExpirationTime?: number,
}): Promise<KeyPair>;

/**
 * Unlock a private key with your passphrase.
 * @param  {Key} privateKey                    the private key that is to be decrypted
 * @param  {String|Array<String>} passphrase   the user's passphrase(s) chosen during key generation
 * @returns {Promise<Object>}                  the unlocked key object in the form: { key:Key }
 * @async
 */
export function decryptKey(options: {
    privateKey: key.Key,
    passphrase?: string | string[],
}): Promise<KeyContainer>;

export function encryptKey(options: {
    privateKey: key.Key,
    passphrase?: string
}): Promise<KeyContainer>;

export namespace armor {
    /** Armor an OpenPGP binary packet block

        @param messagetype type of the message
        @param body
        @param partindex
        @param parttotal
     */
    function armor(messagetype: enums.armor, body: Object, partindex: number, parttotal: number): string;

    /** DeArmor an OpenPGP armored message; verify the checksum and return the encoded bytes

        @param text OpenPGP armored message
     */
    function dearmor(text: string): Object;
}

export namespace cleartext {
    /** Class that represents an OpenPGP cleartext signed message.
     */
    interface CleartextMessage {
        /** Returns ASCII armored text of cleartext signed message
         */
        armor(): string;

        /** Returns the key IDs of the keys that signed the cleartext message
         */
        getSigningKeyIds(): Array<Keyid>;

        /** Get cleartext
         */
        getText(): string;

        /** Sign the cleartext message
            @param privateKeys private keys with decrypted secret key data for signing
         */
        sign(privateKeys: Array<key.Key>): void;

        /** Verify signatures of cleartext signed message
            @param keys array of keys to verify signatures
         */
        verify(keys: Array<key.Key>): Array<VerifiedMessage>;
    }

    function readArmored(armoredText: string): CleartextMessage;
}

export namespace config {
    var prefer_hash_algorithm: enums.hash;
    var encryption_cipher: enums.symmetric;
    var compression: enums.compression;
    var show_version: boolean;
    var show_comment: boolean;
    var integrity_protect: boolean;
    var keyserver: string;
    var debug: boolean;
}

export namespace crypto {
    interface Mpi {
        data: number,
        read(input: string): number,
        write(): string,
    }

    /** Generating a session key for the specified symmetric algorithm
        @param algo Algorithm to use
     */
    function generateSessionKey(algo: enums.symmetric): string;

    /** generate random byte prefix as string for the specified algorithm
        @param algo Algorithm to use
     */
    function getPrefixRandom(algo: enums.symmetric): string;

    /** Returns the number of integers comprising the private key of an algorithm
        @param algo The public key algorithm
     */
    function getPrivateMpiCount(algo: enums.symmetric): number;

    /** Decrypts data using the specified public key multiprecision integers of the private key, the specified secretMPIs of the private key and the specified algorithm.
        @param algo Algorithm to be used
        @param publicMPIs Algorithm dependent multiprecision integers of the public key part of the private key
        @param secretMPIs Algorithm dependent multiprecision integers of the private key used
        @param data Data to be encrypted as MPI
     */
    function publicKeyDecrypt(algo: enums.publicKey, publicMPIs: Array<Mpi>, secretMPIs: Array<Mpi>, data: Mpi): Mpi;

    /** Encrypts data using the specified public key multiprecision integers and the specified algorithm.
        @param algo Algorithm to be used
        @param publicMPIs Algorithm dependent multiprecision integers
        @param data Data to be encrypted as MPI
     */
    function publicKeyEncrypt(algo: enums.publicKey, publicMPIs: Array<Mpi>, data: Mpi): Array<Mpi>;


    namespace cfb {
        /** This function decrypts a given plaintext using the specified blockcipher to decrypt a message
            @param cipherfn the algorithm cipher class to decrypt data in one block_size encryption
            @param key binary string representation of key to be used to decrypt the ciphertext. This will be passed to the cipherfn
            @param ciphertext to be decrypted provided as a string
            @param resync a boolean value specifying if a resync of the IV should be used or not. The encrypteddatapacket uses the "old" style with a resync. Decryption within an encryptedintegrityprotecteddata packet is not resyncing the IV.
        */
        function decrypt(cipherfn: string, key: string, ciphertext: string, resync: boolean): string;

        /** This function encrypts a given with the specified prefixrandom using the specified blockcipher to encrypt a message
            @param prefixrandom random bytes of block_size length provided as a string to be used in prefixing the data
            @param cipherfn the algorithm cipher class to encrypt data in one block_size encryption
            @param plaintext data to be encrypted provided as a string
            @param key binary string representation of key to be used to encrypt the plaintext. This will be passed to the cipherfn
            @param resync a boolean value specifying if a resync of the IV should be used or not. The encrypteddatapacket uses the "old" style with a resync. Encryption within an encryptedintegrityprotecteddata packet is not resyncing the IV.
        */
        function encrypt(prefixrandom: string, cipherfn: string, plaintext: string, key: string, resync: boolean): string;

        /** Decrypts the prefixed data for the Modification Detection Code (MDC) computation
            @param cipherfn cipherfn.encrypt Cipher function to use
            @param key binary string representation of key to be used to check the mdc This will be passed to the cipherfn
            @param ciphertext The encrypted data
        */
        function mdc(cipherfn: Object, key: string, ciphertext: string): string;
    }

    namespace hash {
        /** Create a hash on the specified data using the specified algorithm
            @param algo Hash algorithm type
            @param data Data to be hashed
        */
        function digest(algo: enums.hash, data: string): string;

        /** Returns the hash size in bytes of the specified hash algorithm type
            @param algo Hash algorithm type
        */
        function getHashByteLength(algo: enums.hash): number;
    }

    namespace random {
        /** Create a secure random big integer of bits length
            @param bits Bit length of the MPI to create
        */
        function getRandomBigInteger(bits: number): number;

        /** Retrieve secure random byte string of the specified length
            @param length Length in bytes to generate
        */
        function getRandomBytes(length: number): string;

        /** Helper routine which calls platform specific crypto random generator
            @param buf
        */
        function getRandomValues(buf: Uint8Array): void;

        /** Return a secure random number in the specified range
            @param from Min of the random number
            @param to Max of the random number (max 32bit)
        */
        function getSecureRandom(from: number, to: number): number;
    }

    namespace signature {
        /** Create a signature on data using the specified algorithm
            @param hash_algo hash Algorithm to use
            @param algo Asymmetric cipher algorithm to use
            @param publicMPIs Public key multiprecision integers of the private key
            @param secretMPIs Private key multiprecision integers which is used to sign the data
            @param data Data to be signed
        */
        function sign(hash_algo: enums.hash, algo: enums.publicKey, publicMPIs: Array<Mpi>, secretMPIs: Array<Mpi>, data: string): Mpi;

        /**
            @param algo public Key algorithm
            @param hash_algo Hash algorithm
            @param msg_MPIs Signature multiprecision integers
            @param publickey_MPIs Public key multiprecision integers
            @param data Data on where the signature was computed on
        */
        function verify(algo: enums.publicKey, hash_algo: enums.hash, msg_MPIs: Array<Mpi>, publickey_MPIs: Array<Mpi>, data: string): boolean;
    }
}

export namespace enums {
    enum armor {
        multipart_section,
        multipart_last,
        signed,
        message,
        public_key,
        private_key
    }

    enum compression {
        uncompressed,
        zip,
        zlib,
        bzip2
    }

    enum hash {
        md5,
        sha1,
        ripemd,
        sha256,
        sha384,
        sha512,
        sha224
    }

    enum packet {
        publicKeyEncryptedSessionKey,
        signature,
        symEncryptedSessionKey,
        onePassSignature,
        secretKey,
        publicKey,
        secretSubkey,
        compressed,
        symmetricallyEncrypted,
        marker,
        literal,
        trust,
        userid,
        publicSubkey,
        userAttribute,
        symEncryptedIntegrityProtected,
        modificationDetectionCode,
    }

    enum publicKey {
        rsa_encrypt_sign,
        rsa_encrypt,
        rsa_sign,
        elgamal,
        dsa
    }

    enum symmetric {
        plaintext,
        idea,
        tripledes,
        cast5,
        blowfish,
        aes128,
        aes192,
        aes256,
        twofish
    }

    enum keyStatus {
        invalid,
        expired,
        revoked,
        valid,
        no_self_cert
    }
}

export namespace key {
    interface KeyResult {
        keys: Array<Key>,
        err: Array<Error>
    }

    /** Class that represents an OpenPGP key. Must contain a primary key. Can contain additional subkeys, signatures, user ids, user attributes.
     */
    interface Key {
        armor(): string,
        decrypt(passphrase: string): boolean;
        getExpirationTime(): Date;
        getKeyIds(): Array<Keyid>;
        getPreferredHashAlgorithm(): string;
        getPrimaryUser(): any;
        getUserIds(): Array<string>;
        isPrivate(): boolean;
        isPublic(): boolean;
        primaryKey: packet.PublicKey;
        toPublic(): Key;
        update(key: Key): void;
        verifyPrimaryKey(): enums.keyStatus;
    }

    /** Generates a new OpenPGP key. Currently only supports RSA keys. Primary and subkey will be of same type.

        @param options
     */
    function generate(options: KeyOptions): Key;

    /** Reads an OpenPGP armored text and returns one or multiple key objects

        @param armoredText text to be parsed
     */
    function readArmored(armoredText: string): KeyResult;
}

export namespace message {
    /** Class that represents an OpenPGP message. Can be an encrypted message, signed message, compressed message or literal message
     */
    interface Message {
        /** Returns ASCII armored text of message
         */
        armor(): string,

        /** Decrypt the message
            @param privateKey private key with decrypted secret data
         */
        decrypt(privateKey: key.Key): Array<Message>,

        /** Encrypt the message
            @param keys array of keys, used to encrypt the message
         */
        encrypt(keys: Array<key.Key>): Array<Message>,

        /** Returns the key IDs of the keys to which the session key is encrypted
         */
        getEncryptionKeyIds(): Array<Keyid>,

        /** Get literal data that is the body of the message
         */
        getLiteralData(): string,

        /** Returns the key IDs of the keys that signed the message
         */
        getSigningKeyIds(): Array<Keyid>,

        /** Get literal data as text
         */
        getText(): string,

        /** Sign the message (the literal data packet of the message)
            @param privateKey private keys with decrypted secret key data for signing
         */
        sign(privateKey: Array<key.Key>): Message,

        /** Unwrap compressed message
         */
        unwrapCompressed(): Message,

        /** Verify message signatures
            @param keys array of keys to verify signatures
         */
        verify(keys: Array<key.Key>): Array<Object>,
    }

    /** creates new message object from binary data
        @param bytes
     */
    function fromBinary(bytes: string): Message;

    /** creates new message object from text
        @param text
     */
    function fromText(text: string): Message;

    /** reads an OpenPGP armored message and returns a message object

        @param armoredText text to be parsed
     */
    function readArmored(armoredText: string): Message;

    /**
     * reads an OpenPGP message as byte array and returns a message object
     * @param {Uint8Array} input   binary message
     * @returns {Message}           new message object
     * @static
     */
    function read(data: Uint8Array): Message;
}

export namespace packet {
    interface PublicKey {
        algorithm: enums.publicKey;
        created: Date;
        fingerprint: string;

        getBitSize(): number;
        getFingerprint(): string;
        getKeyId(): string;
        read(input: string): any;
        write(): any;
    }

    interface SecretKey extends PublicKey {
        read(bytes: string): void;
        write(): string;
        clearPrivateMPIs(str_passphrase: string): boolean;
        encrypt(passphrase: string): void;
    }

    /** Allocate a new packet from structured packet clone
        @param packetClone packet clone
     */
    function fromStructuredClone(packetClone: Object): Object

    /** Allocate a new packet
        @param property name from enums.packet
     */
    function newPacketFromTag(tag: string): Object;
}

export namespace util {
    /** Convert an array of integers(0.255) to a string
        @param bin An array of (binary) integers to convert
     */
    function bin2str(bin: Array<number>): string;

    /** Calculates a 16bit sum of a string by adding each character codes modulus 65535
        @param text string to create a sum of
     */
    function calc_checksum(text: string): number;

    /** Convert a string of utf8 bytes to a native javascript string
        @param utf8 A valid squence of utf8 bytes
     */
    function decode_utf8(utf8: string): string

    /** Convert a native javascript string to a string of utf8 bytes
        param str The string to convert
     */
    function encode_utf8(str: string): string

    /** Return the algorithm type as string
     */
    function get_hashAlgorithmString(): string

    /** Get native Web Cryptography api. The default configuration is to use the api when available. But it can also be deactivated with config.useWebCrypto
     */
    function getWebCrypto(): Object

    /** Create binary string from a hex encoded string
        @param str Hex string to convert
     */
    function hex2bin(str: string): string;

    /** Creating a hex string from an binary array of integers (0..255)
        @param str Array of bytes to convert
     */
    function hexidump(str: string): string;

    /** Create hexstring from a binary
        @param str string to convert
     */
    function hexstrdump(str: string): string;

    /** Helper function to print a debug message. Debug messages are only printed if
        @param str string of the debug message
     */
    function print_debug(str: string): void;

    /** Helper function to print a debug message. Debug messages are only printed if
        @param str string of the debug message
     */
    function print_debug_hexstr_dump(str: string): void;

    /** Shifting a string to n bits right
        @param value The string to shift
        @param bitcount Amount of bits to shift (MUST be smaller than 9)
     */
    function shiftRight(value: string, bitcount: number): string;

    /** Convert a string to an array of integers(0.255)
        @param str string to convert
     */
    function str2bin(str: string): Array<number>;

    /** Convert a string to a Uint8Array
        @param str string to convert
     */
    function str2Uint8Array(str: string): Uint8Array;

    /** Convert a Uint8Array to a string. This currently functions the same as bin2str.
        @param bin An array of (binary) integers to convert
     */
    function Uint8Array2str(bin: Uint8Array): string;
}
