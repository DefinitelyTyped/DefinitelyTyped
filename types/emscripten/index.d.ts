// Type definitions for Emscripten 1.39.16
// Project: https://emscripten.org
// Definitions by: Kensuke Matsuzaki <https://github.com/zakki>
//                 Periklis Tsirakidis <https://github.com/periklis>
//                 Bumsik Kim <https://github.com/kbumsik>
//                 Louis DeScioli <https://github.com/lourd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/** Other WebAssembly declarations, for compatibility with older versions of Typescript */
declare namespace WebAssembly {
    interface Module {}
}

declare namespace Emscripten {
    interface FileSystemType {}
    type EnvironmentType = 'WEB' | 'NODE' | 'SHELL' | 'WORKER';

    type JSType = 'number' | 'string' | 'array' | 'boolean';
    type TypeCompatibleWithC = number | string | any[] | boolean;

    type CIntType = 'i8' | 'i16' | 'i32' | 'i64';
    type CFloatType = 'float' | 'double';
    type CPointerType = 'i8*' | 'i16*' | 'i32*' | 'i64*' | 'float*' | 'double*' | '*';
    type CType = CIntType | CFloatType | CPointerType;

    type WebAssemblyImports = Array<{
        name: string;
        kind: string;
    }>;

    type WebAssemblyExports = Array<{
        module: string;
        name: string;
        kind: string;
    }>;

    interface CCallOpts {
        async?: boolean | undefined;
    }
}

interface EmscriptenModule {
    print(str: string): void;
    printErr(str: string): void;
    arguments: string[];
    environment: Emscripten.EnvironmentType;
    preInit: Array<{ (): void }>;
    preRun: Array<{ (): void }>;
    postRun: Array<{ (): void }>;
    onAbort: { (what: any): void };
    onRuntimeInitialized: { (): void };
    preinitializedWebGLContext: WebGLRenderingContext;
    noInitialRun: boolean;
    noExitRuntime: boolean;
    logReadFiles: boolean;
    filePackagePrefixURL: string;
    wasmBinary: ArrayBuffer;

    destroy(object: object): void;
    getPreloadedPackage(remotePackageName: string, remotePackageSize: number): ArrayBuffer;
    instantiateWasm(
        imports: Emscripten.WebAssemblyImports,
        successCallback: (module: WebAssembly.Module) => void,
    ): Emscripten.WebAssemblyExports;
    locateFile(url: string, scriptDirectory: string): string;
    onCustomMessage(event: MessageEvent): void;

    // USE_TYPED_ARRAYS == 1
    HEAP: Int32Array;
    IHEAP: Int32Array;
    FHEAP: Float64Array;

    // USE_TYPED_ARRAYS == 2
    HEAP8: Int8Array;
    HEAP16: Int16Array;
    HEAP32: Int32Array;
    HEAPU8: Uint8Array;
    HEAPU16: Uint16Array;
    HEAPU32: Uint32Array;
    HEAPF32: Float32Array;
    HEAPF64: Float64Array;

    TOTAL_STACK: number;
    TOTAL_MEMORY: number;
    FAST_MEMORY: number;

    addOnPreRun(cb: () => any): void;
    addOnInit(cb: () => any): void;
    addOnPreMain(cb: () => any): void;
    addOnExit(cb: () => any): void;
    addOnPostRun(cb: () => any): void;

    preloadedImages: any;
    preloadedAudios: any;

    _malloc(size: number): number;
    _free(ptr: number): void;
}

/**
 * A factory function is generated when setting the `MODULARIZE` build option
 * to `1` in your Emscripten build. It return a Promise that resolves to an
 * initialized, ready-to-call `EmscriptenModule` instance.
 *
 * By default, the factory function will be named `Module`. It's recommended to
 * use the `EXPORT_ES6` option, in which the factory function will be the
 * default export. If used without `EXPORT_ES6`, the factory function will be a
 * global variable. You can rename the variable using the `EXPORT_NAME` build
 * option. It's left to you to declare any global variables as needed in your
 * application's types.
 * @param moduleOverrides Default properties for the initialized module.
 */
