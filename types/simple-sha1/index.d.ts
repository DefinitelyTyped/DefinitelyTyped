// Type definitions for simple-sha1 3.0
// Project: https://github.com/michaelrhodes/simple-sha1
// Definitions by: Emily M Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = sha1;

/**
 * @param cb On the browser, `data` is a `Uint8Array`, in node, `data` is a `Buffer` (which is a subclass of Uint8Array)
 */
declare function sha1(buf: string | NodeJS.ArrayBufferView, cb: (data: Buffer | Uint8Array) => void): void;

declare namespace sha1 {
    /**
     * @returns On the browser, `Uint8Array`, in node, a `Buffer` (which is a subclass of Uint8Array)
     */
    function sync(buf: string | NodeJS.ArrayBufferView): Buffer | Uint8Array;
}
