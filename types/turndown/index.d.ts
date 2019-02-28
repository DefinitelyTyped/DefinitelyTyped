// Type definitions for turndown 5.0
// Project: https://github.com/domchristie/turndown#readme
// Definitions by: Scott Jones <https://github.com/scottdj92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "turndown" {
    export default class TurndownService {
        constructor(options?: Options)

        public addRule(key: string, rule: Rule): this
        public keep(filter: Filter): this
        public remove(filter: Filter): this
        public use(plugins: PluginFunc | PluginFunc[]): this

        public turndown(html: string | (Node | Document | DocumentFragment)): string
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

    type Filter = keyof HTMLElementTagNameMap | Array<keyof HTMLElementTagNameMap> | FilterFunc;

    type FilterFunc = (node: HTMLElement, options: Options) => boolean;

    type RuleReplacementFunc = (
        content: string,
        node: HTMLElement,
        options: Options
    ) => string;

    type PluginFunc = (service: TurndownService) => TurndownService;
}