type EmscriptenModuleFactory<T extends EmscriptenModule = EmscriptenModule> = (
    moduleOverrides?: Partial<T>,
) => Promise<T>;

declare namespace FS {
    interface Lookup {
        path: string;
        node: FSNode;
    }

    interface FSStream {}
    interface FSNode {}
    interface ErrnoError {}

    let ignorePermissions: boolean;
    let trackingDelegate: any;
    let tracking: any;
    let genericErrors: any;

    //
    // paths
    //
    function lookupPath(path: string, opts: any): Lookup;
    function getPath(node: FSNode): string;

    //
    // nodes
    //
    function isFile(mode: number): boolean;
    function isDir(mode: number): boolean;
    function isLink(mode: number): boolean;
    function isChrdev(mode: number): boolean;
    function isBlkdev(mode: number): boolean;
    function isFIFO(mode: number): boolean;
    function isSocket(mode: number): boolean;

    //
    // devices
    //
    function major(dev: number): number;
    function minor(dev: number): number;
    function makedev(ma: number, mi: number): number;
    function registerDevice(dev: number, ops: any): void;

    //
    // core
    //
    function syncfs(populate: boolean, callback: (e: any) => any): void;
    function syncfs(callback: (e: any) => any, populate?: boolean): void;
    function mount(type: Emscripten.FileSystemType, opts: any, mountpoint: string): any;
    function unmount(mountpoint: string): void;

    function mkdir(path: string, mode?: number): any;
    function mkdev(path: string, mode?: number, dev?: number): any;
    function symlink(oldpath: string, newpath: string): any;
    function rename(old_path: string, new_path: string): void;
    function rmdir(path: string): void;
    function readdir(path: string): any;
    function unlink(path: string): void;
    function readlink(path: string): string;
    function stat(path: string, dontFollow?: boolean): any;
    function lstat(path: string): any;
    function chmod(path: string, mode: number, dontFollow?: boolean): void;
    function lchmod(path: string, mode: number): void;
    function fchmod(fd: number, mode: number): void;
    function chown(path: string, uid: number, gid: number, dontFollow?: boolean): void;
    function lchown(path: string, uid: number, gid: number): void;
    function fchown(fd: number, uid: number, gid: number): void;
    function truncate(path: string, len: number): void;
    function ftruncate(fd: number, len: number): void;
    function utime(path: string, atime: number, mtime: number): void;
    function open(path: string, flags: string, mode?: number, fd_start?: number, fd_end?: number): FSStream;
    function close(stream: FSStream): void;
    function llseek(stream: FSStream, offset: number, whence: number): any;
    function read(stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number): number;
    function write(
        stream: FSStream,
        buffer: ArrayBufferView,
        offset: number,
        length: number,
        position?: number,
        canOwn?: boolean,
    ): number;
    function allocate(stream: FSStream, offset: number, length: number): void;
    function mmap(
        stream: FSStream,
        buffer: ArrayBufferView,
        offset: number,
        length: number,
        position: number,
        prot: number,
        flags: number,
    ): any;
    function ioctl(stream: FSStream, cmd: any, arg: any): any;
    function readFile(path: string, opts: { encoding: 'binary'; flags?: string | undefined }): Uint8Array;
    function readFile(path: string, opts: { encoding: 'utf8'; flags?: string | undefined }): string;
    function readFile(path: string, opts?: { flags?: string | undefined }): Uint8Array;
    function writeFile(path: string, data: string | ArrayBufferView, opts?: { flags?: string | undefined }): void;

    //
    // module-level FS code
    //
    function cwd(): string;
    function chdir(path: string): void;
    function init(
        input: null | (() => number | null),
        output: null | ((c: number) => any),
        error: null | ((c: number) => any),
    ): void;

