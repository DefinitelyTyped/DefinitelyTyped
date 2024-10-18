/// <reference types="node" />
import Long = require("long");

declare namespace ByteBuffer {}
export = ByteBuffer;
export as namespace ByteBuffer;

declare class ByteBuffer {
    /**
     * Constructs a new ByteBuffer.
     */
    constructor(capacity?: number, littleEndian?: boolean, noAssert?: boolean);

    /**
     * Big endian constant that can be used instead of its boolean value. Evaluates to false.
     */
    static BIG_ENDIAN: boolean;

    /**
     * Default initial capacity of 16.
     */
    static DEFAULT_CAPACITY: number;

    /**
     * Default endianness of false for big endian.
     */
    static DEFAULT_ENDIAN: boolean;

    /**
     * Default no assertions flag of false.
     */
    static DEFAULT_NOASSERT: boolean;

    /**
     * Little endian constant that can be used instead of its boolean value. Evaluates to true.
     */
    static LITTLE_ENDIAN: boolean;

    /**
     * Maximum number of bytes required to store a 32bit base 128 variable-length integer.
     */
    static MAX_VARINT32_BYTES: number;

    /**
     * Maximum number of bytes required to store a 64bit base 128 variable-length integer.
     */
    static MAX_VARINT64_BYTES: number;

    /**
     * Metrics representing number of bytes.Evaluates to 2.
     */
    static METRICS_BYTES: number;

    /**
     * Metrics representing number of UTF8 characters.Evaluates to 1.
     */
    static METRICS_CHARS: number;

    /**
     * ByteBuffer version.
     */
    static VERSION: string;

    /**
     * Backing buffer.
     */
    buffer: Buffer;

    /**
     * Absolute limit of the contained data. Set to the backing buffer's capacity upon allocation.
     */
    limit: number;

    /**
     * Whether to use little endian byte order, defaults to false for big endian.
     */
    littleEndian: boolean;

    /**
     * Marked offset.
     */
    markedOffset: number;

    /**
     * Whether to skip assertions of offsets and values, defaults to false.
     */
    noAssert: boolean;

    /**
     * Absolute read/write offset.
     */
    offset: number;

    /**
     * Data view to manipulate the backing buffer. Becomes null if the backing buffer has a capacity of 0.
     */
    view: DataView;

