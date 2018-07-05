// Type definitions for bson 1.0.4
// Project: https://github.com/mongodb/js-bson
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
//                 Federico Caselli <https://github.com/CaselIT>
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
}

export interface CalculateObjectSizeOptions {
    /** {default:false}, serialize the javascript functions */
    serializeFunctions?: boolean;
    /** {default:true}, ignore undefined fields. */
    ignoreUndefined?: boolean;
}

export class BSON {

    /**
     * Serialize a Javascript object.
     * 
     * @param object The Javascript object to serialize.
     * @param options Serialize options.
     * @return The Buffer object containing the serialized object.
     */
    serialize(object: any, options?: SerializeOptions): Buffer;

    /**
     * Serialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization.
     * 
     * @param object The Javascript object to serialize.
     * @param buffer The Buffer you pre-allocated to store the serialized BSON object.
     * @param options Serialize options.
     * @returns The index pointing to the last written byte in the buffer
     */
    serializeWithBufferAndIndex(object: any, buffer: Buffer, options?: SerializeWithBufferAndIndexOptions): number;

    /**
     * Deserialize data as BSON.
     * 
     * @param buffer The buffer containing the serialized set of BSON documents.
     * @param options Deserialize options.
     * @returns The deserialized Javascript Object.
     */
    deserialize(buffer: Buffer, options?: DeserializeOptions): any;

    /**
     * Calculate the bson size for a passed in Javascript object.
     *
     * @param {Object} object the Javascript object to calculate the BSON byte size for.
     * @param {CalculateObjectSizeOptions} Options
     * @return {Number} returns the number of bytes the BSON object will take up.
     */
    calculateObjectSize(object: any, options?: CalculateObjectSizeOptions): number;

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
    deserializeStream(
        data: Buffer,
        startIndex: number,
        numberOfDocuments: number,
        documents: Array<any>,
        docStartIndex: number,
        options?: DeserializeOptions
    ): number;

}

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
}

/**
 * A class representation of the BSON DBRef type.
 * @deprecated
 */
export class DBRef {
    /**
     * @param namespace The collection name.
     * @param oid The reference ObjectID.
     * @param db Optional db name, if omitted the reference is local to the current db
     */
    constructor(namespace: string, oid: ObjectID, db?: string);

    namespace: string;
    oid: ObjectID;
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

export class Long {
    static MAX_VALUE: Long;
    static MIN_VALUE: Long;
    static NEG_ONE: Long;
    static ONE: Long;
    static ZERO: Long;

    static fromInt(i: number): Long;
    static fromNumber(n: number): Long;
    static fromBits(lowBits: number, highBits: number): Long;
    static fromString(s: string, opt_radix?: number): Long;

    constructor(low: number, high: number);

    add(other: Long): Long;
    and(other: Long): Long;
    compare(other: Long): number;
    div(other: Long): Long;
    equals(other: Long): boolean;
    getHighBits(): number;
    getLowBits(): number;
    getLowBitsUnsigned(): number;
    getNumBitsAbs(): number;
    greaterThan(other: Long): number;
    greaterThanOrEqual(other: Long): number;
    isNegative(): boolean;
    isOdd(): boolean;
    isZero(): boolean;
    lessThan(other: Long): boolean;
    lessThanOrEqual(other: Long): boolean;
    modulo(other: Long): Long;
    multiply(other: Long): Long;
    negate(): Long;
    not(): Long;
    notEquals(other: Long): boolean;
    or(other: Long): Long;
    shiftLeft(other: number): Long;
    shiftRight(other: number): Long;
    shiftRightUnsigned(other: number): Long;
    subtract(other: Long): Long;
    toInt(): number;
    toJSON(): string;
    toNumber(): number;
    toString(radix?: number): string;
    xor(other: Long): Long;
}

/** A class representation of the BSON Decimal128 type. */
export class Decimal128 {

    /** Create a Decimal128 instance from a string representation. */
    static fromString(s: string): Decimal128;

