/**
 * Class with a logger interface. Messages are only logged to console if
 * their log level is smaller or equal than the current log level.
 */
export class Logger {
    static readonly LEVEL: {
        LOG: 0;
        WARN: 1;
        ERROR: 2;
        SILENT: 3;
    };

    /**
     * Sets the log level for the logger. Allow values are: *LOG*,
     * *WARN*, *ERROR*, *SILENT*. The default level is *WARN*. The constants
     * are accessible over the *Logger.LEVEL* namespace.
     *
     * @param level - The log level.
     */
    static setLevel(level: number): number;

    /**
     * Logs a message with the level *LOG*.
     *
     * @param args - The arguments to log.
     */
    static log(...args: any): void;

    /**
     * Logs a message with the level *WARN*.
     *
     * @param args - The arguments to log.
     */
    static warn(...args: any): void;

    /**
     * Logs a message with the level *ERROR*.
     *
     * @param args - The arguments to log.
     */
    static error(...args: any): void;
}
