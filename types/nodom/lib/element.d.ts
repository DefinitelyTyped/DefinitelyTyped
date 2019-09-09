import { Attributes } from './attributes';
import { ClassList } from './classlist';
import { Dataset } from './dataset';
import { Node } from './node';
import { CSSStyleDeclaration } from './style';

export class HTMLElement extends Node {
    attributes: Attributes;
    readonly classList: ClassList;
    className: string;
    dataset: Dataset;
    innerHTML: string;
    readonly isVoidEl: boolean;
    readonly nextSibling: Node | undefined;
    nodeType: number;
    readonly outerHTML: string;
    style: CSSStyleDeclaration;
    tagName: string;
    textContent: string;

    constructor(options: { [key: string]: string });

    appendChild<T extends Node>(child: T): T | undefined;

    insertBefore<T extends Node>(child: T, before: Node | null): T | undefined;

    removeChild(child: Node): void;

    replaceChild(child: Node, replace: Node): void;

    getAttribute(attr: string): string | undefined;

    setAttribute(attr: string, value: string): void;

    getElementsByClassName(classNames: string): HTMLElement[];

    getElementsByTagName(tagName: string): HTMLElement[];

    matches(query: string): boolean;

    querySelector(selectors: string): HTMLElement | null;

    querySelectorAll(selectors: string): HTMLElement[];

    addEventListener(): void;

    removeEventListener(): void;

    blur(): void;

    click(): void;

    focus(): void;

    render(inner?: boolean): string;
}
