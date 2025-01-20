/// <reference types="node" />

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

export = Blocked;

declare function Blocked(callback: (ms: number) => void, options?: Blocked.Options): NodeJS.Timer;

declare namespace Blocked {
    interface Options {
        threshold?: number | undefined; // in milliseconds
        interval?: number | undefined; // in milliseconds
    }
}
