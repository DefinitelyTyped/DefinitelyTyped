// Type definitions for xmldoc 1.1
// Project: https://www.npmjs.com/package/xmldoc
// Definitions by:  Xavier Stouder <https://github.com/Xstoudi>, Andrew Sheehan <https://github.com/ajsheehan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped): // TypeScript Version: 2.1

export class XmlDocument extends XmlElement {
    constructor(xmlString: string);

    doctype: string;
}

export interface XmlNode {
    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlElement implements XmlNode {
    constructor(tag: XmlTag);

    name: string;
    attr: XmlAttributes;
    val: string;
    children: XmlNode[];
    firstChild: XmlNode;
    lastChild: XmlNode;

    eachChild(func: (child: XmlElement, index?: number, array?: XmlElement[]) => void): void;
    childNamed(name: string): XmlElement;
    childrenNamed(name: string): XmlElement[];
    childWithAttribute(name: string, value?: string): XmlElement;
    descendantWithPath(path: string): XmlElement;
    valueWithPath(path: string): string;
    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlTextNode implements XmlNode {
    constructor(text: string);

    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlCDataNode implements XmlNode {
    constructor(cdata: string);

    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlCommentNode implements XmlNode {
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
