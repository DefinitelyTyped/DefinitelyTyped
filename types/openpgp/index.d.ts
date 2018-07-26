// Type definitions for openpgpjs
// Project: http://openpgpjs.org/
// Definitions by: Guillaume Lacasa <https://blog.lacasa.fr>
//                 Errietta Kostala <https://github.com/errietta>
//                 Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace openpgp;

export interface UserId {
    name?: string;
    email?: string;
}

export interface SessionKey {
    algorithm: string;
    data: Uint8Array;
}

export interface EncryptOptions {
    /** if the return values should be ascii armored or the message/signature objects */
    armor?: boolean;
    /** which compression algorithm to compress the message with, defaults to what is specified in config */
    compression?: enums.compression;
    /** text/data to be encrypted as JavaScript binary string or Uint8Array */
    data: string | Uint8Array;
    /** data packet type */
    dataType?: 'utf8' | 'binary' | 'text' | 'mime';
    /** override the creation date of the message and the message signature */
    date?: Date;
    /** if the signature should be detached (if true, signature will be added to returned object) */
    detached?: boolean;
    /** a filename for the literal data packet */
    filename?: string;
    /** user ID to sign with, e.g. `{ name:'Steve Sender', email:'steve@openpgp.org' }` */
    fromUserId?: UserId;
    /** array of passwords or a single password to encrypt the message */
    passwords?: string | string[];
    /** private keys for signing. If omitted message will not be signed */
    privateKeys?: key.Key | key.Key[];
    /** array of keys or single key, used to encrypt the message */
    publicKeys?: key.Key | key.Key[];
    /** if the unencrypted session key should be added to returned object */
    returnSessionKey?: boolean;
    /** session key in the form: `{ data: Uint8Array, algorithm: String }` */
    sessionKey?: SessionKey;
    /** a detached signature to add to the encrypted message */
    signature?: Signature;
    /** user ID to encrypt for, e.g. `{ name:'Robert Receiver', email:'robert@openpgp.org' }` */
    toUserId?: UserId;
    /** use a key ID of 0 instead of the public key IDs */
    wildcard?: boolean;
}

export interface EncryptedMessage {
    data: string;
    message: string;
}

export interface DecryptOptions {
    /** use the given date for verification instead of the current time */
    date?: Date;
    /** return data format either as 'utf8' or 'binary' */
    format?: string;
    /** the message object with the encrypted data */
    message: message.Message;
    /** passwords to decrypt the message */
    passwords?: string | string[];
    /** private keys with decrypted secret key data or session key */
    privateKeys?: key.Key | key.Key[];
    /** array of public keys or single key, to verify signatures */
    publicKeys?: key.Key | key.Key[];
    /** session keys */
    sessionKeys?: SessionKey | SessionKey[];
    /** detached signature for verification */
    signature?: Signature;
}

export interface KeyContainer {
    key: key.Key;
}

export interface KeyPair extends KeyContainer {
    privateKeyArmored: string;
    publicKeyArmored: string;
}

export interface KeyOptions {
    /** elliptic curve for ECC keys: curve25519, p256, p384, p521, secp256k1, brainpoolP256r1, brainpoolP384r1, or brainpoolP512r1. */
    curve?: string;
    /** override the creation date of the key and the key signatures */
    date?: Date;
    /** The number of seconds after the key creation time that the key expires */
    keyExpirationTime?: number;
    /** number of bits for RSA keys: 2048 or 4096. */
    numBits?: number;
    /** The passphrase used to encrypt the resulting private key */
    passphrase?: string;
    /**
     * options for each subkey, default to main key options.
     * e.g. `[{sign: true, passphrase: '123'}]`.
     * sign parameter defaults to `false`, and indicates whether
     * the subkey should sign rather than encrypt
     */
    subkeys?: KeyOptions[];
    /** array of user IDs e.g. [{ name:'Phil Zimmermann', email:'phil@openpgp.org' }] */
    userIds: UserId[];
}

