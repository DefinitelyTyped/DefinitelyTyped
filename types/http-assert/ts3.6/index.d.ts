/**
 * @param status the status code
 * @param msg the message of the error, defaulting to node's text for that status code
 * @param opts custom properties to attach to the error object
 */
declare function assert(value: any, status?: number, msg?: string, opts?: {}): void;
declare function assert(value: any, status?: number, opts?: {}): void;

declare namespace assert {
    /**
     * @param status the status code
     * @param msg the message of the error, defaulting to node's text for that status code
     * @param opts custom properties to attach to the error object
     */
    type Assert = <T>(a: T, b: T, status?: number, msg?: string, opts?: {}) => void;

    /**
     * @param status the status code
     * @param msg the message of the error, defaulting to node's text for that status code
     * @param opts custom properties to attach to the error object
     */
    type AssertOK = (a: any, status?: number, msg?: string, opts?: {}) => void;

    /**
     * @param status the status code
     * @param msg the message of the error, defaulting to node's text for that status code
     * @param opts custom properties to attach to the error object
     */
    type AssertEqual = (a: any, b: any, status?: number, msg?: string, opts?: {}) => void;

    const equal: Assert;
    const notEqual: Assert;
    const ok: AssertOK;
    const strictEqual: AssertEqual;
    const notStrictEqual: AssertEqual;
    const deepEqual: AssertEqual;
    const notDeepEqual: AssertEqual;
}

export = assert;
