// Type definitions for json-schema-generator 2.0
// Project: https://github.com/krg7880/json-schema-generator
// Definitions by: Marcell Toth <https://github.com/marcelltoth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { JSONSchema4 } from 'json-schema';

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

export = generate;

/*~ This example shows how to have multiple overloads for your function */
declare function generate(schema: object): JSONSchema4;
