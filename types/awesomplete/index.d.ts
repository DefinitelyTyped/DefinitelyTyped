declare class Awesomplete {
    constructor(input: Element | HTMLElement | string, o?: Awesomplete.Options);
    static all: any[];
    static $$(expr: string | ParentNode, con?: any): NodeList;
    static ITEM: (text: string, input: string) => HTMLElement;
    static $: {
        (expr: string | Element, con?: ParentNode): string | Element;
        regExpEscape(s: { replace(arg0: RegExp, arg1: string): void }): any;
        create(tag: string, o: any): HTMLElement;
        fire(target: EventTarget, type: string, properties: any): any;
        siblingIndex(el: Element): number;
    };
    static FILTER_STARTSWITH: (text: string, input: string) => boolean;
    static FILTER_CONTAINS: (text: string, input: string) => boolean;
    static SORT_BYLENGTH: (left: number | any[], right: number | any[]) => number;
    static REPLACE: (text: string) => void;
    static DATA: (item: Awesomplete.Suggestion) => Awesomplete.Suggestion;
    next: () => void;
    container: HTMLElement;
    select: (selected?: HTMLElement, originalTarget?: HTMLElement) => void;
    previous: () => void;
    index: number;
    opened: number;
    list: string | Element | Awesomplete.Suggestion[];
    input: HTMLElement | string;
    goto: (i: number) => void;
    ul: HTMLElement;
    close: () => void;
    evaluate: () => void;
    selected: boolean;
    open: () => void;
    status: HTMLElement;
    destroy: () => void;
}

declare namespace Awesomplete {
    type Suggestion = string | { label: string | any; value: string | any } | [string, string];
    type SortFunction = (left: number | any[], right: number | any[]) => number;

    interface Options {
        list?: string | string[] | Element | Array<{ label: string; value: any }> | Array<[string, string]> | undefined;
        minChars?: number | undefined;
        maxItems?: number | undefined;
        autoFirst?: boolean | undefined;
        data?(item: Suggestion, input: string): string;
        filter?(text: string, input: string): boolean;
        sort?: boolean | SortFunction | undefined;
        item?(text: string, input: string): HTMLElement;
        replace?(suggestion: string | Suggestion): void;
    }
}

export = Awesomplete;
export as namespace Awesomplete;