    /**
     * @param bytes A buffer containing the raw Decimal128 bytes.
     */
    constructor(bytes: Buffer);

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

/** A class representation of the BSON ObjectID type. */
export class ObjectID {
    /**
     * Create a new ObjectID instance
     * @param {(string|number|ObjectID)} id Can be a 24 byte hex string, 12 byte binary string or a Number.
     */
    constructor(id?: string | number | ObjectID);
    /** The generation time of this ObjectID instance */
    generationTime: number;
    /** If true cache the hex string representation of ObjectID */
    static cacheHexString?: boolean;
    /**
     * Creates an ObjectID from a hex string representation of an ObjectID.
     * @param {string} hexString create a ObjectID from a passed in 24 byte hexstring.
     * @return {ObjectID} return the created ObjectID
     */
    static createFromHexString(hexString: string): ObjectID;
    /**
     * Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
     * @param {number} time an integer number representing a number of seconds.
     * @return {ObjectID} return the created ObjectID
     */
    static createFromTime(time: number): ObjectID;
    /**
     * Checks if a value is a valid bson ObjectID
     *
     * @return {boolean} return true if the value is a valid bson ObjectID, return false otherwise.
     */
    static isValid(id: string | number | ObjectID): boolean;
    /**
     * Compares the equality of this ObjectID with `otherID`.
     * @param {ObjectID|string} otherID ObjectID instance to compare against.
     * @return {boolean} the result of comparing two ObjectID's
     */
    equals(otherID: ObjectID | string): boolean;
    /**
     * Generate a 12 byte id string used in ObjectID's
     * @param {number} time optional parameter allowing to pass in a second based timestamp.
     * @return {string} return the 12 byte id binary string.
     */
    generate(time?: number): Buffer;
    /**
     * Returns the generation date (accurate up to the second) that this ID was generated.
     * @return {Date} the generation date
     */
    getTimestamp(): Date;
    /**
     * Return the ObjectID id as a 24 byte hex string representation
     * @return {string} return the 24 byte hex string representation.
     */
    toHexString(): string;
}

export { ObjectID as ObjectId };

/** A class representation of the BSON RegExp type. */
export class BSONRegExp {
    constructor(pattern: string, options: string);
}

/**
 * A class representation of the BSON Symbol type.
 * @deprecated
 */
export class Symbol {
    constructor(value: string);
}

export class Timestamp {
    constructor(low: number, high: number);

    static MAX_VALUE: Timestamp;
    static MIN_VALUE: Timestamp;
    static NEG_ONE: Timestamp;
    static ONE: Timestamp;
    static ZERO: Timestamp;

    static fromBits(lowBits: number, highBits: number): Timestamp;
    static fromInt(value: number): Timestamp;
    static fromNumber(value: number): Timestamp;
    static fromString(str: string, radix?: number): Timestamp;

    add(other: Timestamp): Timestamp;
    and(other: Timestamp): Timestamp;
    compare(other: Timestamp): number;
    div(other: Timestamp): Timestamp;
    equals(other: Timestamp): boolean;
    getHighBits(): number;
    getLowBits(): number;
    getLowBitsUnsigned(): number;
    getNumBitsAbs(): number;
    greaterThan(other: Timestamp): number;
    greaterThanOrEqual(other: Timestamp): number;
    isNegative(): boolean;
    isOdd(): boolean;
    isZero(): boolean;
    lessThan(other: Timestamp): boolean;
    lessThanOrEqual(other: Timestamp): boolean;
    modulo(other: Timestamp): Timestamp;
    multiply(other: Timestamp): Timestamp;
    negate(): Timestamp;
    not(): Timestamp;
    notEquals(other: Timestamp): boolean;
    or(other: Timestamp): Timestamp;
    shiftLeft(other: number): Timestamp;
    shiftRight(other: number): Timestamp;
    shiftRightUnsigned(other: number): Timestamp;
    subtract(other: Timestamp): Timestamp;
    toInt(): number;
    toJSON(): string;
    toNumber(): number;
    toString(radix?: number): string;
    xor(other: Timestamp): Timestamp;
}
