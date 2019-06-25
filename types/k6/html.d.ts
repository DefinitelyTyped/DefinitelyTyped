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

// Element
export abstract class Element {
    protected __brand: never;
}
