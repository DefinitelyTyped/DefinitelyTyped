// Type definitions for winston
// Project: https://github.com/flatiron/winston
// Definitions by: bonnici <https://github.com/bonnici>, Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/winston.d.ts

/// <reference types="node" />

///******************
///  Winston v2.2.x
///******************

import {Agent} from 'http';

declare var winston: winston.Winston;
export = winston;

declare namespace winston {
    export interface Winston {
        transports: winston.Transports;
        Transport: winston.TransportStatic;
        Logger: winston.LoggerStatic;
        Container: winston.ContainerStatic;
        loggers: winston.ContainerInstance;
        default: winston.LoggerInstance;

        exception: winston.Exception;

        exitOnError: boolean;
        level: string;

        log: winston.LogMethod;

        debug: winston.LeveledLogMethod;
        info: winston.LeveledLogMethod;
        warn: winston.LeveledLogMethod;
        error: winston.LeveledLogMethod;

        query(options: winston.QueryOptions, callback?: (err: Error, results: any) => void): any;
        query(callback: (err: Error, results: any) => void): any;
        stream(options?: any): NodeJS.ReadableStream;
        handleExceptions(...transports: winston.TransportInstance[]): void;
        unhandleExceptions(...transports: winston.TransportInstance[]): void;
        add(transport: winston.TransportInstance, options?: winston.TransportOptions, created?: boolean): winston.LoggerInstance;
        clear(): void;
        remove(transport: string): winston.LoggerInstance;
        remove(transport: winston.TransportInstance): winston.LoggerInstance;
        startTimer(): winston.ProfileHandler;
        profile(id: string, msg?: string, meta?: any, callback?: (err: Error, level: string, msg: string, meta: any) => void): winston.LoggerInstance;
        addColors(target: any): any;
        setLevels(target: any): any;
        cli(): winston.LoggerInstance;
        close(): void;
        configure(options: winston.LoggerOptions): void;
    }

    export interface ExceptionProcessInfo {
        pid: number;
        uid?: number;
        gid?: number;
        cwd: string;
        execPath: string;
        version: string;
        argv: string;
        memoryUsage: NodeJS.MemoryUsage;
    }

    export interface ExceptionOsInfo {
        loadavg: [number, number, number];
        uptime: number;
    }

    export interface ExceptionTrace {
        column: number;
        file: string;
        "function": string;
        line: number;
        method: string;
        native: boolean;
    }

    export interface ExceptionAllInfo {
        date: Date;
        process: ExceptionProcessInfo;
        os: ExceptionOsInfo;
        trace: Array<ExceptionTrace>;
        stack: Array<string>;
    }

    export interface Exception {
        getAllInfo(err: Error): ExceptionAllInfo;
        getProcessInfo(): ExceptionProcessInfo;
        getOsInfo(): ExceptionOsInfo;
        getTrace(err: Error): Array<ExceptionTrace>;
    }

    export interface MetadataRewriter {
        (level: string, msg: string, meta: any): any;
    }

    export interface MetadataFilter {
        (level: string, msg: string, meta: any): string | { msg: any; meta: any; };
    }

    export interface LoggerStatic {
        new (options?: LoggerOptions): LoggerInstance;
    }

    export interface LoggerInstance extends NodeJS.EventEmitter {
        rewriters: Array<MetadataRewriter>;
        filters: Array<MetadataFilter>;
        transports: Array<TransportInstance>;

        extend(target: any): LoggerInstance;

        log: LogMethod;

        debug: LeveledLogMethod;
        info: LeveledLogMethod;
        warn: LeveledLogMethod;
        error: LeveledLogMethod;

