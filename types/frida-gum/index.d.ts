// Type definitions for non-npm package frida-gum 16.2
// Project: https://github.com/frida/frida
// Definitions by: Ole André Vadla Ravnås <https://github.com/oleavr>
//                 Francesco Tamagni <https://github.com/mrmacete>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

/**
 * Returns a hexdump of the provided ArrayBuffer or NativePointerValue target.
 *
 * @param target The ArrayBuffer or NativePointerValue to dump.
 * @param options Options customizing the output.
 */
declare function hexdump(target: ArrayBuffer | NativePointerValue, options?: HexdumpOptions): string;

interface HexdumpOptions {
    /**
     * Specifies byte offset of where to start dumping. Defaults to 0.
     */
    offset?: number;

    /**
     * Limits how many bytes to dump.
     */
    length?: number;

    /**
     * Whether a header should be included. Defaults to true.
     */
    header?: boolean;

    /**
     * Whether ANSI colors should be used. Defaults to false.
     */
    ansi?: boolean;
}

/**
 * Short-hand for `new Int64(value)`.
 */
declare function int64(value: string | number): Int64;

/**
 * Short-hand for `new UInt64(value)`.
 */
declare function uint64(value: string | number): UInt64;

/**
 * Short-hand for `new NativePointer(value)`.
 */
declare function ptr(value: string | number): NativePointer;

/**
 * Short-hand for `ptr("0")`.
 */
declare const NULL: NativePointer;

/**
 * Requests callback to be called on the next message received from your Frida-based application.
 *
 * This will only give you one message, so you need to call `recv()` again to receive the next one.
 */
declare function recv(callback: MessageCallback): MessageRecvOperation;

/**
 * Requests callback to be called when the next message of the given `type` has been received from your
 * Frida-based application.
 *
 * This will only give you one message, so you need to call `recv()` again to receive the next one.
 */
declare function recv(type: string, callback: MessageCallback): MessageRecvOperation;

interface MessageCallback { (message: any, data: ArrayBuffer | null): void; }

interface MessageRecvOperation {
    /**
     * Blocks until the message has been received and callback has returned.
     */
    wait(): void;
}

/**
 * Sends a JSON-serializable message to your Frida-based application,
 * with (optionally) some raw binary data included. The latter is useful
 * if you e.g. dumped some memory using `NativePointer#readByteArray()`.
 *
 * @param message Any JSON-serializable value.
 * @param data Raw binary data.
 */
declare function send(message: any, data?: ArrayBuffer | number[] | null): void;

/**
 * Calls `func` after `delay` milliseconds, or if omitted: as soon as Frida's
 * JavaScript thread is idle. Any additional `params` are passed along.
 *
 * Returns an id that can be passed to `clearTimeout()` to cancel it.
 */
declare function setTimeout(func: ScheduledCallback, delay?: number, ...params: any[]): TimeoutId;

/**
 * Cancels a previously scheduled `setTimeout()`.
 */
declare function clearTimeout(id: TimeoutId): void;

/**
 * Opaque ID returned by `setTimeout()`. Pass it to `clearTimeout()` to cancel a pending `setTimeout()`.
 */
type TimeoutId = number;

/**
 * Calls `func` every `delay` milliseconds, optionally passing it the provided params.
 * Returns an id that can be passed to clearInterval() to cancel it.
 */
declare function setInterval(func: ScheduledCallback, delay: number, ...params: any[]): IntervalId;

/**
 * Cancels a previously scheduled `setInterval()`.
 */
declare function clearInterval(id: IntervalId): void;

/**
 * Opaque ID returned by `setInterval()`. Pass it to `clearInterval()` to cancel a pending `setInterval()`.
 */
type IntervalId = number;

/**
 * Schedules `func` to be called on Frida's JavaScript thread, optionally passing it the provided params.
 * Returns an id that can be passed to clearImmediate() to cancel it.
 */
declare function setImmediate(func: ScheduledCallback, ...params: any[]): ImmediateId;

/**
 * Cancels a previously scheduled `clearImmediate()`.
 */
declare function clearImmediate(id: ImmediateId): void;

/**
 * Opaque ID returned by `setImmediate()`. Pass it to `clearImmediate()` to cancel a pending `setImmediate()`.
 */
type ImmediateId = number;

type ScheduledCallback = (...params: any[]) => void;

/**
 * Forces garbage collection.
 *
 * Useful for testing `WeakRef.bind()` logic, but also sometimes needed when
 * using the Duktape runtime and its default GC heuristics proving a bit too
 * lazy.
 */
declare function gc(): void;

declare namespace rpc {
    /**
     * Empty object that you can either replace or insert into to expose an RPC-style API to your application.
     * The key specifies the method name and the value is your exported function. This function may either return
     * a plain value for returning that to the caller immediately, or a Promise for returning asynchronously.
     */
    let exports: RpcExports;
}

interface RpcExports {
    [name: string]: AnyFunction;
}

type AnyFunction = (...args: any[]) => any;

declare namespace Frida {
    /**
     * The current Frida version.
     */
    const version: string;

    /**
     * The current size – in bytes – of Frida’s private heap, which is shared by all scripts and Frida’s own runtime.
     * This is useful for keeping an eye on how much memory your instrumentation is using out of the total consumed by
     * the hosting process.
     */
    const heapSize: number;

    /**
     * Source map for the GumJS runtime.
     */
    const sourceMap: SourceMap;
}

declare namespace Script {
    /**
     * Runtime being used.
     */
    const runtime: ScriptRuntime;

    /**
     * File name of the current script.
     */
    const fileName: string;

    /**
     * Source map of the current script.
     */
    const sourceMap: SourceMap;

    /**
     * Runs `func` on the next tick, i.e. when the current native thread exits
     * the JavaScript runtime. Any additional `params` are passed to it.
     */
    function nextTick(func: ScheduledCallback, ...params: any[]): void;

    /**
     * Temporarily prevents the current script from being unloaded.
     * This is reference-counted, so there must be one matching `unpin()`
     * happening at a later point.
     *
     * Typically used in the callback of `WeakRef.bind()` when you need to
     * schedule cleanup on another thread.
     */
    function pin(): void;

    /**
     * Reverses a previous `pin()` so the current script may be unloaded.
     */
    function unpin(): void;

    /**
     * Installs or uninstalls a handler that is used to resolve attempts to
     * access non-existent global variables.
     *
     * Useful for implementing a REPL where unknown identifiers may be fetched
     * lazily from a database.
     *
     * @param handler The handler to install, or `null` to uninstall a
     *                previously installed handler.
     */
    function setGlobalAccessHandler(handler: GlobalAccessHandler | null): void;
}

type ScriptRuntime = "DUK" | "V8";

interface GlobalAccessHandler {
    /**
     * Queries which additional globals exist.
     */
    enumerate(): string[];

    /**
     * Called whenever an attempt to access a non-existent global variable is
     * made. Return `undefined` to treat the variable as inexistent.
     *
     * @param property Name of non-existent global that is being accessed.
     */
    get(property: string): any;
}

declare namespace Process {
    /**
     * PID of the current process.
     */
    const id: number;

    /**
     * Architecture of the current process.
     */
    const arch: Architecture;

    /**
     * Platform of the current process.
     */
    const platform: Platform;

    /**
     * Size of a virtual memory page in bytes. This is used to make your scripts more portable.
     */
    const pageSize: number;

    /**
     * Size of a pointer in bytes. This is used to make your scripts more portable.
     */
    const pointerSize: number;

    /**
     * Whether Frida will avoid modifying existing code in memory and will not try to run unsigned code.
     * Currently this property will always be set to Optional unless you are using Gadget and have configured
     * it to assume that code-signing is required. This property allows you to determine whether the Interceptor
     * API is off limits, and whether it is safe to modify code or run unsigned code.
     */
    const codeSigningPolicy: CodeSigningPolicy;

    /**
     * Determines whether a debugger is currently attached.
     */
    function isDebuggerAttached(): boolean;

    /**
     * Gets this thread’s OS-specific id.
     */
    function getCurrentThreadId(): ThreadId;

    /**
     * Enumerates all threads.
     */
    function enumerateThreads(): ThreadDetails[];

    /**
     * Looks up a module by address. Returns null if not found.
     */
    function findModuleByAddress(address: NativePointerValue): Module | null;

    /**
     * Looks up a module by address. Throws an exception if not found.
     */
    function getModuleByAddress(address: NativePointerValue): Module;

    /**
     * Looks up a module by name. Returns null if not found.
     */
    function findModuleByName(name: string): Module | null;

    /**
     * Looks up a module by name. Throws an exception if not found.
     */
    function getModuleByName(name: string): Module;

    /**
     * Enumerates modules loaded right now.
     */
    function enumerateModules(): Module[];

    /**
     * Looks up a memory range by address. Returns null if not found.
     */
    function findRangeByAddress(address: NativePointerValue): RangeDetails | null;

    /**
     * Looks up a memory range by address. Throws an exception if not found.
     */
    function getRangeByAddress(address: NativePointerValue): RangeDetails;

    /**
     * Enumerates memory ranges satisfying `specifier`.
     *
     * @param specifier The kind of ranges to include.
     */
    function enumerateRanges(specifier: PageProtection | EnumerateRangesSpecifier): RangeDetails[];

    /**
     * Just like `enumerateRanges()`, but for individual memory allocations known to the system heap.
     */
    function enumerateMallocRanges(): RangeDetails[];

    /**
     * Installs a process-wide exception handler callback that gets a chance to
     * handle native exceptions before the hosting process itself does.
     *
     * It is up to your callback to decide what to do with the exception.
     * It could for example:
     * - Log the issue.
     * - Notify your application through a `send()` followed by a blocking `recv()` for acknowledgement of the sent data
     *   being received.
     * - Modify registers and memory to recover from the exception.
     *
     * You should return `true` if you did handle the exception, in which case
     * Frida will resume the thread immediately. If you do not return `true`,
     * Frida will forward the exception to the hosting process' exception
     * handler, if it has one, or let the OS terminate the process.
     */
    function setExceptionHandler(callback: ExceptionHandlerCallback): void;
}

declare class Module {
    /**
     * Canonical module name.
     */
    name: string;

    /**
     * Base address.
     */
    base: NativePointer;

    /**
     * Size in bytes.
     */
    size: number;

    /**
     * Full filesystem path.
     */
    path: string;

    /**
     * Enumerates imports of module.
     */
    enumerateImports(): ModuleImportDetails[];

    /**
     * Enumerates exports of module.
     */
    enumerateExports(): ModuleExportDetails[];

    /**
     * Enumerates symbols of module.
     */
    enumerateSymbols(): ModuleSymbolDetails[];

    /**
     * Enumerates memory ranges of module with the `name` as seen in `Process#enumerateModules()`.
     *
     * @param protection Minimum protection of ranges to include.
     */
    enumerateRanges(protection: PageProtection): RangeDetails[];

    /**
     * Looks up the absolute address of the export named `exportName`.
     *
     * Returns null if the export doesn't exist.
     *
     * @param exportName Export name to find the address of.
     */
    findExportByName(exportName: string): NativePointer | null;

    /**
     * Looks up the absolute address of the export named `exportName`.
     *
     * Throws an exception if the export doesn't exist.
     *
     * @param exportName Export name to find the address of.
     */
    getExportByName(exportName: string): NativePointer;

    /**
     * Loads the specified module.
     */
    static load(name: string): Module;

    /**
     * Ensures that initializers of the specified module have been run. This is important during early instrumentation,
     * i.e. code run early in the process lifetime, to be able to safely interact with APIs.
     *
     * One such use-case is interacting with ObjC classes provided by a given module.
     */
    static ensureInitialized(name: string): void;

    /**
     * Looks up the base address of the `name` module. Returns null if the module isn’t loaded.
     *
     * @param name Module name or path.
     */
    static findBaseAddress(name: string): NativePointer | null;

    /**
     * Looks up the base address of the `name` module. Throws an exception if the module isn’t loaded.
     *
     * @param name Module name or path.
     */
    static getBaseAddress(name: string): NativePointer;

    /**
     * Looks up the absolute address of the export named `exportName` in `moduleName`. If the module isn’t known you may
     * pass null instead of its name, but this can be a costly search and should be avoided.
     *
     * Returns null if the module or export doesn't exist.
     *
     * @param moduleName Module name or path.
     * @param exportName Export name to find the address of.
     */
    static findExportByName(moduleName: string | null, exportName: string): NativePointer | null;

    /**
     * Looks up the absolute address of the export named `exportName` in `moduleName`. If the module isn’t known you may
     * pass null instead of its name, but this can be a costly search and should be avoided.
     *
     * Throws an exception if the module or export doesn't exist.
     *
     * @param moduleName Module name or path.
     * @param exportName Export name to find the address of.
     */
    static getExportByName(moduleName: string | null, exportName: string): NativePointer;
}

declare class ModuleMap {
    /**
     * Creates a new module map optimized for determining which module a given memory address belongs to, if any.
     * Takes a snapshot of the currently loaded modules when created, which may be refreshed by calling `update()`.
     *
     * The `filter` argument is optional and allows you to pass a function used for filtering the list of modules.
     * This is useful if you e.g. only care about modules owned by the application itself, and allows you to quickly
     * check if an address belongs to one of its modules. The filter function is given the module's details and must
     * return true for each module that should be kept in the map. It is called for each loaded module every time the
     * map is updated.
     *
     * @param filter Filter function to decide which modules are kept in the map.
     */
    constructor(filter?: ModuleMapFilter);

    /**
     * Determines if `address` belongs to any of the contained modules.
     *
     * @param address Address that might belong to a module in the map.
     */
    has(address: NativePointerValue): boolean;

    /**
     * Looks up a module by address. Returns null if not found.
     *
     * @param address Address that might belong to a module in the map.
     */
    find(address: NativePointerValue): Module | null;

    /**
     * Looks up a module by address. Throws an exception if not found.
     *
     * @param address Address that might belong to a module in the map.
     */
    get(address: NativePointerValue): Module;

    /**
     * Just like `find()`, but only returns the `name` field, which means less overhead when you don’t need the
     * other details. Returns null if not found.
     *
     * @param address Address that might belong to a module in the map.
     */
    findName(address: NativePointerValue): string | null;

    /**
     * Just like `get()`, but only returns the `name` field, which means less overhead when you don’t need the
     * other details. Throws an exception if not found.
     *
     * @param address Address that might belong to a module in the map.
     */
    getName(address: NativePointerValue): string;

    /**
     * Just like `find()`, but only returns the `path` field, which means less overhead when you don’t need the
     * other details. Returns null if not found.
     *
     * @param address Address that might belong to a module in the map.
     */
    findPath(address: NativePointerValue): string | null;

    /**
     * Just like `get()`, but only returns the `path` field, which means less overhead when you don’t need the
     * other details. Throws an exception if not found.
     *
     * @param address Address that might belong to a module in the map.
     */
    getPath(address: NativePointerValue): string;

    /**
     * Updates the map.
     *
     * You should call this after a module has been loaded or unloaded to avoid operating on stale data.
     */
    update(): void;

    /**
     * Gets the modules currently in the map. The returned array is a deep copy and will not mutate after a
     * call to `update()`.
     */
    values(): Module[];
}

type ModuleMapFilter = (m: Module) => boolean;

declare namespace Memory {
    /**
     * Scans memory for occurences of `pattern` in the memory range given by `address` and `size`.
     *
     * @param address Starting address to scan from.
     * @param size Number of bytes to scan.
     * @param pattern Match pattern of the form “13 37 ?? ff” to match 0x13 followed by 0x37 followed by any byte
     *                followed by 0xff. For more advanced matching it is also possible to specify an r2-style mask.
     *                The mask is bitwise AND-ed against both the needle and the haystack. To specify the mask append
     *                a `:` character after the needle, followed by the mask using the same syntax.
     *                For example: “13 37 13 37 : 1f ff ff f1”.
     *                For convenience it is also possible to specify nibble-level wildcards, like “?3 37 13 ?7”,
     *                which gets translated into masks behind the scenes.
     * @param callbacks Object with callbacks.
     */
    function scan(address: NativePointerValue, size: number | UInt64, pattern: string, callbacks: MemoryScanCallbacks): void;

    /**
     * Synchronous version of `scan()`.
     *
     * @param address Starting address to scan from.
     * @param size Number of bytes to scan.
     * @param pattern Match pattern, see `Memory.scan()` for details.
     */
    function scanSync(address: NativePointerValue, size: number | UInt64, pattern: string): MemoryScanMatch[];

    /**
     * Allocates `size` bytes of memory on Frida's private heap, or, if `size` is a multiple of Process#pageSize,
     * one or more raw memory pages managed by the OS. The allocated memory will be released when the returned
     * NativePointer value gets garbage collected. This means you need to keep a reference to it while the pointer
     * is being used by code outside the JavaScript runtime.
     *
     * @param size Number of bytes to allocate.
     */
    function alloc(size: number | UInt64): NativePointer;

    /**
     * Allocates, encodes and writes out `str` as a UTF-8 string on Frida's private heap.
     * See Memory#alloc() for details about its lifetime.
     *
     * @param str String to allocate.
     */
    function allocUtf8String(str: string): NativePointer;

    /**
     * Allocates, encodes and writes out `str` as a UTF-16 string on Frida's private heap.
     * See Memory#alloc() for details about its lifetime.
     *
     * @param str String to allocate.
     */
    function allocUtf16String(str: string): NativePointer;

    /**
     * Allocates, encodes and writes out `str` as an ANSI string on Frida's private heap.
     * See Memory#alloc() for details about its lifetime.
     *
     * @param str String to allocate.
     */
    function allocAnsiString(str: string): NativePointer;

    /**
     * Just like memcpy.
     *
     * @param dst Destination address.
     * @param src Sources address.
     * @param n Number of bytes to copy.
     */
    function copy(dst: NativePointerValue, src: NativePointerValue, n: number | UInt64): void;

    /**
     * Short-hand for Memory#alloc() followed by Memory#copy(). See Memory#alloc() for details about lifetime.
     *
     * @param address Address to copy from.
     * @param size Number of bytes to copy.
     */
    function dup(address: NativePointerValue, size: number | UInt64): NativePointer;

    /**
     * Changes the page protection on a region of memory.
     *
     * @param address Starting address.
     * @param size Number of bytes. Must be a multiple of Process#pageSize.
     * @param protection Desired page protection.
     */
    function protect(address: NativePointerValue, size: number | UInt64, protection: PageProtection): boolean;

    /**
     * Safely modifies `size` bytes at `address`. The supplied function `apply` gets called with a writable pointer
     * where you must write the desired modifications before returning. Do not make any assumptions about this being
     * the same location as address, as some systems require modifications to be written to a temporary location before
     * being mapped into memory on top of the original memory page (e.g. on iOS, where directly modifying in-memory
     * code may result in the process losing its CS_VALID status).
     *
     * @param address Starting address to modify.
     * @param size Number of bytes to modify.
     * @param apply Function that applies the desired changes.
     */
    function patchCode(address: NativePointerValue, size: number | UInt64, apply: MemoryPatchApplyCallback): void;
}

interface MemoryRange {
    /**
     * Base address.
     */
    base: NativePointer;

    /**
     * Size in bytes.
     */
    size: number;
}

/**
 * Monitors one or more memory ranges for access, and notifies on the first
 * access of each contained memory page.
 *
 * Only available on Windows for now. We would love to support this on the other
 * platforms too, so if you find this useful and would like to help out, please
 * get in touch.
 */
declare namespace MemoryAccessMonitor {
    /**
     * Starts monitoring one or more memory ranges for access, and notifies on
     * the first access of each contained memory page.
     *
     * @param ranges One or more ranges to monitor.
     * @param callbacks Callbacks to be notified on access.
     */
    function enable(ranges: MemoryAccessRange | MemoryAccessRange[], callbacks: MemoryAccessCallbacks): void;

    /**
     * Stops monitoring the remaining memory ranges passed to
     * `MemoryAccessMonitor.enable()`.
     */
    function disable(): void;
}

interface MemoryAccessRange {
    /**
     * Base address.
     */
    base: NativePointer;

    /**
     * Size in bytes.
     */
    size: number;
}

/**
 * Callbacks to be notified synchronously on memory access.
 */
interface MemoryAccessCallbacks {
    onAccess: (details: MemoryAccessDetails) => void;
}

interface MemoryAccessDetails {
    /**
     * The kind of operation that triggered the access.
     */
    operation: MemoryOperation;

    /**
     * Address of instruction performing the access.
     */
    from: NativePointer;

    /**
     * Address being accessed.
     */
    address: NativePointer;

    /**
     * Index of the accessed range in the ranges provided to
     * `MemoryAccessMonitor.enable()`.
     */
    rangeIndex: number;

    /**
     * Index of the accessed memory page inside the specified range.
     */
    pageIndex: number;

    /**
     * Overall number of pages which have been accessed so far, and are thus
     * no longer being monitored.
     */
    pagesCompleted: number;

    /**
     * Overall number of pages that were initially monitored.
     */
    pagesTotal: number;
}

declare namespace Thread {
    /**
     * Generates a backtrace for the given thread's `context`.
     *
     * If you call this from Interceptor's `onEnter` or `onLeave` callbacks
     * you should provide `this.context` for the optional `context` argument,
     * as it will give you a more accurate backtrace. Omitting `context` means
     * the backtrace will be generated from the current stack location, which
     * may not give you a very good backtrace due to the JavaScript VM's
     * potentially JITed stack frames.
     *
     * @param context CPU context to use for generating the backtrace.
     * @param backtracer The kind of backtracer to use. Must be either
     *                   `Backtracer.FUZZY` or `Backtracer.ACCURATE`,
     *                   where the latter is the default if not specified.
     */
    function backtrace(context?: CpuContext, backtracer?: Backtracer): NativePointer[];

    /**
     * Suspends execution of the current thread for `delay` seconds.
     *
     * For example `0.05` to sleep for 50 ms.
     *
     * @param delay Delay in seconds.
     */
    function sleep(delay: number): void;
}

// tslint:disable-next-line:no-unnecessary-class
declare class Backtracer {
    /**
     * The accurate kind of backtracers rely on debugger-friendly binaries or
     * presence of debug information to do a good job, but avoid false
     * positives.
     */
    static ACCURATE: Backtracer;

    /**
     * The fuzzy backtracers perform forensics on the stack in order to guess
     * the return addresses, which means you will get false positives, but it
     * will work on any binary.
     */
    static FUZZY: Backtracer;
}

type Architecture =
    | "ia32"
    | "x64"
    | "arm"
    | "arm64"
    | "mips"
    ;

type Platform =
    | "windows"
    | "darwin"
    | "linux"
    | "qnx"
    ;

