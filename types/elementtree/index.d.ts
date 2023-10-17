export interface ElementTreeWriteOptions {
    default_namespace?: string | undefined;
    encoding?: string | undefined; // default is 'utf-8'
    indent?: number | undefined;
    method?: "xml" | "text" | undefined; // default is 'xml'
    xml_declaration?: boolean | undefined; // on by default
}

export class ElementTree {
    constructor(element: Element);

    getroot(): Element;
    _setroot(element: Element): void;

    parse(source: string): Element;
    find(path: string): Element | null;
    findtext(path: string): ElementText | undefined;
    findall(path: string): Element[];
    write(options?: ElementTreeWriteOptions): string;
}

export interface Attributes {
    [key: string]: string | undefined;
}

export type ElementTag = typeof Comment | typeof CData | typeof ProcessingInstruction | string;

export type ElementText = { toString(): string } | string;

export interface Element {
    tag: ElementTag;
    attrib: Attributes;
    text: ElementText | null;
    tail: string | null;

    toString(): string;
    makeelement(tag: ElementTag, attrib?: Attributes): Element;
    len(): number;

    getItem(index: number): Element | undefined;
    setItem(index: number, element: Element): void;
    delItem(index: number): void;
    getSlice(start: number, stop: number): Element[];
    setSlice(start: number, stop: number, elements: ReadonlyArray<Element>): void;
    delSlice(start: number, stop: number): void;

    append(element: Element): void;
    extend(elements: ReadonlyArray<Element>): void;
    insert(index: number, element: Element): void;
    remove(element: Element): void;
    getchildren(): Element[];

    find(path: string): Element | null;
    findtext(path: string): ElementText | undefined;
    findall(path: string): Element[];

    clear(): void;

    get(k: string): string | undefined;
    set(k: string, v?: string): string;
    keys(): string[];
    items(): Array<[string, string]>;
}

export class QName {
    text: string;

    constructor(text_or_uri: string, tag?: string);
    toString(): string;
}

// special tags
export function CData(text?: ElementText): Element;
export function Comment(text?: ElementText): Element;
export function ProcessingInstruction(target: ElementText, text?: ElementText): Element;

export function XML(data: string): Element;
export function Element(ElementTag: string, attrib?: Attributes): Element;
export function SubElement(parent: Element, ElementTag: string, attrib?: Attributes): Element;

export function parse(source: string): ElementTree;
export function register_namespace(prefix: string, uri: string): void;
export function tostring(element: Element, options: ElementTreeWriteOptions): string;
