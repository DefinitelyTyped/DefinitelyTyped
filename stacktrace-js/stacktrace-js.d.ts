// Type definitions for stacktrace.js
// Project: https://github.com/stacktracejs/stacktrace.js
// Definitions by: Exceptionless <https://github.com/exceptionless>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts"/>

declare module StackTrace {
  export interface StackTraceOptions {
    filter?: (stackFrame:StackFrame) => boolean;
    sourceCache?: { URL:string };
    offline?: boolean;
  }

  export interface StackFrame {
    constructor(functionName:string, args:any, fileName:string, lineNumber:number, columnNumber:number): StackFrame;

    functionName?:string;
    args?:any;
    fileName?:string;
    lineNumber?:number;
    columnNumber?:number;
    toString():string;
  }

  /**
   * Get a backtrace from invocation point.
   * @param options Options Object
   * @return Array[StackFrame]
   */
  export function get(options?: StackTraceOptions): Promise<StackFrame[]>;

  /**
   * Given an error object, parse it.
   * @param error Error object
   * @param options Object for options
   * @return Array[StackFrame]
   */
  export function fromError(error:Error, options?:StackTraceOptions): Promise<StackFrame[]>;

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
   * @param {Function} errorCallback optional function to call with error if unable to get stack trace.
   * @param {Object} thisArg optional context object (e.g. window)
   */
  export function instrument(fn:() => void, callback:(stackFrames:StackFrame[]) => void, errorCallback:(error:Error) => void, thisArg?:any): void;

  /**
   * Given a function that has been instrumented,
   * revert the function to it's original (non-instrumented) state.
   *
   * @param fn {Function}
   */
  export function deinstrument(fn:() => void): void;
}