type CodeSigningPolicy = "optional" | "required";

/**
 * Given as a string of the form: rwx, where rw- means “readable and writable”.
 */
type PageProtection = string;

type ThreadId = number;

type ThreadState =
    | "running"
    | "stopped"
    | "waiting"
    | "uninterruptible"
    | "halted"
    ;

interface ThreadDetails {
    /**
     * OS-specific ID.
     */
    id: ThreadId;

    /**
     * Snapshot of state.
     */
    state: ThreadState;

    /**
     * Snapshot of CPU registers.
     */
    context: CpuContext;
}

interface KernelModuleDetails {
    /**
     * Canonical module name.
     */
    name: string;

    /**
     * Base address.
     */
    base: UInt64;

    /**
     * Size in bytes.
     */
    size: number;
}

interface ModuleImportDetails {
    /**
     * The kind of import, if available.
     */
    type?: ModuleImportType;

    /**
     * Imported symbol name.
     */
    name: string;

    /**
     * Module name, if available.
     */
    module?: string;

    /**
     * Absolute address, if available.
     */
    address?: NativePointer;

    /**
     * Memory location where the import is stored, if available.
     */
    slot?: NativePointer;
}

interface ModuleExportDetails {
    /**
     * The kind of export.
     */
    type: ModuleExportType;

    /**
     * Exported symbol name.
     */
    name: string;

    /**
     * Absolute address.
     */
    address: NativePointer;
}

interface ModuleSymbolDetails {
    /**
     * Whether symbol is globally visible.
     */
    isGlobal: boolean;

    /**
     * The kind of symbol.
     */
    type: ModuleSymbolType;

    /**
     * Which section this symbol resides in, if available.
     */
    section?: ModuleSymbolSectionDetails;

    /**
     * Symbol name.
     */
    name: string;

    /**
     * Absolute address.
     */
    address: NativePointer;

    /**
     * Size in bytes, if available.
     */
    size?: number;
}

type ModuleImportType = "function" | "variable";

type ModuleExportType = "function" | "variable";

type ModuleSymbolType =
    // Common
    | "unknown"
    | "section"

    // Mach-O
    | "undefined"
    | "absolute"
    | "prebound-undefined"
    | "indirect"

    // ELF
    | "object"
    | "function"
    | "file"
    | "common"
    | "tls"
    ;

interface ModuleSymbolSectionDetails {
    /**
     * Section index, segment name (if applicable) and section name – same format as r2’s section IDs.
     */
    id: string;

    /**
     * Section's memory protection.
     */
    protection: PageProtection;
}

interface RangeDetails {
    /**
     * Base address.
     */
    base: NativePointer;

    /**
     * Size in bytes.
     */
    size: number;

    /**
     * Protection.
     */
    protection: PageProtection;

    /**
     * File mapping details, if available.
     */
    file?: FileMapping;
}

interface KernelRangeDetails {
    /**
     * Base address.
     */
    base: UInt64;

    /**
     * Size in bytes.
     */
    size: number;

    /**
     * Protection.
     */
    protection: PageProtection;
}

interface KernelModuleRangeDetails {
    /**
     * Name.
     */
    name: string;

    /**
     * Base address.
     */
    base: UInt64;

    /**
     * Size in bytes.
     */
    size: number;

    /**
     * Protection.
     */
    protection: PageProtection;
}

interface FileMapping {
    /**
     * Full filesystem path.
     */
    path: string;

    /**
     * Offset in the mapped file on disk, in bytes.
     */
    offset: number;

    /**
     * Size in the mapped file on disk, in bytes.
     */
    size: number;
}

interface EnumerateRangesSpecifier {
    /**
     * Minimum protection required to be included in the result.
     */
    protection: PageProtection;

    /**
     * Whether neighboring ranges with the same protection should be coalesced. The default is false.
     */
    coalesce: boolean;
}

type ExceptionHandlerCallback = (exception: ExceptionDetails) => boolean | void;

interface ExceptionDetails {
    /**
     * The kind of exception that occurred.
     */
    type: ExceptionType;

    /**
     * Address where the exception occurred.
     */
    address: NativePointer;

    /**
     * Memory operation details, if relevant.
     */
    memory?: ExceptionMemoryDetails;

    /**
     * CPU registers. You may also update register values by assigning to these keys.
     */
    context: CpuContext;

    /**
     * Address of the OS and architecture-specific CPU context struct.
     *
     * This is only exposed as a last resort for edge-cases where `context` isn’t providing enough details.
     * We would however discourage using this and rather submit a pull-request to add the missing bits needed
     * for your use-case.
     */
    nativeContext: NativePointer;
}

type ExceptionType =
    | "abort"
    | "access-violation"
    | "guard-page"
    | "illegal-instruction"
    | "stack-overflow"
    | "arithmetic"
    | "breakpoint"
    | "single-step"
    | "system"
    ;

interface ExceptionMemoryDetails {
    /**
     * The kind of operation that triggered the exception.
     */
    operation: MemoryOperation;

    /**
     * Address that was accessed when the exception occurred.
     */
    address: NativePointer;
}

type MemoryOperation = "read" | "write" | "execute";

interface EnumerateCallbacks<T> {
    onMatch: (item: T) => void | EnumerateAction;
    onComplete: () => void;
}

type EnumerateAction = "stop";

interface MemoryScanCallbacks {
    /**
     * Called with each occurence that was found.
     *
     * @param address Memory address where a match was found.
     * @param size Size of this match.
     */
    onMatch: (address: NativePointer, size: number) => void | EnumerateAction;

    /**
     * Called when there was a memory access error while scanning.
     *
     * @param reason Why the memory access failed.
     */
    onError?: (reason: string) => void;

    /**
     * Called when the memory range has been fully scanned.
     */
    onComplete: () => void;
}

interface MemoryScanMatch {
    /**
     * Memory address where a match was found.
     */
    address: NativePointer;

    /**
     * Size of this match.
     */
    size: number;
}

interface KernelMemoryScanCallbacks {
    /**
     * Called with each occurence that was found.
     *
     * @param address Memory address where a match was found.
     * @param size Size of this match.
     */
    onMatch: (address: UInt64, size: number) => void | EnumerateAction;

    /**
     * Called when there was a memory access error while scanning.
     *
     * @param reason Why the memory access failed.
     */
    onError?: (reason: string) => void;

    /**
     * Called when the memory range has been fully scanned.
     */
    onComplete: () => void;
}

interface KernelMemoryScanMatch {
    /**
     * Memory address where a match was found.
     */
    address: UInt64;

    /**
     * Size of this match.
     */
    size: number;
}

type MemoryPatchApplyCallback = (code: NativePointer) => void;

/**
 * Represents a signed 64-bit value.
 */
declare class Int64 {
    /**
     * Creates a new Int64 from `v`, which is either a string containing the value in decimal, or hexadecimal
     * if prefixed with “0x”, or a number. You may use the int64(v) short-hand for brevity.
     */
    constructor(v: string | number | Int64);

    /**
     * Makes a new Int64 whose value is `this` + `v`.
     */
    add(v: Int64 | number | string): Int64;

    /**
     * Makes a new Int64 whose value is `this` - `v`.
     */
    sub(v: Int64 | number | string): Int64;

    /**
     * Makes a new Int64 whose value is `this` & `v`.
     */
    and(v: Int64 | number | string): Int64;

    /**
     * Makes a new Int64 whose value is `this` | `v`.
     */
    or(v: Int64 | number | string): Int64;

    /**
     * Makes a new Int64 whose value is `this` ^ `v`.
     */
    xor(v: Int64 | number | string): Int64;

    /**
     * Makes a new Int64 whose value is `this` << `v`.
     */
    shl(v: Int64 | number | string): Int64;

    /**
     * Makes a new Int64 whose value is `this` >> `v`.
     */
    shr(v: Int64 | number | string): Int64;

    /**
     * Makes a new Int64 whose value is ~`this`.
     */
    not(): Int64;

    /**
     * Returns an integer comparison result just like String#localeCompare().
     */
    compare(v: Int64 | number | string): number;

    /**
     * Returns a boolean indicating whether `v` is equal to `this`.
     */
    equals(v: Int64 | number | string): boolean;

    /**
     * Converts to a number.
     */
    toNumber(): number;

    /**
     * Converts to a string, optionally with a custom `radix`.
     */
    toString(radix?: number): string;

    /**
     * Converts to a JSON-serializable value. Same as `toString()`.
     */
    toJSON(): string;

    /**
     * Converts to a number. Same as `toNumber()`.
     */
    valueOf(): number;
}

/**
 * Represents an unsigned 64-bit value.
 */
declare class UInt64 {
    /**
     * Creates a new UInt64 from `v`, which is either a string containing the value in decimal, or hexadecimal
     * if prefixed with “0x”, or a number. You may use the uint64(v) short-hand for brevity.
     */
    constructor(v: string | number | UInt64);

    /**
     * Makes a new UInt64 whose value is `this` + `v`.
     */
    add(v: UInt64 | number | string): UInt64;

    /**
     * Makes a new UInt64 whose value is `this` - `v`.
     */
    sub(v: UInt64 | number | string): UInt64;

    /**
     * Makes a new UInt64 whose value is `this` & `v`.
     */
    and(v: UInt64 | number | string): UInt64;

    /**
     * Makes a new UInt64 whose value is `this` | `v`.
     */
    or(v: UInt64 | number | string): UInt64;

    /**
     * Makes a new UInt64 whose value is `this` ^ `v`.
     */
    xor(v: UInt64 | number | string): UInt64;

    /**
     * Makes a new UInt64 whose value is `this` << `v`.
     */
    shr(v: UInt64 | number | string): UInt64;

    /**
     * Makes a new UInt64 whose value is `this` >> `v`.
     */
    shl(v: UInt64 | number | string): UInt64;

    /**
     * Makes a new UInt64 whose value is ~`this`.
     */
    not(): UInt64;

    /**
     * Returns an integer comparison result just like String#localeCompare().
     */
    compare(v: UInt64 | number | string): number;

    /**
     * Returns a boolean indicating whether `v` is equal to `this`.
     */
    equals(v: UInt64 | number | string): boolean;

    /**
     * Converts to a number.
     */
    toNumber(): number;

    /**
     * Converts to a string, optionally with a custom `radix`.
     */
    toString(radix?: number): string;

    /**
     * Converts to a JSON-serializable value. Same as `toString()`.
     */
    toJSON(): string;

    /**
     * Converts to a number. Same as `toNumber()`.
     */
    valueOf(): number;
}

/**
 * Represents a native pointer value whose size depends on Process#pointerSize.
 */
declare class NativePointer {
    /**
     * Creates a new NativePointer from `v`, which is either a string containing the memory address in decimal,
     * or hexadecimal if prefixed with “0x”, or a number. You may use the ptr(v) short-hand for brevity.
     */
    constructor(v: string | number | UInt64 | Int64 | NativePointerValue);

    /**
     * Returns a boolean allowing you to conveniently check if a pointer is `NULL`.
     */
    isNull(): boolean;

    /**
     * Makes a new NativePointer whose value is `this` + `v`.
     */
    add(v: NativePointerValue | UInt64 | Int64 | number | string): NativePointer;

    /**
     * Makes a new NativePointer whose value is `this` - `v`.
     */
    sub(v: NativePointerValue | UInt64 | Int64 | number | string): NativePointer;

    /**
     * Makes a new NativePointer whose value is `this` & `v`.
     */
    and(v: NativePointerValue | UInt64 | Int64 | number | string): NativePointer;

    /**
     * Makes a new NativePointer whose value is `this` | `v`.
     */
    or(v: NativePointerValue | UInt64 | Int64 | number | string): NativePointer;

    /**
     * Makes a new NativePointer whose value is `this` ^ `v`.
     */
    xor(v: NativePointerValue | UInt64 | Int64 | number | string): NativePointer;

    /**
     * Makes a new NativePointer whose value is `this` << `v`.
     */
    shr(v: NativePointerValue | UInt64 | Int64 | number | string): NativePointer;

    /**
     * Makes a new NativePointer whose value is `this` >> `v`.
     */
    shl(v: NativePointerValue | UInt64 | Int64 | number | string): NativePointer;

    /**
     * Makes a new NativePointer whose value is ~`this`.
     */
    not(): NativePointer;

    /**
     * Makes a new NativePointer by taking the bits of `this` and adding
     * pointer authentication bits, creating a signed pointer. This is a
     * no-op if the current process does not support pointer
     * authentication, returning `this` instead of a new value.
     *
     * @param key The key to use. Defaults to `ia`.
     * @param data The data to use. Defaults to `0`.
     */
    sign(key?: PointerAuthenticationKey, data?: NativePointerValue | UInt64 | Int64 | number | string): NativePointer;

    /**
     * Makes a new NativePointer by taking the bits of `this` and
     * removing its pointer authentication bits, creating a raw pointer.
     * This is a no-op if the current process does not support pointer
     * authentication, returning `this` instead of a new value.
     *
     * @param key The key that was used to sign `this`. Defaults to `ia`.
     */
    strip(key?: PointerAuthenticationKey): NativePointer;

    /**
     * Makes a new NativePointer by taking `this` and blending it with
     * a constant, which may in turn be passed to `sign()` as `data`.
     *
     * @param smallInteger Value to blend with.
     */
    blend(smallInteger: number): NativePointer;

    /**
     * Returns a boolean indicating whether `v` is equal to `this`; i.e. it contains the same memory address.
     */
    equals(v: NativePointerValue | UInt64 | Int64 | number | string): boolean;

    /**
     * Returns an integer comparison result just like String#localeCompare().
     */
    compare(v: NativePointerValue | UInt64 | Int64 | number | string): number;

    /**
     * Converts to a signed 32-bit integer.
     */
    toInt32(): number;

    /**
     * Converts to an unsigned 32-bit integer.
     */
    toUInt32(): number;

    /**
     * Converts to a “0x”-prefixed hexadecimal string, unless a `radix`
     * is specified.
     */
    toString(radix?: number): string;

    /**
     * Converts to a JSON-serializable value. Same as `toString()`.
     */
    toJSON(): string;

    /**
     * Returns a string containing a `Memory#scan()`-compatible match pattern for this pointer’s raw value.
     */
    toMatchPattern(): string;

    readPointer(): NativePointer;
    readS8(): number;
    readU8(): number;
    readS16(): number;
    readU16(): number;
    readS32(): number;
    readU32(): number;
    readS64(): Int64;
    readU64(): UInt64;
    readShort(): number;
    readUShort(): number;
    readInt(): number;
    readUInt(): number;
    readLong(): number | Int64;
    readULong(): number | UInt64;
    readFloat(): number;
    readDouble(): number;
    readByteArray(length: number): ArrayBuffer | null;
    readCString(size?: number): string | null;
    readUtf8String(size?: number): string | null;
    readUtf16String(length?: number): string | null;
    readAnsiString(size?: number): string | null;

    writePointer(value: NativePointerValue): NativePointer;
    writeS8(value: number | Int64): NativePointer;
    writeU8(value: number | UInt64): NativePointer;
    writeS16(value: number | Int64): NativePointer;
    writeU16(value: number | UInt64): NativePointer;
    writeS32(value: number | Int64): NativePointer;
    writeU32(value: number | UInt64): NativePointer;
    writeS64(value: number | Int64): NativePointer;
    writeU64(value: number | UInt64): NativePointer;
    writeShort(value: number | Int64): NativePointer;
    writeUShort(value: number | UInt64): NativePointer;
    writeInt(value: number | Int64): NativePointer;
    writeUInt(value: number | UInt64): NativePointer;
    writeLong(value: number | Int64): NativePointer;
    writeULong(value: number | UInt64): NativePointer;
    writeFloat(value: number): NativePointer;
    writeDouble(value: number): NativePointer;
    writeByteArray(value: ArrayBuffer | number[]): NativePointer;
    writeUtf8String(value: string): NativePointer;
    writeUtf16String(value: string): NativePointer;
    writeAnsiString(value: string): NativePointer;
}

type PointerAuthenticationKey = "ia" | "ib" | "da" | "db";

interface ObjectWrapper {
    handle: NativePointer;
}

interface ArrayBufferConstructor {
    /**
     * Creates an ArrayBuffer backed by an existing memory region. Unlike
     * the NativePointer `read*()` and `write*()` APIs, no validation is
     * performed on access, meaning a bad pointer will crash the process.
     *
     * @param address Base address of the region. Passing `NULL` will result
     *                in an empty buffer.
     * @param size Size of the region. Passing `0` will result in an empty
     *             buffer.
     */
    wrap(address: NativePointerValue, size: number): ArrayBuffer;
}

interface ArrayBuffer {
    /**
     * Gets a pointer to the base address of the ArrayBuffer's backing store.
     * It is the caller's responsibility to keep the buffer alive while the
     * backing store is still being used.
     */
    unwrap(): NativePointer;
}

type NativePointerValue = NativePointer | ObjectWrapper;

declare const NativeFunction: NativeFunctionConstructor;

interface NativeFunctionConstructor {
    new(address: NativePointerValue, retType: NativeType, argTypes: NativeType[], abiOrOptions?: NativeABI | NativeFunctionOptions): NativeFunction;
    readonly prototype: NativeFunction;
}

interface NativeFunction extends NativePointer {
    (...args: NativeArgumentValue[]): NativeReturnValue;
    apply(thisArg: NativePointerValue | null | undefined, args: NativeArgumentValue[]): NativeReturnValue;
    call(thisArg?: NativePointerValue | null, ...args: NativeArgumentValue[]): NativeReturnValue;
}

declare const SystemFunction: SystemFunctionConstructor;

interface SystemFunctionConstructor {
    new(address: NativePointerValue, retType: NativeType, argTypes: NativeType[], abiOrOptions?: NativeABI | NativeFunctionOptions): SystemFunction;
    readonly prototype: SystemFunction;
}

interface SystemFunction extends NativePointer {
    (...args: NativeArgumentValue[]): SystemFunctionResult;
    apply(thisArg: NativePointerValue | null | undefined, args: NativeArgumentValue[]): SystemFunctionResult;
    call(thisArg?: NativePointerValue | null, ...args: NativeArgumentValue[]): SystemFunctionResult;
}

type SystemFunctionResult = WindowsSystemFunctionResult | UnixSystemFunctionResult;

interface WindowsSystemFunctionResult {
    value: NativeReturnValue;
    lastError: number;
}

interface UnixSystemFunctionResult {
    value: NativeReturnValue;
    errno: number;
}

declare class NativeCallback extends NativePointer {
    constructor(func: NativeCallbackImplementation, retType: NativeType, argTypes: NativeType[], abi?: NativeABI);
}

type NativeCallbackImplementation = (this: InvocationContext | undefined, ...params: any[]) => any;

type NativeArgumentValue = NativePointerValue | UInt64 | Int64 | number | boolean | any[];

type NativeReturnValue = NativePointer | UInt64 | Int64 | number | boolean | any[];

type NativeType = string | any[];

type NativeABI =
    | "default"
    | "sysv"
    | "stdcall"
    | "thiscall"
    | "fastcall"
    | "mscdecl"
    | "win64"
    | "unix64"
    | "vfp"
    ;

interface NativeFunctionOptions {
    abi?: NativeABI;
    scheduling?: SchedulingBehavior;
    exceptions?: ExceptionsBehavior;
    traps?: CodeTraps;
}

type SchedulingBehavior = "cooperative" | "exclusive";

type ExceptionsBehavior = "steal" | "propagate";

type CodeTraps = "default" | "all";

type CpuContext = PortableCpuContext | Ia32CpuContext | X64CpuContext | ArmCpuContext | Arm64CpuContext | MipsCpuContext;

interface PortableCpuContext {
    pc: NativePointer;
    sp: NativePointer;
}

interface Ia32CpuContext extends PortableCpuContext {
    eax: NativePointer;
    ecx: NativePointer;
    edx: NativePointer;
    ebx: NativePointer;
    esp: NativePointer;
    ebp: NativePointer;
    esi: NativePointer;
    edi: NativePointer;

    eip: NativePointer;
}

interface X64CpuContext extends PortableCpuContext {
    rax: NativePointer;
    rcx: NativePointer;
    rdx: NativePointer;
    rbx: NativePointer;
    rsp: NativePointer;
    rbp: NativePointer;
    rsi: NativePointer;
    rdi: NativePointer;

    r8: NativePointer;
    r9: NativePointer;
    r10: NativePointer;
    r11: NativePointer;
    r12: NativePointer;
    r13: NativePointer;
    r14: NativePointer;
    r15: NativePointer;

    rip: NativePointer;
}

interface ArmCpuContext extends PortableCpuContext {
    r0: NativePointer;
    r1: NativePointer;
    r2: NativePointer;
    r3: NativePointer;
    r4: NativePointer;
    r5: NativePointer;
    r6: NativePointer;
    r7: NativePointer;

    r8: NativePointer;
    r9: NativePointer;
    r10: NativePointer;
    r11: NativePointer;
    r12: NativePointer;

    lr: NativePointer;
}

interface Arm64CpuContext extends PortableCpuContext {
    x0: NativePointer;
    x1: NativePointer;
    x2: NativePointer;
    x3: NativePointer;
    x4: NativePointer;
    x5: NativePointer;
    x6: NativePointer;
    x7: NativePointer;
    x8: NativePointer;
    x9: NativePointer;
    x10: NativePointer;
    x11: NativePointer;
    x12: NativePointer;
    x13: NativePointer;
    x14: NativePointer;
    x15: NativePointer;
    x16: NativePointer;
    x17: NativePointer;
    x18: NativePointer;
    x19: NativePointer;
    x20: NativePointer;
    x21: NativePointer;
    x22: NativePointer;
    x23: NativePointer;
    x24: NativePointer;
    x25: NativePointer;
    x26: NativePointer;
    x27: NativePointer;
    x28: NativePointer;

    fp: NativePointer;
    lr: NativePointer;
}

interface MipsCpuContext extends PortableCpuContext {
    gp: NativePointer;
    fp: NativePointer;
    ra: NativePointer;

    hi: NativePointer;
    lo: NativePointer;

    at: NativePointer;

    v0: NativePointer;
    v1: NativePointer;

    a0: NativePointer;
    a1: NativePointer;
    a2: NativePointer;
    a3: NativePointer;

    t0: NativePointer;
    t1: NativePointer;
    t2: NativePointer;
    t3: NativePointer;
    t4: NativePointer;
    t5: NativePointer;
    t6: NativePointer;
    t7: NativePointer;
    t8: NativePointer;
    t9: NativePointer;

    s0: NativePointer;
    s1: NativePointer;
    s2: NativePointer;
    s3: NativePointer;
    s4: NativePointer;
    s5: NativePointer;
    s6: NativePointer;
    s7: NativePointer;