export interface Keyid {
    bytes: string;
}

export interface Signature {
    keyid: Keyid;
    valid: boolean;
}

export interface VerifiedMessage {
    data: Uint8Array | string;
    filename: string;
    signatures: Signature[];
}

export interface OpenPGPWorker {
    /**
     * Set config from main context to worker context.
     * @param config The openpgp configuration
     */
    configure(config: Object): void;

    /**
     * Generic proxy function that handles all commands from the public api.
     * @param method The public api function to be delegated to the worker thread
     * @param options The api function's options
     */
    delegate(id: number, method: string, options: Object): void;

    /**
     * Handle random buffer exhaustion by requesting more random bytes from the main window
     * @returns Empty promise whose resolution indicates that the buffer has been refilled
     */
    randomCallback(): Promise<void>;

    /**
     * Respond to the main window.
     * @param event Contains event type and data
     */
    response(event: Object): void;

    /**
     * Seed the library with entropy gathered `window.crypto.getRandomValues`
     * as this api is only avalible in the main window.
     * @param buffer Some random bytes
     */
    seedRandom(buffer: ArrayBuffer): void;
}

export interface WorkerOptions {
    /** number of workers to initialize */
    n?: number;
    /** relative path to the worker scripts, default: 'openpgp.worker.js' */
    path?: string;
    /** alternative to path parameter: web workers initialized with 'openpgp.worker.js' */
    workers?: OpenPGPWorker[];
}

export class AsyncProxy {
    /** Initializes a new proxy and loads the web worker */
    constructor(options: WorkerOptions);

    /**
     * Generic proxy function that handles all commands from the public api.
     * @param method the public api function to be delegated to the worker thread
     * @param options the api function's options
     * @returns see the corresponding public api functions for their return types
     */
    delegate(method: string, options: any): Promise<void>;

    /** Get new request ID */
    getId(): number;

    /**
     * Send message to worker with random data
     * @param size Number of bytes to send
     */
    seedRandom(workerId: number, size: number): Promise<void>;

    /** Terminates the workers */
    terminate(): void;

    workers: OpenPGPWorker[];
}

/** Set the path for the web worker script and create an instance of the async proxy */
export function initWorker(options: WorkerOptions): boolean;

/**
 * Returns a reference to the async proxy if the worker was initialized with openpgp.initWorker()
 * @returns the async proxy or `null` if not initialized
 */
export function getWorker(): AsyncProxy;

/** Cleanup the current instance of the web worker. */
export function destroyWorker(): void;

/**
 * Encrypts message text/data with public keys, passwords or both at once. At least either public keys or passwords
 * must be specified. If private keys are specified, those will be used to sign the message.
 * @returns encrypted (and optionally signed message)
 */
export function encrypt(
    options: EncryptOptions & { detached: true }
): Promise<EncryptedMessage & { signature: string }>;
export function encrypt(options: EncryptOptions): Promise<EncryptedMessage>;

/**
 * Decrypts a message with the user's private key, a session key or a password. Either a private key,
 *   a session key or a password must be specified.
 * @returns decrypted and verified message
 */
export function decrypt(options: DecryptOptions): Promise<VerifiedMessage>;

/**
 * Generates a new OpenPGP key pair. Supports RSA and ECC keys. Primary and subkey will be of same type.
 * @returns The generated key object
 */
export function generateKey(options: KeyOptions): Promise<KeyPair>;

/**
 * Reformats signature packets for a key and rewraps key object.
 * @returns The generated key object
 */
export function reformatKey(options: {
    /** The number of seconds after the key creation time that the key expires */
    keyExpirationTime?: number;
    /** The passphrase used to encrypt the resulting private key */
    passphrase?: string;
    /** private key to reformat */
    privateKey: key.Key;
    /** array of user IDs e.g. `[{ name:'Phil Zimmermann', email:'phil@openpgp.org' }]` */
    userIds: UserId[];
}): Promise<KeyPair>;

