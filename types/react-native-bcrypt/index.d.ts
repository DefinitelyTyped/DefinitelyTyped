/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

/**
 * *All the doc are same as original doc
 */
interface ReactNativeBcrypt {
    /**
     * Sets the pseudo random number generator to use as a fallback if neither node's `crypto` module nor the Web Crypto
     *  API is available. Please note: It is highly important that the PRNG used is cryptographically secure and that it
     *  is seeded properly!
     * @param random Function taking the number of bytes to generate as its
     *  sole argument, returning the corresponding array of cryptographically secure random byte values.
     * @see https://nodejs.org/api/crypto.html
     * @see http://www.w3.org/TR/WebCryptoAPI/
     */
    setRandomFallback(random?: (number: number) => number[]): void;

    /**
     * Synchronously generates a salt.
     * @param  rounds Number of rounds to use, defaults to 10 if omitted
     * @param  seed_length Not supported.
     * @returns Resulting salt
     * @throws If a random fallback is required but not set
     */
    genSaltSync(round?: number, seed_length?: number): string;

    /**
     * Asynchronously generates a salt.
     * @param rounds Number of rounds to use, defaults to 10 if omitted
     * @param seed_length Not supported.
     * @param callback Callback receiving the error, if any, and the resulting salt
     */
    genSalt(
        rounds?: number | ((error: Error, string?: string) => any),
        seed_length?: number | ((error: Error, string?: string) => any),
        callback?: (error: Error, string?: string) => any,
    ): void;

    /**
     * Synchronously generates a hash for the given string.
     * @param s String to hash
     * @param salt Salt length to generate or salt to use, default to 10
     * @returns Resulting hash
     */
    hashSync(s: string, salt?: number | string): string;

    /**
     * Asynchronously generates a hash for the given string.
     * @param s String to hash
     * @param salt Salt length to generate or salt to use
     * @param callback Callback receiving the error, if any, and the resulting hash
     * @param progressCallback Callback successively called with the percentage of rounds completed
     *  (0.0 - 1.0), maximally once per `MAX_EXECUTION_TIME = 100` ms.
     */
    hash(
        s: string,
        salt: number | string,
        callback: (error: Error, string?: string) => any,
        progressCallback?: (number: number) => void,
    ): void;

    /**
     * Synchronously tests a string against a hash.
     * @param s String to compare
     * @param hash Hash to test against
     * @returns true if matching, otherwise false
     */
    compareSync(s: string, hash: string): boolean;

    /**
     * Asynchronously compares the given data against the given hash.
     * @param s Data to compare
     * @param hash Data to be compared to
     * @param callback Callback receiving the error, if any, otherwise the result
     * @param progressCallback Callback successively called with the percentage of rounds completed
     *  (0.0 - 1.0), maximally once per `MAX_EXECUTION_TIME = 100` ms.
     */
    compare(
        s: string,
        hash: string,
        callback: (error: Error, boolean: boolean) => any,
        progressCallback?: (number: number) => any,
    ): void;

    /**
     * Gets the number of rounds used to encrypt the specified hash.
     * @param hash Hash to extract the used number of rounds from
     * @returns Number of rounds used
     */
    getRounds(hash: string): number;

    /**
     * Gets the salt portion from a hash. Does not validate the hash.
     * @param hash Hash to extract the salt from
     * @returns Extracted salt part
     */
    getSalt(hash: string): string;

    /**
     * Encodes a byte array to base64 with up to len bytes of input, using the custom bcrypt alphabet.
     * @param b Byte array
     * @param len Maximum input length
     */
    encodeBase64(b: number[], len: number): string;

    /**
     * Decodes a base64 encoded string to up to len bytes of output, using the custom bcrypt alphabet.
     * @param s String to decode
     * @param len Maximum output length
     */
    decodeBase64(s: string, len: number): number[];
}

declare const reactNativeBcrypt: ReactNativeBcrypt;
export default reactNativeBcrypt;
