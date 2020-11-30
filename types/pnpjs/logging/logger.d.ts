/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
export declare class Logger {
    private static _instance;
    /**
     * Gets or sets the active log level to apply for log filtering
     */
    static get activeLogLevel(): LogLevel;
    static set activeLogLevel(value: LogLevel);
    private static get instance();
    /**
     * Adds ILogListener instances to the set of subscribed listeners
     *
     * @param listeners One or more listeners to subscribe to this log
     */
    static subscribe(...listeners: ILogListener[]): void;
    /**
     * Clears the subscribers collection, returning the collection before modification
     */
    static clearSubscribers(): ILogListener[];
    /**
     * Gets the current subscriber count
     */
    static get count(): number;
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param message The message to write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    static write(message: string, level?: LogLevel): void;
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param json The json object to stringify and write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    static writeJSON(json: any, level?: LogLevel): void;
    /**
     * Logs the supplied entry to the subscribed listeners
     *
     * @param entry The message to log
     */
    static log(entry: ILogEntry): void;
    /**
     * Logs an error object to the subscribed listeners
     *
     * @param err The error object
     */
    static error(err: Error): void;
}
/**
 * A set of logging levels
 */
export declare const enum LogLevel {
    Verbose = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
    Off = 99
}
/**
 * Interface that defines a log entry
 *
 */
export interface ILogEntry {
    /**
     * The main message to be logged
     */
    message: string;
    /**
     * The level of information this message represents
     */
    level: LogLevel;
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     */
    data?: any;
}
/**
 * Interface that defines a log listener
 *
 */
export interface ILogListener {
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    log(entry: ILogEntry): void;
}
//# sourceMappingURL=logger.d.ts.map