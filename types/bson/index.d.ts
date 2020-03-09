// Type definitions for bson 4.0
// Project: https://github.com/mongodb/js-bson
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
//                 Federico Caselli <https://github.com/CaselIT>
//                 Justin Grant <https://github.com/justingrant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

interface CommonSerializeOptions {
    /** {default:false}, the serializer will check if keys are valid. */
    checkKeys?: boolean;
    /** {default:false}, serialize the javascript functions. */
    serializeFunctions?: boolean;
    /** {default:true}, ignore undefined fields. */
    ignoreUndefined?: boolean;
}

export interface SerializeOptions extends CommonSerializeOptions {
    /** {default:1024*1024*17}, minimum size of the internal temporary serialization buffer. */
    minInternalBufferSize?: number;
}

export interface SerializeWithBufferAndIndexOptions extends CommonSerializeOptions {
    /** {default:0}, the index in the buffer where we wish to start serializing into. */
    index?: number;
}

export interface DeserializeOptions {
    /** {default:false}, evaluate functions in the BSON document scoped to the object deserialized. */
    evalFunctions?: boolean;
    /** {default:false}, cache evaluated functions for reuse. */
    cacheFunctions?: boolean;
    /** {default:false}, use a crc32 code for caching, otherwise use the string of the function. */
    cacheFunctionsCrc32?: boolean;
    /** {default:true}, when deserializing a Long will fit it into a Number if it's smaller than 53 bits. */
    promoteLongs?: boolean;
    /** {default:false}, deserialize Binary data directly into node.js Buffer object. */
    promoteBuffers?: boolean;
    /** {default:false}, when deserializing will promote BSON values to their Node.js closest equivalent types. */
    promoteValues?: boolean;
    /** {default:null}, allow to specify if there what fields we wish to return as unserialized raw buffer. */
    fieldsAsRaw?: { readonly [fieldName: string]: boolean };
    /** {default:false}, return BSON regular expressions as BSONRegExp instances. */
    bsonRegExp?: boolean;
    /** {default:false}, allows the buffer to be larger than the parsed BSON object. */
    allowObjectSmallerThanBufferSize?: boolean;
}

export interface CalculateObjectSizeOptions {
    /** {default:false}, serialize the javascript functions */
    serializeFunctions?: boolean;
    /** {default:true}, ignore undefined fields. */
    ignoreUndefined?: boolean;
}


/**
 * Serialize a Javascript object.
 * 
 * @param object The Javascript object to serialize.
 * @param options Serialize options.
 * @return The Buffer object containing the serialized object.
 */
export function serialize(object: any, options?: SerializeOptions): Buffer;

/**
 * Serialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization.
 * 
 * @param object The Javascript object to serialize.
 * @param buffer The Buffer you pre-allocated to store the serialized BSON object.
 * @param options Serialize options.
 * @returns The index pointing to the last written byte in the buffer
 */
export function serializeWithBufferAndIndex(object: any, buffer: Buffer, options?: SerializeWithBufferAndIndexOptions): number;

/**
 * Deserialize data as BSON.
 * 
 * @param buffer The buffer containing the serialized set of BSON documents.
 * @param options Deserialize options.
 * @returns The deserialized Javascript Object.
 */
export function deserialize(buffer: Buffer, options?: DeserializeOptions): any;

/**
 * Calculate the bson size for a passed in Javascript object.
 *
 * @param {Object} object the Javascript object to calculate the BSON byte size for.
 * @param {CalculateObjectSizeOptions} Options
 * @return {Number} returns the number of bytes the BSON object will take up.
 */
export function calculateObjectSize(object: any, options?: CalculateObjectSizeOptions): number;

/**
 * Deserialize stream data as BSON documents.
 * 
 * @param data The buffer containing the serialized set of BSON documents.
 * @param startIndex The start index in the data Buffer where the deserialization is to start.
 * @param numberOfDocuments Number of documents to deserialize
 * @param documents An array where to store the deserialized documents
 * @param docStartIndex The index in the documents array from where to start inserting documents
 * @param options Additional options used for the deserialization
 * @returns The next index in the buffer after deserialization of the `numberOfDocuments`
 */
