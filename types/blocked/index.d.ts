// Type definitions for blocked 1.2
// Project: https://github.com/visionmedia/node-blocked#readme
// Definitions by: Jonas Lochmann <https://github.com/l-jonas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

export = Blocked;

declare function Blocked(callback: (ms: number) => void, options: Blocked.Options): Blocked.Timer;

declare namespace Blocked {
  interface Options {
    threshold: number;  // in milliseconds
  }

  interface Timer {
    // require the event loop to keep active
    ref: () => void;
    // do not require the event loop to keep active
    unref: () => void;
  }
}
