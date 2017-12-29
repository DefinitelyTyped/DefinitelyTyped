declare namespace adone {
    namespace collection {
        namespace I.LinkedList {
            /**
             * Represents the node of a linked list
             */
            interface Node<T> {
                /**
                 * The next node
                 */
                next?: Node<T>;

                /**
                 * The previous node
                 */
                prev?: Node<T>;

                /**
                 * The value this node contains
                 */
                value: T;
            }
        }

        /**
         * Represents a linked list
         */
        class LinkedList<T = any> {
            /**
             * The maximum length of the list
             */
            readonly maxLength: number;

            /**
             * Current length of the list
             */
            readonly length: number;

            /**
             * Whether the list is autoresizable
             */
            readonly autoresize: boolean;

            /**
             * @param maxLength Maximum length of the linked list
             */
            constructor(maxLength?: number);

            /**
             * Whether the list is full
             */
            readonly full: boolean;

            /**
             * Whether the list is empty
             */
            readonly empty: boolean;

            /**
             * Resizes the list
             */
            resize(newLength: number): this;

            /**
             * Adds a new node to the end
             *
             * @returns Added node
             */
            push(value: T): I.LinkedList.Node<T>;

            /**
             * Removes the last node, returns undefined if the list is empty
             */
            pop(): T | undefined;

            /**
             * Removes the first node, returns undefined if the list is empty
             */
            shift(): T | undefined;

            /**
             * Inserts a new node at the beginning of the list
             *
             * @returns Added node
             */
            unshift(value: T): I.LinkedList.Node<T>;

            /**
             * Moves the given node to the end of the list
             */
            pushNode(node: I.LinkedList.Node<T>): void;

            /**
             * Moved the given node to the beginning of the list
             */
            unshiftNode(node: I.LinkedList.Node<T>): void;

            /**
             * Removes the given node from the list
             */
            removeNode(node: I.LinkedList.Node<T>): void;

            /**
             * Clears the list
             *
             * @param strong Whether to reset all the node's values
             */
            clear(strong?: boolean): void;

            /**
             * Convers the list to an array
             */
            toArray(): T[];

            /**
             * The first element of the list
             */
            readonly front: T;

            /**
             * The last element of the list
             */
            readonly back: T;

            /**
             * Returns an iterator over the list elements
             */
            [Symbol.iterator](): IterableIterator<T>;

            /**
             * Returns the next node for the given node
             */
            nextNode(node: I.LinkedList.Node<T>): I.LinkedList.Node<T>;

            /**
             * Maps this linked list to a new one using the given function
             */
            map<R>(fn: (value: T, index: number) => R): LinkedList<R>;

            /**
             * Invokes the given callback for each value from the beginning to the end (much faster than for-of).
             * If the given function returns false it stops iterating.
             */
            forEach(callback: (value: T, index: number) => void | boolean): void;

            /**
             * Default length of a new created linked list
             */
            static DEFAULT_LENGTH: number;
        }

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
             * @param offset Offset to write to
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
             * @param offset Offset to write to
             */
            writeBitSet(value: number[], offset: number): number;

            /**
             * Writes an 8bit signed integer
             *
             * @param offset Offset to write to
             */
            writeInt8(value: number, offset?: number): this;

            /**
             * Writes an 8bit unsigned integer
             *
             * @param offset Offset to write to
             */
            writeUInt8(value: number, offset?: number): this;

            /**
             * Writes a 16bit signed le integer
             *
             * @param offset Offset to write to
             */
            writeInt16LE(value: number, offset?: number): this;

            /**
             * Writes a 16bit signed be integer
             *
             * @param offset Offset to write to
             */
            writeInt16BE(value: number, offset?: number): this;

            /**
             * Writes a 16bit unsigned le integer
             *
             * @param offset Offset to write to
             */
            writeUInt16LE(value: number, offset?: number): this;

            /**
             * Writes a 16bit unsigned be integer
             *
             * @param offset Offset to write to
             */
            writeUInt16BE(value: number, offset?: number): this;

            /**
             * Writes a 32bit signed le integer
             *
             * @param offset Offset to write to
             */
            writeInt32LE(value: number, offset?: number): this;

            /**
             * Writes a 32bit signed be integer
             *
             * @param offset Offset to write to
             */
            writeInt32BE(value: number, offset?: number): this;

            /**
             * Writes a 32bit unsigned le integer
             *
             * @param offset Offset to write to
             */
            writeUInt32LE(value: number, offset?: number): this;

            /**
             * Writes a 32bit unsigned be integer
             *
             * @param offset Offset to write to
             */
            writeUInt32BE(value: number, offset?: number): this;

            /**
             * Writes a 64bit signed le long integer
             *
             * @param offset Offset to write to
             */
            writeInt64LE(value: math.Long | string | number, offset?: number): this;

            /**
             * Writes a 64bit signed be long integer
             *
             * @param offset Offset to write to
             */
            writeInt64BE(value: math.Long | string | number, offset?: number): this;

            /**
             * Writes a 64bit unsigned le long integer
             *
             * @param offset Offset to write to
             */
            writeUInt64LE(value: math.Long | string | number, offset?: number): this;

            /**
             * Writes a 64bit unsigned be long integer
             *
             * @param offset Offset to write to
             */
            writeUInt64BE(value: math.Long | string | number, offset?: number): this;

            /**
             * Writes a 32bit le float
             *
             * @param offset Offset to write to
             */
            writeFloatLE(value: number, offset?: number): this;

            /**
             * Writes a 32bit be float
             *
             * @param offset Offset to write to
             */
            writeFloatBE(value: number, offset?: number): this;

            /**
             * Writes a 64bit le float
             *
             * @param offset Offset to write to
             */
            writeDoubleLE(value: number, offset?: number): this;

            /**
             * Writes a 64bit be float
             *
             * @param offset Offset to write to
             */
            writeDoubleBE(value: number, offset?: number): this;

            /**
             * Writes a 32bit base 128 variable-length integer
             */
            writeVarint32(value: number): this;

            /**
             * Writes a 32bit base 128 variable-length integer
             *
             * @param offset Offset to write to
             */
            writeVarint32(value: number, offset: number): number;

            /**
             * Writes a zig-zag encoded 32bit base 128 variable-length integer
             */
            writeVarint32ZigZag(value: number): this;

            /**
             * Writes a zig-zag encoded 32bit base 128 variable-length integer
             *
             * @param offset Offset to write to
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
             * @param offset Offset to write to
             */
            writeVarint64(value: math.Long | string | number, offset: number): number;

            /**
             * Writes a zig-zag encoded 64bit base 128 variable-length integer
             */
            writeVarint64ZigZag(value: math.Long | string | number): this;

            /**
             * Writes a zig-zag encoded 64bit base 128 variable-length integer
             *
             * @param offset Offset to write to
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
             * @param offset Offset to write to
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
             * @param offset Offset to write to
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
             * @param capacity	Capacity required
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

        /**
         * Represents a queue
         */
        class Queue<S = any, T = S> {
            /**
             * Whether the queue is full
             */
            readonly full: boolean;

            /**
             * The length of the queue
             */
            readonly length: number;

            /**
             * Whether the queue is empty
             */
            readonly empty: boolean;

            /**
             * Inserts a new element at the end
             */
            push(x: S): this;

            /**
             * Removes and returns an element from the beginning
             */
            pop(): T | undefined;
        }

        /**
         * Represents an asynchronous queue, each pop is a promise
         * that is resolved with an existing element or an element that will be pushed in the future
         */
        class AsyncQueue<T = any> extends Queue<T, Promise<T>> {
            /**
             * Returns a promise that will be resolved with an existing element or an element that will be pushed in the future
             */
            pop(): Promise<T>;
        }

        namespace I.PriorityQueue {
            interface ConstructorOptions<T> {
                /**
                 * Function that compares objects.
                 *
                 * Must return a positive value if a > b, a negative if a < b, and zero for equal objects
                 */
                compare?(a: T, b: T): number;

                /**
                 * Function that evaluates the priority value by the given objects,
                 * if the returned value > 0, then the first argument has higher priority,
                 * = 0 same priority, < 0 lower priority.
                 * By default the top element is an element that has the highest priority,
                 * the default priority function is equal to the compare function
                 */
                priority?(a: T, b: T): number;
            }
        }

        /**
         * Represents a priority queue
         */
        class PriorityQueue<T = any> {
            /**
             * Whether the queue is empty
             */
            readonly empty: boolean;

            /**
             * The length of the queue
             */
            readonly length: number;

            constructor(options?: I.PriorityQueue.ConstructorOptions<T>);

            /**
             * Clones the queue
             */
            clone(): PriorityQueue<T>;

            /**
             * Inserts a new element
             */
            push(x: T): this;

            /**
             * Removes the top element (that has the highest priority)
             */
            pop(): T | undefined;

            /**
             * Deletes the given element from the queue
             */
            delete(x: T): this;

            /**
             * Replaces the top element (pop + push)
             */
            replace(x: T): T;

            /**
             * Faster push + pop
             */
            pushpop(x: T): T;

            /**
             * Converts the queue to an array, it works with a clone of the queue, so the original queue is untouched
             */
            toArray(): T[];

            /**
             * Creates a queue object from the given iterable
             */
            static from<T>(iterable: Iterable<T>, options?: I.PriorityQueue.ConstructorOptions<T>): PriorityQueue<T>;
        }

        /**
         * Represents a faster LRU cache but with less functionality
         */
        class FastLRU<K = any, V = any> {
            /**
             * @param size Cache size, unlimited by default
             */
            constructor(size?: number, options?: {
                /**
                 * Function that is called when a value is deleted
                 */
                dispose?(key: K, value: V): void
            });

            /**
             * The actual size of the cache
             */
            readonly size: number;

            /**
             * Gets the value by the given key
             */
            get(key: K): V | undefined;

            /**
             * Sets a new value for the given key
             */
            set(key: K, value: V): void;

            /**
             * Deletes the given key from the cache
             */
            delete(key: K): boolean;

            /**
             * Checks whether the cache has an element with the given key
             */
            has(key: K): boolean;

            /**
             * Returns the keys iterator
             */
            keys(): IterableIterator<K>;

            /**
             * Returns the values iterator
             */
            values(): IterableIterator<V>;

            /**
             * Returns the entries iterator
             */
            entries(): IterableIterator<[K, V]>;

            /**
             * Clears the cache
             */
            clear(): void;
        }

        /**
         * Represents a stack
         */
        class Stack<T = any> {
            /**
             * Whether the stack is empty
             */
            readonly empty: boolean;

            /**
             * The top element of the stack
             */
            readonly top: T;

            /**
             * Inserts a new element
             */
            push(x: T): this;

            /**
             * Removes the top element
             */
            pop(): T | undefined;

            /**
             * Returns an iterator over the values
             */
            [Symbol.iterator](): IterableIterator<T>;

            /**
             * Creates a stack and pushed all the values from the given iterable object
             */
            static from<T>(iterable: Iterable<T>): Stack<T>;
        }

        namespace I.BinarySearchTree {
            interface ConstructorOptions<K, V, Tree> {
                /**
                 * The parent tree
                 */
                parent?: Tree;

                /**
                 * Value to keep in this node
                 */
                value?: V;

                /**
                 * WHether the values must be unique, false by default.
                 * If false you can store many values for same keys, otherwise only one
                 */
                unique?: boolean;

                /**
                 * Custom keys comparator, by default if a > b => -1, a < b -1, a === b => 0
                 */
                compareKeys?(a: K, b: K): number;

                /**
                 * Function that defines whether 2 values are the same, by default a === b
                 */
                checkValueEquality?(a: V, b: V): boolean;
            }

            interface Query<K> {
                $lt?: K;
                $lte?: K;
                $gt?: K;
                $gte?: K;
            }
        }

        /**
         * Represents a binary search tree
         */
        class BinarySearchTree<K = any, V = any> {
            constructor(options?: I.BinarySearchTree.ConstructorOptions<K, V, BinarySearchTree<K, V>>);

            /**
             * Returns the max descendant tree
             */
            getMaxKeyDescendant(): BinarySearchTree<K, V>;

            /**
             * Returns the maximum key
             */
            getMaxKey(): K;

            /**
             * Returns the min descendant tree
             */
            getMinKeyDescendant(): BinarySearchTree<K, V>;

            /**
             * Returns the minumum key
             */
            getMinKey(): K;

            /**
             * Traverses the tree and calls the given function for each node
             */
            checkAllNodesFullfillCondition(test: (key: K, value: V) => void): void;

            /**
             * Checks whether the tree is a binary search tree
             */
            checkIsBST(): void;

            /**
             * Returns the of keys in the tree
             */
            getNumberOfKeys(): number;

            /**
             * Inserts a new key/value
             */
            insert(key: K, value: V): void;

            /**
             * Searches the given key in the tree
             */
            search(key: K): V[];

            /**
             * Returns all the values from the given key bounds
             */
            betweenBounds(query: I.BinarySearchTree.Query<K>): V[];

            /**
             * Deletes the given key/value from the tree
             */
            delete(key: K, value?: V): void;

            /**
             * Executed the given callback for each node from left to right
             */
            executeOnEveryNode(fn: (tree: BinarySearchTree<K, V>) => void): void;

            /**
             * Prints the tree
             */
            prettyPrint(printData?: boolean, spacing?: string): void;
        }

        /**
         * Represents an AVL tree, a self-balancing binary search tree
         */
        class AVLTree<K = any, V = any> {
            constructor(options?: I.BinarySearchTree.ConstructorOptions<K, V, AVLTree<K, V>>);

            /**
             * Checks whether the tree is an avl tree
             */
            checkIsAVLT(): void;

            /**
             * Inserts a new key/value
             */
            insert(key: K, value: V): void;

            /**
             * Deletes the given key/value from the tree
             */
            delete(key: K, value?: V): void;

            /**
             * Returns the of keys in the tree
             */
            getNumberOFKeys(): number;

            /**
             * Searches the given key in the tree
             */
            search(key: K): V[];

            /**
             * Returns all the values from the given key bounds
             */
            betweenBounds(query: I.BinarySearchTree.Query<K>): V[];

            /**
             * Executed the given callback for each node from left to right
             */
            executeOnEveryNode(fn: (tree: AVLTree<K, V>) => void): void;

            /**
             * Prints the tree
             */
            prettyPrint(printDate?: boolean, spacing?: string): void;
        }

        namespace I.RedBlackTree {
            interface Node<K, V> {
                /**
                 * The key associated to the node
                 */
                key: K;

                /**
                 * The value associated to the node
                 */
                value: V;

                /**
                 * The left subtree of the node
                 */
                left?: Node<K, V>;

                /**
                 * The right subtree of the node
                 */
                right?: Node<K, V>;
            }

            interface Iterator<K, V> {
                /**
                 * Checks if the iterator is valid
                 */
                readonly valid: boolean;

                /**
                 * The value of the node at the iterator's current position, null if invalid
                 */
                readonly node: Node<K, V> | null;

                /**
                 * The key of the item referenced by the iterator, undefined if invalid
                 */
                readonly key?: K;

                /**
                 * The value of the item referenced by the iterator, undefined if invalid
                 */
                readonly value?: V;

                /**
                 * Returns the position of this iterator in the sequence
                 */
                readonly index: number;

                /**
                 * If true, then the iterator is not at the end of the sequence
                 */
                readonly hasNext: boolean;

                /**
                 * If true, then the iterator is not at the beginning of the sequence
                 */
                readonly hasPrev: boolean;

                /**
                 * The tree associated to the iterator
                 */
                tree: RedBlackTree<K, V>;

                /**
                 * Makes a copy of the iterator
                 */
                clone(): Iterator<K, V>;

                /**
                 * Removes the item at the position of the iterator and returns a new rb-tree
                 */
                remove(): RedBlackTree<K, V>;

                /**
                 * Advances the iterator to the next position
                 */
                next(): void;

                /**
                 * Updates the value of the node in the tree at this iterator and returns a new rb-tree
                 */
                update(value: V): RedBlackTree<K, V>;

                /**
                 * Moves the iterator backward one element
                 */
                prev(): void;
            }
        }

        /**
         * Represents a fully persistent red-black tree
         */
        class RedBlackTree<K = any, V = any> {
            /**
             * The root node of the tree
             */
            root: I.RedBlackTree.Node<K, V>;

            constructor(compare?: (a: K, b: K) => number, root?: RedBlackTree<K, V>);

            /**
             * A sorted array of all the keys in the tree
             */
            readonly keys: K[];

            /**
             * An array of all the values in the tree
             */
            readonly values: V[];

            /**
             * The number of items in the tree
             */
            readonly length: number;

            /**
             * An iterator pointing to the first element in the tree
             */
            readonly begin: I.RedBlackTree.Iterator<K, V>;

            /**
             * An iterator pointing to the last element in the tree
             */
            readonly end: I.RedBlackTree.Iterator<K, V>;

            /**
             * Creates a new tree with the new pair inserted
             */
            insert(key: K, value: V): RedBlackTree<K, V>;

            /**
             * Walks a visitor function over the nodes of the tree in order
             *
             * @param visit A callback that gets executed on each node.
             *              If a truthy value is returned from the visitor, then iteration is stopped.
             * @param lo An optional start of the range to visit (inclusive)
             * @param hi An optional end of the range to visit (non-inclusive)
             */
            forEach<T>(visit: (key: K, value: V) => T, lo?: K, hi?: K): T;

            /**
             * Finds an iterator starting at the given element
             */
            at(idx: number): I.RedBlackTree.Iterator<K, V>;

            /**
             * Finds the first item in the tree whose key is >= key
             */
            ge(key: K): I.RedBlackTree.Iterator<K, V>;

            /**
             * Finds the first item in the tree whose key is > key
             */
            gt(key: K): I.RedBlackTree.Iterator<K, V>;

            /**
             * Finds the first item in the tree whose key is < key
             */
            lt(key: K): I.RedBlackTree.Iterator<K, V>;

            /**
             * Finds the first item in the tree whose key is <= key
             */
            le(key: K): I.RedBlackTree.Iterator<K, V>;

            /**
             * Returns an iterator pointing to the first item in the tree with key, otherwise null
             */
            find(key: K): I.RedBlackTree.Iterator<K, V> | null;

            /**
             * Removes the first item with key in the tree
             */
            remove(key: K): RedBlackTree<K, V>;

            /**
             * Retrieves the value associated to the given key
             */
            get(key: K): V | undefined;
        }

        /**
         * Respresetns a data structure which is a combination of an array and a set.
         * Adding a new member is O(1), testing for membership is O(1),
         * and finding the index of an element is O(1).
         */
        class ArraySet<T = any> {
            /**
             * The number of unique items in this ArraySet.
             * If duplicates have been added, than those do not count towards the size.
             */
            readonly length: number;

            /**
             * Adds the given value to this set.
             *
             * @param allowDuplicates Whether to allow duplicates in the set, false by default
             */
            add(value: T, allowDuplicates?: boolean): this;

            /**
             * Checks whether the given value is a member of the set
             */
            has(value: T): boolean;

            /**
             * Returns the index of the given element.
             * If the value is not present it will return -1
             */
            indexOf(value: T): number;

            /**
             * Converts the set to an array
             */
            toArray(): T[];

            /**
             * Creates an ArraySet from the given iterable object
             *
             * @param allowDuplicates Whether to allow duplicates in the set, false by default
             */
            static from<T>(iterable: Iterable<T>, allowDuplicates?: boolean): ArraySet<T>;
        }

        namespace I.BufferList {
            type Appendable = Buffer | BufferList | string | number | Array<Buffer | BufferList | string | number>;
        }

        /**
         * Represents a Node.js Buffer list collector, reader and streamer with callback/promise interface support
         */
        class BufferList extends std.stream.Duplex implements PromiseLike<Buffer> {
            /**
             * Creates a new buffer list
             */
            constructor();

            /**
             * Creates a new buffer list and initiates with the given value
             */
            constructor(buffer: I.BufferList.Appendable);

            /**
             * Creates a new buffer list and subscribes the given callback on the end/error event
             */
            constructor(callback: (err: any, data: Buffer) => void);

            /**
             * Adds an additional buffer or BufferList to the internal list
             */
            append(buf: I.BufferList.Appendable): this;

            /**
             * Ends the stream
             */
            end(chunk?: Buffer | Function): void;

            /**
             * Returns the byte at the specified index
             */
            get(idx: number): number;

            /**
             * Returns a new Buffer object containing the bytes within the range specified.
             */
            slice(start?: number, end?: number): Buffer;

            /**
             * Copies the content of the list in the dest buffer
             * starting from destStart and containing the bytes within the range specified with srcStart to srcEnd
             *
             * @param dstStart writes from this position
             * @param srcStart reads bytes from this position
             * @param srcEnd  read bytes to this position
             */
            copy<T extends Buffer = Buffer>(dst: T, dstStart?: number, srcStart?: number, srcEnd?: number): T;

            /**
             * Returns a new BufferList object containing the bytes within the range specified.
             * No copies will be performed. All buffers in the result share memory with the original list.
             *
             * @param start slice from
             * @param end slice to
             */
            shallowSlice(start?: number, end?: number): BufferList;

            /**
             * Return a string representation of the buffer
             */
            toString(encoding?: fs.I.Encoding, start?: number, end?: number): string;

            /**
             * Shifts bytes off the start of the list
             */
            consume(bytes: number): this;

            /**
             * Performs a shallow-copy of the list.
             */
            duplicate(): BufferList;

            /**
             * Destroys the stream
             */
            destroy(): void;

            then<T1 = Buffer, T2 = never>(
                onfulfilled?: ((value: Buffer) => T1 | PromiseLike<T1>) | null,
                onrejected?: ((reason: any) => T2 | PromiseLike<T2>) | null
            ): PromiseLike<T1 | T2>;

            catch<T>(onrejected?: ((reason: any) => T | PromiseLike<T>) | null): PromiseLike<T | Buffer>;
        }

        /**
         * Represents a Map that has a default values factory object or function.
         * Each get of non-existent key goes through the factory
         */
        class DefaultMap<K = string, V = any> extends Map<K, V> {
            constructor(factory?: ((key: K) => V) | { [key: string]: V }, iterable?: Iterable<[K, V]>);
        }

        namespace I.LRU {
            type LengthCalculator<K, V> = (value: V, key: K) => number;
            interface ConstructorOptions<K, V> {
                /**
                 * The maximum size of the cache, checked by applying the length function to all values in the cache.
                 * Default is Infinity
                 */
                max?: number;

                /**
                 * Maximum age in ms. Items are not pro-actively pruned out as they age,
                 * but if you try to get an item that is too old,
                 * it'll drop it and return undefined instead of giving it to you
                 */
                maxAge?: number;

                /**
                 * Function that is used to calculate the length of stored items
                 */
                length?: LengthCalculator<K, V>;

                /**
                 * Function that is called on items when they are dropped from the cache
                 */
                dispose?(key: K, value: V): void;

                /**
                 * Whether to return the stale value before deleting it
                 */
                stale?: boolean;

                /**
                 * Dispose will only be called when a key falls out of the cache, not when it is overwritten
                 */
                noDisposeOnSet?: boolean;
            }

            interface SerializedEntry<K, V> {
                /**
                 * key
                 */
                key: K;

                /**
                 * value
                 */
                value: V;

                /**
                 * when it becomes expired
                 */
                e: number;
            }

            interface Entry<K, V> {
                /**
                 * key
                 */
                key: K;

                /**
                 * value
                 */
                value: V;

                /**
                 * entry length
                 */
                length: number;

                /**
                 * Timestamp when the entry was created
                 */
                now: number;

                /**
                 * Maximum live time
                 */
                maxAge: number;
            }
        }

        /**
         * Represent an LRU cache
         */
        class LRU<K = any, V = any> {
            /**
             * Creates an LRU cache of the given size
             */
            constructor(max: number);

            /**
             * Creates an LRU cache with the given options
             */
            constructor(options?: I.LRU.ConstructorOptions<K, V>);

            /**
             * The length of the cache, setter resizes the cache
             */
            max: number;

            /**
             * stale setting
             */
            allowStale: boolean;

            /**
             * maxAge setting
             */
            maxAge: number;

            /**
             * length setting
             */
            lengthCalculator: I.LRU.LengthCalculator<K, V>;

            /**
             * Total length of objects in cache taking into account length options function
             */
            readonly length: number;

            /**
             * Total quantity of objects currently in cache.
             * Note, that stale items are returned as part of this item count.
             */
            readonly itemCount: number;

            /**
             * Iterates over all the keys in the cache, in reverse recent-ness order. (ie, less recently used items are iterated over first.)
             */
            rforEach<T = any>(fn: (this: T, value: V, key: K, cache: LRU<K, V>) => void, thisp?: T): void;

            /**
             * Iterates over all the keys in the cache, in order of recent-ness
             */
            forEach<T = any>(fn: (this: T, value: V, key: K, cache: LRU<K, V>) => void, thisp?: T): void;

            /**
             * Returns an array of the keys in the cache
             */
            keys(): K[];

            /**
             * Returns an array of the values in the cache
             */
            values(): V[];

            /**
             * Clears the cache entirely, throwing away all values
             */
            reset(): void;

            /**
             * Return an array of the cache entries ready for serialization and usage with 'destinationCache.load(arr)`
             */
            dump(): Array<I.LRU.SerializedEntry<K, V>>;

            /**
             * Returns an internal lru list of entries
             */
            dumpLru(): LinkedList<I.LRU.Entry<K, V>>;

            /**
             * @param opts std.util.inspect options
             */
            inspect(opts?: object): string;

            /**
             * Sets a new value for the given key. Updates the "recently used"-ness of the key
             *
             * @param maxAge maxAge option specific for this key
             * @returns Whether the key was set
             */
            set(key: K, value: V, maxAge?: number): boolean;

            /**
             * Check if a key is in the cache, without updating the recent-ness or deleting it for being stale
             */
            has(key: K): boolean;

            /**
             * Gets the value of the given key. Updates the "recently used"-ness of the key
             */
            get(key: K): V | undefined;

            /**
             * Returns the key value without updating the "recently used"-ness of the key
             */
            peek(key: K): V | undefined;

            /**
             * Deletes the less recently used element
             */
            pop(): I.LRU.Entry<K, V>;

            /**
             * Deletes a key out of the cache
             */
            del(key: K): void;

            /**
             * Loads another cache entries array, obtained with sourceCache.dump(), into the cache.
             * The destination cache is reset before loading new entries
             */
            load(arr: Array<I.LRU.SerializedEntry<K, V>>): void;

            /**
             * Manually iterates over the entire cache proactively pruning old entries
             */
            prune(): void;
        }

        /**
         * Represents a Map that keeps keys only for a specified interval of time
         */
        class TimedoutMap<K = any, V = any> extends Map<K, V> {
            /**
             * @param timeout maximum age of the keys, 1000 by default
             * @param callback callback that is called with each key when the timeout is passed
             */
            constructor(timeout?: number, callback?: (key: K) => void);

            /**
             * Gets the timeout
             */
            getTimeout(): number;

            /**
             * Sets the timeout
             */
            setTimeout(ms: number): void;

            /**
             * Iterates over the map and calls the callback for each element
             */
            forEach<T = any>(callback: (this: T, value: V, key: K, cache: this) => void, thisArg?: T): this;

            /**
             * Deletes the given key
             */
            delete(key: K): boolean;
        }
    }
}
