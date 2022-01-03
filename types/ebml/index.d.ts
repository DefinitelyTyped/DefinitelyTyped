// Type definitions for ebml 3.0
// Project: https://github.com/node-ebml/node-ebml#readme
// Definitions by: AppLover69 <https://github.com/AppLover69>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node"/>
import { Transform, Writable } from "stream";

export type TagType =
    'm' /* master element (contains other EBML sub-elements of the next lower level) */ |
    'u' /* unsigned integer. Some of these are UIDs, coded as 128-bit numbers */ |
    'i' /* signed integer */ |
    'f' /* IEEE-754 floating point number */ |
    's' /* printable ASCII text string */ |
    '8' /* printable utf-8 Unicode text string */ |
    'd' /* a 64-bit signed timestamp, in nanoseconds after (or before) `2001-01-01T00:00UTC` */ |
    'b' /* binary data, otherwise uninterpreted */;

export namespace Tag {
    interface DataTypeToTypeMap extends Record<TagType, any> {
        'm': undefined;
        'u': number;
        'i': number;
        'f': number;
        's': string;
        '8': string;
        'd': Date;
        'b': number;
    }
}
export interface Tag<T extends TagType> extends TagMetadata {
    type: T;
    data: Buffer;
    value: Tag.DataTypeToTypeMap[T];
}

export interface Block extends Tag<'b'> {
    /** the coded information in the element */
    payload: Buffer;
    /** unsigned integer indicating the payload's track */
    track: number;
    /** the block's Timecode value */
    value: number;
}
export interface SimpleBlock extends Block {
    /** set to `true` if the payload starts an I frame */
    keyframe: boolean;
    /** the value of the element's Discardable flag */
    discarable: boolean;
}

export interface TagMetadata {
    /** EBML ID */
    tag: number;
    /** EBML ID as a hex string */
    tagStr: string;
    /** Element name */
    name: EBMLTagSchema['name'];
    /** Data type */
    type: EBMLTagSchema['type'];
    /** Start byte offset */
    start: number;
    /** End byte offset if known, else `-1` */
    end: number;
    /** Size of data in bytes */
    dataSize: number;
}

export namespace tools {
    /**
     * read variable length integer per
     * https://www.matroska.org/technical/specs/index.html#EBML_ex
     * @param buffer containing input
     * @param [start=0] position in buffer
     * @returns value / length object
     */
    function readVint(buffer: Buffer, start?: number): {length: number, value: number};

    /**
     * write variable length integer
     * @param value to store into buffer
     * @returns buffer containing the value
     */
    function writeVint(value: number): Buffer;

    /**
     * concatenate two arrays of bytes
     * @param a1 First array
     * @param a2 Second array
     * @returns concatenated arrays
     */
    function concatenate(a1: Buffer, a2: Buffer): Buffer;

    /**
     * get a hex text string from `buff[start,end)`
     * @param buff from which to read the string
     * @param [start=0] starting point (default `0`)
     * @param [end=buff.byteLength] ending point (default the whole buffer)
     * @returns the hex string
     */
    function readHexString(buff: Buffer, start?: number, end?: number): string;

    /**
     * tries to read out a UTF-8 encoded string
     * @param buff the buffer to attempt to read from
     * @return the decoded text, or `null` if unable to
     */
    function readUtf8(buff: Buffer): string | null;

    /**
     * get an unsigned number from a buffer
     * @param buff from which to read variable-length unsigned number
     * @returns result (in hex for lengths > 6)
     */
    function readUnsigned(buff: Buffer): number | string;

    /**
     * get a signed number from a buffer
     * @param buff from which to read variable-length signed number
     * @returns result
     */
    function readSigned(buff: Buffer): number;

    /**
     * get a floating-point number from a buffer
     * @param buff from which to read variable-length floating-point number
     * @returns result
     */
    function readFloat(buff: Buffer): number;

    /**
     * get a date from a buffer
     * @param buff buffer from which to read the date
     * @return result
     */
    function readDate(buff: Buffer): Date;

    /**
     * Reads the data from a tag
     * @param tagObj The tag object to be read
     * @param data Data to be transformed
     * @return result
     */
    function readDataFromTag(tagObj: TagMetadata, data: Buffer): Tag<any>;
}

export const schema: Map<number, EBMLTagSchema>;