        query(options: QueryOptions, callback?: (err: Error, results: any) => void): any;
        query(callback: (err: Error, results: any) => void): any;
        stream(options?: any): NodeJS.ReadableStream;
        close(): void;
        handleExceptions(...transports: TransportInstance[]): void;
        unhandleExceptions(...transports: TransportInstance[]): void;
        add(transport: TransportInstance, options?: TransportOptions, created?: boolean): LoggerInstance;
        clear(): void;
        remove(transport: TransportInstance): LoggerInstance;
        startTimer(): ProfileHandler;
        profile(id: string, msg?: string, meta?: any, callback?: (err: Error, level: string, msg: string, meta: any) => void): LoggerInstance;
        configure(options: LoggerOptions): void;
        setLevels(target: any): any;
        cli(): LoggerInstance;

        level: string;
    }

    export interface LoggerOptions {
        transports?: TransportInstance[];
        rewriters?: TransportInstance[];
        exceptionHandlers?: TransportInstance[];
        handleExceptions?: boolean;

        /**
         * @type {(boolean|(err: Error) => void)}
         */
        exitOnError?: any;

        // TODO: Need to make instances specific,
        //       and need to get options for each instance.
        //       Unfortunately, the documentation is unhelpful.
        [optionName: string]: any;
    }

    export interface TransportStatic {
        new (options?: TransportOptions): TransportInstance;
    }

    export interface TransportInstance extends TransportStatic, NodeJS.EventEmitter {
        silent: boolean;
        raw: boolean;
        name: string;
        formatter?: Function;
        level?: string;
        handleExceptions: boolean;
        exceptionsLevel: string;
        humanReadableUnhandledException: boolean;

        formatQuery(query: (string | Object)): (string | Object);
        normalizeQuery(options: QueryOptions): QueryOptions;
        formatResults(results: (Object | Array<any>), options?: Object): (Object | Array<any>);
        logException(msg: string, meta: Object, callback: () => void): void;
    }

    export interface ConsoleTransportInstance extends TransportInstance {
        json: boolean;
        colorize: boolean;
        prettyPrint: boolean;
        timestamp: boolean;
        showLevel: boolean;
        label: string|null;
        logstash: boolean;
        depth: string|null;
        align: boolean;
        stderrLevels: {[key: string]: LeveledLogMethod;}
        eol: string;
        stringify?: (obj: Object) => string;

        new (options?: ConsoleTransportOptions): ConsoleTransportInstance;
    }

    export interface DailyRotateFileTransportInstance extends TransportInstance {
        new (options?: DailyRotateFileTransportOptions): DailyRotateFileTransportInstance;
    }

    export interface FileTransportInstance extends TransportInstance {
        json: boolean;
        logstash: boolean;
        colorize: boolean;
        maxsize: number|null;
        rotationFormat: boolean;
        zippedArchive: boolean;
        maxFiles: number|null;
        prettyPrint: boolean;
        label: string|null;
        timestamp: boolean;
        eol: string;
        tailable: boolean;
        depth: string|null;
        showLevel: boolean;
        maxRetries: number;
        stringify?: (obj: Object) => string;

        new (options?: FileTransportOptions): FileTransportInstance;
        close(): void;
    }

    export interface HttpTransportInstance extends TransportInstance {
        name: string;
        ssl: boolean;
        host: string;
        port: number;
        auth?: {username: string, password: string};
        path: string;
        agent?: Agent|null;

        new (options?: HttpTransportOptions): HttpTransportInstance;
    }

    export interface MemoryTransportInstance extends TransportInstance {
        errorOutput: GenericTextTransportOptions[];
        writeOutput: GenericTextTransportOptions[];

        json: boolean;
        colorize: boolean;
        prettyPrint: boolean;
        timestamp: boolean;
        showLevel: boolean;
        label: string|null;
        depth: string|null;
        stringify?: (obj: Object) => string;

        new (options?: MemoryTransportOptions): MemoryTransportInstance;
    }

    export interface WebhookTransportInstance extends TransportInstance {
        new (options?: WebhookTransportOptions): WebhookTransportInstance;
    }

    export interface WinstonModuleTrasportInstance extends TransportInstance {
        new (options?: WinstonModuleTransportOptions): WinstonModuleTrasportInstance;
    }

    export interface ContainerStatic {
        new (options: LoggerOptions): ContainerInstance;
    }

