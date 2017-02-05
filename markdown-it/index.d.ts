// Type definitions for markdown-it
// Project: https://github.com/markdown-it/markdown-it
// Definitions by: York Yao <https://github.com/plantain-00/>, Robert Coie <https://github.com/rapropos/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

declare module MarkdownIt {
    interface MarkdownIt {
        render(md: string, env?: any): string;
        renderInline(md: string, env?: any): string;
        parse(src: string, env: any): Token[];
        parseInline(src: string, env: any): Token[];
        use(plugin: any, ...params: any[]): MarkdownIt;
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

    interface Rule {
        (state: any): void;
    }

    interface Ruler {
        after(afterName: string, ruleName: string, rule: Rule, options?: any): void;
        at(name: string, rule: Rule, options?: any): void;
        before(beforeName: string, ruleName: string, rule: Rule, options?: any): void;
        disable(rules: string | string[], ignoreInvalid?: boolean): string[];
        enable(rules: string | string[], ignoreInvalid?: boolean): string[];
        enableOnly(rule: string, ignoreInvalid?: boolean): void;
        getRules(chain: string): Rule[];
        push(ruleName: string, rule: Rule, options?: any): void;
    }

    interface ParserBlock {
        parse(src: string, md: MarkdownIt, env: any, outTokens: Token[]): void;
        ruler: Ruler;
    }

    interface Core {
        process(state: any): void;
        ruler: Ruler;
    }

    interface ParserInline {
        parse(src: string, md: MarkdownIt, env: any, outTokens: Token[]): void;
        ruler: Ruler;
        ruler2: Ruler;
    }
}
