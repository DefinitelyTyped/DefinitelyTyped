// Type definitions for crypto-js v4.0.0
// Project: https://github.com/brix/crypto-js
// Definitions by: Michael Zabka <https://github.com/misak113>
//                 Max Lysenko <https://github.com/maximlysenko>
//                 Brendan Early <https://github.com/mymindstorm>
//                 Doma <https://github.com/SevenOutman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = CryptoJS;

type WordArray = CryptoJS.lib.WordArray;
type CipherParams = CryptoJS.lib.CipherParams;
type X64Word = CryptoJS.x64.Word;

/**
 * Encoding strategy.
 */
interface Encoder {
    /**
     * Converts a word array to a hex string.
     *
     * @param wordArray The word array.
     *
     * @return The hex string.
     *
     * @example
     *
     *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
     */
    stringify(wordArray: WordArray): string;
    /**
     * Converts a hex string to a word array.
     *
     * @param hexStr The hex string.
     *
     * @return The word array.
     *
     * @example
     *
     *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
     */
    parse(str: string): WordArray;
}

/**
 * Abstract buffered block algorithm template.
 *
 * The property blockSize must be implemented in a concrete subtype.
 */
interface BufferedBlockAlgorithm {
    /**
     * The number of blocks that should be kept unprocessed in the buffer. Default: 0
     */
    _minBufferSize: number;
    /**
     * Resets this block algorithm's data buffer to its initial state.
     *
     * @example
     *
     *     bufferedBlockAlgorithm.reset();
     */
    reset(): void;
    /**
     * Adds new data to this block algorithm's buffer.
     *
     * @param data The data to append. Strings are converted to a WordArray using UTF-8.
     *
     * @example
     *
     *     bufferedBlockAlgorithm._append('data');
     *     bufferedBlockAlgorithm._append(wordArray);
     */
    _append(data: WordArray | string): void;
    /**
     * Processes available data blocks.
     *
     * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
     *
     * @param doFlush Whether all blocks and partial blocks should be processed.
     *
     * @return The processed data.
     *
     * @example
     *
     *     var processedData = bufferedBlockAlgorithm._process();
     *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
     */
    _process(doFlush?: boolean): WordArray;
    /**
     * Creates a copy of this object.
     *
     * @return The clone.
     *
     * @example
     *
     *     var clone = bufferedBlockAlgorithm.clone();
     */
    clone(): BufferedBlockAlgorithm;
}

/**
 * Abstract hasher template.
 */
interface Hasher {
    /**
     * The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */
    blockSize: number;
    /**
     * Resets this hasher to its initial state.
     *
     * @example
     *
     *     hasher.reset();
     */
    reset(): void;
    /**
     * Updates this hasher with a message.
     *
     * @param messageUpdate The message to append.
     *
     * @return This hasher.
     *
     * @example
     *
     *     hasher.update('message');
     *     hasher.update(wordArray);
     */
    update(messageUpdate: WordArray | string): this;
    /**
     * Finalizes the hash computation.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * @param messageUpdate (Optional) A final message update.
     *
     * @return The hash.
     *
     * @example
     *
     *     var hash = hasher.finalize();
     *     var hash = hasher.finalize('message');
     *     var hash = hasher.finalize(wordArray);
     */
    finalize(messaegUpdate?: WordArray | string): WordArray;
}

interface HasherStatic {
    /**
     * Initializes a newly created hasher.
     *
     * @param cfg (Optional) The configuration options to use for this hash computation.
     *
     * @example
     *
     *     var hasher = CryptoJS.algo.SHA256.create();
     */
    create(cfg?: object): Hasher;
}

interface HasherHelper {
    (message: WordArray | string, cfg?: object): WordArray;
}

interface HmacHasherHelper {
    (message: WordArray | string, key: WordArray | string): WordArray;
}

/**
 * Abstract base cipher template.
 */
interface Cipher {
    /**
     * This cipher's key size. Default: 4 (128 bits)
     */
    keySize: number;
    /**
     * This cipher's IV size. Default: 4 (128 bits)
     */
    ivSize: number;
    /**
     * A constant representing encryption mode.
     */
    readonly _ENC_XFORM_MODE: number;
    /**
     * A constant representing decryption mode.
     */
    readonly _DEV_XFORM_MODE: number;

