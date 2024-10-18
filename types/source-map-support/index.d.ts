import { RawSourceMap } from "source-map";

/**
 * Output of `retrieveSourceMap()`.
 * The map field may be either a string or the parsed JSON object (i.e.,
 * it must be a valid argument to the SourceMapConsumer constructor).
 */
export interface UrlAndMap {
    url?: string | undefined;
    map: string | RawSourceMap;
}

export type Environment = "auto" | "browser" | "node";

/**
 * Options to install().
 */
export interface Options {
    /**
     * This module installs two things: a change to the `stack` property on `Error`
     * objects and a handler for uncaught exceptions that mimics node's default exception
     * handler (the handler can be seen in the demos below). You may want to disable the
     * handler if you have your own uncaught exception handler. This can be done by passing
     * an argument to the installer.
     *
     * @example
     * import { install } from 'source-map-support';
     *
     * install({
     *   handleUncaughtExceptions: false
     * });
     */
    handleUncaughtExceptions?: boolean | undefined;
    /**
     * To support files with inline source maps, the `hookRequire` options can be specified,
     * which will monitor all source files for inline source maps.
     *
     * This monkey patches the `require` module loading chain, so is not enabled by default
     * and is not recommended for any sort of production usage.
     *
     * @example
     * import { install } from 'source-map-support';
     *
     * install({
     *   hookRequire: true
     * });
     * ```
     */
    hookRequire?: boolean | undefined;
    /**
     * If `true`, the caches are reset before a stack trace formatting operation.
     */
    emptyCacheBetweenOperations?: boolean | undefined;
    /**
     * The module will by default assume a browser environment if `XMLHttpRequest` and `window`
     * are defined. If either of these do not exist it will instead assume a node environment.
     * In some rare cases, e.g. when running a browser emulation and where both variables are
     * also set, you can explicitly specify the environment to be either `'browser'` or `'node'`.
     *
     * @example
     * import { install } from 'source-map-support';
     *
     * install({
     *   environment: 'node'
     * });
     */
    environment?: Environment | undefined;
    /**
     * Disable all other means of retrieving file contents and use only the provided
     * `retrieveFile` handler.
     */
    overrideRetrieveFile?: boolean | undefined;
    /**
     * Disable all other means of retrieving source maps and use only the provided
     * `retrieveSourceMap` handler.
     */
    overrideRetrieveSourceMap?: boolean | undefined;
    /**
     * Allow sources to be found by methods other than reading the files
     * directly from disk.
     */
    retrieveFile?(path: string): string | null;
    /**
     * This module loads source maps from the filesystem by default. You can provide alternate
     * loading behavior through a callback as shown below. For example, [Meteor](https://github.com/meteor)
     * keeps all source maps cached in memory to avoid disk access.
     *
     * @example
     * import { install } from 'source-map-support';
     *
     * install({
     *   retrieveSourceMap(source) {
     *     if (source === 'compiled.js') {
     *       return {
     *         url: 'original.js',
     *         map: fs.readFileSync('compiled.js.map', 'utf8')
     *       };
     *     }
     *     return null;
     *   }
     * });
     */
    retrieveSourceMap?(source: string): UrlAndMap | null;
}

export interface Position {
    source: string;
    line: number;
    column: number;
}

export interface State {
    nextPosition: Position | null;
    curPosition: Position | null;
}

export interface CallSite {
    /**
     * Value of "this"
     */
    getThis(): any;

    /**
     * Type of "this" as a string.
     * This is the name of the function stored in the constructor field of
     * "this", if available.  Otherwise the object's [[Class]] internal
     * property.
     */
    getTypeName(): string | null;

    /**
     * Current function
     */
    getFunction(): ((...args: unknown[]) => any) | undefined;

    /**
     * Name of the current function, typically its name property.
     * If a name property is not available an attempt will be made to try
     * to infer a name from the function's context.
     */
    getFunctionName(): string | null;

    /**
     * Name of the property [of "this" or one of its prototypes] that holds
     * the current function
     */
    getMethodName(): string | null;

    /**
     * Name of the script [if this function was defined in a script]
     */
    getFileName(): string | null;

    /**
     * Current line number [if this function was defined in a script]
     */
    getLineNumber(): number | null;

    /**
     * Current column number [if this function was defined in a script]
     */
    getColumnNumber(): number | null;

    /**
     * A call site object representing the location where eval was called
     * [if this function was created using a call to eval]
     */
    getEvalOrigin(): string | undefined;

    /**
     * Is this a toplevel invocation, that is, is "this" the global object?
     */
    isToplevel(): boolean;

    /**
     * Does this call take place in code defined by a call to eval?
     */
    isEval(): boolean;

    /**
     * Is this call in native V8 code?
     */
    isNative(): boolean;

    /**
     * Is this a constructor call?
     */
    isConstructor(): boolean;

    getScriptNameOrSourceURL?(): string;
}

export function wrapCallSite(frame: CallSite, state?: State): CallSite;
export function getErrorSource(error: Error): string | null;
export function mapSourcePosition(position: Position): Position;
export function retrieveSourceMap(source: string): UrlAndMap | null;
export function resetRetrieveHandlers(): void;

/**
 * Install SourceMap support.
 */
export function install(options?: Options): void;
