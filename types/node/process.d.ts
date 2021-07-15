declare module 'process' {
    import * as tty from 'tty';
    import { Worker } from 'worker_threads';

    global {
        var process: NodeJS.Process;

        namespace NodeJS {
            // this namespace merge is here because these are specifically used
            // as the type for process.stdin, process.stdout, and process.stderr.
            // they can't live in tty.d.ts because we need to disambiguate the imported name.
            interface ReadStream extends tty.ReadStream {}
            interface WriteStream extends tty.WriteStream {}

            interface MemoryUsageFn {
                /**
                 * The `process.memoryUsage()` method iterate over each page to gather informations about memory
                 * usage which can be slow depending on the program memory allocations.
                 */
                (): MemoryUsage;
                /**
                 * method returns an integer representing the Resident Set Size (RSS) in bytes.
                 */
                rss(): number;
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
                sourceUrl?: string | undefined;
                headersUrl?: string | undefined;
                libUrl?: string | undefined;
                lts?: string | undefined;
            }

            interface ProcessVersions extends Dict<string> {
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
                | 'haiku'
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
            type RejectionHandledListener = (promise: Promise<unknown>) => void;
            type UncaughtExceptionListener = (error: Error) => void;
            type UnhandledRejectionListener = (reason: {} | null | undefined, promise: Promise<unknown>) => void;
            type WarningListener = (warning: Error) => void;
            type MessageListener = (message: unknown, sendHandle: unknown) => void;
            type SignalsListener = (signal: Signals) => void;
            type MultipleResolveListener = (type: MultipleResolveType, promise: Promise<unknown>, value: unknown) => void;
            type WorkerListener = (worker: Worker) => void;

            interface Socket extends ReadWriteStream {
                isTTY?: true | undefined;
            }

            // Alias for compatibility
            interface ProcessEnv extends Dict<string> {
                /**
                 * Can be used to change the default timezone at runtime
                 */
                TZ?: string;
            }

            interface HRTime {
                (time?: [number, number]): [number, number];
                bigint(): bigint;
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

            interface EmitWarningOptions {
                /**
                 * When `warning` is a `string`, `type` is the name to use for the _type_ of warning being emitted.
                 *
                 * @default 'Warning'
                 */
                type?: string | undefined;

                /**
                 * A unique identifier for the warning instance being emitted.
                 */
                code?: string | undefined;

                /**
                 * When `warning` is a `string`, `ctor` is an optional function used to limit the generated stack trace.
                 *
                 * @default process.emitWarning
                 */
                ctor?: Function | undefined;

                /**
                 * Additional text to include with the error.
                 */
                detail?: string | undefined;
            }

            interface ProcessConfig {
                readonly target_defaults: {
                    readonly cflags: any[];
                    readonly default_configuration: string;
                    readonly defines: string[];
                    readonly include_dirs: string[];
                    readonly libraries: string[];
                };
                readonly variables: {
                    readonly clang: number;
                    readonly host_arch: string;
                    readonly node_install_npm: boolean;
                    readonly node_install_waf: boolean;
                    readonly node_prefix: string;
                    readonly node_shared_openssl: boolean;
                    readonly node_shared_v8: boolean;
                    readonly node_shared_zlib: boolean;
                    readonly node_use_dtrace: boolean;
                    readonly node_use_etw: boolean;
                    readonly node_use_openssl: boolean;
                    readonly target_arch: string;
                    readonly v8_no_strict_aliasing: number;
                    readonly v8_use_snapshot: boolean;
                    readonly visibility: string;
                };
            }

            interface Process extends EventEmitter {
                /**
                 * Can also be a tty.WriteStream, not typed due to limitations.
                 */
                stdout: WriteStream & {
                    fd: 1;
                };
                /**
                 * Can also be a tty.WriteStream, not typed due to limitations.
                 */
                stderr: WriteStream & {
                    fd: 2;
                };
                stdin: ReadStream & {
                    fd: 0;
                };
                openStdin(): Socket;
                argv: string[];
                argv0: string;
                execArgv: string[];
                execPath: string;
                abort(): never;
                chdir(directory: string): void;
                cwd(): string;
                debugPort: number;

                /**
                 * The `process.emitWarning()` method can be used to emit custom or application specific process warnings.
                 *
                 * These can be listened for by adding a handler to the `'warning'` event.
                 *
                 * @param warning The warning to emit.
                 * @param type When `warning` is a `string`, `type` is the name to use for the _type_ of warning being emitted. Default: `'Warning'`.
                 * @param code A unique identifier for the warning instance being emitted.
                 * @param ctor When `warning` is a `string`, `ctor` is an optional function used to limit the generated stack trace. Default: `process.emitWarning`.
                 */
                emitWarning(warning: string | Error, ctor?: Function): void;
                emitWarning(warning: string | Error, type?: string, ctor?: Function): void;
                emitWarning(warning: string | Error, type?: string, code?: string, ctor?: Function): void;
                emitWarning(warning: string | Error, options?: EmitWarningOptions): void;

                env: ProcessEnv;
                exit(code?: number): never;
                exitCode?: number | undefined;
                getgid(): number;
                setgid(id: number | string): void;
                getuid(): number;
                setuid(id: number | string): void;
                geteuid(): number;
                seteuid(id: number | string): void;
                getegid(): number;
                setegid(id: number | string): void;
                getgroups(): number[];
                setgroups(groups: ReadonlyArray<string | number>): void;
                setUncaughtExceptionCaptureCallback(cb: ((err: Error) => void) | null): void;
                hasUncaughtExceptionCaptureCallback(): boolean;
                readonly version: string;
                readonly versions: ProcessVersions;
                readonly config: ProcessConfig;
                kill(pid: number, signal?: string | number): true;
                readonly pid: number;
                readonly ppid: number;
                title: string;
                readonly arch: string;
                readonly platform: Platform;
                /** @deprecated since v14.0.0 - use `require.main` instead. */
                mainModule?: Module | undefined;
                memoryUsage: MemoryUsageFn;
                cpuUsage(previousValue?: CpuUsage): CpuUsage;
                nextTick(callback: Function, ...args: any[]): void;
                readonly release: ProcessRelease;
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
                 * @deprecated since v14.0.0 - Calling process.umask() with no argument causes
                 * the process-wide umask to be written twice. This introduces a race condition between threads,
                 * and is a potential security vulnerability. There is no safe, cross-platform alternative API.
                 */
                umask(): number;
                /**
                 * Can only be set if not in worker thread.
                 */
                umask(mask: string | number): number;
                uptime(): number;
                hrtime: HRTime;

                // Worker
                send?(message: any, sendHandle?: any, options?: { swallowErrors?: boolean | undefined}, callback?: (error: Error | null) => void): boolean;
                disconnect(): void;
                connected: boolean;

                /**
                 * The `process.allowedNodeEnvironmentFlags` property is a special,
                 * read-only `Set` of flags allowable within the `NODE_OPTIONS`
                 * environment variable.
                 */
                allowedNodeEnvironmentFlags: ReadonlySet<string>;

                /**
                 * Only available with `--experimental-report`
                 */
                report?: ProcessReport | undefined;

                resourceUsage(): ResourceUsage;

                traceDeprecation: boolean;

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
                addListener(event: "multipleResolves", listener: MultipleResolveListener): this;
                addListener(event: "worker", listener: WorkerListener): this;

                emit(event: "beforeExit", code: number): boolean;
                emit(event: "disconnect"): boolean;
                emit(event: "exit", code: number): boolean;
                emit(event: "rejectionHandled", promise: Promise<unknown>): boolean;
                emit(event: "uncaughtException", error: Error): boolean;
                emit(event: "uncaughtExceptionMonitor", error: Error): boolean;
                emit(event: "unhandledRejection", reason: unknown, promise: Promise<unknown>): boolean;
                emit(event: "warning", warning: Error): boolean;
                emit(event: "message", message: unknown, sendHandle: unknown): this;
                emit(event: Signals, signal: Signals): boolean;
                emit(event: "multipleResolves", type: MultipleResolveType, promise: Promise<unknown>, value: unknown): this;
                emit(event: "worker", listener: WorkerListener): this;

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
                on(event: "multipleResolves", listener: MultipleResolveListener): this;
                on(event: "worker", listener: WorkerListener): this;
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
                once(event: "multipleResolves", listener: MultipleResolveListener): this;
                once(event: "worker", listener: WorkerListener): this;
                once(event: string | symbol, listener: (...args: any[]) => void): this;

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
                prependListener(event: "multipleResolves", listener: MultipleResolveListener): this;
                prependListener(event: "worker", listener: WorkerListener): this;

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
                prependOnceListener(event: "multipleResolves", listener: MultipleResolveListener): this;
                prependOnceListener(event: "worker", listener: WorkerListener): this;

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
                listeners(event: "multipleResolves"): MultipleResolveListener[];
                listeners(event: "worker"): WorkerListener[];
            }
        }
    }

    export = process;
}

declare module 'node:process' {
    import process = require('process');
    export = process;
}