    /**
     * Resets this cipher to its initial state.
     *
     * @example
     *
     *     cipher.reset();
     */
    reset(): void;

    /**
     * Adds data to be encrypted or decrypted.
     *
     * @param dataUpdate The data to encrypt or decrypt.
     *
     * @return The data after processing.
     *
     * @example
     *
     *     var encrypted = cipher.process('data');
     *     var encrypted = cipher.process(wordArray);
     */
    process(dataUpdate: WordArray | string): WordArray;

    /**
     * Finalizes the encryption or decryption process.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * @param dataUpdate The final data to encrypt or decrypt.
     *
     * @return The data after final processing.
     *
     * @example
     *
     *     var encrypted = cipher.finalize();
     *     var encrypted = cipher.finalize('data');
     *     var encrypted = cipher.finalize(wordArray);
     */
    finalize(dataUpdate?: WordArray | string): WordArray;
}

interface CipherStatic {
    /**
     * Creates this cipher in encryption mode.
     *
     * @param key The key.
     * @param cfg (Optional) The configuration options to use for this operation.
     *
     * @return A cipher instance.
     *
     * @example
     *
     *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
     */
    createEncryptor(key: WordArray, cfg?: CipherOption): Cipher;

    /**
     * Creates this cipher in decryption mode.
     *
     * @param key The key.
     * @param cfg (Optional) The configuration options to use for this operation.
     *
     * @return A cipher instance.
     *
     * @example
     *
     *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
     */
    createDecryptor(key: WordArray, cfg?: CipherOption): Cipher;

    /**
     * Initializes a newly created cipher.
     *
     * @param xformMode Either the encryption or decryption transormation mode constant.
     * @param key The key.
     * @param cfg (Optional) The configuration options to use for this operation.
     *
     * @example
     *
     *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
     */
    create(xformMode: number, key: WordArray, cfg?: CipherOption): Cipher;
}

interface CipherHelper {
    encrypt(message: WordArray | string, key: WordArray | string, cfg?: CipherOption): CipherParams;
    decrypt(ciphertext: CipherParams | string, key: WordArray | string, cfg?: CipherOption): WordArray;
}

/**
 * Configuration options.
 */
interface CipherOption {
    /**
     * The IV to use for this operation.
     */
    iv?: WordArray | undefined;
    format?: Format | undefined;
    [key: string]: any;
}

interface Mode {
    /**
     * Processes the data block at offset.
     *
     * @param words The data words to operate on.
     * @param offset The offset where the block starts.
     *
     * @example
     *
     *     mode.processBlock(data.words, offset);
     */
    processBlock(words: number[], offset: number): void;
}

interface ModeStatic {
    /**
     * Initializes a newly created mode.
     *
     * @param cipher A block cipher instance.
     * @param iv The IV words.
     *
     * @example
     *
     *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
     */
    create(cipher: Cipher, iv: number[]): Mode;
}

/**
 * Abstract base block cipher mode template.
 */
interface BlockCipherMode {
    Encryptor: ModeStatic;
    Decryptor: ModeStatic;
    /**
     * Creates this mode for encryption.
     *
     * @param cipher A block cipher instance.
     * @param iv The IV words.
     *
     * @example
     *
     *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
     */
    createEncryptor(cipher: Cipher, iv: number[]): Mode;

    /**
     * Creates this mode for decryption.
     *
     * @param cipher A block cipher instance.
     * @param iv The IV words.
     *
     * @example
     *
     *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
     */
    createDecryptor(cipher: Cipher, iv: number[]): Mode;
}

/**
 * Abstract base block cipher mode template.
 */
interface BlockCipherMode {
    /**
     * Creates this mode for encryption.
     *
     * @param cipher A block cipher instance.
     * @param iv The IV words.
     *
     * @example
     *
     *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
     */
    createEncryptor(cipher: Cipher): Mode;
}

/**
 * Padding strategy.
 */
interface Padding {
    /**
     * Pads data using the algorithm defined in PKCS #5/7.
     *
     * @param data The data to pad.
     * @param blockSize The multiple that the data should be padded to.
     *
     * @example
     *
     *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
     */
    pad(data: WordArray, blockSize: number): void;

