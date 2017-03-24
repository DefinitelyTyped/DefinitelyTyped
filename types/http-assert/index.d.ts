// Type definitions for http-assert 1.2
// Project: https://github.com/jshttp/http-assert
// Definitions by: jKey Lu <https://github.com/jkeylu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param {number} [status] the status code
 * @param {string} [msg] the message of the error, defaulting to node's text for that status code
 * @param {object} [opts] custom properties to attach to the error object
 */
declare function assert(value: any, status?: number, msg?: string, opts?: {}): void;

declare namespace assert {
    /**
     * @param {number} [status] the status code
     * @param {string} [msg] the message of the error, defaulting to node's text for that status code
     * @param {object} [opts] custom properties to attach to the error object
     */
    function equal<T>(a: T, b: T, status?: number, msg?: string, opts?: {}): void;
    /**
     * @param {number} [status] the status code
     * @param {string} [msg] the message of the error, defaulting to node's text for that status code
     * @param {object} [opts] custom properties to attach to the error object
     */
    function notEqual<T>(a: T, b: T, status?: number, msg?: string, opts?: {}): void;
    /**
     * @param {number} [status] the status code
     * @param {string} [msg] the message of the error, defaulting to node's text for that status code
     * @param {object} [opts] custom properties to attach to the error object
     */
    function strictEqual<T>(a: T, b: T, status?: number, msg?: string, opts?: {}): void;
    /**
     * @param {number} [status] the status code
     * @param {string} [msg] the message of the error, defaulting to node's text for that status code
     * @param {object} [opts] custom properties to attach to the error object
     */
    function notStrictEqual<T>(a: T, b: T, status?: number, msg?: string, opts?: {}): void;
    /**
     * @param {number} [status] the status code
     * @param {string} [msg] the message of the error, defaulting to node's text for that status code
     * @param {object} [opts] custom properties to attach to the error object
     */
    function deepEqual<T>(a: T, b: T, status?: number, msg?: string, opts?: {}): void;
    /**
     * @param {number} [status] the status code
     * @param {string} [msg] the message of the error, defaulting to node's text for that status code
     * @param {object} [opts] custom properties to attach to the error object
     */
    function notDeepEqual<T>(a: T, b: T, status?: number, msg?: string, opts?: {}): void;
}

export = assert;
