// Type definitions for dom4 v2.0
// Project: https://github.com/WebReflection/dom4
// Definitions by: Adi Dahiya <https://github.com/adidahiya>, Gilad Gray <https://github.com/giladgray>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * https://dom.spec.whatwg.org/#parentnode
 */
interface ParentNode {
    /**
     * Returns the child elements.
     */
    readonly children: HTMLCollection;

    /**
     * Inserts `nodes` after the last child of this node, while replacing strings with equivalent `Text` nodes.
     */
    append(...nodes: Array<Node | string>): void;

    /**
     * Inserts `nodes` before the first child of this node, while replacing strings with equivalent `Text` nodes.
     */
    prepend(...nodes: Array<Node | string>): void;
}

/**
 * https://dom.spec.whatwg.org/#childnode
 */
interface ChildNode {
    /**
     * Inserts `nodes` just after this node, while replacing strings with equivalent `Text` nodes.
     */
    after(...nodes: Array<Node | string>): void;

    /**
     * Inserts `nodes` just before this node, while replacing strings with equivalent `Text` nodes.
     */
    before(...nodes: Array<Node | string>): void;

    /**
     * Replaces this node with `nodes`, while replacing strings in nodes with equivalent Text nodes.
     */
    replaceWith(...nodes: Array<Node | string>): void;

    /**
     * Removes this node.
     */
    remove(): void;
}

interface Element extends ParentNode {
    /**
     * Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.
     */
    closest(selectors: string): Element | null;

    /**
     * Returns true if matching selectors against element’s root yields element, and false otherwise.
     */
    matches(selectors: string): boolean;
}

interface Elements extends ParentNode, Array<Element> {
}

interface Document extends ParentNode {
}

interface DocumentFragment extends ParentNode {
}
