// Type definitions for blocked 1.2
// Project: https://github.com/visionmedia/node-blocked#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = MyFunction;

/*~ This example shows how to have multiple overloads for your function */
declare function MyFunction(callback: (ms: number) => void, options: MyFunction.Options): MyFunction.Timer;

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block. Often you will want to describe the
 *~ shape of the return type of the function; that type should
 *~ be declared in here, as this example shows.
 */
declare namespace MyFunction {
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
