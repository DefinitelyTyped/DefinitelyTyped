declare namespace adone.collection {
    namespace I {
        type Long = math.Long;

        type Longable = math.I.Longable;

        namespace ByteArray {
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

            type Wrappable = string | ByteArray | Buffer | Uint8Array | ArrayBuffer;

            type Metrics = "b" | "c";
        }
    }

    /**
     * Represents an array of bytes, enhanced Node.js Buffer
     */
    class ByteArray {
        readonly woffset: number;

        readonly roffset: number;

        readonly buffer: Buffer;

        readonly noAssert: boolean;

        /**
         * Constructs a new ByteArray
         *
         * @param capacity Initial capacity. Defaults to ByteArray.DEFAULT_CAPACITY(64)
         * @param noAssert Whether to skip assertions of offsets and values. Defaults to ByteArray.DEFAULT_NOASSERT(false)
         */
        constructor(capacity?: number, noAssert?: boolean);

        /**
         * Reads a BitSet as an array of booleans.
         *
         * @param offset Offset to read from. Will use and increase offset by length if omitted.
         */
        readBitSet(offset?: number): boolean[];

        /**
         * Reads the specified number of bytes.
         *
         * @param length Number of bytes to read
         * @param offset Offset to read from. Will use and increase offset by length if omitted.
         */
        read(length: number, offset?: number): ByteArray;

        /**
         * Reads an 8bit signed integer
         *
         * @param offset Offset to read from
         */
        readInt8(offset?: number): number;

        /**
         * Reads an 8bit unsigned integer
         *
         * @param offset Offset to read from
         */
        readUInt8(offset?: number): number;

        /**
         * Reads a 16bit signed le integer
         *
         * @param offset Offset to read from
         */
        readInt16LE(offset?: number): number;

        /**
         * Reads a 16bit unsigned le integer
         *
         * @param offset Offset to read from
         */
        readUInt16LE(offset?: number): number;

        /**
         * Reads a 16bit signed be integer
         *
         * @param offset Offset to read from
         */
        readInt16BE(offset?: number): number;

        /**
         * Reads a 16bit unsigned be integer
         *
         * @param offset Offset to read from
         */
        readUInt16BE(offset?: number): number;

        /**
         * Reads a 24bit unsigned be integer
         *
         * @param offset Offset to read from
         */
        readUInt24BE(offset?: number): number;

        /**
         * Reads a 32bit signed le integer
         *
         * @param offset Offset to read from
         */
        readInt32LE(offset?: number): number;

        /**
         * Reads a 32bit unsigned le integer
         *
         * @param offset Offset to read from
         */
        readUInt32LE(offset?: number): number;

        /**
         * Reads a 32bit signed be integer
         *
         * @param offset Offset to read from
         */
        readInt32BE(offset?: number): number;

        /**
         * Reads a 32bit unsigned be integer
         *
         * @param offset Offset to read from
         */
        readUInt32BE(offset?: number): number;

        /**
         * Reads a 64bit signed le integer as math.Long
         *
         * @param offset Offset to read from
         */
        readInt64LE(offset?: number): math.Long;

        /**
         * Reads a 64bit unsigned le integer as math.Long
         *
         * @param offset Offset to read from
         */
        readUInt64LE(offset?: number): math.Long;

        /**
         * Reads a 64bit signed be integer as math.Long
         *
         * @param offset Offset to read from
         */
        readInt64BE(offset?: number): math.Long;

        /**
         * Reads a 64bit unsigned be integer as math.Long
         *
         * @param offset Offset to read from
         */
        readUInt64BE(offset?: number): math.Long;

        /**
         * Reads a 32bit le float
         *
         * @param offset Offset to read from
         */
        readFloatLE(offset?: number): number;

        /**
         * Reads a 32bit be float
         *
         * @param offset Offset to read from
         */
        readFloatBE(offset?: number): number;

        /**
         * Reads a 64bit le float
         *
         * @param offset Offset to read from
         */
        readDoubleLE(offset?: number): number;

        /**
         * Reads a 64bit be float
         *
         * @param offset Offset to read from
         */
        readDoubleBE(offset?: number): number;

        /**
         * Appends some data to this ByteArray.
         * This will overwrite any contents behind the specified offset up to the appended data's length.
         *
         * @param source The source write from
         * @param offset Offset to write at
         * @param length length to read from the source
         * @param encoding encoding to use for wrapping the source in bytearray
         */
        write(source: I.ByteArray.Wrappable, offset?: number, length?: number, encoding?: string): this;

        /**
         * Writes the array as a bitset.
         * @param value Array of booleans to write
         */
        writeBitSet(value: number[]): this;

        /**
         * Writes the array as a bitset.
         * @param value Array of booleans to write
         * @param offset Offset to write at
         */
        writeBitSet(value: number[], offset: number): number;

        /**
         * Writes a buffer at the given offset
         * @param buf Buffer to write
         * @param offset Offset to write at
         */
        writeBuffer(buf: Buffer, offset?: number): this;

        /**
         * Writes an 8bit signed integer
         *
         * @param offset Offset to write at
         */
        writeInt8(value: number, offset?: number): this;

        /**
         * Writes an 8bit unsigned integer
         *
         * @param offset Offset to write at
         */
        writeUInt8(value: number, offset?: number): this;

        /**
         * Writes a 16bit signed le integer
         *
         * @param offset Offset to write at
         */
        writeInt16LE(value: number, offset?: number): this;

        /**
         * Writes a 16bit signed be integer
         *
         * @param offset Offset to write at
         */
        writeInt16BE(value: number, offset?: number): this;

        /**
         * Writes a 16bit unsigned le integer
         *
         * @param offset Offset to write at
         */
        writeUInt16LE(value: number, offset?: number): this;

        /**
         * Writes a 16bit unsigned be integer
         *
         * @param offset Offset to write at
         */
        writeUInt16BE(value: number, offset?: number): this;

        /**
         * Writes a 24bit unsigned be integer
         *
         * @param offset Offset to write at
         */
        writeUInt24BE(value: number, offset?: number): this;

        /**
         * Writes a 32bit signed le integer
         *
         * @param offset Offset to write at
         */
        writeInt32LE(value: number, offset?: number): this;

        /**
         * Writes a 32bit signed be integer
         *
         * @param offset Offset to write at
         */
        writeInt32BE(value: number, offset?: number): this;

        /**
         * Writes a 32bit unsigned le integer
         *
         * @param offset Offset to write at
         */
        writeUInt32LE(value: number, offset?: number): this;

        /**
         * Writes a 32bit unsigned be integer
         *
         * @param offset Offset to write at
         */
        writeUInt32BE(value: number, offset?: number): this;

        /**
         * Writes a 64bit signed le long integer
         *
         * @param offset Offset to write at
         */
        writeInt64LE(value: math.Long | string | number, offset?: number): this;

        /**
         * Writes a 64bit signed be long integer
         *
         * @param offset Offset to write at
         */
        writeInt64BE(value: math.Long | string | number, offset?: number): this;

        /**
         * Writes a 64bit unsigned le long integer
         *
         * @param offset Offset to write at
         */
        writeUInt64LE(value: math.Long | string | number, offset?: number): this;

        /**
         * Writes a 64bit unsigned be long integer
         *
         * @param offset Offset to write at
         */
        writeUInt64BE(value: math.Long | string | number, offset?: number): this;

        /**
         * Writes a 32bit le float
         *
         * @param offset Offset to write at
         */
        writeFloatLE(value: number, offset?: number): this;

        /**
         * Writes a 32bit be float
         *
         * @param offset Offset to write at
         */
        writeFloatBE(value: number, offset?: number): this;

        /**
         * Writes a 64bit le float
         *
         * @param offset Offset to write at
         */
        writeDoubleLE(value: number, offset?: number): this;

        /**
         * Writes a 64bit be float
         *
         * @param offset Offset to write at
         */
        writeDoubleBE(value: number, offset?: number): this;

        /**
         * Writes a 32bit base 128 variable-length integer
         */
        writeVarint32(value: number): this;

        /**
         * Writes a 32bit base 128 variable-length integer
         *
         * @param offset Offset to write at
         */
        writeVarint32(value: number, offset: number): number;

        /**
         * Writes a zig-zag encoded 32bit base 128 variable-length integer
         */
        writeVarint32ZigZag(value: number): this;

        /**
         * Writes a zig-zag encoded 32bit base 128 variable-length integer
         *
         * @param offset Offset to write at
         */
        writeVarint32ZigZag(value: number, offset: number): number;

        /**
         * Reads a 32bit base 128 variable-length integer
         */
        readVarint32(): number;

        /**
         * Reads a 32bit base 128 variable-length integer
         *
         * @param offset Offset to read from
         */
        readVarint32(offset: number): I.ByteArray.Varint32;

        /**
         * Reads a zig-zag encoded 32bit base 128 variable-length integer
         */
        readVarint32ZigZag(): number;

        /**
         * Reads a zig-zag encoded 32bit base 128 variable-length integer
         *
         * @param offset Offset to read from
         */
        readVarint32ZigZag(offset: number): I.ByteArray.Varint32;

        /**
         * Writes a 64bit base 128 variable-length integer
         */
        writeVarint64(value: math.Long | string | number): this;

        /**
         * Writes a 64bit base 128 variable-length integer
         *
         * @param offset Offset to write at
         */
        writeVarint64(value: math.Long | string | number, offset: number): number;

        /**
         * Writes a zig-zag encoded 64bit base 128 variable-length integer
         */
        writeVarint64ZigZag(value: math.Long | string | number): this;

        /**
         * Writes a zig-zag encoded 64bit base 128 variable-length integer
         *
         * @param offset Offset to write at
         */
        writeVarint64ZigZag(value: math.Long | string | number, offset: number): number;

        /**
         * Reads a 64bit base 128 variable-length integer
         */
        readVarint64(): I.Long;

        /**
         * Reads a 64bit base 128 variable-length integer
         *
         * @param offset Offset to read from
         */
        readVarint64(offset: number): I.ByteArray.Varint64;

        /**
         * Reads a zig-zag encoded 64bit base 128 variable-length integer
         */
        readVarint64ZigZag(): math.Long;

        /**
         * Reads a zig-zag encoded 64bit base 128 variable-length integer
         *
         * @param offset Offset to read from
         */
        readVarint64ZigZag(offset: number): I.ByteArray.Varint64;

        /**
         * Writes a NULL-terminated UTF8 encoded string.
         * For this to work the specified string must not contain any NULL characters itself
         */
        writeCString(str: string): this;

        /**
         * Writes a NULL-terminated UTF8 encoded string.
         * For this to work the specified string must not contain any NULL characters itself
         *
         * @param offset Offset to write at
         */
        writeCString(str: string, offset: number): number;

        /**
         * Reads a NULL-terminated UTF8 encoded string.
         * For this to work the string read must not contain any NULL characters itself
         */
        readCString(): string;

        /**
         * Reads a NULL-terminated UTF8 encoded string.
         * For this to work the string read must not contain any NULL characters itself
         *
         * @param offset Offset to read from
         */
        readCString(offset: number): I.ByteArray.String;

        /**
         * Writes an UTF8 encoded string
         */
        writeString(str: string): this;

        /**
         * Writes an UTF8 encoded string
         *
         * @param offset Offset to write at
         */
        writeString(str: string, offset: number): number;

        /**
         * Reads an UTF8 encoded string
         *
         * @param length Number of characters or bytes to read
         * @param metrics Metrics specifying what n is meant to count. Defaults to ByteArray.METRICS_CHARS("c")
         */
        readString(length: number, metrics?: I.ByteArray.Metrics): string;

        /**
         * Reads an UTF8 encoded string
         *
         * @param length Number of characters or bytes to read
         * @param metrics Metrics specifying what n is meant to count. Defaults to ByteArray.METRICS_CHARS("c")
         * @param offset Offset to read from
         */
        readString(length: number, metrics: I.ByteArray.Metrics, offset: number): I.ByteArray.String;

        /**
         * Reads an UTF8 encoded string
         *
         * @param length Number of characters or bytes to read
         * @param offset Offset to read from
         */
        readString(length: number, offset: number): I.ByteArray.String;

        /**
         * Writes a length as varint32 prefixed UTF8 encoded string
         */
        writeVString(str: string): this;

        /**
         * Writes a length as varint32 prefixed UTF8 encoded string
         *
         * @param offset Offset to read from
         */
        writeVString(str: string, offset: number): number;

        /**
         * Reads a length as varint32 prefixed UTF8 encoded string
         */
        readVString(): string;

        /**
         * Reads a length as varint32 prefixed UTF8 encoded string
         *
         * @param offset Offset to read from
         */
        readVString(offset: number): I.ByteArray.String;

        /**
         * Appends this ByteArray's contents to another ByteArray.
         * This will overwrite any contents behind the specified offset up to the length of this ByteArray's data
         *
         * @param offset Offset to append to
         */
        appendTo(target: ByteArray, offset?: number): this;

        /**
         * Enables or disables assertions of argument types and offsets.
         * Assertions are enabled by default but you can opt to disable them if your code already makes sure that everything is valid
         */
        assert(assert?: boolean): this;

        /**
         * Gets the capacity of this ByteArray's backing buffer
         */
        capacity(): number;

        /**
         * Clears this ByteArray's offsets by setting offset to 0 and limit to the backing buffer's capacity
         */
        clear(): this;

        /**
         * Creates a cloned instance of this ByteArray,
         * preset with this ByteArray's values for offset, markedOffset and limit
         *
         * @param copy Whether to copy the backing buffer or to return another view on the same, false by default
         */
        clone(copy?: boolean): ByteArray;

        /**
         * Compacts this ByteArray to be backed by a buffer of its contents' length.
         * Will set offset = 0 and limit = capacity and adapt markedOffset to the same relative position if set
         *
         * @param begin Offset to start at, buffer offset by default
         * @param end Offset to end at, buffer limit by default
         */
        compact(begin?: number, end?: number): this;

        /**
         * Creates a copy of this ByteArray's contents.
         *
         * @param begin Begin offset, buffer offset by default
         * @param end End offset, buffer limit by default
         */
        copy(begin?: number, end?: number): ByteArray;

        /**
         * Copies this ByteArray's contents to another ByteArray.
         *
         * @param targetOffset Offset to copy to. Will use and increase the target's offset by the number of bytes copied if omitted
         * @param sourceOffset Offset to start copying from. Will use and increase offset by the number of bytes copied if omitted
         * @param sourceLimit Offset to end copying from, defaults to the buffer limit
         */
        copyTo(target: ByteArray, targetOffset?: number, souceOffset?: number, sourceLimit?: number): this | ByteArray;

        /**
         * Makes sure that this ByteArray is backed by a ByteArray#buffer of at least the specified capacity.
         * If the current capacity is exceeded, it will be doubled.
         * If double the current capacity is less than the required capacity, the required capacity will be used instead
         */
        ensureCapacity(capacity: number): this;

        /**
         * Overwrites this ByteArray's contents with the specified value.
         *
         * @param value Byte value to fill with. If given as a string, the first character is used
         * @param begin Begin offset. Will use and increase offset by the number of bytes written if omitted. defaults to offset
         * @param end End offset, defaults to limit.
         */
        fill(value: string | number, begin?: number, end?: number): this;

        /**
         * Makes this ByteArray ready for a new sequence of write or relative read operations.
         * Sets limit = offset and offset = 0.
         * Make sure always to flip a ByteArray when all relative read or write operations are complete
         */
        flip(): this;

        /**
         * Marks an offset on this ByteArray to be used later
         *
         * @param offset Offset to mark. Defaults to offset.
         */
        mark(offset?: number): this;

        /**
         * Prepends some data to this ByteArray.
         * This will overwrite any contents before the specified offset up to the prepended data's length.
         * If there is not enough space available before the specified offset,
         * the backing buffer will be resized and its contents moved accordingly
         *
         * @param source Data to prepend
         * @param offset Offset to prepend at. Will use and decrease offset by the number of bytes prepended if omitted.
         */
        prepend(source: I.ByteArray.Wrappable, offset: number): this;

        /**
         * Prepends some data to this ByteArray.
         * This will overwrite any contents before the specified offset up to the prepended data's length.
         * If there is not enough space available before the specified offset,
         * the backing buffer will be resized and its contents moved accordingly
         *
         * @param source Data to prepend
         * @param encoding Encoding if data is a string
         * @param offset Offset to prepend at. Will use and decrease offset by the number of bytes prepended if omitted.
         */
        prepend(source: I.ByteArray.Wrappable, encoding?: string, offset?: number): this;

        /**
         * Prepends this ByteArray to another ByteArray.
         * This will overwrite any contents before the specified offset up to the prepended data's length.
         * If there is not enough space available before the specified offset,
         * the backing buffer will be resized and its contents moved accordingly
         *
         * @param offset Offset to prepend at
         */
        prependTo(target: ByteArray, offset?: number): this;

        /**
         * Gets the number of remaining readable bytes
         */
        remaining(): number;

        /**
         * Resets this ByteArray's offset.
         * If an offset has been marked through mark before, offset will be set to markedOffset, which will then be discarded.
         * If no offset has been marked, sets offset = 0
         */
        reset(): this;

        /**
         * Resizes this ByteArray to be backed by a buffer of at least the given capacity.
         * Will do nothing if already that large or larger.
         *
         * @param capacity    Capacity required
         */
        resize(capacity: number): this;

        /**
         * Reverses this ByteArray's contents.
         *
         * @param begin Offset to start at, defaults to offset
         * @param end Offset to end at, defaults to limit
         */
        reverse(begin?: number, end?: number): this;

        /**
         * Skips the next length bytes. This will just advance
         */
        skip(length: number): this;

        /**
         * Slices this ByteArray by creating a cloned instance with offset = begin and limit = end
         *
         * @param begin Begin offset, defaults to offset
         * @param end End offset, defaults to limit
         */
        slice(begin?: number, end?: number): ByteArray;

        /**
         * Returns a copy of the backing buffer that contains this ByteArray's contents.
         *
         * @param forceCopy If true returns a copy, otherwise returns a view referencing the same memory if possible, false by default
         * @param begin Begin offset, offset by default
         * @param end End offset, limit by default
         */
        toBuffer(forceCopy?: boolean, begin?: number, end?: number): Buffer;

        /**
         * Returns a raw buffer compacted to contain this ByteArray's contents
         */
        toArrayBuffer(): ArrayBuffer;

        /**
         * Converts the ByteArray's contents to a string
         *
         * @param encoding Output encoding
         * @param begin Begin offset, offset by default
         * @param end End offset, limit by default
         */
        toString(encoding?: string, begin?: number, end?: number): string;

        /**
         * Encodes this ByteArray's contents to a base64 encoded string
         *
         * @param begin Begin offset, offset by default
         * @param end End offset, limit by default
         */
        toBase64(begin?: number, end?: number): string;

        /**
         * Encodes this ByteArray to a binary encoded string, that is using only characters 0x00-0xFF as bytes
         *
         * @param begin Begin offset, offset by default
         * @param end End offset, limit by default
         */
        toBinary(begin?: number, end?: number): string;

        /**
         * Encodes this ByteArray to a hex encoded string with marked offsets
         *
         * @param columns If true returns two columns hex + ascii, defaults to false
         */
        toDebug(columns?: boolean): string;

        /**
         * Encodes this ByteArray's contents to a hex encoded string
         *
         * @param begin Begin offset, offset by default
         * @param end End offset, limit by default
         */
        toHex(begin?: number, end?: number): string;

        /**
         * Encodes this ByteArray's contents to an UTF8 encoded string
         *
         * @param begin Begin offset, offset by default
         * @param end End offset, limit by default
         */
        toUTF8(begin?: number, end?: number): string;

        static accessor(): typeof Buffer;

        /**
         * Allocates a new ByteArray backed by a buffer of the specified capacity.
         *
         * @param capacity Initial capacity. Defaults to ByteArray.DEFAULT_CAPACITY(64)
         * @param noAssert Whether to skip assertions of offsets and values. Defaults to ByteArray.DEFAULT_NOASSERT(false)
         */
        static allocate(capacity?: number, noAssert?: boolean): ByteArray;

        /**
         * Concatenates multiple ByteArrays into one
         *
         * @param encoding Encoding for strings
         * @param noAssert Whether to skip assertions of offsets and values. Defaults to ByteArray.DEFAULT_NOASSERT(false)
         */
        static concat(buffers: I.ByteArray.Wrappable[], encoding?: string, noAssert?: boolean): ByteArray;

        static type(): typeof Buffer;

        /**
         * Wraps a buffer or a string.
         * Sets the allocated ByteArray's offset to 0 and its limit to the length of the wrapped data
         *
         * @param encoding Encoding for strings
         * @param noAssert Whether to skip assertions of offsets and values. Defaults to ByteArray.DEFAULT_NOASSERT(false)
         */
        static wrap(buffer: I.ByteArray.Wrappable, encoding?: string, noAssert?: boolean): ByteArray;

        /**
         * Calculates the actual number of bytes required to store a 32bit base 128 variable-length integer
         */
        static calculateVarint32(value: number): number;

        /**
         * Zigzag encodes a signed 32bit integer so that it can be effectively used with varint encoding
         */
        static zigZagEncode32(n: number): number;

        /**
         * Decodes a zigzag encoded signed 32bit integer
         */
        static zigZagDecode32(n: number): number;

        /**
         * Calculates the actual number of bytes required to store a 64bit base 128 variable-length integer
         */
        static calculateVarint64(value: number | string): number;

        /**
         * Zigzag encodes a signed 64bit integer so that it can be effectively used with varint encoding
         */
        static zigZagEncode64(value: number | string | I.Long): I.Long;

        /**
         * Decodes a zigzag encoded signed 64bit integer.
         */
        static zigZagDecode64(value: number | string | I.Long): I.Long;

        /**
         * Calculates the number of UTF8 characters of a string.
         * JavaScript itself uses UTF-16,
         * so that a string's length property does not reflect its actual UTF8 size if it contains code points larger than 0xFFFF
         */
        static calculateUTF8Chars(str: string): number;

        /**
         *  Calculates the number of UTF8 bytes of a string.
         */
        static calculateString(str: string): number;

        /**
         * Decodes a base64 encoded string to a ByteArray
         */
        static fromBase64(str: string): ByteArray;

        /**
         * Encodes a binary string to base64 like window.btoa does
         */
        static btoa(str: string): string;

        /**
         * Decodes a base64 encoded string to binary like window.atob does
         */
        static atob(b64: string): string;

        /**
         * Decodes a binary encoded string, that is using only characters 0x00-0xFF as bytes, to a ByteArray
         */
        static fromBinary(str: string): ByteArray;

        /**
         * Decodes a hex encoded string with marked offsets to a ByteArray
         */
        static fromDebug(str: string, noAssert?: boolean): ByteArray;

        /**
         * Decodes a hex encoded string to a ByteArray
         */
        static fromHex(str: string, noAssert?: boolean): ByteArray;

        /**
         * Decodes an UTF8 encoded string to a ByteArray
         */
        static fromUTF8(str: string, noAssert?: boolean): ByteArray;

        /**
         * Default initial capacity
         */
        static DEFAULT_CAPACITY: number;

        /**
         * Default no assertions flag
         */
        static DEFAULT_NOASSERT: boolean;

        /**
         * Maximum number of bytes required to store a 32bit base 128 variable-length integer
         */
        static MAX_VARINT32_BYTES: number;

        /**
         * Maximum number of bytes required to store a 64bit base 128 variable-length integer
         */
        static MAX_VARINT64_BYTES: number;

        /**
         * Metrics representing number of UTF8 characters. Evaluates to `c`.
         */
        static METRICS_CHARS: string;

        /**
         * Metrics representing number of bytes. Evaluates to `b`.
         */
        static METRICS_BYTES: string;
    }
}
