// Type definitions for pvutils
// Project: https://github.com/PeculiarVentures/pvutils
// Definitions by: Stepan Miroshin <https://github.com/microshine>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

export = PvUtils

declare namespace PvUtils {
    /**
     * Making UTC date from local date
     * @param {Date} date Date to convert from
     * @returns {Date}
     */
    function getUTCDate(date: Date): Date;

    /**
     * Get value for input parameters, or set a default value
     * @param {Object} parameters
     * @param {string} name
     * @param defaultValue
     */
    function getParametersValue<T>(parameters: any, name: string, defaultValue?: T): T;

    /**
     * Converts "ArrayBuffer" into a hexdecimal string
     * @param {ArrayBuffer} inputBuffer
     * @param {number} [inputOffset=0]
     * @param {number} [inputLength=inputBuffer.byteLength]
     * @returns {string}
     */
    function bufferToHexCodes(inputBuffer: ArrayBuffer, inputOffset?: number, inputLength?: number): string;

    /**
     * Check input "ArrayBuffer" for common functions
     * @param {LocalBaseBlock} baseBlock
     * @param {ArrayBuffer} inputBuffer
     * @param {number} inputOffset
     * @param {number} inputLength
     * @returns {boolean}
     */
    function checkBufferParams(baseBlock: any, inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): boolean;

    /**
     * Convert number from 2^base to 2^10
     * @param {Uint8Array} inputBuffer
     * @param {number} inputBase
     * @returns {number}
     */
    function utilFromBase(inputBuffer: Uint8Array, inputBase: number): number;

    /**
     * Convert number from 2^10 to 2^base
     * @param {!number} value The number to convert
     * @param {!number} base The base for 2^base
     * @param {number} [reserved=0] Pre-defined number of bytes in output array (-1 = limited by function itself)
     * @returns {ArrayBuffer}
     */
    function utilToBase(value: number, base: number, reserved?: number): ArrayBuffer;

    /**
     * Concatenate two ArrayBuffers
     * @param {...ArrayBuffer[]} buffers First ArrayBuffer (first part of concatenated array)
     * @returns {ArrayBuffer}
     */
    function utilConcatBuf(...buf: ArrayBuffer[]): ArrayBuffer;

    /**
     * Decoding of "two complement" values
     * The function must be called in scope of instance of "hexBlock" class ("valueHex" and "warnings" properties must be present)
     * @returns {number}
     */
    function utilDecodeTC(): number;

    /**
     * Encode integer value to "two complement" format
     * @param {number} value Value to encode
     * @returns {ArrayBuffer}
     */
    function utilEncodeTC(value: number): ArrayBuffer;

    /**
     * Compare two array buffers
     * @param {!ArrayBuffer} inputBuffer1
     * @param {!ArrayBuffer} inputBuffer2
     * @returns {boolean}
     */
    function isEqualBuffer(inputBuffer1: ArrayBuffer, inputBuffer2: ArrayBuffer): boolean;

    /**
     * Pad input number with leade "0" if needed
     * @param {number} inputNumber
     * @param {number} fullLength
     * @returns {string}
     */
    function padNumber(inputNumber: number, fullLength: number): string;

    /**
     * Encode string into BASE64 (or "base64url")
     * @param {string} input
     * @param {boolean} [useUrlTemplate = false] useUrlTemplate If "true" then output would be encoded using "base64url"
     * @param {boolean} [skipPadding = false] skipPadding Skip BASE-64 padding or not
     * @returns {string}
     */
    function toBase64(input: string, useUrlTemplate?: boolean, skipPadding?: boolean): string;

    /**
     * Decode string from BASE64 (or "base64url")
     * @param {string} input
     * @param {boolean} [useUrlTemplate=false] If "true" then output would be encoded using "base64url"
     * @param {boolean} [cutTailZeros=false] If "true" then cut tailing zeroz from function result
     * @returns {string}
     */
    function fromBase64(input: string, useUrlTemplate?: boolean, cutTailZeros?: boolean): string;

    function arrayBufferToString(buffer: BufferSource): string;
    function stringToArrayBuffer(str: string): ArrayBuffer;

    /**
     * Get nearest to input length power of 2
     * @param {number} length Current length of existing array
     * @returns {number}
     */
    function nearestPowerOf2(length: number): number;
}
