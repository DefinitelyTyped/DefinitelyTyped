// Type definitions for undom 0.4
// Project: https://github.com/developit/undom
// Definitions by: Jakub Jirutka <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference lib="dom" />

export interface Attr {
    ns: string | null;
    key: string;
    value: string;
}

export interface Event {
    readonly type: string;
    readonly bubbles: boolean;
    readonly cancelable: boolean;

    stopPropagation(): void;
    stopImmediatePropagation(): void;
    preventDefault(): void;
}

export interface Node {
    readonly nextSibling: Node | undefined;
    readonly previousSibling: Node | undefined;
    readonly firstChild: Node | undefined;
    readonly lastChild: Node | undefined;

    appendChild(child: Node): Node;
    insertBefore(child: Node, ref?: Node): Node;
    replaceChild(child: Node, ref: Node): Node | undefined;
    removeChild(child: Node): Node;
    remove(): void;
}

export interface Text extends Node {
    textContent: string;
}

export interface Element extends Node {
    attributes: Attr[];
    className: string | undefined;
    readonly children: Element[];
    cssText: string | undefined;
    style: {[k: string]: string};

    setAttribute(key: string, value: string): void;
    getAttribute(key: string): string | undefined;
    removeAttribute(key: string): void;
    setAttributeNS(ns: string | null | undefined, name: string, value: string): void;
    getAttributeNS(ns: string | null | undefined, name: string): string | undefined;
    removeAttributeNS(ns: string | null | undefined, name: string): void;
    addEventListener(type: string, handler: EventListenerOrEventListenerObject): void;
    removeEventListener(type: string, handler: EventListenerOrEventListenerObject): void;
    dispatchEvent(event: Event): boolean;
}

export interface Document extends Element {
    createElement(type: string): Element;
    createElementNS(ns: string | null, type: string): Element;
    createTextNode(text: string): Text;
}

declare function createDocument(): Document;

export default createDocument;