    k0: NativePointer;
    k1: NativePointer;
}

/**
 * Helper used internally for source map parsing in order to provide helpful
 * JavaScript stack-traces.
 */
declare class SourceMap {
    /**
     * Constructs a source map from JSON.
     *
     * @param json String containing the source map encoded as JSON.
     */
    constructor(json: string);

    /**
     * Attempts to map a generated source position back to the original.
     *
     * @param generatedPosition Position in generated code.
     */
    resolve(generatedPosition: GeneratedSourcePosition): OriginalSourcePosition | null;
}

interface GeneratedSourcePosition {
    /**
     * Line number.
     */
    line: number;

    /**
     * Column number, if available.
     */
    column?: number;
}

interface OriginalSourcePosition {
    /**
     * Source file name.
     */
    source: string;

    /**
     * Line number.
     */
    line: number;

    /**
     * Column number.
     */
    column: number;

    /**
     * Identifier, if available.
     */
    name: string | null;
}

/**
 * TCP and UNIX sockets.
 */
declare namespace Socket {
    /**
     * Opens a TCP or UNIX listening socket.
     *
     * Defaults to listening on both IPv4 and IPv6, if supported, and binding on all interfaces on a randomly
     * selected port.
     */
    function listen(options?: SocketListenOptions): Promise<SocketListener>;

    /**
     * Connects to a TCP or UNIX server.
     */
    function connect(options: SocketConnectOptions): Promise<SocketConnection>;

    /**
     * Inspects the OS socket `handle` and returns its type, or `null` if invalid or unknown.
     */
    function type(handle: number): SocketType | null;

    /**
     * Inspects the OS socket `handle` and returns its local address, or `null` if invalid or unknown.
     */
    function localAddress(handle: number): SocketEndpointAddress | null;

    /**
     * Inspects the OS socket `handle` and returns its peer address, or `null` if invalid or unknown.
     */
    function peerAddress(handle: number): SocketEndpointAddress | null;
}

/**
 * Listener created by `Socket.listen()`.
 */
type SocketListener = TcpListener | UnixListener;

interface BaseListener {
    /**
     * Closes the listener, releasing resources related to it. Once the listener is closed, all other operations
     * will fail. Closing a listener multiple times is allowed and will not result in an error.
     */
    close(): Promise<void>;

    /**
     * Waits for the next client to connect.
     */
    accept(): Promise<SocketConnection>;
}

interface TcpListener extends BaseListener {
    /**
     * IP port being listened on.
     */
    port: number;
}

interface UnixListener extends BaseListener {
    /**
     * Path being listened on.
     */
    path: string;
}

declare abstract class SocketConnection extends IOStream {
    /**
     * Disables the Nagle algorithm if `noDelay` is `true`, otherwise enables it. The Nagle algorithm is enabled
     * by default, so it is only necessary to call this method if you wish to optimize for low delay instead of
     * high throughput.
     */
    setNoDelay(noDelay: boolean): Promise<void>;
}

declare abstract class IOStream {
    /**
     * The `InputStream` to read from.
     */
    input: InputStream;

    /**
     * The `OutputStream` to write to.
     */
    output: OutputStream;

    /**
     * Closes the stream, releasing resources related to it. This will also close the individual input and output
     * streams. Once the stream is closed, all other operations will fail. Closing a stream multiple times is allowed
     * and will not result in an error.
     */
    close(): Promise<void>;
}

declare abstract class InputStream {
    /**
     * Closes the stream, releasing resources related to it. Once the stream is closed, all other operations will fail.
     * Closing a stream multiple times is allowed and will not result in an error.
     */
    close(): Promise<void>;

    /**
     * Reads up to `size` bytes from the stream. The resulting buffer is up to `size` bytes long. End of stream is
     * signalled through an empty buffer.
     */
    read(size: number): Promise<ArrayBuffer>;

    /**
     * Keeps reading from the stream until exactly `size` bytes have been consumed. The resulting buffer is exactly
     * `size` bytes long. Premature error or end of stream results in an `Error` object with a `partialData` property
     * containing the incomplete data.
     */
    readAll(size: number): Promise<ArrayBuffer>;
}

declare abstract class OutputStream {
    /**
     * Closes the stream, releasing resources related to it. Once the stream is closed, all other operations will fail.
     * Closing a stream multiple times is allowed and will not result in an error.
     */
    close(): Promise<void>;

    /**
     * Tries to write `data` to the stream. Returns how many bytes of `data` were written to the stream.
     */
    write(data: ArrayBuffer | number[]): Promise<number>;

    /**
     * Keeps writing to the stream until all of `data` has been written. Premature error or end of stream results in an
     * `Error` object with a `partialSize` property specifying how many bytes of `data` were written to the stream
     * before the error occurred.
     */
    writeAll(data: ArrayBuffer | number[]): Promise<void>;

    /**
     * Tries to write `size` bytes to the stream, reading them from `address`. Returns how many bytes were written
     * to the stream. Premature error or end of stream results in an `Error` object with a `partialSize` property
     * specifying how many bytes of `data` were written to the stream before the error occurred.
     */
    writeMemoryRegion(address: NativePointerValue, size: number): Promise<number>;
}

/**
 * Input stream backed by a file descriptor.
 *
 * Only available on UNIX-like OSes.
 */
declare class UnixInputStream extends InputStream {
    /**
     * Creates a new input stream from the specified file descriptor `fd`.
     *
     * @param fd File descriptor to read from.
     * @param options Options to customize the stream.
     */
    constructor(fd: number, options?: UnixStreamOptions);
}

/**
 * Output stream backed by a file descriptor.
 *
 * Only available on UNIX-like OSes.
 */
declare class UnixOutputStream extends OutputStream {
    /**
     * Creates a new output stream from the specified file descriptor `fd`.
     *
     * @param fd File descriptor to write to.
     * @param options Options to customize the stream.
     */
    constructor(fd: number, options?: UnixStreamOptions);
}

/**
 * Input stream backed by a Windows file handle.
 *
 * Only available on Windows.
 */
declare class Win32InputStream extends InputStream {
    /**
     * Creates a new input stream from the specified Windows file handle.
     *
     * @param handle Windows file `HANDLE` to read from.
     * @param options Options to customize the stream.
     */
    constructor(handle: NativePointerValue, options?: WindowsStreamOptions);
}

/**
 * Output stream backed by a Windows file handle.
 *
 * Only available on Windows.
 */
declare class Win32OutputStream extends OutputStream {
    /**
     * Creates a new output stream from the specified Windows file handle.
     *
     * @param handle Windows file `HANDLE` to write to.
     * @param options Options to customize the stream.
     */
    constructor(handle: NativePointerValue, options?: WindowsStreamOptions);
}

interface UnixStreamOptions {
    /**
     * Whether the file descriptor should be closed when the stream is closed,
     * either through `close()` or future garbage-collection.
     */
    autoClose?: boolean;
}

interface WindowsStreamOptions {
    /**
     * Whether the Windows `HANDLE` should be closed when the stream is closed,
     * either through `close()` or future garbage-collection.
     */
    autoClose?: boolean;
}

type AddressFamily =
    | "unix"
    | "ipv4"
    | "ipv6"
    ;

type SocketType =
    | "tcp"
    | "udp"
    | "tcp6"
    | "udp6"
    | "unix:stream"
    | "unix:dgram"
    ;

type UnixSocketType =
    | "anonymous"
    | "path"
    | "abstract"
    | "abstract-padded"
    ;

type SocketListenOptions = TcpListenOptions | UnixListenOptions;

interface TcpListenOptions extends BaseListenOptions {
    /**
     * Address family. Omit to listen on both ipv4 and ipv6 – if supported by the OS.
     */
    family?: "ipv4" | "ipv6";

    /**
     * Host or IP address to listen on. Omit to listen on all interfaces.
     */
    host?: string;

    /**
     * Port to listen on. Omit to listen on a randomly selected port.
     */
    port?: number;
}

interface UnixListenOptions extends BaseListenOptions {
    /**
     * Address family.
     */
    family: "unix";

    /**
     * Type of UNIX socket to listen on. Defaults to UnixSocketType.Path.
     */
    type?: UnixSocketType;

    /**
     * UNIX socket path to listen on.
     */
    path: string;
}

interface BaseListenOptions {
    /**
     * Listen backlog. Defaults to 10.
     */
    backlog?: number;
}

type SocketConnectOptions = TcpConnectOptions | UnixConnectOptions;

interface TcpConnectOptions {
    /**
     * Address family. Omit to determine based on the host specified.
     */
    family?: "ipv4" | "ipv6";

    /**
     * Host or IP address to connect to. Defaults to `localhost`.
     */
    host?: string;

    /**
     * IP port to connect to.
     */
    port: number;

    /**
     * Whether to create a TLS connection. Defaults to `false`.
     */
    tls?: boolean;
}

interface UnixConnectOptions {
    /**
     * Address family.
     */
    family: "unix";

    /**
     * Type of UNIX socket to connect to. Defaults to UnixSocketType.Path.
     */
    type?: UnixSocketType;

    /**
     * Path to UNIX socket to connect to.
     */
    path: string;

    /**
     * Whether to create a TLS connection. Defaults to `false`.
     */
    tls?: boolean;
}

type SocketEndpointAddress = TcpEndpointAddress | UnixEndpointAddress;

interface TcpEndpointAddress {
    /**
     * IP address.
     */
    ip: string;

    /**
     * Port.
     */
    port: number;
}

interface UnixEndpointAddress {
    /**
     * UNIX socket path.
     */
    path: string;
}

/**
 * Provides basic filesystem access.
 */
declare class File {
    /**
     * Opens or creates the file at `filePath` with `mode` specifying how
     * it should be opened. For example `"wb"` to open the file for writing
     * in binary mode. This is the same format as `fopen()` from the C
     * standard library.
     *
     * @param filePath Path to file to open or create.
     * @param mode Mode to use.
     */
    constructor(filePath: string, mode: string);

    /**
     * Synchronously writes `data` to the file.
     *
     * @param data Data to write.
     */
    write(data: string | ArrayBuffer): void;

    /**
     * Flushes any buffered data to the underlying file.
     */
    flush(): void;

    /**
     * Closes the file. You should call this function when you’re done with
     * the file unless you are fine with this happening when the object is
     * garbage-collected or the script is unloaded.
     */
    close(): void;
}

/**
 * Provides read/write access to a SQLite database. Useful for persistence
 * and to embed a cache in an agent.
 */
declare class SqliteDatabase {
    /**
     * Opens the SQLite v3 database at `path` on the filesystem. The database
     * will by default be opened read-write, and the returned `SqliteDatabase`
     * object will allow you to perform queries on it. Throws an exception if
     * the database cannot be opened.
     *
     * @param path Filesystem path to database.
     * @param options Options to customize how the database should be opened.
     */
    static open(path: string, options?: SqliteOpenOptions): SqliteDatabase;

    /**
     * Just like `open()` but the contents of the database is provided as a
     * string containing its data, Base64-encoded. We recommend gzipping the
     * database before Base64-encoding it, but this is optional and detected
     * by looking for a gzip magic marker. The database is opened read-write,
     * but is 100% in-memory and never touches the filesystem. Throws an
     * exception if the database is malformed.
     *
     * This is useful for agents that need to bundle a cache of precomputed
     * data, e.g. static analysis data used to guide dynamic analysis.
     *
     * @param encodedContents Base64-encoded database contents.
     */
    static openInline(encodedContents: string): SqliteDatabase;

    /**
     * Closes the database. You should call this function when you're done with
     * the database, unless you are fine with this happening when the object is
     * garbage-collected or the script is unloaded.
     */
    close(): void;

    /**
     * Executes a raw SQL query. Throws an exception if the query is invalid.
     *
     * The query's result is ignored, so this should only be used for queries
     * for setting up the database, e.g. table creation.
     *
     * @param sql Text-representation of the SQL query.
     */
    exec(sql: string): void;

    /**
     * Compiles the provided SQL into a `SqliteStatement` object. Throws an
     * exception if the query is invalid.
     *
     * @param sql Text-representation of the SQL query.
     */
    prepare(sql: string): SqliteStatement;

    /**
     * Dumps the database to a gzip-compressed blob encoded as Base64.
     *
     * This is useful for inlining a cache in your agent's code, loaded by
     * calling `SqliteDatabase.openInline()`.
     */
    dump(): string;
}

interface SqliteOpenOptions {
    flags?: SqliteOpenFlag[];
}

type SqliteOpenFlag =
    | "readonly"
    | "readwrite"
    | "create"
    ;

/**
 * Pre-compiled SQL statement.
 */
declare class SqliteStatement {
    /**
     * Binds the integer `value` to `index`.
     *
     * @param index 1-based index.
     * @param value Integer value to bind.
     */
    bindInteger(index: number, value: number): void;

    /**
     * Binds the floating point `value` to `index`.
     *
     * @param index 1-based index.
     * @param value Floating point value to bind.
     */
    bindFloat(index: number, value: number): void;

    /**
     * Binds the text `value` to `index`.
     * @param index 1-based index.
     * @param value Text value to bind.
     */
    bindText(index: number, value: string): void;

    /**
     * Binds the blob `bytes` to `index`.
     *
     * @param index 1-based index.
     * @param bytes Blob value to bind.
     */
    bindBlob(index: number, bytes: ArrayBuffer | number[] | string): void;

    /**
     * Binds a `null` value to `index`.
     *
     * @param index 1-based index.
     */
    bindNull(index: number): void;

    /**
     * Either starts a new query and gets the first result, or moves to the
     * next one.
     *
     * Returns an array containing the values in the order specified by the
     * query, or `null` when the last result is reached. You should call
     * `reset()` at that point if you intend to use this object again.
     */
    step(): any[] | null;

    /**
     * Resets internal state to allow subsequent queries.
     */
    reset(): void;
}

/**
 * Intercepts execution through inline hooking.
 */
declare namespace Interceptor {
    /**
     * Intercepts calls to function/instruction at `target`. It is important
     * to specify a `InstructionProbeCallback` if `target` is not the first
     * instruction of a function.
     *
     * @param target Address of function/instruction to intercept.
     * @param callbacksOrProbe Callbacks or instruction-level probe callback.
     * @param data User data exposed to `NativeInvocationListenerCallbacks`
     *             through the `GumInvocationContext *`.
     */
    function attach(target: NativePointerValue, callbacksOrProbe: InvocationListenerCallbacks | InstructionProbeCallback,
        data?: NativePointerValue): InvocationListener;

    /**
     * Detaches all previously attached listeners.
     */
    function detachAll(): void;

    /**
     * Replaces function at `target` with implementation at `replacement`.
     *
     * May be implemented using e.g. `NativeCallback` or `CModule`.
     *
     * @param target Address of function to replace.
     * @param replacement Replacement implementation.
     * @param data User data exposed to native replacement through the
     *             `GumInvocationContext *`, obtained using
     *             `gum_interceptor_get_current_invocation()`.
     */
    function replace(target: NativePointerValue, replacement: NativePointerValue,
        data?: NativePointerValue): void;

    /**
     * Reverts the previously replaced function at `target`.
     */
    function revert(target: NativePointerValue): void;

    /**
     * Ensure any pending changes have been committed to memory.
     */
    function flush(): void;
}

declare class InvocationListener {
    /**
     * Detaches listener previously attached through `Interceptor#attach()`.
     */
    detach(): void;
}

/**
 * Callbacks to invoke synchronously before and after a function call.
 */
type InvocationListenerCallbacks = ScriptInvocationListenerCallbacks | NativeInvocationListenerCallbacks;

interface ScriptInvocationListenerCallbacks {
    /**
     * Called synchronously when a thread is about to enter the target function.
     */
    onEnter?: (this: InvocationContext, args: InvocationArguments) => void;

    /**
     * Called synchronously when a thread is about to leave the target function.
     */
    onLeave?: (this: InvocationContext, retval: InvocationReturnValue) => void;
}

interface NativeInvocationListenerCallbacks {
    /**
     * Called synchronously when a thread is about to enter the target function.
     *
     * Typically implemented using `CModule`.
     *
     * Signature: `void onEnter (GumInvocationContext * ic)`
     */
    onEnter?: NativePointer;

    /**
     * Called synchronously when a thread is about to leave the target function.
     *
     * Typically implemented using `CModule`.
     *
     * Signature: `void onLeave (GumInvocationContext * ic)`
     */
    onLeave?: NativePointer;
}

/**
 * Callback to invoke when an instruction is about to be executed.
 */
type InstructionProbeCallback = (this: InvocationContext, args: InvocationArguments) => void;

/**
 * Virtual array providing access to the argument list. Agnostic to the number of arguments and their types.
 */
type InvocationArguments = NativePointer[];

/**
 * Value that is about to be returned.
 */
declare class InvocationReturnValue extends NativePointer {
    /**
     * Replaces the return value that would otherwise be returned.
     */
    replace(value: NativePointerValue): void;
}

type InvocationContext = PortableInvocationContext | WindowsInvocationContext | UnixInvocationContext;

interface PortableInvocationContext {
    /**
     * Return address.
     */
    returnAddress: NativePointer;

    /**
     * CPU registers. You may also update register values by assigning to these keys.
     */
    context: CpuContext;

    /**
     * OS thread ID.
     */
    threadId: ThreadId;

    /**
     * Call depth of relative to other invocations.
     */
    depth: number;

    /**
     * User-defined invocation data. Useful if you want to read an argument in `onEnter` and act on it in `onLeave`.
     */
    [x: string]: any;
}

interface WindowsInvocationContext extends PortableInvocationContext {
    /**
     * Current OS error value (you may replace it).
     */
    lastError: number;
}

interface UnixInvocationContext extends PortableInvocationContext {
    /**
     * Current errno value (you may replace it).
     */
    errno: number;
}

/**
 * Follows execution on a per thread basis.
 */
declare namespace Stalker {
    /**
     * Marks a memory range as excluded. This means Stalker will not follow
     * execution when encountering a call to an instruction in such a range.
     * You will thus be able to observe/modify the arguments going in, and
     * the return value coming back, but won't see the instructions that
     * happened between.
     *
     * Useful to improve performance and reduce noise.
     *
     * @param range Range to exclude.
     */
    function exclude(range: MemoryRange): void;

    /**
     * Starts following the execution of a given thread.
     *
     * @param threadId Thread ID to start following the execution of, or the
     *                 current thread if omitted.
     * @param options Options to customize the instrumentation.
     */
    function follow(threadId?: ThreadId, options?: StalkerOptions): void;

    /**
     * Stops following the execution of a given thread.
     *
     * @param threadId Thread ID to stop following the execution of, or the
     *                 current thread if omitted.
     */
    function unfollow(threadId?: ThreadId): void;

    /**
     * Parses a binary blob comprised of `Gum.Event` values.
     *
     * @param events Binary blob containing zero or more `Gum.Event` values.
     * @param options Options for customizing the output.
     */
    function parse(events: ArrayBuffer, options?: StalkerParseOptions): StalkerEventFull[] | StalkerEventBare[];

    /**
     * Flushes out any buffered events. Useful when you don't want to wait
     * until the next `queueDrainInterval` tick.
     */
    function flush(): void;

    /**
     * Frees accumulated memory at a safe point after `unfollow()`. This is
     * needed to avoid race-conditions where the thread just unfollowed is
     * executing its last instructions.
     */
    function garbageCollect(): void;

    /**
     * Calls `callback` synchronously when a call is made to `address`.
     * Returns an id that can be passed to `removeCallProbe()` later.
     *
     * @param address Address of function to monitor stalked calls to.
     * @param callback Function to be called synchronously when a stalked
     *                 thread is about to call the function at `address`.
     * @param data User data to be passed to `StalkerNativeCallProbeCallback`.
     */
    function addCallProbe(address: NativePointerValue, callback: StalkerCallProbeCallback,
        data?: NativePointerValue): StalkerCallProbeId;

    /**
     * Removes a call probe added by `addCallProbe()`.
     *
     * @param callbackId ID of probe to remove.
     */
    function removeCallProbe(callbackId: StalkerCallProbeId): void;

    /**
     * How many times a piece of code needs to be executed before it is assumed
     * it can be trusted to not mutate. Specify -1 for no trust (slow), 0 to
     * trust code from the get-go, and N to trust code after it has been
     * executed N times.
     *
     * Defaults to 1.
     */
    let trustThreshold: number;

    /**
     * Capacity of the event queue in number of events.
     *
     * Defaults to 16384 events.
     */
    let queueCapacity: number;

    /**
     * Time in milliseconds between each time the event queue is drained.
     *
     * Defaults to 250 ms, which means that the event queue is drained four
     * times per second. You may also set this property to zero to disable
     * periodic draining and instead call `Stalker.flush()` when you would
     * like the queue to be drained.
     */
    let queueDrainInterval: number;
}

/**
 * Options to customize Stalker's instrumentation.
 *
 * Note that the callbacks provided have a significant impact on performance.
 * If you only need periodic call summaries but do not care about the raw
 * events, or the other way around, make sure you omit the callback that you
 * don't need; i.e. avoid putting your logic in `onCallSummary` and leaving
 * `onReceive` in there as an empty callback.
 */
interface StalkerOptions {
    /**
     * Which events, if any, should be generated and periodically delivered to
     * `onReceive()` and/or `onCallSummary()`.
     */
    events?: {
        /**
         * Whether to generate events for CALL/BLR instructions.
         */
        call?: boolean;

        /**
         * Whether to generate events for RET instructions.
         */
        ret?: boolean;

        /**
         * Whether to generate events for all instructions.
         *
         * Not recommended as it's potentially a lot of data.
         */
        exec?: boolean;

        /**
         * Whether to generate an event whenever a basic block is executed.
         *
         * Useful to record a coarse execution trace.
         */
        block?: boolean;

        /**
         * Whether to generate an event whenever a basic block is compiled.
         *
         * Useful for coverage.
         */
        compile?: boolean;
    };

    /**
     * Callback that periodically receives batches of events.
     *
     * @param events Binary blob comprised of one or more `Gum.Event` structs.
     *               See `gumevent.h` for details about the format.
     *               Use `Stalker.parse()` to examine the data.
     */
    onReceive?: (events: ArrayBuffer) => void;

    /**
     * Callback that periodically receives a summary of `call` events that
     * happened in each time window.
     *
     * You would typically implement this instead of `onReceive()` for
     * efficiency, i.e. when you only want to know which targets were called
     * and how many times, but don't care about the order that the calls
     * happened in.
     *
     * @param summary Key-value mapping of call target to number of calls, in
     *                the current time window.
     */
    onCallSummary?: (summary: StalkerCallSummary) => void;

