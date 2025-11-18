import { ScriptSource, Source } from "./scriptTypes";

/**
 * Represents a base log entry.
 * Described in https://w3c.github.io/webdriver-bidi/#types-log-logentry.
 */
declare class BaseLogEntry {
    /**
     * Creates a new instance of BaseLogEntry.
     * @param level - The log level.
     * @param source - Script Source
     * @param text - The log text.
     * @param timeStamp - The log timestamp.
     * @param stackTrace - The log stack trace.
     */
    constructor(
        level: string,
        source: ScriptSource,
        text: string,
        timeStamp: number,
        stackTrace: string,
    );

    /**
     * Gets the log level.
     */
    readonly level: string;

    /**
     * Gets the log source.
     */
    readonly source: Source;

    /**
     * Gets the log text.
     */
    readonly text: string;

    /**
     * Gets the log timestamp.
     */
    readonly timeStamp: number;

    /**
     * Gets the log stack trace.
     */
    readonly stackTrace: string;
}

/**
 * Represents a generic log entry.
 */
declare class GenericLogEntry extends BaseLogEntry {
    /**
     * Creates an instance of GenericLogEntry.
     * @param level - The log level.
     * @param source - Script Source
     * @param text - The log text.
     * @param timeStamp - The log timestamp.
     * @param type - The log type.
     * @param stackTrace - The log stack trace.
     */
    constructor(
        level: string,
        source: ScriptSource,
        text: string,
        timeStamp: number,
        type: string,
        stackTrace: string,
    );

    /**
     * Gets the log type.
     */
    readonly type: string;
}

/**
 * Represents a log entry for console logs.
 */
declare class ConsoleLogEntry extends GenericLogEntry {
    /**
     * Creates an instance of ConsoleLogEntry.
     * @param level - The log level.
     * @param source - Script Source
     * @param text - The log text.
     * @param timeStamp - The log timestamp.
     * @param type - The log type.
     * @param method - The method.
     * @param args - The arguments.
     * @param stackTrace - The log stack trace.
     */
    constructor(
        level: string,
        source: ScriptSource,
        text: string,
        timeStamp: number,
        type: string,
        method: string,
        args: any[],
        stackTrace: string,
    );

    /**
     * Gets the method associated with the log entry.
     */
    readonly method: string;

    /**
     * Gets the arguments associated with the log entry.
     */
    readonly args: any[];
}

/**
 * Represents a log entry for JavaScript logs.
 */
declare class JavascriptLogEntry extends GenericLogEntry {
    /**
     * Creates an instance of JavascriptLogEntry.
     * @param level - The log level.
     * @param source - Script Source
     * @param text - The log text.
     * @param timeStamp - The log timestamp.
     * @param type - The log type.
     * @param stackTrace - The log stack trace.
     */
    constructor(
        level: string,
        source: ScriptSource,
        text: string,
        timeStamp: number,
        type: string,
        stackTrace: string,
    );
}

export { BaseLogEntry, ConsoleLogEntry, GenericLogEntry, JavascriptLogEntry };