/**
 * Unlock a private key with your passphrase.
 * @returns the unlocked key object
 */
export function decryptKey(options: {
    /** the private key that is to be decrypted */
    privateKey: key.Key;
    /** the user's passphrase(s) chosen during key generation */
    passphrase?: string | string[];
}): Promise<KeyContainer>;

export function encryptKey(options: {
    privateKey: key.Key;
    passphrase?: string;
}): Promise<KeyContainer>;

export namespace armor {
    interface Armor {
        data: Uint8Array;
        text: string;
        type: number;
    }

    /**
     * Armor an OpenPGP binary packet block
     * @param messagetype type of the message
     * @param customComment additional comment to add to the armored string
     * @returns Armored text
     */
    function armor(
        messagetype: enums.armor,
        body: Armor,
        partindex: number,
        parttotal: number,
        customComment?: string
    ): string;

    /**
     * DeArmor an OpenPGP armored message; verify the checksum and return the encoded bytes
     * @param text OpenPGP armored message
     */
    function dearmor(text: string): Armor;
}

export namespace cleartext {
    /** Class that represents an OpenPGP cleartext signed message. */
    interface CleartextMessage {
        /** Returns ASCII armored text of cleartext signed message */
        armor(): string;

        /** Returns the key IDs of the keys that signed the cleartext message */
        getSigningKeyIds(): Keyid[];

        /** Get cleartext */
        getText(): string;

        /**
         * Sign the cleartext message
         * @param privateKeys private keys with decrypted secret key data for signing
         */
        sign(privateKeys: key.Key[]): Promise<void>;

        /**
         * Sign the cleartext message
         * @param privateKeys private keys with decrypted secret key data for signing
         * @param signature any existing detached signature
         * @param date The creation time of the signature that should be created
         * @param userId user ID to sign with, e.g. { name:'Steve Sender', email:'steve@openpgp.org' }
         * @returns new detached signature of message content
         * @async
         */
        signDetached(
            privateKeys: key.Key[],
            signature?: Signature,
            date?: Date,
            userId?: UserId
        ): Promise<Signature>;

        /**
         * Verify signatures of cleartext signed message
         * @param keys array of keys to verify signatures
         */
        verify(keys: key.Key[]): VerifiedMessage[];
    }

    function readArmored(armoredText: string): CleartextMessage;
}

export namespace config {
    const compression: enums.compression;
    const debug: boolean;
    const encryption_cipher: enums.symmetric;
    const integrity_protect: boolean;
    const keyserver: string;
    const prefer_hash_algorithm: enums.hash;
    const show_comment: boolean;
    const show_version: boolean;
}

export namespace crypto {
    interface Mpi {
        data: number;
        read(input: string): number;
        write(): string;
    }

    /**
     * Generating a session key for the specified symmetric algorithm
     * @param algo Algorithm to use
     */
    function generateSessionKey(algo: enums.symmetric): string;

    /**
     * generate random byte prefix as string for the specified algorithm
     * @param algo Algorithm to use
     */
    function getPrefixRandom(algo: enums.symmetric): string;

    /**
     * Returns the number of integers comprising the private key of an algorithm
     * @param algo The public key algorithm
     */
    function getPrivateMpiCount(algo: enums.symmetric): number;

    /**
     * Decrypts data using the specified public key multiprecision integers of the private key, the specified secretMPIs of the private key and the specified algorithm.
     * @param algo Algorithm to be used
     * @param publicMPIs Algorithm dependent multiprecision integers of the public key part of the private key
     * @param secretMPIs Algorithm dependent multiprecision integers of the private key used
     * @param data Data to be encrypted as MPI
     */
    function publicKeyDecrypt(
        algo: enums.publicKey,
        publicMPIs: Mpi[],
        secretMPIs: Mpi[],
        data: Mpi
    ): Promise<Mpi>;

