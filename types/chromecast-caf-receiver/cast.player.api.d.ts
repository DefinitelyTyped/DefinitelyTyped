export as namespace api;

export enum LoggerLevel {
    DEBUG = 0,
    ERROR = 1000,
    INFO = 800,
    NONE = Infinity,
    WARNING = 900,
}

/**
 * Sets the log verbosity level.
 */
export function setLoggerLevel(loggerLevel: LoggerLevel): void;
