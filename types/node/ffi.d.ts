declare module "node:ffi" {
    import { NonSharedBuffer } from "node:buffer";
    interface FunctionSignature {
        return?: ReturnType | undefined;
        arguments?: readonly ArgumentType[] | undefined;
    }
    interface FunctionDefinitions {
        [symbol: string]: FunctionSignature;
    }
    type CallbackFunction<R extends ReturnType = any, P extends readonly ArgumentType[] = any[]> = (
        ...args: { [K in keyof P]: ArgumentTypeMap[DataTypeMap[P[K]]] }
    ) => ReturnTypeMap[DataTypeMap[R]];
    interface WrappedFunction<R extends ReturnType = any, P extends readonly ArgumentType[] = any[]>
        extends CallbackFunction<R, P>
    {
        readonly pointer: bigint;
    }
    type CallbackFunctionFromSignature<T extends FunctionSignature> = CallbackFunction<
        ReturnTypeFromFunctionSignature<T>,
        ArgumentTypesFromFunctionSignature<T>
    >;
    type WrappedFunctionFromSignature<T extends FunctionSignature> = WrappedFunction<
        ReturnTypeFromFunctionSignature<T>,
        ArgumentTypesFromFunctionSignature<T>
    >;
    type WrappedFunctionsFromDefinitions<T extends FunctionDefinitions> = {
        [K in keyof T]: WrappedFunctionFromSignature<T[K]>;
    };
    type ReturnTypeFromFunctionSignature<T extends FunctionSignature> = "return" extends keyof T
        ? T extends { return: infer R extends ReturnType } ? R : any
        : "void";
    type ArgumentTypesFromFunctionSignature<T extends FunctionSignature> = "arguments" extends keyof T
        ? T extends { arguments: infer P extends readonly ArgumentType[] } ? P : any[]
        : [];
    interface DynamicLibraryResult<T extends FunctionDefinitions> extends Disposable {
        lib: DynamicLibrary;
        functions: WrappedFunctionsFromDefinitions<T>;
    }
    /**
     * The native shared library suffix for the current platform:
     *
     * * `'dylib'` on macOS
     * * `'so'` on Unix-like platforms
     * * `'dll'` on Windows
     *
     * This can be used to build portable library paths:
     *
     * ```js
     * const { suffix } = require('node:ffi');
     *
     * const path = `libsqlite3.${suffix}`;
     * ```
     * @since v26.1.0
     */
    const suffix: string;
    /**
     * Loads a dynamic library and resolves the requested function definitions.
     *
     * On Windows passing `null` is not supported.
     *
     * When `definitions` is omitted, `functions` is returned as an empty object until
     * symbols are resolved explicitly.
     *
     * The returned object also implements the explicit resource management protocol,
     * so it can be used with the `using` declaration. Disposing the returned
     * object closes the library handle.
     *
     * ```js
     * import { dlopen } from 'node:ffi';
     *
     * {
     *   using handle = dlopen('./mylib.so', {
     *     add_i32: { arguments: ['i32', 'i32'], return: 'i32' },
     *   });
     *   console.log(handle.functions.add_i32(20, 22));
     * } // handle.lib.close() is invoked automatically here.
     * ```
     *
     * ```js
     * import { dlopen } from 'node:ffi';
     *
     * const { lib, functions } = dlopen('./mylib.so', {
     *   add_i32: { arguments: ['i32', 'i32'], return: 'i32' },
     *   string_length: { arguments: ['pointer'], return: 'u64' },
     * });
     *
     * console.log(functions.add_i32(20, 22));
     * ```
     * @since v26.1.0
     * @param path Path to a dynamic library, or `null` to resolve symbols
     * from the current process image.
     * @param definitions Symbol definitions to resolve immediately.
     */
    function dlopen<const T extends FunctionDefinitions = {}>(
        path: string | null,
        definitions?: T,
    ): DynamicLibraryResult<T>;
    /**
     * Closes a dynamic library.
     *
     * This is equivalent to calling `handle.close()`.
     * @since v26.1.0
     */
    function dlclose(handle: DynamicLibrary): void;
    /**
     * Resolves a symbol address from a loaded library.
     *
     * This is equivalent to calling `handle.getSymbol(symbol)`.
     * @since v26.1.0
     */
    function dlsym(handle: DynamicLibrary, symbol: string): bigint;
    /**
     * @since v26.1.0
     */
    class DynamicLibrary {
        /**
         * Loads the dynamic library without resolving any functions eagerly.
         *
         * On Windows passing `null` is not supported.
         *
         * ```js
         * const { DynamicLibrary } = require('node:ffi');
         *
         * const lib = new DynamicLibrary('./mylib.so');
         * ```
         * @param path Path to a dynamic library, or `null` to resolve symbols
         * from the current process image.
         */
        constructor(path: string | null);
        /**
         * The path used to load the library.
         */
        readonly path: string;
        /**
         * An object containing previously resolved symbol addresses as `bigint` values.
         */
        readonly symbols: { [symbol: string]: bigint };
        /**
         * Closes the library handle.
         *
         * `DynamicLibrary` implements the explicit resource management protocol, so a
         * library instance can be managed with the `using` declaration. Leaving the
         * enclosing scope invokes `library.close()` automatically.
         *
         * ```js
         * import { DynamicLibrary } from 'node:ffi';
         *
         * {
         *   using lib = new DynamicLibrary('./mylib.so');
         *   // Use `lib` here; `lib.close()` is called when the block exits.
         * }
         * ```
         *
         * Calling `library.close()` (or disposing the library) more than once is a no-op.
         *
         * After a library has been closed:
         *
         * * Resolved function wrappers become invalid.
         * * Further symbol and function resolution throws.
         * * Registered callbacks are invalidated.
         *
         * Closing a library does not make previously exported callback pointers safe to
         * reuse. Node.js does not track or revoke callback pointers that have already
         * been handed to native code.
         *
         * If native code still holds a callback pointer after `library.close()` or after
         * `library.unregisterCallback(pointer)`, invoking that pointer has undefined
         * behavior, is not allowed, and is dangerous: it can crash the process, produce
         * incorrect output, or corrupt memory. Native code must stop using callback
         * addresses before the library is closed or before the callback is unregistered.
         *
         * Calling `library.close()` from one of the library's active callbacks is
         * unsupported and dangerous. The callback must return before the library is
         * closed.
         */
        close(): void;
        /**
         * Calls `library.close()`. This allows `DynamicLibrary` instances to be used with
         * the `using` declaration for automatic cleanup when the enclosing scope
         * exits. It is a no-op on a library that has already been closed.
         * @since v26.1.0
         */
        [Symbol.dispose](): void;
        /**
         * Resolves a symbol and returns a callable JavaScript wrapper.
         *
         * The returned function has a `.pointer` property containing the native function
         * address as a `bigint`.
         *
         * If the same symbol has already been resolved, requesting it again with a
         * different signature throws.
         *
         * ```js
         * const { DynamicLibrary } = require('node:ffi');
         *
         * const lib = new DynamicLibrary('./mylib.so');
         * const add = lib.getFunction('add_i32', {
         *   arguments: ['i32', 'i32'],
         *   return: 'i32',
         * });
         *
         * console.log(add(20, 22));
         * console.log(add.pointer);
         * ```
         */
        getFunction<const T extends FunctionSignature>(name: string, signature: T): WrappedFunctionFromSignature<T>;
        /**
         * When `definitions` is provided, resolves each named symbol and returns an
         * object containing callable wrappers.
         *
         * When `definitions` is omitted, returns wrappers for all functions that have
         * already been resolved on the library.
         */
        getFunctions(): { [symbol: string]: WrappedFunction };
        getFunctions<const T extends FunctionDefinitions>(definitions: T): WrappedFunctionsFromDefinitions<T>;
        /**
         * Resolves a symbol and returns its native address as a `bigint`.
         */
        getSymbol(name: string): bigint;
        /**
         * Returns an object containing all previously resolved symbol addresses.
         */
        getSymbols(): Record<string, bigint>;
        /**
         * Creates a native callback pointer backed by a JavaScript function.
         *
         * When `signature` is omitted, the callback uses a default `void ()` signature.
         *
         * The return value is the callback pointer address as a `bigint`. It can be
         * passed to native functions expecting a callback pointer.
         *
         * ```js
         * const { DynamicLibrary } = require('node:ffi');
         *
         * const lib = new DynamicLibrary('./mylib.so');
         *
         * const callback = lib.registerCallback(
         *   { arguments: ['i32'], return: 'i32' },
         *   (value) => value * 2,
         * );
         * ```
         *
         * Callbacks are subject to the following restrictions:
         *
         * * They must be invoked on the same system thread where they were created.
         * * They must not throw exceptions.
         * * They must not return promises.
         * * They must return a value compatible with the declared return type.
         * * They must not call `library.close()` on their owning library while running.
         * * They must not unregister themselves while running.
         *
         * Closing the owning library or unregistering the currently executing callback
         * from inside the callback is unsupported and dangerous. Doing so may crash the
         * process, produce incorrect output, or corrupt memory.
         */
        registerCallback(callback: () => void): bigint;
        registerCallback<const T extends FunctionSignature>(
            signature: T,
            callback: CallbackFunctionFromSignature<T>,
        ): bigint;
        /**
         * Releases a callback previously created with `library.registerCallback()`.
         *
         * Calling `library.unregisterCallback(pointer)` for a callback that is currently
         * executing is unsupported and dangerous. The callback must return before it is
         * unregistered.
         *
         * After `library.unregisterCallback(pointer)` returns, invoking that callback
         * pointer from native code has undefined behavior, is not allowed, and is
         * dangerous: it can crash the process, produce incorrect output, or corrupt
         * memory.
         */
        unregisterCallback(pointer: bigint): void;
        /**
         * Keeps the callback strongly referenced by JavaScript.
         */
        refCallback(pointer: bigint): void;
        /**
         * Allows the callback to become weakly referenced by JavaScript.
         *
         * If the callback function is later garbage collected, subsequent native
         * invocations become a no-op. Non-void return values are zero-initialized before
         * returning to native code.
         */
        unrefCallback(pointer: bigint): void;
    }
    function getInt8(pointer: bigint, offset?: number): number;
    function getUint8(pointer: bigint, offset?: number): number;
    function getInt16(pointer: bigint, offset?: number): number;
    function getUint16(pointer: bigint, offset?: number): number;
    function getInt32(pointer: bigint, offset?: number): number;
    function getUint32(pointer: bigint, offset?: number): number;
    function getInt64(pointer: bigint, offset?: number): bigint;
    function getUint64(pointer: bigint, offset?: number): bigint;
    function getFloat32(pointer: bigint, offset?: number): number;
    function getFloat64(pointer: bigint, offset?: number): number;
    function setInt8(pointer: bigint, offset: number, value: number): void;
    function setUint8(pointer: bigint, offset: number, value: number): void;
    function setInt16(pointer: bigint, offset: number, value: number): void;
    function setUint16(pointer: bigint, offset: number, value: number): void;
    function setInt32(pointer: bigint, offset: number, value: number): void;
    function setUint32(pointer: bigint, offset: number, value: number): void;
    function setInt64(pointer: bigint, offset: number, value: number | bigint): void;
    function setUint64(pointer: bigint, offset: number, value: number | bigint): void;
    function setFloat32(pointer: bigint, offset: number, value: number): void;
    function setFloat64(pointer: bigint, offset: number, value: number): void;
    /**
     * Reads a NUL-terminated UTF-8 string from native memory.
     *
     * If `pointer` is `0n`, `null` is returned.
     *
     * This function does not validate that `pointer` refers to readable memory or
     * that the pointed-to data is terminated with `\0`. Passing an invalid pointer,
     * a pointer to freed memory, or a pointer to bytes without a terminating NUL can
     * read unrelated memory, crash the process, or produce truncated or garbled
     * output.
     * @since v26.1.0
     */
    function toString(pointer: bigint): string | null;
    /**
     * Creates a `Buffer` from native memory.
     *
     * When `copy` is `true`, the returned `Buffer` owns its own copied memory.
     * When `copy` is `false`, the returned `Buffer` references the original native
     * memory directly.
     *
     * Using `copy: false` is a zero-copy escape hatch. The returned `Buffer` is a
     * writable view onto foreign memory, so writes in JavaScript update the original
     * native memory directly. The caller must guarantee that:
     *
     * * `pointer` remains valid for the entire lifetime of the returned `Buffer`.
     * * `length` stays within the allocated native region.
     * * no native code frees or repurposes that memory while JavaScript still uses
     *   the `Buffer`.
     * * Memory protection is observed. For example, read-only memory pages must not
     *   be written to.
     *
     * If these guarantees are not met, reading or writing the `Buffer` can corrupt
     * memory or crash the process.
     * @since v26.1.0
     * @param copy When `false`, creates a zero-copy view. **Default:** `true`.
     */
    function toBuffer(pointer: bigint, length: number, copy?: boolean): NonSharedBuffer;
    /**
     * Creates an `ArrayBuffer` from native memory.
     *
     * When `copy` is `true`, the returned `ArrayBuffer` contains copied bytes.
     * When `copy` is `false`, the returned `ArrayBuffer` references the original
     * native memory directly.
     *
     * The same lifetime and bounds requirements described for
     * `ffi.toBuffer(pointer, length, copy)` apply
     * here. With `copy: false`, the
     * returned `ArrayBuffer` is a zero-copy view of foreign memory and is only safe
     * while that memory remains allocated, unchanged in layout, and valid for the
     * entire exposed range.
     * @since v26.1.0
     * @param copy When `false`, creates a zero-copy view. **Default:** `true`.
     */
    function toArrayBuffer(pointer: bigint, length: number, copy?: boolean): ArrayBuffer;
    /**
     * Copies a JavaScript string into native memory and appends a trailing NUL
     * terminator.
     *
     * `length` must be large enough to hold the full encoded string plus the trailing
     * NUL terminator. For UTF-16 and UCS-2 encodings, the trailing terminator uses
     * two zero bytes.
     *
     * `pointer` must refer to writable native memory with at least `length` bytes of
     * available storage. This function does not allocate memory on its own.
     *
     * `string` must be a JavaScript string. `encoding` must be a string.
     * @since v26.1.0
     * @param encoding **Default:** `'utf8'`.
     */
    function exportString(string: string, pointer: bigint, length: number, encoding?: BufferEncoding): void;
    /**
     * Copies bytes from a `Buffer` into native memory.
     *
     * `length` must be at least `buffer.length`.
     *
     * `pointer` must refer to writable native memory with at least `length` bytes of
     * available storage. This function does not allocate memory on its own.
     *
     * `buffer` must be a Node.js `Buffer`.
     * @since v26.1.0
     */
    function exportBuffer(buffer: Buffer, pointer: bigint, length: number): void;
    /**
     * Copies bytes from an `ArrayBuffer` into native memory.
     *
     * `length` must be at least `arrayBuffer.byteLength`.
     *
     * `pointer` must refer to writable native memory with at least `length` bytes of
     * available storage. This function does not allocate memory on its own.
     * @since v26.1.0
     */
    function exportArrayBuffer(arrayBuffer: ArrayBuffer, pointer: bigint, length: number): void;
    /**
     * Copies bytes from an `ArrayBufferView` into native memory.
     *
     * `length` must be at least `arrayBufferView.byteLength`.
     *
     * `pointer` must refer to writable native memory with at least `length` bytes of
     * available storage. This function does not allocate memory on its own.
     * @since v26.1.0
     */
    function exportArrayBufferView(arrayBufferView: NodeJS.ArrayBufferView, pointer: bigint, length: number): void;
    /**
     * Returns the raw memory address of JavaScript-managed byte storage.
     *
     * This is unsafe and dangerous. The returned pointer can become invalid if the
     * underlying memory is detached, resized, transferred, or otherwise invalidated.
     * Using stale pointers can cause memory corruption or process crashes.
     * @since v26.1.0
     */
    function getRawPointer(source: ArrayBuffer | NodeJS.ArrayBufferView): bigint;
    type ReturnType = { [K in keyof DataTypeMap]: K }[keyof DataTypeMap];
    type ArgumentType = Exclude<ReturnType, "void">;
    interface DataTypeMap {
        void: "void";
        char: "number";
        bool: "number";
        i8: "number";
        int8: "number";
        u8: "number";
        uint8: "number";
        i16: "number";
        int16: "number";
        u16: "number";
        uint16: "number";
        i32: "number";
        int32: "number";
        u32: "number";
        uint32: "number";
        i64: "bigint";
        int64: "bigint";
        u64: "bigint";
        uint64: "bigint";
        float: "number";
        f32: "number";
        double: "number";
        f64: "number";
        pointer: "pointer";
        ptr: "pointer";
        function: "pointer";
        buffer: "pointer";
        arraybuffer: "pointer";
        string: "pointer";
        str: "pointer";
    }
    interface ArgumentTypeMap {
        "number": number;
        "bigint": bigint;
        "pointer": bigint | string | ArrayBuffer | NodeJS.ArrayBufferView | null;
    }
    interface ReturnTypeMap {
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        "void": void;
        "number": number;
        "bigint": bigint;
        "pointer": bigint | null;
    }
    enum types {
        VOID = "void",
        POINTER = "pointer",
        BUFFER = "buffer",
        ARRAY_BUFFER = "arraybuffer",
        FUNCTION = "function",
        BOOL = "bool",
        CHAR = "char",
        STRING = "string",
        FLOAT = "float",
        DOUBLE = "double",
        INT_8 = "int8",
        UINT_8 = "uint8",
        INT_16 = "int16",
        UINT_16 = "uint16",
        INT_32 = "int32",
        UINT_32 = "uint32",
        INT_64 = "int64",
        UINT_64 = "uint64",
        FLOAT_32 = "float32",
        FLOAT_64 = "float64",
    }
}
