// Type definitions for Cheerio v0.17.0
// Project: https://github.com/cheeriojs/cheerio
// Definitions by: Bret Little <https://github.com/blittle>, VILIC VANE <http://vilic.info>, Wayne Maurer <https://github.com/wmaurer>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Cheerio {
    // Document References
    // Cheerio https://github.com/cheeriojs/cheerio
    // JQuery http://api.jquery.com

    [index: number]: CheerioElement;
    length: number;

    // Attributes

    attr(name: string): string;
    attr(name: string, value: any): Cheerio;

    data(): any;

    val(): string;
    val(value: string): Cheerio;

    removeAttr(name: string): Cheerio;

    hasClass(className: string): boolean;
    addClass(classNames: string): Cheerio;

    removeClass(): Cheerio;
    removeClass(className: string): Cheerio;
    removeClass(func: (index: number, className: string) => string): Cheerio;

    toggleClass(className: string): Cheerio;
    toggleClass(className: string, toggleSwitch: boolean): Cheerio;
    toggleClass(toggleSwitch?: boolean): Cheerio;
    toggleClass(func: (index: number, className: string, toggleSwitch: boolean) => string, toggleSwitch?: boolean): Cheerio;

    is(selector: string): boolean;
    is(element: CheerioElement): boolean;
    is(element: CheerioElement[]): boolean;
    is(selection: Cheerio): boolean;
    is(func: (index: number, element: CheerioElement) => boolean): boolean;

    // Traversing

    find(selector: string): Cheerio;

    parent(selector?: string): Cheerio;
    parents(selector?: string): Cheerio;
    parentsUntil(selector?: string, filter?: string): Cheerio;
    parentsUntil(element: CheerioElement, filter?: string): Cheerio;
    parentsUntil(element: Cheerio, filter?: string): Cheerio;

    closest(selector: string): Cheerio;

    next(selector?: string): Cheerio;
    nextAll(): Cheerio;

    nextUntil(selector?: string, filter?: string): Cheerio;
    nextUntil(element: CheerioElement, filter?: string): Cheerio;
    nextUntil(element: Cheerio, filter?: string): Cheerio;

    prev(selector?: string): Cheerio;
    prevAll(): Cheerio;

    prevUntil(selector?: string, filter?: string): Cheerio;
    prevUntil(element: CheerioElement, filter?: string): Cheerio;
    prevUntil(element: Cheerio, filter?: string): Cheerio;

    slice(start: number, end?: number): Cheerio;

    siblings(selector?: string): Cheerio;

    children(selector?: string): Cheerio;

    each(func: (index: number, element: CheerioElement) => any): Cheerio;
    map(func: (index: number, element: CheerioElement) => any): Cheerio;

    filter(selector: string): Cheerio;
    filter(selection: Cheerio): Cheerio;
    filter(element: CheerioElement): Cheerio;
    filter(elements: CheerioElement[]): Cheerio;
    filter(func: (index: number) => boolean): Cheerio;

    first(): Cheerio;
    last(): Cheerio;

    eq(index: number): Cheerio;

    get(): Document[];
    get(index: number): Document;

    end(): Cheerio;

    add(selectorOrHtml: string): Cheerio;
    add(selector: string, context: Document): Cheerio;
    add(element: CheerioElement): Cheerio;
    add(elements: CheerioElement[]): Cheerio;
    add(selection: Cheerio): Cheerio;

    // Manipulation

    append(content: string, ...contents: any[]): Cheerio;
    append(content: Document, ...contents: any[]): Cheerio;
    append(content: Document[], ...contents: any[]): Cheerio;
    append(content: Cheerio, ...contents: any[]): Cheerio;

    prepend(content: string, ...contents: any[]): Cheerio;
    prepend(content: Document, ...contents: any[]): Cheerio;
    prepend(content: Document[], ...contents: any[]): Cheerio;
    prepend(content: Cheerio, ...contents: any[]): Cheerio;

    after(content: string, ...contents: any[]): Cheerio;
    after(content: Document, ...contents: any[]): Cheerio;
    after(content: Document[], ...contents: any[]): Cheerio;
    after(content: Cheerio, ...contents: any[]): Cheerio;

    before(content: string, ...contents: any[]): Cheerio;
    before(content: Document, ...contents: any[]): Cheerio;
    before(content: Document[], ...contents: any[]): Cheerio;
    before(content: Cheerio, ...contents: any[]): Cheerio;

    remove(selector?: string): Cheerio;

    replaceWith(content: string): Cheerio;
    replaceWith(content: CheerioElement): Cheerio;
    replaceWith(content: CheerioElement[]): Cheerio;
    replaceWith(content: Cheerio): Cheerio;

    empty(): Cheerio;

    html(): string;
    html(html: string): Cheerio;

    text(): string;
    text(text: string): Cheerio;

    css(propertyName: string): string;
    css(propertyNames: string[]): string[];
    css(propertyName: string, value: string): Cheerio;
    css(propertyName: string, value: number): Cheerio;
    css(propertyName: string, func: (index: number, value: string) => string): Cheerio;
    css(propertyName: string, func: (index: number, value: string) => number): Cheerio;
    css(properties: Object): Cheerio;

    // Rendering

    // Miscellaneous

    clone(): Cheerio;

    // Not Documented

    toArray(): CheerioElement[];
}

interface CheerioOptionsInterface {
    // Document References
    // Cheerio https://github.com/cheeriojs/cheerio
    // HTMLParser2 https://github.com/fb55/htmlparser2/wiki/Parser-options
    // DomHandler https://github.com/fb55/DomHandler

    xmlMode?: boolean;
    decodeEntities?: boolean;
    lowerCaseTags?: boolean;
    lowerCaseAttributeNames?: boolean;
    recognizeCDATA?: boolean;
    recognizeSelfClosing?: boolean;
    normalizeWhitespace?: boolean;
}

interface CheerioStatic {
    // Document References
    // Cheerio https://github.com/cheeriojs/cheerio
    // JQuery http://api.jquery.com

    (selector: string): Cheerio;
    (selector: string, context: string): Cheerio;
    (selector: string, context: CheerioElement): Cheerio;
    (selector: string, context: CheerioElement[]): Cheerio;
    (selector: string, context: Cheerio): Cheerio;
    (selector: string, context: string, root: string): Cheerio;
    (selector: string, context: CheerioElement, root: string): Cheerio;
    (selector: string, context: CheerioElement[], root: string): Cheerio;
    (selector: string, context: Cheerio, root: string): Cheerio;
    (selector: any): Cheerio;

    xml(): string;
    root(): Cheerio;
    contains(container: CheerioElement, contained: CheerioElement): boolean;
    parseHTML(data: string, context?: Document, keepScripts?: boolean): Document[];

    html(options?: CheerioOptionsInterface): string;
    html(selector: string, options?: CheerioOptionsInterface): string;
    html(element: Cheerio, options?: CheerioOptionsInterface): string;
    html(element: CheerioElement, options?: CheerioOptionsInterface): string;
}

interface CheerioElement {
    // Document References
    // Node Console

    type: string;
    name: string;
    attribs: Object;
    children: CheerioElement[];
    next: CheerioElement;
    prev: CheerioElement;
    parent: CheerioElement;
    root: CheerioElement;
}

declare module "cheerio" {
    export function load(html: string, options?: CheerioOptionsInterface): CheerioStatic;
}
