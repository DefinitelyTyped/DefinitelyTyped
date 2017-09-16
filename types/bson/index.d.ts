// Type definitions for bson 1.0.4
// Project: https://github.com/mongodb/js-bson
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
//                 Federico Caselli <https://github.com/CaselIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export interface DeserializeOptions {
    /** {Boolean, default:false}, evaluate functions in the BSON document scoped to the object deserialized. */
    evalFunctions?: boolean;
    /** {Boolean, default:false}, cache evaluated functions for reuse. */
    cacheFunctions?: boolean;
    /** {Boolean, default:false}, use a crc32 code for caching, otherwise use the string of the function. */
    cacheFunctionsCrc32?: boolean;
    /** {Boolean, default:false}, deserialize Binary data directly into node.js Buffer object. */
    promoteBuffers?: boolean;
}
export class BSON {
    /**
     * @param {Object} object the Javascript object to serialize.
     * @param {Boolean} checkKeys the serializer will check if keys are valid.
     * @param {Boolean} asBuffer return the serialized object as a Buffer object (ignore).
     * @param {Boolean} serializeFunctions serialize the javascript functions (default:false)
     * @return {Buffer} returns a TypedArray or Array depending on what your browser supports
     */
    serialize(object: any, checkKeys?: boolean, asBuffer?: boolean, serializeFunctions?: boolean): Buffer;
    deserialize(buffer: Buffer, options?: DeserializeOptions, isArray?: boolean): any;
}

export class Binary {
    static SUBTYPE_DEFAULT: number;
    static SUBTYPE_FUNCTION: number;
    static SUBTYPE_BYTE_ARRAY: number;
    static SUBTYPE_UUID_OLD: number;
    static SUBTYPE_UUID: number;
    static SUBTYPE_MD5: number;
    static SUBTYPE_USER_DEFINED: number;

    constructor(buffer: Buffer, subType?: number);

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
export class Code {
    constructor(code: string | Function, scope?: any);
}
export class DBRef {
    constructor(namespace: string, oid: ObjectID, db?: string);
}
export class Double {
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
export class Decimal128 {
    static fromString(s: string): Decimal128;

    constructor(bytes: Buffer);

    toJSON(): string;
    toString(): string;
}
export class MaxKey {
    constructor();
}
export class MinKey {
    constructor();
}
export class ObjectID {
    /**
     * Create a new ObjectID instance
     * @param {(string|number|ObjectID)} id Can be a 24 byte hex string, 12 byte binary string or a Number.
     */
    constructor(id?: string | number | ObjectID);
    /** The generation time of this ObjectID instance */
    generationTime: number;
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
     * @param {object} otherID ObjectID instance to compare against.
     * @return {boolean} the result of comparing two ObjectID's
     */
    equals(otherID: ObjectID): boolean;
    /**
     * Generate a 12 byte id string used in ObjectID's
     * @param {number} time optional parameter allowing to pass in a second based timestamp.
     * @return {string} return the 12 byte id binary string.
     */
    generate(time?: number): string;
    /**
     * Returns the generation date (accurate up to the second) that this ID was generated.
     * @return {date} the generation date
     */
    getTimestamp(): Date;
    /**
     * Return the ObjectID id as a 24 byte hex string representation
     * @return {string} return the 24 byte hex string representation.
     */
    toHexString(): string;
}
export { ObjectID as ObjectId };
export class BSONRegExp {
    constructor(pattern: string, options: string);
}
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
