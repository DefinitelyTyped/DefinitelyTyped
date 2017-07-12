// Type definitions for stacktrace.js
// Project: https://github.com/stacktracejs/stacktrace.js
// Definitions by: Exceptionless <https://github.com/exceptionless>
//                 Chun-Yan Ho <https://github.com/pilagod>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace StackTrace {

  export interface SourceCache {
    [key: string]: string | Promise<string>;
  }

  /**
   * Options for StackTrace
   * @param filter Function(StackFrame => Boolean) - Only include stack entries matching for which filter returns true
   * @param sourceCache Object (String URL => String Source) - Pre-populate source cache to avoid network requests
   * @param offline Boolean (default: false) - Set to true to prevent all network requests
   */
  export interface StackTraceOptions {
    filter?:      (stackFrame: StackFrame) => boolean;
    sourceCache?: SourceCache;
    offline?:     boolean;
  }

  export interface StackFrame {
    constructor(functionName: string, args: any, fileName: string, lineNumber: number, columnNumber: number): StackFrame;

    functionName: string;
    args:         any;
    fileName:     string;
    lineNumber:   number;
    columnNumber: number;
    source:       string;
    isEval:       boolean;
    isNative:     boolean;
    toString():   string;
  }

  export interface RequestOptions {
    headers: { [id: string]: string };
  }

  /**
   * Get a backtrace from invocation point.
   * @param options Options Object
   * @return Array[StackFrame]
   */
  export function get(options?: StackTraceOptions): Promise<StackFrame[]>;

  /**
   * Get a backtrace from invocation point synchronously.
   * @param options Options Object
   * @return Array[StackFrame]
   */
  export function getSync(options?: StackTraceOptions): StackFrame[];

  /**
   * Given an error object, parse it.
   * @param error Error object
   * @param options Object for options
   * @return Array[StackFrame]
   */
  export function fromError(error: Error, options?: StackTraceOptions): Promise<StackFrame[]>;

  /**
   * Use StackGenerator to generate a backtrace.
   * @param options Object options
   * @returns Array[StackFrame]
   */
  export function generateArtificially(options?: StackTraceOptions): Promise<StackFrame[]>;

  /**
   * Given a function, wrap it such that invocations trigger a callback that
   * is called with a stack trace.
   *
   * @param {Function} fn to be instrumented
   * @param {Function} callback function to call with a stack trace on invocation
   * @param {Function} errback optional function to call with error if unable to get stack trace.
   * @param {Object} thisArg optional context object (e.g. window)
   * @return {Function} instrumented function
   */
  export function instrument<TFunc extends Function>(fn: TFunc, callback: (stackFrames: StackFrame[]) => void, errback?: (error: Error) => void, thisArg?: any): TFunc;

  /**
   * Given a function that has been instrumented,
   * revert the function to it's original (non-instrumented) state.
   *
   * @param fn {Function}
   * @return {Function} original function
   */
  export function deinstrument<TFunc extends Function>(fn: TFunc): TFunc;

  /**
   * Given an Array of StackFrames, serialize and POST to given URL.
   *
   * @param {Array} stackframes - Previously wrapped Function
   * @param {string} url - URL to POST stack JSON to
   * @param {string} message - Optional Error message
   * @param {Object} requestOptions - Request Headers {headers: {key: "value"}}
   * @return {Promise<string>} - Promise is resolved with response text from POST request.
   */
  export function report(stackframes: StackFrame[], url: string, message?: string, requestOptions?: RequestOptions): Promise<string>;
}

declare module "stacktrace-js" {
    export = StackTrace;
}
