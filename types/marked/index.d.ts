// Type definitions for Marked 1.1
// Project: https://github.com/markedjs/marked, https://marked.js.org
// Definitions by: William Orr <https://github.com/worr>
//                 BendingBender <https://github.com/BendingBender>
//                 CrossR <https://github.com/CrossR>
//                 Mike Wickett <https://github.com/mwickett>
//                 Hitomi Hatsukaze <https://github.com/htkzhtm>
//                 Ezra Celli <https://github.com/ezracelli>
//                 Romain LE BARO <https://github.com/scandinave>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace marked;

export = marked;
/**
 * Compiles markdown to HTML synchronously.
 *
 * @param src String of markdown source to be compiled
 * @param options Optional hash of options
 * @return String of compiled HTML
 */
declare function marked(src: string, options?: marked.MarkedOptions): string;

/**
 * Compiles markdown to HTML asynchronously.
 *
 * @param src String of markdown source to be compiled
 * @param callback Function called when the markdownString has been fully parsed when using async highlighting
 */
declare function marked(src: string, callback: (error: any | undefined, parseResult: string) => void): void;

/**
 * Compiles markdown to HTML asynchronously.
 *
 * @param src String of markdown source to be compiled
 * @param options Hash of options
 * @param callback Function called when the markdownString has been fully parsed when using async highlighting
 */
declare function marked(src: string, options: marked.MarkedOptions, callback: (error: any | undefined, parseResult: string) => void): void;

declare namespace marked {
    const defaults: MarkedOptions;

    /**
     * @param src String of markdown source to be compiled
     * @param options Hash of options
     */
    function lexer(src: string, options?: MarkedOptions): TokensList;

    /**
     * @param src String of markdown source to be compiled
     * @param links Array of links
     * @param options Hash of options
     * @return String of compiled HTML
     */

    function inlineLexer(src: string, links: string[], options?: MarkedOptions): string;

    /**
     * Compiles markdown to HTML.
     *
     * @param src String of markdown source to be compiled
     * @param callback Function called when the markdownString has been fully parsed when using async highlighting
     * @return String of compiled HTML
     */
    function parse(src: string, callback: (error: any | undefined, parseResult: string) => void): string;

    /**
     * Compiles markdown to HTML.
     *
     * @param src String of markdown source to be compiled
     * @param options Hash of options
     * @param callback Function called when the markdownString has been fully parsed when using async highlighting
     * @return String of compiled HTML
     */
    function parse(src: string, options?: MarkedOptions, callback?: (error: any | undefined, parseResult: string) => void): string;

    /**
     * @param src Tokenized source as array of tokens
     * @param options Hash of options
     */
    function parser(src: TokensList, options?: MarkedOptions): string;

    /**
     * Sets the default options.
     *
     * @param options Hash of options
     */
    function options(options: MarkedOptions): typeof marked;

    /**
     * Sets the default options.
     *
     * @param options Hash of options
     */
    function setOptions(options: MarkedOptions): typeof marked;

    /**
     * Gets the original marked default options.
     */
    function getDefaults(): MarkedOptions;

    function walkTokens(tokens: TokensList, callback: (token: Token) => void): typeof marked;

    /**
     * Use Extension
     * @param Renderer
     */
    function use(options: MarkedOptions): void;

    class InlineLexer {
        constructor(links: string[], options?: MarkedOptions);
        options: MarkedOptions;
        links: string[];
        rules: Rules;
        renderer: Renderer;
        static rules: Rules;
        static output(src: string, links: string[], options?: MarkedOptions): string;
        output(src: string): string;
        static escapes(text: string): string;
        outputLink(cap: string[], link: string): string;
        smartypants(text: string): string;
        mangle(text: string): string;
    }

