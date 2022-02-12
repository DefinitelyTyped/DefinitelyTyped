import Element, { Node } from './Element';

export default class DOMElement extends Element {
    static createElement(name: string, attrs?: string | { [attrName: string]: any }, ...children: Node[]): DOMElement;

    nodeType: 1;
    nodeName: string;

    readonly localName: ReturnType<typeof Element.prototype.getName>;
    readonly namespaceURI: ReturnType<typeof Element.prototype.getNS>;
    readonly parentNode: typeof Element.prototype.parent;
    readonly childNodes: typeof Element.prototype.children;
    textContent: string;

    getElementsByTagName: typeof Element.prototype.getChildren;
    getAttribute: typeof Element.prototype.getAttr;
    setAttribute(attr: string, val: any): void;
    getAttributeNS(ns: string, name: string): any;
    setAttributeNS(ns: string, name: string, value: any): void;
    removeAttribute(name: string): void;
    removeAttributeNS(ns: string, name: string): void;
    appendChild(child: Node): void;
    removeChild(child: Node): void;
}
