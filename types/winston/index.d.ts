// Type definitions for winston 2.3
// Project: https://github.com/flatiron/winston
// Definitions by: bonnici <https://github.com/bonnici>, Peter Harris <https://github.com/codeanimal>, DABH <https://github.com/DABH>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/winston.d.ts

/// <reference types="node" />

import { Agent } from 'http';

declare namespace winston {
    interface AbstractConfigSetLevels {
        [key: string]: number;
    }

    interface AbstractConfigSetColors {
        [key: string]: string | string[];
    }

    interface AbstractConfigSet {
        levels: AbstractConfigSetLevels;
        colors: AbstractConfigSetColors;
    }

    interface CliConfigSetLevels extends AbstractConfigSetLevels {
        error: number;
        warn: number;
        help: number;
        data: number;
        info: number;
        debug: number;
        prompt: number;
        verbose: number;
        input: number;
        silly: number;
    }

    interface CliConfigSetColors extends AbstractConfigSetColors {
        error: string | string[];
        warn: string | string[];
        help: string | string[];
        data: string | string[];
        info: string | string[];
        debug: string | string[];
        prompt: string | string[];
        verbose: string | string[];
        input: string | string[];
        silly: string | string[];
    }
    interface NpmConfigSetLevels extends AbstractConfigSetLevels {
        error: number;
        warn: number;
        info: number;
        verbose: number;
        debug: number;
        silly: number;
    }
    interface NpmConfigSetColors extends AbstractConfigSetColors {
        error: string | string[];
        warn: string | string[];
        info: string | string[];
        verbose: string | string[];
        debug: string | string[];
        silly: string | string[];
    }
    interface SyslogConfigSetLevels extends AbstractConfigSetLevels {
        emerg: number;
        alert: number;
        crit: number;
        error: number;
        warning: number;
        notice: number;
        info: number;
        debug: number;
    }
    interface SyslogConfigSetColors extends AbstractConfigSetColors {
        emerg: string | string[];
        alert: string | string[];
        crit: string | string[];
        error: string | string[];
        warning: string | string[];
        notice: string | string[];
        info: string | string[];
        debug: string | string[];
    }

    interface Winston {
        config: Config;
        transports: Transports;
        Transport: TransportStatic;
        Logger: LoggerStatic;
        Container: ContainerStatic;
        loggers: ContainerInstance;
        default: LoggerInstance;

        exception: Exception;

        exitOnError: boolean;
        level: string;

        log: LogMethod;

        silly: LeveledLogMethod;
        debug: LeveledLogMethod;
        verbose: LeveledLogMethod;
        info: LeveledLogMethod;
        warn: LeveledLogMethod;
        error: LeveledLogMethod;

        query(options: QueryOptions, callback?: (err: Error, results: any) => void): any;
        query(callback: (err: Error, results: any) => void): any;
        stream(options?: any): NodeJS.ReadableStream;
        handleExceptions(...transports: TransportInstance[]): void;
        unhandleExceptions(...transports: TransportInstance[]): void;
        add(transport: TransportInstance, options?: TransportOptions, created?: boolean): LoggerInstance;
        clear(): void;
        remove(transport: string | TransportInstance): LoggerInstance;
        startTimer(): ProfileHandler;
        profile(id: string, msg?: string, meta?: any, callback?: (err: Error, level: string, msg: string, meta: any) => void): LoggerInstance;
        addColors(target: AbstractConfigSetColors): any;
        setLevels(target: AbstractConfigSetLevels): any;
        cli(): LoggerInstance;
        close(): void;
        configure(options: LoggerOptions): void;
    }

    type CLILoggingLevel = 'error' | 'warn' | 'help' | 'data' | 'info' | 'debug' | 'prompt' | 'verbose' | 'input' | 'silly';
    type NPMLoggingLevel = 'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly';
    type SyslogLoggingLevel = 'emerg' | 'alert' | 'crit' | 'error' | 'warning' | 'notice' | 'info' | 'debug';

    interface Config {
        allColors: AbstractConfigSetColors;
        cli: {levels: CliConfigSetLevels, colors: CliConfigSetColors};
        npm: {levels: NpmConfigSetLevels, colors: NpmConfigSetColors};
        syslog: {levels: SyslogConfigSetLevels, colors: SyslogConfigSetColors};

        addColors(colors: AbstractConfigSetColors): void;
        colorize(level: number, message?: string): string;
    }

    interface ExceptionProcessInfo {
        pid: number;
        uid?: number;
        gid?: number;
        cwd: string;
        execPath: string;
        version: string;
        argv: string;
        memoryUsage: NodeJS.MemoryUsage;
    }

