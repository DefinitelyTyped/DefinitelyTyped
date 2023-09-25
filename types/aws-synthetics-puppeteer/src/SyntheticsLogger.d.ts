// tslint:disable:no-single-declare-module js installs to root of node_modules
/// <reference types="node" />
declare module "SyntheticsLogger" {
    const _exports: SyntheticsLogger;
    export = _exports;
    class SyntheticsLogger {
        constructor(logLevel?: number);
        LOG_LEVEL_DEBUG: number;
        LOG_LEVEL_INFO: number;
        LOG_LEVEL_WARN: number;
        LOG_LEVEL_ERROR: number;
        _logLevel: number;
        _logStream: fs.WriteStream;
        _logFilePath: string;
        getLogFilePath(): string;
        getLogLevel(): number;
        setLogLevel(logLevel: any): void;
        resetLogName(): void;
        debug(message: any, ex?: any): void;
        log(message: any, ex?: any): void;
        info(message: any, ex?: any): void;
        warn(message: any, ex?: any): void;
        error(message: any, ex?: any): void;
        write(message: any, exception?: any): void;
        deleteLogFile(): Promise<void>;
        reset(): void;
        end(): void;
    }
    import * as fs from "fs";
}