export function deserializeStream(
    data: Buffer,
    startIndex: number,
    numberOfDocuments: number,
    documents: Array<any>,
    docStartIndex: number,
    options?: DeserializeOptions
): number;
  
/** A class representation of the BSON Binary type. */
export class Binary {

    static readonly SUBTYPE_DEFAULT: number;
    static readonly SUBTYPE_FUNCTION: number;
    static readonly SUBTYPE_BYTE_ARRAY: number;
    static readonly SUBTYPE_UUID_OLD: number;
    static readonly SUBTYPE_UUID: number;
    static readonly SUBTYPE_MD5: number;
    static readonly SUBTYPE_USER_DEFINED: number;

    /**
     * @param buffer A buffer object containing the binary data
     * @param subType Binary data subtype
     */
    constructor(buffer: Buffer, subType?: number);

    /** The underlying Buffer which stores the binary data. */
    readonly buffer: Buffer;
    /** Binary data subtype */
    readonly sub_type?: number;

    /** The length of the binary. */
    length(): number;
    /** Updates this binary with byte_value */
    put(byte_value: number | string): void;
    /** Reads length bytes starting at position. */
    read(position: number, length: number): Buffer;
    /** Returns the value of this binary as a string. */
    value(): string;
    /** Writes a buffer or string to the binary */
    write(buffer: Buffer | string, offset: number): void;
}

/** A class representation of the BSON Code type. */
export class Code {

    /**
     * @param code A string or function.
     * @param scope An optional scope for the function.
     */
    constructor(code: string | Function, scope?: any);

    readonly code: string | Function;
    readonly scope?: any;

}

/**
 * A class representation of the BSON DBRef type.
 */
export class DBRef {
    /**
     * @param namespace The collection name.
     * @param oid The reference ObjectId.
     * @param db Optional db name, if omitted the reference is local to the current db
     */
    constructor(namespace: string, oid: ObjectId, db?: string);
    namespace: string;
    oid: ObjectId;
    db?: string;
}

/** A class representation of the BSON Double type. */
export class Double {
    /**
     * @param value The number we want to represent as a double.
     */
    constructor(value: number);

    valueOf(): number;
}

/** A class representation of the BSON Int32 type. */
export class Int32 {
    /**
     * @param value The number we want to represent as an int32.
     */
    constructor(value: number);

    valueOf(): number;
}

/**
 * Base class for Long and Timestamp.
 * In original js-node@1.0.x code 'Timestamp' is a 100% copy-paste of 'Long'
 * with 'Long' replaced by 'Timestamp' (changed to inheritance in js-node@2.0.0)
 */
declare class LongLike<T> {

    /**
     * @param low The low (signed) 32 bits.
     * @param high The high (signed) 32 bits.
     */
    constructor(low: number, high: number);

