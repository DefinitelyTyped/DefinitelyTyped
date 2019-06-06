// Type definitions for xml-formatter 1.1
// Project: https://github.com/chrisbottin/xml-formatter/ (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Joachim Holwech <https://github.com/holwech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ If this module is a UMD module that exposes a global variable 'myFuncLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace xmlFormatter;

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = Format;

/*~ This example shows how to have multiple overloads for your function */
declare function Format(xml: string, option?: Format.Options): string;

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block. Often you will want to describe the
 *~ shape of the return type of the function; that type should
 *~ be declared in here, as this example shows.
 */
declare namespace Format {
    interface Options {
        debug?: boolean;
        indetation?: string;
        stripComments?: boolean;
        collapseContent?: boolean;
    }
}
