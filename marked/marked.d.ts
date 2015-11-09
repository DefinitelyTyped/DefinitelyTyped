// Type definitions for Marked
// Project: https://github.com/chjj/marked
// Definitions by: William Orr <https://github.com/worr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface MarkedStatic {
    /**
     * Compiles markdown to HTML.
     *
     * @param src String of markdown source to be compiled
     * @param callback Function called when the markdownString has been fully parsed when using async highlighting
     * @return String of compiled HTML
     */
    (src: string, callback: Function): string;

    /**
     * Compiles markdown to HTML.
     *
     * @param src String of markdown source to be compiled
     * @param options Hash of options
     * @param callback Function called when the markdownString has been fully parsed when using async highlighting
     * @return String of compiled HTML
     */
    (src: string, options?: MarkedOptions, callback?: Function): string;

    /**
     * @param src String of markdown source to be compiled
     * @param options Hash of options
     */
    lexer(src: string, options?: MarkedOptions): any[];

    /**
     * Compiles markdown to HTML.
     *
     * @param src String of markdown source to be compiled
     * @param callback Function called when the markdownString has been fully parsed when using async highlighting
     * @return String of compiled HTML
     */
    parse(src: string, callback: Function): string;

    /**
     * Compiles markdown to HTML.
     *
     * @param src String of markdown source to be compiled
     * @param options Hash of options
     * @param callback Function called when the markdownString has been fully parsed when using async highlighting
     * @return String of compiled HTML
     */
    parse(src: string, options?: MarkedOptions, callback?: Function): string;

    /**
     * @param options Hash of options
     */
    parser(src: any[], options?: MarkedOptions): string;

    /**
     * Sets the default options.
     *
     * @param options Hash of options
     */
    setOptions(options: MarkedOptions): MarkedStatic;
}

interface MarkedOptions {
    /**
     * Type: object Default: new Renderer()
     *
     * An object containing functions to render tokens to HTML.
     */
    renderer?: Object; 

    /**
     * Enable GitHub flavored markdown.
     */
    gfm?: boolean;

    /**
     * Enable GFM tables. This option requires the gfm option to be true.
     */
    tables?: boolean;

    /**
     * Enable GFM line breaks. This option requires the gfm option to be true.
     */
    breaks?: boolean;

    /**
     * Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
     */
    pedantic?: boolean;

    /**
     * Sanitize the output. Ignore any HTML that has been input.
     */
    sanitize?: boolean;

    /**
     * Use smarter list behavior than the original markdown. May eventually be default with the old behavior moved into pedantic.
     */
    smartLists?: boolean;

    /**
     * Shows an HTML error message when rendering fails.
     */
    silent?: boolean;

    /**
     * A function to highlight code blocks. The function takes three arguments: code, lang, and callback.
     */
    highlight? (code: string, lang: string, callback?: Function): string;

    /**
     * Set the prefix for code block classes.
     */
    langPrefix?: string;

    /**
     * Use "smart" typograhic punctuation for things like quotes and dashes.
     */
    smartypants?: boolean;
}

declare module "marked" {
    export = marked;
}

declare var marked: MarkedStatic;
