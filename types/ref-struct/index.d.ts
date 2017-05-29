// Type definitions for ref-struct
// Project: https://github.com/TooTallNate/ref-struct
// Definitions by: Paul Loyd <https://github.com/loyd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ref = require('ref');

/**
 * This is the `constructor` of the Struct type that gets returned.
 *
 * Invoke it with `new` to create a new Buffer instance backing the struct.
 * Pass it an existing Buffer instance to use that as the backing buffer.
 * Pass in an Object containing the struct fields to auto-populate the
 * struct with the data.
 *
 * @constructor
 */
interface StructType extends ref.Type {
    /** Pass it an existing Buffer instance to use that as the backing buffer. */
    new (arg: Buffer, data?: {}): any;
    new (data?: {}): any;
    /** Pass it an existing Buffer instance to use that as the backing buffer. */
    (arg: Buffer, data?: {}): any;
    (data?: {}): any;

    fields: { [key: string]: { type: ref.Type } };

    /**
     * Adds a new field to the struct instance with the given name and type.
     * Note that this function will throw an Error if any instances of the struct
     * type have already been created, therefore this function must be called at the
     * beginning, before any instances are created.
     */
    defineProperty(name: string, type: ref.Type): void;

    /**
     * Adds a new field to the struct instance with the given name and type.
     * Note that this function will throw an Error if any instances of the struct
     * type have already been created, therefore this function must be called at the
     * beginning, before any instances are created.
     */
    defineProperty(name: string, type: string): void;

    /**
     * Custom for struct type instances.
     * @override
     */
    toString(): string;
}

/** The struct type meta-constructor. */
declare var StructType: {
    new (fields?: {}): StructType;
    new (fields?: any[]): StructType;
    (fields?: {}): StructType;
    (fields?: any[]): StructType;
}

export = StructType;
