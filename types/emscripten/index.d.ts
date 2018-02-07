// Type definitions for Emscripten
// Project: http://kripken.github.io/emscripten-site/index.html
// Definitions by: Kensuke Matsuzaki <https://github.com/zakki>
//                 Periklis Tsirakidis <https://github.com/periklis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="webassembly-js-api" />

declare namespace Emscripten {
    interface FileSystemType {
    }
}

declare namespace Module {
    type EnvironmentType = "WEB" | "NODE" | "SHELL" | "WORKER";

    function print(str: string): void;
    function printErr(str: string): void;
    var arguments: string[];
    var environment: EnvironmentType;
    var preInit: { ():  void }[];
    var preRun: { ():  void }[];
    var postRun: { ():  void }[];
    var preinitializedWebGLContext: WebGLRenderingContext;
    var noInitialRun: boolean;
    var noExitRuntime: boolean;
    var logReadFiles: boolean;
    var filePackagePrefixURL: string;
    var wasmBinary: ArrayBuffer;

    function destroy(object: object): void;
    function getPreloadedPackage(remotePackageName: string, remotePackageSize: number): ArrayBuffer;
    function instantiateWasm(
        imports: WebAssembly.Imports,
        successCallback: (module: WebAssembly.Module) => void
    ): WebAssembly.Exports;
    function locateFile(url: string): string;
    function onCustomMessage(event: MessageEvent): void;

    var Runtime: any;

    function ccall(ident: string, returnType: string | null, argTypes: string[], args: any[]): any;
    function cwrap(ident: string, returnType: string | null, argTypes: string[]): any;

    function setValue(ptr: number, value: any, type: string, noSafe?: boolean): void;
    function getValue(ptr: number, type: string, noSafe?: boolean): number;

    var ALLOC_NORMAL: number;
    var ALLOC_STACK: number;
    var ALLOC_STATIC: number;
    var ALLOC_DYNAMIC: number;
    var ALLOC_NONE: number;

    function allocate(slab: any, types: string, allocator: number, ptr: number): number;
    function allocate(slab: any, types: string[], allocator: number, ptr: number): number;

    function Pointer_stringify(ptr: number, length?: number): string;
    function UTF16ToString(ptr: number): string;
    function stringToUTF16(str: string, outPtr: number): void;
    function UTF32ToString(ptr: number): string;
    function stringToUTF32(str: string, outPtr: number): void;

    // USE_TYPED_ARRAYS == 1
    var HEAP: Int32Array;
    var IHEAP: Int32Array;
    var FHEAP: Float64Array;

    // USE_TYPED_ARRAYS == 2
    var HEAP8: Int8Array;
    var HEAP16: Int16Array;
    var HEAP32: Int32Array;
    var HEAPU8:  Uint8Array;
    var HEAPU16: Uint16Array;
    var HEAPU32: Uint32Array;
    var HEAPF32: Float32Array;
    var HEAPF64: Float64Array;

    var TOTAL_STACK: number;
    var TOTAL_MEMORY: number;
    var FAST_MEMORY: number;

    function addOnPreRun(cb: () => any): void;
    function addOnInit(cb: () => any): void;
    function addOnPreMain(cb: () => any): void;
    function addOnExit(cb: () => any): void;
    function addOnPostRun(cb: () => any): void;

    // Tools
    function intArrayFromString(stringy: string, dontAddNull?: boolean, length?: number): number[];
    function intArrayToString(array: number[]): string;
    function writeStringToMemory(str: string, buffer: number, dontAddNull: boolean): void;
    function writeArrayToMemory(array: number[], buffer: number): void;
    function writeAsciiToMemory(str: string, buffer: number, dontAddNull: boolean): void;

    function addRunDependency(id: any): void;
    function removeRunDependency(id: any): void;


    var preloadedImages: any;
    var preloadedAudios: any;

    function _malloc(size: number): number;
    function _free(ptr: number): void;
}

declare namespace FS {
    interface Lookup {
        path: string;
        node: FSNode;
    }

    interface FSStream {}
    interface FSNode {}
    interface ErrnoError {}

    var ignorePermissions: boolean;
    var trackingDelegate: any;
    var tracking: any;
    var genericErrors: any;

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
    function syncfs( callback: (e: any) => any, populate?: boolean): void;
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
    function write(stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number, canOwn?: boolean): number;
    function allocate(stream: FSStream, offset: number, length: number): void;
    function mmap(stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position: number, prot: number, flags: number): any;
    function ioctl(stream: FSStream, cmd: any, arg: any): any;
    function readFile(path: string, opts?: {encoding: string; flags: string}): any;
    function writeFile(path: string, data: ArrayBufferView, opts?: {encoding: string; flags: string}): void;
    function writeFile(path: string, data: string, opts?: {encoding: string; flags: string}): void;

    //
    // module-level FS code
    //
    function cwd(): string;
    function chdir(path: string): void;
    function init(input: () => number, output: (c: number) => any, error: (c: number) => any): void;

    function createLazyFile(parent: string, name: string, url: string, canRead: boolean, canWrite: boolean): FSNode;
    function createLazyFile(parent: FSNode, name: string, url: string, canRead: boolean, canWrite: boolean): FSNode;

    function createPreloadedFile(parent: string, name: string, url: string, canRead: boolean, canWrite: boolean, onload?: ()=> void, onerror?: ()=>void, dontCreateFile?:boolean, canOwn?: boolean): void;
    function createPreloadedFile(parent: FSNode, name: string, url: string, canRead: boolean, canWrite: boolean, onload?: ()=> void, onerror?: ()=>void, dontCreateFile?:boolean, canOwn?: boolean): void;
}

declare var MEMFS: Emscripten.FileSystemType;
declare var NODEFS: Emscripten.FileSystemType;
declare var IDBFS: Emscripten.FileSystemType;

interface Math {
    imul(a: number, b: number): number;
}
