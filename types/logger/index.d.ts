export function createLogger(logFilePath?: string): Logger;

export type LogLevel = "fatal" | "error" | "warn" | "info" | "debug";
export type Args = (...args: any[]) => string | false;

export class Logger {
    constructor(logFilePath?: string);
    format: (level: LogLevel, data: string, message: string) => string;
    setLevel: (level: LogLevel) => number | false;
    log: (level: LogLevel, ...args: any[]) => string | false;
    fatal: Args;
    error: Args;
    warn: Args;
    info: Args;
    debug: Args;
}

export namespace Logger {
    const levels: ["fatal", "error", "warn", "info", "debug"];
}
