// This needs to be global to avoid TS2403 in case lib.dom.d.ts is present in the same build
interface Console {
    Console: NodeJS.ConsoleConstructor;
    /**
     * A simple assertion test that verifies whether `value` is truthy.
     * If it is not, an `AssertionError` is thrown.
     * If provided, the error `message` is formatted using `util.format()` and used as the error message.
     */
    assert(value: any, message?: string, ...optionalParams: any[]): void;
    /**
     * When `stdout` is a TTY, calling `console.clear()` will attempt to clear the TTY.
     * When `stdout` is not a TTY, this method does nothing.
     */
    clear(): void;
    /**
     * Maintains an internal counter specific to `label` and outputs to `stdout` the number of times `console.count()` has been called with the given `label`.
     */
    count(label?: string): void;
    /**
     * Resets the internal counter specific to `label`.
     */
    countReset(label?: string): void;
    /**
     * The `console.debug()` function is an alias for {@link console.log()}.
     */
    debug(message?: any, ...optionalParams: any[]): void;
    /**
     * Uses {@link util.inspect()} on `obj` and prints the resulting string to `stdout`.
     * This function bypasses any custom `inspect()` function defined on `obj`.
     */
    dir(obj: any, options?: NodeJS.InspectOptions): void;
    /**
     * This method calls {@link console.log()} passing it the arguments received. Please note that this method does not produce any XML formatting
     */
    dirxml(...data: any[]): void;
    /**
     * Prints to `stderr` with newline.
     */
    error(message?: any, ...optionalParams: any[]): void;
    /**
     * Increases indentation of subsequent lines by two spaces.
     * If one or more `label`s are provided, those are printed first without the additional indentation.
     */
    group(...label: any[]): void;
    /**
     * The `console.groupCollapsed()` function is an alias for {@link console.group()}.
     */
    groupCollapsed(...label: any[]): void;
    /**
     * Decreases indentation of subsequent lines by two spaces.
     */
    groupEnd(): void;
    /**
     * The {@link console.info()} function is an alias for {@link console.log()}.
     */
    info(message?: any, ...optionalParams: any[]): void;
    /**
     * Prints to `stdout` with newline.
     */
    log(message?: any, ...optionalParams: any[]): void;
    /**
     * This method does not display anything unless used in the inspector.
     *  Prints to `stdout` the array `array` formatted as a table.
     */
    table(tabularData: any, properties?: string[]): void;
    /**
     * Starts a timer that can be used to compute the duration of an operation. Timers are identified by a unique `label`.
     */
    time(label?: string): void;
    /**
     * Stops a timer that was previously started by calling {@link console.time()} and prints the result to `stdout`.
     */
    timeEnd(label?: string): void;
    /**
     * For a timer that was previously started by calling {@link console.time()}, prints the elapsed time and other `data` arguments to `stdout`.
     */
    timeLog(label?: string, ...data: any[]): void;
    /**
     * Prints to `stderr` the string 'Trace :', followed by the {@link util.format()} formatted message and stack trace to the current position in the code.
     */
    trace(message?: any, ...optionalParams: any[]): void;
    /**
     * The {@link console.warn()} function is an alias for {@link console.error()}.
     */
    warn(message?: any, ...optionalParams: any[]): void;

    // --- Inspector mode only ---
    /**
     * This method does not display anything unless used in the inspector.
     *  Starts a JavaScript CPU profile with an optional label.
     */
    profile(label?: string): void;
    /**
     * This method does not display anything unless used in the inspector.
     *  Stops the current JavaScript CPU profiling session if one has been started and prints the report to the Profiles panel of the inspector.
     */
    profileEnd(label?: string): void;
    /**
     * This method does not display anything unless used in the inspector.
     *  Adds an event with the label `label` to the Timeline panel of the inspector.
     */
    timeStamp(label?: string): void;
}

// Declare "static" methods in Error
interface ErrorConstructor {
    /** Create .stack property on a target object */
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;

    /**
     * Optional override for formatting stack traces
     *
     * @see https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces
     */
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;

    stackTraceLimit: number;
}