    /** Returns the sum of `this` and the `other`. */
    add(other: T): T;
    /** Returns the bitwise-AND of `this` and the `other`. */
    and(other: T): T;
    /**
     * Compares `this` with the given `other`.
     * @returns 0 if they are the same, 1 if the this is greater, and -1 if the given one is greater.
     */
    compare(other: T): number;
    /** Returns `this` divided by the given `other`. */
    div(other: T): T;
    /** Return whether `this` equals the `other` */
    equals(other: T): boolean;
    /** Return the high 32-bits value. */
    getHighBits(): number;
    /** Return the low 32-bits value. */
    getLowBits(): number;
    /** Return the low unsigned 32-bits value. */
    getLowBitsUnsigned(): number;
    /** Returns the number of bits needed to represent the absolute value of `this`. */
    getNumBitsAbs(): number;
    /** Return whether `this` is greater than the `other`. */
    greaterThan(other: T): boolean;
    /** Return whether `this` is greater than or equal to the `other`. */
    greaterThanOrEqual(other: T): boolean;
    /** Return whether `this` value is negative. */
    isNegative(): boolean;
    /** Return whether `this` value is odd. */
    isOdd(): boolean;
    /** Return whether `this` value is zero. */
    isZero(): boolean;
    /** Return whether `this` is less than the `other`. */
    lessThan(other: T): boolean;
    /** Return whether `this` is less than or equal to the `other`. */
    lessThanOrEqual(other: T): boolean;
    /** Returns `this` modulo the given `other`. */
    modulo(other: T): T;
    /** Returns the product of `this` and the given `other`. */
    multiply(other: T): T;
    /** The negation of this value. */
    negate(): T;
    /** The bitwise-NOT of this value. */
    not(): T;
    /** Return whether `this` does not equal to the `other`. */
    notEquals(other: T): boolean;
    /** Returns the bitwise-OR of `this` and the given `other`. */
    or(other: T): T;
    /**
     * Returns `this` with bits shifted to the left by the given amount.
     * @param numBits The number of bits by which to shift.
     */
    shiftLeft(numBits: number): T;
    /**
     * Returns `this` with bits shifted to the right by the given amount.
     * @param numBits The number of bits by which to shift.
     */
    shiftRight(numBits: number): T;
    /**
     * Returns `this` with bits shifted to the right by the given amount, with the new top bits matching the current sign bit.
     * @param numBits The number of bits by which to shift.
     */
    shiftRightUnsigned(numBits: number): T;
    /** Returns the difference of `this` and the given `other`. */
    subtract(other: T): T;
    /** Return the int value (low 32 bits). */
    toInt(): number;
    /** Return the JSON value. */
    toJSON(): string;
    /** Returns closest floating-point representation to `this` value */
    toNumber(): number;
    /**
     * Return as a string
     * @param radix the radix in which the text should be written. {default:10}
     */
    toString(radix?: number): string;
    /** Returns the bitwise-XOR of `this` and the given `other`. */
    xor(other: T): T;

}

/**
 * A class representation of the BSON Long type, a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "Long". This
 * implementation is derived from LongLib in GWT.
 */
export class Long extends LongLike<Long> {

    static readonly MAX_VALUE: Long;
    static readonly MIN_VALUE: Long;
    static readonly NEG_ONE: Long;
    static readonly ONE: Long;
    static readonly ZERO: Long;

    /** Returns a Long representing the given (32-bit) integer value. */
    static fromInt(i: number): Long;
    /** Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned. */
    static fromNumber(n: number): Long;
    /**
     * Returns a Long representing the 64-bit integer that comes by concatenating the given high and low bits. Each is assumed to use 32 bits.
     * @param lowBits The low 32-bits.
     * @param highBits The high 32-bits.
     */
    static fromBits(lowBits: number, highBits: number): Long;
    /**
     * Returns a Long representation of the given string
     * @param opt_radix The radix in which the text is written. {default:10}
     */
    static fromString(s: string, opt_radix?: number): Long;

}

/** A class representation of the BSON Decimal128 type. */
export class Decimal128 {

    /** Create a Decimal128 instance from a string representation. */
    static fromString(s: string): Decimal128;

    /**
     * @param bytes A buffer containing the raw Decimal128 bytes.
     */
    constructor(bytes: Buffer);

    /** A buffer containing the raw Decimal128 bytes. */
    readonly bytes: Buffer;

    toJSON(): string;
    toString(): string;
}

/** A class representation of the BSON MaxKey type. */
export class MaxKey {
    constructor();
}

/** A class representation of the BSON MinKey type. */
export class MinKey {
    constructor();
}

