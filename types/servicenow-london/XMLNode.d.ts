interface XMLNode {
    getLastChild(): XMLNode;
    getFirstChild(): XMLNode;
    getNodeValue(): string;
    getNodeName(): string;
    hasAttribute(name: string): boolean;
    getAttribute(attribute: string): string;
    getChildNodeIterator(): XMLNodeIterator;
    getTextContent(): string;
    toString(): string;
}