    /**
     * Encrypts data using the specified public key multiprecision integers and the specified algorithm.
     * @param algo Algorithm to be used
     * @param publicMPIs Algorithm dependent multiprecision integers
     * @param data Data to be encrypted as MPI
     * @returns encrypted session key parameters
     */
    function publicKeyEncrypt(
        algo: enums.publicKey,
        publicMPIs: Mpi[],
        data: Mpi,
        fingerprint?: string
    ): Promise<Mpi[]>;

    namespace cfb {
        /**
         * This function decrypts a given plaintext using the specified blockcipher to decrypt a message
         * @param cipherfn the algorithm cipher class to decrypt data in one block_size encryption
         * @param key binary string representation of key to be used to decrypt the ciphertext. This will be passed to the cipherfn
         * @param ciphertext to be decrypted provided as a string
         * @param resync a boolean value specifying if a resync of the IV
         * should be used or not. The encrypteddatapacket uses the "old" style
         * with a resync. Decryption within an encryptedintegrityprotecteddata
         * packet is not resyncing the IV.
         */
        function decrypt(
            cipherfn: string,
            key: string,
            ciphertext: string,
            resync: boolean
        ): string;

        /**
         * This function encrypts a given with the specified prefixrandom using the specified blockcipher to encrypt a message
         * @param prefixrandom random bytes of block_size length provided as a string to be used in prefixing the data
         * @param cipherfn the algorithm cipher class to encrypt data in one block_size encryption
         * @param plaintext data to be encrypted provided as a string
         * @param key binary string representation of key to be used to encrypt the plaintext. This will be passed to the cipherfn
         * @param resync a boolean value specifying if a resync of the IV should be
         * used or not. The encrypteddatapacket uses the "old" style with a resync.
         * Encryption within an encryptedintegrityprotecteddata packet is not resyncing
         * the IV.
         */
        function encrypt(
            prefixrandom: string,
            cipherfn: string,
            plaintext: string,
            key: string,
            resync: boolean
        ): string;

        /**
         * Decrypts the prefixed data for the Modification Detection Code (MDC) computation
         * @param cipherfn cipherfn.encrypt Cipher function to use
         * @param key binary string representation of key to be used to check the mdc This will be passed to the cipherfn
         * @param ciphertext The encrypted data
         */
        function mdc(cipherfn: Object, key: string, ciphertext: string): string;
    }

    namespace hash {
        /**
         * Create a hash on the specified data using the specified algorithm
         * @param algo Hash algorithm type
         * @param data Data to be hashed
         */
        function digest(algo: enums.hash, data: string): string;

        /**
         * Returns the hash size in bytes of the specified hash algorithm type
         * @param algo Hash algorithm type
         */
        function getHashByteLength(algo: enums.hash): number;
    }

    namespace random {
        /**
         * Create a secure random big integer of bits length
         * @param bits Bit length of the MPI to create
         */
        function getRandomBigInteger(bits: number): number;

        /**
         * Retrieve secure random byte string of the specified length
         * @param length Length in bytes to generate
         */
        function getRandomBytes(length: number): string;

        /** Helper routine which calls platform specific crypto random generator */
        function getRandomValues(buf: Uint8Array): void;

        /**
         * Return a secure random number in the specified range
         * @param from Min of the random number
         * @param to Max of the random number (max 32bit)
         */
        function getSecureRandom(from: number, to: number): number;
    }

    namespace signature {
        /**
         * Create a signature on data using the specified algorithm
         * @param hash_algo hash Algorithm to use
         * @param algo Asymmetric cipher algorithm to use
         * @param publicMPIs Public key multiprecision integers of the private key
         * @param secretMPIs Private key multiprecision integers which is used to sign the data
         * @param data Data to be signed
         */
        function sign(
            hash_algo: enums.hash,
            algo: enums.publicKey,
            publicMPIs: Mpi[],
            secretMPIs: Mpi[],
            data: string
        ): Mpi;

