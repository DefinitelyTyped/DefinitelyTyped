import { LinkifyIt } from 'linkify-it'

import State = require('./rules_core/state_core');
import StateBlock = require('./rules_block/state_block');
import StateInline = require('./rules_inline/state_inline');

import Core = require('./parser_core');
import ParserBlock = require('./parser_block');
import ParserInline = require('./parser_inline');

import Renderer = require('./renderer');
import Ruler = require('./ruler');
import Token = require('./token');

export = MarkdownIt;
export as namespace markdownit;

declare const MarkdownIt: MarkdownItConstructor;

interface MarkdownItConstructor {
    new (): MarkdownIt;
    new (presetName: "commonmark" | "zero" | "default", options?: MarkdownIt.Options): MarkdownIt;
    new (options: MarkdownIt.Options): MarkdownIt;
    (): MarkdownIt;
    (presetName: "commonmark" | "zero" | "default", options ?: MarkdownIt.Options): MarkdownIt;
    (options: MarkdownIt.Options): MarkdownIt;
}

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
    set(options: MarkdownIt.Options): MarkdownIt;
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

declare module MarkdownIt {
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

    interface Rule<S extends State = State> {
        (state: S, silent?: boolean): boolean | void;
    }

    interface RuleInline extends Rule<StateInline> {}
    interface RuleBlock extends Rule<StateBlock> {}

    interface RulerInline extends Ruler<StateInline> {}
    interface RulerBlock extends Ruler<StateBlock> {}

    type TokenRender = (tokens: Token[], index: number, options: any, env: any, self: Renderer) => string;

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
}
