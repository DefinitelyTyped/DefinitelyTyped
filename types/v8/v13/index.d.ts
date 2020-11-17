// Type definitions for non-npm package Node.js 13.13
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Surasak Chaisurin <https://github.com/Ryan-Willpower>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer } from 'buffer';
import { Readable } from 'stream';

export {};

export interface HeapSpaceInfo {
    space_name: string;
    space_size: number;
    space_used_size: number;
    space_available_size: number;
    physical_space_size: number;
}

// ** Signifies if the --zap_code_space option is enabled or not.  1 == enabled, 0 == disabled. */
export type DoesZapCodeSpaceFlag = 0 | 1;

export interface HeapInfo {
    total_heap_size: number;
    total_heap_size_executable: number;
    total_physical_size: number;
    total_available_size: number;
    used_heap_size: number;
    heap_size_limit: number;
    malloced_memory: number;
    peak_malloced_memory: number;
    does_zap_garbage: DoesZapCodeSpaceFlag;
    number_of_native_contexts: number;
    number_of_detached_contexts: number;
}

export interface HeapCodeStatistics {
    code_and_metadata_size: number;
    bytecode_and_metadata_size: number;
    external_script_source_size: number;
}

/**
 * Returns an integer representing a "version tag" derived from the V8 version, command line flags and detected CPU features.
 * This is useful for determining whether a vm.Script cachedData buffer is compatible with this instance of V8.
 */
export function cachedDataVersionTag(): number;

export function getHeapStatistics(): HeapInfo;
export function getHeapSpaceStatistics(): HeapSpaceInfo[];
export function setFlagsFromString(flags: string): void;
/**
 * Generates a snapshot of the current V8 heap and returns a Readable
 * Stream that may be used to read the JSON serialized representation.
 * This conversation was marked as resolved by joyeecheung
 * This JSON stream format is intended to be used with tools such as
 * Chrome DevTools. The JSON schema is undocumented and specific to the
 * V8 engine, and may change from one version of V8 to the next.
 */
export function getHeapSnapshot(): Readable;

/**
 *
 * @param fileName The file path where the V8 heap snapshot is to be
 * saved. If not specified, a file name with the pattern
 * `'Heap-${yyyymmdd}-${hhmmss}-${pid}-${thread_id}.heapsnapshot'` will be
 * generated, where `{pid}` will be the PID of the Node.js process,
 * `{thread_id}` will be `0` when `writeHeapSnapshot()` is called from
 * the main Node.js thread or the id of a worker thread.
 */
export function writeHeapSnapshot(fileName?: string): string;

export function getHeapCodeStatistics(): HeapCodeStatistics;

export class Serializer {
    /**
     * Writes out a header, which includes the serialization format version.
     */
    writeHeader(): void;

    /**
     * Serializes a JavaScript value and adds the serialized representation to the internal buffer.
     * This throws an error if value cannot be serialized.
     */
    writeValue(val: any): boolean;

    /**
     * Returns the stored internal buffer.
     * This serializer should not be used once the buffer is released.
     * Calling this method results in undefined behavior if a previous write has failed.
     */
    releaseBuffer(): Buffer;

    /**
     * Marks an ArrayBuffer as having its contents transferred out of band.\
     * Pass the corresponding ArrayBuffer in the deserializing context to deserializer.transferArrayBuffer().
     */
    transferArrayBuffer(id: number, arrayBuffer: ArrayBuffer): void;

    /**
     * Write a raw 32-bit unsigned integer.
     */
    writeUint32(value: number): void;

    /**
     * Write a raw 64-bit unsigned integer, split into high and low 32-bit parts.
     */
    writeUint64(hi: number, lo: number): void;

    /**
     * Write a JS number value.
     */
    writeDouble(value: number): void;

    /**
     * Write raw bytes into the serializer’s internal buffer.
     * The deserializer will require a way to compute the length of the buffer.
     */
    writeRawBytes(buffer: ArrayBufferView): void;
}

/**
 * A subclass of `Serializer` that serializes `TypedArray` (in particular `Buffer`) and `DataView` objects as host objects,
 * and only stores the part of their underlying `ArrayBuffers` that they are referring to.
 */
export class DefaultSerializer extends Serializer {
}

export class Deserializer {
    constructor(data: ArrayBufferView);
    /**
     * Reads and validates a header (including the format version).
     * May, for example, reject an invalid or unsupported wire format.
     * In that case, an Error is thrown.
     */
    readHeader(): boolean;

    /**
     * Deserializes a JavaScript value from the buffer and returns it.
     */
    readValue(): any;

    /**
     * Marks an ArrayBuffer as having its contents transferred out of band.
     * Pass the corresponding `ArrayBuffer` in the serializing context to serializer.transferArrayBuffer()
     * (or return the id from serializer._getSharedArrayBufferId() in the case of SharedArrayBuffers).
     */
    transferArrayBuffer(id: number, arrayBuffer: ArrayBuffer): void;

    /**
     * Reads the underlying wire format version.
     * Likely mostly to be useful to legacy code reading old wire format versions.
     * May not be called before .readHeader().
     */
    getWireFormatVersion(): number;

    /**
     * Read a raw 32-bit unsigned integer and return it.
     */
    readUint32(): number;

    /**
     * Read a raw 64-bit unsigned integer and return it as an array [hi, lo] with two 32-bit unsigned integer entries.
     */
    readUint64(): [number, number];

    /**
     * Read a JS number value.
     */
    readDouble(): number;

    /**
     * Read raw bytes from the deserializer’s internal buffer.
     * The length parameter must correspond to the length of the buffer that was passed to serializer.writeRawBytes().
     */
    readRawBytes(length: number): Buffer;
}

/**
 * A subclass of `Serializer` that serializes `TypedArray` (in particular `Buffer`) and `DataView` objects as host objects,
 * and only stores the part of their underlying `ArrayBuffers` that they are referring to.
 */
export class DefaultDeserializer extends Deserializer {
}

/**
 * Uses a `DefaultSerializer` to serialize value into a buffer.
 */
export function serialize(value: any): Buffer;

/**
 * Uses a `DefaultDeserializer` with default options to read a JS value from a buffer.
 */
export function deserialize(data: ArrayBufferView): any;