export type EBMLTagSchema = EBMLTagSchemaBase | EBMLNumericTagSchema | EBMLStringValueTagSchema | EBMLBinaryTagSchema;
export interface EBMLTagSchemaBase {
    name: string;
    level: number;
    type: TagType;
    description: string;
    cppname?: string | undefined;
    multiple?: boolean | undefined;
    mandatory?: boolean | undefined;
    minver?: number | undefined;
    webm?: boolean | undefined;
    divx?: boolean | undefined;
    del?: ['1 - bzlib,', '2 - lzo1x'] | '1 - bzlib,' | '2 - lzo1x' | undefined;
    strong?: 'informational' | 'Informational' | undefined;
    recursive?: boolean | undefined;
    maxver?: string | undefined;
    i?: string | undefined;
}
export interface EBMLDefaultableTagSchema extends EBMLTagSchemaBase {
    default?: any;
}
export interface EBMLNumericTagSchema extends EBMLDefaultableTagSchema {
    type: 'u' | 'i' | 'f';
    range: string;
    br?: string | [string, string] | [string, string, string] | [string, string, string, string] | undefined;
}
export interface EBMLStringValueTagSchema extends EBMLDefaultableTagSchema {
    type: 's';
}
export interface EBMLBinaryTagSchema extends EBMLTagSchemaBase {
    bytesize?: number | undefined;
}

/** Type of `Decoder`'s output and `Encoder`'s input */
export type StateAndTagData =
    ['tag', Tag<any>] |
    ['start', TagMetadata] |
    ['end', TagMetadata];

/**
 * @event 'data' `StateAndTagData`
 */
export namespace Decoder {
    type State = 1 /* tag */ | 2 /* size */ | 3 /* content*/;

    interface EventListenerMap {
        data: (chunk: StateAndTagData) => void;
        close: () => void;
        end: () => void;
        readable: () => void;
        error: (err: Error) => void;
    }
}
export class Decoder extends Transform {
    static getSchemaInfo(tag: number): EBMLTagSchema;

    buffer: Buffer;
    cursor: number;
    state: Decoder.State;
    tagStack: TagMetadata[];
    total: number;

    readTag(): boolean;
    readSize(): boolean;
    readContent(): boolean;

    // #region Duplex methods overloadings

    addListener<K extends keyof Decoder.EventListenerMap>(event: K, listener: Decoder.EventListenerMap[K]): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    on<K extends keyof Decoder.EventListenerMap>(event: K, listener: Decoder.EventListenerMap[K]): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    once<K extends keyof Decoder.EventListenerMap>(event: K, listener: Decoder.EventListenerMap[K]): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    prependListener<K extends keyof Decoder.EventListenerMap>(event: K, listener: Decoder.EventListenerMap[K]): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener<K extends keyof Decoder.EventListenerMap>(event: K, listener: Decoder.EventListenerMap[K]): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener<K extends keyof Decoder.EventListenerMap>(event: K, listener: Decoder.EventListenerMap[K]): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

    write(chunk: Buffer, encoding?: string, cb?: (error: Error | null | undefined) => void): boolean;
    write(chunk: Buffer, cb?: (error: Error | null | undefined) => void): boolean;
    end(cb?: () => void): this;
    end(chunk: Buffer, cb?: () => void): this;
    end(chunk: Buffer, encoding?: string, cb?: () => void): this;

    // #endregion
}

/**
 * Encodes a raw EBML stream
 */
export namespace Encoder {
    interface TagStackItem {
        data: Buffer | null;
        id: ReturnType<typeof Encoder['getSchemaInfo']>;
        name: TagMetadata['name'];
        end: TagMetadata['end'];
        children: TagStackItem[];
    }
}
export class Encoder extends Transform {
    /**
     * gets the ID of the type of `tagName`
     * @param tagName tag name to be looked up
     * @return tag ID
     */
    static getSchemaInfo(tagName: string): number | null;

    buffer: Buffer;
    corked: boolean;
    stack: Encoder.TagStackItem[];

    writeTag(tagName: TagMetadata['name'], tagData: Tag<any>['data']): void;
    /**
     * @param tagName The name of the tag to start
     * @param info an information object with an `end` parameter
     */
    startTag(tagName: TagMetadata['name'], info: Pick<Encoder.TagStackItem, 'end'>): void;
    endTag(): void;
}
