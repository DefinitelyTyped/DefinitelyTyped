// Type definitions for turndown 5.0
// Project: https://github.com/domchristie/turndown
// Definitions by: Sergey Zhidkov <https://github.com/sergey-zhidkov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare class TurndownService {
    constructor(options?: TurndownService.Options)

    addRule(key: string, rule: TurndownService.Rule): this;
    keep(filter: TurndownService.Filter): this;
    remove(filter: TurndownService.Filter): this;
    use(plugins: TurndownService.Plugin | TurndownService.Plugin[]): this;
    escape(str: string): string;

    turndown(html: string | TurndownService.Node): string;

    options: TurndownService.Options;
    rules: TurndownService.Rules;
}

export = TurndownService;

declare namespace TurndownService {
    interface Options {
        headingStyle?: "setext" | "atx";
        hr?: string;
        br?: string;
        bulletListMarker?: "-" | "+" | "*";
        codeBlockStyle?: "indented" | "fenced";
        emDelimiter?: "_" | "*";
        fence?: "```" | "~~~";
        strongDelimiter?: "__" | "**";
        linkStyle?: "inlined" | "referenced";
        linkReferenceStyle?: "full" | "collapsed" | "shortcut";

        keepReplacement?: ReplacementFunction;
        blankReplacement?: ReplacementFunction;
        defaultReplacement?: ReplacementFunction;
    }

    interface Rule {
        filter: Filter;
        replacement?: ReplacementFunction;
    }

    interface Rules {
        options: Options;
        array: Rule[];

        blankRule: ReplacementFunction;
        defaultRule: ReplacementFunction;
        keepReplacement: ReplacementFunction;

        add(key: Filter, rule: Rule): void;
        forEach(callback: (rule: Rule, index: number) => any): void;
        forNode(node: Node): Rule;
        keep(filter: Filter): void;
        remove(filter: Filter): void;
    }

    type Plugin = (service: TurndownService) => void;
    type Node = HTMLElement | Document | DocumentFragment;

    type Filter = TagName | TagName[] | FilterFunction;
    type FilterFunction = (node: HTMLElement, options: Options) => boolean;

    type ReplacementFunction = (
        content: string,
        node: Node,
        options: Options,
    ) => string;

    type TagName = keyof HTMLElementTagNameMap;
}