    interface ExceptionOsInfo {
        loadavg: [number, number, number];
        uptime: number;
    }

    interface ExceptionTrace {
        column: number;
        file: string;
        "function": string;
        line: number;
        method: string;
        native: boolean;
    }

    interface ExceptionAllInfo {
        date: Date;
        process: ExceptionProcessInfo;
        os: ExceptionOsInfo;
        trace: ExceptionTrace[];
        stack: string[];
    }

    interface Exception {
        getAllInfo(err: Error): ExceptionAllInfo;
        getProcessInfo(): ExceptionProcessInfo;
        getOsInfo(): ExceptionOsInfo;
        getTrace(err: Error): ExceptionTrace[];
    }

    type MetadataRewriter = (level: string, msg: string, meta: any) => any;

    type MetadataFilter = (level: string, msg: string, meta: any) => string | { msg: any; meta: any; };

    interface LoggerStatic {
        new (options?: LoggerOptions): LoggerInstance;
    }

    interface LoggerInstance extends NodeJS.EventEmitter {
        rewriters: MetadataRewriter[];
        filters: MetadataFilter[];
        transports: {[key: string]: TransportInstance};

        extend(target: any): LoggerInstance;

        log: LogMethod;

        // for cli levels
        error: LeveledLogMethod;
        warn: LeveledLogMethod;
        help: LeveledLogMethod;
        data: LeveledLogMethod;
        info: LeveledLogMethod;
        debug: LeveledLogMethod;
        prompt: LeveledLogMethod;
        verbose: LeveledLogMethod;
        input: LeveledLogMethod;
        silly: LeveledLogMethod;

        // for syslog levels only
        emerg: LeveledLogMethod;
        alert: LeveledLogMethod;
        crit: LeveledLogMethod;
        warning: LeveledLogMethod;
        notice: LeveledLogMethod;

        query(options: QueryOptions, callback?: (err: Error, results: any) => void): any;
        query(callback: (err: Error, results: any) => void): any;
        stream(options?: any): NodeJS.ReadableStream;
        close(): void;
        handleExceptions(...transports: TransportInstance[]): void;
        unhandleExceptions(...transports: TransportInstance[]): void;
        add(transport: TransportInstance, options?: TransportOptions, created?: boolean): LoggerInstance;
        clear(): void;
        remove(transport: string | TransportInstance): LoggerInstance;
        startTimer(): ProfileHandler;
        profile(id: string, msg?: string, meta?: any, callback?: (err: Error, level: string, msg: string, meta: any) => void): LoggerInstance;
        configure(options: LoggerOptions): void;
        setLevels(target: AbstractConfigSetLevels): any;
        cli(): LoggerInstance;

        level: string;
    }

    interface LoggerOptions {
        transports?: TransportInstance[];
        rewriters?: MetadataRewriter[];
        filters?: MetadataFilter[];
        exceptionHandlers?: TransportInstance[];
        handleExceptions?: boolean;
        level?: string;
        levels?: AbstractConfigSetLevels;

        exitOnError?: boolean | ((err: Error) => void);

        // TODO: Need to make instances specific,
        //       and need to get options for each instance.
        //       Unfortunately, the documentation is unhelpful.
        [optionName: string]: any;
    }

    interface TransportStatic {
        new(options?: TransportOptions): TransportInstance;
    }

    interface TransportInstance extends TransportStatic, NodeJS.EventEmitter {
        silent: boolean;
        raw: boolean;
        name: string;
        level?: string;
        handleExceptions: boolean;
        exceptionsLevel: string;
        humanReadableUnhandledException: boolean;

        formatQuery(query: (string | Object)): (string | Object);
        formatter?(options?: any): string;
        normalizeQuery(options: QueryOptions): QueryOptions;
        formatResults(results: (Object | any[]), options?: Object): (Object | any[]);
        logException(msg: string, meta: Object, callback: () => void): void;
    }

    interface ConsoleTransportInstance extends TransportInstance {
        json: boolean;
        colorize: boolean;
        prettyPrint: boolean;
        timestamp: boolean | (() => string | boolean);
        showLevel: boolean;
        label: string|null;
        logstash: boolean;
        depth: string|null;
        align: boolean;
        stderrLevels: { [key: string]: LeveledLogMethod; };
        eol: string;

        new(options?: ConsoleTransportOptions): ConsoleTransportInstance;
        stringify?(obj: Object): string;
    }

    interface DailyRotateFileTransportInstance extends TransportInstance {
        new(options?: DailyRotateFileTransportOptions): DailyRotateFileTransportInstance;
    }

