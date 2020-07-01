// Type definitions for Kramed 0.5
// Project: https://github.com/GitbookIO/kramed
// Definitions by: Matthew Wilkes <https://github.com/tonicblue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface KramedStatic {
    /**
     * Compiles kramdown to HTML.
     *
     * @param src String of kramdown source to be compiled
     * @param callback Function called when the kramdownString has been fully parsed when using async highlighting
     * @return String of compiled HTML
     */
    (src: string, callback: () => void): string;

    /**
     * Compiles kramdown to HTML.
     *
     * @param src String of kramdown source to be compiled
     * @param options Hash of options
     * @param callback Function called when the kramdownString has been fully parsed when using async highlighting
     * @return String of compiled HTML
     */
    (src: string, options?: KramedOptions, callback?: () => void): string;

    /**
     * @param src String of kramdown source to be compiled
     * @param options Hash of options
     */
    lexer(src: string, options?: KramedOptions): any[];

    /**
     * Compiles kramdown to HTML.
     *
     * @param src String of kramdown source to be compiled
     * @param callback Function called when the kramdownString has been fully parsed when using async highlighting
     * @return String of compiled HTML
     */
    parse(src: string, callback: () => void): string;

    /**
     * Compiles kramdown to HTML.
     *
     * @param src String of kramdown source to be compiled
     * @param options Hash of options
     * @param callback Function called when the kramdownString has been fully parsed when using async highlighting
     * @return String of compiled HTML
     */
    parse(src: string, options?: KramedOptions, callback?: () => void): string;

    /**
     * @param options Hash of options
     */
    parser(src: any[], options?: KramedOptions): string;

    /**
     * Sets the default options.
     *
     * @param options Hash of options
     */
    setOptions(options: KramedOptions): KramedStatic;

    Renderer: {
        new(): KramedRenderer;
    };

    Parser: {
        new(options: KramedOptions): KramedParser;
    };
}

export interface KramedRenderer {
    code(code: string, language: string): string;
    blockquote(quote: string): string;
    html(html: string): string;
    heading(text: string, level: number, raw: string): string;
    hr(): string;
    list(body: string, ordered: boolean): string;
    listitem(text: string): string;
    paragraph(text: string): string;
    table(header: string, body: string): string;
    tablerow(content: string): string;
    tablecell(content: string, flags: {
        header: boolean,
        align: string
    }): string;
    strong(text: string): string;
    em(text: string): string;
    codespan(code: string): string;
    br(): string;
    del(text: string): string;
    link(href: string, title: string, text: string): string;
    image(href: string, title: string, text: string): string;
    text(text: string): string;
}

export interface KramedParser {
    parse(source: any[]): string;
}

export interface KramedOptions {
    /**
     * Type: object Default: new Renderer()
     *
     * An object containing functions to render tokens to HTML.
     */
    renderer?: KramedRenderer;

    /**
     * Enable GitHub flavored kramdown.
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
     * Conform to obscure parts of kramdown.pl as much as possible. Don't fix any of the original kramdown bugs or poor behavior.
     */
    pedantic?: boolean;

    /**
     * Sanitize the output. Ignore any HTML that has been input.
     */
    sanitize?: boolean;

    /**
     * Use smarter list behavior than the original kramdown. May eventually be default with the old behavior moved into pedantic.
     */
    smartLists?: boolean;

    /**
     * Shows an HTML error message when rendering fails.
     */
    silent?: boolean;

    /**
     * A function to highlight code blocks. The function takes three arguments: code, lang, and callback.
     */
    highlight?(code: string, lang: string, callback?: () => void): string;

    /**
     * Set the prefix for code block classes.
     */
    langPrefix?: string;

    /**
     * Use "smart" typograhic punctuation for things like quotes and dashes.
     */
    smartypants?: boolean;
}

export const kramed: KramedStatic;
