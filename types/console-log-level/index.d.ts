// Type definitions for console-log-level 1.4
// Project: https://github.com/watson/console-log-level
// Definitions by: Ali Ijaz Sheikh <https://github.com/ofrobots>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type PrefixFunction = (level: string) => string;

type LogLevelNames = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

interface Options {
    level?: LogLevelNames;
    prefix?: string | PrefixFunction;
    stderr?: boolean;
}

declare function consoleLogLevel(opts: Options):
    Record<LogLevelNames, (...args: any[]) => void>;

export = consoleLogLevel;
