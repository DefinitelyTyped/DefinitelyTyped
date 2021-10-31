import { EventEmitter } from 'events';
import { AdbExecutable } from './adb';

export interface LogcatOpts {
    /**
     * The log print format
     * @default `threadtime`
     */
    format?: 'brief' | 'process' | 'tag' | 'thread' | 'raw' | 'time' | 'threadtime' | 'long' | undefined;
    /**
     * Series of <tag>[:priority]
     * where <tag> is a log component tag (or * for all) and priority is:
     *  V    Verbose
     *  D    Debug
     *  I    Info
     *  W    Warn
     *  E    Error
     *  F    Fatal
     *  S    Silent (suppress all output)
     *
     * '*' means '*:d' and <tag> by itself means <tag>:v
     *
     * If not specified on the commandline, filterspec is set from ANDROID_LOG_TAGS.
     * If no filterspec is found, filter defaults to '*:I'
     */
    filterSpecs?: string | ReadonlyArray<string>;
}

export interface Log {
    timestamp: number;
    level: string;
    message: string;
}

export default class Logcat extends EventEmitter {
    constructor(opts: {
        adb: AdbExecutable;
        clearDeviceLogsOnStart?: boolean | undefined;
        debug?: boolean | undefined;
        debugTrace?: boolean | undefined;
        maxBufferSize?: number | undefined;
    });

    startCapture(opts?: LogcatOpts): Promise<void>;
    outputHandler(output: string, prefix?: string): void;
    stopCapture(): Promise<void>;
    getLogs(): Log[];
    getAllLogs(): Log[];
    clear(): Promise<void>;

    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: 'output', listener: (output: Log) => void): this;
    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: 'output', output: Log): boolean;
    on(event: string, listener: (...args: any[]) => void): this;
    on(event: 'output', listener: (output: Log) => void): this;
    once(event: string, listener: (...args: any[]) => void): this;
    once(event: 'output', listener: (output: Log) => void): this;
    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: 'output', listener: (output: Log) => void): this;
    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: 'output', listener: (output: Log) => void): this;
}
