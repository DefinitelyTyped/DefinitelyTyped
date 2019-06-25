export function parseHTML(html: string): Selection;

// Selection
export abstract class Selection {
    protected __brand: never;
    attr(name: string): string | undefined;
    children(selector?: string): Selection;
    closest(selector: string): Selection;
    contents(): Selection;
    data(key?: string): string | undefined;
    each(handler: Handler): void;
    eq(index: number): Selection;
    filter(selector: string | Tester | Selection): Selection;
    find(selector: string): Selection;
    first(): Selection;
    get(index: number): Element;
    has(selector: string): Selection;
    html(): string | undefined;
    is(selector: string | Tester | Selection): Selection;
    last(): Selection;
    map(mapper: Mapper): unknown[];
    next(selector?: string): Selection;
    nextAll(selector?: string): Selection;
    nextUntil(selector?: string): Selection;
    not(selector: string | Tester): Selection;
    parent(selector?: string): Selection;
    parents(selector?: string): Selection;
    parentsUntil(selector?: string): Selection;
    prev(selector?: string): Selection;
    prevAll(selector?: string): Selection;
    prevUntil(selector?: string): Selection;
    serialize(): string;
    serializeArray(): FormValue[];
    serializeObject(): { [name: string]: string };
    size(): number;
    slice(start: number, end?: number): Selection;
    text(): string;
    toArray(): Selection[];
    val(): string | undefined;
}
export interface FormValue {
    name: string;
    value: string;
}
export interface Tester {
    (index: number, element: Element): boolean;
}
export interface Handler {
    (index: number, element: Element): void;
}
export interface Mapper {
    (index: number, element: Element): unknown;
}

// Attribute
export abstract class Attribute {
    protected __brand: never;
    name: string;
    ownerElement: Element;
    value: string;
    localName(): string;
    namespaceURI(): string;
    prefix(): string;
}

// NodeType
export enum NodeType {
    ElementNode = 1,
    TextNode = 3,
    CommentNode = 8,
    DocumentNode = 9,
    DoctypeNode = 10,
}

// Element
export abstract class Element {
    protected __brand: never;
    attributes(): { [name: string]: Attribute };
    childElementCount(): number;
    childNodes(): Element[];
    children(): Element[];
    classList(): string[];
    className(): string | undefined;
    contains(element: Element): boolean;
    firstChild(): Element | undefined;
    firstElementChild(): Element | undefined;
    getAttribute(name: string): string | undefined;
    getAttributeNode(name: string): Attribute | undefined;
    getElementsByClassName(name: string): Element[];
    getElementsByTagName(name: string): Element[];
    hasAttribute(name: string): boolean;
    hasAttributes(): boolean;
    hasChildNodes(): boolean;
    id(): string;
    innerHTML(): string | undefined;
    isDefaultNamespace(): boolean;
    isEqualNode(element: Element): boolean;
    isSameNode(element: Element): boolean;
    lang(): string | undefined;
    lastChild(): Element | undefined;
    lastElementChild(): Element | undefined;
    matches(selector: string): boolean;
    namespaceURI(): string;
    nextElementSibling(): Element | undefined;
    nextSibling(): Element | undefined;
    nodeName(): string;
    nodeType(): NodeType | undefined;
    nodeValue(): string | undefined;
    ownerDocument(): Element | undefined;
    parentElement(): Element | undefined;
    parentNode(): Element | undefined;
    previousElementSibling(): Element | undefined;
    previousSibling(): Element | undefined;
    querySelector(selector: string): Element | undefined;
    querySelectorAll(selector: string): Element[];
    textContent(): string;
    toString(): string;
}
export abstract class HrefElement extends Element {
    protected __brand: never;
    hash(): string;
    host(): string;
    hostname(): string;
    origin(): string;
    password(): string;
    pathname(): string;
    protocol(): string;
    post(): string;
    relList(): string[];
    search(): string;
    text(): string;
    username(): string;
}
