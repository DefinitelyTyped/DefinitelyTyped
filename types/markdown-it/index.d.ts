// Type definitions for markdown-it
// Project: https://github.com/markdown-it/markdown-it
// Definitions by: York Yao <https://github.com/plantain-00/>, Robert Coie <https://github.com/rapropos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface MarkdownItStatic {
    new (): MarkdownIt.MarkdownIt;
    new (presetName: "commonmark" | "zero" | "default", options?: MarkdownIt.Options): MarkdownIt.MarkdownIt;
    new (options: MarkdownIt.Options): MarkdownIt.MarkdownIt;
    (): MarkdownIt.MarkdownIt;
    (presetName: "commonmark" | "zero" | "default", options ?: MarkdownIt.Options): MarkdownIt.MarkdownIt;
    (options: MarkdownIt.Options): MarkdownIt.MarkdownIt;
}

declare var MarkdownIt: MarkdownItStatic;
export = MarkdownIt;
export as namespace markdownit;

declare module MarkdownIt {
    interface MarkdownIt {
        render(md: string, env?: any): string;
        renderInline(md: string, env?: any): string;
        parse(src: string, env: any): Token[];
        parseInline(src: string, env: any): Token[];

        /*
        // The following only works in 3.0
        // Since it's still not allowed to target 3.0, i'll leave the code commented out

        use<T extends Array<any> = any[]>(
            plugin: (md: MarkdownIt, ...params: T) => void,
            ...params: T
        ): MarkdownIt;
        */

        use(plugin: (md: MarkdownIt, ...params: any[]) => void, ...params: any[]): MarkdownIt;

        utils: {
            assign(obj: any): any;
            isString(obj: any): boolean;
            has(object: any, key: string): boolean;
            unescapeMd(str: string): string;
            unescapeAll(str: string): string;
            isValidEntityCode(str: any): boolean;
            fromCodePoint(str: string): string;
            escapeHtml(str: string): string;
            arrayReplaceAt(src: any[], pos: number, newElements: any[]): any[]
            isSpace(str: any): boolean;
            isWhiteSpace(str: any): boolean
            isMdAsciiPunct(str: any): boolean;
            isPunctChar(str: any): boolean;
            escapeRE(str: string): string;
            normalizeReference(str: string): string;
        }
        
        disable(rules: string[] | string, ignoreInvalid?: boolean): MarkdownIt;
        enable(rules: string[] | string, ignoreInvalid?: boolean): MarkdownIt;
        set(options: Options): MarkdownIt;
        normalizeLink(url: string): string;
        normalizeLinkText(url: string): string;
        validateLink(url: string): boolean;
        block: ParserBlock;
        core: Core;
        helpers: any;
        inline: ParserInline;
        linkify: LinkifyIt;
        renderer: Renderer;
    }
    interface Options {
        html?: boolean;
        xhtmlOut?: boolean;
        breaks?: boolean;
        langPrefix?: string;
        linkify?: boolean;
        typographer?: boolean;
        quotes?: string;
        highlight?: (str: string, lang: string) => void;
    }
    interface LinkifyIt {
        tlds(lang: string, linkified: boolean): void;
    }
    interface Renderer {
        rules: { [name: string]: TokenRender };
        render(tokens: Token[], options: any, env: any): string;
        renderAttrs(token: Token): string;
        renderInline(tokens: Token[], options: any, env: any): string;
        renderToken(tokens: Token[], idx: number, options: any): string;
    }
    interface Token {
        new (type: string, tag: string, nesting: number): Token;
        attrGet: (name: string) => string | null;
        attrIndex: (name: string) => number;
        attrJoin: (name: string, value: string) => void;
        attrPush: (attrData: string[]) => void;
        attrSet: (name: string, value: string) => void;
        attrs: string[][];
        block: boolean;
        children: Token[];
        content: string;
        hidden: boolean;
        info: string;
        level: number;
        map: number[];
        markup: string;
        meta: any;
        nesting: number;
        tag: string;
        type: string;
    }

    type TokenRender = (tokens: Token[], index: number, options: any, env: any, self: Renderer) => void;

    interface Rule<S extends State = State> {
        (state: S, silent?: boolean): boolean | void;
    }

    interface RuleInline extends Rule<StateInline> {}
    interface RuleBlock extends Rule<StateBlock> {}

    interface Ruler<S extends State = State> {
        after(afterName: string, ruleName: string, rule: Rule<S>, options?: any): void;
        at(name: string, rule: Rule<S>, options?: any): void;
        before(beforeName: string, ruleName: string, rule: Rule<S>, options?: any): void;
        disable(rules: string | string[], ignoreInvalid?: boolean): string[];
        enable(rules: string | string[], ignoreInvalid?: boolean): string[];
        enableOnly(rule: string, ignoreInvalid?: boolean): void;
        getRules(chain: string): Rule<S>[];
        push(ruleName: string, rule: Rule<S>, options?: any): void;
    }

    interface RulerInline extends Ruler<StateInline> {}
    interface RulerBlock extends Ruler<StateBlock> {}

    interface ParserBlock {
        parse(src: string, md: MarkdownIt, env: any, outTokens: Token[]): void;
        ruler: RulerBlock;
    }

    interface Core {
        process(state: any): void;
        ruler: Ruler;
    }

    interface ParserInline {
        parse(src: string, md: MarkdownIt, env: any, outTokens: Token[]): void;
        tokenize(state: State): void;
        skipToken(state: State): void;
        ruler: RulerInline;
        ruler2: RulerInline;
    }

    interface Delimiter {
        close: boolean;
        end: number;
        jump: number;
        length: number;
        level: number;
        marker: number;
        open: boolean;
        token: number;
    }

    interface State {
        env: any;
        level: number;

        /** Link to parser instance */
        md: MarkdownIt;

        /** The markdown source code that is being parsed. */
        src: string;

        tokens: Token[];

        /** Return any for a yet untyped property */
        [undocumented: string]: any;
    }

    interface StateInline extends State {
        /**
         * Stores `{ start: end }` pairs. Useful for backtrack
         * optimization of pairs parse (emphasis, strikes).
         */
        cache: { [start: number]: number };

        /** Emphasis-like delimiters */
        delimiters: Delimiter[];

        pending: string;
        pendingLevel: number;

        /** Index of the first character of this token. */
        pos: number;

        /** Index of the last character that can be used (for example the one before the end of this line). */
        posMax: number;

        /**
         * Push new token to "stream".
         * If pending text exists, flush it as text token.
         */
        push(type: string, tag: string, nesting: number): Token;

        /** Flush pending text */
        pushPending(): Token;

        /**
         * Scan a sequence of emphasis-like markers and determine whether
         * it can start an emphasis sequence or end an emphasis sequence.
         * @param start - position to scan from (it should point to a valid marker)
         * @param canSplitWord - determine if these markers can be found inside a word
         */
        scanDelims(start: number, canSplitWord: boolean): {
            can_open: boolean,
            can_close: boolean,
            length: number
        };
    }

    interface StateBlock extends State {
        /** Used in lists to determine if they interrupt a paragraph */
        parentType: 'blockquote' | 'list' | 'root' | 'paragraph' | 'reference';

        eMarks: number[];
        bMarks: number[];
        bsCount: number[];
        sCount: number[];
        tShift: number[];

        blkIndent: number;
        ddIndent: number;

        line: number;
        lineMax: number;
        tight: boolean;
    }
}
