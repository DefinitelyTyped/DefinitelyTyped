declare module "process" {
    import * as tty from "tty";

    global {
        var process: NodeJS.Process;

        namespace NodeJS {
            // this namespace merge is here because these are specifically used
            // as the type for process.stdin, process.stdout, and process.stderr.
            // they can't live in tty.d.ts because we need to disambiguate the imported name.
            interface ReadStream extends tty.ReadStream {}
            interface WriteStream extends tty.WriteStream {}

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

            interface ProcessEventMap {
                "beforeExit": BeforeExitListener;
                "disconnect": DisconnectListener;
                "exit": ExitListener;
                "rejectionHandled": RejectionHandledListener;
                "uncaughtException": UncaughtExceptionListener;
                "uncaughtExceptionMonitor": UncaughtExceptionListener;
                "unhandledRejection": UnhandledRejectionListener;
                "warning": WarningListener;
                "message": MessageListener;
                "newListener": NewListenerListener;
                "removeListener": RemoveListenerListener;
                "multipleResolves": MultipleResolveListener;
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
                setgroups(groups: ReadonlyArray<string | number>): void;
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
                /** @deprecated since v14.0.0 - use `require.main` instead. */
                mainModule?: Module;
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
                 * @deprecated since v14.0.0 - Calling process.umask() with no argument causes
                 * the process-wide umask to be written twice. This introduces a race condition between threads,
                 * and is a potential security vulnerability. There is no safe, cross-platform alternative API.
                 */
                umask(): number;
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
                addListener<K extends keyof ProcessEventMap>(event: K, listener: ProcessEventMap[K]): this;
                addListener(event: Signals, listener: SignalsListener): this;
                addListener(event: string | symbol, listener: (...args: any[]) => void): this;

                emit<K extends keyof ProcessEventMap>(event: K, ...args: ProcessEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
                emit(event: Signals, signal: Signals): boolean;
                emit(event: string | symbol, ...args: any[]): boolean;

                on<K extends keyof ProcessEventMap>(event: K, listener: ProcessEventMap[K]): this;
                on(event: Signals, listener: SignalsListener): this;
                on(event: string | symbol, listener: (...args: any[]) => void): this;

                once<K extends keyof ProcessEventMap>(event: K, listener: ProcessEventMap[K]): this;
                once(event: Signals, listener: SignalsListener): this;
                once(event: string | symbol, listener: (...args: any[]) => void): this;

                prependListener<K extends keyof ProcessEventMap>(event: K, listener: ProcessEventMap[K]): this;
                prependListener(event: Signals, listener: SignalsListener): this;
                prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

                prependOnceListener<K extends keyof ProcessEventMap>(event: K, listener: ProcessEventMap[K]): this;
                prependOnceListener(event: Signals, listener: SignalsListener): this;
                prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

                removeListener<K extends keyof ProcessEventMap>(event: K, listener: ProcessEventMap[K]): this;
                removeListener(event: Signals, listener: SignalsListener): this;
                removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

                off<K extends keyof ProcessEventMap>(event: K, listener: ProcessEventMap[K]): this;
                off(event: Signals, listener: SignalsListener): this;
                off(event: string | symbol, listener: (...args: any[]) => void): this;

                listeners<K extends keyof ProcessEventMap>(event: K): Array<ProcessEventMap[K]>;
                listeners(event: Signals): SignalsListener[];
                listeners(event: string | symbol): Function[];
            }

            interface Global {
                process: Process;
            }
        }
    }

    export = process;
}
