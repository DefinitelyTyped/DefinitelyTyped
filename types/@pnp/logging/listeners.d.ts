import { ILogEntry, ILogListener } from "./logger";
/**
 * Implementation of LogListener which logs to the console
 *
 */
export declare class ConsoleListener implements ILogListener {
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    log(entry: ILogEntry): void;
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
export declare class FunctionListener implements ILogListener {
    private method;
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    constructor(method: (entry: ILogEntry) => void);
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    log(entry: ILogEntry): void;
}
//# sourceMappingURL=listeners.d.ts.map