    /**
     * C callback that processes events as they occur, allowing synchronous
     * processing of events in native code – typically implemented using
     * CModule.
     *
     * This is useful when wanting to implement custom filtering and/or queuing
     * logic to improve performance, or sacrifice performance in exchange for
     * reliable event delivery.
     *
     * Note that this precludes usage of `onReceive()` and `onCallSummary()`.
     */
    onEvent?: StalkerNativeEventCallback;

    /**
     * Callback that transforms each basic block compiled whenever Stalker
     * wants to recompile a basic block of the code that's about to be executed
     * by the stalked thread.
     */
    transform?: StalkerTransformCallback;

    /**
     * User data to be passed to `StalkerNativeEventCallback` and `StalkerNativeTransformCallback`.
     */
    data?: NativePointerValue;
}

interface StalkerParseOptions {
    /**
     * Whether to include the type of each event. Defaults to `true`.
     */
    annotate?: boolean;

    /**
     * Whether to format pointer values as strings instead of `NativePointer`
     * values, i.e. less overhead if you're just going to `send()` the result
     * and not actually parse the data agent-side.
     */
    stringify?: boolean;
}

interface StalkerCallSummary {
    [target: string]: number;
}

type StalkerCallProbeCallback = StalkerScriptCallProbeCallback | StalkerNativeCallProbeCallback;

/**
 * Called synchronously when a call is made to the given address.
 */
type StalkerScriptCallProbeCallback = (args: InvocationArguments) => void;

/**
 * Called synchronously when a call is made to the given address.
 *
 * Signature: `void onCall (GumCallSite * site, gpointer user_data)`
 */
type StalkerNativeCallProbeCallback = NativePointer;

type StalkerCallProbeId = number;

type StalkerEventType =
    | "call"
    | "ret"
    | "exec"
    | "block"
    | "compile"
    ;

type StalkerEventFull = StalkerCallEventFull | StalkerRetEventFull | StalkerExecEventFull |
    StalkerBlockEventFull | StalkerCompileEventFull;
type StalkerEventBare = StalkerCallEventBare | StalkerRetEventBare | StalkerExecEventBare |
    StalkerBlockEventBare | StalkerCompileEventBare;

type StalkerCallEventFull = [ "call", NativePointer | string, NativePointer | string, number ];
type StalkerCallEventBare = [         NativePointer | string, NativePointer | string, number ];

type StalkerRetEventFull = [ "ret", NativePointer | string, NativePointer | string, number ];
type StalkerRetEventBare = [        NativePointer | string, NativePointer | string, number ];

type StalkerExecEventFull = [ "exec", NativePointer | string ];
type StalkerExecEventBare = [         NativePointer | string ];

type StalkerBlockEventFull = [ "block", NativePointer | string, NativePointer | string ];
type StalkerBlockEventBare = [          NativePointer | string, NativePointer | string ];

type StalkerCompileEventFull = [ "compile", NativePointer | string, NativePointer | string ];
type StalkerCompileEventBare = [            NativePointer | string, NativePointer | string ];

/**
 * Signature: `void process (const GumEvent * event, GumCpuContext * cpu_context, gpointer user_data)`
 */
type StalkerNativeEventCallback = NativePointer;

type StalkerTransformCallback =
    | StalkerX86TransformCallback
    | StalkerArm32TransformCallback
    | StalkerArm64TransformCallback
    | StalkerNativeTransformCallback
    ;

type StalkerX86TransformCallback = (iterator: StalkerX86Iterator) => void;
type StalkerArm32TransformCallback = (iterator: StalkerArmIterator | StalkerThumbIterator) => void;
type StalkerArm64TransformCallback = (iterator: StalkerArm64Iterator) => void;

/**
 * Signature: `void transform (GumStalkerIterator * iterator, GumStalkerOutput * output, gpointer user_data)`
 */
type StalkerNativeTransformCallback = NativePointer;

interface StalkerX86Iterator extends X86Writer {
    next(): X86Instruction | null;
    keep(): void;
    putCallout(callout: StalkerCallout, data?: NativePointerValue): void;
}

interface StalkerArmIterator extends ArmWriter {
    next(): ArmInstruction | null;
    keep(): void;
    putCallout(callout: StalkerCallout, data?: NativePointerValue): void;
}

interface StalkerThumbIterator extends ThumbWriter {
    next(): ArmInstruction | null;
    keep(): void;
    putCallout(callout: StalkerCallout, data?: NativePointerValue): void;
}

interface StalkerArm64Iterator extends Arm64Writer {
    next(): Arm64Instruction | null;
    keep(): void;
    putCallout(callout: StalkerCallout, data?: NativePointerValue): void;
}

type StalkerCallout = StalkerScriptCallout | StalkerNativeCallout;

type StalkerScriptCallout = (context: CpuContext) => void;

/**
 * Signature: `void onAesEnc (GumCpuContext * cpu_context, gpointer user_data)`
 */
type StalkerNativeCallout = NativePointer;

/**
 * Provides efficient API resolving using globs, allowing you to quickly
 * find functions by name, with globs permitted.
 */
declare class ApiResolver {
    /**
     * Creates a new resolver of the given `type`.
     *
     * Precisely which resolvers are available depends on the current
     * platform and runtimes loaded in the current process.
     *
     * The resolver will load the minimum amount of data required on creation,
     * and lazy-load the rest depending on the queries it receives. It is thus
     * recommended to use the same instance for a batch of queries, but
     * recreate it for future batches to avoid looking at stale data.
     *
     * @param type The type of resolver to create.
     */
    constructor(type: ApiResolverType);

    /**
     * Performs the resolver-specific query.
     *
     * @param query Resolver-specific query, optionally suffixed with `/i` to
     *              perform case-insensitive matching.
     */
    enumerateMatches(query: string): ApiResolverMatch[];
}

interface ApiResolverMatch {
    /**
     * Canonical name of the function that was found.
     */
    name: string;

    /**
     * Memory address that the given function is loaded at.
     */
    address: NativePointer;
}

type ApiResolverType =
    /**
     * Resolves exported and imported functions of shared libraries
     * currently loaded.
     *
     * Always available.
     *
     * Example query: `"exports:*!open*"`
     * Which may resolve to: `"/usr/lib/libSystem.B.dylib!opendir$INODE64"`
     * Suffix with `/i` to perform case-insensitive matching.
     */
    | "module"

    /**
     * Resolves Objective-C methods of classes currently loaded.
     *
     * Available on macOS and iOS in processes that have the Objective-C
     * runtime loaded. Use `ObjC.available` to check at runtime, or wrap
     * your `new ApiResolver(ApiResolverType.ObjC)` call in a try-catch.
     *
     * Example query: `"-[NSURL* *HTTP*]"`
     * Which may resolve to: `"-[NSURLRequest valueForHTTPHeaderField:]"`
     * Suffix with `/i` to perform case-insensitive matching.
     */
    | "objc"
    ;

declare class DebugSymbol {
    /**
     * Address that this symbol is for.
     */
    address: NativePointer;

    /**
     * Name of the symbol, or `null` if unknown.
     */
    name: string | null;

    /**
     * Module name owning this symbol, or `null` if unknown.
     */
    moduleName: string | null;

    /**
     * File name owning this symbol, or `null` if unknown.
     */
    fileName: string | null;

    /**
     * Line number in `fileName`, or `null` if unknown.
     */
    lineNumber: number | null;

    /**
     * Looks up debug information for `address`.
     *
     * @param address Address to look up details for.
     */
    static fromAddress(address: NativePointerValue): DebugSymbol;

    /**
     * Looks up debug information for `name`.
     *
     * @param name Name to look up details for.
     */
    static fromName(name: string): DebugSymbol;

    /**
     * Resolves a function name and returns its address. Returns the first if
     * more than one function is found. Throws an exception if the name cannot
     * be resolved.
     *
     * @param name Function name to resolve the address of.
     */
    static getFunctionByName(name: string): NativePointer;

    /**
     * Resolves a function name and returns its addresses.
     *
     * @param name Function name to resolve the addresses of.
     */
    static findFunctionsNamed(name: string): NativePointer[];

    /**
     * Resolves function names matching `glob` and returns their addresses.
     *
     * @param glob Glob matching functions to resolve the addresses of.
     */
    static findFunctionsMatching(glob: string): NativePointer[];

    /**
     * Loads debug symbols for a specific module.
     *
     * @param path Path of module to load symbols for.
     */
    static load(path: string): void;

    /**
     * Converts to a human-readable string.
     */
    toString(): string;
}

/**
 * Compiles C source code to machine code, straight to memory.
 *
 * Useful for implementing hot callbacks, e.g. for `Interceptor` and `Stalker`,
 * but also useful when needing to start new threads in order to call functions
 * in a tight loop, e.g. for fuzzing purposes.
 *
 * Global functions are automatically exported as `NativePointer` properties
 * named exactly like in the C source code. This means you can pass them to
 * `Interceptor` and `Stalker`, or call them using `NativeFunction`.
 *
 * Symbols can also be plugged in at creation, e.g. memory allocated using
 * `Memory.alloc()`, or `NativeCallback` for receiving callbacks from the C
 * module.
 *
 * To perform initialization and cleanup, you may define functions with the
 * following names and signatures:
 *
 *     `void init (void)`
 *     `void finalize (void)`
 *
 * Note that all data is read-only, so writable globals should be declared
 * `extern`, allocated using e.g. `Memory.alloc()`, and passed in as symbols
 * through the constructor's second argument.
 */
declare class CModule {
  /**
   * Creates a new C module by compiling the provided C source code to machine
   * code, straight to memory.
   *
   * @param source C source code to compile.
   * @param symbols Symbols to expose to the C module. Declare them as `extern`.
   */
  constructor(source: string, symbols?: CSymbols);

  /**
   * Eagerly unmaps the module from memory. Useful for short-lived modules
   * when waiting for a future garbage collection isn't desirable.
   */
  dispose(): void;

  readonly [name: string]: any;
}

interface CSymbols {
    [name: string]: NativePointerValue;
}

declare class Instruction {
    /**
     * Parses the instruction at the `target` address in memory.
     *
     * Note that on 32-bit ARM this address must have its least significant bit
     * set to 0 for ARM functions, and 1 for Thumb functions. Frida takes care
     * of this detail for you if you get the address from a Frida API, for
     * example `Module.getExportByName()`.
     *
     * @param target Memory location containing instruction to parse.
     */
    static parse(target: NativePointerValue): Instruction | X86Instruction | ArmInstruction | Arm64Instruction | MipsInstruction;

    /**
     * Address (EIP) of this instruction.
     */
    address: NativePointer;

    /**
     * Pointer to the next instruction, so you can `parse()` it.
     */
    next: NativePointer;

    /**
     * Size of this instruction.
     */
    size: number;

    /**
     * Instruction mnemonic.
     */
    mnemonic: string;

    /**
     * String representation of instruction operands.
     */
    opStr: string;

    /**
     * Group names that this instruction belongs to.
     */
    groups: string[];

    /**
     * Converts to a human-readable string.
     */
    toString(): string;
}

declare class X86Instruction extends Instruction {
    /**
     * Array of objects describing each operand.
     */
    operands: X86Operand[];

    /**
     * Registers implicitly read by this instruction.
     */
    regsRead: X86Register[];

    /**
     * Registers implicitly written to by this instruction.
     */
    regsWritten: X86Register[];
}

declare class ArmInstruction extends Instruction {
    /**
     * Array of objects describing each operand.
     */
    operands: ArmOperand[];

    /**
     * Registers implicitly read by this instruction.
     */
    regsRead: ArmRegister[];

    /**
     * Registers implicitly written to by this instruction.
     */
    regsWritten: ArmRegister[];
}

declare class Arm64Instruction extends Instruction {
    /**
     * Array of objects describing each operand.
     */
    operands: Arm64Operand[];

    /**
     * Registers implicitly read by this instruction.
     */
    regsRead: Arm64Register[];

    /**
     * Registers implicitly written to by this instruction.
     */
    regsWritten: Arm64Register[];
}

declare class MipsInstruction extends Instruction {
    /**
     * Array of objects describing each operand.
     */
    operands: MipsOperand[];

    /**
     * Registers implicitly read by this instruction.
     */
    regsRead: MipsRegister[];

    /**
     * Registers implicitly written to by this instruction.
     */
    regsWritten: MipsRegister[];
}

type X86Operand = X86RegOperand | X86ImmOperand | X86MemOperand;

type X86OperandType = "reg" | "imm" | "mem";

interface X86BaseOperand {
    size: number;
}

interface X86RegOperand extends X86BaseOperand {
    type: "reg";
    value: X86Register;
}

interface X86ImmOperand extends X86BaseOperand {
    type: "imm";
    value: number | Int64;
}

interface X86MemOperand extends X86BaseOperand {
    type: "mem";
    value: {
        segment?: X86Register;
        base?: X86Register;
        index?: X86Register;
        scale: number;
        disp: number;
    };
}

type ArmOperand = ArmRegOperand | ArmImmOperand | ArmMemOperand |
    ArmFpOperand | ArmCimmOperand | ArmPimmOperand | ArmSetendOperand |
    ArmSysregOperand;

type ArmOperandType =
    | "reg"
    | "imm"
    | "mem"
    | "fp"
    | "cimm"
    | "pimm"
    | "setend"
    | "sysreg"
    ;

interface ArmBaseOperand {
    shift?: {
        type: ArmShifter;
        value: number;
    };
    vectorIndex?: number;
    subtracted: boolean;
}

interface ArmRegOperand extends ArmBaseOperand {
    type: "reg";
    value: ArmRegister;
}

interface ArmImmOperand extends ArmBaseOperand {
    type: "imm";
    value: number;
}

interface ArmMemOperand extends ArmBaseOperand {
    type: "mem";
    value: {
        base?: ArmRegister;
        index?: ArmRegister;
        scale: number;
        disp: number;
    };
}

interface ArmFpOperand extends ArmBaseOperand {
    type: "fp";
    value: number;
}

interface ArmCimmOperand extends ArmBaseOperand {
    type: "cimm";
    value: number;
}

interface ArmPimmOperand extends ArmBaseOperand {
    type: "pimm";
    value: number;
}

interface ArmSetendOperand extends ArmBaseOperand {
    type: "setend";
    value: Endian;
}

interface ArmSysregOperand extends ArmBaseOperand {
    type: "sysreg";
    value: ArmRegister;
}

type Arm64Operand = Arm64RegOperand | Arm64ImmOperand | Arm64MemOperand |
    Arm64FpOperand | Arm64CimmOperand | Arm64RegMrsOperand | Arm64RegMsrOperand |
    Arm64PstateOperand | Arm64SysOperand | Arm64PrefetchOperand | Arm64BarrierOperand;

type Arm64OperandType =
    | "reg"
    | "imm"
    | "mem"
    | "fp"
    | "cimm"
    | "reg-mrs"
    | "reg-msr"
    | "pstate"
    | "sys"
    | "prefetch"
    | "barrier"
    ;

interface Arm64BaseOperand {
    shift?: {
        type: Arm64Shifter;
        value: number;
    };
    ext?: Arm64Extender;
    vas?: Arm64Vas;
    vectorIndex?: number;
}

interface Arm64RegOperand extends Arm64BaseOperand {
    type: "reg";
    value: Arm64Register;
}

interface Arm64ImmOperand extends Arm64BaseOperand {
    type: "imm";
    value: Int64;
}

interface Arm64MemOperand extends Arm64BaseOperand {
    type: "mem";
    value: {
        base?: Arm64Register;
        index?: Arm64Register;
        disp: number;
    };
}

interface Arm64FpOperand extends Arm64BaseOperand {
    type: "fp";
    value: number;
}

interface Arm64CimmOperand extends Arm64BaseOperand {
    type: "cimm";
    value: Int64;
}

interface Arm64RegMrsOperand extends Arm64BaseOperand {
    type: "reg-mrs";
    value: Arm64Register;
}

interface Arm64RegMsrOperand extends Arm64BaseOperand {
    type: "reg-msr";
    value: Arm64Register;
}

interface Arm64PstateOperand extends Arm64BaseOperand {
    type: "pstate";
    value: number;
}

interface Arm64SysOperand extends Arm64BaseOperand {
    type: "sys";
    value: number;
}

interface Arm64PrefetchOperand extends Arm64BaseOperand {
    type: "prefetch";
    value: number;
}

interface Arm64BarrierOperand extends Arm64BaseOperand {
    type: "barrier";
    value: number;
}

type Arm64Shifter =
    | "lsl"
    | "msl"
    | "lsr"
    | "asr"
    | "ror"
    ;

type Arm64Extender =
    | "uxtb"
    | "uxth"
    | "uxtw"
    | "uxtx"
    | "sxtb"
    | "sxth"
    | "sxtw"
    | "sxtx"
    ;

type Arm64Vas =
    | "8b"
    | "16b"
    | "4h"
    | "8h"
    | "2s"
    | "4s"
    | "1d"
    | "2d"
    | "1q"
    ;

type MipsOperand = MipsRegOperand | MipsImmOperand | MipsMemOperand;

type MipsOperandType = "reg" | "imm" | "mem";

interface MipsRegOperand {
    type: "reg";
    value: MipsRegister;
}

interface MipsImmOperand {
    type: "imm";
    value: number;
}

interface MipsMemOperand {
    type: "mem";
    value: {
        base?: MipsRegister;
        disp: number;
    };
}

type Endian = "be" | "le";

declare namespace Kernel {
    /**
     * Whether the Kernel API is available.
     */
    const available: boolean;

    /**
     * Base address of the kernel. Can be overridden with any non-zero UInt64.
     */
    let base: UInt64;

    /**
     * Size of kernel page in bytes.
     */
    const pageSize: number;

    /**
     * Enumerates kernel modules loaded right now.
     */
    function enumerateModules(): KernelModuleDetails[];

    /**
     * Enumerates all kernel memory ranges matching `specifier`.
     *
     * @param specifier The kind of ranges to include.
     */
    function enumerateRanges(specifier: PageProtection | EnumerateRangesSpecifier): KernelRangeDetails[];

    /**
     * Enumerates all ranges of a kernel module.
     *
     * @param name Name of the module, or `null` for the module of the kernel itself.
     * @param protection Include ranges with at least this protection.
     */
    function enumerateModuleRanges(name: string | null, protection: PageProtection): KernelModuleRangeDetails[];

    /**
     * Allocates kernel memory.
     *
     * @param size Size of the allocation in bytes (will be rounded up to a multiple of the kernel's page size).
     */
    function alloc(size: number | UInt64): UInt64;

    /**
     * Changes the page protection on a region of kernel memory.
     *
     * @param address Starting address.
     * @param size Number of bytes. Must be a multiple of Process#pageSize.
     * @param protection Desired page protection.
     */
    function protect(address: UInt64, size: number | UInt64, protection: PageProtection): boolean;

    /**
     * Scans kernel memory for occurences of `pattern` in the memory range given by `address` and `size`.
     *
     * @param address Starting address to scan from.
     * @param size Number of bytes to scan.
     * @param pattern Match pattern of the form “13 37 ?? ff” to match 0x13 followed by 0x37 followed by any byte
     *                followed by 0xff. For more advanced matching it is also possible to specify an r2-style mask.
     *                The mask is bitwise AND-ed against both the needle and the haystack. To specify the mask append
     *                a `:` character after the needle, followed by the mask using the same syntax.
     *                For example: “13 37 13 37 : 1f ff ff f1”.
     *                For convenience it is also possible to specify nibble-level wildcards, like “?3 37 13 ?7”,
     *                which gets translated into masks behind the scenes.
     * @param callbacks Object with callbacks.
     */
    function scan(address: UInt64, size: number | UInt64, pattern: string, callbacks: KernelMemoryScanCallbacks): void;

    /**
     * Synchronous version of `scan()`.
     *
     * @param address Starting address to scan from.
     * @param size Number of bytes to scan.
     * @param pattern Match pattern, see `Memory.scan()` for details.
     */
    function scanSync(address: UInt64, size: number | UInt64, pattern: string): KernelMemoryScanMatch[];

    function readS8(address: UInt64): number;
    function readU8(address: UInt64): number;
    function readS16(address: UInt64): number;
    function readU16(address: UInt64): number;
    function readS32(address: UInt64): number;
    function readU32(address: UInt64): number;
    function readS64(address: UInt64): Int64;
    function readU64(address: UInt64): UInt64;
    function readShort(address: UInt64): number;
    function readUShort(address: UInt64): number;
    function readInt(address: UInt64): number;
    function readUInt(address: UInt64): number;
    function readLong(address: UInt64): number | Int64;
    function readULong(address: UInt64): number | UInt64;
    function readFloat(address: UInt64): number;
    function readDouble(address: UInt64): number;
    function readByteArray(address: UInt64, length: number): ArrayBuffer | null;
    function readCString(address: UInt64, size: number): string | null;
    function readUtf8String(address: UInt64, size: number): string | null;
    function readUtf16String(address: UInt64, length: number): string | null;

    function writeS8(address: UInt64, value: number | Int64): void;
    function writeU8(address: UInt64, value: number | UInt64): void;
    function writeS16(address: UInt64, value: number | Int64): void;
    function writeU16(address: UInt64, value: number | UInt64): void;
    function writeS32(address: UInt64, value: number | Int64): void;
    function writeU32(address: UInt64, value: number | UInt64): void;
    function writeS64(address: UInt64, value: number | Int64): void;
    function writeU64(address: UInt64, value: number | UInt64): void;
    function writeShort(address: UInt64, value: number | Int64): void;
    function writeUShort(address: UInt64, value: number | UInt64): void;
    function writeInt(address: UInt64, value: number | Int64): void;
    function writeUInt(address: UInt64, value: number | UInt64): void;
    function writeLong(address: UInt64, value: number | Int64): void;
    function writeULong(address: UInt64, value: number | UInt64): void;
    function writeFloat(address: UInt64, value: number): void;
    function writeDouble(address: UInt64, value: number): void;
    function writeByteArray(address: UInt64, value: ArrayBuffer | number[]): void;
    function writeUtf8String(address: UInt64, value: string): void;
    function writeUtf16String(address: UInt64, value: string): void;
}

declare namespace ObjC {
    // tslint:disable:no-unnecessary-qualifier

    /**
     * Whether the current process has an Objective-C runtime loaded. Do not invoke any other ObjC properties or
     * methods unless this is the case.
     */
    const available: boolean;

    /**
     * Direct access to a big portion of the Objective-C runtime API.
     */
    const api: {
        [name: string]: any;
    };

