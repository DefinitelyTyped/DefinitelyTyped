/**
 * predicates
 */
export namespace is {
    function _null(obj: any): boolean;
    export { _null as null };
    export function undefined(obj: any): boolean;
    export function exist(obj: any): boolean;
    export function nil(obj: any): boolean;
    export function number(obj: any): boolean;
    export function numeral(obj: any): boolean;
    export function infinite(obj: any): boolean;
    export function odd(obj: any): boolean;
    export function even(obj: any): boolean;
    export function float(obj: any): boolean;
    export function negativeZero(obj: any): boolean;
    export function string(obj: any): boolean;
    export function emptyString(obj: any): boolean;
    export function substring(substring: string, string: string, offset?: number): boolean;
    export function prefix(prefix: string, string: string): boolean;
    export function suffix(suffix: string, string: string): boolean;
    export function boolean(obj: any): boolean;
    export function json(obj: any): boolean;
    export function object(obj: any): boolean;
    export function plainObject(obj: any): boolean;
    function _class(obj: any): boolean;
    export { _class as class };
    export function emptyObject(obj: any): boolean;
    export function propertyOwned(obj: any, field: string): boolean;
    export function propertyDefined(obj: any, field: string): boolean;
    export function conforms(obj: object, schema: object, strict?: boolean): boolean;
    export function arrayLikeObject(obj: any): boolean;
    export function inArray<T>(value: T, array: any[], offset?: number, comparator?: (a: T, b: T) => boolean): boolean;
    export function sameType(value: any, other: any): boolean;
    export function primitive(obj: any): boolean;
    export function equalArrays(left: any[], right: any[]): boolean;
    export function deepEqual(left: any, right: any): boolean;
    export function shallowEqual(left: any, right: any): boolean;
    export function stream(obj: any): boolean;
    export function writableStream(obj: any): boolean;
    export function readableStream(obj: any): boolean;
    export function duplexStream(obj: any): boolean;
    export function transformStream(obj: any): boolean;
    export function utf8(obj: Buffer): boolean;
    export function win32PathAbsolute(path: string): boolean;
    export function posixPathAbsolute(path: string): boolean;
    export function pathAbsolute(path: string): boolean;
    export function glob(str: string): boolean;
    export function dotfile(str: string): boolean;
    function _function(obj: any): boolean;
    export { _function as function };
    export function asyncFunction(obj: any): boolean;
    export function promise(obj: any): boolean;
    export function validDate(str: string): boolean;
    export function buffer(obj: any): boolean;
    export function callback(obj: any): boolean;
    export function generator(obj: any): boolean;
    export function nan(obj: any): boolean;
    export function finite(obj: any): boolean;
    export function integer(obj: any): boolean;
    export function safeInteger(obj: any): boolean;
    export function array(obj: any): boolean;
    export function uint8Array(obj: any): boolean;
    export function configuration(obj: any): boolean;
    export function long(obj: any): boolean;
    export function bigNumber(obj: any): boolean;
    export function exbuffer(obj: any): boolean;
    export function exdate(obj: any): boolean;
    export function transform(obj: any): boolean;
    export function subsystem(obj: any): boolean;
    export function application(obj: any): boolean;
    export function logger(obj: any): boolean;
    export function coreStream(obj: any): boolean;
    export function fastStream(obj: any): boolean;
    export function fastFSStream(obj: any): boolean;
    export function fastFSMapStream(obj: any): boolean;
    export function genesisNetron(obj: any): boolean;
    export function genesisPeer(obj: any): boolean;
    export function netronAdapter(obj: any): boolean;
    export function netron(obj: any): boolean;
    export function netronPeer(obj: any): boolean;
    export function netronDefinition(obj: any): boolean;
    export function netronDefinitions(obj: any): boolean;
    export function netronReference(obj: any): boolean;
    export function netronInterface(obj: any): boolean;
    export function netronContext(obj: any): boolean;
    export function netronIMethod(netronInterface: object, name: string): boolean;
    export function netronIProperty(netronInterface: any, name: string): boolean;
    export function netronStub(obj: any): boolean;
    export function netronRemoteStub(obj: any): boolean;
    export function netronStream(obj: any): boolean;
    export function iterable(obj: any): boolean;
    export const windows: boolean;
    export const linux: boolean;
    export const freebsd: boolean;
    export const darwin: boolean;
    export const sunos: boolean;
    export function uppercase(str: string): boolean;
    export function lowercase(str: string): boolean;
    export function digits(str: string): boolean;
    export function identifier(str: string): boolean;
    export function binaryExtension(str: string): boolean;
    export function binaryPath(str: string): boolean;
    export function ip4(str: string): boolean;
    export function ip6(str: string): boolean;
    export function arrayBuffer(obj: any): boolean;
    export function arrayBufferView(obj: any): boolean;
    export function date(obj: any): boolean;
    export function error(obj: any): boolean;
    export function map(obj: any): boolean;
    export function regexp(obj: any): boolean;
    export function set(obj: any): boolean;
    export function symbol(obj: any): boolean;
    export function validUTF8(obj: any): boolean;
}