    interface FileTransportInstance extends TransportInstance {
        json: boolean;
        logstash: boolean;
        colorize: boolean;
        maxsize: number|null;
        rotationFormat: boolean;
        zippedArchive: boolean;
        maxFiles: number|null;
        prettyPrint: boolean;
        label: string|null;
        timestamp: boolean | (() => string | boolean);
        eol: string;
        tailable: boolean;
        depth: string|null;
        showLevel: boolean;
        maxRetries: number;

        close(): void;
        new(options?: FileTransportOptions): FileTransportInstance;
        stringify?(obj: Object): string;
    }

    interface HttpTransportInstance extends TransportInstance {
        name: string;
        ssl: boolean;
        host: string;
        port: number;
        auth?: {username: string, password: string};
        path: string;
        agent?: Agent|null;

        new(options?: HttpTransportOptions): HttpTransportInstance;
    }

    interface MemoryTransportInstance extends TransportInstance {
        errorOutput: GenericTextTransportOptions[];
        writeOutput: GenericTextTransportOptions[];

        json: boolean;
        colorize: boolean;
        prettyPrint: boolean;
        timestamp: boolean | (() => string | boolean);
        showLevel: boolean;
        label: string|null;
        depth: string|null;

        new(options?: MemoryTransportOptions): MemoryTransportInstance;
        stringify?(obj: Object): string;
    }

    interface WebhookTransportInstance extends TransportInstance {
        new(options?: WebhookTransportOptions): WebhookTransportInstance;
    }

    interface WinstonModuleTrasportInstance extends TransportInstance {
        new(options?: WinstonModuleTransportOptions): WinstonModuleTrasportInstance;
    }

    interface ContainerStatic {
        new(options: LoggerOptions): ContainerInstance;
    }

    interface ContainerInstance extends ContainerStatic {
        get(id: string, options?: LoggerOptions): LoggerInstance;
        add(id: string, options: LoggerOptions): LoggerInstance;
        has(id: string): boolean;
        close(id: string): void;
        options: LoggerOptions;
        loggers: {[key: string]: LoggerInstance};
        default: LoggerOptions;
    }

    interface Transports {
        File: FileTransportInstance;
        Console: ConsoleTransportInstance;
        Loggly: WinstonModuleTrasportInstance;
        DailyRotateFile: DailyRotateFileTransportInstance;
        Http: HttpTransportInstance;
        Memory: MemoryTransportInstance;
        Webhook: WebhookTransportInstance;
    }

    type TransportOptions = ConsoleTransportOptions | DailyRotateFileTransportOptions | FileTransportOptions
        | HttpTransportOptions | MemoryTransportOptions | WebhookTransportOptions | WinstonModuleTransportOptions;

    interface GenericTransportOptions {
        level?: string;
        silent?: boolean;
        raw?: boolean;
        name?: string;
        handleExceptions?: boolean;
        exceptionsLevel?: string;
        humanReadableUnhandledException?: boolean;

        formatter?(options?: any): string;
    }

    interface GenericTextTransportOptions {
        json?: boolean;
        colorize?: boolean;
        colors?: any;
        prettyPrint?: boolean;
        showLevel?: boolean;
        label?: string;
        depth?: number;

        timestamp?: boolean | (() => string | boolean);
        stringify?(obj: any): string;
    }

    interface GenericNetworkTransportOptions {
        host?: string;
        port?: number;
        auth?: {
            username: string;
            password: string;
        };
        path?: string;
    }

    interface ConsoleTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
        logstash?: boolean;
        debugStdout?: boolean;
    }

    interface DailyRotateFileTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
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

    interface FileTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
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

    interface HttpTransportOptions extends GenericTransportOptions, GenericNetworkTransportOptions {
        ssl?: boolean;
    }

    interface MemoryTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
    }

    interface WebhookTransportOptions extends GenericTransportOptions, GenericNetworkTransportOptions {
        method?: string;
        ssl?: {
            key?: any;
            cert?: any;
            ca: any;
        };
    }

    interface WinstonModuleTransportOptions extends GenericTransportOptions {
        [optionName: string]: any;
    }

    interface QueryOptions {
        rows?: number;
        limit?: number;
        start?: number;
        from?: Date;
        until?: Date;
        order?: "asc" | "desc";
        fields: any;
    }

    interface ProfileHandler {
        logger: LoggerInstance;
        start: Date;

        done(msg: string): LoggerInstance;
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

    type LogCallback = (error?: any, level?: string, msg?: string, meta?: any) => void;
}

declare const winston: winston.Winston;
export = winston;