    /**
     * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
     *
     * @param data The data to unpad.
     *
     * @example
     *
     *     CryptoJS.pad.Pkcs7.unpad(wordArray);
     */
    unpad(data: WordArray): void;
}

/**
 * Abstract base block cipher template.
 */
interface BlockCipher {
    /**
     * The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
     */
    blockSize: number;
}

/**
 * Configuration options.
 */
interface BlockCipherOption {
    /**
     * The block mode to use. Default: CBC
     */
    mode: Mode;
    /**
     * The padding strategy to use. Default: Pkcs7
     */
    padding: Padding;
}
/**
 * Formatting strategy.
 */
interface Format {
    /**
     * Converts a cipher params object to an OpenSSL-compatible string.
     *
     * @param cipherParams The cipher params object.
     *
     * @return The OpenSSL-compatible string.
     *
     * @example
     *
     *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
     */
    stringify(cipherParams: CipherParams): string;

    /**
     * Converts an OpenSSL-compatible string to a cipher params object.
     *
     * @param openSSLStr The OpenSSL-compatible string.
     *
     * @return The cipher params object.
     *
     * @example
     *
     *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
     */
    parse(str: string): CipherParams;
}

/**
 * An array of 64-bit words.
 */
interface X64WordArray {
    /**
     * The array of CryptoJS.x64.Word objects.
     */
    words: number[];
    /**
     * The number of significant bytes in this word array.
     */
    sigBytes: number;

    /**
     * Converts this 64-bit word array to a 32-bit word array.
     *
     * @return This word array's data as a 32-bit word array.
     *
     * @example
     *
     *     var x32WordArray = x64WordArray.toX32();
     */
    toX32(): WordArray;

    /**
     * Creates a copy of this word array.
     *
     * @return The clone.
     *
     * @example
     *
     *     var clone = x64WordArray.clone();
     */
    clone(): X64WordArray;
}

/**
 * Base object for prototypal inheritance.
 */
interface Base {
    /**
     * Creates a copy of this object.
     *
     * @return The clone.
     *
     * @example
     *
     *     var clone = instance.clone();
     */
    clone(): this;
}

/**
 * Configuration options.
 */
interface KDFOption {
    /**
     * The key size in words to generate.
     */
    keySize?: number | undefined;
    /**
     * The hasher to use.
     */
    hasher?: HasherStatic | undefined;
    /**
     * The number of iterations to perform.
     */
    iterations?: number | undefined;
}