/** A class representation of the BSON ObjectId type. */
export class ObjectId {
    /**
     * Create a new ObjectId instance
     * @param {(string|number|ObjectId)} id Can be a 24 byte hex string, 12 byte binary string or a Number.
     */
    constructor(id?: string | number | ObjectId);
    /** The generation time of this ObjectId instance */
    generationTime: number;
    /** If true cache the hex string representation of ObjectId */
    static cacheHexString?: boolean;
    /**
     * Creates an ObjectId from a hex string representation of an ObjectId.
     * @param {string} hexString create a ObjectId from a passed in 24 byte hexstring.
     * @return {ObjectId} return the created ObjectId
     */
    static createFromHexString(hexString: string): ObjectId;
    /**
     * Creates an ObjectId from a second based number, with the rest of the ObjectId zeroed out. Used for comparisons or sorting the ObjectId.
     * @param {number} time an integer number representing a number of seconds.
     * @return {ObjectId} return the created ObjectId
     */
    static createFromTime(time: number): ObjectId;
    /**
     * Checks if a value is a valid bson ObjectId
     *
     * @return {boolean} return true if the value is a valid bson ObjectId, return false otherwise.
     */
    static isValid(id: string | number | ObjectId): boolean;
    /**
     * Compares the equality of this ObjectId with `otherID`.
     * @param {ObjectId|string} otherID ObjectId instance to compare against.
     * @return {boolean} the result of comparing two ObjectId's
     */
    equals(otherID: ObjectId | string): boolean;
    /**
     * Generate a 12 byte id string used in ObjectId's
     * @param {number} time optional parameter allowing to pass in a second based timestamp.
     * @return {string} return the 12 byte id binary string.
     */
    static generate(time?: number): Buffer;
    /**
     * Returns the generation date (accurate up to the second) that this ID was generated.
     * @return {Date} the generation date
     */
    getTimestamp(): Date;
    /**
     * Return the ObjectId id as a 24 byte hex string representation
     * @return {string} return the 24 byte hex string representation.
     */
    toHexString(): string;
}

/**
 * ObjectID (with capital "D") is deprecated. Use ObjectId (lowercase "d") instead. 
 * @deprecated
 */
export { ObjectId as ObjectID };

/** A class representation of the BSON RegExp type. */
export class BSONRegExp {

    constructor(pattern: string, options: string);

    readonly pattern: string;
    readonly options: string;

}

/**
 * A class representation of the BSON Symbol type.
 * @deprecated
 */
export class Symbol {

    constructor(value: string);

    /** Access the wrapped string value. */
    valueOf(): string;

}

/** A class representation of the BSON Timestamp type. */
export class Timestamp extends LongLike<Timestamp> {

    static readonly MAX_VALUE: Timestamp;
    static readonly MIN_VALUE: Timestamp;
    static readonly NEG_ONE: Timestamp;
    static readonly ONE: Timestamp;
    static readonly ZERO: Timestamp;

    /** Returns a Timestamp represented by the given (32-bit) integer value */
    static fromInt(value: number): Timestamp;
    /** Returns a Timestamp representing the given number value, provided that it is a finite number. */
    static fromNumber(value: number): Timestamp;
    /**
     * Returns a Timestamp for the given high and low bits. Each is assumed to use 32 bits.
     * @param lowBits The low 32-bits.
     * @param highBits The high 32-bits.
     */
    static fromBits(lowBits: number, highBits: number): Timestamp;
    /**
     * Returns a Timestamp from the given string.
     * @param opt_radix The radix in which the text is written. {default:10}
     */
    static fromString(str: string, opt_radix?: number): Timestamp;

}

/**
 * Functions for serializing JavaScript objects into Mongodb Extended JSON (EJSON).
 * @namespace EJSON
 */
export namespace EJSON {

    /**
     * Parse an Extended JSON string, constructing the JavaScript value or object described by that
     * string.
     *
     * @memberof EJSON
     * @param {string} text
     * @param {object} [options] Optional settings
     * @param {boolean} [options.relaxed=true] Attempt to return native JS types where possible, rather than BSON types (if true)
     * @return {object}
     *
     * @example
     * const { EJSON } = require('bson');
     * const text = '{ "int32": { "$numberInt": "10" } }';
     *
     * // prints { int32: { [String: '10'] _bsontype: 'Int32', value: '10' } }
     * console.log(EJSON.parse(text, { relaxed: false }));
     *
     * // prints { int32: 10 }
     * console.log(EJSON.parse(text));
     */
    export function parse(text: string, options?: {relaxed?: boolean;}): {};

