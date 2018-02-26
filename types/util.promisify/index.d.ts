// Type definitions for util.promisify 1.0
// Project: https://github.com/ljharb/util.promisify#readme
// Definitions by: Adam Voss <https://github.com/adamvoss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('util.promisify');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */
export = promisify;

declare function promisify(f: (...args: any[]) => void): (...args: any[]) => Promise<any>;

declare namespace promisify {
    interface implementation {
        (fn: (...args: any[]) => void): (...args: any[]) => Promise<any>;
        custom: symbol;
        customPromisifyArgs: symbol | undefined;
    }

    const custom: symbol;
    const customPromisifyArgs: symbol;
    function getPolyfill(): implementation;
    const implementation: implementation;
    function shim(): implementation;
}

declare module "util" {
    let promisify: {
        (fn: (...args: any[]) => void): (...args: any[]) => Promise<any>;
        custom: symbol;
    };
}