    /**
     * Allocates a new ByteBuffer backed by a buffer of the specified capacity.
     */
    static allocate(capacity?: number, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;

    /**
     * Decodes a base64 encoded string to binary like window.atob does.
     */
    static atob(b64: string): string;

    /**
     * Encodes a binary string to base64 like window.btoa does.
     */
    static btoa(str: string): string;

    /**
     * Calculates the number of UTF8 bytes of a string.
     */
    static calculateUTF8Bytes(str: string): number;

    /**
     * Calculates the number of UTF8 characters of a string.JavaScript itself uses UTF- 16, so that a string's length property does not reflect its actual UTF8 size if it contains code points larger than 0xFFFF.
     */
    static calculateUTF8Chars(str: string): number;

    /**
     * Calculates the number of UTF8 bytes of a string. This is an alias of ByteBuffer#calculateUTF8Bytes.
     */
    static calculateString(str: string): number;

    /**
     * Calculates the actual number of bytes required to store a 32bit base 128 variable-length integer.
     */
    static calculateVarint32(value: number): number;

    /**
     * Calculates the actual number of bytes required to store a 64bit base 128 variable-length integer.
     */
    static calculateVarint64(value: number | Long): number;

    /**
     * Concatenates multiple ByteBuffers into one.
     */
    static concat(
        buffers: Array<ByteBuffer | Buffer | ArrayBuffer | Uint8Array | string>,
        encoding?: string | boolean,
        litteEndian?: boolean,
        noAssert?: boolean,
    ): ByteBuffer;

    /**
     * Decodes a base64 encoded string to a ByteBuffer.
     */
    static fromBase64(str: string, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;

    /**
     * Decodes a binary encoded string, that is using only characters 0x00-0xFF as bytes, to a ByteBuffer.
     */
    static fromBinary(str: string, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;

    /**
     * Decodes a hex encoded string with marked offsets to a ByteBuffer.
     */
    static fromDebug(str: string, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;

    /**
     * Decodes a hex encoded string to a ByteBuffer.
     */
    static fromHex(str: string, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;

    /**
     * Decodes an UTF8 encoded string to a ByteBuffer.
     */
    static fromUTF8(str: string, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;

    /**
     * Gets the backing buffer type.
     */
    static isByteBuffer(bb: any): boolean;

    /**
     * Wraps a buffer or a string. Sets the allocated ByteBuffer's ByteBuffer#offset to 0 and its ByteBuffer#limit to the length of the wrapped data.
     * @param buffer Anything that can be wrapped
     * @param encoding String encoding if buffer is a string ("base64", "hex", "binary", defaults to "utf8")
     * @param littleEndian Whether to use little or big endian byte order. Defaults to ByteBuffer.DEFAULT_ENDIAN.
     * @param noAssert Whether to skip assertions of offsets and values. Defaults to ByteBuffer.DEFAULT_NOASSERT.
     */
    static wrap(
        buffer: ByteBuffer | Buffer | ArrayBuffer | Uint8Array | string,
        enc?: string | boolean,
        littleEndian?: boolean,
        noAssert?: boolean,
    ): ByteBuffer;

    /**
     * Decodes a zigzag encoded signed 32bit integer.
     */
    static zigZagDecode32(n: number): number;

    /**
     * Decodes a zigzag encoded signed 64bit integer.
     */
    static zigZagDecode64(n: number | Long): Long;

    /**
     * Zigzag encodes a signed 32bit integer so that it can be effectively used with varint encoding.
     */
    static zigZagEncode32(n: number): number;

    /**
     * Zigzag encodes a signed 64bit integer so that it can be effectively used with varint encoding.
     */
    static zigZagEncode64(n: number | Long): Long;

    /**
     * Switches (to) big endian byte order.
     */
    BE(bigEndian?: boolean): this;

    /**
     * Switches (to) little endian byte order.
     */
    LE(bigEndian?: boolean): this;

    /**
     * Appends some data to this ByteBuffer. This will overwrite any contents behind the specified offset up to the appended data's length.
     */
    append(
        source: ByteBuffer | Buffer | ArrayBuffer | Uint8Array | string,
        encoding?: string | number,
        offset?: number,
    ): this;

    /**
     * Appends this ByteBuffer's contents to another ByteBuffer. This will overwrite any contents behind the specified offset up to the length of this ByteBuffer's data.
     */
    appendTo(target: ByteBuffer, offset?: number): this;

    /**
     * Enables or disables assertions of argument types and offsets. Assertions are enabled by default but you can opt to disable them if your code already makes sure that everything is valid.
     */
    assert(assert: boolean): this;

    /**
     * Gets the capacity of this ByteBuffer's backing buffer.
     */
    capacity(): number;

    /**
     * Clears this ByteBuffer's offsets by setting ByteBuffer#offset to 0 and
     * ByteBuffer#limit to the backing buffer's capacity. Discards ByteBuffer#markedOffset.
     */
    clear(): this;

    /**
     * Creates a cloned instance of this ByteBuffer, preset with this ByteBuffer's values for ByteBuffer#offset, ByteBuffer#markedOffset and ByteBuffer#limit.
     */
    clone(copy?: boolean): ByteBuffer;

    /**
     * Compacts this ByteBuffer to be backed by a ByteBuffer#buffer of its contents' length. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit. Will set offset = 0 and limit = capacity and adapt ByteBuffer#markedOffset to the same relative position if set.
     */
    compact(begin?: number, end?: number): this;

    /**
     * Creates a copy of this ByteBuffer's contents. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit.
     */
    copy(begin?: number, end?: number): ByteBuffer;

    /**
     * Copies this ByteBuffer's contents to another ByteBuffer. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit.
     */
    copyTo(target: ByteBuffer, targetOffset?: number, sourceOffset?: number, sourceLimit?: number): this;

    /**
     * Makes sure that this ByteBuffer is backed by a ByteBuffer#buffer of at least the specified capacity. If the current capacity is exceeded, it will be doubled. If double the current capacity is less than the required capacity, the required capacity will be used instead.
     */
    ensureCapacity(capacity: number): this;

    /**
     * Overwrites this ByteBuffer's contents with the specified value. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit.
     */
    fill(value: number | string, begin?: number, end?: number): this;

    /**
     * Makes this ByteBuffer ready for a new sequence of write or relative read operations. Sets limit = offset and offset = 0. Make sure always to flip a ByteBuffer when all relative read or write operations are complete.
     */
    flip(): this;

    /**
     * Marks an offset on this ByteBuffer to be used later.
     */
    mark(offset?: number): this;

    /**
     * Sets the byte order.
     */
    order(littleEndian: boolean): this;

    /**
     * Prepends some data to this ByteBuffer. This will overwrite any contents before the specified offset up to the prepended data's length. If there is not enough space available before the specified offset, the backing buffer will be resized and its contents moved accordingly.
     */
    prepend(
        source: ByteBuffer | string | ArrayBuffer | Buffer,
        encoding?: string | number,
        offset?: number,
    ): this;

    /**
     * Prepends this ByteBuffer to another ByteBuffer. This will overwrite any contents before the specified offset up to the prepended data's length. If there is not enough space available before the specified offset, the backing buffer will be resized and its contents moved accordingly.
     */
    prependTo(target: ByteBuffer, offset?: number): this;

    /**
     * Prints debug information about this ByteBuffer's contents.
     */
    printDebug(out?: (text: string) => void): void;

    /**
     * Reads an 8bit signed integer. This is an alias of ByteBuffer#readInt8.
     */
    readByte(offset?: number): number;

    /**
     * Reads the specified number of bytes
     */
    readBytes(length: number, offset?: number): ByteBuffer;

    /**
     * Reads a NULL-terminated UTF8 encoded string. For this to work the string read must not contain any NULL characters itself.
     */
    readCString(): string;
    readCString(offset: number): { string: string; length: number };

    /**
     * Reads a 64bit float. This is an alias of ByteBuffer#readFloat64.
     */
    readDouble(offset?: number): number;

    /**
     * Reads a 32bit float. This is an alias of ByteBuffer#readFloat32.
     */
    readFloat(offset?: number): number;

    /**
     * Reads a 32bit float.
     */
    readFloat32(offset?: number): number;

    /**
     * Reads a 64bit float.
     */
    readFloat64(offset?: number): number;

    /**
     * Reads a length as uint32 prefixed UTF8 encoded string.
     */
    readIString(): string;
    readIString(offset: number): { string: string; length: number };

    /**
     * Reads a 32bit signed integer.This is an alias of ByteBuffer#readInt32.
     */
    readInt(offset?: number): number;

    /**
     * Reads a 16bit signed integer.
     */
    readInt16(offset?: number): number;

    /**
     * Reads a 32bit signed integer.
     */
    readInt32(offset?: number): number;

    /**
     * Reads a 64bit signed integer.
     */
    readInt64(offset?: number): Long;

    /**
     * Reads an 8bit signed integer.
     */
    readInt8(offset?: number): number;

    /**
     * Reads a 64bit signed integer. This is an alias of ByteBuffer#readInt64.
     */
    readLong(offset?: number): Long;

    /**
     * Reads a 16bit signed integer. This is an alias of ByteBuffer#readInt16.
     */
    readShort(offset?: number): number;

    /**
     * Reads an UTF8 encoded string. This is an alias of ByteBuffer#readUTF8String.
     */
    readString(length: number, metrics?: number): string;
    readString(length: number, metrics: number, offset: number): { string: string; length: number };

    /**
     * Reads an UTF8 encoded string.
     */
    readUTF8String(chars: number, metrics?: number): string;
    readUTF8String(chars: number, metrics: number, offset: number): { string: string; length: number };

    /**
     * Reads a 16bit unsigned integer.
     */
    readUint16(offset?: number): number;

    /**
     * Reads a 32bit unsigned integer.
     */
    readUint32(offset?: number): number;

    /**
     * Reads a 64bit unsigned integer.
     */
    readUint64(offset?: number): Long;
    /**
     * Reads an 8bit unsigned integer.
     */
    readUint8(offset?: number): number;

    /**
     * Reads a length as varint32 prefixed UTF8 encoded string.
     */
    readVString(): string;
    readVString(offset: number): { string: string; length: number };

    /**
     * Reads a 32bit base 128 variable-length integer.
     */
    readVarint32(): number;
    readVarint32(offset: number): { value: number; length: number };

    /**
     * Reads a zig-zag encoded 32bit base 128 variable-length integer.
     */
    readVarint32ZigZag(): number;
    readVarint32ZigZag(offset: number): { value: number; length: number };

    /**
     * Reads a 64bit base 128 variable-length integer. Requires Long.js.
     */
    readVarint64(): Long;
    readVarint64(offset: number): { value: Long; length: number };

    /**
     * Reads a zig-zag encoded 64bit base 128 variable-length integer. Requires Long.js.
     */
    readVarint64ZigZag(): Long;
    readVarint64ZigZag(offset: number): { value: Long; length: number };

    /**
     * Gets the number of remaining readable bytes. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit, so this returns limit - offset.
     */
    remaining(): number;

    /**
     * Resets this ByteBuffer's ByteBuffer#offset. If an offset has been marked through ByteBuffer#mark before, offset will be set to ByteBuffer#markedOffset, which will then be discarded. If no offset has been marked, sets offset = 0.
     */
    reset(): this;

    /**
     * Resizes this ByteBuffer to be backed by a buffer of at least the given capacity. Will do nothing if already that large or larger.
     */
    resize(capacity: number): this;

    /**
     * Reverses this ByteBuffer's contents
     */
    reverse(begin?: number, end?: number): this;

    /**
     * Skips the next length bytes. This will just advance
     */
    skip(length: number): this;

    /**
     * Slices this ByteBuffer by creating a cloned instance with offset = begin and limit = end.
     */
    slice(begin?: number, end?: number): ByteBuffer;

    /**
     * Returns a raw buffer compacted to contain this ByteBuffer's contents. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit. Will transparently ByteBuffer#flip this ByteBuffer if offset > limit but the actual offsets remain untouched. This is an alias of ByteBuffer#toBuffer.
     */
    toArrayBuffer(forceCopy?: boolean): ArrayBuffer;

    /**
     * Encodes this ByteBuffer's contents to a base64 encoded string.
     */
    toBase64(begin?: number, end?: number): string;

    /**
     * Encodes this ByteBuffer to a binary encoded string, that is using only characters 0x00-0xFF as bytes.
     */
    toBinary(begin?: number, end?: number): string;

    /**
     * Returns a copy of the backing buffer that contains this ByteBuffer's contents. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit. Will transparently ByteBuffer#flip this ByteBuffer if offset > limit but the actual offsets remain untouched.
     */
    toBuffer(forceCopy?: boolean): Buffer;

    /**
     * Encodes this ByteBuffer to a hex encoded string with marked offsets. Offset symbols are:
     *  < : offset,
     *  ' : markedOffset,
     *  > : limit,
     *  | : offset and limit,
     *  [ : offset and markedOffset,
     *  ] : markedOffset and limit,
     *  ! : offset, markedOffset and limit
     */
    toDebug(columns?: boolean): string | string[];

    /**
     * Encodes this ByteBuffer's contents to a hex encoded string.
     */
    toHex(begin?: number, end?: number): string;

    /**
     * Converts the ByteBuffer's contents to a string.
     */
    toString(encoding?: string): string;

    /**
     * Encodes this ByteBuffer's contents between ByteBuffer#offset and ByteBuffer#limit to an UTF8 encoded string.
     */
    toUTF8(): string;

    /**
     * Writes an 8bit signed integer. This is an alias of ByteBuffer#writeInt8.
     */
    writeByte(value: number, offset?: number): this;

    /**
     * Writes an array of bytes. This is an alias for append
     */
    writeBytes(
        source: ByteBuffer | Buffer | ArrayBuffer | Uint8Array | string,
        encoding?: string | number,
        offset?: number,
    ): this;

    /**
     * Writes a NULL-terminated UTF8 encoded string. For this to work the specified string must not contain any NULL characters itself.
     */
    writeCString(str: string, offset?: number): this;

    /**
     * Writes a 64bit float. This is an alias of ByteBuffer#writeFloat64.
     */
    writeDouble(value: number, offset?: number): this;

    /**
     * Writes a 32bit float. This is an alias of ByteBuffer#writeFloat32.
     */
    writeFloat(value: number, offset?: number): this;

    /**
     * Writes a 32bit float.
     */
    writeFloat32(value: number, offset?: number): this;

    /**
     * Writes a 64bit float.
     */
    writeFloat64(value: number, offset?: number): this;

    /**
     * Writes a length as uint32 prefixed UTF8 encoded string.
     */
    writeIString(str: string, offset?: number): this;

    /**
     * Writes a 32bit signed integer. This is an alias of ByteBuffer#writeInt32.
     */
    writeInt(value: number, offset?: number): this;

    /**
     * Writes a 16bit signed integer.
     */
    writeInt16(value: number, offset?: number): this;

    /**
     * Writes a 32bit signed integer.
     */
    writeInt32(value: number, offset?: number): this;

    /**
     * Writes a 64bit signed integer.
     */
    writeInt64(value: number | Long, offset?: number): this;

    /**
     * Writes an 8bit signed integer.
     */
    writeInt8(value: number, offset?: number): this;

    /**
     * Write a 64bit signed integer. This is an alias of ByteBuffer#writeInt64.
     */
    writeLong(value: number | Long, offset?: number): this;

    /**
     * Writes a 16bit signed integer. This is an alias of ByteBuffer#writeInt16.
     */
    writeShort(value: number, offset?: number): this;

    /**
     * Writes an UTF8 encoded string. This is an alias of ByteBuffer#writeUTF8String.
     */
    writeString(str: string): this;
    writeString(str: string, offset: number): number;

    /**
     * Writes an UTF8 encoded string.
     */
    writeUTF8String(str: string): this;
    writeUTF8String(str: string, offset?: number): number;

    /**
     * Writes a 16bit unsigned integer.
     */
    writeUint16(value: number, offset?: number): this;

    /**
     * Writes a 32bit unsigned integer.
     */
    writeUint32(value: number, offset?: number): this;

    /**
     * Writes a 64bit unsigned integer.
     */
    writeUint64(value: number | Long, offset?: number): this;

    /**
     * Writes an 8bit unsigned integer.
     */
    writeUint8(value: number, offset?: number): this;

    /**
     * Writes a length as varint32 prefixed UTF8 encoded string.
     */
    writeVString(str: string): this;
    writeVString(str: string, offset: number): number;

    /**
     * Writes a 32bit base 128 variable-length integer.
     */
    writeVarint32(value: number): this;
    writeVarint32(value: number, offset: number): number;

    /**
     * Writes a zig-zag encoded 32bit base 128 variable-length integer.
     */
    writeVarint32ZigZag(value: number): this;
    writeVarint32ZigZag(value: number, offset: number): number;

    /**
     * Writes a 64bit base 128 variable-length integer.
     */
    writeVarint64(value: number | Long): this;
    writeVarint64(value: number | Long, offset: number): number;

    /**
     * Writes a zig-zag encoded 64bit base 128 variable-length integer.
     */
    writeVarint64ZigZag(value: number | Long): this;
    writeVarint64ZigZag(value: number | Long, offset: number): number;
}
