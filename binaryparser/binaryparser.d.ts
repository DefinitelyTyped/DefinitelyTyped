// Type definitions for BinaryParser
// Project: http://jsfromhell.com/classes/binary-parser
// Definitions by: Matěj Pokorný <http://piranhagreg.cz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * This class is able to serialize and unserialize binary data, so you can read files generated with C, pascal, etc as well as generate such data.
 * It's also able to handle the byte order (big/little endian) and supports the following types: signed integer (small 8 bits, short 16 bits, int 32 bits), unsigned integer (byte 8 bits, word 16 bits, dword 32 bits) and floating point (IEEE754 float 32 bits and double 64 bits).
 */
interface BinaryParser {
	/**
	 * Boolean if true, the class will assume the bigEndian format for the input and output, otherwise, it will assume the little endian format.
	 */
	bigEndian: boolean;

	/**
	 *  Boolean if true, when number=>binary conversion error occur an exception will be raised (which can be caught through a "try..except" block)
	 */
	allowExceptions: boolean;

	/**
	 * Decodes a string containing the binary representation of a number in the IEEE-754 pattern and returns the number or the following special values: NaN, +Infinity, -Infinity.
	 *
	 * @param data string containing the binary representation of the number (must contain at least "ceil((exponentBits + precisionBits + 1) / 8)" bytes)
	 * @param precisionBits amount of bits that specifies the precision/mantisse
	 * @param exponentBits amount of bits that specifies the exponent
	 */
	decodeFloat(data: string, precisionBits: number, exponentBits: number): number

	/**
	 * Encodes a number into the IEEE-754 pattern and returns the binary representation of it in a string containing "ceil((exponentBits + precisionBits + 1) / 8)" bytes.
	 *
	 * @param number number to be converted
	 * @param precisionBits amount of bits that specifies the precision/mantisse
	 * @param exponentBits amount of bits that specifies the exponent
	 */
	encodeFloat(number: number, precisionBits: number, exponentBits: number): string

	/**
	 * Decodes a string containing binary data and returns the number that it represents.
	 *
	 * @param data string containing the binary representation of the number (must contain at least "ceil(bits / 8)" bytes)
	 * @param bits amount of bits that specifies the quantity of numbers that can be represented
	 * @param signed indicates if the number must be decoded with signal or without signal
	 */
	decodeInt(data: string, bits: number, signed: boolean): number

	/**
	 * Encodes an integer number and returns it's binary representation on a string containing "ceil(bits / 8)" bytes.
	 *
	 * @param number number to be converted
	 * @param bits amount of bits that specifies the quantity of numbers that can be represented
	 * @param signed indicates if the number must be encoded with signal or without signal
	 */
	encodeInt(number: number, bits: number, signed: boolean): string

	/**
	 * Returns a number or a special value (NaN, +Infinity, -Infinity).
	 *
	 * @param data string containing at least 4 bytes
	 */
	toFloat(data: string): number

	/**
	 * Returns the binary representation of a number in a string, the method can raise exceptions if the property "allowExceptions" is true and the number is an special value (NaN, +Infinity, -Infinity) or if it can't be represented (overflow, underflow).
	 *
	 * @param number number to be converted to binary
	 */
	fromFloat(number: number): string

	/**
	 * Returns a number or a special value (NaN, +Infinity, -Infinity).
	 *
	 * @param data string containing at least 8 bytes
	 */
	toDouble(data: string): number

	/**
	 * Returns the binary representation of a number in a string, the method can raise exceptions if the property "allowExceptions" is true and the number is an special value (NaN, +Infinity, -Infinity) or if it can't be represented (overflow, underflow).
	 *
	 * @param number number to be converted to binary
	 */
	fromDouble(number: number): string

	/**
	 * Receives a string and returns its integer value with signal.
	 *
	 * @param data string containing at least 1 bytes
	 */
	toSmall(data: string): number

	/**
	 * Receives an integer and returns its binary representation in a string with 1 byte, the method can raise an exception if the number is too big to be represented and the property "allowExceptions" is true.
	 *
	 * @param number number to be converted to binary
	 */
	fromSmall(number: number): string

	/**
	 * Receives a string and returns its integer value without signal.
	 *
	 * @param data string containing at least 1 bytes
	 */
	toByte(data: string): number

	/**
	 * Receives an integer and returns its binary representation in a string with 1 byte, the method can raise an exception if the number is too big to be represented and the property "allowExceptions" is true.
	 *
	 * @param number number to be converted to binary, the class ignores if the number is negative or not (in the two's complement, "-1" is represented in the same way as "255")
	 */
	fromByte(number: number): string

	/**
	 * Receives a string and returns its integer value with signal.
	 *
	 * @param data string containing at least 2 bytes
	 */
	toShort(data: string): number

	/**
	 * Receives an integer and returns its binary representation in a string with 2 bytes, the method can raise an exception if the number is too big to be represented and the property "allowExceptions" is true.
	 *
	 * @param number number to be converted to binary
	 */
	fromShort(number: number): string

	/**
	 * Receives a string and returns its integer value without signal.
	 *
	 * @param data string containing at least 2 bytes
	 */
	toWord(data: string): number

	/**
	 * Receives an integer and returns its binary representation in a string with 2 bytes, the method can raise an exception if the number is too big to be represented and the property "allowExceptions" is true.
	 *
	 * @param number number to be converted to binary, the class ignores if the number is negative or not (in the two's complement, "-1" is represented in the same way as "255")
	 */
	fromWord(number: number): string

	/**
	 * Receives a string and returns its integer value with signal.
	 *
	 * @param data string containing at least 4 bytes
	 */
	toInt(data: string): number

	/**
	 * Receives an integer and returns its binary representation in a string with 4 bytes, the method can raise an exception if the number is too big to be represented and the property "allowExceptions" is true.
	 *
	 * @param number number to be converted to binary
	 */
	fromInt(number: number): string

	/**
	 * Receives a string and returns its integer value without signal.
	 *
	 * @param data string containing at least 4 bytes
	 */
	toDWord(data: string): number

	/**
	 * Receives an integer and returns its binary representation in a string with 4 bytes, the method can raise an exception if the number is too big to be represented and the property "allowExceptions" is true.
	 *
	 * @param number number to be converted to binary, the class ignores if the number is negative or not (in the two's complement, "-1" is represented in the same way as "255")
	 */
	fromDWord(number: number): string
}

declare var BinaryParser: {
	/**
	 * Generates an instance of BinaryParser.
	 */
	new (): BinaryParser

	/**
	 * Generates an instance of BinaryParser.
	 *
	 * @param bigEndian if true, the class will assume the bigEndian format for the input and output, otherwise, it will assume the little endian format.
	 */
	new (bigEndian: boolean): BinaryParser

	/**
	 * Generates an instance of BinaryParser.
	 *
	 * @param bigEndian if true, the class will assume the bigEndian format for the input and output, otherwise, it will assume the little endian format.
	 * @param allowExceptions if true, when number=>binary conversion error occur an exception will be raised (which can be caught through a "try..except" block)
	 */
	new (bigEndian: boolean, allowExceptions: boolean): BinaryParser
}
