// Type definitions for promise-ring
// Project: https://github.com/DavidAnson/promise-ring
// Definitions by: Max Battcher <http://github.com/WorldMaker>
// Definitions: https://github.com/borisyankov/DefinitelyTyped   

declare module 'promise-ring' {
    /**
     * Invokes a Function that takes a callback; converts the result to a Promise.
     *
     * @param {Function} fn Function to invoke, followed by arguments, no callback.
     * @returns {Promise} Promise for result.
     */
    export function call<T>(fn: Function, ...args: any[]): Promise<T>;

    /**
     * Invokes a Function that takes a callback; converts the result to a Promise.
     *
     * @param {Function} fn Function to invoke.
     * @param {Array} argsArray Arguments for fn, no callback.
     * @returns {Promise} Promise for result.
     */
    export function apply<T>(fn: Function, argsArray: any[]): Promise<T>;

    /**
     * Invokes a Function that takes a callback; converts the result to a Promise.
     *
     * @param {Object} thisArg Value of this for the call to fn.
     * @param {Function} fn Function to invoke, followed by arguments, no callback.
     * @returns {Promise} Promise for result.
     */
    export function callBound<T>(thisArg: any, fn: Function, ...args: any[]): Promise<T>;

    /**
     * Invokes a Function that takes a callback; converts the result to a Promise.
     *
     * @param {Object} thisArg Value of this for the call to fn.
     * @param {Function} fn Function to invoke.
     * @param {Array} argsArray Arguments for fn, no callback.
     * @returns {Promise} Promise for result.
     */
    export function applyBound<T>(thisArg: any, fn: Function, argsArray: any[]): Promise<T>;

    /**
     * Wraps a Function that takes a callback with one that returns a Promise.
     *
     * @param {Function} fn Function to wrap.
     * @returns {Function} Wrapped Function that returns a Promise for fn.
     */
    export function wrap<T>(fn: Function): (...args: any[]) => Promise<T>;

    /**
     * Wraps a Function that takes a callback with one that returns a Promise.
     *
     * @param {Object} thisArg Value of this for the call to fn.
     * @param {Function} fn Function to wrap.
     * @returns {Function} Wrapped Function that returns a Promise for fn.
     */
    export function wrapBound<T>(thisArg: any, fn: Function): (...args: any[]) => Promise<T>;

    /**
     * Wraps all Functions of an Object with bound Functions that returns a Promise.
     *
     * @param {Object} obj Object with Functions to wrap.
     * @returns {Object} Wrapped Object with functions that returns a Promise.
     */
    export function wrapAll(obj: any): any;
}
