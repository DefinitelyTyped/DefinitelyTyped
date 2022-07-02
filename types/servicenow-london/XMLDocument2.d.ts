declare class XMLDocument2 {
    constructor();
    createElement(name: string): XMLNode;
    createElementWithTextValue(name: string, value: string): XMLNode;
    getDocumentElement(): XMLNode;
    getFirstNode(xpath: string): XMLNode;
    getNextNode(prev: object): XMLNode;
    getNode(xpath: string): XMLNode;
    getNodeText(xpath: string): string;
    parseXML(xmlDoc: string): void;
    setCurrentElement(element: XMLNode): void;
    toString(): string;
}
