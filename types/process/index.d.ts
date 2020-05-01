// Type definitions for non-npm package Node.js 14.14
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Surasak Chaisurin <https://github.com/Ryan-Willpower>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Anna Henningsen <https://github.com/addaleax>
//                 Jason Kwok <https://github.com/JasonHK>
//                 Victor Perin <https://github.com/victorperin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    interface ReadonlySet<T> {}
}

import * as domain from 'domain';
import 'node/events';
import { EventEmitter as EventEmitter_ } from 'events';
import { Module as Module_ } from 'module';
import * as tty from 'tty';

export = process;

declare global {
    namespace process {
        interface MemoryUsage extends NodeJS.MemoryUsage {}

        interface CpuUsage extends NodeJS.CpuUsage {}

        type Signals = NodeJS.Signals;

        type MultipleResolveType = NodeJS.MultipleResolveType;

        interface ResourceUsage extends NodeJS.ResourceUsage {}
    }

    var process: NodeJS.Process;

    namespace NodeJS {
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
            [key: string]: string | undefined;
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
        type SignalsListener = (signal: process.Signals) => void;
        type NewListenerListener = (type: string | symbol, listener: (...args: any[]) => void) => void;
        type RemoveListenerListener = (type: string | symbol, listener: (...args: any[]) => void) => void;
        type MultipleResolveListener = (type: process.MultipleResolveType, promise: Promise<any>, value: any) => void;

        // Alias for compatibility
        interface ProcessEnv {
            [key: string]: string | undefined;
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
            signal: process.Signals;

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

        interface Process extends EventEmitter_ {
            /**
             * Can also be a tty.WriteStream, not typed due to limitations.
             */
            stdout: tty.WriteStream & {
                fd: 1;
            };
            /**
             * Can also be a tty.WriteStream, not typed due to limitations.
             */
            stderr: tty.WriteStream & {
                fd: 2;
            };
            stdin: tty.ReadStream & {
                fd: 0;
            };
            openStdin(): tty.ReadStream;
            argv: string[];
            argv0: string;
            execArgv: string[];
            execPath: string;
            abort(): void;
            chdir(directory: string): void;
            cwd(): string;
            debugPort: number;
            emitWarning(warning: string | Error, name?: string, ctor?: Function): void;
            env: { [key: string]: string | undefined };
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
            mainModule?: Module_;
            memoryUsage(): process.MemoryUsage;
            cpuUsage(previousValue?: process.CpuUsage): process.CpuUsage;
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
            umask(mask: string | number): number;
            uptime(): number;
            hrtime: HRTime;
            domain: domain.Domain;

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

            resourceUsage(): process.ResourceUsage;

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
            addListener(event: process.Signals, listener: SignalsListener): this;
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
            emit(event: process.Signals, signal: process.Signals): boolean;
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
            on(event: process.Signals, listener: SignalsListener): this;
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
            once(event: process.Signals, listener: SignalsListener): this;
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
            prependListener(event: process.Signals, listener: SignalsListener): this;
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
            prependOnceListener(event: process.Signals, listener: SignalsListener): this;
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
            listeners(event: process.Signals): SignalsListener[];
            listeners(event: "newListener"): NewListenerListener[];
            listeners(event: "removeListener"): RemoveListenerListener[];
            listeners(event: "multipleResolves"): MultipleResolveListener[];
        }

        interface Global {
            process: typeof process;
        }
    }
}