    /**
     * Dynamically generated bindings for each of the currently registered classes.
     *
     * You can interact with objects by using dot notation and replacing colons with underscores, i.e.:
     *
     * ```
     *     [NSString stringWithString:@"Hello World"];
     * ```
     *
     * becomes:
     *
     * ```
     *     const NSString = ObjC.classes.NSString;
     *     NSString.stringWithString_("Hello World");
     * ```
     *
     * Note the underscore after the method name.
     */
    const classes: {
        [name: string]: ObjC.Object
    };

    /**
     * Dynamically generated bindings for each of the currently registered protocols.
     */
    const protocols: {
        [name: string]: Protocol
    };

    /**
     * GCD queue of the main thread.
     */
    const mainQueue: NativePointer;

    /**
     * Schedule the JavaScript function `work` on the GCD queue specified by `queue`. An NSAutoreleasePool is created
     * just before calling `work`, and cleaned up on return.
     *
     * E.g. on macOS:
     * ```
     *     const { NSSound } = ObjC.classes;
     *     ObjC.schedule(ObjC.mainQueue, () => {
     *         const sound = NSSound.alloc().initWithContentsOfFile_byReference_("/Users/oleavr/.Trash/test.mp3", true).autorelease();
     *         sound.play();
     *     });
     * ```
     *
     * @param queue GCD queue to schedule `work` on.
     * @param work Function to call on the specified `queue`.
     */
    function schedule(queue: NativePointerValue, work: () => void): void;

    /**
     * Dynamically generated wrapper for any Objective-C instance, class, or meta-class.
     */
    class Object implements ObjectWrapper, ObjectMethods {
        constructor(handle: NativePointer, protocol?: Protocol);

        handle: NativePointer;

        /**
         * Whether this is an instance, class, or meta-class.
         */
        $kind: ObjectKind;

        /**
         * Instance used for chaining up to super-class method implementations.
         */
        $super: ObjC.Object;

        /**
         * Super-class of this object's class.
         */
        $superClass: ObjC.Object;

        /**
         * Class that this object is an instance of.
         */
        $class: ObjC.Object;

        /**
         * Class name of this object.
         */
        $className: string;

        /**
         * Name of module where this object is implemented.
         */
        $moduleName: string;

        /**
         * Protocols that this object conforms to.
         */
        $protocols: {
            [name: string]: Protocol;
        };

        /**
         * Native method names exposed by this object’s class and parent classes.
         */
        $methods: string[];

        /**
         * Native method names exposed by this object’s class, not including parent classes.
         */
        $ownMethods: string[];

        /**
         * Instance variables on this object. Supports both access and assignment.
         */
        $ivars: {
            [name: string]: any;
        };

        /**
         * Determines whether two instances refer to the same underlying object.
         *
         * @param other Other object instance or address to compare to.
         */
        equals(other: ObjC.Object | NativePointer): boolean;

        [name: string]: any;
    }

    interface ObjectMethods {
        [name: string]: ObjectMethod;
    }

    interface ObjectMethod extends ObjectWrapper, AnyFunction {
        handle: NativePointer;

        /**
         * Objective-C selector. Use `ObjC.selectorAsString()` to convert it to a string.
         */
        selector: NativePointer;

        /**
         * Current implementation.
         *
         * You may replace it by assigning to this property. See `ObjC.implement()` for details.
         */
        implementation: NativePointer;

        /**
         * Return type name.
         */
        returnType: string;

        /**
         * Argument type names.
         */
        argumentTypes: string[];

        /**
         * Signature.
         */
        types: string;

        /**
         * Makes a new method wrapper with custom NativeFunction options.
         *
         * Useful for e.g. setting `traps: "all"` to perform execution tracing
         * in conjunction with Stalker.
         */
        clone: (options: NativeFunctionOptions) => ObjectMethod;
    }

    /**
     * What kind of object an ObjC.Object represents.
     */
    type ObjectKind = "instance" | "class" | "meta-class";

    /**
     * Dynamically generated language binding for any Objective-C protocol.
     */
    class Protocol implements ObjectWrapper {
        constructor(handle: NativePointer);

        handle: NativePointer;

        /**
         * Name visible to the Objective-C runtime.
         */
        name: string;

        /**
         * Protocols that this protocol conforms to.
         */
        protocols: {
            [name: string]: Protocol
        };

        /**
         * Properties declared by this protocol.
         */
        properties: {
            [name: string]: ProtocolPropertyAttributes;
        };

        /**
         * Methods declared by this protocol.
         */
        methods: {
            [name: string]: ProtocolMethodDescription;
        };
    }

    interface ProtocolPropertyAttributes {
        [name: string]: string;
    }

    interface ProtocolMethodDescription {
        /**
         * Whether this method is required or optional.
         */
        required: boolean;

        /**
         * Method signature.
         */
        types: string;
    }

    /**
     * Dynamically generated language binding for any Objective-C block.
     *
     * Also supports implementing a block from scratch by passing in an
     * implementation.
     */
    class Block implements ObjectWrapper {
        constructor(target: NativePointer | MethodSpec<BlockImplementation>, options?: NativeFunctionOptions);

        handle: NativePointer;

        /**
         * Signature, if available.
         */
        types?: string;

        /**
         * Current implementation. You may replace it by assigning to this property.
         */
        implementation: AnyFunction;

        /**
         * Declares the signature of an externally defined block. This is needed
         * when working with blocks without signature metadata, i.e. when
         * `block.types === undefined`.
         *
         * @param signature Signature to use.
         */
        declare(signature: BlockSignature): void;
    }

    type BlockImplementation = (this: Block, ...args: any[]) => any;

    type BlockSignature = SimpleBlockSignature | DetailedBlockSignature;

    interface SimpleBlockSignature {
        /**
         * Return type.
         */
        retType: string;

        /**
         * Argument types.
         */
        argTypes: string[];
    }

    interface DetailedBlockSignature {
        /**
         * Signature.
         */
        types: string;
    }

    /**
     * Creates a JavaScript implementation compatible with the signature of `method`, where `fn` is used as the
     * implementation. Returns a `NativeCallback` that you may assign to an ObjC method’s `implementation` property.
     *
     * @param method Method to implement.
     * @param fn Implementation.
     */
    function implement(method: ObjectMethod, fn: AnyFunction): NativeCallback;

    /**
     * Creates a new class designed to act as a proxy for a target object.
     *
     * @param spec Proxy specification.
     */
    function registerProxy(spec: ProxySpec): ProxyConstructor;

    /**
     * Creates a new Objective-C class.
     *
     * @param spec Class specification.
     */
    function registerClass(spec: ClassSpec): ObjC.Object;

    /**
     * Creates a new Objective-C protocol.
     *
     * @param spec Protocol specification.
     */
    function registerProtocol(spec: ProtocolSpec): Protocol;

    /**
     * Binds some JavaScript data to an Objective-C instance.
     *
     * @param obj Objective-C instance to bind data to.
     * @param data Data to bind.
     */
    function bind(obj: ObjC.Object | NativePointer, data: InstanceData): void;

    /**
     * Unbinds previously associated JavaScript data from an Objective-C instance.
     *
     * @param obj Objective-C instance to unbind data from.
     */
    function unbind(obj: ObjC.Object | NativePointer): void;

    /**
     * Looks up previously bound data from an Objective-C object.
     *
     * @param obj Objective-C instance to look up data for.
     */
    function getBoundData(obj: ObjC.Object | NativePointer): any;

    /**
     * Enumerates loaded classes.
     *
     * @param callbacks Object with callbacks.
     */
    function enumerateLoadedClasses(callbacks: EnumerateLoadedClassesCallbacks): void;

    /**
     * Enumerates loaded classes.
     *
     * @param options Options customizing the enumeration.
     * @param callbacks Object with callbacks.
     */
    function enumerateLoadedClasses(options: EnumerateLoadedClassesOptions, callbacks: EnumerateLoadedClassesCallbacks): void;

    /**
     * Synchronous version of `enumerateLoadedClasses()`.
     *
     * @param options Options customizing the enumeration.
     */
    function enumerateLoadedClassesSync(options?: EnumerateLoadedClassesOptions): EnumerateLoadedClassesResult;

    interface EnumerateLoadedClassesOptions {
        /**
         * Limit enumeration to modules in the given module map.
         */
        ownedBy?: ModuleMap;
    }

    interface EnumerateLoadedClassesCallbacks {
        onMatch: (name: string, owner: string) => void;
        onComplete: () => void;
    }

    interface EnumerateLoadedClassesResult {
        /**
         * Class names grouped by name of owner module.
         */
        [owner: string]: string[];
    }

    function choose(specifier: ChooseSpecifier, callbacks: EnumerateCallbacks<ObjC.Object>): void;

    /**
     * Synchronous version of `choose()`.
     *
     * @param specifier What kind of objects to look for.
     */
    function chooseSync(specifier: ChooseSpecifier): ObjC.Object[];

    /**
     * Converts the JavaScript string `name` to a selector.
     *
     * @param name Name to turn into a selector.
     */
    function selector(name: string): NativePointer;

    /**
     * Converts the selector `sel` to a JavaScript string.
     *
     * @param sel Selector to turn into a string.
     */
    function selectorAsString(sel: NativePointerValue): string;

    interface ProxySpec<D extends ProxyData = ProxyData, T = ObjC.Object, S = ObjC.Object> {
        /**
         * Name of the proxy class.
         *
         * Omit this if you don’t care about the globally visible name and would like the runtime to auto-generate one
         * for you.
         */
        name?: string;

        /**
         * Protocols this proxy class conforms to.
         */
        protocols?: Protocol[];

        /**
         * Methods to implement.
         */
        methods?: {
            [name: string]: UserMethodImplementation<D, T, S> | MethodSpec<UserMethodImplementation<D, T, S>>;
        };

        /**
         * Callbacks for getting notified about events.
         */
        events?: ProxyEventCallbacks<D, T, S>;
    }

    interface ProxyEventCallbacks<D, T, S> {
        /**
         * Gets notified right after the object has been deallocated.
         *
         * This is where you might clean up any associated state.
         */
        dealloc?(this: UserMethodInvocation<D, T, S>): void;

        /**
         * Gets notified about the method name that we’re about to forward
         * a call to.
         *
         * This might be where you’d start out with a temporary callback
         * that just logs the names to help you decide which methods to
         * override.
         *
         * @param name Name of method that is about to get called.
         */
        forward?(this: UserMethodInvocation<D, T, S>, name: string): void;
    }

    /**
     * Constructor for instantiating a proxy object.
     *
     * @param target Target object to proxy to.
     * @param data Object with arbitrary data.
     */
    interface ProxyConstructor {
        new (target: ObjC.Object | NativePointer, data?: InstanceData): ProxyInstance;
    }

    interface ProxyInstance {
        handle: NativePointer;
    }

    interface ProxyData extends InstanceData {
        /**
         * This proxy's target object.
         */
        target: ObjC.Object;

        /**
         * Used by the implementation.
         */
        events: {};
    }

    interface ClassSpec<D = InstanceData, T = ObjC.Object, S = ObjC.Object> {
        /**
         * Name of the class.
         *
         * Omit this if you don’t care about the globally visible name and would like the runtime to auto-generate one
         * for you.
         */
        name?: string;

        /**
         * Super-class, or `null` to create a new root class. Omit to inherit from `NSObject`.
         */
        super?: ObjC.Object | null;

        /**
         * Protocols this class conforms to.
         */
        protocols?: Protocol[];

        /**
         * Methods to implement.
         */
        methods?: {
            [name: string]: UserMethodImplementation<D, T, S> | MethodSpec<UserMethodImplementation<D, T, S>>;
        };
    }

    type MethodSpec<I> = SimpleMethodSpec<I> | DetailedMethodSpec<I>;

    interface SimpleMethodSpec<I> {
        /**
         * Return type.
         */
        retType: string;

        /**
         * Argument types.
         */
        argTypes: string[];

        /**
         * Implementation.
         */
        implementation: I;
    }

    interface DetailedMethodSpec<I> {
        /**
         * Signature.
         */
        types: string;

        /**
         * Implementation.
         */
        implementation: I;
    }

    type UserMethodImplementation<D, T, S> = (this: UserMethodInvocation<D, T, S>, ...args: any[]) => any;

    interface UserMethodInvocation<D, T, S> {
        self: T;
        super: S;
        data: D;
    }

    /**
     * User-defined data that can be accessed from method implementations.
     */
    interface InstanceData {
        [name: string]: any;
    }

    interface ProtocolSpec {
        /**
         * Name of the protocol.
         *
         * Omit this if you don’t care about the globally visible name and would like the runtime to auto-generate one
         * for you.
         */
        name?: string;

        /**
         * Protocols this protocol conforms to.
         */
        protocols?: Protocol[];

        methods?: {
            [name: string]: ProtocolMethodSpec;
        };
    }

    type ProtocolMethodSpec = SimpleProtocolMethodSpec | DetailedProtocolMethodSpec;

    interface SimpleProtocolMethodSpec {
        /**
         * Return type.
         */
        retType: string;

        /**
         * Argument types.
         */
        argTypes: string[];

        /**
         * Whether this method is required or optional. Default is required.
         */
        optional?: boolean;
    }

    interface DetailedProtocolMethodSpec {
        /**
         * Method signature.
         */
        types: string;

        /**
         * Whether this method is required or optional. Default is required.
         */
        optional?: boolean;
    }

    type ChooseSpecifier = SimpleChooseSpecifier | DetailedChooseSpecifier;

    type SimpleChooseSpecifier = ObjC.Object;

    interface DetailedChooseSpecifier {
        /**
         * Which class to look for instances of. E.g.: `ObjC.classes.UIButton`.
         */
        class: ObjC.Object;

        /**
         * Whether you’re also interested in subclasses matching the given class selector.
         *
         * The default is to also include subclasses.
         */
        subclasses?: boolean;
    }

    // tslint:enable:no-unnecessary-qualifier
}

declare namespace Java {
    /**
     * Whether the current process has a Java runtime loaded. Do not invoke any other Java properties or
     * methods unless this is the case.
     */
    const available: boolean;

    /**
     * Which version of Android we're running on.
     */
    const androidVersion: string;

    /**
     * Calls `func` with the `obj` lock held.
     *
     * @param obj Instance whose lock to hold.
     * @param fn Function to call with lock held.
     */
    function synchronized(obj: Wrapper, fn: () => void): void;

    /**
     * Enumerates loaded classes.
     *
     * @param callbacks Object with callbacks.
     */
    function enumerateLoadedClasses(callbacks: EnumerateLoadedClassesCallbacks): void;

    /**
     * Synchronous version of `enumerateLoadedClasses()`.
     */
    function enumerateLoadedClassesSync(): string[];

    /**
     * Enumerates class loaders.
     *
     * You may pass such a loader to `Java.ClassFactory.get()` to be able to
     * `.use()` classes on the specified class loader.
     *
     * @param callbacks Object with callbacks.
     */
    function enumerateClassLoaders(callbacks: EnumerateClassLoadersCallbacks): void;

    /**
     * Synchronous version of `enumerateClassLoaders()`.
     */
    function enumerateClassLoadersSync(): Wrapper[];

    /**
     * Enumerates methods matching `query`.
     *
     * @param query Query specified as `class!method`, with globs permitted. May
     *              also be suffixed with `/` and one or more modifiers:
     *              - `i`: Case-insensitive matching.
     *              - `s`: Include method signatures, so e.g. `"putInt"` becomes
     *                `"putInt(java.lang.String, int): void"`.
     *              - `u`: User-defined classes only, ignoring system classes.
     */
    function enumerateMethods(query: string): EnumerateMethodsMatchGroup[];

    /**
     * Runs `fn` on the main thread of the VM.
     *
     * @param fn Function to run on the main thread of the VM.
     */
    function scheduleOnMainThread(fn: () => void): void;

    /**
     * Ensures that the current thread is attached to the VM and calls `fn`.
     * (This isn't necessary in callbacks from Java.)
     *
     * Will defer calling `fn` if the app's class loader is not available yet.
     * Use `Java.performNow()` if access to the app's classes is not needed.
     *
     * @param fn Function to run while attached to the VM.
     */
    function perform(fn: () => void): void;

    /**
     * Ensures that the current thread is attached to the VM and calls `fn`.
     * (This isn't necessary in callbacks from Java.)
     *
     * @param fn Function to run while attached to the VM.
     */
    function performNow(fn: () => void): void;

    /**
     * Dynamically generates a JavaScript wrapper for `className` that you can
     * instantiate objects from by calling `$new()` on to invoke a constructor.
     * Call `$dispose()` on an instance to clean it up explicitly, or wait for
     * the JavaScript object to get garbage-collected, or script to get
     * unloaded. Static and non-static methods are available, and you can even
     * replace method implementations.
     *
     * Uses the app's class loader, but you may access classes on other loaders
     * by calling `Java.ClassFactory.get()`.
     *
     * @param className Canonical class name to get a wrapper for.
     */
    function use<T extends Members<T> = {}>(className: string): Wrapper<T>;

    /**
     * Opens the .dex file at `filePath`.
     *
     * @param filePath Path to .dex to open.
     */
    function openClassFile(filePath: string): DexFile;

    /**
     * Enumerates live instances of the `className` class by scanning the Java
     * VM's heap.
     *
     * @param className Name of class to enumerate instances of.
     * @param callbacks Object with callbacks.
     */
    function choose(className: string, callbacks: ChooseCallbacks): void;

    /**
     * Duplicates a JavaScript wrapper for later use outside replacement method.
     *
     * @param obj An existing wrapper retrieved from `this` in replacement method.
     */
    function retain<T extends Members<T> = {}>(obj: Wrapper<T>): Wrapper<T>;

    /**
     * Creates a JavaScript wrapper given the existing instance at `handle` of
     * given class `klass` as returned from `Java.use()`.
     *
     * @param handle An existing wrapper or a JNI handle.
     * @param klass Class wrapper for type to cast to.
     */
    function cast<From extends Members<From> = {}, To extends Members<To> = {}>(
        handle: Wrapper<From> | NativePointerValue,
        klass: Wrapper<To>
    ): Wrapper<To>;

    /**
     * Creates a Java array with elements of the specified `type`, from a
     * JavaScript array `elements`. The resulting Java array behaves like
     * a JS array, but can be passed by reference to Java APIs in order to
     * allow them to modify its contents.
     *
     * @param type Type name of elements.
     * @param elements Array of JavaScript values to use for constructing the
     *                 Java array.
     */
    function array(type: string, elements: any[]): any[];

    /**
     * Determines whether the caller is running on the main thread.
     */
    function isMainThread(): boolean;

    /**
     * Creates a new Java class.
     *
     * @param spec Object describing the class to be created.
     */
    function registerClass(spec: ClassSpec): Wrapper;

    /**
     * Forces the VM to execute everything with its interpreter. Necessary to
     * prevent optimizations from bypassing method hooks in some cases, and
     * allows ART's Instrumentation APIs to be used for tracing the runtime.
     */
    function deoptimizeEverything(): void;

    const vm: VM;

    /**
     * The default class factory used to implement e.g. `Java.use()`.
     * Uses the application's main class loader.
     */
    const classFactory: ClassFactory;

    interface EnumerateLoadedClassesCallbacks {
        /**
         * Called with the name of each currently loaded class, and a JNI
         * reference for its Java Class object.
         *
         * Pass the `name` to `Java.use()` to get a JavaScript wrapper.
         * You may also `Java.cast()` the `handle` to `java.lang.Class`.
         */
        onMatch: (name: string, handle: NativePointer) => void;

        /**
         * Called when all loaded classes have been enumerated.
         */
        onComplete: () => void;
    }

    interface EnumerateClassLoadersCallbacks {
        /**
         * Called with a `java.lang.ClassLoader` wrapper for each class loader
         * found in the VM.
         */
        onMatch: (loader: Wrapper) => void;

        /**
         * Called when all class loaders have been enumerated.
         */
        onComplete: () => void;
    }

    /**
     * Matching methods grouped by class loader.
     */
    interface EnumerateMethodsMatchGroup {
        /**
         * Class loader, or `null` for the bootstrap class loader.
         *
         * Typically passed to `ClassFactory.get()` to interact with classes of
         * interest.
         */
        loader: Wrapper | null;

        /**
         * One or more matching classes that have one or more methods matching
         * the given query.
         */
        classes: [EnumerateMethodsMatchClass, ...EnumerateMethodsMatchClass[]];
    }

    /**
     * Class matching query which has one or more matching methods.
     */
    interface EnumerateMethodsMatchClass {
        /**
         * Class name that matched the given query.
         */
        name: string;

        /**
         * One or more matching method names, each followed by signature when
         * the `s` modifier is used.
         */
        methods: [string, ...string[]];
    }

    interface ChooseCallbacks {
        /**
         * Called with each live instance found with a ready-to-use `instance`
         * just as if you would have called `Java.cast()` with a raw handle to
         * this particular instance.
         *
         * May return `EnumerateAction.Stop` to stop the enumeration early.
         */
        onMatch: (instance: Wrapper) => void | EnumerateAction;

        /**
         * Called when all instances have been enumerated.
         */
        onComplete: () => void;
    }

    type Members<T> = Record<keyof T, MethodDispatcher | Field>;

    /**
     * Dynamically generated wrapper for any Java class, instance, or interface.
     */
    type Wrapper<T extends Members<T> = {}> = {
        /**
         * Automatically inject holder's type to all fields and methods
         */
        [K in keyof T]: T[K] extends Field<infer Value> ? Field<Value, T> : MethodDispatcher<T>
    } & {
        /**
         * Allocates and initializes a new instance of the given class.
         *
         * Use this to create a new instance.
         */
        $new: MethodDispatcher<T>;

        /**
         * Allocates a new instance without initializing it.
         *
         * Call `$init()` to initialize it.
         */
        $alloc: MethodDispatcher<T>;

        /**
         * Initializes an instance that was allocated but not yet initialized.
         * This wraps the constructor(s).
         *
         * Replace the `implementation` property to hook a given constructor.
         */
        $init: MethodDispatcher<T>;

        /**
         * Eagerly deletes the underlying JNI global reference without having to
         * wait for the object to become unreachable and the JavaScript
         * runtime's garbage collector to kick in (or script to be unloaded).
         *
         * Useful when a lot of short-lived objects are created in a loop and
         * there's a risk of running out of global handles.
         */
        $dispose(): void;

        /**
         * Retrieves a `java.lang.Class` wrapper for the current class.
         */
        class: Wrapper;

        /**
         * Canonical name of class being wrapped.
         */
        $className: string;

        /**
         * Method and field names exposed by this object’s class, not including
         * parent classes.
         */
        $ownMembers: string[];

        /**
         * Instance used for chaining up to super-class method implementations.
         */
        $super: Wrapper;

        /**
         * Methods and fields.
         */
        [name: string]: any;
    };

