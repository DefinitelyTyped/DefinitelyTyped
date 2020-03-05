// Type definitions for decomment 0.9
// Project: https://github.com/vitaly-t/decomment
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * This method first checks if the code starts with <,
 * as an HTML, and if so, all <!-- comment --> entries are removed, according to the options
 * see {@link https://github.com/vitaly-t/decomment#decommentcode-options--string}
 */
declare function decomment(code: string, options?: decomment.Options): string;

declare namespace decomment {
    interface Options {
        /**
         * keep special multi-line comments that begin with:
         * - <!--[if - for conditional comments in HTML
         * - /*! - for everything else (other than HTML)
         * @default false - remove all multi-line comments
         */
        safe?: boolean;
        /**
         * Takes either a single or an array of regular expressions to match against.
         * All matching blocks are then skipped, as well as any comment-like content inside them
         */
        ignore?: RegExp | RegExp[];
        /**
         * replace comment blocks with white spaces where needed,
         * in order to preserve the original line + column position of every code element.
         * @default false - remove comment blocks entirely
         */
        space?: boolean;
        /**
         * remove empty lines that follow removed full-line comments
         * @defualt false - do not trim comments
         */
        trim?: boolean;
    }

    /**
     * Unlike the default decomment, it instructs the library that text is not a JSON,
     * JavaScript or HTML, rather a plain text that needs no parsing or validation,
     * only to remove \/\/ and \/**\/ comments from it according to the options.
     */
    function text(text: string, options?: Options): string;
    /**
     * Unlike the default decomment method, it instructs the library not to parse
     * or validate the input in any way, rather assume it to be HTML,
     * and remove all <!-- comment --> entries from it according to the options.
     */
    function html(html: string, options?: Options): string;
    /**
     * Returns End-of-Line string used within the text, based on the occurrence frequency:
     * - \n - for Unix-encoded text
     * - \r\n - for Windows-encoded text
     */
    function getEOL(text: string): string;
}

export = decomment;
