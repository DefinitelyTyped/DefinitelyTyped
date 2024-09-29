declare module "buffer" {
    global {
        interface BufferConstructor {
            // see ../buffer.d.ts for implementation shared with all TypeScript versions

            /**
             * Allocates a new buffer containing the given {str}.
             *
             * @param str String to store in buffer.
             * @param encoding encoding to use, optional.  Default is 'utf8'
             * @deprecated since v10.0.0 - Use `Buffer.from(string[, encoding])` instead.
             */
            new(str: string, encoding?: BufferEncoding): Buffer;
            /**
             * Allocates a new buffer of {size} octets.
             *
             * @param size count of octets to allocate.
             * @deprecated since v10.0.0 - Use `Buffer.alloc()` instead (also see `Buffer.allocUnsafe()`).
             */
            new(size: number): Buffer;
            /**
             * Allocates a new buffer containing the given {array} of octets.
             *
             * @param array The octets to store.
             * @deprecated since v10.0.0 - Use `Buffer.from(array)` instead.
             */
            new(array: Uint8Array): Buffer;
            /**
             * Produces a Buffer backed by the same allocated memory as
             * the given {ArrayBuffer}/{SharedArrayBuffer}.
             *
             * @param arrayBuffer The ArrayBuffer with which to share memory.
             * @deprecated since v10.0.0 - Use `Buffer.from(arrayBuffer[, byteOffset[, length]])` instead.
             */
            new(arrayBuffer: ArrayBuffer | SharedArrayBuffer): Buffer;
            /**
             * Allocates a new buffer containing the given {array} of octets.
             *
             * @param array The octets to store.
             * @deprecated since v10.0.0 - Use `Buffer.from(array)` instead.
             */
            new(array: readonly any[]): Buffer;
            /**
             * Copies the passed {buffer} data onto a new {Buffer} instance.
             *
             * @param buffer The buffer to copy.
             * @deprecated since v10.0.0 - Use `Buffer.from(buffer)` instead.
             */
            new(buffer: Buffer): Buffer;
            /**
             * Allocates a new `Buffer` using an `array` of bytes in the range `0` – `255`.
             * Array entries outside that range will be truncated to fit into it.
             *
             * ```js
             * import { Buffer } from 'node:buffer';
             *
             * // Creates a new Buffer containing the UTF-8 bytes of the string 'buffer'.
             * const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
             * ```
             *
             * If `array` is an `Array`\-like object (that is, one with a `length` property of
             * type `number`), it is treated as if it is an array, unless it is a `Buffer` or
             * a `Uint8Array`. This means all other `TypedArray` variants get treated as an `Array`. To create a `Buffer` from the bytes backing a `TypedArray`, use `Buffer.copyBytesFrom()`.
             *
             * A `TypeError` will be thrown if `array` is not an `Array` or another type
             * appropriate for `Buffer.from()` variants.
             *
             * `Buffer.from(array)` and `Buffer.from(string)` may also use the internal `Buffer` pool like `Buffer.allocUnsafe()` does.
             * @since v5.10.0
             */
            from(
                arrayBuffer: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>,
                byteOffset?: number,
                length?: number,
            ): Buffer;
            /**
             * Creates a new Buffer using the passed {data}
             * @param data data to create a new Buffer
             */
            from(data: Uint8Array | readonly number[]): Buffer;
            from(data: WithImplicitCoercion<Uint8Array | readonly number[] | string>): Buffer;
            /**
             * Creates a new Buffer containing the given JavaScript string {str}.
             * If provided, the {encoding} parameter identifies the character encoding.
             * If not provided, {encoding} defaults to 'utf8'.
             */
            from(
                str:
                    | WithImplicitCoercion<string>
                    | {
                        [Symbol.toPrimitive](hint: "string"): string;
                    },
                encoding?: BufferEncoding,
            ): Buffer;
            /**
             * Creates a new Buffer using the passed {data}
             * @param values to create a new Buffer
             */
            of(...items: number[]): Buffer;
            /**
             * Returns a new `Buffer` which is the result of concatenating all the `Buffer` instances in the `list` together.
             *
             * If the list has no items, or if the `totalLength` is 0, then a new zero-length `Buffer` is returned.
             *
             * If `totalLength` is not provided, it is calculated from the `Buffer` instances
             * in `list` by adding their lengths.
             *
             * If `totalLength` is provided, it is coerced to an unsigned integer. If the
             * combined length of the `Buffer`s in `list` exceeds `totalLength`, the result is
             * truncated to `totalLength`.
             *
             * ```js
             * import { Buffer } from 'node:buffer';
             *
             * // Create a single `Buffer` from a list of three `Buffer` instances.
             *
             * const buf1 = Buffer.alloc(10);
             * const buf2 = Buffer.alloc(14);
             * const buf3 = Buffer.alloc(18);
             * const totalLength = buf1.length + buf2.length + buf3.length;
             *
             * console.log(totalLength);
             * // Prints: 42
             *
             * const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);
             *
             * console.log(bufA);
             * // Prints: <Buffer 00 00 00 00 ...>
             * console.log(bufA.length);
             * // Prints: 42
             * ```
             *
             * `Buffer.concat()` may also use the internal `Buffer` pool like `Buffer.allocUnsafe()` does.
             * @since v0.7.11
             * @param list List of `Buffer` or {@link Uint8Array} instances to concatenate.
             * @param totalLength Total length of the `Buffer` instances in `list` when concatenated.
             */
            concat(list: readonly Uint8Array[], totalLength?: number): Buffer;
            /**
             * Copies the underlying memory of `view` into a new `Buffer`.
             *
             * ```js
             * const u16 = new Uint16Array([0, 0xffff]);
             * const buf = Buffer.copyBytesFrom(u16, 1, 1);
             * u16[1] = 0;
             * console.log(buf.length); // 2
             * console.log(buf[0]); // 255
             * console.log(buf[1]); // 255
             * ```
             * @since v19.8.0
             * @param view The {TypedArray} to copy.
             * @param [offset=0] The starting offset within `view`.
             * @param [length=view.length - offset] The number of elements from `view` to copy.
             */
            copyBytesFrom(view: NodeJS.TypedArray, offset?: number, length?: number): Buffer;
            /**
             * Allocates a new `Buffer` of `size` bytes. If `fill` is `undefined`, the`Buffer` will be zero-filled.
             *
             * ```js
             * import { Buffer } from 'node:buffer';
             *
             * const buf = Buffer.alloc(5);
             *
             * console.log(buf);
             * // Prints: <Buffer 00 00 00 00 00>
             * ```
             *
             * If `size` is larger than {@link constants.MAX_LENGTH} or smaller than 0, `ERR_OUT_OF_RANGE` is thrown.
             *
             * If `fill` is specified, the allocated `Buffer` will be initialized by calling `buf.fill(fill)`.
             *
             * ```js
             * import { Buffer } from 'node:buffer';
             *
             * const buf = Buffer.alloc(5, 'a');
             *
             * console.log(buf);
             * // Prints: <Buffer 61 61 61 61 61>
             * ```
             *
             * If both `fill` and `encoding` are specified, the allocated `Buffer` will be
             * initialized by calling `buf.fill(fill, encoding)`.
             *
             * ```js
             * import { Buffer } from 'node:buffer';
             *
             * const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
             *
             * console.log(buf);
             * // Prints: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
             * ```
             *
             * Calling `Buffer.alloc()` can be measurably slower than the alternative `Buffer.allocUnsafe()` but ensures that the newly created `Buffer` instance
             * contents will never contain sensitive data from previous allocations, including
             * data that might not have been allocated for `Buffer`s.
             *
             * A `TypeError` will be thrown if `size` is not a number.
             * @since v5.10.0
             * @param size The desired length of the new `Buffer`.
             * @param [fill=0] A value to pre-fill the new `Buffer` with.
             * @param [encoding='utf8'] If `fill` is a string, this is its encoding.
             */
            alloc(size: number, fill?: string | Uint8Array | number, encoding?: BufferEncoding): Buffer;
            /**
             * Allocates a new `Buffer` of `size` bytes. If `size` is larger than {@link constants.MAX_LENGTH} or smaller than 0, `ERR_OUT_OF_RANGE` is thrown.
             *
             * The underlying memory for `Buffer` instances created in this way is _not_
             * _initialized_. The contents of the newly created `Buffer` are unknown and _may contain sensitive data_. Use `Buffer.alloc()` instead to initialize`Buffer` instances with zeroes.
             *
             * ```js
             * import { Buffer } from 'node:buffer';
             *
             * const buf = Buffer.allocUnsafe(10);
             *
             * console.log(buf);
             * // Prints (contents may vary): <Buffer a0 8b 28 3f 01 00 00 00 50 32>
             *
             * buf.fill(0);
             *
             * console.log(buf);
             * // Prints: <Buffer 00 00 00 00 00 00 00 00 00 00>
             * ```
             *
             * A `TypeError` will be thrown if `size` is not a number.
             *
             * The `Buffer` module pre-allocates an internal `Buffer` instance of
             * size `Buffer.poolSize` that is used as a pool for the fast allocation of new `Buffer` instances created using `Buffer.allocUnsafe()`, `Buffer.from(array)`,
             * and `Buffer.concat()` only when `size` is less than `Buffer.poolSize >>> 1` (floor of `Buffer.poolSize` divided by two).
             *
             * Use of this pre-allocated internal memory pool is a key difference between
             * calling `Buffer.alloc(size, fill)` vs. `Buffer.allocUnsafe(size).fill(fill)`.
             * Specifically, `Buffer.alloc(size, fill)` will _never_ use the internal `Buffer`pool, while `Buffer.allocUnsafe(size).fill(fill)`_will_ use the internal`Buffer` pool if `size` is less
             * than or equal to half `Buffer.poolSize`. The
             * difference is subtle but can be important when an application requires the
             * additional performance that `Buffer.allocUnsafe()` provides.
             * @since v5.10.0
             * @param size The desired length of the new `Buffer`.
             */
            allocUnsafe(size: number): Buffer;
            /**
             * Allocates a new `Buffer` of `size` bytes. If `size` is larger than {@link constants.MAX_LENGTH} or smaller than 0, `ERR_OUT_OF_RANGE` is thrown. A zero-length `Buffer` is created if
             * `size` is 0.
             *
             * The underlying memory for `Buffer` instances created in this way is _not_
             * _initialized_. The contents of the newly created `Buffer` are unknown and _may contain sensitive data_. Use `buf.fill(0)` to initialize
             * such `Buffer` instances with zeroes.
             *
             * When using `Buffer.allocUnsafe()` to allocate new `Buffer` instances,
             * allocations under 4 KiB are sliced from a single pre-allocated `Buffer`. This
             * allows applications to avoid the garbage collection overhead of creating many
             * individually allocated `Buffer` instances. This approach improves both
             * performance and memory usage by eliminating the need to track and clean up as
             * many individual `ArrayBuffer` objects.
             *
             * However, in the case where a developer may need to retain a small chunk of
             * memory from a pool for an indeterminate amount of time, it may be appropriate
             * to create an un-pooled `Buffer` instance using `Buffer.allocUnsafeSlow()` and
             * then copying out the relevant bits.
             *
             * ```js
             * import { Buffer } from 'node:buffer';
             *
             * // Need to keep around a few small chunks of memory.
             * const store = [];
             *
             * socket.on('readable', () => {
             *   let data;
             *   while (null !== (data = readable.read())) {
             *     // Allocate for retained data.
             *     const sb = Buffer.allocUnsafeSlow(10);
             *
             *     // Copy the data into the new allocation.
             *     data.copy(sb, 0, 0, 10);
             *
             *     store.push(sb);
             *   }
             * });
             * ```
             *
             * A `TypeError` will be thrown if `size` is not a number.
             * @since v5.12.0
             * @param size The desired length of the new `Buffer`.
             */
            allocUnsafeSlow(size: number): Buffer;
        }
        interface Buffer extends Uint8Array {
            // see ../buffer.d.ts for implementation shared with all TypeScript versions

            /**
             * Returns a new `Buffer` that references the same memory as the original, but
             * offset and cropped by the `start` and `end` indices.
             *
             * This method is not compatible with the `Uint8Array.prototype.slice()`,
             * which is a superclass of `Buffer`. To copy the slice, use`Uint8Array.prototype.slice()`.
             *
             * ```js
             * import { Buffer } from 'node:buffer';
             *
             * const buf = Buffer.from('buffer');
             *
             * const copiedBuf = Uint8Array.prototype.slice.call(buf);
             * copiedBuf[0]++;
             * console.log(copiedBuf.toString());
             * // Prints: cuffer
             *
             * console.log(buf.toString());
             * // Prints: buffer
             *
             * // With buf.slice(), the original buffer is modified.
             * const notReallyCopiedBuf = buf.slice();
             * notReallyCopiedBuf[0]++;
             * console.log(notReallyCopiedBuf.toString());
             * // Prints: cuffer
             * console.log(buf.toString());
             * // Also prints: cuffer (!)
             * ```
             * @since v0.3.0
             * @deprecated Use `subarray` instead.
             * @param [start=0] Where the new `Buffer` will start.
             * @param [end=buf.length] Where the new `Buffer` will end (not inclusive).
             */
            slice(start?: number, end?: number): Buffer;
            /**
             * Returns a new `Buffer` that references the same memory as the original, but
             * offset and cropped by the `start` and `end` indices.
             *
             * Specifying `end` greater than `buf.length` will return the same result as
             * that of `end` equal to `buf.length`.
             *
             * This method is inherited from [`TypedArray.prototype.subarray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray).
             *
             * Modifying the new `Buffer` slice will modify the memory in the original `Buffer`because the allocated memory of the two objects overlap.
             *
             * ```js
             * import { Buffer } from 'node:buffer';
             *
             * // Create a `Buffer` with the ASCII alphabet, take a slice, and modify one byte
             * // from the original `Buffer`.
             *
             * const buf1 = Buffer.allocUnsafe(26);
             *
             * for (let i = 0; i < 26; i++) {
             *   // 97 is the decimal ASCII value for 'a'.
             *   buf1[i] = i + 97;
             * }
             *
             * const buf2 = buf1.subarray(0, 3);
             *
             * console.log(buf2.toString('ascii', 0, buf2.length));
             * // Prints: abc
             *
             * buf1[0] = 33;
             *
             * console.log(buf2.toString('ascii', 0, buf2.length));
             * // Prints: !bc
             * ```
             *
             * Specifying negative indexes causes the slice to be generated relative to the
             * end of `buf` rather than the beginning.
             *
             * ```js
             * import { Buffer } from 'node:buffer';
             *
             * const buf = Buffer.from('buffer');
             *
             * console.log(buf.subarray(-6, -1).toString());
             * // Prints: buffe
             * // (Equivalent to buf.subarray(0, 5).)
             *
             * console.log(buf.subarray(-6, -2).toString());
             * // Prints: buff
             * // (Equivalent to buf.subarray(0, 4).)
             *
             * console.log(buf.subarray(-5, -2).toString());
             * // Prints: uff
             * // (Equivalent to buf.subarray(1, 4).)
             * ```
             * @since v3.0.0
             * @param [start=0] Where the new `Buffer` will start.
             * @param [end=buf.length] Where the new `Buffer` will end (not inclusive).
             */
            subarray(start?: number, end?: number): Buffer;
        }
    }
}
