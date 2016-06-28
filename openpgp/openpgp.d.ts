// Type definitions for openpgpjs
// Project: http://openpgpjs.org/
// Definitions by: Guillaume Lacasa <https://blog.lacasa.fr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace openpgp {

    interface KeyPair {
        key: key.Key,
        privateKeyArmored: string,
        publicKeyArmored: string
    }

    interface KeyOptions {
        keyType?: enums.publicKey,
        numBits: number,
        userId: string,
        passphrase: string,
        unlocked?: boolean
    }

    interface Keyid {
        bytes: string,
    }

    interface Signature {
        keyid: Keyid,
        valid: boolean
    }

    interface VerifiedMessage {
        text: string,
        signatures: Array<Signature>
    }

    /** Decrypts message and verifies signatures

        @param privateKey private key with decrypted secret key data
        @param publicKeys array of keys to verify signatures
        @param msg the message object with signed and encrypted data
     */
    function decryptAndVerifyMessage(privateKey: key.Key, publicKeys: Array<key.Key>, msg: string): Promise<VerifiedMessage>;
    /** Decrypts message and verifies signatures

        @param privateKey private key with decrypted secret key data
        @param publicKey single key to verify signatures
        @param msg the message object with signed and encrypted data
     */
    function decryptAndVerifyMessage(privateKey: key.Key, publicKey: key.Key, msg: string): Promise<VerifiedMessage>;

    /** Decrypts message

        @param privateKey private key with decrypted secret key data
        @param msg the message object with the encrypted data
     */
    function decryptMessage(privateKey: key.Key, msg: message.Message): Promise<string>;

    /** Encrypts message text with keys
        @param keys array of keys used to encrypt the message
        @param text message as native JavaScript string
        @returns encrypted ASCII armored message
     */
    function encryptMessage(keys: Array<key.Key>, message: string): Promise<string>;
    /** Encrypts message text with keys

        @param single key used to encrypt the message
        @param text message as native JavaScript string
     */
    function encryptMessage(key: key.Key, message: string): Promise<string>;

    /** Generates a new OpenPGP key pair. Currently only supports RSA keys. Primary and subkey will be of same type.
        @param options
     */
    function generateKeyPair(options: KeyOptions): Promise<KeyPair>;

    /** Signs message text and encrypts it

        @param publicKeys array of keys used to encrypt the message
        @param privateKey private key with decrypted secret key data for signing
        @param text private key with decrypted secret key data for signing
     */
    function signAndEncryptMessage(publicKeys: Array<key.Key>, privateKey: key.Key, text: string): Promise<string>;
    /** Signs message text and encrypts it

        @param publicKeys single key used to encrypt the message
        @param privateKey private key with decrypted secret key data for signing
        @param text private key with decrypted secret key data for signing
     */
    function signAndEncryptMessage(publicKey: key.Key, privateKey: key.Key, text: string): Promise<string>;

    /** Signs a cleartext message

        @param privateKeys array of keys with decrypted secret key data to sign cleartext
        @param text cleartext
     */
    function signClearMessage(privateKeys: Array<key.Key>, text: string): Promise<string>;
    /** Signs a cleartext message

        @param privateKeys single key with decrypted secret key data to sign cleartext
        @param text cleartext
     */
    function signClearMessage(privateKey: key.Key, text: string): Promise<string>;

    /** Verifies signatures of cleartext signed message

        @param publicKeys array of keys to verify signatures
        @param msg cleartext message object with signatures
     */
    function verifyClearSignedMessage(publicKeys: Array<key.Key>, msg: cleartext.CleartextMessage): Promise<VerifiedMessage>;
    /** Verifies signatures of cleartext signed message

        @param publicKeys single key to verify signatures
        @param msg cleartext message object with signatures
     */
    function verifyClearSignedMessage(publicKey: key.Key, msg: cleartext.CleartextMessage): Promise<VerifiedMessage>;
}

declare namespace openpgp.armor {

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

declare namespace openpgp.cleartext {

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

declare namespace openpgp.config {
    var prefer_hash_algorithm: enums.hash;
    var encryption_cipher: enums.symmetric;
    var compression: enums.compression;
    var show_version: boolean;
    var show_comment: boolean;
    var integrity_protect: boolean;
    var keyserver: string;
    var debug: boolean;
}

declare namespace openpgp.crypto {
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
}

declare namespace openpgp.crypto.cfb {
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

declare namespace openpgp.crypto.hash {
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

declare namespace openpgp.crypto.random {
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

declare namespace openpgp.crypto.signature {
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

declare namespace openpgp.enums {

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

declare namespace openpgp.key {

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

declare namespace openpgp.message {
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
}

declare namespace openpgp.packet {

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
        read(bytes:string): void;
        write(): string;
        clearPrivateMPIs(str_passphrase: string): boolean;
        encrypt(passphrase:string): void;
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

declare namespace openpgp.util {
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
