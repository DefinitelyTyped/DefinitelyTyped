// Type definitions for console-log-level 1.4
// Project: https://github.com/watson/console-log-level
// Definitions by: Ali Ijaz Sheikh <https://github.com/ofrobots>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare enum LogLevels {
    trace,
    debug,
    info,
    warn,
    error,
    fatal
}

type LogLevelNames = keyof typeof LogLevels;

type PrefixFunction = (level: string) => string;

interface Options {
    level?: LogLevelNames;
    prefix?: string | PrefixFunction;
    stderr?: boolean;
}

interface Logger {
    fatal: (...args: any[]) => void;
    error: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    info: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    trace: (...args: any[]) => void;
}

type ConsoleLogLevel = (opts: Options) => Logger;

declare const consoleLogLevel: ConsoleLogLevel;

export = consoleLogLevel;
