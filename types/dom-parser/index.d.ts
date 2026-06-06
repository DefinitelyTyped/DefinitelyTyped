declare class DomParser {
    constructor();

    parseFromString(html: string): DomParser.Dom;
}

declare namespace DomParser {
    interface Dom extends DOMSearchable {
        getElementsByClassName(className: string): Node[] | null;
        getElementsByTagName(tagName: string): Node[] | null;
        getElementsByName(name: string): Node[] | null;
        getElementById(id: string): Node | null;

        getElementsByAttribute(attr: string, value: string): Node[] | null;
    }

    interface Node extends DOMSearchable {
        nodeType: NodeType;
        nodeName: string;
        childNodes: Node[];
        firstChild: Node | null;
        lastChild: Node | null;
        parentNode: Node | null;
        attributes: string[];
        innerHTML: string;
        outerHTML: string;
        textContent: string;

        getElementsByClassName(className: string): Node[] | null;
        getElementsByTagName(tagName: string): Node[] | null;
        getElementsByName(name: string): Node[] | null;
        getElementById(id: string): Node | null;

        getAttribute(name: string): string | null;
    }

    interface DOMSearchable {
        getElementsByClassName(className: string): Node[] | null;
        getElementsByTagName(tagName: string): Node[] | null;
        getElementsByName(name: string): Node[] | null;
        getElementById(id: string): Node | null;
    }

    enum NodeType {
        ELEMENT_NODE = 1,
        TEXT_NODE = 3,
    }
}

export = DomParser;
