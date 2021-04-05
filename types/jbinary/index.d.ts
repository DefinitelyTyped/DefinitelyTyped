// Type definitions for jBinary 2.1
// Project: https://github.com/jDataView/jBinary
// Definitions by: Tim Bureck <https://github.com/tbureck>
//                 Krisztián Balla <https://github.com/krisztianb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    type SourceType = string | Readable;

    /**
     * Possible destination types for saving binary data.
     */
    type DestinationType = string | Writable;

    /**
     * Possible types for the data.
     */
    type DataType = string | Buffer;

    /**
     * A set that defines how to read and write certain types of data.
     */
    type TypeSet = {
        [type: string]: {
            read?: () => DataType;
            write?: (data: DataType) => void;
        };
    };
}

/**
 * Class for working with binary data.
 */
declare class jBinary {
    /**
     * Loads data from a given source and returns it in a callback.
     * @param source Source of the data to be loaded.
     * @param callback Function called when data is loaded.
     */
    static loadData(
        source: jBinary.SourceType,
        callback: (error: Error | null, data: jBinary.DataType | undefined) => void,
    ): void;

    /**
     * Loads data from a given source and returns it in a promise.
     * @param source Source of the data to be loaded.
     * @returns Promise with the loaded data as parameter.
     */
    static loadData(source: jBinary.SourceType): Promise<jBinary.DataType>;

    /**
     * Loads data from a given source and calls a callback with the jBinary object.
     * @param source Source of the data to be loaded.
     * @param typeSet Typeset to use for loading the data.
     * @param callback Function called when data is loaded.
     */
    static load(
        source: jBinary.SourceType,
        typeSet?: jBinary.TypeSet,
        callback?: (error: Error | null, jb: jBinary) => void,
    ): void;

    /**
     * Loads data from a given source and returns a promise with the jBinary object.
     * @param source Source of the data to be loaded.
     * @param typeSet Typeset to use for loading the data.
     * @returns Promise with the jBinary object as parameter.
     */
    static load(source: jBinary.SourceType, typeSet?: jBinary.TypeSet): Promise<jBinary>;

    /**
     * Saves binary data to a given destination and calls a callback when finished.
     * @param destination Destination of the binary data to be saved.
     * @param mimeType MIME-Type of the data. @default "application/octet-stream"
     * @param callback Function called when data is saved.
     */
    static saveAs(
        destination: jBinary.DestinationType,
        mimeType?: string,
        callback?: (error: Error | undefined) => void,
    ): void;

    /**
     * Saves binary data to a given destination and returns a promise with the jBinary object.
     * @param destination Destination of the binary data to be saved.
     * @param mimeType MIME-Type of the data. @default "application/octet-stream"
     * @returns Promise with the jBinary object as parameter.
     */
    static saveAs(destination: jBinary.DestinationType, mimeType?: string): Promise<jBinary>;

    /**
     * Returns a URI suitable for usage in DOM elements.
     * @param mimeType MIME-Type of the data. @default "application/octet-stream"
     * @returns Blob URIs where supported, data-URIs in other cases.
     */
    static toURI(mimeType?: string): Blob | string;

    constructor(data: Array<number>);
    constructor(data: jDataView, typeSet: jBinary.TypeSet);
    constructor(bufferSize: number, typeSet: jBinary.TypeSet);

    /**
     * Property for accessing the encapulated data view.
     */
    view: jDataView;

    read(type: string, offset?: number): unknown;
    readAll(): unknown;

    write(type: string, data: unknown, offset?: number): number;
    writeAll(data: unknown): number;

    /**
     * Returns the current position in the binary data.
     * @returns The current position in the binary data.
     */
    tell(): number;

    /**
     * Go to "position" in the binary data.
     * @param position Byte position to seek to in the binary data.
     */
    seek(position: number): void;

    /**
     * Go to "position" in the binary data, execute the given callback and return to the previous position.
     * @param position Byte position to seek to in the binary data.
     * @param callback Possible callback to execute at the new position.
     * @returns The data returned by the callback.
     */
    seek(position: number, callback: (jb: jBinary) => unknown): unknown;

    /**
     * Advance in the binary data by "count" bytes.
     * @param count Number of bytes to advance in the binary data.
     */
    skip(count: number): void;

    /**
     * Advance in the binary data by "count" bytes, execute the given callback and return to the previous position.
     * @param count Number of bytes to advance in the binary data.
     * @param callback Possible callback to execute at the new position.
     * @returns The data returned by the callback.
     */
    skip(count: number, callback?: (jb: jBinary) => unknown): unknown;

    slice(start: number, end: number, forceCopy?: boolean): jBinary;
    as(typeSet: jBinary.TypeSet, modifyOriginal?: boolean): jBinary;
}

export = jBinary;