export namespace x {
    class Exception extends Error {
        constructor(message?: string | Error, captureStackTrace?: boolean);
    }
    class Runtime extends Exception { }
    class IncompleteBufferError extends Exception { }
    class NotImplemented extends Exception { }
    class IllegalState extends Exception { }
    class NotValid extends Exception { }
    class Unknown extends Exception { }
    class NotExists extends Exception { }
    class Exists extends Exception { }
    class Empty extends Exception { }
    class InvalidAccess extends Exception { }
    class NotSupported extends Exception { }
    class InvalidArgument extends Exception { }
    class InvalidNumberOfArguments extends Exception { }
    class NotFound extends Exception { }
    class Timeout extends Exception { }
    class Incorrect extends Exception { }
    class NotAllowed extends Exception { }
    class LimitExceeded extends Exception { }
    class Encoding extends Exception { }
    class Network extends Exception { }
    class Bind extends Exception { }
    class Connect extends Exception { }
    class Database extends Exception { }
    class DatabaseInitialization extends Exception { }
    class DatabaseOpen extends Exception { }
    class DatabaseRead extends Exception { }
    class DatabaseWrite extends Exception { }
    class NetronIllegalState extends Exception { }
    class NetronPeerDisconnected extends Exception { }
    class NetronTimeout extends Exception { }
}

export class EventEmitter {
    static listenerCount(emitter: EventEmitter, event: string | symbol): number;
    static defaultMaxListeners: number;

    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: string | symbol): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string | symbol): Array<(...args: any[]) => any>;
    emit(event: string | symbol, ...args: any[]): boolean;
    eventNames(): Array<string | symbol>;
    listenerCount(type: string | symbol): number;
}

export class AsyncEmitter extends EventEmitter {
    constructor(concurrency?: number);

    setConcurrency(max?: number): this;

    emitParallel(event: string, ...args: any[]): Promise<any[]>;

    emitSerial(event: string, ...args: any[]): Promise<any[]>;

    emitReduce(event: string, ...args: any[]): Promise<any>;

    emitReduceRight(event: string, ...args: any[]): Promise<any>;

    subscribe(event: string, listener: (...args: any[]) => void, once?: boolean): () => void;
}

declare namespace I {
    type Long = adone.math.Long;

    type Longable = adone.math.I.Longable;

    namespace ExBuffer {
        interface Varint32 {
            value: number;
            length: number;
        }

        interface Varint64 {
            value: Long;
            length: number;
        }

        interface String {
            string: string;
            length: number;
        }

        type Wrappable = string | ExBuffer | Buffer | Uint8Array | ArrayBuffer;

        type METRICS = "b" | "c";
    }
}

export class ExBuffer {
    constructor(capacity?: number, noAssert?: boolean);

    readBitSet(offset?: number): number[];

    read(length: number, offset?: number): ExBuffer;

    readInt8(offset?: number): number;

    readUInt8(offset?: number): number;

    readInt16LE(offset?: number): number;

    readUInt16LE(offset?: number): number;

    readInt16BE(offset?: number): number;

    readUInt16BE(offset?: number): number;

    readInt32LE(offset?: number): number;

    readUInt32LE(offset?: number): number;

    readInt32BE(offset?: number): number;

    readUInt32BE(offset?: number): number;

    readInt64LE(offset?: number): adone.math.Long;

    readUInt64LE(offset?: number): adone.math.Long;

    readInt64BE(offset?: number): adone.math.Long;

    readUInt64BE(offset?: number): adone.math.Long;

    readFloatLE(offset?: number): number;

    readFloatBE(offset?: number): number;

    readDoubleLE(offset?: number): number;

    readDoubleBE(offset?: number): number;

    write(source: I.ExBuffer.Wrappable, offset?: number, length?: number, encoding?: string): this;

    writeBitSet(value: number[]): this;

    writeBitSet(value: number[], offset: number): number;

    writeInt8(value: number, offset?: number): this;

    writeUInt8(value: number, offset?: number): this;

    writeInt16LE(value: number, offset?: number): this;

    writeInt16BE(value: number, offset?: number): this;

    writeUInt16LE(value: number, offset?: number): this;

    writeUInt16BE(value: number, offset?: number): this;

    writeInt32LE(value: number, offset?: number): this;

    writeInt32BE(value: number, offset?: number): this;

    writeUInt32LE(value: number, offset?: number): this;

    writeUInt32BE(value: number, offset?: number): this;

    writeInt64LE(value: I.Longable, offset?: number): this;

    writeInt64BE(value: I.Longable, offset?: number): this;

