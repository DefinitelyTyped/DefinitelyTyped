// Type definitions for logger 0.0
// Project: https://github.com/quirkey/node-logger
// Definitions by: Max Wan <https://github.com/maxwan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function createLogger(logFilePath?: string): Logger;

export type LogLevel = 'fatal' | 'error' | 'warn' | 'info' | 'debug';
export type Args = (...args: string[]) => string | false;

export class Logger {
    constructor(logFilePath?: string);
    format: (level: LogLevel, data: string, message: string) => string;
    setLevel: (level: LogLevel) => number | false;
    log: (level: LogLevel, ...args: string[]) => string | false;
    fatal: Args;
    error: Args;
    warn: Args;
    info: Args;
    debug: Args;
}

export namespace Logger {
    const levels: ['fatal', 'error', 'warn', 'info', 'debug'];
}
