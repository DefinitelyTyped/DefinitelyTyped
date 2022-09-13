export type LogLevels = Readonly<{
    DEBUG: 0
    INFO: 1
    WARN: 2
    ERROR: 3
    NONE: 4
}>;

export interface Logger {
    LogLevels: LogLevels;
    LEVEL: LogLevels;
    TRACE: boolean;

    /**
     * Log a message on console depending on configured log levels.
     * Level is define in popoto.logger.LEVEL property.
     * If popoto.logger.TRACE is set to true, the stack trace is also added in log.
     * @param logLevel Level of the message from popoto.logger.LogLevels.
     * @param message Message to log.
     */
    log: (logLevel: LogLevels, message: string) => void;

    /**
     * Log a message in DEBUG level.
     * @param message to log.
     */
    debug: (message: string) => void;

    /**
     * Log a message in INFO level.
     * @param message to log.
     */
    info: (message: string) => void;

    /**
     * Log a message in WARN level.
     * @param message to log.
     */
    warn: (message: string) => void;

    /**
     * Log a message in ERROR level.
     * @param message to log.
     */
    error: (message: string) => void;
}