// Node.js ESNEXT support
interface String {
    /** Removes whitespace from the left end of a string. */
    trimLeft(): string;
    /** Removes whitespace from the right end of a string. */
    trimRight(): string;
}

interface ImportMeta {
    url: string;
}

/*-----------------------------------------------*
 *                                               *
 *                   GLOBAL                      *
 *                                               *
 ------------------------------------------------*/

// For backwards compability
interface NodeRequire extends NodeJS.Require {}
interface RequireResolve extends NodeJS.RequireResolve {}
interface NodeModule extends NodeJS.Module {}

declare var process: NodeJS.Process;
declare var console: Console;

declare var __filename: string;
declare var __dirname: string;

declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout;
declare namespace setTimeout {
    function __promisify__(ms: number): Promise<void>;
    function __promisify__<T>(ms: number, value: T): Promise<T>;
}
declare function clearTimeout(timeoutId: NodeJS.Timeout): void;
declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout;
declare function clearInterval(intervalId: NodeJS.Timeout): void;
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate;
declare namespace setImmediate {
    function __promisify__(): Promise<void>;
    function __promisify__<T>(value: T): Promise<T>;
}
declare function clearImmediate(immediateId: NodeJS.Immediate): void;

declare function queueMicrotask(callback: () => void): void;

declare var require: NodeRequire;
declare var module: NodeModule;

// Same as module.exports
declare var exports: any;

/*----------------------------------------------*
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
*-----------------------------------------------*/
declare namespace NodeJS {
    interface InspectOptions {
        /**
         * If set to `true`, getters are going to be
         * inspected as well. If set to `'get'` only getters without setter are going
         * to be inspected. If set to `'set'` only getters having a corresponding
         * setter are going to be inspected. This might cause side effects depending on
         * the getter function.
         * @default `false`
         */
        getters?: 'get' | 'set' | boolean;
        showHidden?: boolean;
        /**
         * @default 2
         */
        depth?: number | null;
        colors?: boolean;
        customInspect?: boolean;
        showProxy?: boolean;
        maxArrayLength?: number | null;
        /**
         * Specifies the maximum number of characters to
         * include when formatting. Set to `null` or `Infinity` to show all elements.
         * Set to `0` or negative to show no characters.
         * @default Infinity
         */
        maxStringLength?: number | null;
        breakLength?: number;
        /**
         * Setting this to `false` causes each object key
         * to be displayed on a new line. It will also add new lines to text that is
         * longer than `breakLength`. If set to a number, the most `n` inner elements
         * are united on a single line as long as all properties fit into
         * `breakLength`. Short array elements are also grouped together. Note that no
         * text will be reduced below 16 characters, no matter the `breakLength` size.
         * For more information, see the example below.
         * @default `true`
         */
        compact?: boolean | number;
        sorted?: boolean | ((a: string, b: string) => number);
    }

    interface ConsoleConstructorOptions {
        stdout: WritableStream;
        stderr?: WritableStream;
        ignoreErrors?: boolean;
        colorMode?: boolean | 'auto';
        inspectOptions?: InspectOptions;
    }

    interface ConsoleConstructor {
        prototype: Console;
        new(stdout: WritableStream, stderr?: WritableStream, ignoreErrors?: boolean): Console;
        new(options: ConsoleConstructorOptions): Console;
    }

    interface CallSite {
        /**
         * Value of "this"
         */
        getThis(): any;

        /**
         * Type of "this" as a string.
         * This is the name of the function stored in the constructor field of
         * "this", if available.  Otherwise the object's [[Class]] internal
         * property.
         */
        getTypeName(): string | null;

        /**
         * Current function
         */
        getFunction(): Function | undefined;

        /**
         * Name of the current function, typically its name property.
         * If a name property is not available an attempt will be made to try
         * to infer a name from the function's context.
         */
        getFunctionName(): string | null;

        /**
         * Name of the property [of "this" or one of its prototypes] that holds
         * the current function
         */
        getMethodName(): string | null;

        /**
         * Name of the script [if this function was defined in a script]
         */
        getFileName(): string | null;

        /**
         * Current line number [if this function was defined in a script]
         */
        getLineNumber(): number | null;