        /**
         * @param algo public Key algorithm
         * @param hash_algo Hash algorithm
         * @param msg_MPIs Signature multiprecision integers
         * @param publickey_MPIs Public key multiprecision integers
         * @param data Data on where the signature was computed on
         */
        function verify(
            algo: enums.publicKey,
            hash_algo: enums.hash,
            msg_MPIs: Mpi[],
            publickey_MPIs: Mpi[],
            data: string
        ): boolean;
    }
}

export namespace enums {
    enum armor {
        message,
        multipart_last,
        multipart_section,
        private_key,
        public_key,
        signed
    }

    enum compression {
        bzip2,
        uncompressed,
        zip,
        zlib
    }

    enum hash {
        md5,
        ripemd,
        sha1,
        sha224,
        sha256,
        sha384,
        sha512
    }

    enum packet {
        compressed,
        literal,
        marker,
        modificationDetectionCode,
        onePassSignature,
        publicKey,
        publicKeyEncryptedSessionKey,
        publicSubkey,
        secretKey,
        secretSubkey,
        signature,
        symEncryptedIntegrityProtected,
        symEncryptedSessionKey,
        symmetricallyEncrypted,
        trust,
        userAttribute,
        userid
    }

    enum publicKey {
        /** Reserved for AEDH */
        aedh,
        /** Reserved for AEDSA */
        aedsa,
        /** DSA (Sign only) [FIPS186] [HAC] */
        dsa,
        /** ECDH (Encrypt only) [RFC6637] */
        ecdh,
        /** ECDSA (Sign only) [RFC6637] */
        ecdsa,
        /**
         * EdDSA (Sign only)
         * [{@link https://tools.ietf.org/html/draft-koch-eddsa-for-openpgp-04|Draft RFC}]
         */
        eddsa,
        /** Elgamal (Encrypt only) [ELGAMAL] [HAC] */
        elgamal,
        /** RSA (Encrypt only) [HAC] */
        rsa_encrypt,
        /** RSA (Encrypt or Sign) [HAC] */
        rsa_encrypt_sign,
        /** RSA (Sign only) [HAC] */
        rsa_sign
    }

    enum symmetric {
        aes128,
        aes192,
        aes256,
        blowfish,
        cast5,
        idea,
        /** Not implemented! */
        plaintext,
        tripledes,
        twofish
    }

    enum keyStatus {
        expired,
        invalid,
        no_self_cert,
        revoked,
        valid
    }
}

export namespace key {
    interface KeyResult {
        err: Error[];
        keys: Key[];
    }

    /**
     * Class that represents an OpenPGP key. Must contain a primary key.
     * Can contain additional subkeys, signatures, user ids, user attributes.
     */
    interface Key {
        armor(): string;
        decrypt(passphrase: string): boolean;
        getExpirationTime(): Date;
        getKeyIds(): Keyid[];
        getPreferredHashAlgorithm(): string;
        getPrimaryUser(): any;
        getUserIds(): string[];
        isPrivate(): boolean;
        isPublic(): boolean;
        toPublic(): Key;
        update(key: Key): void;
        verifyPrimaryKey(): enums.keyStatus;

        primaryKey: packet.PublicKey;
    }

    /**
     * Generates a new OpenPGP key. Currently only supports RSA keys.
     * Primary and subkey will be of same type.
     * @param options
     */
    function generate(options: KeyOptions): Promise<Key>;

    /**
     * Reads an OpenPGP armored text and returns one or multiple key objects
     * @param armoredText text to be parsed
     */
    function readArmored(armoredText: string): KeyResult;
}

export namespace message {
    /** Class that represents an OpenPGP message. Can be an encrypted message, signed message, compressed message or literal message */
    interface Message {
        /** Returns ASCII armored text of message */
        armor(): string;

        /**
         * Decrypt the message
         * @param privateKey private key with decrypted secret data
         */
        decrypt(privateKey: key.Key): Message[];

        /**
         * Encrypt the message
         * @param keys array of keys, used to encrypt the message
         */
        encrypt(keys: key.Key[]): Message[];