    export interface ContainerInstance extends ContainerStatic {
        get(id: string, options?: LoggerOptions): LoggerInstance;
        add(id: string, options: LoggerOptions): LoggerInstance;
        has(id: string): boolean;
        close(id: string): void;
        options: LoggerOptions;
        loggers: any;
        default: LoggerOptions;
    }

    export interface Transports {
        File: FileTransportInstance;
        Console: ConsoleTransportInstance;
        Loggly: WinstonModuleTrasportInstance;
        DailyRotateFile: DailyRotateFileTransportInstance;
        Http: HttpTransportInstance;
        Memory: MemoryTransportInstance;
        Webhook: WebhookTransportInstance;
    }

    export type TransportOptions = ConsoleTransportOptions | DailyRotateFileTransportOptions | FileTransportOptions | HttpTransportOptions | MemoryTransportOptions | WebhookTransportOptions | WinstonModuleTransportOptions;

    export interface GenericTransportOptions {
        level?: string;
        silent?: boolean;
        raw?: boolean;
        name?: string;
        formatter?: Function;
        handleExceptions?: boolean;
        exceptionsLevel?: string;
        humanReadableUnhandledException?: boolean;
    }

    export interface GenericTextTransportOptions {
        json?: boolean;
        colorize?: boolean;
        colors?: any;
        prettyPrint?: boolean;
        timestamp?: (Function | boolean);
        showLevel?: boolean;
        label?: string;
        depth?: number;
        stringify?: Function;
    }

    export interface GenericNetworkTransportOptions {
        host?: string;
        port?: number;
        auth?: {
            username: string;
            password: string;
        };
        path?: string;
    }

    export interface ConsoleTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
        logstash?: boolean;
        debugStdout?: boolean;
    }

    export interface DailyRotateFileTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
        logstash?: boolean;
        maxsize?: number;
        maxFiles?: number;
        eol?: string;
        maxRetries?: number;
        datePattern?: string;
        filename?: string;
        dirname?: string;
        options?: {
            flags?: string;
            highWaterMark?: number;
        };
        stream?: NodeJS.WritableStream;
    }

    export interface FileTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
        logstash?: boolean;
        maxsize?: number;
        rotationFormat?: boolean;
        zippedArchive?: boolean;
        maxFiles?: number;
        eol?: string;
        tailable?: boolean;
        maxRetries?: number;
        filename?: string;
        dirname?: string;
        options?: {
            flags?: string;
            highWaterMark?: number;
        };
        stream?: NodeJS.WritableStream;
    }

    export interface HttpTransportOptions extends GenericTransportOptions, GenericNetworkTransportOptions {
        ssl?: boolean;
    }

    export interface MemoryTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
    }

    export interface WebhookTransportOptions extends GenericTransportOptions, GenericNetworkTransportOptions {
        method?: string;
        ssl?: {
            key?: any;
            cert?: any;
            ca: any;
        };
    }

    export interface WinstonModuleTransportOptions extends GenericTransportOptions {
        [optionName: string]: any;
    }

    export interface QueryOptions {
        rows?: number;
        limit?: number;
        start?: number;
        from?: Date;
        until?: Date;
        order?: "asc" | "desc";
        fields: any;
    }

    export interface ProfileHandler {
        logger: LoggerInstance;
        start: Date;
        done: (msg: string) => LoggerInstance;
    }

    interface LogMethod {
        (level: string, msg: string, callback: LogCallback): LoggerInstance;
        (level: string, msg: string, meta: any, callback: LogCallback): LoggerInstance;
        (level: string, msg: string, ...meta: any[]): LoggerInstance;
    }

    interface LeveledLogMethod {
        (msg: string, callback: LogCallback): LoggerInstance;
        (msg: string, meta: any, callback: LogCallback): LoggerInstance;
        (msg: string, ...meta: any[]): LoggerInstance;
    }

    interface LogCallback {
        (error?: any, level?: string, msg?: string, meta?: any): void;
    }
}