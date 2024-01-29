export enum level {
    error = 0,
    warn = 1,
    info = 2,
    verbose = 3,
    debug = 4,
    silly = 5,
}

export enum fileRotateType {
    monthly = 0,
    weekly = 1,
    daily = 2,
    hourly = 3,
    minutely = 4,
}

export interface LoggerConfiguration {
    level: level;
    silent?: boolean | undefined;
    externalDisplayFormat?: any;
}

export interface FileConfiguration {
    saveToFileName?: string | undefined;
    isFileRotate?: boolean | undefined;
    fileRotateType?: fileRotateType | undefined;
    fileRotateMaxSize?: number | undefined;
}

export interface SourcesConfiguration {
    levels: level[];
    connector: any;
    callback: any;
}

export class Logger {
    constructor(
        configuration?: LoggerConfiguration,
        fileConfig?: FileConfiguration,
        sourceConfig?: SourcesConfiguration,
    );

    log(level: level | string, message: string, optional?: any): void;
}
