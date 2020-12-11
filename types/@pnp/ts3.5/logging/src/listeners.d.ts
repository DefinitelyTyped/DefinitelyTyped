import { LogEntry } from "./logentry";
/**
 * Interface that defines a log listner
 *
 */
export interface LogListener {
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    log(entry: LogEntry): void;
}
/**
 * Implementation of LogListener which logs to the console
 *
 */
export declare class ConsoleListener implements LogListener {
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    log(entry: LogEntry): void;
    /**
     * Formats the message
     *
     * @param entry The information to format into a string
     */
    private format;
}
/**
 * Implementation of LogListener which logs to the supplied function
 *
 */
export declare class FunctionListener implements LogListener {
    private method;
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    constructor(method: (entry: LogEntry) => void);
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    log(entry: LogEntry): void;
}
