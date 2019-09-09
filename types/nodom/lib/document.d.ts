import { HTMLElement } from './element';
import { TextNode } from './textnode';

export class Document {
    readonly nodeType: number;
    body: HTMLElement;
    documentElement: HTMLElement;
    head: HTMLElement;
    implementation: {
        createHTMLDocument(textContent: string): Document;
        hasFeature(feature: string, version?: string): boolean;
    };

    createElement(tagName: string): HTMLElement;

    createElementNS(ns: string | null, tagName: string): HTMLElement;

    createDocumentFragment(): HTMLElement;

    createTextNode(text: string): TextNode;

    getElementsByTagName(tagName: string): HTMLElement[];

    getElementsByClassName(classNames: string): HTMLElement[];

    getElementById(id: string): HTMLElement | null;

    querySelector(selectors: string): HTMLElement | null;

    querySelectorAll(selectors: string): HTMLElement[];
}
