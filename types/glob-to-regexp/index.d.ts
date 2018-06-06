// Type definitions for glob-to-regexp 0.4
// Project: https://github.com/fitzgen/glob-to-regexp#readme
// Definitions by: whatasoda <https://github.com/whatasoda>
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
export as namespace GlobToRegExp;

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = GlobToRegExp;

declare function GlobToRegExp(glob: string, options?: GlobToRegExp.Options): RegExp;

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block. Often you will want to describe the
 *~ shape of the return type of the function; that type should
 *~ be declared in here, as this example shows.
 */
declare namespace GlobToRegExp {
    interface Options {
        extended?: boolean;
        globstar?: boolean;
        flags   ?: string;
    }

    /*~ If the module also has properties, declare them here. For example,
     *~ this declaration says that this code is legal:
     *~   import f = require('myFuncLibrary');
     *~   console.log(f.defaultName);
     */
}