    class Tokenizer {
        constructor(options?: MarkedOptions);
        options: MarkedOptions;
        space(src: string): Tokens.Space;
        code(src: string, token: Token): Tokens.Code;
        fences(src: string): Tokens.Code;
        heading(src: string): Tokens.Heading;
        nptable(src: string): Tokens.Table;
        hr(src: string): Tokens.Hr;
        blockquote(src: string): Tokens.Blockquote;
        list(src: string): Tokens.List;
        html(src: string): Tokens.HTML;
        def(src: string): Tokens.Def;
        table(src: string): Tokens.Table;
        lheading(src: string): Tokens.Heading;
        paragraph(src: string): Tokens.Paragraph;
        text(src: string): Tokens.Text;
        escape(src: string): Tokens.Escape;
        tag(src: string, inLink: boolean, inRawBlock: boolean): Tokens.Tag;
        link(src: string): Tokens.Image | Tokens.Link;
        reflink(src: string, links: Tokens.Link[] |Tokens.Image[]): Tokens.Link |Tokens.Image | Tokens.Text;
        strong(src: string): Tokens.Strong;
        em(src: string): Tokens.Em;
        codespan(src: string): Tokens.Codespan;
        br(src: string): Tokens.Br;
        del(src: string): Tokens.Del;
        autolink(src: string, mangle: (cap: string) => string): Tokens.Link;
        url(src: string, mangle: (cap: string) => string): Tokens.Link;
        inlineText(src: string, inRawBlock: boolean, smartypants: (cap: string) => string): Tokens.Text;
    }

    class Renderer {
        constructor(options?: MarkedOptions);
        options: MarkedOptions;
        code(code: string, language: string | undefined, isEscaped: boolean): string;
        blockquote(quote: string): string;
        html(html: string): string;
        heading(text: string, level: 1 | 2 | 3 | 4 | 5 | 6, raw: string, slugger: Slugger): string;
        hr(): string;
        list(body: string, ordered: boolean, start: number): string;
        listitem(text: string): string;
        checkbox(checked: boolean): string;
        paragraph(text: string): string;
        table(header: string, body: string): string;
        tablerow(content: string): string;
        tablecell(content: string, flags: {
            header: boolean;
            align: 'center' | 'left' | 'right' | null;
        }): string;
        strong(text: string): string;
        em(text: string): string;
        codespan(code: string): string;
        br(): string;
        del(text: string): string;
        link(href: string | null, title: string | null, text: string): string;
        image(href: string | null, title: string | null, text: string): string;
        text(text: string): string;
    }

    class TextRenderer {
        strong(text: string): string;
        em(text: string): string;
        codespan(text: string): string;
        del(text: string): string;
        text(text: string): string;
        link(href: string | null, title: string | null, text: string): string;
        image(href: string | null, title: string | null, text: string): string;
        br(): string;
        html(text: string): string;
    }

    class Parser {
        constructor(options?: MarkedOptions);
        tokens: TokensList;
        token: Token|null;
        options: MarkedOptions;
        renderer: Renderer;
        slugger: Slugger;
        static parse(src: TokensList, options?: MarkedOptions): string;
        parse(src: TokensList): string;
        next(): Token;
        peek(): Token | 0;
        parseText(): string;
        tok(): string;
    }

    class Lexer {
        constructor(options?: MarkedOptions);
        tokens: TokensList;
        options: MarkedOptions;
        rules: Rules;
        static rules: Rules;
        static lex(src: TokensList, options?: MarkedOptions): TokensList;
        lex(src: string): TokensList;
        token(src: string, top: boolean): TokensList;
        inline(tokens: TokensList): TokensList;
    }

    class Slugger {
        seen: {[slugValue: string]: number};
        slug(value: string): string;
    }

    interface Rules {
        [ruleName: string]: RegExp | Rules;
    }

    type TokensList = Token[] & {
        links: {
            [key: string]: { href: string | null; title: string | null; }
        }
    };

    type Token =
        Tokens.Space
        | Tokens.Code
        | Tokens.Heading
        | Tokens.Table
        | Tokens.Hr
        | Tokens.Blockquote
        | Tokens.BlockquoteStart
        | Tokens.BlockquoteEnd
        | Tokens.List
        | Tokens.ListItem
        | Tokens.Paragraph
        | Tokens.HTML
        | Tokens.Text
        | Tokens.Def
        | Tokens.Escape
        | Tokens.Tag
        | Tokens.Image
        | Tokens.Link
        | Tokens.Strong
        | Tokens.Em
        | Tokens.Codespan
        | Tokens.Br
        | Tokens.Del;

    namespace Tokens {
        interface Space {
            type: 'space';
            raw: string;
        }

        interface Code {
            type: 'code';
            raw: string;
            codeBlockStyle?: 'indented';
            lang?: string;
            text: string;
        }

        interface Heading {
            type: 'heading';
            raw: string;
            depth: number;
            text: string;
        }