declare global {
    namespace CryptoJS {
        /**
         * Library namespace.
         */
        export namespace lib {
            /**
             * Base object for prototypal inheritance.
             */
            const Base: {
                /**
                 * Creates a new object that inherits from this object.
                 *
                 * @param overrides Properties to copy into the new object.
                 *
                 * @return The new object.
                 *
                 * @example
                 *
                 *     var MyType = CryptoJS.lib.Base.extend({
                 *         field: 'value',
                 *
                 *         method: function () {
                 *         }
                 *     });
                 */
                extend(overrides: object): any;

                /**
                 * Extends this object and runs the init method.
                 * Arguments to create() will be passed to init().
                 *
                 * @return The new object.
                 *
                 * @example
                 *
                 *     var instance = MyType.create();
                 */
                create(...args: any[]): any;

                /**
                 * Copies properties into this object.
                 *
                 * @param properties The properties to mix in.
                 *
                 * @example
                 *
                 *     MyType.mixIn({
                 *         field: 'value'
                 *     });
                 */
                mixIn(properties: object): any;
            };

            /**
             * An array of 32-bit words.
             */
            interface WordArray {
                /**
                 * The array of 32-bit words.
                 */
                words: number[];
                /**
                 * The number of significant bytes in this word array.
                 */
                sigBytes: number;
                /**
                 * Converts this word array to a string.
                 *
                 * @param encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
                 *
                 * @return The stringified word array.
                 *
                 * @example
                 *
                 *     var string = wordArray + '';
                 *     var string = wordArray.toString();
                 *     var string = wordArray.toString(CryptoJS.enc.Utf8);
                 */
                toString(encoder?: Encoder): string;

                /**
                 * Concatenates a word array to this word array.
                 *
                 * @param wordArray The word array to append.
                 *
                 * @return This word array.
                 *
                 * @example
                 *
                 *     wordArray1.concat(wordArray2);
                 */
                concat(wordArray: WordArray): this;

                /**
                 * Removes insignificant bits.
                 *
                 * @example
                 *
                 *     wordArray.clamp();
                 */
                clamp(): void;

                /**
                 * Creates a copy of this word array.
                 *
                 * @return The clone.
                 *
                 * @example
                 *
                 *     var clone = wordArray.clone();
                 */
                clone(): WordArray;
            }
            const WordArray: {
                /**
                 * Initializes a newly created word array.
                 *
                 * @param words (Optional) An array of 32-bit words.
                 * @param sigBytes (Optional) The number of significant bytes in the words.
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.lib.WordArray.create();
                 *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
                 *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
                 */
                create(words?: number[], sigBytes?: number): WordArray;
                /**
                 * Creates a word array filled with random bytes.
                 *
                 * @param nBytes The number of random bytes to generate.
                 *
                 * @return The random word array.
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.lib.WordArray.random(16);
                 */
                random(nBytes: number): WordArray;
            };

            const BufferedBlockAlgorithm: any;

            const Hasher: {
                /**
                 * Creates a shortcut function to a hasher's object interface.
                 *
                 * @param hasher The hasher to create a helper for.
                 *
                 * @return The shortcut function.
                 *
                 * @example
                 *
                 *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
                 */
                _createHelper(hasher: HasherStatic): HasherHelper;
                /**
                 * Creates a shortcut function to the HMAC's object interface.
                 *
                 * @param hasher The hasher to use in this HMAC helper.
                 *
                 * @return The shortcut function.
                 *
                 * @example
                 *
                 *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
                 */
                _createHmacHelper(hasher: HasherStatic): HmacHasherHelper;
            };

            const Cipher: {
                /**
                 * Creates shortcut functions to a cipher's object interface.
                 *
                 * @param cipher The cipher to create a helper for.
                 *
                 * @return An object with encrypt and decrypt shortcut functions.
                 *
                 * @example
                 *
                 *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
                 */
                _createHelper(cipher: Cipher): CipherHelper;
            };

            /**
             * A collection of cipher parameters.
             */
            interface CipherParams {
                /**
                 * The raw ciphertext.
                 */
                ciphertext: WordArray;
                /**
                 * The key to this ciphertext.
                 */
                key: WordArray;
                /**
                 * The IV used in the ciphering operation.
                 */
                iv: WordArray;
                /**
                 * The salt used with a key derivation function.
                 */
                salt: WordArray;
                /**
                 * The cipher algorithm.
                 */
                algorithm: CipherStatic;
                /**
                 * The block mode used in the ciphering operation.
                 */
                mode: Mode;
                /**
                 * The padding scheme used in the ciphering operation.
                 */
                padding: Padding;
                /**
                 * The block size of the cipher.
                 */
                blockSize: number;
                /**
                 * The default formatting strategy to convert this cipher params object to a string.
                 */
                formatter: Format;
                /**
                 * Converts this cipher params object to a string.
                 *
                 * @param formatter (Optional) The formatting strategy to use.
                 *
                 * @return The stringified cipher params.
                 *
                 * @throws Error If neither the formatter nor the default formatter is set.
                 *
                 * @example
                 *
                 *     var string = cipherParams + '';
                 *     var string = cipherParams.toString();
                 *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
                 */
                toString(formatter?: Format): string;
            }
            const CipherParams: {
                /**
                 * Initializes a newly created cipher params object.
                 *
                 * @param cipherParams An object with any of the possible cipher parameters.
                 *
                 * @example
                 *
                 *     var cipherParams = CryptoJS.lib.CipherParams.create({
                 *         ciphertext: ciphertextWordArray,
                 *         key: keyWordArray,
                 *         iv: ivWordArray,
                 *         salt: saltWordArray,
                 *         algorithm: CryptoJS.algo.AES,
                 *         mode: CryptoJS.mode.CBC,
                 *         padding: CryptoJS.pad.PKCS7,
                 *         blockSize: 4,
                 *         formatter: CryptoJS.format.OpenSSL
                 *     });
                 */
                create(cipherParams: Partial<CipherParams>): CipherParams;
            };

            /**
             * Abstract base stream cipher template.
             */
            interface StreamCipher extends Cipher {
                /**
                 * The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
                 */
                blockSize: number;
            }

            /**
             * Abstract base block cipher mode template.
             */
            const BlockCipherMode: any;

            /**
             * A cipher wrapper that returns ciphertext as a serializable cipher params object.
             */
            const SerializableCipher: {
                /**
                 * Encrypts a message.
                 *
                 * @param cipher The cipher algorithm to use.
                 * @param message The message to encrypt.
                 * @param key The key.
                 * @param cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return A cipher params object.
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 */
                encrypt(
                    cipher: CipherStatic,
                    message: WordArray | string,
                    key: WordArray,
                    cfg?: CipherOption,
                ): CipherParams;

                /**
                 * Decrypts serialized ciphertext.
                 *
                 * @param cipher The cipher algorithm to use.
                 * @param ciphertext The ciphertext to decrypt.
                 * @param key The key.
                 * @param cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return The plaintext.
                 *
                 * @example
                 *
                 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 */
                decrypt(
                    cipher: CipherStatic,
                    ciphertext: WordArray | string,
                    key: WordArray,
                    cfg?: CipherOption,
                ): CipherParams;

                /**
                 * Converts serialized ciphertext to CipherParams,
                 * else assumed CipherParams already and returns ciphertext unchanged.
                 *
                 * @param ciphertext The ciphertext.
                 * @param format The formatting strategy to use to parse serialized ciphertext.
                 *
                 * @return The unserialized ciphertext.
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
                 */
                _parse(ciphertext: CipherParams | string, format: Format): CipherParams;
            };

            /**
             * A serializable cipher wrapper that derives the key from a password,
             * and returns ciphertext as a serializable cipher params object.
             */
            const PasswordBasedCipher: {
                /**
                 * Encrypts a message using a password.
                 *
                 * @param cipher The cipher algorithm to use.
                 * @param message The message to encrypt.
                 * @param password The password.
                 * @param cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return A cipher params object.
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
                 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
                 */
                encrypt(
                    cipher: CipherStatic,
                    message: WordArray | string,
                    password: string,
                    cfg?: CipherOption,
                ): CipherParams;

                /**
                 * Decrypts serialized ciphertext using a password.
                 *
                 * @param cipher The cipher algorithm to use.
                 * @param ciphertext The ciphertext to decrypt.
                 * @param password The password.
                 * @param cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return The plaintext.
                 *
                 * @example
                 *
                 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
                 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
                 */
                decrypt(
                    cipher: CipherStatic,
                    ciphertext: CipherParams | string,
                    password: string,
                    cfg?: CipherOption,
                ): WordArray;
            };
        }
        /**
         * Padding namespace.
         */
        export namespace pad {
            /**
             * PKCS #5/7 padding strategy.
             */
            const Pkcs7: Padding;

            /**
             * ANSI X.923 padding strategy.
             */
            const AnsiX923: Padding;

            /**
             * ISO 10126 padding strategy.
             */
            const Iso10126: Padding;

            /**
             * ISO/IEC 9797-1 Padding Method 2.
             */
            const Iso97971: Padding;

            /**
             * Zero padding strategy.
             */
            const ZeroPadding: Padding;

            /**
             * A noop padding strategy.
             */
            const NoPadding: Padding;
        }

        /**
         * Key derivation function namespace.
         */
        export namespace kdf {
            /**
             * OpenSSL key derivation function.
             */
            const OpenSSL: {
                /**
                 * Derives a key and IV from a password.
                 *
                 * @param password The password to derive from.
                 * @param keySize The size in words of the key to generate.
                 * @param ivSize The size in words of the IV to generate.
                 * @param salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
                 *
                 * @return A cipher params object with the key, IV, and salt.
                 *
                 * @example
                 *
                 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
                 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
                 */
                execute(password: string, keySize: number, ivSize: number, salt?: WordArray | string): CipherParams;
            };
        }

        /**
         * Mode namespace.
         */
        export namespace mode {
            /**
             * Cipher Block Chaining mode.
             */
            const CBC: BlockCipherMode;

            /**
             * Cipher Feedback block mode.
             */
            const CFB: BlockCipherMode;
            /**
             * Counter block mode.
             */
            const CTR: BlockCipherMode;
            /**
             * @preserve
             * Counter block mode compatible with  Dr Brian Gladman fileenc.c
             * derived from CryptoJS.mode.CTR
             * Jan Hruby jhruby.web@gmail.com
             */
            const CTRGladman: BlockCipherMode;
            /**
             * Output Feedback block mode.
             */
            const OFB: BlockCipherMode;

            /**
             * Electronic Codebook block mode.
             */
            const ECB: BlockCipherMode;
        }

        /**
         * Format namespace.
         */
        export namespace format {
            /**
             * OpenSSL formatting strategy.
             */
            const OpenSSL: Format;
            const Hex: Format;
        }

        /**
         * Encoder namespace.
         */
        export namespace enc {
            /**
             * Hex encoding strategy.
             */
            const Hex: Encoder;
            /**
             * Latin1 encoding strategy.
             */
            const Latin1: Encoder;
            /**
             * UTF-8 encoding strategy.
             */
            const Utf8: Encoder;
            /**
             * UTF-16 BE encoding strategy.
             */
            const Utf16: Encoder;
            const Utf16BE: Encoder;

            /**
             * UTF-16 LE encoding strategy.
             */
            const Utf16LE: Encoder;
            /**
             * Base64 encoding strategy.
             */
            const Base64: Encoder;
        }

        /**
         * Algorithm namespace.
         */
        export namespace algo {
            /**
             * MD5 hash algorithm.
             */
            const MD5: HasherStatic;

            /**
             * SHA-1 hash algorithm.
             */
            const SHA1: HasherStatic;

            /**
             * SHA-256 hash algorithm.
             */
            const SHA256: HasherStatic;
            /**
             * SHA-224 hash algorithm.
             */
            const SHA224: HasherStatic;
            /**
             * SHA-512 hash algorithm.
             */
            const SHA512: HasherStatic;

            /**
             * SHA-384 hash algorithm.
             */
            const SHA384: HasherStatic;
            /**
             * SHA-3 hash algorithm.
             */
            const SHA3: HasherStatic;
            /**
             * RIPEMD160 hash algorithm.
             */
            const RIPEMD160: HasherStatic;
            /**
             * HMAC algorithm.
             */
            abstract class HMAC {
                /**
                 * Initializes a newly created HMAC.
                 *
                 * @param hasher The hash algorithm to use.
                 * @param key The secret key.
                 *
                 * @example
                 *
                 *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
                 */
                static create(hasher: HasherStatic, key: WordArray | string): HMAC;
                /**
                 * Resets this HMAC to its initial state.
                 *
                 * @example
                 *
                 *     hmacHasher.reset();
                 */
                reset(): void;

                /**
                 * Updates this HMAC with a message.
                 *
                 * @param messageUpdate The message to append.
                 *
                 * @return This HMAC instance.
                 *
                 * @example
                 *
                 *     hmacHasher.update('message');
                 *     hmacHasher.update(wordArray);
                 */
                update(messageUpdate: WordArray | string): this;

                /**
                 * Finalizes the HMAC computation.
                 * Note that the finalize operation is effectively a destructive, read-once operation.
                 *
                 * @param messageUpdate (Optional) A final message update.
                 *
                 * @return The HMAC.
                 *
                 * @example
                 *
                 *     var hmac = hmacHasher.finalize();
                 *     var hmac = hmacHasher.finalize('message');
                 *     var hmac = hmacHasher.finalize(wordArray);
                 */
                finalize(messageUpdate?: WordArray | string): WordArray;
            }
            /**
             * Password-Based Key Derivation Function 2 algorithm.
             */
            abstract class PBKDF2 {
                /**
                 * Initializes a newly created key derivation function.
                 *
                 * @param cfg (Optional) The configuration options to use for the derivation.
                 *
                 * @example
                 *
                 *     var kdf = CryptoJS.algo.PBKDF2.create();
                 *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
                 *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
                 */
                static create(cfg?: KDFOption): PBKDF2;

                /**
                 * Computes the Password-Based Key Derivation Function 2.
                 *
                 * @param password The password.
                 * @param salt A salt.
                 *
                 * @return The derived key.
                 *
                 * @example
                 *
                 *     var key = kdf.compute(password, salt);
                 */
                compute(password: WordArray | string, salt: WordArray): WordArray;
            }
            /**
             * This key derivation function is meant to conform with EVP_BytesToKey.
             * www.openssl.org/docs/crypto/EVP_BytesToKey.html
             */
            abstract class EvpKDF {
                /**
                 * Initializes a newly created key derivation function.
                 *
                 * @param cfg (Optional) The configuration options to use for the derivation.
                 *
                 * @example
                 *
                 *     var kdf = CryptoJS.algo.EvpKDF.create();
                 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
                 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
                 */
                static create(cfg?: { keySize: number; hasher?: HasherStatic | undefined; iterations: number }): EvpKDF;

                /**
                 * Derives a key from a password.
                 *
                 * @param password The password.
                 * @param salt A salt.
                 *
                 * @return The derived key.
                 *
                 * @example
                 *
                 *     var key = kdf.compute(password, salt);
                 */
                compute(password: WordArray | string, salt: WordArray): WordArray;
            }

            /**
             * AES block cipher algorithm.
             */
            const AES: CipherStatic;

            /**
             * DES block cipher algorithm.
             */
            const DES: CipherStatic;

            /**
             * Triple-DES block cipher algorithm.
             */
            const TripleDES: CipherStatic;

            /**
             * RC4 stream cipher algorithm.
             */
            const RC4: CipherStatic;

            /**
             * Modified RC4 stream cipher algorithm.
             */
            const RC4Drop: CipherStatic;

            /**
             * Rabbit stream cipher algorithm
             */
            const Rabbit: CipherStatic;

            /**
             * Rabbit stream cipher algorithm.
             *
             * This is a legacy version that neglected to convert the key to little-endian.
             * This error doesn't affect the cipher's security,
             * but it does affect its compatibility with other implementations.
             */
            const RabbitLegacy: CipherStatic;
        }

        /**
         * x64 namespace.
         */
        export namespace x64 {
            /**
             * A 64-bit word.
             */
            interface Word {
                /**
                 * Bitwise NOTs this word.
                 *
                 * @return A new x64-Word object after negating.
                 *
                 * @example
                 *
                 *     var negated = x64Word.not();
                 */
                not(): X64Word;
                /**
                 * Bitwise ANDs this word with the passed word.
                 *
                 * @param word The x64-Word to AND with this word.
                 *
                 * @return A new x64-Word object after ANDing.
                 *
                 * @example
                 *
                 *     var anded = x64Word.and(anotherX64Word);
                 */
                and(word: X64Word): X64Word;

                /**
                 * Bitwise ORs this word with the passed word.
                 *
                 * @param word The x64-Word to OR with this word.
                 *
                 * @return A new x64-Word object after ORing.
                 *
                 * @example
                 *
                 *     var ored = x64Word.or(anotherX64Word);
                 */
                or(word: X64Word): X64Word;

                /**
                 * Bitwise XORs this word with the passed word.
                 *
                 * @param word The x64-Word to XOR with this word.
                 *
                 * @return A new x64-Word object after XORing.
                 *
                 * @example
                 *
                 *     var xored = x64Word.xor(anotherX64Word);
                 */
                xor(word: X64Word): X64Word;
                /**
                 * Shifts this word n bits to the left.
                 *
                 * @param n The number of bits to shift.
                 *
                 * @return A new x64-Word object after shifting.
                 *
                 * @example
                 *
                 *     var shifted = x64Word.shiftL(25);
                 */
                shiftL(n: number): X64Word;
                /**
                 * Shifts this word n bits to the right.
                 *
                 * @param n The number of bits to shift.
                 *
                 * @return A new x64-Word object after shifting.
                 *
                 * @example
                 *
                 *     var shifted = x64Word.shiftR(7);
                 */
                shiftR(n: number): X64Word;
                /**
                 * Rotates this word n bits to the left.
                 *
                 * @param n The number of bits to rotate.
                 *
                 * @return A new x64-Word object after rotating.
                 *
                 * @example
                 *
                 *     var rotated = x64Word.rotL(25);
                 */
                rotL(n: number): X64Word;

                /**
                 * Rotates this word n bits to the right.
                 *
                 * @param n The number of bits to rotate.
                 *
                 * @return A new x64-Word object after rotating.
                 *
                 * @example
                 *
                 *     var rotated = x64Word.rotR(7);
                 */
                rotR(n: number): X64Word;
                /**
                 * Adds this word with the passed word.
                 *
                 * @param word The x64-Word to add with this word.
                 *
                 * @return A new x64-Word object after adding.
                 *
                 * @example
                 *
                 *     var added = x64Word.add(anotherX64Word);
                 */
                add(word: X64Word): X64Word;
            }

            const Word: {
                /**
                 * Initializes a newly created 64-bit word.
                 *
                 * @param high The high 32 bits.
                 * @param low The low 32 bits.
                 *
                 * @example
                 *
                 *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
                 */
                create(high: number, low: number): X64Word;
            };

            /**
             * Initializes a newly created word array.
             *
             * @param words (Optional) An array of CryptoJS.x64.Word objects.
             * @param sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.x64.WordArray.create();
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ]);
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ], 10);
             */
            const WordArray: {
                create(words?: X64WordArray[], sigBytes?: number): X64WordArray;
            };
        }

        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.MD5('message');
         *     var hash = CryptoJS.MD5(wordArray);
         */
        export const MD5: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMA'C.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacMD5(message, key);
         */
        export const HmacMD5: HmacHasherHelper;
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA1('message');
         *     var hash = CryptoJS.SHA1(wordArray);
         */
        export const SHA1: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA1(message, key);
         */
        export const HmacSHA1: HmacHasherHelper;

        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA256('message');
         *     var hash = CryptoJS.SHA256(wordArray);
         */
        export const SHA256: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA256(message, key);
         */
        export const HmacSHA256: HmacHasherHelper;
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA224('message');
         *     var hash = CryptoJS.SHA224(wordArray);
         */
        export const SHA224: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA224(message, key);
         */
        export const HmacSHA224: HmacHasherHelper;
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA512('message');
         *     var hash = CryptoJS.SHA512(wordArray);
         */
        export const SHA512: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA512(message, key);
         */
        export const HmacSHA512: HmacHasherHelper;
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA384('message');
         *     var hash = CryptoJS.SHA384(wordArray);
         */
        export const SHA384: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA384(message, key);
         */
        export const HmacSHA384: HmacHasherHelper;

        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.SHA3('message');
         *     var hash = CryptoJS.SHA3(wordArray);
         */
        export const SHA3: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA3(message, key);
         */
        export const HmacSHA3: HmacHasherHelper;

        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param message The message to hash.
         *
         * @return The hash.
         *
         * @example
         *
         *     var hash = CryptoJS.RIPEMD160('message');
         *     var hash = CryptoJS.RIPEMD160(wordArray);
         */
        export const RIPEMD160: HasherHelper;
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param message The message to hash.
         * @param key The secret key.
         *
         * @return The HMAC.
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
         */
        export const HmacRIPEMD160: HmacHasherHelper;
        /**
         * Computes the Password-Based Key Derivation Function 2.
         *
         * @param password The password.
         * @param salt A salt.
         * @param cfg (Optional) The configuration options to use for this computation.
         *
         * @return The derived key.
         *
         * @example
         *
         *     var key = CryptoJS.PBKDF2(password, salt);
         *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
         *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
         */
        export function PBKDF2(password: WordArray | string, salt: WordArray | string, cfg?: KDFOption): WordArray;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
         */
        export const AES: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
         */
        export const DES: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
         */
        export const TripleDES: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
         */
        export const RC4: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
         */
        export const RC4Drop: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
         */
        export const Rabbit: CipherHelper;

        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
         */
        export const RabbitLegacy: CipherHelper;

        /**
         * Derives a key from a password.
         *
         * @param password The password.
         * @param salt A salt.
         * @param cfg (Optional) The configuration options to use for this computation.
         *
         * @return The derived key.
         *
         * @example
         *
         *     var key = CryptoJS.EvpKDF(password, salt);
         *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
         *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
         */
        export function EvpKDF(
            password: WordArray | string,
            salt: WordArray | string,
            cfg?: {
                keySize: number;
                hasher?: HasherStatic | undefined;
                iterations: number;
            },
        ): WordArray;
    }
}
