// Type definitions for Cheerio
// Project: https://github.com/MatthewMueller/cheerio
// Definitions by: Bret Little <https://github.com/blittle>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare interface Cheerio {
    
    addClass(classNames: string): Cheerio;
    hasClass(className: string): bool;
    removeClass(className?: any): Cheerio;

    attr(attributeName: string, value: any): Cheerio;
    attr(attributeName: string): string;
    removeAttr(attributeName: any): Cheerio;

    find(selector: string): Cheerio;

    parent(): Cheerio;

    next(): Cheerio;
    prev(): Cheerio;

    siblings(): Cheerio;

    children(selector?: any): Cheerio;

    each(func: (index: any, elem: any) => Cheerio);

    map(callback: (index: any, domElement: Element) =>any): Cheerio;

    filter(selector: string): Cheerio;
    filter(func: (index: any) =>any): Cheerio;

    first(): Cheerio;
    last(): Cheerio;

    eq(index: number): Cheerio;

    append(...content: any[]): Cheerio;
    prepend(...content: any[]): Cheerio;
    after(...content: any[]): Cheerio;
    before(...content: any[]): Cheerio;
    remove(selector: string): Cheerio;
    replaceWith(content: string): Cheerio;
    empty(): Cheerio;

    html(htmlString: string): Cheerio;
    html(): string;

    text(textString: string): Cheerio;
    text(): string;

    toArray(): any[];

    clone() : Cheerio;
    root() : Cheerio;
    dom(): any;

    contains(container: Element, contained: Element): bool;
    isArray(obj: any): bool;
    inArray(value: any, array: any[], fromIndex?: number): number;
    merge(first: any[], second: any[]): any[];


}

declare interface CheerioOptionsInterface {
    ignoreWhitespace?: bool;
    xmlMode?: bool;
    lowerCaseTags?: bool;
}

declare interface CheerioStatic {
    (...selectors: any[]): Cheerio;
    (): Cheerio;
}

declare module "cheerio" {
    export function load (html : string, options?: CheerioOptionsInterface) : CheerioStatic;
}
