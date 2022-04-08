// Type definitions for replace-ext 2.0
// Project: https://github.com/wearefractal/replace-ext
// Definitions by: Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Replaces the extension from path with extension and returns the updated path string.
 *
 * Does not replace the extension if path is not a string or is empty.
 */
declare function replaceExt(path: string, extension: string): string;

export = replaceExt;