    interface MethodDispatcher<Holder extends Members<Holder> = {}> extends Method<Holder> {
        /**
         * Available overloads.
         */
        overloads: Array<Method<Holder>>;

        /**
         * Obtains a specific overload.
         *
         * @param args Signature of the overload to obtain.
         *             For example: `"java.lang.String", "int"`.
         */
        overload(...args: string[]): Method<Holder>;
    }

    interface Method<Holder extends Members<Holder> = {}> {
        (...params: any[]): any;

        /**
         * Name of this method.
         */
        methodName: string;

        /**
         * Class that this method belongs to.
         */
        holder: Wrapper<Holder>;

        /**
         * What kind of method this is, i.e. constructor vs static vs instance.
         */
        type: MethodType;

        /**
         * Pointer to the VM's underlying method object.
         */
        handle: NativePointer;

        /**
         * Implementation. Assign a new implementation to this property to
         * replace the original implementation. Assign `null` at a future point
         * to revert back to the original implementation.
         */
        implementation: MethodImplementation<Holder> | null;

        /**
         * Method return type.
         */
        returnType: Type;

        /**
         * Method argument types.
         */
        argumentTypes: Type[];

        /**
         * Queries whether the method may be invoked with a given argument list.
         */
        canInvokeWith: (...args: any[]) => boolean;

        /**
         * Makes a new method wrapper with custom NativeFunction options.
         *
         * Useful for e.g. setting `traps: "all"` to perform execution tracing
         * in conjunction with Stalker.
         */
        clone: (options: NativeFunctionOptions) => Method<Holder>;
    }

    type MethodImplementation<This extends Members<This> = {}> = (this: Wrapper<This>, ...params: any[]) => any;

    interface Field<Value = any, Holder extends Members<Holder> = {}> {
        /**
         * Current value of this field. Assign to update the field's value.
         */
        value: Value;

        /**
         * Class that this field belongs to.
         */
        holder: Wrapper<Holder>;

        /**
         * What kind of field this is, i.e. static vs instance.
         */
        fieldType: FieldType;

        /**
         * Type of value.
         */
        fieldReturnType: Type;
    }

    // tslint:disable-next-line:no-const-enum
    const enum MethodType {
        Constructor = 1,
        Static = 2,
        Instance = 3,
    }

    // tslint:disable-next-line:no-const-enum
    const enum FieldType {
        Static = 1,
        Instance = 2,
    }

    interface Type {
        /**
         * VM type name. For example `I` for `int`.
         */
        name: string;

        /**
         * Frida type name. For example `pointer` for a handle.
         */
        type: string;

        /**
         * Size in words.
         */
        size: number;

        /**
         * Size in bytes.
         */
        byteSize: number;

        /**
         * Class name, if applicable.
         */
        className?: string;

        /**
         * Checks whether a given JavaScript `value` is compatible.
         */
        isCompatible: (value: any) => boolean;

        /**
         * Converts `value` from a JNI value to a JavaScript value.
         */
        fromJni?: (value: any) => any;

        /**
         * Converts `value` from a JavaScript value to a JNI value.
         */
        toJni?: (value: any) => any;

        /**
         * Reads a value from memory.
         */
        read?: (address: NativePointerValue) => any;

        /**
         * Writes a value to memory.
         */
        write?: (address: NativePointerValue, value: any) => void;
    }

    interface DexFile {
        /**
         * Loads the contained classes into the VM.
         */
        load(): void;

        /**
         * Determines available class names.
         */
        getClassNames(): string[];
    }

    interface ClassSpec {
        /**
         * Name of the class.
         */
        name: string;

        /**
         * Super-class. Omit to inherit from `java.lang.Object`.
         */
        superClass?: Wrapper;

        /**
         * Interfaces implemented by this class.
         */
        implements?: Wrapper[];

        /**
         * Name and type of each field to expose.
         */
        fields?: {
            [name: string]: string;
        };

        /**
         * Methods to implement. Use the special name `$init` to define one or more constructors.
         */
        methods?: {
            [name: string]: MethodImplementation | MethodSpec | MethodSpec[];
        };
    }

    interface MethodSpec {
        /**
         * Return type. Defaults to `void` if omitted.
         */
        returnType?: string;

        /**
         * Argument types. Defaults to `[]` if omitted.
         */
        argumentTypes?: string[];

        /**
         * Implementation.
         */
        implementation: MethodImplementation;
    }

    interface VM {
        /**
         * Ensures that the current thread is attached to the VM and calls `fn`.
         * (This isn't necessary in callbacks from Java.)
         *
         * @param fn Function to run while attached to the VM.
         */
        perform(fn: () => void): void;

        /**
         * Gets a wrapper for the current thread's `JNIEnv`.
         *
         * Throws an exception if the current thread is not attached to the VM.
         */
        getEnv(): Env;

        /**
         * Tries to get a wrapper for the current thread's `JNIEnv`.
         *
         * Returns `null` if the current thread is not attached to the VM.
         */
        tryGetEnv(): Env | null;
    }

    type Env = any;

    class ClassFactory {
        /**
         * Gets the class factory instance for a given class loader, or the
         * default factory when passing `null`.
         *
         * The default class factory used behind the scenes only interacts
         * with the application's main class loader. Other class loaders
         * can be discovered through APIs such as `Java.enumerateMethods()` and
         * `Java.enumerateClassLoaders()`, and subsequently interacted with
         * through this API.
         */
        static get(classLoader: Wrapper | null): ClassFactory;

        /**
         * Class loader currently being used. For the default class factory this
         * is updated by the first call to `Java.perform()`.
         */
        readonly loader: Wrapper | null;

        /**
         * Path to cache directory currently being used. For the default class
         * factory this is updated by the first call to `Java.perform()`.
         */
        cacheDir: string;

        /**
         * Naming convention to use for temporary files.
         *
         * Defaults to `{ prefix: "frida", suffix: "dat" }`.
         */
        tempFileNaming: TempFileNaming;

        /**
         * Dynamically generates a JavaScript wrapper for `className` that you can
         * instantiate objects from by calling `$new()` on to invoke a constructor.
         * Call `$dispose()` on an instance to clean it up explicitly, or wait for
         * the JavaScript object to get garbage-collected, or script to get
         * unloaded. Static and non-static methods are available, and you can even
         * replace method implementations.
         *
         * @param className Canonical class name to get a wrapper for.
         */
        use<T extends Members<T> = {}>(className: string): Wrapper<T>;

        /**
         * Opens the .dex file at `filePath`.
         *
         * @param filePath Path to .dex to open.
         */
        openClassFile(filePath: string): DexFile;

        /**
         * Enumerates live instances of the `className` class by scanning the Java
         * VM's heap.
         *
         * @param className Name of class to enumerate instances of.
         * @param callbacks Object with callbacks.
         */
        choose(className: string, callbacks: ChooseCallbacks): void;

        /**
         * Duplicates a JavaScript wrapper for later use outside replacement method.
         *
         * @param obj An existing wrapper retrieved from `this` in replacement method.
         */
        retain<T extends Members<T> = {}>(obj: Wrapper<T>): Wrapper<T>;

        /**
         * Creates a JavaScript wrapper given the existing instance at `handle` of
         * given class `klass` as returned from `Java.use()`.
         *
         * @param handle An existing wrapper or a JNI handle.
         * @param klass Class wrapper for type to cast to.
         */
        cast<From extends Members<From> = {}, To extends Members<To> = {}>(
            handle: Wrapper<From> | NativePointerValue,
            klass: Wrapper<To>
        ): Wrapper<To>;

        /**
         * Creates a Java array with elements of the specified `type`, from a
         * JavaScript array `elements`. The resulting Java array behaves like
         * a JS array, but can be passed by reference to Java APIs in order to
         * allow them to modify its contents.
         *
         * @param type Type name of elements.
         * @param elements Array of JavaScript values to use for constructing the
         *                 Java array.
         */
        array(type: string, elements: any[]): any[];

        /**
         * Creates a new Java class.
         *
         * @param spec Object describing the class to be created.
         */
        registerClass(spec: ClassSpec): Wrapper;
    }

    interface TempFileNaming {
        /**
         * File name prefix to use.
         *
         * For example: `frida`.
         */
        prefix: string;

        /**
         * File name suffix to use.
         *
         * For example: `dat`.
         */
        suffix: string;
    }
}

/**
 * Monitors the lifetime of a heap-allocated JavaScript value.
 *
 * Useful when you're building a language-binding where you need to free
 * native resources when a JS value is no longer needed.
 */
declare namespace WeakRef {
    /**
     * Starts monitoring the lifetime of `target`. Calls `callback` as soon as
     * value has been garbage-collected, or the script is about to get
     * unloaded.
     *
     * Be careful so `callback` is not a closure that accidentally captures
     * `target` and keeps it alive beyond its intended lifetime.
     *
     * @param target Heap-allocated JavaScript value to monitor lifetime of.
     * @param callback Function to call when `target` gets GCed.
     */
    function bind(target: any, callback: WeakRefCallback): WeakRefId;

    /**
     * Stops monitoring the value passed to `WeakRef.bind()` and calls the
     * callback immediately.
     *
     * @param id ID returned by a previous call to `WeakRef.bind()`.
     */
    function unbind(id: WeakRefId): void;
}

type WeakRefCallback = () => void;

/**
 * Opaque ID returned by `WeakRef.bind()`. Pass it to `WeakRef.unbind()` to
 * stop monitoring the target value.
 */
type WeakRefId = number;

/**
 * Generates machine code for x86.
 */
declare class X86Writer {
    /**
     * Creates a new code writer for generating x86 machine code
     * written directly to memory at `codeAddress`.
     *
     * @param codeAddress Memory address to write generated code to.
     * @param options Options for customizing code generation.
     */
    constructor(codeAddress: NativePointerValue, options?: X86WriterOptions);

    /**
     * Recycles instance.
     */
    reset(codeAddress: NativePointerValue, options?: X86WriterOptions): void;

    /**
     * Eagerly cleans up memory.
     */
    dispose(): void;

    /**
     * Resolves label references and writes pending data to memory. You
     * should always call this once you've finished generating code. It
     * is usually also desirable to do this between pieces of unrelated
     * code, e.g. when generating multiple functions in one go.
     */
    flush(): void;

    /**
     * Memory location of the first byte of output.
     */
    base: NativePointer;

    /**
     * Memory location of the next byte of output.
     */
    code: NativePointer;

    /**
     * Program counter at the next byte of output.
     */
    pc: NativePointer;

    /**
     * Current offset in bytes.
     */
    offset: number;

    /**
     * Puts a label at the current position, where `id` is an identifier
     * that may be referenced in past and future `put*Label()` calls.
     */
    putLabel(id: string): void;

    /**
     * Puts code needed for calling a C function with the specified `args`.
     */
    putCallAddressWithArguments(func: NativePointerValue, args: X86CallArgument[]): void;

    /**
     * Like `putCallWithArguments()`, but also
     * ensures that the argument list is aligned on a 16 byte boundary.
     */
    putCallAddressWithAlignedArguments(func: NativePointerValue, args: X86CallArgument[]): void;

    /**
     * Puts code needed for calling a C function with the specified `args`.
     */
    putCallRegWithArguments(reg: X86Register, args: X86CallArgument[]): void;

    /**
     * Like `putCallWithArguments()`, but also
     * ensures that the argument list is aligned on a 16 byte boundary.
     */
    putCallRegWithAlignedArguments(reg: X86Register, args: X86CallArgument[]): void;

    /**
     * Puts code needed for calling a C function with the specified `args`.
     */
    putCallRegOffsetPtrWithArguments(reg: X86Register, offset: number | Int64 | UInt64, args: X86CallArgument[]): void;

    /**
     * Puts a CALL instruction.
     */
    putCallAddress(address: NativePointerValue): void;

    /**
     * Puts a CALL instruction.
     */
    putCallReg(reg: X86Register): void;

    /**
     * Puts a CALL instruction.
     */
    putCallRegOffsetPtr(reg: X86Register, offset: number | Int64 | UInt64): void;

    /**
     * Puts a CALL instruction.
     */
    putCallIndirect(addr: NativePointerValue): void;

    /**
     * Puts a CALL instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putCallIndirectLabel(labelId: string): void;

    /**
     * Puts a CALL instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putCallNearLabel(labelId: string): void;

    /**
     * Puts a LEAVE instruction.
     */
    putLeave(): void;

    /**
     * Puts a RET instruction.
     */
    putRet(): void;

    /**
     * Puts a RET instruction.
     */
    putRetImm(immValue: number): void;

    /**
     * Puts a JMP instruction.
     */
    putJmpAddress(address: NativePointerValue): void;

    /**
     * Puts a JMP instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putJmpShortLabel(labelId: string): void;

    /**
     * Puts a JMP instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putJmpNearLabel(labelId: string): void;

    /**
     * Puts a JMP instruction.
     */
    putJmpReg(reg: X86Register): void;

    /**
     * Puts a JMP instruction.
     */
    putJmpRegPtr(reg: X86Register): void;

    /**
     * Puts a JMP instruction.
     */
    putJmpRegOffsetPtr(reg: X86Register, offset: number | Int64 | UInt64): void;

    /**
     * Puts a JMP instruction.
     */
    putJmpNearPtr(address: NativePointerValue): void;

    /**
     * Puts a JCC instruction.
     */
    putJccShort(instructionId: X86InstructionId, target: NativePointerValue, hint: X86BranchHint): void;

    /**
     * Puts a JCC instruction.
     */
    putJccNear(instructionId: X86InstructionId, target: NativePointerValue, hint: X86BranchHint): void;

    /**
     * Puts a JCC instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putJccShortLabel(instructionId: X86InstructionId, labelId: string, hint: X86BranchHint): void;

    /**
     * Puts a JCC instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putJccNearLabel(instructionId: X86InstructionId, labelId: string, hint: X86BranchHint): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegImm(reg: X86Register, immValue: number | Int64 | UInt64): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegReg(dstReg: X86Register, srcReg: X86Register): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegNearPtr(dstReg: X86Register, srcAddress: NativePointerValue): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegImm(reg: X86Register, immValue: number | Int64 | UInt64): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegReg(dstReg: X86Register, srcReg: X86Register): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegNearPtr(dstReg: X86Register, srcAddress: NativePointerValue): void;

    /**
     * Puts an INC instruction.
     */
    putIncReg(reg: X86Register): void;

    /**
     * Puts a DEC instruction.
     */
    putDecReg(reg: X86Register): void;

    /**
     * Puts an INC instruction.
     */
    putIncRegPtr(target: X86PointerTarget, reg: X86Register): void;

    /**
     * Puts a DEC instruction.
     */
    putDecRegPtr(target: X86PointerTarget, reg: X86Register): void;

    /**
     * Puts a LOCK XADD instruction.
     */
    putLockXaddRegPtrReg(dstReg: X86Register, srcReg: X86Register): void;

    /**
     * Puts a LOCK CMPXCHG instruction.
     */
    putLockCmpxchgRegPtrReg(dstReg: X86Register, srcReg: X86Register): void;

    /**
     * Puts a LOCK INC IMM32 instruction.
     */
    putLockIncImm32Ptr(target: NativePointerValue): void;

    /**
     * Puts a LOCK DEC IMM32 instruction.
     */
    putLockDecImm32Ptr(target: NativePointerValue): void;

    /**
     * Puts an AND instruction.
     */
    putAndRegReg(dstReg: X86Register, srcReg: X86Register): void;

    /**
     * Puts an AND instruction.
     */
    putAndRegU32(reg: X86Register, immValue: number): void;

    /**
     * Puts a SHL instruction.
     */
    putShlRegU8(reg: X86Register, immValue: number): void;

    /**
     * Puts a SHR instruction.
     */
    putShrRegU8(reg: X86Register, immValue: number): void;

    /**
     * Puts an XOR instruction.
     */
    putXorRegReg(dstReg: X86Register, srcReg: X86Register): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegReg(dstReg: X86Register, srcReg: X86Register): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegU32(dstReg: X86Register, immValue: number): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegU64(dstReg: X86Register, immValue: number | UInt64): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegAddress(dstReg: X86Register, address: NativePointerValue): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegPtrU32(dstReg: X86Register, immValue: number): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegOffsetPtrU32(dstReg: X86Register, dstOffset: number | Int64 | UInt64, immValue: number): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegPtrReg(dstReg: X86Register, srcReg: X86Register): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegOffsetPtrReg(dstReg: X86Register, dstOffset: number | Int64 | UInt64, srcReg: X86Register): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegRegPtr(dstReg: X86Register, srcReg: X86Register): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegRegOffsetPtr(dstReg: X86Register, srcReg: X86Register, srcOffset: number | Int64 | UInt64): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegBaseIndexScaleOffsetPtr(dstReg: X86Register, baseReg: X86Register, indexReg: X86Register, scale: number, offset: number | Int64 | UInt64): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegNearPtr(dstReg: X86Register, srcAddress: NativePointerValue): void;

    /**
     * Puts a MOV instruction.
     */
    putMovNearPtrReg(dstAddress: NativePointerValue, srcReg: X86Register): void;

    /**
     * Puts a MOV FS instruction.
     */
    putMovFsU32PtrReg(fsOffset: number, srcReg: X86Register): void;

    /**
     * Puts a MOV FS instruction.
     */
    putMovRegFsU32Ptr(dstReg: X86Register, fsOffset: number): void;

    /**
     * Puts a MOV GS instruction.
     */
    putMovGsU32PtrReg(fsOffset: number, srcReg: X86Register): void;

    /**
     * Puts a MOV GS instruction.
     */
    putMovRegGsU32Ptr(dstReg: X86Register, fsOffset: number): void;

    /**
     * Puts a MOVQ XMM0 ESP instruction.
     */
    putMovqXmm0EspOffsetPtr(offset: number): void;

    /**
     * Puts a MOVQ EAX XMM0 instruction.
     */
    putMovqEaxOffsetPtrXmm0(offset: number): void;

    /**
     * Puts a MOVDQU XMM0 ESP instruction.
     */
    putMovdquXmm0EspOffsetPtr(offset: number): void;

    /**
     * Puts a MOVDQU EAX XMM0 instruction.
     */
    putMovdquEaxOffsetPtrXmm0(offset: number): void;

    /**
     * Puts a LEA instruction.
     */
    putLeaRegRegOffset(dstReg: X86Register, srcReg: X86Register, srcOffset: number | Int64 | UInt64): void;

    /**
     * Puts an XCHG instruction.
     */
    putXchgRegRegPtr(leftReg: X86Register, rightReg: X86Register): void;

    /**
     * Puts a PUSH instruction.
     */
    putPushU32(immValue: number): void;

    /**
     * Puts a PUSH instruction.
     */
    putPushNearPtr(address: NativePointerValue): void;

    /**
     * Puts a PUSH instruction.
     */
    putPushReg(reg: X86Register): void;

    /**
     * Puts a POP instruction.
     */
    putPopReg(reg: X86Register): void;

    /**
     * Puts a PUSH instruction.
     */
    putPushImmPtr(immPtr: NativePointerValue): void;

    /**
     * Puts a PUSHAX instruction.
     */
    putPushax(): void;

    /**
     * Puts a POPAX instruction.
     */
    putPopax(): void;

    /**
     * Puts a PUSHFX instruction.
     */
    putPushfx(): void;

    /**
     * Puts a POPFX instruction.
     */
    putPopfx(): void;

    /**
     * Puts a TEST instruction.
     */
    putTestRegReg(regA: X86Register, regB: X86Register): void;

    /**
     * Puts a TEST instruction.
     */
    putTestRegU32(reg: X86Register, immValue: number): void;

    /**
     * Puts a CMP instruction.
     */
    putCmpRegI32(reg: X86Register, immValue: number): void;

    /**
     * Puts a CMP instruction.
     */
    putCmpRegOffsetPtrReg(regA: X86Register, offset: number | Int64 | UInt64, regB: X86Register): void;

    /**
     * Puts a CMP instruction.
     */
    putCmpImmPtrImmU32(immPtr: NativePointerValue, immValue: number): void;

    /**
     * Puts a CMP instruction.
     */
    putCmpRegReg(regA: X86Register, regB: X86Register): void;

    /**
     * Puts a CLC instruction.
     */
    putClc(): void;

    /**
     * Puts a STC instruction.
     */
    putStc(): void;

    /**
     * Puts a CLD instruction.
     */
    putCld(): void;

    /**
     * Puts a STD instruction.
     */
    putStd(): void;

    /**
     * Puts a CPUID instruction.
     */
    putCpuid(): void;

    /**
     * Puts an LFENCE instruction.
     */
    putLfence(): void;

    /**
     * Puts an RDTSC instruction.
     */
    putRdtsc(): void;

    /**
     * Puts a PAUSE instruction.
     */
    putPause(): void;

    /**
     * Puts a NOP instruction.
     */
    putNop(): void;

    /**
     * Puts an OS/architecture-specific breakpoint instruction.
     */
    putBreakpoint(): void;

    /**
     * Puts `n` guard instruction.
     */
    putPadding(n: number): void;

    /**
     * Puts `n` NOP instructions.
     */
    putNopPadding(n: number): void;

    /**
     * Puts a uint8.
     */
    putU8(value: number): void;

    /**
     * Puts an int8.
     */
    putS8(value: number): void;

    /**
     * Puts raw data.
     */
    putBytes(data: ArrayBuffer | number[] | string): void;
}

interface X86WriterOptions {
    /**
     * Specifies the initial program counter, which is useful when
     * generating code to a scratch buffer. This is essential when using
     * `Memory.patchCode()` on iOS, which may provide you with a
     * temporary location that later gets mapped into memory at the
     * intended memory location.
     */
    pc?: NativePointer;
}

type X86CallArgument = X86Register | number | UInt64 | Int64 | NativePointerValue;

/**
 * Relocates machine code for x86.
 */
declare class X86Relocator {
    /**
     * Creates a new code relocator for copying x86 instructions
     * from one memory location to another, taking care to adjust
     * position-dependent instructions accordingly.
     *
     * @param inputCode Source address to copy instructions from.
     * @param output X86Writer pointed at the desired target memory
     *               address.
     */
    constructor(inputCode: NativePointerValue, output: X86Writer);

    /**
     * Recycles instance.
     */
    reset(inputCode: NativePointerValue, output: X86Writer): void;

    /**
     * Eagerly cleans up memory.
     */
    dispose(): void;

    /**
     * Latest `Instruction` read so far. Starts out `null` and changes
     * on every call to `readOne()`.
     */
    input: Instruction | null;

    /**
     * Indicates whether end-of-block has been reached, i.e. we've
     * reached a branch of any kind, like CALL, JMP, BL, RET.
     */
    eob: boolean;