    function createLazyFile(
        parent: string | FSNode,
        name: string,
        url: string,
        canRead: boolean,
        canWrite: boolean,
    ): FSNode;
    function createPreloadedFile(
        parent: string | FSNode,
        name: string,
        url: string,
        canRead: boolean,
        canWrite: boolean,
        onload?: () => void,
        onerror?: () => void,
        dontCreateFile?: boolean,
        canOwn?: boolean,
    ): void;
    function createDataFile(
        parent: string | FSNode,
        name: string,
        data: ArrayBufferView,
        canRead: boolean,
        canWrite: boolean,
        canOwn: boolean,
    ): FSNode;
}

declare var MEMFS: Emscripten.FileSystemType;
declare var NODEFS: Emscripten.FileSystemType;
declare var IDBFS: Emscripten.FileSystemType;

// Below runtime function/variable declarations are exportable by
// -s EXTRA_EXPORTED_RUNTIME_METHODS. You can extend or merge
// EmscriptenModule interface to add runtime functions.
//
// For example, by using -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']"
// You can access ccall() via Module["ccall"]. In this case, you should
// extend EmscriptenModule to pass the compiler check like the following:
//
// interface YourOwnEmscriptenModule extends EmscriptenModule {
//     ccall: typeof ccall;
// }
//
// See: https://emscripten.org/docs/getting_started/FAQ.html#why-do-i-get-typeerror-module-something-is-not-a-function

declare function ccall(
    ident: string,
    returnType: Emscripten.JSType | null,
    argTypes: Emscripten.JSType[],
    args: Emscripten.TypeCompatibleWithC[],
    opts?: Emscripten.CCallOpts,
): any;
declare function cwrap(
    ident: string,
    returnType: Emscripten.JSType | null,
    argTypes: Emscripten.JSType[],
    opts?: Emscripten.CCallOpts,
): (...args: any[]) => any;

declare function setValue(ptr: number, value: any, type: Emscripten.CType, noSafe?: boolean): void;
declare function getValue(ptr: number, type: Emscripten.CType, noSafe?: boolean): number;

declare function allocate(
    slab: number[] | ArrayBufferView | number,
    types: Emscripten.CType | Emscripten.CType[],
    allocator: number,
    ptr?: number,
): number;

declare function stackAlloc(size: number): number;
declare function stackSave(): number;
declare function stackRestore(ptr: number): void;

declare function UTF8ToString(ptr: number, maxBytesToRead?: number): string;
declare function stringToUTF8(str: string, outPtr: number, maxBytesToRead?: number): void;
declare function lengthBytesUTF8(str: string): number;
declare function allocateUTF8(str: string): number;
declare function allocateUTF8OnStack(str: string): number;
declare function UTF16ToString(ptr: number): string;
declare function stringToUTF16(str: string, outPtr: number, maxBytesToRead?: number): void;
declare function lengthBytesUTF16(str: string): number;
declare function UTF32ToString(ptr: number): string;
declare function stringToUTF32(str: string, outPtr: number, maxBytesToRead?: number): void;
declare function lengthBytesUTF32(str: string): number;

declare function intArrayFromString(stringy: string, dontAddNull?: boolean, length?: number): number[];
declare function intArrayToString(array: number[]): string;
declare function writeStringToMemory(str: string, buffer: number, dontAddNull: boolean): void;
declare function writeArrayToMemory(array: number[], buffer: number): void;
declare function writeAsciiToMemory(str: string, buffer: number, dontAddNull: boolean): void;

declare function addRunDependency(id: any): void;
declare function removeRunDependency(id: any): void;

declare function addFunction(func: (...args: any[]) => any, signature?: string): number;
declare function removeFunction(funcPtr: number): void;

declare var ALLOC_NORMAL: number;
declare var ALLOC_STACK: number;
declare var ALLOC_STATIC: number;
declare var ALLOC_DYNAMIC: number;
declare var ALLOC_NONE: number;
