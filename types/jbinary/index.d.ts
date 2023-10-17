// Additional notes:
// Method stubs and types are taken from the official jBinary documentation, which can be found here:
// https://github.com/jDataView/jBinary/wiki/jBinary-Constructor
// https://github.com/jDataView/jBinary/wiki/jBinary-Methods
// https://github.com/jDataView/jBinary/wiki/Loading-and-saving-data

/// <reference types="node" />

import { Readable, Writable } from "stream";
import jDataView = require("jdataview");

declare namespace jBinary {
    /**
     * Possible source types for loading binary data.
     */
    type SourceType = string | Readable | File;

    /**
     * Possible destination types for saving binary data.
     */
    type DestinationType = string | Writable;

    /**
     * Possible types for the data.
     */
    type DataType = string | Buffer;

    /**
     * Defines how to read and write certain types of data.
     * @see https://github.com/jDataView/jBinary/wiki/Typesets
     */
    type DataTypeSet = {
        [typeName: string]: unknown;
    };

    /**
     * Defines some global options and how to read and write certain types of data.
     * @see https://github.com/jDataView/jBinary/wiki/Typesets
     */
    type TypeSet = DataTypeSet & {
        "jBinary.all"?: string | undefined;
        "jBinary.littleEndian"?: boolean | undefined;
        "jBinary.mimeType"?: string | undefined;
    };

    /**
     * Type for configuring user defined custom types.
     * @see https://github.com/jDataView/jBinary/wiki/jBinary.Type
     * @see https://github.com/jDataView/jBinary/wiki/jBinary.Template
     */
    type CustomTypeConfig = {
        read: (this: any, context: any) => unknown;
        write: (this: any, data: any, context: any) => void;
        setParams?: ((this: any, ...params: any[]) => void) | undefined;
        resolve?: ((this: any, getType: (...params: any[]) => any) => void) | undefined;
        params?: string[] | undefined;
        typeParams?: string[] | undefined;
    };
}

/**
 * Class for working with binary data.
 */
declare class jBinary {
    /**
     * Loads data from a given source and returns a promise with the jBinary object.
     * @param source Source of the data to be loaded.
     * @param typeSet Typeset to use for loading the data.
     * @returns Promise with the jBinary object as parameter.
     */
    static load(source: jBinary.SourceType, typeSet?: jBinary.TypeSet): Promise<jBinary>;

    /**
     * Loads data from a given source and calls a callback with the jBinary object.
     * @param source Source of the data to be loaded.
     * @param typeSet Typeset to use for loading the data.
     * @param callback Function called when the data is loaded or loading the data fails.
     */
    static load(
        source: jBinary.SourceType,
        typeSet?: jBinary.TypeSet,
        callback?: (error: Error | null, jb: jBinary) => void,
    ): void;

    /**
     * Loads data from a given source and returns it in a promise.
     * @param source Source of the data to be loaded.
     * @returns Promise with the loaded data as parameter.
     */
    static loadData(source: jBinary.SourceType): Promise<jBinary.DataType>;

    /**
     * Loads data from a given source and returns it in a callback.
     * @param source Source of the data to be loaded.
     * @param callback Function called when the data is loaded or loading the data fails.
     */
    static loadData(
        source: jBinary.SourceType,
        callback: (error: Error | null, data: jBinary.DataType | undefined) => void,
    ): void;

    /**
     * Creates a custom type based on another type to be used within Typesets.
     * @param config The config of the custom type.
     */
    static Template(config: jBinary.CustomTypeConfig): unknown;

    /**
     * Creates a custom type to be used within Typesets.
     * @param config The config of the custom type.
     */
    static Type(config: jBinary.CustomTypeConfig): unknown;

    /**
     * Creates a new jBinary instance with the provided binary string as data.
     * @param data The binary data as a string.
     * @param typeSet Typeset object with all the defined types.
     */
    constructor(data: string, typeSet?: jBinary.TypeSet);

    /**
     * Creates a new jBinary instance with the provided array as data.
     * @param data The binary data as a numeric array.
     * @param typeSet Typeset object with all the defined types.
     */
    constructor(data: Array<number>, typeSet?: jBinary.TypeSet);

    /**
     * Creates a new jBinary instance with a jDataView object as data.
     * @param data The binary data in a jDataView object.
     * @param typeSet Typeset object with all the defined types.
     */
    constructor(data: jDataView, typeSet?: jBinary.TypeSet);

