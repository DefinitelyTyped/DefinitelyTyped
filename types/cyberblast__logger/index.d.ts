export interface LogData {
    severity: Severity;
    category: string;
    message: string;
    time?: Date | undefined;
    data?: any;
}

export class Logger {
    constructor(configPath?: string);
    category: { [key: string]: string };
    init(): Promise<void>;
    close(): void;
    defineCategory(name: string): void;
    log(logData: LogData): void;
    logError(message: string, category?: string, ...data: any[]): void;
    logWarning(message: string, category?: string, ...data: any[]): void;
    logInfo(message: string, category?: string, ...data: any[]): void;
    logVerbose(message: string, category?: string, ...data: any[]): void;
    onLog(callback: (logData: LogData) => void): void;
    on(ruleName: string, callback: (logData: LogData) => void): void;
    onError(callback: (logData: LogData) => void): void;
    onWarning(callback: (logData: LogData) => void): void;
    onInfo(callback: (logData: LogData) => void): void;
    onVerbose(callback: (logData: LogData) => void): void;
}

export enum Severity {
    Error = "Error",
    Warning = "Warning",
    Info = "Info",
    Verbose = "Verbose",
}

export enum SeverityLevel {
    Error = 4,
    Warning = 3,
    Info = 2,
    Verbose = 1,
}
