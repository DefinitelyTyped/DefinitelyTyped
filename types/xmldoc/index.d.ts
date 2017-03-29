// Type definitions for xmldoc 0.5.1
// Project: https://www.npmjs.com/package/xmldoc
// Definitions by: Xavier Stouder <https://github.com/Xstoudi>
// Definitions: https://github.com/DefinitelyTyped/

export class XmlDocument {
    constructor(xmlString: string);

    eachChild(func: (child: XmlElement, index?: number, array?: XmlElement[]) => void): void;
    childNamed(name: string): XmlElement;
    childrenNamed(name: string): XmlElement[];
    childWithAttribute(name: string, value?: string): XmlElement;
    descendantWithPath(path: string): XmlElement;
    valueWithPath(path: string): string;
    toString(opts?: XmlOptions): string;
}
export class XmlElement {
    eachChild(func: (child: XmlElement, index?: number, array?: XmlElement[]) => void): void;
    childNamed(name: string): XmlElement;
    childrenNamed(name: string): XmlElement[];
    childWithAttribute(name: string, value?: string): XmlElement;
    descendantWithPath(path: string): XmlElement;
    valueWithPath(path: string): string;
    toString(opts?: XmlOptions): string;
}

export interface XmlOptions {
    compressed?: boolean;
    trimmed?: boolean;
    preserveWhitespace?: boolean;
}
