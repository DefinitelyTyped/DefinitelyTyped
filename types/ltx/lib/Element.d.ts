/**
 * Element
 *
 * Attributes are in the element.attrs object. Children is a list of
 * either other Elements or Strings for text content.
 **/
export declare class Element {
    name: string;
    parent: Element;
    children: Element[];
    attrs: any;

    constructor(name: string, attrs?: any);

    /**
     * if (element.is('message', 'jabber:client')) ...
     **/
    is(name: string, xmlns?: any): boolean;

    /**
     * without prefix.
     */
    getName(): string;

    /**
     * retrieves the namespace of the current element, upwards recursively
     **/
    getNS(): any;

    /**
     * find the namespace to the given prefix, upwards recursively
     **/
    findNS(prefix: string): any;

    /**
     * Recursiverly gets all xmlns defined, in the form of {url:prefix}
     **/
    getXmlns(): any;

    setAttrs(attrs: any): void;

    /**
     * xmlns can be null, returns the matching attribute.
     **/
    getAttr(name: string, xmlns?: any): any;

    /**
     * xmlns can be null
     **/
    getChild(name: string, xmlns?: any): Element;

    /**
     * xmlns can be null
     **/
    getChildren(name: string, xmlns?: any): Element[];

    /**
     * xmlns and recursive can be null
     **/
    getChildByAttr(attr: any, val: any, xmlns?: any, recursive?: any): Element;


    /**
     * xmlns and recursive can be null
     **/
    getChildrenByAttr(attr: any, val: any, xmlns?: any, recursive?: any): Element[];

    getText(): string;

    getChildText(name: string, xmlns: any): string;

    /**
     * Return all direct descendents that are Elements.
     * This differs from `getChildren` in that it will exclude text nodes,
     * processing instructions, etc.
     */
    getChildElements(): Element[];

    /** returns uppermost parent */
    root(): Element;

    tree(): Element;

    /** just parent or itself */
    up(): Element;

    /** create child node and return it */
    c(name: string, attrs?: any): Element;

    /** add text node and return element */
    t(text: string): Element;

    /**
     * Either:
     *   el.remove(childEl)
     *   el.remove('author', 'urn:...')
     */
    remove(el: Element, xmlns?: any): Element;

    clone(): Element;

    text(val: string): string;

    attr(attr: any, val: any): any;

    toString(): string;

    toJSON(): any;

    write(writer: any): void;

    nameEquals(el: Element): boolean;

    attrsEquals(el: Element): boolean;

    childrenEquals(el: Element): boolean;

    equals(el: Element): boolean;
}
