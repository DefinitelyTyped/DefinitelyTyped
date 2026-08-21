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