    /**
     * Indicates whether end-of-input has been reached, e.g. we've
     * reached JMP/B/RET, an instruction after which there may or may
     * not be valid code.
     */
    eoi: boolean;

    /**
     * Reads the next instruction into the relocator's internal buffer
     * and returns the number of bytes read so far, including previous
     * calls.
     *
     * You may keep calling this method to keep buffering, or immediately
     * call either `writeOne()` or `skipOne()`. Or, you can buffer up
     * until the desired point and then call `writeAll()`.
     *
     * Returns zero when end-of-input is reached, which means the `eoi`
     * property is now `true`.
     */
    readOne(): number;

    /**
     * Peeks at the next `Instruction` to be written or skipped.
     */
    peekNextWriteInsn(): Instruction | null;

    /**
     * Peeks at the address of the next instruction to be written or skipped.
     */
    peekNextWriteSource(): NativePointer;

    /**
     * Skips the instruction that would have been written next.
     */
    skipOne(): void;

    /**
     * Skips the instruction that would have been written next,
     * but without a label for internal use. This breaks relocation of branches to
     * locations inside the relocated range, and is an optimization for use-cases
     * where all branches are rewritten (e.g. Frida's Stalker).
     */
    skipOneNoLabel(): void;

    /**
     * Writes the next buffered instruction.
     */
    writeOne(): boolean;

    /**
     * Writes the next buffered instruction, but without a
     * label for internal use. This breaks relocation of branches to locations
     * inside the relocated range, and is an optimization for use-cases where all
     * branches are rewritten (e.g. Frida's Stalker).
     */
    writeOneNoLabel(): boolean;

    /**
     * Writes all buffered instructions.
     */
    writeAll(): void;
}

type X86Register =
    | "xax"
    | "xcx"
    | "xdx"
    | "xbx"
    | "xsp"
    | "xbp"
    | "xsi"
    | "xdi"
    | "eax"
    | "ecx"
    | "edx"
    | "ebx"
    | "esp"
    | "ebp"
    | "esi"
    | "edi"
    | "rax"
    | "rcx"
    | "rdx"
    | "rbx"
    | "rsp"
    | "rbp"
    | "rsi"
    | "rdi"
    | "r8"
    | "r9"
    | "r10"
    | "r11"
    | "r12"
    | "r13"
    | "r14"
    | "r15"
    | "r8d"
    | "r9d"
    | "r10d"
    | "r11d"
    | "r12d"
    | "r13d"
    | "r14d"
    | "r15d"
    | "xip"
    | "eip"
    | "rip"
    ;

type X86InstructionId =
    | "jo"
    | "jno"
    | "jb"
    | "jae"
    | "je"
    | "jne"
    | "jbe"
    | "ja"
    | "js"
    | "jns"
    | "jp"
    | "jnp"
    | "jl"
    | "jge"
    | "jle"
    | "jg"
    | "jcxz"
    | "jecxz"
    | "jrcxz"
    ;

type X86BranchHint = "no-hint" | "likely" | "unlikely";

type X86PointerTarget = "byte" | "dword" | "qword";

/**
 * Generates machine code for arm.
 */
declare class ArmWriter {
    /**
     * Creates a new code writer for generating ARM machine code
     * written directly to memory at `codeAddress`.
     *
     * @param codeAddress Memory address to write generated code to.
     * @param options Options for customizing code generation.
     */
    constructor(codeAddress: NativePointerValue, options?: ArmWriterOptions);

    /**
     * Recycles instance.
     */
    reset(codeAddress: NativePointerValue, options?: ArmWriterOptions): void;

    /**
     * Eagerly cleans up memory.
     */
    dispose(): void;

    /**
     * Resolves label references and writes pending data to memory. You
     * should always call this once you've finished generating code. It
     * is usually also desirable to do this between pieces of unrelated
     * code, e.g. when generating multiple functions in one go.
     */
    flush(): void;

    /**
     * Memory location of the first byte of output.
     */
    base: NativePointer;

    /**
     * Memory location of the next byte of output.
     */
    code: NativePointer;

    /**
     * Program counter at the next byte of output.
     */
    pc: NativePointer;

    /**
     * Current offset in bytes.
     */
    offset: number;

    /**
     * Skips `nBytes`.
     */
    skip(nBytes: number): void;

    /**
     * Puts a label at the current position, where `id` is an identifier
     * that may be referenced in past and future `put*Label()` calls.
     */
    putLabel(id: string): void;

    /**
     * Puts code needed for calling a C function with the specified `args`.
     */
    putCallAddressWithArguments(func: NativePointerValue, args: ArmCallArgument[]): void;

    /**
     * Puts code needed for branching/jumping to the given address.
     */
    putBranchAddress(address: NativePointerValue): void;

    /**
     * Determines whether a direct branch is possible between the two
     * given memory locations.
     */
    canBranchDirectlyBetween(from: NativePointerValue, to: NativePointerValue): boolean;

    /**
     * Puts a B instruction.
     */
    putBImm(target: NativePointerValue): void;

    /**
     * Puts a B COND instruction.
     */
    putBCondImm(cc: ArmConditionCode, target: NativePointerValue): void;

    /**
     * Puts a B instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBLabel(labelId: string): void;

    /**
     * Puts a B COND instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBCondLabel(cc: ArmConditionCode, labelId: string): void;

    /**
     * Puts a BL instruction.
     */
    putBlImm(target: NativePointerValue): void;

    /**
     * Puts a BLX instruction.
     */
    putBlxImm(target: NativePointerValue): void;

    /**
     * Puts a BL instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBlLabel(labelId: string): void;

    /**
     * Puts a BX instruction.
     */
    putBxReg(reg: ArmRegister): void;

    /**
     * Puts a BLX instruction.
     */
    putBlxReg(reg: ArmRegister): void;

    /**
     * Puts a RET instruction.
     */
    putRet(): void;

    /**
     * Puts an LDR instruction.
     */
    putLdrRegAddress(reg: ArmRegister, address: NativePointerValue): void;

    /**
     * Puts an LDR instruction.
     */
    putLdrRegU32(reg: ArmRegister, val: number): void;

    /**
     * Puts an LDR instruction.
     */
    putLdrRegRegOffset(dstReg: ArmRegister, srcReg: ArmRegister, srcOffset: number | Int64 | UInt64): void;

    /**
     * Puts an LDR COND instruction.
     */
    putLdrCondRegRegOffset(cc: ArmConditionCode, dstReg: ArmRegister, srcReg: ArmRegister, srcOffset: number | Int64 | UInt64): void;

    /**
     * Puts an LDMIA MASK instruction.
     */
    putLdmiaRegMask(reg: ArmRegister, mask: number): void;

    /**
     * Puts a STR instruction.
     */
    putStrRegRegOffset(srcReg: ArmRegister, dstReg: ArmRegister, dstOffset: number | Int64 | UInt64): void;

    /**
     * Puts a STR COND instruction.
     */
    putStrCondRegRegOffset(cc: ArmConditionCode, srcReg: ArmRegister, dstReg: ArmRegister, dstOffset: number | Int64 | UInt64): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegReg(dstReg: ArmRegister, srcReg: ArmRegister): void;

    /**
     * Puts a MOV SHIFT instruction.
     */
    putMovRegRegShift(dstReg: ArmRegister, srcReg: ArmRegister, shift: ArmShifter, shiftValue: number): void;

    /**
     * Puts a MOV CPSR instruction.
     */
    putMovRegCpsr(reg: ArmRegister): void;

    /**
     * Puts a MOV CPSR instruction.
     */
    putMovCpsrReg(reg: ArmRegister): void;

    /**
     * Puts an ADD U16 instruction.
     */
    putAddRegU16(dstReg: ArmRegister, val: number): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegU32(dstReg: ArmRegister, val: number): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegRegImm(dstReg: ArmRegister, srcReg: ArmRegister, immVal: number): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegRegReg(dstReg: ArmRegister, srcReg1: ArmRegister, srcReg2: ArmRegister): void;

    /**
     * Puts an ADD SHIFT instruction.
     */
    putAddRegRegRegShift(dstReg: ArmRegister, srcReg1: ArmRegister, srcReg2: ArmRegister, shift: ArmShifter, shiftValue: number): void;

    /**
     * Puts a SUB U16 instruction.
     */
    putSubRegU16(dstReg: ArmRegister, val: number): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegU32(dstReg: ArmRegister, val: number): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegRegImm(dstReg: ArmRegister, srcReg: ArmRegister, immVal: number): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegRegReg(dstReg: ArmRegister, srcReg1: ArmRegister, srcReg2: ArmRegister): void;

    /**
     * Puts an ANDS instruction.
     */
    putAndsRegRegImm(dstReg: ArmRegister, srcReg: ArmRegister, immVal: number): void;

    /**
     * Puts a CMP instruction.
     */
    putCmpRegImm(dstReg: ArmRegister, immVal: number): void;

    /**
     * Puts a NOP instruction.
     */
    putNop(): void;

    /**
     * Puts an OS/architecture-specific breakpoint instruction.
     */
    putBreakpoint(): void;

    /**
     * Puts a BRK instruction.
     */
    putBrkImm(imm: number): void;

    /**
     * Puts a raw instruction.
     */
    putInstruction(insn: number): void;

    /**
     * Puts raw data.
     */
    putBytes(data: ArrayBuffer | number[] | string): void;
}

interface ArmWriterOptions {
    /**
     * Specifies the initial program counter, which is useful when
     * generating code to a scratch buffer. This is essential when using
     * `Memory.patchCode()` on iOS, which may provide you with a
     * temporary location that later gets mapped into memory at the
     * intended memory location.
     */
    pc?: NativePointer;
}

type ArmCallArgument = ArmRegister | number | UInt64 | Int64 | NativePointerValue;

/**
 * Relocates machine code for arm.
 */
declare class ArmRelocator {
    /**
     * Creates a new code relocator for copying ARM instructions
     * from one memory location to another, taking care to adjust
     * position-dependent instructions accordingly.
     *
     * @param inputCode Source address to copy instructions from.
     * @param output ArmWriter pointed at the desired target memory
     *               address.
     */
    constructor(inputCode: NativePointerValue, output: ArmWriter);

    /**
     * Recycles instance.
     */
    reset(inputCode: NativePointerValue, output: ArmWriter): void;

    /**
     * Eagerly cleans up memory.
     */
    dispose(): void;

    /**
     * Latest `Instruction` read so far. Starts out `null` and changes
     * on every call to `readOne()`.
     */
    input: Instruction | null;

    /**
     * Indicates whether end-of-block has been reached, i.e. we've
     * reached a branch of any kind, like CALL, JMP, BL, RET.
     */
    eob: boolean;

    /**
     * Indicates whether end-of-input has been reached, e.g. we've
     * reached JMP/B/RET, an instruction after which there may or may
     * not be valid code.
     */
    eoi: boolean;

    /**
     * Reads the next instruction into the relocator's internal buffer
     * and returns the number of bytes read so far, including previous
     * calls.
     *
     * You may keep calling this method to keep buffering, or immediately
     * call either `writeOne()` or `skipOne()`. Or, you can buffer up
     * until the desired point and then call `writeAll()`.
     *
     * Returns zero when end-of-input is reached, which means the `eoi`
     * property is now `true`.
     */
    readOne(): number;

    /**
     * Peeks at the next `Instruction` to be written or skipped.
     */
    peekNextWriteInsn(): Instruction | null;

    /**
     * Peeks at the address of the next instruction to be written or skipped.
     */
    peekNextWriteSource(): NativePointer;

    /**
     * Skips the instruction that would have been written next.
     */
    skipOne(): void;

    /**
     * Writes the next buffered instruction.
     */
    writeOne(): boolean;

    /**
     * Writes all buffered instructions.
     */
    writeAll(): void;
}

/**
 * Generates machine code for arm.
 */
declare class ThumbWriter {
    /**
     * Creates a new code writer for generating ARM machine code
     * written directly to memory at `codeAddress`.
     *
     * @param codeAddress Memory address to write generated code to.
     * @param options Options for customizing code generation.
     */
    constructor(codeAddress: NativePointerValue, options?: ThumbWriterOptions);

    /**
     * Recycles instance.
     */
    reset(codeAddress: NativePointerValue, options?: ThumbWriterOptions): void;

    /**
     * Eagerly cleans up memory.
     */
    dispose(): void;

    /**
     * Resolves label references and writes pending data to memory. You
     * should always call this once you've finished generating code. It
     * is usually also desirable to do this between pieces of unrelated
     * code, e.g. when generating multiple functions in one go.
     */
    flush(): void;

    /**
     * Memory location of the first byte of output.
     */
    base: NativePointer;

    /**
     * Memory location of the next byte of output.
     */
    code: NativePointer;

    /**
     * Program counter at the next byte of output.
     */
    pc: NativePointer;

    /**
     * Current offset in bytes.
     */
    offset: number;

    /**
     * Skips `nBytes`.
     */
    skip(nBytes: number): void;

    /**
     * Puts a label at the current position, where `id` is an identifier
     * that may be referenced in past and future `put*Label()` calls.
     */
    putLabel(id: string): void;

    /**
     * Commits the first pending reference to the given label, returning
     * `true` on success. Returns `false` if the given label hasn't been
     * defined yet, or there are no more pending references to it.
     */
    commitLabel(id: string): boolean;

    /**
     * Puts code needed for calling a C function with the specified `args`.
     */
    putCallAddressWithArguments(func: NativePointerValue, args: ArmCallArgument[]): void;

    /**
     * Puts code needed for calling a C function with the specified `args`.
     */
    putCallRegWithArguments(reg: ArmRegister, args: ArmCallArgument[]): void;

    /**
     * Puts a B instruction.
     */
    putBImm(target: NativePointerValue): void;

    /**
     * Puts a B instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBLabel(labelId: string): void;

    /**
     * Puts a B WIDE instruction.
     */
    putBLabelWide(labelId: string): void;

    /**
     * Puts a BX instruction.
     */
    putBxReg(reg: ArmRegister): void;

    /**
     * Puts a BL instruction.
     */
    putBlImm(target: NativePointerValue): void;

    /**
     * Puts a BL instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBlLabel(labelId: string): void;

    /**
     * Puts a BLX instruction.
     */
    putBlxImm(target: NativePointerValue): void;

    /**
     * Puts a BLX instruction.
     */
    putBlxReg(reg: ArmRegister): void;

    /**
     * Puts a CMP instruction.
     */
    putCmpRegImm(reg: ArmRegister, immValue: number): void;

    /**
     * Puts a BEQ instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBeqLabel(labelId: string): void;

    /**
     * Puts a BNE instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBneLabel(labelId: string): void;

    /**
     * Puts a B COND instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBCondLabel(cc: ArmConditionCode, labelId: string): void;

    /**
     * Puts a B COND WIDE instruction.
     */
    putBCondLabelWide(cc: ArmConditionCode, labelId: string): void;

    /**
     * Puts a CBZ instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putCbzRegLabel(reg: ArmRegister, labelId: string): void;

    /**
     * Puts a CBNZ instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putCbnzRegLabel(reg: ArmRegister, labelId: string): void;

    /**
     * Puts a PUSH instruction with the specified registers.
     */
    putPushRegs(regs: ArmRegister[]): void;

    /**
     * Puts a POP instruction with the specified registers.
     */
    putPopRegs(regs: ArmRegister[]): void;

    /**
     * Puts an LDR instruction.
     */
    putLdrRegAddress(reg: ArmRegister, address: NativePointerValue): void;

    /**
     * Puts an LDR instruction.
     */
    putLdrRegU32(reg: ArmRegister, val: number): void;

    /**
     * Puts an LDR instruction.
     */
    putLdrRegReg(dstReg: ArmRegister, srcReg: ArmRegister): void;

    /**
     * Puts an LDR instruction.
     */
    putLdrRegRegOffset(dstReg: ArmRegister, srcReg: ArmRegister, srcOffset: number | Int64 | UInt64): void;

    /**
     * Puts an LDRB instruction.
     */
    putLdrbRegReg(dstReg: ArmRegister, srcReg: ArmRegister): void;

    /**
     * Puts a VLDR instruction.
     */
    putVldrRegRegOffset(dstReg: ArmRegister, srcReg: ArmRegister, srcOffset: number | Int64 | UInt64): void;

    /**
     * Puts an LDMIA MASK instruction.
     */
    putLdmiaRegMask(reg: ArmRegister, mask: number): void;

    /**
     * Puts a STR instruction.
     */
    putStrRegReg(srcReg: ArmRegister, dstReg: ArmRegister): void;

    /**
     * Puts a STR instruction.
     */
    putStrRegRegOffset(srcReg: ArmRegister, dstReg: ArmRegister, dstOffset: number | Int64 | UInt64): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegReg(dstReg: ArmRegister, srcReg: ArmRegister): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegU8(dstReg: ArmRegister, immValue: number): void;

    /**
     * Puts a MOV CPSR instruction.
     */
    putMovRegCpsr(reg: ArmRegister): void;

    /**
     * Puts a MOV CPSR instruction.
     */
    putMovCpsrReg(reg: ArmRegister): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegImm(dstReg: ArmRegister, immValue: number | Int64 | UInt64): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegReg(dstReg: ArmRegister, srcReg: ArmRegister): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegRegReg(dstReg: ArmRegister, leftReg: ArmRegister, rightReg: ArmRegister): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegRegImm(dstReg: ArmRegister, leftReg: ArmRegister, rightValue: number | Int64 | UInt64): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegImm(dstReg: ArmRegister, immValue: number | Int64 | UInt64): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegReg(dstReg: ArmRegister, srcReg: ArmRegister): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegRegReg(dstReg: ArmRegister, leftReg: ArmRegister, rightReg: ArmRegister): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegRegImm(dstReg: ArmRegister, leftReg: ArmRegister, rightValue: number | Int64 | UInt64): void;

    /**
     * Puts an AND instruction.
     */
    putAndRegRegImm(dstReg: ArmRegister, leftReg: ArmRegister, rightValue: number | Int64 | UInt64): void;

    /**
     * Puts a LSLS instruction.
     */
    putLslsRegRegImm(dstReg: ArmRegister, leftReg: ArmRegister, rightValue: number): void;

    /**
     * Puts a LSRS instruction.
     */
    putLsrsRegRegImm(dstReg: ArmRegister, leftReg: ArmRegister, rightValue: number): void;

    /**
     * Puts a MRS instruction.
     */
    putMrsRegReg(dstReg: ArmRegister, srcReg: ArmSystemRegister): void;

    /**
     * Puts a MSR instruction.
     */
    putMsrRegReg(dstReg: ArmSystemRegister, srcReg: ArmRegister): void;

    /**
     * Puts a NOP instruction.
     */
    putNop(): void;

    /**
     * Puts a BKPT instruction.
     */
    putBkptImm(imm: number): void;

    /**
     * Puts an OS/architecture-specific breakpoint instruction.
     */
    putBreakpoint(): void;

    /**
     * Puts a raw instruction.
     */
    putInstruction(insn: number): void;

    /**
     * Puts a raw Thumb-2 instruction.
     */
    putInstructionWide(upper: number, lower: number): void;

    /**
     * Puts raw data.
     */
    putBytes(data: ArrayBuffer | number[] | string): void;
}

interface ThumbWriterOptions {
    /**
     * Specifies the initial program counter, which is useful when
     * generating code to a scratch buffer. This is essential when using
     * `Memory.patchCode()` on iOS, which may provide you with a
     * temporary location that later gets mapped into memory at the
     * intended memory location.
     */
    pc?: NativePointer;
}

/**
 * Relocates machine code for arm.
 */
declare class ThumbRelocator {
    /**
     * Creates a new code relocator for copying ARM instructions
     * from one memory location to another, taking care to adjust
     * position-dependent instructions accordingly.
     *
     * @param inputCode Source address to copy instructions from.
     * @param output ThumbWriter pointed at the desired target memory
     *               address.
     */
    constructor(inputCode: NativePointerValue, output: ThumbWriter);

    /**
     * Recycles instance.
     */
    reset(inputCode: NativePointerValue, output: ThumbWriter): void;

    /**
     * Eagerly cleans up memory.
     */
    dispose(): void;

    /**
     * Latest `Instruction` read so far. Starts out `null` and changes
     * on every call to `readOne()`.
     */
    input: Instruction | null;

    /**
     * Indicates whether end-of-block has been reached, i.e. we've
     * reached a branch of any kind, like CALL, JMP, BL, RET.
     */
    eob: boolean;

    /**
     * Indicates whether end-of-input has been reached, e.g. we've
     * reached JMP/B/RET, an instruction after which there may or may
     * not be valid code.
     */
    eoi: boolean;

    /**
     * Reads the next instruction into the relocator's internal buffer
     * and returns the number of bytes read so far, including previous
     * calls.
     *
     * You may keep calling this method to keep buffering, or immediately
     * call either `writeOne()` or `skipOne()`. Or, you can buffer up
     * until the desired point and then call `writeAll()`.
     *
     * Returns zero when end-of-input is reached, which means the `eoi`
     * property is now `true`.
     */
    readOne(): number;

    /**
     * Peeks at the next `Instruction` to be written or skipped.
     */
    peekNextWriteInsn(): Instruction | null;

    /**
     * Peeks at the address of the next instruction to be written or skipped.
     */
    peekNextWriteSource(): NativePointer;

    /**
     * Skips the instruction that would have been written next.
     */
    skipOne(): void;

    /**
     * Writes the next buffered instruction.
     */
    writeOne(): boolean;

    /**
     * Copies out the next buffered instruction without advancing the
     * output cursor, allowing the same instruction to be written out
     * multiple times.
     */
    copyOne(): boolean;

    /**
     * Writes all buffered instructions.
     */
    writeAll(): void;
}

type ArmRegister =
    | "r0"
    | "r1"
    | "r2"
    | "r3"
    | "r4"
    | "r5"
    | "r6"
    | "r7"
    | "r8"
    | "r9"
    | "r10"
    | "r11"
    | "r12"
    | "r13"
    | "r14"
    | "r15"
    | "sp"
    | "lr"
    | "sb"
    | "sl"
    | "fp"
    | "ip"
    | "pc"
    ;

type ArmSystemRegister = "apsr-nzcvq";

type ArmConditionCode =
    | "eq"
    | "ne"
    | "hs"
    | "lo"
    | "mi"
    | "pl"
    | "vs"
    | "vc"
    | "hi"
    | "ls"
    | "ge"
    | "lt"
    | "gt"
    | "le"
    | "al"
    ;

