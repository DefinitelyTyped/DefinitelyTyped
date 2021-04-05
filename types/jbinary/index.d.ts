// Type definitions for jBinary
// Project: https://github.com/jDataView/jBinary
// Definitions by: Tim Bureck <https://github.com/tbureck>
//                 Krisztián Balla <https://github.com/krisztianb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Additional notes:
// Method stubs and types are taken from the official jBinary documentation, which can be found here:
// https://github.com/jDataView/jBinary/wiki/jBinary-Constructor
// https://github.com/jDataView/jBinary/wiki/jBinary-Methods

/// <reference types="node" />

import { Readable, Writable } from "stream";
import jDataView = require("jdataview");

declare namespace jBinary {
    /**
     * Possible source types for loading binary data.
     */
    type SourceType = string | Blob | File | Readable;

    /**
     * Possible destination types for saving binary data.
     */
    type DestinationType = string | Writable;
}

/**
 * Class for working with binary data in JavaScript.
 */
declare class jBinary {
    static loadData(source: jBinary.SourceType, callback: (error: string, data: unknown) => void): void;
    static loadData(source: jBinary.SourceType): Promise<jBinary>;

    static load(source: jBinary.SourceType, typeSet?: Object, callback?: (error: string, data: unknown) => void): void;
    static load(source: jBinary.SourceType, typeSet?: Object): Promise<jBinary>;

    /**
     * Saves binary data to a given destination.
     * @param destination Destination of the binary data to be saved.
     * @param mimeType MIME-Type of the data. Defaults to "application/octet-stream".
     * @param callback Function called when data is saved.
     */
    static saveAs(destination: jBinary.DestinationType, mimeType?: string, callback?: (error: string, data: unknown) => void): void;

    /**
     * Saves binary data to a given destination.
     * @param destination Destination of the binary data to be saved.
     * @param mimeType MIME-Type of the data. Defaults to "application/octet-stream".
     * @returns Promise with the jBinary object as parameter.
     */
    static saveAs(destination: jBinary.DestinationType, mimeType?: string): Promise<jBinary>;

    /**
     * Returns a URI suitable for usage in DOM elements.
     * @param mimeType MIME-Type of the data. Defaults to "application/octet-stream".
     * @returns Blob URIs where supported, data-URIs in other cases.
     */
    static toURI(mimeType?: string): Blob | string;

    constructor(data: Array<number>);
    constructor(data: jDataView, typeSet: Object);
    constructor(bufferSize: number, typeSet: Object);

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
    as(typeSet: Object, modifyOriginal?: boolean): jBinary;
}

export = jBinary;
