// JSBox Xml API TypeScript Declaration

declare namespace XmlTypes {
    interface ParseOptions {
        string?: string;
        data?: NSData;
        mode?: "xml" | "html";
    }

    interface XMLDocument {
        version: string;
        rootElement: XMLElement;
        enumerate(options: {
            xPath?: string;
            selector?: string;
            handler: (element: XMLElement, idx: number) => void;
        }): void;
        value(options: { attribute: string; namespace?: string }): string;
        definePrefix(options: DefinePrefixOptions): void;
    }

    interface XMLElement {
        node: string;
        document: XMLDocument;
        blank: boolean;
        namespace: string;
        tag: string;
        lineNumber: number;
        attributes: { [key: string]: string };
        parent: XMLElement;
        previous: XMLElement;
        next: XMLElement;
        string: string;
        number: number;
        date: Date;

        firstChild(options: { xPath?: string; selector?: string; tag?: string; namespace?: string }): XMLElement;
        children(options?: { tag?: string; namespace?: string }): XMLElement[];
        enumerate(options: {
            xPath?: string;
            selector?: string;
            handler: (element: XMLElement, idx: number) => void;
        }): void;
        value(options: { attribute: string; namespace?: string }): string;
    }

    interface DefinePrefixOptions {
        prefix: string;
        namespace: string;
    }
}

interface JBXml {
    parse(options: XmlTypes.ParseOptions): XmlTypes.XMLDocument;
}

declare const $xml: JBXml;