    writeUInt64LE(value: I.Longable, offset?: number): this;

    writeUInt64BE(value: I.Longable, offset?: number): this;

    writeFloatLE(value: number, offset?: number): this;

    writeFloatBE(value: number, offset?: number): this;

    writeDoubleLE(value: number, offset?: number): this;

    writeDoubleBE(value: number, offset?: number): this;

    writeVarint32(value: number): this;

    writeVarint32(value: number, offset: number): number;

    writeVarint32ZigZag(value: number): this;

    writeVarint32ZigZag(value: number, offset: number): number;

    readVarint32(): number;

    readVarint32(offset: number): I.ExBuffer.Varint32;

    readVarint32ZigZag(): number;

    readVarint32ZigZag(offset: number): I.ExBuffer.Varint32;

    writeVarint64(value: I.Longable): this;

    writeVarint64(value: I.Longable, offset: number): number;

    writeVarint64ZigZag(value: I.Longable): this;

    writeVarint64ZigZag(value: I.Longable, offset: number): number;

    readVarint64(): I.Long;

    readVarint64(offset: number): I.ExBuffer.Varint64;

    readVarint64ZigZag(): adone.math.Long;

    readVarint64ZigZag(offset: number): I.ExBuffer.Varint64;

    writeCString(str: string): this;

    writeCString(str: string, offset: number): number;

    readCString(): string;

    readCString(offset: number): I.ExBuffer.String;

    writeString(str: string): this;

    writeString(str: string, offset: number): number;

    readString(length: number, metrics?: I.ExBuffer.METRICS): string;

    readString(length: number, metrics: I.ExBuffer.METRICS, offset: number): I.ExBuffer.String;

    readString(length: number, offset: number): I.ExBuffer.String;

    writeVString(str: string): this;

    writeVString(str: string, offset: number): number;

    readVString(): string;

    readVString(offset: number): I.ExBuffer.String;

    appendTo(target: ExBuffer, offset?: number): this;

    assert(assert?: boolean): this;

    capacity(): number;

    clear(): this;

    compact(begin?: number, end?: number): this;

    copy(begin?: number, end?: number): ExBuffer;

    copyTo(target: ExBuffer, targetOffset?: number, souceOffset?: number, sourceLimit?: number): this | ExBuffer;

    ensureCapacity(capacity: number): this;

    fill(value: string | number, begin?: number, end?: number): this;

    flip(): this;

    mark(offset?: number): this;

    prepend(source: I.ExBuffer.Wrappable, encoding?: string, offset?: number): this;

    prepend(source: I.ExBuffer.Wrappable, offset: number): this;

    prependTo(target: ExBuffer, offset?: number): this;

    remaining(): number;

    reset(): this;

    resize(capacity: number): this;

    reverse(begin?: number, end?: number): this;

    skip(length: number): this;

    slice(begin?: number, end?: number): ExBuffer;

    toBuffer(forceCopy?: boolean, begin?: number, end?: number): Buffer;

    toArrayBuffer(): ArrayBuffer;

    toString(encoding?: string, begin?: number, end?: number): string;

    toBase64(begin?: number, end?: number): string;

    toBinary(begin?: number, end?: number): string;

    toDebug(columns?: boolean): string;

    toHex(begin?: number, end?: number): string;

    toUTF8(begin?: number, end?: number): string;

    static accessor(): typeof Buffer;

    static allocate(capacity?: number, noAssert?: boolean): ExBuffer;

    static concat(buffers: I.ExBuffer.Wrappable[], encoding?: string, noAssert?: boolean): ExBuffer;

    static type(): typeof Buffer;

    static wrap(buffer: I.ExBuffer.Wrappable, encoding?: string, noAssert?: boolean): ExBuffer;

    static calculateVarint32(value: number): number;

    static zigZagEncode32(n: number): number;

    static zigZagDecode32(n: number): number;

    static calculateVarint64(value: number | string): number;

    static zigZagEncode64(value: number | string | I.Long): I.Long;

    static zigZagDecode64(value: number | string | I.Long): I.Long;

    static calculateUTF8Chars(str: string): number;

    static calculateString(str: string): number;

    static fromBase64(str: string): ExBuffer;

    static btoa(str: string): string;

    static atob(b64: string): string;

    static fromBinary(str: string): ExBuffer;

    static fromDebug(str: string, noAssert?: boolean): ExBuffer;

    static fromHex(str: string, noAssert?: boolean): ExBuffer;

    static fromUTF8(str: string, noAssert?: boolean): ExBuffer;

    static DEFAULT_CAPACITY: number;

    static DEFAULT_NOASSERT: boolean;

    static MAX_VARINT32_BYTES: number;

    static MAX_VARINT64_BYTES: number;

    static METRICS_CHARS: string;

    static METRICS_BYTES: string;
}
