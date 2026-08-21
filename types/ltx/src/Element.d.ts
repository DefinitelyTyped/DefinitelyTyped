export type Node = Element | string;

/**
 * Element
 *
 * Attributes are in the element.attrs object. Children is a list of
 * either other Elements or Strings for text content.
 */
export default class Element {
    name: string;
    parent: Element | null;
    children: Node[];
    attrs: { [attrName: string]: any };

    constructor(name: string, attrs?: string | { [attrName: string]: any });

    /**
     * @example
     * if (element.is('message', 'jabber:client')) {
     *     ...
     * }
     */
    is(name: string, xmlns?: string): boolean;

    /**
     * Get name without prefix.
     */
    getName(): string;

    /**
     * Retrieves the namespace of the current element, upwards recursively
     */
    getNS(): string | undefined;

    /**
     * find the namespace to the given prefix, upwards recursively
     */
    findNS(prefix?: string): string | undefined;

    /**
     * Recursiverly gets all xmlns defined, in the form of {url:prefix}
     */
    getXmlns(): { [key: string]: string };

    setAttrs(attrs: string | { [attrName: string]: any }): void;

    /**
     * returns the matching attribute.
     */
    getAttr(name: string, xmlns?: string): any;

    getChild(name: string, xmlns?: string): Element | undefined;

    getChildren(name: string, xmlns?: string): Element[];

    getChildByAttr(attr: string, val: any, xmlns?: string, recursive?: boolean): Element | undefined;

    getChildrenByAttr(attr: string, val: any, xmlns?: string, recursive?: boolean): Element[];

    getChildrenByFilter(filter: (child: Node) => boolean, recursive?: boolean): Element[];

    getText(): string;

    getChildText(name: string, xmlns?: string): string | null;

    /**
     * Return all direct descendents that are Elements.
     * This differs from `getChildren` in that it will exclude text nodes,
     * processing instructions, etc.
     */
    getChildElements(): Element[];

    /** returns uppermost parent */
    root(): Element | this;

    tree(): Element | this;

    /** just parent or itself */
    up(): Element | this;

    /** create child node and return it */
    c(name: string, attrs?: { [key: string]: any }): Element;

    cnode<T extends Node>(child: T): T;

    append(...nodes: Node[]): void;

    prepend(...nodes: Node[]): void;

    /** add text node and return element */
    t(text: string): this;

    /**
     * Either:
     *   el.remove(childEl)
     *   el.remove('author', 'urn:...')
     */
    remove(el: Node): this;
    remove(el: string, xmlns?: string): this;

    text(val: string): this;
    text(): string;

    attr(attr: string, val: any): this;
    attr(attr: string): any;

    toString(): string;

    write(writer: (part: string) => void): void;
}
