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
        class LinkedList<T> {
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
             * @returns Added node
             */
            push(value: T): I.LinkedList.Node<T>;

            /**
             * Removes the last node
             */
            pop(): T;

            /**
             * Removes the first node
             */
            shift(): T;

            /**
             * Inserts a new node at the beginning of the list
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

                type METRICS = "b" | "c";
            }
        }

        export class ByteArray {
            constructor(capacity?: number, noAssert?: boolean);

            readBitSet(offset?: number): number[];

            read(length: number, offset?: number): ByteArray;

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

            readInt64LE(offset?: number): math.Long;

            readUInt64LE(offset?: number): math.Long;

            readInt64BE(offset?: number): math.Long;

            readUInt64BE(offset?: number): math.Long;

            readFloatLE(offset?: number): number;

            readFloatBE(offset?: number): number;

            readDoubleLE(offset?: number): number;

            readDoubleBE(offset?: number): number;

            write(source: I.ByteArray.Wrappable, offset?: number, length?: number, encoding?: string): this;

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

            readVarint32(offset: number): I.ByteArray.Varint32;

            readVarint32ZigZag(): number;

            readVarint32ZigZag(offset: number): I.ByteArray.Varint32;

            writeVarint64(value: I.Longable): this;

            writeVarint64(value: I.Longable, offset: number): number;

            writeVarint64ZigZag(value: I.Longable): this;

            writeVarint64ZigZag(value: I.Longable, offset: number): number;

            readVarint64(): I.Long;

            readVarint64(offset: number): I.ByteArray.Varint64;

            readVarint64ZigZag(): math.Long;

            readVarint64ZigZag(offset: number): I.ByteArray.Varint64;

            writeCString(str: string): this;

            writeCString(str: string, offset: number): number;

            readCString(): string;

            readCString(offset: number): I.ByteArray.String;

            writeString(str: string): this;

            writeString(str: string, offset: number): number;

            readString(length: number, metrics?: I.ByteArray.METRICS): string;

            readString(length: number, metrics: I.ByteArray.METRICS, offset: number): I.ByteArray.String;

            readString(length: number, offset: number): I.ByteArray.String;

            writeVString(str: string): this;

            writeVString(str: string, offset: number): number;

            readVString(): string;

            readVString(offset: number): I.ByteArray.String;

            appendTo(target: ByteArray, offset?: number): this;

            assert(assert?: boolean): this;

            capacity(): number;

            clear(): this;

            compact(begin?: number, end?: number): this;

            copy(begin?: number, end?: number): ByteArray;

            copyTo(target: ByteArray, targetOffset?: number, souceOffset?: number, sourceLimit?: number): this | ByteArray;

            ensureCapacity(capacity: number): this;

            fill(value: string | number, begin?: number, end?: number): this;

            flip(): this;

            mark(offset?: number): this;

            prepend(source: I.ByteArray.Wrappable, encoding?: string, offset?: number): this;

            prepend(source: I.ByteArray.Wrappable, offset: number): this;

            prependTo(target: ByteArray, offset?: number): this;

            remaining(): number;

            reset(): this;

            resize(capacity: number): this;

            reverse(begin?: number, end?: number): this;

            skip(length: number): this;

            slice(begin?: number, end?: number): ByteArray;

            toBuffer(forceCopy?: boolean, begin?: number, end?: number): Buffer;

            toArrayBuffer(): ArrayBuffer;

            toString(encoding?: string, begin?: number, end?: number): string;

            toBase64(begin?: number, end?: number): string;

            toBinary(begin?: number, end?: number): string;

            toDebug(columns?: boolean): string;

            toHex(begin?: number, end?: number): string;

            toUTF8(begin?: number, end?: number): string;

            static accessor(): typeof Buffer;

            static allocate(capacity?: number, noAssert?: boolean): ByteArray;

            static concat(buffers: I.ByteArray.Wrappable[], encoding?: string, noAssert?: boolean): ByteArray;

            static type(): typeof Buffer;

            static wrap(buffer: I.ByteArray.Wrappable, encoding?: string, noAssert?: boolean): ByteArray;

            static calculateVarint32(value: number): number;

            static zigZagEncode32(n: number): number;

            static zigZagDecode32(n: number): number;

            static calculateVarint64(value: number | string): number;

            static zigZagEncode64(value: number | string | I.Long): I.Long;

            static zigZagDecode64(value: number | string | I.Long): I.Long;

            static calculateUTF8Chars(str: string): number;

            static calculateString(str: string): number;

            static fromBase64(str: string): ByteArray;

            static btoa(str: string): string;

            static atob(b64: string): string;

            static fromBinary(str: string): ByteArray;

            static fromDebug(str: string, noAssert?: boolean): ByteArray;

            static fromHex(str: string, noAssert?: boolean): ByteArray;

            static fromUTF8(str: string, noAssert?: boolean): ByteArray;

            static DEFAULT_CAPACITY: number;

            static DEFAULT_NOASSERT: boolean;

            static MAX_VARINT32_BYTES: number;

            static MAX_VARINT64_BYTES: number;

            static METRICS_CHARS: string;

            static METRICS_BYTES: string;
        }
    }
}
