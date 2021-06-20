// Type definitions for screenshot-desktop 1.12
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Usama Ahsan <https://github.com/usama8800>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="../node" />

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
export = ScreenshotDesktop;

/*~ This example shows how to have multiple overloads for your function */
declare function ScreenshotDesktop(options?: { format?: ScreenshotDesktop.ImageFormat, screen?: ScreenshotDesktop.DisplayID }): Promise<Buffer>;
declare function ScreenshotDesktop(options?: { filename: string, format?: ScreenshotDesktop.ImageFormat, screen?: ScreenshotDesktop.DisplayID }): Promise<string>;

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block. Often you will want to describe the
 *~ shape of the return type of the function; that type should
 *~ be declared in here, as this example shows.
 */
declare namespace ScreenshotDesktop {
    type DisplayID = number;

    type ImageFormat =
        'bmp' |
        'emf' |
        'exif' |
        'jpg' |
        'jpeg' |
        'gif' |
        'png' |
        'tiff' |
        'wmf';

    /*~ If the module also has properties, declare them here. For example,
     *~ this declaration says that this code is legal:
     *~   import f = require('myFuncLibrary');
     *~   console.log(f.defaultName);
     */
    const defaultName: string;
    let defaultLength: number;
    function listDisplays(): Promise<Array<{ id: DisplayID, name: string }>>;
    function all(): Promise<Array<{ id: DisplayID, name: string }>>;
}