        /**
         * Current column number [if this function was defined in a script]
         */
        getColumnNumber(): number | null;

        /**
         * A call site object representing the location where eval was called
         * [if this function was created using a call to eval]
         */
        getEvalOrigin(): string | undefined;

        /**
         * Is this a toplevel invocation, that is, is "this" the global object?
         */
        isToplevel(): boolean;

        /**
         * Does this call take place in code defined by a call to eval?
         */
        isEval(): boolean;

        /**
         * Is this call in native V8 code?
         */
        isNative(): boolean;

        /**
         * Is this a constructor call?
         */
        isConstructor(): boolean;
    }

    interface ErrnoException extends Error {
        errno?: number;
        code?: string;
        path?: string;
        syscall?: string;
        stack?: string;
    }

    interface EventEmitter {
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;
        removeAllListeners(event?: string | symbol): this;
        setMaxListeners(n: number): this;
        getMaxListeners(): number;
        listeners(event: string | symbol): Function[];
        rawListeners(event: string | symbol): Function[];
        emit(event: string | symbol, ...args: any[]): boolean;
        listenerCount(type: string | symbol): number;
        // Added in Node 6...
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
        eventNames(): Array<string | symbol>;
    }

    interface ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): string | Buffer;
        setEncoding(encoding: BufferEncoding): this;
        pause(): this;
        resume(): this;
        isPaused(): boolean;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe(destination?: WritableStream): this;
        unshift(chunk: string | Uint8Array, encoding?: BufferEncoding): void;
        wrap(oldStream: ReadableStream): this;
        [Symbol.asyncIterator](): AsyncIterableIterator<string | Buffer>;
    }

    interface WritableStream extends EventEmitter {
        writable: boolean;
        write(buffer: Uint8Array | string, cb?: (err?: Error | null) => void): boolean;
        write(str: string, encoding?: BufferEncoding, cb?: (err?: Error | null) => void): boolean;
        end(cb?: () => void): void;
        end(data: string | Uint8Array, cb?: () => void): void;
        end(str: string, encoding?: BufferEncoding, cb?: () => void): void;
    }

    interface ReadWriteStream extends ReadableStream, WritableStream { }

    interface Domain extends EventEmitter {
        run<T>(fn: (...args: any[]) => T, ...args: any[]): T;
        add(emitter: EventEmitter | Timer): void;
        remove(emitter: EventEmitter | Timer): void;
        bind<T extends Function>(cb: T): T;
        intercept<T extends Function>(cb: T): T;

        addListener(event: string, listener: (...args: any[]) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        removeListener(event: string, listener: (...args: any[]) => void): this;
        removeAllListeners(event?: string): this;
    }

    interface MemoryUsage {
        rss: number;
        heapTotal: number;
        heapUsed: number;
        external: number;
        arrayBuffers: number;
    }

    interface CpuUsage {
        user: number;
        system: number;
    }

    interface ProcessRelease {
        name: string;
        sourceUrl?: string;
        headersUrl?: string;
        libUrl?: string;
        lts?: string;
    }

    interface ProcessVersions {
        http_parser: string;
        node: string;
        v8: string;
        ares: string;
        uv: string;
        zlib: string;
        modules: string;
        openssl: string;
    }

    type Platform = 'aix'
        | 'android'
        | 'darwin'
        | 'freebsd'
        | 'linux'
        | 'openbsd'
        | 'sunos'
        | 'win32'
        | 'cygwin'
        | 'netbsd';

    type Signals =
        "SIGABRT" | "SIGALRM" | "SIGBUS" | "SIGCHLD" | "SIGCONT" | "SIGFPE" | "SIGHUP" | "SIGILL" | "SIGINT" | "SIGIO" |
        "SIGIOT" | "SIGKILL" | "SIGPIPE" | "SIGPOLL" | "SIGPROF" | "SIGPWR" | "SIGQUIT" | "SIGSEGV" | "SIGSTKFLT" |
        "SIGSTOP" | "SIGSYS" | "SIGTERM" | "SIGTRAP" | "SIGTSTP" | "SIGTTIN" | "SIGTTOU" | "SIGUNUSED" | "SIGURG" |
        "SIGUSR1" | "SIGUSR2" | "SIGVTALRM" | "SIGWINCH" | "SIGXCPU" | "SIGXFSZ" | "SIGBREAK" | "SIGLOST" | "SIGINFO";

    type MultipleResolveType = 'resolve' | 'reject';

    type BeforeExitListener = (code: number) => void;
    type DisconnectListener = () => void;
    type ExitListener = (code: number) => void;
    type RejectionHandledListener = (promise: Promise<any>) => void;
    type UncaughtExceptionListener = (error: Error) => void;
    type UnhandledRejectionListener = (reason: {} | null | undefined, promise: Promise<any>) => void;
    type WarningListener = (warning: Error) => void;
    type MessageListener = (message: any, sendHandle: any) => void;
    type SignalsListener = (signal: Signals) => void;
    type NewListenerListener = (type: string | symbol, listener: (...args: any[]) => void) => void;
    type RemoveListenerListener = (type: string | symbol, listener: (...args: any[]) => void) => void;
    type MultipleResolveListener = (type: MultipleResolveType, promise: Promise<any>, value: any) => void;

    interface Socket extends ReadWriteStream {
        isTTY?: true;
    }

    // Alias for compatibility
    interface ProcessEnv extends Dict<string> {}

    interface HRTime {
        (time?: [number, number]): [number, number];
    }

    interface ProcessReport {
        /**
         * Directory where the report is written.
         * working directory of the Node.js process.
         * @default '' indicating that reports are written to the current
         */
        directory: string;

        /**
         * Filename where the report is written.
         * The default value is the empty string.
         * @default '' the output filename will be comprised of a timestamp,
         * PID, and sequence number.
         */
        filename: string;

        /**
         * Returns a JSON-formatted diagnostic report for the running process.
         * The report's JavaScript stack trace is taken from err, if present.
         */
        getReport(err?: Error): string;

        /**
         * If true, a diagnostic report is generated on fatal errors,
         * such as out of memory errors or failed C++ assertions.
         * @default false
         */
        reportOnFatalError: boolean;

        /**
         * If true, a diagnostic report is generated when the process
         * receives the signal specified by process.report.signal.
         * @defaul false
         */
        reportOnSignal: boolean;

        /**
         * If true, a diagnostic report is generated on uncaught exception.
         * @default false
         */
        reportOnUncaughtException: boolean;

        /**
         * The signal used to trigger the creation of a diagnostic report.
         * @default 'SIGUSR2'
         */
        signal: Signals;

        /**
         * Writes a diagnostic report to a file. If filename is not provided, the default filename
         * includes the date, time, PID, and a sequence number.
         * The report's JavaScript stack trace is taken from err, if present.
         *
         * @param fileName Name of the file where the report is written.
         * This should be a relative path, that will be appended to the directory specified in
         * `process.report.directory`, or the current working directory of the Node.js process,
         * if unspecified.
         * @param error A custom error used for reporting the JavaScript stack.
         * @return Filename of the generated report.
         */
        writeReport(fileName?: string): string;
        writeReport(error?: Error): string;
        writeReport(fileName?: string, err?: Error): string;
    }

    interface ResourceUsage {
        fsRead: number;
        fsWrite: number;
        involuntaryContextSwitches: number;
        ipcReceived: number;
        ipcSent: number;
        majorPageFault: number;
        maxRSS: number;
        minorPageFault: number;
        sharedMemorySize: number;
        signalsCount: number;
        swappedOut: number;
        systemCPUTime: number;
        unsharedDataSize: number;
        unsharedStackSize: number;
        userCPUTime: number;
        voluntaryContextSwitches: number;
    }

    interface Process extends EventEmitter {
        /**
         * Can also be a tty.WriteStream, not typed due to limitations.
         */
        stdout: WriteStream;
        /**
         * Can also be a tty.WriteStream, not typed due to limitations.
         */
        stderr: WriteStream;
        stdin: ReadStream;
        openStdin(): Socket;
        argv: string[];
        argv0: string;
        execArgv: string[];
        execPath: string;
        abort(): void;
        chdir(directory: string): void;
        cwd(): string;
        debugPort: number;
        emitWarning(warning: string | Error, name?: string, ctor?: Function): void;
        env: ProcessEnv;
        exit(code?: number): never;
        exitCode?: number;
        getgid(): number;
        setgid(id: number | string): void;
        getuid(): number;
        setuid(id: number | string): void;
        geteuid(): number;
        seteuid(id: number | string): void;
        getegid(): number;
        setegid(id: number | string): void;
        getgroups(): number[];
        setgroups(groups: Array<string | number>): void;
        setUncaughtExceptionCaptureCallback(cb: ((err: Error) => void) | null): void;
        hasUncaughtExceptionCaptureCallback(): boolean;
        version: string;
        versions: ProcessVersions;
        config: {
            target_defaults: {
                cflags: any[];
                default_configuration: string;
                defines: string[];
                include_dirs: string[];
                libraries: string[];
            };
            variables: {
                clang: number;
                host_arch: string;
                node_install_npm: boolean;
                node_install_waf: boolean;
                node_prefix: string;
                node_shared_openssl: boolean;
                node_shared_v8: boolean;
                node_shared_zlib: boolean;
                node_use_dtrace: boolean;
                node_use_etw: boolean;
                node_use_openssl: boolean;
                target_arch: string;
                v8_no_strict_aliasing: number;
                v8_use_snapshot: boolean;
                visibility: string;
            };
        };
        kill(pid: number, signal?: string | number): true;
        pid: number;
        ppid: number;
        title: string;
        arch: string;
        platform: Platform;
        memoryUsage(): MemoryUsage;
        cpuUsage(previousValue?: CpuUsage): CpuUsage;
        nextTick(callback: Function, ...args: any[]): void;
        release: ProcessRelease;
        features: {
            inspector: boolean;
            debug: boolean;
            uv: boolean;
            ipv6: boolean;
            tls_alpn: boolean;
            tls_sni: boolean;
            tls_ocsp: boolean;
            tls: boolean;
        };
        /**
         * Can only be set if not in worker thread.
         */
        umask(mask: number): number;
        uptime(): number;
        hrtime: HRTime;
        domain: Domain;

        // Worker
        send?(message: any, sendHandle?: any, options?: { swallowErrors?: boolean}, callback?: (error: Error | null) => void): boolean;
        disconnect(): void;
        connected: boolean;

        /**
         * The `process.allowedNodeEnvironmentFlags` property is a special,
         * read-only `Set` of flags allowable within the [`NODE_OPTIONS`][]
         * environment variable.
         */
        allowedNodeEnvironmentFlags: ReadonlySet<string>;

        /**
         * Only available with `--experimental-report`
         */
        report?: ProcessReport;

        resourceUsage(): ResourceUsage;

        /* EventEmitter */
        addListener(event: "beforeExit", listener: BeforeExitListener): this;
        addListener(event: "disconnect", listener: DisconnectListener): this;
        addListener(event: "exit", listener: ExitListener): this;
        addListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
        addListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
        addListener(event: "uncaughtExceptionMonitor", listener: UncaughtExceptionListener): this;
        addListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
        addListener(event: "warning", listener: WarningListener): this;
        addListener(event: "message", listener: MessageListener): this;
        addListener(event: Signals, listener: SignalsListener): this;
        addListener(event: "newListener", listener: NewListenerListener): this;
        addListener(event: "removeListener", listener: RemoveListenerListener): this;
        addListener(event: "multipleResolves", listener: MultipleResolveListener): this;

        emit(event: "beforeExit", code: number): boolean;
        emit(event: "disconnect"): boolean;
        emit(event: "exit", code: number): boolean;
        emit(event: "rejectionHandled", promise: Promise<any>): boolean;
        emit(event: "uncaughtException", error: Error): boolean;
        emit(event: "uncaughtExceptionMonitor", error: Error): boolean;
        emit(event: "unhandledRejection", reason: any, promise: Promise<any>): boolean;
        emit(event: "warning", warning: Error): boolean;
        emit(event: "message", message: any, sendHandle: any): this;
        emit(event: Signals, signal: Signals): boolean;
        emit(event: "newListener", eventName: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: "removeListener", eventName: string, listener: (...args: any[]) => void): this;
        emit(event: "multipleResolves", listener: MultipleResolveListener): this;

        on(event: "beforeExit", listener: BeforeExitListener): this;
        on(event: "disconnect", listener: DisconnectListener): this;
        on(event: "exit", listener: ExitListener): this;
        on(event: "rejectionHandled", listener: RejectionHandledListener): this;
        on(event: "uncaughtException", listener: UncaughtExceptionListener): this;
        on(event: "uncaughtExceptionMonitor", listener: UncaughtExceptionListener): this;
        on(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
        on(event: "warning", listener: WarningListener): this;
        on(event: "message", listener: MessageListener): this;
        on(event: Signals, listener: SignalsListener): this;
        on(event: "newListener", listener: NewListenerListener): this;
        on(event: "removeListener", listener: RemoveListenerListener): this;
        on(event: "multipleResolves", listener: MultipleResolveListener): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once(event: "beforeExit", listener: BeforeExitListener): this;
        once(event: "disconnect", listener: DisconnectListener): this;
        once(event: "exit", listener: ExitListener): this;
        once(event: "rejectionHandled", listener: RejectionHandledListener): this;
        once(event: "uncaughtException", listener: UncaughtExceptionListener): this;
        once(event: "uncaughtExceptionMonitor", listener: UncaughtExceptionListener): this;
        once(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
        once(event: "warning", listener: WarningListener): this;
        once(event: "message", listener: MessageListener): this;
        once(event: Signals, listener: SignalsListener): this;
        once(event: "newListener", listener: NewListenerListener): this;
        once(event: "removeListener", listener: RemoveListenerListener): this;
        once(event: "multipleResolves", listener: MultipleResolveListener): this;

        prependListener(event: "beforeExit", listener: BeforeExitListener): this;
        prependListener(event: "disconnect", listener: DisconnectListener): this;
        prependListener(event: "exit", listener: ExitListener): this;
        prependListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
        prependListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
        prependListener(event: "uncaughtExceptionMonitor", listener: UncaughtExceptionListener): this;
        prependListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
        prependListener(event: "warning", listener: WarningListener): this;
        prependListener(event: "message", listener: MessageListener): this;
        prependListener(event: Signals, listener: SignalsListener): this;
        prependListener(event: "newListener", listener: NewListenerListener): this;
        prependListener(event: "removeListener", listener: RemoveListenerListener): this;
        prependListener(event: "multipleResolves", listener: MultipleResolveListener): this;

        prependOnceListener(event: "beforeExit", listener: BeforeExitListener): this;
        prependOnceListener(event: "disconnect", listener: DisconnectListener): this;
        prependOnceListener(event: "exit", listener: ExitListener): this;
        prependOnceListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
        prependOnceListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
        prependOnceListener(event: "uncaughtExceptionMonitor", listener: UncaughtExceptionListener): this;
        prependOnceListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
        prependOnceListener(event: "warning", listener: WarningListener): this;
        prependOnceListener(event: "message", listener: MessageListener): this;
        prependOnceListener(event: Signals, listener: SignalsListener): this;
        prependOnceListener(event: "newListener", listener: NewListenerListener): this;
        prependOnceListener(event: "removeListener", listener: RemoveListenerListener): this;
        prependOnceListener(event: "multipleResolves", listener: MultipleResolveListener): this;

        listeners(event: "beforeExit"): BeforeExitListener[];
        listeners(event: "disconnect"): DisconnectListener[];
        listeners(event: "exit"): ExitListener[];
        listeners(event: "rejectionHandled"): RejectionHandledListener[];
        listeners(event: "uncaughtException"): UncaughtExceptionListener[];
        listeners(event: "uncaughtExceptionMonitor"): UncaughtExceptionListener[];
        listeners(event: "unhandledRejection"): UnhandledRejectionListener[];
        listeners(event: "warning"): WarningListener[];
        listeners(event: "message"): MessageListener[];
        listeners(event: Signals): SignalsListener[];
        listeners(event: "newListener"): NewListenerListener[];
        listeners(event: "removeListener"): RemoveListenerListener[];
        listeners(event: "multipleResolves"): MultipleResolveListener[];
    }

    interface Global {
        Array: typeof Array;
        ArrayBuffer: typeof ArrayBuffer;
        Boolean: typeof Boolean;
        Buffer: typeof Buffer;
        DataView: typeof DataView;
        Date: typeof Date;
        Error: typeof Error;
        EvalError: typeof EvalError;
        Float32Array: typeof Float32Array;
        Float64Array: typeof Float64Array;
        Function: typeof Function;
        Infinity: typeof Infinity;
        Int16Array: typeof Int16Array;
        Int32Array: typeof Int32Array;
        Int8Array: typeof Int8Array;
        Intl: typeof Intl;
        JSON: typeof JSON;
        Map: MapConstructor;
        Math: typeof Math;
        NaN: typeof NaN;
        Number: typeof Number;
        Object: typeof Object;
        Promise: typeof Promise;
        RangeError: typeof RangeError;
        ReferenceError: typeof ReferenceError;
        RegExp: typeof RegExp;
        Set: SetConstructor;
        String: typeof String;
        Symbol: Function;
        SyntaxError: typeof SyntaxError;
        TypeError: typeof TypeError;
        URIError: typeof URIError;
        Uint16Array: typeof Uint16Array;
        Uint32Array: typeof Uint32Array;
        Uint8Array: typeof Uint8Array;
        Uint8ClampedArray: typeof Uint8ClampedArray;
        WeakMap: WeakMapConstructor;
        WeakSet: WeakSetConstructor;
        clearImmediate: (immediateId: Immediate) => void;
        clearInterval: (intervalId: Timeout) => void;
        clearTimeout: (timeoutId: Timeout) => void;
        console: typeof console;
        decodeURI: typeof decodeURI;
        decodeURIComponent: typeof decodeURIComponent;
        encodeURI: typeof encodeURI;
        encodeURIComponent: typeof encodeURIComponent;
        escape: (str: string) => string;
        eval: typeof eval;
        global: Global;
        isFinite: typeof isFinite;
        isNaN: typeof isNaN;
        parseFloat: typeof parseFloat;
        parseInt: typeof parseInt;
        process: Process;
        setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => Immediate;
        setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timeout;
        setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timeout;
        queueMicrotask: typeof queueMicrotask;
        undefined: typeof undefined;
        unescape: (str: string) => string;
        gc: () => void;
        v8debug?: any;
    }

    interface RefCounted {
        ref(): this;
        unref(): this;
    }

    // compatibility with older typings
    interface Timer extends RefCounted {
        hasRef(): boolean;
        refresh(): this;
    }

    interface Immediate extends RefCounted {
        hasRef(): boolean;
        _onImmediate: Function; // to distinguish it from the Timeout class
    }

    interface Timeout extends Timer {
        hasRef(): boolean;
        refresh(): this;
    }

    type TypedArray = Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array;
    type ArrayBufferView = TypedArray | DataView;

    interface Require {
        /* tslint:disable-next-line:callable-types */
        (id: string): any;
        resolve: RequireResolve;
        cache: Dict<NodeModule>;
        /**
         * @deprecated
         */
        extensions: RequireExtensions;
        main: Module | undefined;
    }

    interface RequireResolve {
        (id: string, options?: { paths?: string[]; }): string;
        paths(request: string): string[] | null;
    }

    interface RequireExtensions extends Dict<(m: Module, filename: string) => any> {
        '.js': (m: Module, filename: string) => any;
        '.json': (m: Module, filename: string) => any;
        '.node': (m: Module, filename: string) => any;
    }
    interface Module {
        exports: any;
        require: Require;
        id: string;
        filename: string;
        loaded: boolean;
        parent: Module | null;
        children: Module[];
        paths: string[];
    }

    interface Dict<T> {
        [key: string]: T | undefined;
    }

    interface ReadOnlyDict<T> {
        readonly [key: string]: T | undefined;
    }
}
