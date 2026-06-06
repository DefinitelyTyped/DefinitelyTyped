export as namespace wordwrapjs;

declare class Wordwrap {
    /**
     * @param text - the input text to wrap
     * @param options
     */
    static wrap(text: string, options?: Wordwrap.WordwrapOptions): string;
    /**
     * Wraps the input text, returning an array of strings (lines).
     * @param text - input text
     * @param options
     */
    static lines(text: string, options?: Wordwrap.WordwrapOptions): string[];
    /**
     * Returns true if the input text would be wrapped if passed into `.wrap()`.
     * @param text - input text
     */
    static isWrappable(text: string): boolean;
    /**
     * Splits the input text into an array of words and whitespace.
     * @param text - input text
     */
    static getChunks(text: string): string[];
    options: Wordwrap.WordwrapOptions;
    /**
     * @param text - The input text to wrap.
     * @param options
     */
    constructor(text?: string, options?: Wordwrap.WordwrapOptions);
    lines(): string[];
    wrap(): string;
    toString(): string;
}

declare namespace Wordwrap {
    /**
     * Wordwrap options.
     */
    interface WordwrapOptions {
        /**
         * The max column width in characters.
         */
        width?: number;
        /**
         * If true, words exceeding the specified `width` will be forcefully broken
         */
        break?: boolean;
        /**
         * By default, each line output is trimmed. If `noTrim` is set, no line-trimming occurs - all whitespace from the input text is left in.
         */
        noTrim?: boolean;
        /**
         * The end of line character to use. Defaults to `\n`.
         */
        eol?: string;
    }
}

export = Wordwrap;
