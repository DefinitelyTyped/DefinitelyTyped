// Type definitions for bson 1.0
// Project: https://github.com/mongodb/js-bson
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi/>
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
}
export class Code {
    constructor(code: string | Function, scope?: any);
}
export class DBRef {
    constructor(namespace: string, oid: ObjectID, db?: string);
}
export class Double {
    constructor (value: number);
}
export class Long {
    static fromInt(i: number): Long;
    static fromNumber(n: number): Long;
    static fromBits(lowBits: number, highBits: number): Long;
    static fromString(s: string, opt_radix?: number): Long;

    constructor(low: number, high: number);
}
export class MaxKey {
    constructor();
}
export class MinKey {
    constructor();
}
export class ObjectId {
    static createPk(): ObjectId;
    static createFromTime(time: number): ObjectId;
    static createFromHexString(hexString: string): ObjectId;
    static isValid(id: number | string | ObjectId): boolean;

    constructor(id?: number | string | ObjectId);
    toHexString(): string;
    getTimestamp(): Date;
}
export type ObjectID = ObjectId;
export class BSONRegExp {
    constructor(pattern: string, options: string);
}
export class Symbol {
    constructor(value: string);
}
export class Timestamp {
    static fromInt(i: number): Timestamp;
    static fromNumber(n: number): Timestamp;
    static fromBits(lowBits: number, highBits: number): Timestamp;
    static fromString(s: string, opt_radix?: number): Timestamp;

    constructor(low: number, high: number);
}
