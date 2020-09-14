// Type definitions for http-assert 1.5
// Project: https://github.com/jshttp/http-assert
// Definitions by: jKey Lu <https://github.com/jkeylu>
//                 Peter Squicciarini <https://github.com/stripedpajamas>
//                 Alex Bulanov <https://github.com/sapfear>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/**
 * Tests if value is truthy.
 * If value is not truthy, an HttpError is thrown that is constructed with the given status, message, and properties.
 *
 * @param status the status code as a number.
 * @param message the message of the error, defaulting to node's text for that status code.
 * @param properties custom properties to attach to the object.
 */
declare function assert(value: any, status?: number, message?: string, properties?: {}): void;
declare function assert(value: any, status?: number, properties?: {}): void;

declare namespace assert {
    /**
     * Tests for deep equality between a and b. Primitive values are compared with the Abstract Equality Comparison (==).
     * If a and b are not equal, an HttpError is thrown that is constructed with the given status, message, and properties.
     *
     * @param status the status code as a number.
     * @param message the message of the error, defaulting to node's text for that status code.
     * @param properties custom properties to attach to the object.
     */
    function deepEqual(a: any, b: any, status?: number, message?: string, properties?: {}): void;
    function deepEqual(a: any, b: any, status?: number, properties?: {}): void;

    /**
     * Tests shallow, coercive equality between a and b using the Abstract Equality Comparison (==).
     * If a and b are not equal, an HttpError is thrown that is constructed with the given status, message, and properties.
     *
     * @param status the status code as a number.
     * @param message the message of the error, defaulting to node's text for that status code.
     * @param properties custom properties to attach to the object.
     */
    function equal(a: any, b: any, status?: number, message?: string, properties?: {}): void;
    function equal(a: any, b: any, status?: number, properties?: {}): void;

    /**
     * Tests for deep equality between a and b. Primitive values are compared with the Abstract Equality Comparison (==).
     * If a and b are equal, an HttpError is thrown that is constructed with the given status, message, and properties.
     *
     * @param status the status code as a number.
     * @param message the message of the error, defaulting to node's text for that status code.
     * @param properties custom properties to attach to the object.
     */
    function notDeepEqual(a: any, b: any, status?: number, message?: string, properties?: {}): void;
    function notDeepEqual(a: any, b: any, status?: number, properties?: {}): void;

    /**
     * Tests shallow, coercive equality between a and b using the Abstract Equality Comparison (==).
     * If a and b are equal, an HttpError is thrown that is constructed with the given status, message, and properties.
     *
     * @param status the status code as a number.
     * @param message the message of the error, defaulting to node's text for that status code.
     * @param properties custom properties to attach to the object.
     */
    function notEqual(a: any, b: any, status?: number, message?: string, properties?: {}): void;
    function notEqual(a: any, b: any, status?: number, properties?: {}): void;

    /**
     * Tests strict equality between a and b as determined by the SameValue Comparison (===).
     * If a and b are equal, an HttpError is thrown that is constructed with the given status, message, and properties.
     *
     * @param status the status code as a number.
     * @param message the message of the error, defaulting to node's text for that status code.
     * @param properties custom properties to attach to the object.
     */
    function notStrictEqual(a: any, b: any, status?: number, message?: string, properties?: {}): void;
    function notStrictEqual(a: any, b: any, status?: number, properties?: {}): void;

    /**
     * Tests if value is truthy.
     * If value is not truthy, an HttpError is thrown that is constructed with the given status, message, and properties.
     *
     * @param status the status code as a number.
     * @param message the message of the error, defaulting to node's text for that status code.
     * @param properties custom properties to attach to the object.
     */
    function ok(value: any, status?: number, message?: string, properties?: {}): void;
    function ok(value: any, status?: number, properties?: {}): void;

    /**
     * Tests strict equality between a and b as determined by the SameValue Comparison (===).
     * If a and b are not equal, an HttpError is thrown that is constructed with the given status, message, and properties.
     *
     * @param status the status code as a number.
     * @param message the message of the error, defaulting to node's text for that status code.
     * @param properties custom properties to attach to the object.
     */
    function strictEqual<T>(a: any, b: T, status?: number, message?: string, properties?: {}): void;
    function strictEqual<T>(a: any, b: T, status?: number, properties?: {}): void;
}

export = assert;
