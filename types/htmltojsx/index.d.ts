// Type definitions for htmltojsx
// Project: https://www.npmjs.com/package/htmltojsx
// Definitions by: Basarat Ali Syed <https://github.com/basarat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8


declare class HTMLtoJSX {
    constructor(options?: {
        createClass?: boolean;
        outputClassName?: string;
        /** as a string e.g. '    ' or '\t' */
        indent?: string;
    });
    convert(html: string): string;
}
export = HTMLtoJSX;