type ArmShifter =
    | "asr"
    | "lsl"
    | "lsr"
    | "ror"
    | "rrx"
    | "asr-reg"
    | "lsl-reg"
    | "lsr-reg"
    | "ror-reg"
    | "rrx-reg"
    ;

/**
 * Generates machine code for arm64.
 */
declare class Arm64Writer {
    /**
     * Creates a new code writer for generating AArch64 machine code
     * written directly to memory at `codeAddress`.
     *
     * @param codeAddress Memory address to write generated code to.
     * @param options Options for customizing code generation.
     */
    constructor(codeAddress: NativePointerValue, options?: Arm64WriterOptions);

    /**
     * Recycles instance.
     */
    reset(codeAddress: NativePointerValue, options?: Arm64WriterOptions): void;

    /**
     * Eagerly cleans up memory.
     */
    dispose(): void;

    /**
     * Resolves label references and writes pending data to memory. You
     * should always call this once you've finished generating code. It
     * is usually also desirable to do this between pieces of unrelated
     * code, e.g. when generating multiple functions in one go.
     */
    flush(): void;

    /**
     * Memory location of the first byte of output.
     */
    base: NativePointer;

    /**
     * Memory location of the next byte of output.
     */
    code: NativePointer;

    /**
     * Program counter at the next byte of output.
     */
    pc: NativePointer;

    /**
     * Current offset in bytes.
     */
    offset: number;

    /**
     * Skips `nBytes`.
     */
    skip(nBytes: number): void;

    /**
     * Puts a label at the current position, where `id` is an identifier
     * that may be referenced in past and future `put*Label()` calls.
     */
    putLabel(id: string): void;

    /**
     * Puts code needed for calling a C function with the specified `args`.
     */
    putCallAddressWithArguments(func: NativePointerValue, args: Arm64CallArgument[]): void;

    /**
     * Puts code needed for calling a C function with the specified `args`.
     */
    putCallRegWithArguments(reg: Arm64Register, args: Arm64CallArgument[]): void;

    /**
     * Puts code needed for branching/jumping to the given address.
     */
    putBranchAddress(address: NativePointerValue): void;

    /**
     * Determines whether a direct branch is possible between the two
     * given memory locations.
     */
    canBranchDirectlyBetween(from: NativePointerValue, to: NativePointerValue): boolean;

    /**
     * Puts a B instruction.
     */
    putBImm(address: NativePointerValue): void;

    /**
     * Puts a B instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBLabel(labelId: string): void;

    /**
     * Puts a B COND instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBCondLabel(cc: Arm64ConditionCode, labelId: string): void;

    /**
     * Puts a BL instruction.
     */
    putBlImm(address: NativePointerValue): void;

    /**
     * Puts a BL instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBlLabel(labelId: string): void;

    /**
     * Puts a BR instruction.
     */
    putBrReg(reg: Arm64Register): void;

    /**
     * Puts a BR instruction expecting a raw pointer without
     * any authentication bits.
     */
    putBrRegNoAuth(reg: Arm64Register): void;

    /**
     * Puts a BLR instruction.
     */
    putBlrReg(reg: Arm64Register): void;

    /**
     * Puts a BLR instruction expecting a raw pointer without
     * any authentication bits.
     */
    putBlrRegNoAuth(reg: Arm64Register): void;

    /**
     * Puts a RET instruction.
     */
    putRet(): void;

    /**
     * Puts a CBZ instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putCbzRegLabel(reg: Arm64Register, labelId: string): void;

    /**
     * Puts a CBNZ instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putCbnzRegLabel(reg: Arm64Register, labelId: string): void;

    /**
     * Puts a TBZ instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putTbzRegImmLabel(reg: Arm64Register, bit: number, labelId: string): void;

    /**
     * Puts a TBNZ instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putTbnzRegImmLabel(reg: Arm64Register, bit: number, labelId: string): void;

    /**
     * Puts a PUSH instruction.
     */
    putPushRegReg(regA: Arm64Register, regB: Arm64Register): void;

    /**
     * Puts a POP instruction.
     */
    putPopRegReg(regA: Arm64Register, regB: Arm64Register): void;

    /**
     * Puts code needed for pushing all X registers on the stack.
     */
    putPushAllXRegisters(): void;

    /**
     * Puts code needed for popping all X registers off the stack.
     */
    putPopAllXRegisters(): void;

    /**
     * Puts code needed for pushing all Q registers on the stack.
     */
    putPushAllQRegisters(): void;

    /**
     * Puts code needed for popping all Q registers off the stack.
     */
    putPopAllQRegisters(): void;

    /**
     * Puts an LDR instruction.
     */
    putLdrRegAddress(reg: Arm64Register, address: NativePointerValue): void;

    /**
     * Puts an LDR instruction.
     */
    putLdrRegU64(reg: Arm64Register, val: number | UInt64): void;

    /**
     * Puts an LDR instruction with a dangling data reference,
     * returning an opaque ref value that should be passed to `putLdrRegValue()`
     * at the desired location.
     */
    putLdrRegRef(reg: Arm64Register): number;

    /**
     * Puts the value and updates the LDR instruction
     * from a previous `putLdrRegRef()`.
     */
    putLdrRegValue(ref: number, value: NativePointerValue): void;

    /**
     * Puts an LDR instruction.
     */
    putLdrRegRegOffset(dstReg: Arm64Register, srcReg: Arm64Register, srcOffset: number | Int64 | UInt64): void;

    /**
     * Puts an LDRSW instruction.
     */
    putLdrswRegRegOffset(dstReg: Arm64Register, srcReg: Arm64Register, srcOffset: number | Int64 | UInt64): void;

    /**
     * Puts an ADRP instruction.
     */
    putAdrpRegAddress(reg: Arm64Register, address: NativePointerValue): void;

    /**
     * Puts a STR instruction.
     */
    putStrRegRegOffset(srcReg: Arm64Register, dstReg: Arm64Register, dstOffset: number | Int64 | UInt64): void;

    /**
     * Puts an LDP instruction.
     */
    putLdpRegRegRegOffset(regA: Arm64Register, regB: Arm64Register, regSrc: Arm64Register, srcOffset: number | Int64 | UInt64, mode: Arm64IndexMode): void;

    /**
     * Puts a STP instruction.
     */
    putStpRegRegRegOffset(regA: Arm64Register, regB: Arm64Register, regDst: Arm64Register, dstOffset: number | Int64 | UInt64, mode: Arm64IndexMode): void;

    /**
     * Puts a MOV instruction.
     */
    putMovRegReg(dstReg: Arm64Register, srcReg: Arm64Register): void;

    /**
     * Puts an UXTW instruction.
     */
    putUxtwRegReg(dstReg: Arm64Register, srcReg: Arm64Register): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegRegImm(dstReg: Arm64Register, leftReg: Arm64Register, rightValue: number | Int64 | UInt64): void;

    /**
     * Puts an ADD instruction.
     */
    putAddRegRegReg(dstReg: Arm64Register, leftReg: Arm64Register, rightReg: Arm64Register): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegRegImm(dstReg: Arm64Register, leftReg: Arm64Register, rightValue: number | Int64 | UInt64): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegRegReg(dstReg: Arm64Register, leftReg: Arm64Register, rightReg: Arm64Register): void;

    /**
     * Puts an AND instruction.
     */
    putAndRegRegImm(dstReg: Arm64Register, leftReg: Arm64Register, rightValue: number | Int64 | UInt64): void;

    /**
     * Puts a TST instruction.
     */
    putTstRegImm(reg: Arm64Register, immValue: number | UInt64): void;

    /**
     * Puts a CMP instruction.
     */
    putCmpRegReg(regA: Arm64Register, regB: Arm64Register): void;

    /**
     * Puts an XPACI instruction.
     */
    putXpaciReg(reg: Arm64Register): void;

    /**
     * Puts a NOP instruction.
     */
    putNop(): void;

    /**
     * Puts a BRK instruction.
     */
    putBrkImm(imm: number): void;

    /**
     * Puts a raw instruction.
     */
    putInstruction(insn: number): void;

    /**
     * Puts raw data.
     */
    putBytes(data: ArrayBuffer | number[] | string): void;

    /**
     * Signs the given pointer value.
     */
    sign(value: NativePointerValue): NativePointer;
}

interface Arm64WriterOptions {
    /**
     * Specifies the initial program counter, which is useful when
     * generating code to a scratch buffer. This is essential when using
     * `Memory.patchCode()` on iOS, which may provide you with a
     * temporary location that later gets mapped into memory at the
     * intended memory location.
     */
    pc?: NativePointer;
}

type Arm64CallArgument = Arm64Register | number | UInt64 | Int64 | NativePointerValue;

/**
 * Relocates machine code for arm64.
 */
declare class Arm64Relocator {
    /**
     * Creates a new code relocator for copying AArch64 instructions
     * from one memory location to another, taking care to adjust
     * position-dependent instructions accordingly.
     *
     * @param inputCode Source address to copy instructions from.
     * @param output Arm64Writer pointed at the desired target memory
     *               address.
     */
    constructor(inputCode: NativePointerValue, output: Arm64Writer);

    /**
     * Recycles instance.
     */
    reset(inputCode: NativePointerValue, output: Arm64Writer): void;

    /**
     * Eagerly cleans up memory.
     */
    dispose(): void;

    /**
     * Latest `Instruction` read so far. Starts out `null` and changes
     * on every call to `readOne()`.
     */
    input: Instruction | null;

    /**
     * Indicates whether end-of-block has been reached, i.e. we've
     * reached a branch of any kind, like CALL, JMP, BL, RET.
     */
    eob: boolean;

    /**
     * Indicates whether end-of-input has been reached, e.g. we've
     * reached JMP/B/RET, an instruction after which there may or may
     * not be valid code.
     */
    eoi: boolean;

    /**
     * Reads the next instruction into the relocator's internal buffer
     * and returns the number of bytes read so far, including previous
     * calls.
     *
     * You may keep calling this method to keep buffering, or immediately
     * call either `writeOne()` or `skipOne()`. Or, you can buffer up
     * until the desired point and then call `writeAll()`.
     *
     * Returns zero when end-of-input is reached, which means the `eoi`
     * property is now `true`.
     */
    readOne(): number;

    /**
     * Peeks at the next `Instruction` to be written or skipped.
     */
    peekNextWriteInsn(): Instruction | null;

    /**
     * Peeks at the address of the next instruction to be written or skipped.
     */
    peekNextWriteSource(): NativePointer;

    /**
     * Skips the instruction that would have been written next.
     */
    skipOne(): void;

    /**
     * Writes the next buffered instruction.
     */
    writeOne(): boolean;

    /**
     * Writes all buffered instructions.
     */
    writeAll(): void;
}

type Arm64Register =
    | "x0"
    | "x1"
    | "x2"
    | "x3"
    | "x4"
    | "x5"
    | "x6"
    | "x7"
    | "x8"
    | "x9"
    | "x10"
    | "x11"
    | "x12"
    | "x13"
    | "x14"
    | "x15"
    | "x16"
    | "x17"
    | "x18"
    | "x19"
    | "x20"
    | "x21"
    | "x22"
    | "x23"
    | "x24"
    | "x25"
    | "x26"
    | "x27"
    | "x28"
    | "x29"
    | "x30"
    | "w0"
    | "w1"
    | "w2"
    | "w3"
    | "w4"
    | "w5"
    | "w6"
    | "w7"
    | "w8"
    | "w9"
    | "w10"
    | "w11"
    | "w12"
    | "w13"
    | "w14"
    | "w15"
    | "w16"
    | "w17"
    | "w18"
    | "w19"
    | "w20"
    | "w21"
    | "w22"
    | "w23"
    | "w24"
    | "w25"
    | "w26"
    | "w27"
    | "w28"
    | "w29"
    | "w30"
    | "sp"
    | "lr"
    | "fp"
    | "wsp"
    | "wzr"
    | "xzr"
    | "nzcv"
    | "ip0"
    | "ip1"
    | "s0"
    | "s1"
    | "s2"
    | "s3"
    | "s4"
    | "s5"
    | "s6"
    | "s7"
    | "s8"
    | "s9"
    | "s10"
    | "s11"
    | "s12"
    | "s13"
    | "s14"
    | "s15"
    | "s16"
    | "s17"
    | "s18"
    | "s19"
    | "s20"
    | "s21"
    | "s22"
    | "s23"
    | "s24"
    | "s25"
    | "s26"
    | "s27"
    | "s28"
    | "s29"
    | "s30"
    | "s31"
    | "d0"
    | "d1"
    | "d2"
    | "d3"
    | "d4"
    | "d5"
    | "d6"
    | "d7"
    | "d8"
    | "d9"
    | "d10"
    | "d11"
    | "d12"
    | "d13"
    | "d14"
    | "d15"
    | "d16"
    | "d17"
    | "d18"
    | "d19"
    | "d20"
    | "d21"
    | "d22"
    | "d23"
    | "d24"
    | "d25"
    | "d26"
    | "d27"
    | "d28"
    | "d29"
    | "d30"
    | "d31"
    | "q0"
    | "q1"
    | "q2"
    | "q3"
    | "q4"
    | "q5"
    | "q6"
    | "q7"
    | "q8"
    | "q9"
    | "q10"
    | "q11"
    | "q12"
    | "q13"
    | "q14"
    | "q15"
    | "q16"
    | "q17"
    | "q18"
    | "q19"
    | "q20"
    | "q21"
    | "q22"
    | "q23"
    | "q24"
    | "q25"
    | "q26"
    | "q27"
    | "q28"
    | "q29"
    | "q30"
    | "q31"
    ;

type Arm64ConditionCode =
    | "eq"
    | "ne"
    | "hs"
    | "lo"
    | "mi"
    | "pl"
    | "vs"
    | "vc"
    | "hi"
    | "ls"
    | "ge"
    | "lt"
    | "gt"
    | "le"
    | "al"
    | "nv"
    ;

type Arm64IndexMode = "post-adjust" | "signed-offset" | "pre-adjust";

/**
 * Generates machine code for mips.
 */
declare class MipsWriter {
    /**
     * Creates a new code writer for generating MIPS machine code
     * written directly to memory at `codeAddress`.
     *
     * @param codeAddress Memory address to write generated code to.
     * @param options Options for customizing code generation.
     */
    constructor(codeAddress: NativePointerValue, options?: MipsWriterOptions);

    /**
     * Recycles instance.
     */
    reset(codeAddress: NativePointerValue, options?: MipsWriterOptions): void;

    /**
     * Eagerly cleans up memory.
     */
    dispose(): void;

    /**
     * Resolves label references and writes pending data to memory. You
     * should always call this once you've finished generating code. It
     * is usually also desirable to do this between pieces of unrelated
     * code, e.g. when generating multiple functions in one go.
     */
    flush(): void;

    /**
     * Memory location of the first byte of output.
     */
    base: NativePointer;

    /**
     * Memory location of the next byte of output.
     */
    code: NativePointer;

    /**
     * Program counter at the next byte of output.
     */
    pc: NativePointer;

    /**
     * Current offset in bytes.
     */
    offset: number;

    /**
     * Skips `nBytes`.
     */
    skip(nBytes: number): void;

    /**
     * Puts a label at the current position, where `id` is an identifier
     * that may be referenced in past and future `put*Label()` calls.
     */
    putLabel(id: string): void;

    /**
     * Puts code needed for calling a C function with the specified `args`.
     */
    putCallAddressWithArguments(func: NativePointerValue, args: MipsCallArgument[]): void;

    /**
     * Puts code needed for calling a C function with the specified `args`.
     */
    putCallRegWithArguments(reg: MipsRegister, args: MipsCallArgument[]): void;

    /**
     * Puts a J instruction.
     */
    putJAddress(address: NativePointerValue): void;

    /**
     * Puts a J WITHOUT NOP instruction.
     */
    putJAddressWithoutNop(address: NativePointerValue): void;

    /**
     * Puts a J instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putJLabel(labelId: string): void;

    /**
     * Puts a JR instruction.
     */
    putJrReg(reg: MipsRegister): void;

    /**
     * Puts a JAL instruction.
     */
    putJalAddress(address: number): void;

    /**
     * Puts a JALR instruction.
     */
    putJalrReg(reg: MipsRegister): void;

    /**
     * Puts a B instruction.
     */
    putBOffset(offset: number): void;

    /**
     * Puts a BEQ instruction referencing `labelId`, defined by a past
     * or future `putLabel()`.
     */
    putBeqRegRegLabel(rightReg: MipsRegister, leftReg: MipsRegister, labelId: string): void;

    /**
     * Puts a RET instruction.
     */
    putRet(): void;

    /**
     * Puts a LA instruction.
     */
    putLaRegAddress(reg: MipsRegister, address: NativePointerValue): void;

    /**
     * Puts a LUI instruction.
     */
    putLuiRegImm(reg: MipsRegister, imm: number): void;

    /**
     * Puts a DSLL instruction.
     */
    putDsllRegReg(dstReg: MipsRegister, srcReg: MipsRegister, amount: number): void;

    /**
     * Puts an ORI instruction.
     */
    putOriRegRegImm(rt: MipsRegister, rs: MipsRegister, imm: number): void;

    /**
     * Puts an LD instruction.
     */
    putLdRegRegOffset(dstReg: MipsRegister, srcReg: MipsRegister, srcOffset: number | Int64 | UInt64): void;

    /**
     * Puts a LW instruction.
     */
    putLwRegRegOffset(dstReg: MipsRegister, srcReg: MipsRegister, srcOffset: number | Int64 | UInt64): void;

    /**
     * Puts a SW instruction.
     */
    putSwRegRegOffset(srcReg: MipsRegister, dstReg: MipsRegister, dstOffset: number | Int64 | UInt64): void;

    /**
     * Puts a MOVE instruction.
     */
    putMoveRegReg(dstReg: MipsRegister, srcReg: MipsRegister): void;

    /**
     * Puts an ADDU instruction.
     */
    putAdduRegRegReg(dstReg: MipsRegister, leftReg: MipsRegister, rightReg: MipsRegister): void;

    /**
     * Puts an ADDI instruction.
     */
    putAddiRegRegImm(dstReg: MipsRegister, leftReg: MipsRegister, imm: number): void;

    /**
     * Puts an ADDI instruction.
     */
    putAddiRegImm(dstReg: MipsRegister, imm: number): void;

    /**
     * Puts a SUB instruction.
     */
    putSubRegRegImm(dstReg: MipsRegister, leftReg: MipsRegister, imm: number): void;

    /**
     * Puts a PUSH instruction.
     */
    putPushReg(reg: MipsRegister): void;

    /**
     * Puts a POP instruction.
     */
    putPopReg(reg: MipsRegister): void;

    /**
     * Puts a MFHI instruction.
     */
    putMfhiReg(reg: MipsRegister): void;

    /**
     * Puts a MFLO instruction.
     */
    putMfloReg(reg: MipsRegister): void;

    /**
     * Puts a MTHI instruction.
     */
    putMthiReg(reg: MipsRegister): void;

    /**
     * Puts a MTLO instruction.
     */
    putMtloReg(reg: MipsRegister): void;

    /**
     * Puts a NOP instruction.
     */
    putNop(): void;

    /**
     * Puts a BREAK instruction.
     */
    putBreak(): void;

    /**
     * Puts a minimal sized trampoline for vectoring to the given address.
     */
    putPrologueTrampoline(reg: MipsRegister, address: NativePointerValue): void;

    /**
     * Puts a raw instruction.
     */
    putInstruction(insn: number): void;

    /**
     * Puts raw data.
     */
    putBytes(data: ArrayBuffer | number[] | string): void;
}

interface MipsWriterOptions {
    /**
     * Specifies the initial program counter, which is useful when
     * generating code to a scratch buffer. This is essential when using
     * `Memory.patchCode()` on iOS, which may provide you with a
     * temporary location that later gets mapped into memory at the
     * intended memory location.
     */
    pc?: NativePointer;
}

type MipsCallArgument = MipsRegister | number | UInt64 | Int64 | NativePointerValue;

/**
 * Relocates machine code for mips.
 */
declare class MipsRelocator {
    /**
     * Creates a new code relocator for copying MIPS instructions
     * from one memory location to another, taking care to adjust
     * position-dependent instructions accordingly.
     *
     * @param inputCode Source address to copy instructions from.
     * @param output MipsWriter pointed at the desired target memory
     *               address.
     */
    constructor(inputCode: NativePointerValue, output: MipsWriter);

    /**
     * Recycles instance.
     */
    reset(inputCode: NativePointerValue, output: MipsWriter): void;

    /**
     * Eagerly cleans up memory.
     */
    dispose(): void;

    /**
     * Latest `Instruction` read so far. Starts out `null` and changes
     * on every call to `readOne()`.
     */
    input: Instruction | null;

    /**
     * Indicates whether end-of-block has been reached, i.e. we've
     * reached a branch of any kind, like CALL, JMP, BL, RET.
     */
    eob: boolean;

    /**
     * Indicates whether end-of-input has been reached, e.g. we've
     * reached JMP/B/RET, an instruction after which there may or may
     * not be valid code.
     */
    eoi: boolean;

    /**
     * Reads the next instruction into the relocator's internal buffer
     * and returns the number of bytes read so far, including previous
     * calls.
     *
     * You may keep calling this method to keep buffering, or immediately
     * call either `writeOne()` or `skipOne()`. Or, you can buffer up
     * until the desired point and then call `writeAll()`.
     *
     * Returns zero when end-of-input is reached, which means the `eoi`
     * property is now `true`.
     */
    readOne(): number;

    /**
     * Peeks at the next `Instruction` to be written or skipped.
     */
    peekNextWriteInsn(): Instruction | null;

    /**
     * Peeks at the address of the next instruction to be written or skipped.
     */
    peekNextWriteSource(): NativePointer;

    /**
     * Skips the instruction that would have been written next.
     */
    skipOne(): void;

    /**
     * Writes the next buffered instruction.
     */
    writeOne(): boolean;

    /**
     * Writes all buffered instructions.
     */
    writeAll(): void;
}

type MipsRegister =
    | "v0"
    | "v1"
    | "a0"
    | "a1"
    | "a2"
    | "a3"
    | "t0"
    | "t1"
    | "t2"
    | "t3"
    | "t4"
    | "t5"
    | "t6"
    | "t7"
    | "s0"
    | "s1"
    | "s2"
    | "s3"
    | "s4"
    | "s5"
    | "s6"
    | "s7"
    | "t8"
    | "t9"
    | "k0"
    | "k1"
    | "gp"
    | "sp"
    | "fp"
    | "s8"
    | "ra"
    | "hi"
    | "lo"
    | "zero"
    | "at"
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
    | "27"
    | "28"
    | "29"
    | "30"
    | "31"
    ;
