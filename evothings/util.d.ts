// Type definitions for evothings 1.2
// Project: https://github.com/evothings/evothings-examples/tree/master/resources/libs/evothings
// Definitions by: Tijmen van Gulik <https://github.com/tijmenvangulik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module evothings {

    export module util {

        /**
         * Interpret byte buffer as little endian 8 bit integer.
         * Returns converted number.
         * @param {ArrayBuffer} data - Input buffer.
         * @param {number} offset - Start of data.
         * @return Converted number.
         * @public
         */
        export function littleEndianToInt8(data:ArrayBuffer, offset:number):number;

        /**
         * Interpret byte buffer as unsigned little endian 8 bit integer.
         * Returns converted number.
         * @param {ArrayBuffer} data - Input buffer.
         * @param {number} offset - Start of data.
         * @return Converted number.
         * @public
         */
        export function littleEndianToUint8(data:ArrayBuffer, offset:number):number;

        /**
         * Interpret byte buffer as little endian 16 bit integer.
         * Returns converted number.
         * @param {ArrayBuffer} data - Input buffer.
         * @param {number} offset - Start of data.
         * @return Converted number.
         * @public
         */
        export function littleEndianToInt16(data:ArrayBuffer, offset:number):number;

        /**
         * Interpret byte buffer as unsigned little endian 16 bit integer.
         * Returns converted number.
         * @param {ArrayBuffer} data - Input buffer.
         * @param {number} offset - Start of data.
         * @return Converted number.
         * @public
         */
        export function littleEndianToUint16(data:ArrayBuffer, offset:number):number;

        /**
         * Interpret byte buffer as unsigned little endian 32 bit integer.
         * Returns converted number.
         * @param {ArrayBuffer} data - Input buffer.
         * @param {number} offset - Start of data.
         * @return Converted number.
         * @public
         */
        export function littleEndianToUint32(data:ArrayBuffer, offset:number):number;

        /**
         * Interpret byte buffer as unsigned little endian 32 bit integer.
         * Returns converted number.
         * @param {ArrayBuffer} data - Input buffer.
         * @param {number} offset - Start of data.
         * @return Converted number.
         * @public
         */
        export function littleEndianToUint24(data:ArrayBuffer, offset:number):number;
        /**

         /**
         * Decodes a Base64 string. Returns a Uint8Array.
         * nBlocksSize is optional.
         * @param {String} sBase64
         * @param {int} nBlocksSize
         * @return {Uint8Array}
         * @public
         */

        /**
         * Interpret byte buffer as signed big endian 16 bit integer.
         * Returns converted number.
         * @param {ArrayBuffer} data - Input buffer.
         * @param {number} offset - Start of data.
         * @return Converted number.
         * @public
         */
        export function bigEndianToInt16 (data:ArrayBuffer, offset:number)

        /**
         * Interpret byte buffer as unsigned big endian 16 bit integer.
         * Returns converted number.
         * @param {ArrayBuffer} data - Input buffer.
         * @param {number} offset - Start of data.
         * @return Converted number.
         * @public
         */
        export function bigEndianToUint16 (data:ArrayBuffer, offset:number)

        /**
         * Interpret byte buffer as unsigned big endian 32 bit integer.
         * Returns converted number.
         * @param {ArrayBuffer} data - Input buffer.
         * @param {number} offset - Start of data.
         * @return Converted number.
         * @public
         */
        export function bigEndianToUint32 (data : ArrayBuffer, offset:number)


        export function base64DecToArr(sBase64:string, nBlocksSize:number):Uint8Array;

        /**
         * Returns the integer i in hexadecimal string form,
         * with leading zeroes, such that
         * the resulting string is at least byteCount*2 characters long.
         * @param {int} i
         * @param {int} byteCount
         * @public
         */
        export function toHexString(i : number, byteCount : number) : string;

        /**
         * Takes a ArrayBuffer or TypedArray and returns its hexadecimal representation.
         * No spaces or linebreaks.
         * @param data
         * @public
         */
        export function typedArrayToHexString(data : ArrayBuffer) : string;


    }
}