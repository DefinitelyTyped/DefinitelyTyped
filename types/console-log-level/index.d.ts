// Type definitions for console-log-level 1.4
// Project: https://github.com/watson/console-log-level
// Definitions by: Ali Ijaz Sheikh <https://github.com/ofrobots>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type PrefixFunction = (level: string) => string;

declare namespace consoleLogLevel {
    type LogLevelNames = "trace" | "debug" | "info" | "warn" | "error" | "fatal";
    type Logger = Record<LogLevelNames, (...args: any[]) => void>;
}

interface Options {
    level?: consoleLogLevel.LogLevelNames | undefined;
    prefix?: string | PrefixFunction | undefined;
    stderr?: boolean | undefined;
}

declare function consoleLogLevel(opts?: Options): consoleLogLevel.Logger;

export = consoleLogLevel;