    /**
     * Creates a new jBinary instance with an empty buffer as data.
     * @param bufferSize The size of the empty buffer in bytes.
     * @param typeSet Typeset object with all the defined types.
     */
    constructor(bufferSize: number, typeSet?: jBinary.TypeSet);

    /**
     * Property for accessing the encapulated data view.
     */
    view: jDataView;

    /**
     * Casts a jBinary instance to the given Typeset while pointing to the
     * same data, pointers and methods as the original instance.
     * @param typeSet The new Typeset for the resulting instance.
     * @param modifyOriginal If true, the original instance will be modified instead of being inherited.
     */
    as(typeSet: jBinary.TypeSet, modifyOriginal?: boolean): jBinary;

    /**
     * Reads a value of a specified type.
     * @param type The name of the type to read. (eg: "uint8", "uint32", ["array", "uint8", 4] etc.)
     * @param offset If provided, read from this offset position, otherwise read from the current position
     *               and move data pointer forward (streaming mode).
     * @returns The read value.
     */
    read(type: string | [string, string, number?], offset?: number): unknown;

    /**
     * Reads the entire data as one value of the type specified by the "jBinary.all" key in the Typeset.
     * @returns The read data.
     */
    readAll(): unknown;

    /**
     * Saves binary data to a given destination and returns a promise.
     * @param destination Destination of the binary data to be saved.
     * @param mimeType MIME-Type of the data. @default "application/octet-stream"
     * @returns Promise (with no data) that is fulfilled when the saving was successful.
     */
    saveAs(destination: jBinary.DestinationType, mimeType?: string): Promise<undefined>;

    /**
     * Saves binary data to a given destination and calls a callback when finished.
     * @param destination Destination of the binary data to be saved.
     * @param mimeType MIME-Type of the data. @default "application/octet-stream"
     * @param callback Function called when data is saved.
     */
    saveAs(
        destination: jBinary.DestinationType,
        mimeType?: string,
        callback?: (error: Error | undefined) => void,
    ): void;

    /**
     * Go to "position" in the binary data.
     * @param position Byte position to seek to in the binary data.
     */
    seek(position: number): void;

    /**
     * Go to "position" in the binary data, execute the given callback and return to the previous position.
     * @param position Byte position to seek to in the binary data.
     * @param callback Callback to execute at the new position.
     * @returns The value returned by the callback.
     */
    seek(position: number, callback?: () => unknown): unknown;

    /**
     * Advance in the binary data by "count" bytes.
     * @param count Number of bytes to advance in the binary data.
     */
    skip(count: number): void;

    /**
     * Advance in the binary data by "count" bytes, execute the given callback and return to the previous position.
     * @param count Number of bytes to advance in the binary data.
     * @param callback Callback to execute at the new position.
     * @returns The value returned by the callback.
     */
    skip(count: number, callback: () => unknown): unknown;

    /**
     * Returns a sliced version of the current binary with same Typeset.
     * @param start Slice start position. (0-based index for the first index to include in the slice)
     * @param end Slice end position. (0-based index for the last index to include in the slice)
     * @param forceCopy If true, a new jDataView will be created and the original data is not linked to it.
     *                  Changes will therefore be isolated from the original binary.
     */
    slice(start: number, end: number, forceCopy?: boolean): jBinary;

    /**
     * Returns the current position in the binary data.
     * @returns The current position in the binary data.
     */
    tell(): number;

    /**
     * Returns a URI suitable for usage in DOM elements.
     * @param mimeType MIME-Type of the data. @default "application/octet-stream"
     * @returns Blob URIs where supported, data-URIs in other cases.
     */
    toURI(mimeType?: string): string;

    /**
     * Writes a value of a specified type into the binary data.
     * @param type The name of the type to write. (eg: "uint8", "uint32", ["array", "uint8", 4] etc.)
     * @param data The value to write.
     * @param offset If provided, write to this offset position, otherwise write it to the current position
     *               and move data pointer forward (streaming mode).
     */
    write(type: string | [string, string, number?], data: unknown, offset?: number): void;

    /**
     * Writes the given data as one value of the type specified by the "jBinary.all" key in the Typeset
     * into the binary data.
     * @param data The value to write.
     */
    writeAll(data: unknown): void;
}

export = jBinary;