    /**
     * Deserializes an Extended JSON object into a plain JavaScript object with native/BSON types
     *
     * @memberof EJSON
     * @param {object} ejson The Extended JSON object to deserialize
     * @param {object} [options] Optional settings passed to the parse method
     * @return {object}
     */
    export function deserialize(ejson: {}, options?: {relaxed?: boolean;}): {};

    /**
     * Serializes an object to an Extended JSON string, and reparse it as a JavaScript object.
     *
     * @memberof EJSON
     * @param {object} bson The object to serialize
     * @param {object} [options] Optional settings passed to the `stringify` function
     * @return {object}
     */
    export function serialize(bson: {}, options?: {relaxed?: boolean;}): {};

    /**
     * Converts a BSON document to an Extended JSON string, optionally replacing values if a replacer
     * function is specified or optionally including only the specified properties if a replacer array
     * is specified.
     *
     * @memberof EJSON
     * @param {object} value The value to convert to extended JSON
     * @param {function|array} [replacer] A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string
     * @param {string|number} [space] A String or Number object that's used to insert white space into the output JSON string for readability purposes.
     * @param {object} [options] Optional settings.
     * @param {boolean} [options.relaxed=true] Enabled Extended JSON's `relaxed` mode
     * @returns {string}
     *
     * @example
     * const { EJSON, Int32 } = require('bson');
     * const doc = { int32: new Int32(10) };
     *
     * // prints '{"int32":{"$numberInt":"10"}}'
     * console.log(EJSON.stringify(doc, { relaxed: false }));
     *
     * // prints '{"int32":10}'
     * console.log(EJSON.stringify(doc));
     */
    export function stringify(
        value: {}, 
        options?: {relaxed?: boolean;}
    ): string;

    /**
     * Converts a BSON document to an Extended JSON string, optionally replacing values if a replacer
     * function is specified or optionally including only the specified properties if a replacer array
     * is specified.
     *
     * @memberof EJSON
     * @param {object} value The value to convert to extended JSON
     * @param {function|array} [replacer] A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string
     * @param {string|number} [space] A String or Number object that's used to insert white space into the output JSON string for readability purposes.
     * @param {object} [options] Optional settings.
     * @param {boolean} [options.relaxed=true] Enabled Extended JSON's `relaxed` mode
     * @returns {string}
     *
     * @example
     * const { EJSON, Int32 } = require('bson');
     * const doc = { int32: new Int32(10) };
     *
     * // prints '{"int32":{"$numberInt":"10"}}'
     * console.log(EJSON.stringify(doc, { relaxed: false }));
     *
     * // prints '{"int32":10}'
     * console.log(EJSON.stringify(doc));
     */

    export function stringify(
        value: {}, 
        replacer: ((key: string, value: any) => any) | Array<string|number>, 
        options?: {relaxed?: boolean;}
    ): string;
    /**
     * Converts a BSON document to an Extended JSON string, optionally replacing values if a replacer
     * function is specified or optionally including only the specified properties if a replacer array
     * is specified.
     *
     * @memberof EJSON
     * @param {object} value The value to convert to extended JSON
     * @param {function|array} [replacer] A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string
     * @param {string|number} [space] A String or Number object that's used to insert white space into the output JSON string for readability purposes.
     * @param {object} [options] Optional settings.
     * @param {boolean} [options.relaxed=true] Enabled Extended JSON's `relaxed` mode
     * @returns {string}
     *
     * @example
     * const { EJSON, Int32 } = require('bson');
     * const doc = { int32: new Int32(10) };
     *
     * // prints '{"int32":{"$numberInt":"10"}}'
     * console.log(EJSON.stringify(doc, { relaxed: false }));
     *
     * // prints '{"int32":10}'
     * console.log(EJSON.stringify(doc));
     */
    export function stringify(
        value: {}, 
        replacer: ((key: string, value: any) => any) | Array<string | number>, 
        indents?: string | number, 
        options?: {relaxed?: boolean;}
        ): string;  
}