        /** Returns the key IDs of the keys to which the session key is encrypted */
        getEncryptionKeyIds(): Keyid[];

        /** Get literal data that is the body of the message */
        getLiteralData(): string;

        /** Returns the key IDs of the keys that signed the message */
        getSigningKeyIds(): Keyid[];

        /** Get literal data as text */
        getText(): string;

        /**
         * Sign the message (the literal data packet of the message)
         * @param privateKey private keys with decrypted secret key data for signing
         */
        sign(privateKey: key.Key[]): Message;

        /** Unwrap compressed message */
        unwrapCompressed(): Message;

        /**
         * Verify message signatures
         * @param keys array of keys to verify signatures
         */
        verify(keys: key.Key[]): Object[];
    }

    /**
     * creates new message object from binary data
     * @param bytes
     */
    function fromBinary(bytes: string): Message;

    /**
     * creates new message object from text
     * @param text
     */
    function fromText(text: string): Message;

    /**
     * reads an OpenPGP armored message and returns a message object
     * @param armoredText text to be parsed
     */
    function readArmored(armoredText: string): Message;

    /**
     * reads an OpenPGP message as byte array and returns a message object
     * @param input binary message
     * @returns new message object
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
        clearPrivateMPIs(str_passphrase: string): boolean;
        encrypt(passphrase: string): void;
        read(bytes: string): void;
        write(): string;
    }

    /**
     * Allocate a new packet from structured packet clone
     * @param packetClone packet clone
     */
    function fromStructuredClone(packetClone: Object): Object;

    /**
     * Allocate a new packet
     * @param property name from enums.packet
     */
    function newPacketFromTag(tag: string): Object;
}

export namespace util {
    /**
     * Convert an array of integers(0.255) to a string
     * @param bin An array of (binary) integers to convert
     */
    function bin2str(bin: number[]): string;

    /**
     * Calculates a 16bit sum of a string by adding each character codes modulus 65535
     * @param text string to create a sum of
     */
    function calc_checksum(text: string): number;

    /**
     * Convert a string of utf8 bytes to a native javascript string
     * @param utf8 A valid squence of utf8 bytes
     */
    function decode_utf8(utf8: string): string;

    /**
     * Convert a native javascript string to a string of utf8 bytes
     * param str The string to convert
     */
    function encode_utf8(str: string): string;

    /**
     * Return the algorithm type as string
     */
    function get_hashAlgorithmString(): string;

    /**
     * Get native Web Cryptography api. The default configuration is to use the api when available. But it can also be deactivated with config.useWebCrypto
     */
    function getWebCrypto(): Crypto;

    /**
     * Create binary string from a hex encoded string
     * @param str Hex string to convert
     */
    function hex2bin(str: string): string;

    /**
     * Creating a hex string from an binary array of integers (0..255)
     * @param str Array of bytes to convert
     */
    function hexidump(str: string): string;

    /**
     * Create hexstring from a binary
     * @param str string to convert
     */
    function hexstrdump(str: string): string;

    /**
     * Helper function to print a debug message. Debug messages are only printed if
     * @param str string of the debug message
     */
    function print_debug(str: string): void;

    /**
     * Helper function to print a debug message. Debug messages are only printed if
     * @param str string of the debug message
     */
    function print_debug_hexstr_dump(str: string): void;

    /**
     * Shifting a string to n bits right
     * @param value The string to shift
     * @param bitcount Amount of bits to shift (MUST be smaller than 9)
     */
    function shiftRight(value: string, bitcount: number): string;

    /**
     * Convert a string to an array of integers(0.255)
     * @param str string to convert
     */
    function str2bin(str: string): number[];

    /**
     * Convert a string to a Uint8Array
     * @param str string to convert
     */
    function str2Uint8Array(str: string): Uint8Array;

    /**
     * Convert a Uint8Array to a string. This currently functions the same as bin2str.
     * @param bin An array of (binary) integers to convert
     */
    function Uint8Array2str(bin: Uint8Array): string;
}
