import { LogListener } from "./listeners";
import { LogEntry } from "./logentry";
import { LogLevel } from "./loglevel";
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
export declare class Logger {
    private static _instance;
    /**
     * Gets or sets the active log level to apply for log filtering
     */
    static activeLogLevel: LogLevel;
    private static readonly instance;
    /**
     * Adds ILogListener instances to the set of subscribed listeners
     *
     * @param listeners One or more listeners to subscribe to this log
     */
    static subscribe(...listeners: LogListener[]): void;
    /**
     * Clears the subscribers collection, returning the collection before modifiction
     */
    static clearSubscribers(): LogListener[];
    /**
     * Gets the current subscriber count
     */
    static readonly count: number;
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
    static log(entry: LogEntry): void;
    /**
     * Logs an error object to the subscribed listeners
     *
     * @param err The error object
     */
    static error(err: Error): void;
}
