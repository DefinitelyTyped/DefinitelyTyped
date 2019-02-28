// Type definitions for turndown 5.0
// Project: https://github.com/domchristie/turndown#readme
// Definitions by: Scott Jones <https://github.com/scottdj92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export default class TurndownService {
    constructor(options?: Options)

    addRule(key: string, rule: Rule): this;
    keep(filter: Filter): this;
    remove(filter: Filter): this;
    use(plugins: PluginFunc | PluginFunc[]): this;

    turndown(html: string | (Node | Document | DocumentFragment)): string;
}

export interface Options {
    headingStyle?: "setext" | "atx";
    hr?: "***" | "---" | "___";
    bulletListMarker?: "-" | "+" | "*";
    codeBlockStyle?: "indented" | "fenced";
    fence?: "```" | "~~~";
    emDelimiter?: "_" | "*";
    strongDelimiter?: "**" | "__";
    linkStyle?: "inline" | "referenced";
    linkReferenceStyle?: "full" | "collapsed" | "shortcut";

    blankReplacement?: RuleReplacementFunc;
    keepReplacement?: RuleReplacementFunc;
    defaultReplacement?: RuleReplacementFunc;
}

export interface Rule {
    filter: Filter;
    replacement?: RuleReplacementFunc;
}

export type FilterFunc = (node: HTMLElement, options: Options) => boolean;

export type Filter = keyof HTMLElementTagNameMap | Array<keyof HTMLElementTagNameMap> | FilterFunc;

export type RuleReplacementFunc = (
    content: string,
    node: HTMLElement,
    options: Options
) => string;

export type PluginFunc = (service: TurndownService) => TurndownService;
