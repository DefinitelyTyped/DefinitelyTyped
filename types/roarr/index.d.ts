// the package defines a recursive type SerializeValueType but, fortunately, neither it nor SerializableObjectType are
// used anywhere

export interface WriterType {
    write: (message: string) => void;
}

export interface RoarrGlobalStateType extends WriterType {
    sequence: number;
    versions: ReadonlyArray<string>;
}

export type SprintfArgumentType = string | number | boolean | null;

export interface MessageContextType {
    application?: string | undefined;
    logLevel?: number | undefined;
    namespace?: string | undefined;
    package?: string | undefined;
    [k: string]: any;
}

export interface MessageType {
    context: MessageContextType;
    message: string;
    sequence: number;
    time: number;
    version: string;
}

export type TranslateMessageFunctionType = (message: MessageType) => MessageType;

export interface Logger {
    (
        context: MessageContextType,
        message: string,
        c?: SprintfArgumentType,
        d?: SprintfArgumentType,
        e?: SprintfArgumentType,
        f?: SprintfArgumentType,
        g?: SprintfArgumentType,
        h?: SprintfArgumentType,
        i?: SprintfArgumentType,
        k?: SprintfArgumentType,
    ): void;

    (
        message: string,
        b?: SprintfArgumentType,
        c?: SprintfArgumentType,
        d?: SprintfArgumentType,
        e?: SprintfArgumentType,
        f?: SprintfArgumentType,
        g?: SprintfArgumentType,
        h?: SprintfArgumentType,
        i?: SprintfArgumentType,
    ): void;
}

export interface LoggerType extends Logger {
    /**
     * Creates a child logger appending the provided context object to the previous logger context.
     *
     * @param contextOrFunction
     * @example
     * import Roarr from 'roarr';
     *
     * const log = Roarr.child({ module: "myModule" });
     *
     * log.debug("My Message");
     * // {"context":{"logLevel":20},"Message":"My Message","sequence":0,"time":1531914529921,"version":"1.0.0"}
     *
     * @see https://www.npmjs.com/package/roarr#child
     */
    child(contextOrFunction: TranslateMessageFunctionType | MessageContextType): LoggerType;

    /**
     * Returns the current context.
     */
    getContext(): MessageContextType;

    /**
     * Convenience method for logging a message with logLevel context property value set to 10 (LogLevel.Trace)
     *
     * @example
     * import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.trace('foo');
     * // {"context":{"logLevel":10},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     *
     * @see https://www.npmjs.com/package/roarr#trace
     */
    trace: Logger;

    /**
     * Convenience method for logging a message with logLevel context property value set to 20 (LogLevel.Debug)
     *
     * @example
     * import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.debug('foo');
     * // {"context":{"logLevel":20},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     *
     * @see https://www.npmjs.com/package/roarr#trace
     */
    debug: Logger;

    /**
     * Convenience method for logging a message with logLevel context property value set to 30 (LogLevel.Info)
     *
     * @example
     * import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.info('foo');
     * // {"context":{"logLevel":30},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     *
     * @see https://www.npmjs.com/package/roarr#trace
     */
    info: Logger;

    /**
     * Convenience method for logging a message with logLevel context property value set to 40 (LogLevel.Warn)
     *
     * @example
     * import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.warn('foo');
     * // {"context":{"logLevel":40},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     *
     * @see https://www.npmjs.com/package/roarr#trace
     */
    warn: Logger;

    /**
     * Convenience method for logging a message with logLevel context property value set to 50 (LogLevel.Error)
     *
     * @example
     * import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.error('foo');
     * // {"context":{"logLevel":50},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     *
     * @see https://www.npmjs.com/package/roarr#trace
     */
    error: Logger;

    /**
     * Convenience method for logging a message with logLevel context property value set to 60 (LogLevel.Fatal)
     *
     * @example
     * import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.fatal('foo');
     * // {"context":{"logLevel":60},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     *
     * @see https://www.npmjs.com/package/roarr#trace
     */
    fatal: Logger;
}

export type MessageEventHandlerType = (message: MessageType) => void;

declare const log: LoggerType;

export default log;
