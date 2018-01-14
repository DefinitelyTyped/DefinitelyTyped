// Type definitions for xmldoc 1.1
// Project: https://www.npmjs.com/package/xmldoc
// Definitions by:  Xavier Stouder <https://github.com/Xstoudi>
//                  Andrew Sheehan <https://github.com/ajsheehan>
//                  Jordi Bunster <https://github.com/notlaforge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped): // TypeScript Version: 2.1

export class XmlDocument extends XmlElement {
    constructor(xmlString: string);

    doctype: string;
}

export class XmlElement {
    constructor(tag: XmlElement);

    name: string;
    attr: XmlAttributes;
    val: string;
    children: XmlElement[];
    firstChild: XmlElement;
    lastChild: XmlElement;
    line: number;
    column: number;
    position: number;
    startTagPosition: number;

    eachChild(func: (child: XmlElement, index?: number, array?: XmlElement[]) => void): void;
    childNamed(name: string): XmlElement;
    childrenNamed(name: string): XmlElement[];
    childWithAttribute(name: string, value?: string): XmlElement;
    descendantWithPath(path: string): XmlElement;
    valueWithPath(path: string): string;
    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlTextNode {
    constructor(text: string);

    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlCDataNode {
    constructor(cdata: string);

    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlCommentNode {
    constructor(comment: string);

    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export interface XmlOptions {
    compressed?: boolean;
    html?: boolean;
    preserveWhitespace?: boolean;
    trimmed?: boolean;
}

export interface XmlTag {
    name: string;
    attributes: XmlAttributes;
}

export interface XmlAttributes {
    [key: string]: string;
}
