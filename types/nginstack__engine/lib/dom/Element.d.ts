export = Element;
declare function Element(): void;
declare class Element {
    tagName: string;
    attributes: NamedNodeMap;
    getAttribute(qualifiedName: string): string;
    setAttribute(qualifiedName: string, value: string): void;
    removeAttribute(qualifiedName: string): void;
    getAttributeNode(qualifiedName: string): Attr;
    setAttributeNode(attr: Attr): Attr;
    getElementsByTagName(tagName: string): NodeList;
}
declare namespace Element {
    export { Attr, NamedNodeMap, NodeList };
}
type NamedNodeMap = import('./NamedNodeMap');
type Attr = import('./Attr');
type NodeList = import('./NodeList');