        interface Table {
            type: 'table';
            raw: string;
            header: string[];
            align: Array<'center' | 'left' | 'right' | null>;
            cells: string[][];
        }

        interface Hr {
            type: 'hr';
            raw: string;
        }

        interface Blockquote {
            type: 'blockquote';
            raw: string;
            text: string;
        }

        interface BlockquoteStart {
            type: 'blockquote_start';
            raw: string;
        }

        interface BlockquoteEnd {
            type: 'blockquote_end';
            raw: string;
        }

        interface List {
            type: 'list_start';
            raw: string;
            ordered: boolean;
            start: boolean;
            loose: boolean;
            items: ListItem[];
        }

        interface ListItem {
            type: 'list_item';
            raw: string;
            task: boolean;
            checked: boolean;
            loose: boolean;
            text: string;
        }

        interface Paragraph {
            type: 'paragraph';
            raw: string;
            pre?: boolean;
            text: string;
        }

        interface HTML {
            type: 'html';
            raw: string;
            pre: boolean;
            text: string;
        }

        interface Text {
            type: 'text';
            raw: string;
            text: string;
        }

        interface Def {
            raw: string;
            href: string;
            title: string;
        }

        interface Escape {
            type: 'escape';
            raw: string;
            text: string;
        }

        interface Tag {
            type: 'text' | 'html';
            raw: string;
            inLink: boolean;
            inRawBlock: boolean;
            text: string;
        }

        interface Link {
            type: 'link';
            raw: string;
            href: string;
            title: string;
            text: string;
            tokens?: Text[];
        }

        interface Image {
            type: 'image';
            raw: string;
            href: string;
            title: string;
            text: string;
        }

        interface Strong {
            type: 'strong';
            raw: string;
            text: string;
        }

         interface Em {
             type: 'em';
             raw: string;
             text: string;
         }

         interface Codespan {
             type: 'codespan';
             raw: string;
             text: string;
         }

         interface Br {
            type: 'br';
            raw: string;
         }

         interface Del {
             type: 'del';
             raw: string;
             text: string;
         }
    }

    interface MarkedOptions {
        /**
         * A prefix URL for any relative link.
         */
        baseUrl?: string;

        /**
         * Enable GFM line breaks. This option requires the gfm option to be true.
         */
        breaks?: boolean;

        /**
         * Enable GitHub flavored markdown.
         */
        gfm?: boolean;

        /**
         * Include an id attribute when emitting headings.
         */
        headerIds?: boolean;

        /**
         * Set the prefix for header tag ids.
         */
        headerPrefix?: string;

        /**
         * A function to highlight code blocks. The function can either be
         * synchronous (returning a string) or asynchronous (callback invoked
         * with an error if any occurred during highlighting and a string
         * if highlighting was successful)
         */
        highlight?(code: string, lang: string, callback?: (error: any | undefined, code?: string) => void): string | void;

        /**
         * Set the prefix for code block classes.
         */
        langPrefix?: string;

        /**
         * Mangle autolinks (<email@domain.com>).
         */
        mangle?: boolean;

        /**
         * Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
         */
        pedantic?: boolean;

        /**
         * Type: object Default: new Renderer()
         *
         * An object containing functions to render tokens to HTML.
         */
        renderer?: Renderer;

        /**
         * Sanitize the output. Ignore any HTML that has been input.
         */
        sanitize?: boolean;

        /**
         * Optionally sanitize found HTML with a sanitizer function.
         */
        sanitizer?(html: string): string;

        /**
         * Shows an HTML error message when rendering fails.
         */
        silent?: boolean;

        /**
         * Use smarter list behavior than the original markdown. May eventually be default with the old behavior moved into pedantic.
         */
        smartLists?: boolean;

        /**
         * Use "smart" typograhic punctuation for things like quotes and dashes.
         */
        smartypants?: boolean;

        /**
         * The tokenizer defines how to turn markdown text into tokens.
         */
        tokenizer?: Tokenizer;

        /**
         * The walkTokens function gets called with every token.
         * Child tokens are called before moving on to sibling tokens.
         * Each token is passed by reference so updates are persisted when passed to the parser.
         * The return value of the function is ignored.
         */
        walkTokens?: (tokens: TokensList, callback: (token: Token) => void) => any;
        /**
         * Generate closing slash for self-closing tags (<br/> instead of <br>)
         */
        xhtml?: boolean;
    }
}
