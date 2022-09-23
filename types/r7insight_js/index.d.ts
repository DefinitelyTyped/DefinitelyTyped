// Type definitions for r7insight_js 1.1
// Project: https://github.com/rapid7/r7insight_js
// Definitions by: Nick Malyarsky <https://github.com/nmalyarsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Insight log options
 */
export interface Options {
    /**
     * The Insight log token
     */
    token: string;

    /**
     * The Insight log region
     */
    region: 'eu' | 'us';

    /**
     * Use SSL/TLS to send events
     */
    ssl?: boolean;

    /**
     * Log any uncaught JavaScript exceptions. This replaces the window.onerror handler, but if you've specified one already, it'll invoke that one afterwards
     */
    catchall?: boolean;

    /**
     * Adds a randomly generated trace code
     */
    trace?: boolean;

    /**
     * Sends events to Insight verbatim
     */
    no_format?: boolean;

    /**
     * Append basic information about browser capabilities
     */
    page_info?: 'never' | 'per-page' | 'per-entry';

    /**
     * Echo events to the screen via the console object. This will logged at the same level as the call to R7Insight, e.g. R7Insight.warn(msg) => console.warn(msg)
     */
    print?: boolean;
}

/**
 * Sets r7insight.js up
 * @param options Insight log options
 */
export function init(options: Options): void;

/**
 * Logs event with LOG severity level
 * @param message String-literal to be logged
 */
export function log(message: string): void;

/**
 * Logs event with LOG severity level
 * @param obj Any object to be logged
 * @param args Optional array of additional objects to be logged
 */
export function log(obj: any, ...args: any[]): void;

/**
 * Logs event with WARN severity level
 * @param message String-literal to be logged
 */
export function warn(message: string): void;

/**
 * Logs event with WARN severity level
 * @param obj Any object to be logged
 * @param args Optional array of additional objects to be logged
 */
export function warn(obj: any, ...args: any[]): void;

/**
 * Logs event with ERROR severity level
 * @param message String-literal to be logged
 */
export function error(message: string): void;

/**
 * Logs event with ERROR severity level
 * @param obj Any object to be logged
 * @param args Optional array of additional objects to be logged
 */
export function error(obj: any, ...args: any[]): void;

/**
 * Logs event with INFO severity level
 * @param message String-literal to be logged
 */
export function info(message: string): void;

/**
 * Logs event with INFO severity level
 * @param obj Any object to be logged
 * @param args Optional array of additional objects to be logged
 */
export function info(obj: any, ...args: any[]): void;
