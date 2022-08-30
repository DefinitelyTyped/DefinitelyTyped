// Type definitions for pushid 1.0
// Project: https://github.com/appsattic/pushid
// Definitions by: Bob Matcuk <https://github.com/bmatcuk>
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
export = pushid;

declare function pushid(): string;
