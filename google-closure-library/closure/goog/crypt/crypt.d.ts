declare module goog {
    function require(name: 'goog.crypt'): typeof goog.crypt;
}

declare module goog.crypt {

    /**
     * Turns a string into an array of bytes; a "byte" being a JS number in the
     * range 0-255.
     * @param {string} str String value to arrify.
     * @return {!Array<number>} Array of numbers corresponding to the
     *     UCS character codes of each character in str.
     */
    function stringToByteArray(str: string): Array<number>;

    /**
     * Turns an array of numbers into the string given by the concatenation of the
     * characters to which the numbers correspond.
     * @param {Array<number>} bytes Array of numbers representing characters.
     * @return {string} Stringification of the array.
     */
    function byteArrayToString(bytes: Array<number>): string;

    /**
     * Turns an array of numbers into the hex string given by the concatenation of
     * the hex values to which the numbers correspond.
     * @param {Uint8Array|Array<number>} array Array of numbers representing
     *     characters.
     * @return {string} Hex string.
     */
    function byteArrayToHex(array: Uint8Array|Array<number>): string;

    /**
     * Converts a hex string into an integer array.
     * @param {string} hexString Hex string of 16-bit integers (two characters
     *     per integer).
     * @return {!Array<number>} Array of {0,255} integers for the given string.
     */
    function hexToByteArray(hexString: string): Array<number>;

    /**
     * Converts a JS string to a UTF-8 "byte" array.
     * @param {string} str 16-bit unicode string.
     * @return {!Array<number>} UTF-8 byte array.
     */
    function stringToUtf8ByteArray(str: string): Array<number>;

    /**
     * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.
     * @param {Uint8Array|Array<number>} bytes UTF-8 byte array.
     * @return {string} 16-bit Unicode string.
     */
    function utf8ByteArrayToString(bytes: Uint8Array|Array<number>): string;

    /**
     * XOR two byte arrays.
     * @param {!ArrayBufferView|!Array<number>} bytes1 Byte array 1.
     * @param {!ArrayBufferView|!Array<number>} bytes2 Byte array 2.
     * @return {!Array<number>} Resulting XOR of the two byte arrays.
     */
    function xorByteArray(bytes1: ArrayBufferView|Array<number>, bytes2: ArrayBufferView|Array<number>): Array<number>;
}
