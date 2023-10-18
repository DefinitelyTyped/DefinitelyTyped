/// <reference types="node" />

interface Options {
    debug?: boolean;
}

interface Attribute {
    namespaceURI: string;
    nodeType: number;
    nodeName: string;
    name: string;
    value: any;
    typedValue: {
        value: number;
        type: string;
        rawType: number;
    };
}

interface ChildNode {
    namespaceURI: string;
    nodeType: number;
    nodeName: string;
    attributes: Attribute[];
    childNodes: ChildNode[];
}

interface Document {
    attributes: Attribute[];
    childNodes: ChildNode[];
    namespaceURI: string | null;
    nodeName: string | null;
    nodeType: number;
}

declare class BinaryXmlParser {
    constructor(buffer: Buffer, options?: Options);

    parse(): Document;
}

declare const BinaryXML: typeof BinaryXmlParser;
export = BinaryXML;
